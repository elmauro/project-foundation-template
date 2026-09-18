# Prompt: Bootstrap project map

Create or refresh **project identity** and the **context index** for an existing repository. Describes what exists today — does not invent full-stack layout from a preset.

Training module: M2 in `docs/training/ai-with-cursor/aspects-catalog.md`.

## When to use

- First adoption of Layer 0 (session 2 of AI with Cursor course).
- Repo predates the generator; `cursor/context-map.md` is missing or wrong.
- Agent keeps suggesting paths (`frontend/`, `backend/`) that do not exist.

## Prerequisites

Attach **real anchor files** with `@` before pasting (README, root package manifest, CI config, main app folder). Do not attach the whole repository.

Optional templates (if already copied):

- `@cursor/context-map.md` — starting scaffold from template
- `@project.config.json` — if a stub exists

## Modes

| Mode | Cursor mode | Output |
| --- | --- | --- |
| **A — Draft** | Ask (recommended first) | Markdown + JSON blocks for human review; **no files written** |
| **B — Apply** | Agent | Writes reviewed files under repo root |

Always run **Mode A**, edit, then **Mode B**.

---

## Prompt to paste — Mode A (draft)

```text
@cursor/prompts/adoption/prompt-bootstrap-project-map.md
@README.md
@<package.json or go.mod or equivalent>
@<2–6 other anchor paths that exist in THIS repo>

Mode: A (draft only)

Task: Draft cursor/context-map.md and a minimal project.config.json for THIS repository only.

Context map rules:
- Describe folders that exist today. Do not invent frontend/, backend/, or infrastructure/ unless present.
- Replace template placeholders (__PROJECT_NAME__, etc.) with real values from attached files.
- Include "Context Files" table: area → read first path (only paths that exist).
- Include "Scope Guide" with 3–5 bullets per major area that exists.
- English only. Max ~80 lines for context-map.md.

project.config.json rules:
- Keys: projectName, projectSlug, businessDomain, preset ("existing" for legacy repos), ownerTeam, stacks (array of real stack names).
- stacks must match repo reality (e.g. ["api"], ["frontend","backend"], ["runtime"] — not a template preset name unless true).

Output:
1. Full cursor/context-map.md as a fenced markdown block
2. Full project.config.json as a fenced json block
3. Short "Assumptions" list (what you inferred vs what was explicit)

Do NOT write files. Do NOT scan paths not attached unless you state you need one more file and stop.
```

---

## Prompt to paste — Mode B (apply)

After human review of Mode A output:

```text
@cursor/prompts/adoption/prompt-bootstrap-project-map.md
@cursor/context-map.md
@project.config.json

Mode: B (apply reviewed content)

Apply the reviewed context map and project config.
- Do not add folders, stacks, or context files that do not exist in this repo.
- Do not copy content from other products (Simulith, Loyalty, etc.).
- English only.

If cursor/ does not exist, create cursor/ and write context-map.md.
Commit message: chore(cursor): add project map and identity
```

---

## Verification (human)

1. **Ask:** “Where do I add a new test for [X]?” — answer should cite `context-map.md` or a stack `project-context.md`, not generic guesses.
2. Open `context-map.md` — no phantom folders (e.g. `infrastructure/` when there is no Terraform).
3. `project.config.json` → `stacks` matches how the team names their areas.

## Related

- Stack detail: `@cursor/prompts/adoption/prompt-bootstrap-stack-context.md`
- Copy checklist: `docs/training/ai-with-cursor/adopt-on-existing-repo.md` (Layer 0)
- Active rules (separate step): copy `.cursor/rules/` from template — not created by this prompt
