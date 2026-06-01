// Build-time docs pipeline: compiles content/docs/*.md to HTML and emits a
// generated TS module. Run via package.json prebuild/predev, or directly:
//   node ./scripts/generate-docs-content.mjs
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { Marked } from "marked";

// Fixed, ordered section list. Key = output map key (the markdown file name).
const SECTIONS = [
  { id: "overview", file: "overview.md" },
  { id: "installation", file: "installation.md" },
  { id: "skills", file: "skills.md" },
  { id: "ultrawork", file: "ultrawork.md" },
  { id: "ulw-loop", file: "ulw-loop.md" },
  { id: "ulw-plan", file: "ulw-plan.md" },
  { id: "start-work", file: "start-work.md" },
];

const DOCS_ROOT = path.resolve(process.cwd(), "content", "docs");
const OUTPUT = path.resolve(process.cwd(), "lib", "docs-content.generated.ts");
const BANNER =
  "// AUTO-GENERATED — do not edit. Run: node ./scripts/generate-docs-content.mjs\n";

// Heading/anchor slug: lowercase, spaces to "-", drop everything that is not
// an alphanumeric or hyphen, then collapse/trim hyphens. Hyphens survive so
// multi-word section ids (ulw-loop, start-work) keep their anchors.
function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Rewrite cross-doc links (./foo.md or bare foo.md) into same-page hash
// anchors (#foo). External, absolute, and in-page (#...) links pass through.
function rewriteDocsLink(href) {
  if (!href) return href;
  const isRelative = href.startsWith("./");
  const isBareMarkdown = /^[^/#?:]+\.md(?:#.*)?$/i.test(href);
  if (!isRelative && !isBareMarkdown) return href;

  const withoutPrefix = href.replace(/^\.\//, "");
  const [pathPart] = withoutPrefix.split("#", 1);
  if (!pathPart) return href;
  const base = path.posix.basename(pathPart).replace(/\.md$/i, "");
  return `#${slugify(base)}`;
}

function createMarked() {
  const marked = new Marked({ gfm: true, breaks: false });
  marked.use({
    walkTokens(token) {
      if (token.type !== "link") return;
      token.href = rewriteDocsLink(token.href);
    },
  });
  return marked;
}

const sources = {};
for (const section of SECTIONS) {
  const markdown = await readFile(path.join(DOCS_ROOT, section.file), "utf8");
  // JSON.stringify (below) escapes backticks/${} safely — never template strings.
  sources[section.file] = await createMarked().parse(markdown);
}

const out = `${BANNER}export const DOC_SOURCES: Record<string, string> = ${JSON.stringify(sources, null, 2)};\n`;

async function outputIsCurrent(content) {
  try {
    return (await readFile(OUTPUT, "utf8")) === content;
  } catch {
    return false;
  }
}

if (await outputIsCurrent(out)) {
  process.stdout.write(`Docs content already current with ${SECTIONS.length} HTML-compiled docs\n`);
} else {
  await writeFile(OUTPUT, out);
  process.stdout.write(`Generated ${OUTPUT} with ${SECTIONS.length} HTML-compiled docs\n`);
}
