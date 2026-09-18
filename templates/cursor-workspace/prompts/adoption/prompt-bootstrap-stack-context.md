# Prompt: Bootstrap stack context

Create or refresh **`cursor/projects/<stack>/project-context.md`** for one stack in an existing repository. One file per major area (frontend, backend, api, runtime, mobile, etc.).

Training module: M4 in `docs/training/ai-with-cursor/aspects-catalog.md`.

## When to use

- After `context-map.md` exists (Layer 0).
- Agent uses wrong test commands or folder conventions.
- Stack name in the repo differs from template defaults (`apps/web/` vs `frontend/`).

## Prerequisites

Attach with `@`:

- Root manifest (`package.json`, `go.mod`, `Cargo.toml`, …)
- Main source tree for that stack
- Test folder or README with run instructions
- `@cursor/context-map.md` if present

Optional starting scaffold:

- `@cursor/projects/<stack>/project-context.md` from template (edit heavily)

## Modes

| Mode | Cursor mode | Output |
| --- | --- | --- |
| **A — Draft** | Ask | Draft markdown for human review |
| **B — Apply** | Agent | Writes `cursor/projects/<stack>/project-context.md` |

---

## Prompt to paste — Mode A (draft)

```text
@cursor/prompts/adoption/prompt-bootstrap-stack-context.md
@cursor/context-map.md
@<stack manifest or root package file>
@<main source folder for this stack>/
@<test folder or README with commands>/

Mode: A (draft only)

Stack name: <e.g. backend | frontend | api | runtime — use repo naming>
Stack root path: <e.g. backend/ | src/ | apps/api/ — must exist>

Task: Draft cursor/projects/<stack>/project-context.md (English, max 80 lines).

Required sections:
1. Stack summary (one paragraph — what this stack does in THIS repo)
2. Folder map (bullet list of real paths under the stack root)
3. Commands (test, lint, build, run — only commands that work; cite source file if inferred)
4. Conventions (naming, patterns observed in attached files)
5. Do not assume (what this stack is NOT; wrong paths to avoid)

Rules:
- Do not invent frontend/ or backend/ paths if this repo uses different names.
- Do not duplicate the full playbook or context-map; link to cursor/context-map.md for index.
- Mark [TBD] for anything not provable from attachments.

Output: fenced markdown block only. Do NOT write files.
```

---

## Prompt to paste — Mode B (apply)

```text
@cursor/prompts/adoption/prompt-bootstrap-stack-context.md
@cursor/projects/<stack>/project-context.md

Mode: B (apply reviewed content)

Stack name: <stack>
Apply the reviewed project-context.md for this stack.
Create cursor/projects/<stack>/ if needed.
English only. Max ~80 lines; trim if draft was longer.

Commit message: chore(cursor): add <stack> project context
```

---

## Verification (human)

1. Run each command listed in **Commands** — they must work locally or match CI.
2. **Ask:** “Where do I add a new API handler / route / component?” — answer matches section 2.
3. Repeat for each stack listed in `project.config.json` → `stacks`.

## Use in implementation (after bootstrap)

```text
@cursor/projects/<stack>/project-context.md
@cursor/context-map.md
@<files to change>

Goal: <one sentence>
In scope: <paths>
Out of scope: <paths>
Verify with: <command from project-context.md>
```
