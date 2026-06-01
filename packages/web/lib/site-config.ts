export const SITE_CONFIG = {
  installCommand: "npx lazycodex-ai install",
  installCommandAutonomous: "npx lazycodex-ai install --no-tui --codex-autonomous",
  installEquivalent: "npx --yes --package oh-my-openagent omo install --platform=codex",
  githubUrl: "https://github.com/code-yeongyu/lazycodex",
  githubStarsUrl: "https://github.com/code-yeongyu/lazycodex/stargazers",
  omoUrl: "https://github.com/code-yeongyu/oh-my-openagent",
  sisyphusUrl: "https://sisyphuslabs.ai",
  siteUrl: "https://lazycodex.ai",
  docsPath: "/docs",
  eyebrow: "CODEX FOR NO-BRAINERS",
  wordmark: "LazyCodex",
  heroLineA: "You don't need to ultrathink.",
  heroLineB: {
    prefix: "Just prompt ",
    slot: "{your prompt}",
    suffix: " ",
    keyword: "ultrawork",
    period: ".",
  },
  ultraworkTagline: "One word. Every agent activates. Doesn't stop until done.",
  ultraworkExample: "ulw add authentication",
  gameDev: {
    kicker: "Field notes for large repos",
    title: "Build games with LazyCodex",
    intro:
      "Game projects rarely fit a clean folder story. LazyCodex gives agents landmarks before they touch gameplay, tools, data, launchers, editors, and build pipelines.",
    points: [
      {
        label: "/init-deep is the map",
        text: "Generate hierarchical AGENTS.md context when a repo is too large, old, or cross-cutting to explain from memory.",
      },
      {
        label: "The MVP is not the product",
        text: "Keep the surrounding apps in scope: Tools, data, launchers, editors, and build pipelines are often where production risk lives.",
      },
      {
        label: "Rerun it at milestones",
        text: "Rerun it when the milestone changes so the project memory keeps matching the actual shape of the game.",
      },
    ],
  },
  skillWorkflow: {
    title: "Skill-first workflows",
    summary:
      "The three command pillars stay up front. Skills add the specialist guidance for review, cleanup, UI, language discipline, LSP, AST-grep, rules, and comment-checker feedback.",
    skills: ["review-work", "remove-ai-slops", "frontend-ui-ux", "programming", "LSP", "AST-grep", "rules", "comment-checker"],
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;
