import { readFileSync } from "node:fs"
import test from "node:test"
import assert from "node:assert/strict"

const README = readFileSync("README.md", "utf8")
const HANGUL_PATTERN = /[\u1100-\u11ff\u3130-\u318f\uac00-\ud7af]/u

test("README documents game-development workflows without Hangul", () => {
  const requiredSnippets = [
    "Build games with LazyCodex",
    "/init-deep",
    "Game projects rarely fit a clean folder story",
    "Tools, data, launchers, editors, and build pipelines",
    "Rerun it when the milestone changes",
    "https://lazycodex.ai",
  ]

  for (const snippet of requiredSnippets) {
    assert.match(README, new RegExp(snippet.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")))
  }

  assert.doesNotMatch(README, HANGUL_PATTERN)
})
