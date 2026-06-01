<div align="center">
  <img src=".github/assets/lazycodex-logo.png" alt="LazyCodex" width="280">

  <h1>LazyCodex</h1>

  <p><strong>Codex for no-brainers.</strong><br />
  You don't need to think. Just prompt with <code>ultrawork</code>.</p>

  <p>
    <a href="https://github.com/code-yeongyu/lazycodex/stargazers">
      <img alt="Stars" src="https://img.shields.io/github/stars/code-yeongyu/lazycodex?style=for-the-badge&color=c69ff5&logoColor=D9E0EE&labelColor=302D41" />
    </a>
  </p>

  <p>
    <a href="#-what-is-this">What is this?</a>
    ·
    <a href="https://github.com/code-yeongyu/oh-my-openagent">OmO</a>
    ·
    <a href="https://lazycodex.ai">lazycodex.ai</a>
  </p>

  <br />
</div>

<hr />

## 🚀 Install

One line. No global install, no `npm i -g`. Always use `npx`:

```bash
npx lazycodex-ai install
```

This is shorthand for `npx --yes --package oh-my-openagent omo install --platform=codex`. For a fully autonomous, no-TUI setup:

```bash
npx lazycodex-ai install --no-tui --codex-autonomous
```

## ⚡ Commands

LazyCodex installs these as OmO commands for Codex. Invoke them with the
`$command` syntax shown by the installer.

| Command | Type this | What it does |
| --- | --- | --- |
| `$ulw-loop` | `$ulw-loop "task" [--completion-promise=TEXT] [--strategy=reset\|continue]` | Self-referential loop that runs until Oracle-verified completion. Caps at 500 iterations in ultrawork mode, 100 in normal mode. |
| `$ulw-plan` | `$ulw-plan "what to build"` | Prometheus strategic planner. Writes a plan to `plans/<slug>.md`. Never writes product code. |
| `$start-work` | `$start-work [plan-name] [--worktree <path>]` | Executes a plan until every checkbox is done. Prints **ORCHESTRATION COMPLETE**. |

