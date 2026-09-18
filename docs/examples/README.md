# Examples — project-foundation-template

Practical recipes for generating projects and using the Cursor kit.

| Guide | Contents |
| --- | --- |
| [01-create-project.md](01-create-project.md) | Generator CLI: presets, flags, paths |
| [02-cursor-kit-workflow.md](02-cursor-kit-workflow.md) | Intake → lifecycle → close with prompts |
| [03-github-sync-and-scripts.md](03-github-sync-and-scripts.md) | Branches, Issues, Project board |
| [04-loyalty-monorepo.md](04-loyalty-monorepo.md) | Loyalty: 3 folders, `@loyalty-cursor/`, JIRA, full-stack example |

**Existing repo (do not generate):** [AI with Cursor training](../training/ai-with-cursor/README.md) — 6 × 90 min, Spanish facilitation, English kit artifacts.

## Quick links

- Generator: [`generators/create-project/README.md`](../generators/create-project/README.md)
- Generation contract: [`docs/generation-contract.md`](../docs/generation-contract.md)
- Cursor kit sync: [`docs/cursor-kit-sync.md`](../cursor-kit-sync.md)
- Training (existing repo): [`docs/training/ai-with-cursor/README.md`](../training/ai-with-cursor/README.md)
- Roadmap: [`loyalty-cursor/docs/FUTURE-WORK-CURSOR-KIT.md`](../../loyalty-cursor/docs/FUTURE-WORK-CURSOR-KIT.md)

## Minimal path (5 minutes)

```powershell
cd project-foundation-template\generators\create-project
npm install
npm run create -- --name "Acme Portal" --slug acme-portal `
  --preset fullstack-aws-enterprise `
  --target-dir "C:\Projects\acme-portal"
```

Then in the generated project:

1. Read `cursor/docs/AI-Project-Playbook.md`
2. Optional register: `node cursor/scripts/new-feature.mjs --name "…" --area frontend`
3. Paste `@cursor/prompts/feature/prompt-story-intake.md` (or the STORY-LOG lifecycle block)
4. Optional: `--with-product-backlog true` at create time for `cursor/company/future-work/`

**Already on Loyalty?** See [04-loyalty-monorepo.md](04-loyalty-monorepo.md) — no generator; use `loyalty-cursor/` + app repos.
