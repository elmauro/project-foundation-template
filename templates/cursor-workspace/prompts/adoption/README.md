# Adoption prompts

Bootstrap the Cursor kit on an **existing** repository (Layer 0). Use after copying template scaffolds or when the map/context is missing or stale.

**Where this folder lives**

| Context | Path |
| --- | --- |
| In `project-foundation-template` (source) | `templates/cursor-workspace/prompts/adoption/` (this folder) |
| After Layer 0 copy in a learner repo | `cursor/prompts/adoption/` |

Paste blocks inside the prompt files use `@cursor/prompts/adoption/…` — that path is valid **after** copy, not inside the foundation template tree.

Training reference: `docs/training/ai-with-cursor/aspects-catalog.md` (M2, M4).

| File | When to use |
| --- | --- |
| `prompt-bootstrap-project-map.md` | Draft or apply `cursor/context-map.md` + `project.config.json` |
| `prompt-bootstrap-stack-context.md` | Draft or apply `cursor/projects/<stack>/project-context.md` |

Copy order: [`adopt-on-existing-repo.md`](../../../../docs/training/ai-with-cursor/adopt-on-existing-repo.md) (Layer 0).
