# Cheatsheet — Cursor

Facilitation language: Spanish. Paste-ready prompts: English.

## Modes

| Mode | Use |
| --- | --- |
| Ask | Questions, exploration, drafts you will paste yourself |
| Agent | Edits, new files, running commands |
| Plan | Design for a large or ambiguous change, then implement |

## A prompt that works

```text
@cursor/projects/<stack>/project-context.md
@<concrete-file-or-folder>
@<concrete-file-or-folder>

Goal: <one sentence>
Stack scope: frontend | backend | infrastructure | <your stack>
In scope: <paths>
Out of scope: <paths or refactors>
Do not scan the rest of the repository.

Verify with: <exact test / lint command>
```

Sin kit (sesión 1): quita la línea de `project-context.md` y deja solo archivos reales.

## @ attachments

- Prefiere archivos y carpetas **nombrados**.
- Adjunta el feature package cuando exista: `@cursor/analysis/features/<slug>/user-story.md`
- No pidas “analyze the whole repo” salvo un inventario explícito (raro en este curso).

## Anti-patterns

- Refactor “de paso”
- 40 archivos para un cambio de 2
- Confiar en el chat sin correr el comando de verify
- Commitear `.env`, tokens, claves
- Seguir el mismo chat a través de analysis + implement + review (sesión 5: chat nueva por fase)

## Ask vs Agent (one liner)

Ask explica; Agent escribe. Si no quieres un diff, no uses Agent.

## Verify

El comando es el de **tu** repo (`npm test`, `pnpm lint`, `go test ./…`, Cypress, un script). Si no hay tests: pasos manuales en `test-checklist.md`, no “LGTM del modelo”.
