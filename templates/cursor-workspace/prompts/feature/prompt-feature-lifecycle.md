# Prompt: Feature Lifecycle

Orquestador: intake → analysis → implement → validate → review → close.

Usa un solo bloque para encadenar fases. Para cada fase, ejecuta el prompt referenciado en orden. Para en gates fallidos.

## Prompt to paste in Cursor

```text
@cursor/prompts/feature/prompt-feature-analysis-package.md
@cursor/prompts/feature/prompt-feature-implementation-package.md
@cursor/prompts/feature/prompt-feature-validation-package.md
@cursor/prompts/feature/prompt-feature-review.md
@cursor/prompts/feature/prompt-feature-close-package.md

Task type: feature lifecycle
Feature slug: <feature-slug>
Feature name: <feature-name>
Area: <area|n/a>
Ticket/story: <ticket-or-n/a>
Backlog ID: <FW-*|n/a>
Stack scope: backend | frontend | infrastructure | full-stack

Execute phases in order:

1. ANALYSIS — story + analysis + manifest (skip if package already complete)
2. IMPLEMENT — code/docs + implementation-notes + test-checklist + manifest
3. VALIDATE — run focused checks; update test-checklist + manifest Testing
4. REVIEW — peer review; classify findings; fix blockers before close
5. CLOSE — INDEX + registry/docs sync + manifest done

Stop on failed gate. Do not skip review before close.
Do not expand scope between phases.
```

## Entry point alternativo

Para intake conversacional antes del lifecycle:

```text
@cursor/prompts/feature/prompt-story-intake.md
Mode: A
```