Full documentation lives at [lazycodex.ai/docs](https://lazycodex.ai/docs).

## Build games with LazyCodex

The first time, there was no grand theory. It worked, so we kept using it.
After working around a KartRider Drift codebase on [oba.run](https://oba.run),
the pattern became clear: game projects are where LazyCodex makes the most
sense.

### 1. `/init-deep` is the map

Game projects rarely fit a clean folder story. Big repos carry gameplay code,
tools, editors, content pipelines, experiments, vendor drops, and old milestone
work in the same tree. The goal is not to make the structure look pure before an
agent can help. The goal is to give the agent landmarks.

`/init-deep` builds that map by generating hierarchical `AGENTS.md` context. It
scores complex directories, writes local guidance near the code that needs it,
and lets future agents find the right files faster.

### 2. A game MVP is usually not the product

A POC can prove the loop. The product around it is usually several applications:
Tools, data, launchers, editors, and build pipelines. If the agent only looks at
the game executable, it misses the actual development system.

LazyCodex keeps that wider context in play. Use `$ulw-plan` when the shape is
still fuzzy, `$start-work` when the plan is ready, and `$ulw-loop` when you want
the agent to keep moving until the evidence says it is done.

### 3. Dense domains get faster with memory

`/init-deep` is not only a first-run setup command. Rerun it when the milestone changes.
Run it again when the repo shape changes or when a new subsystem becomes important.
The result behaves like compressed project memory.

In legacy game code, the hard part is not reading everything. The hard part is
knowing where to read first. That is where LazyCodex is strong.

### Skill-first workflows

The three main commands stay simple, but the skill layer is where specialized
work gets sharper:

| Use case | Reach for |
| --- | --- |
| Map a messy game repo | `/init-deep` |
| Turn vague production work into a plan | `$ulw-plan` |
| Execute a plan with durable progress | `$start-work` |
| Keep pushing until verified completion | `$ulw-loop` |
| Review implementation from multiple angles | `review-work` |
| Remove AI-looking code without changing behavior | `remove-ai-slops` |
| Build polished UI surfaces | `frontend-ui-ux` |
| Work safely in strict TypeScript, Rust, Python, or Go | `programming` |

Start at [https://lazycodex.ai](https://lazycodex.ai).

<hr />

## 💤 What is this?

**LazyCodex** is the **lazy way** to get [OmO (oh-my-openagent)](https://github.com/code-yeongyu/oh-my-openagent) up and running.

Think [LazyVim](https://github.com/LazyVim/LazyVim) for [lazy.nvim](https://github.com/folke/lazy.nvim), but for Codex.

OmO is the best agent harness: discipline agents, parallel orchestration, multi-model routing, skills, hooks, and more. LazyCodex wraps it so you don't have to think about setup.

> _"LazyVim made Neovim usable for the rest of us. LazyCodex does the same for Codex."_

## 🧩 What you get

| Feature | Description |
| --- | --- |
| 🤖 **Discipline Agents** | Sisyphus orchestrates Hephaestus, Oracle, Librarian. A full AI dev team |
| 🔀 **Parallel Execution** | Multiple agents working simultaneously on subtasks |
| 🎯 **Multi-Model Routing** | Automatic model selection per task category |
| 🛠️ **Skills System** | Extensible skill library for specialized tasks |
| 📋 **Hooks & Lifecycle** | Pre/post hooks for every agent action |
| 🔧 **Zero Config** | Sensible defaults, override when you want |

## 🧠 Why different GPT models appear

Do not be surprised if an OmO/LazyCodex run shows models like `gpt-5.2`
with `xhigh`, `gpt-5.4-mini`, `gpt-5.3-codex`, or newer equivalents like
`gpt-5.5` with `xhigh`. That is intentional.

OmO does not blindly spend your best model on every subtask. Its source
defines task categories and fallback chains so the agent can pick the most
appropriate model for the job: `quick` routes to `gpt-5.4-mini` for small
edits, `ultrabrain` uses a high-reasoning GPT model for hard logic, and
agentic coding paths can use Codex-tuned GPT models when available. See
[`openai-categories.ts`](src/src/tools/delegate-task/openai-categories.ts)
and [`model-requirements.ts`](src/packages/model-core/src/model-requirements.ts).

The point is quota discipline: use the strongest model when the task needs
deep reasoning, use a cheaper/faster model when that is enough, and keep
parallel agent work efficient instead of burning premium quota on routine
steps. This is benchmark-driven routing, not random model churn:

- [GPT-5.2](https://openai.com/index/introducing-gpt-5-2/) is documented by
  OpenAI as stronger at code review, bug finding, and complex tool use; the
  announcement notes that its maximum API reasoning effort uses `xhigh`.
- [GPT-5.3-Codex](https://developers.openai.com/api/docs/models/gpt-5.3-codex)
  is OpenAI's Codex-tuned model for agentic software engineering, with public
  coding-agent benchmarks such as SWE-Bench Pro, Terminal-Bench 2.0, and
  OSWorld Verified reported in the
  [GPT-5.3-Codex announcement](https://openai.com/index/introducing-gpt-5-3-codex).
- [GPT-5.4 mini](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/)
  is positioned for efficient everyday coding, computer use, and subagents;
  that is why lightweight OmO tasks can land there instead of spending a
  frontier reasoning model.

Reference links:

- [OpenAI GPT-5.2 announcement](https://openai.com/index/introducing-gpt-5-2/)
- [OpenAI GPT-5.2 model docs](https://platform.openai.com/docs/models/gpt-5.2/)
- [OpenAI GPT-5.3-Codex model docs](https://developers.openai.com/api/docs/models/gpt-5.3-codex)
- [OpenAI GPT-5.4 mini and nano announcement](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/)
- [OpenAI latest model guide](https://platform.openai.com/docs/guides/latest-model)

## 🏗️ Architecture

LazyCodex is a thin distribution layer. The core engine is [oh-my-openagent (OmO)](https://github.com/code-yeongyu/oh-my-openagent), included as a submodule under `src/`.

```
lazycodex/
├── src/                     → oh-my-openagent (submodule)
├── packages/
│   └── web/                 → Next.js 15 + Tailwind v4 + opennextjs-cloudflare
│                              (deployed to lazycodex.ai via Cloudflare Workers)
├── .github/workflows/       → web-ci.yml + web-deploy.yml
├── README.md
└── ...
```

LazyCodex is part of the [omo.dev](https://omo.dev) project. **omo in Codex**, packaged for the lazy.

## 👷 Maintainer

LazyCodex is maintained by **Jobdori**, the AI assistant that builds and ships [OmO](https://github.com/code-yeongyu/oh-my-openagent) in real-time.

<div align="center">

[![Sisyphus Labs](.github/assets/sisyphuslabs.png)](https://sisyphuslabs.ai)

> **Meet your own Jobdori, Dori.**
> **Learn more at [sisyphuslabs.ai](https://sisyphuslabs.ai).**

</div>

## 📄 License

MIT
