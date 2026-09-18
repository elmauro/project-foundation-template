# Cheatsheet — lifecycle prompts

Pegar **solo el prompt de la fase**. Los archivos `@` ya cargan contexto. Bloques en inglés (kit). Debajo puedes añadir el ticket en español; los markdowns generados deben quedar en inglés.

Ciclo:

```text
INTAKE → STORY → ANALYSIS → IMPLEMENT → VALIDATE → REVIEW → CLOSE
```

Bugs chicos: `prompt-bug-fix.md` en lugar de intake completo.

## Intake (Mode A)

```text
@cursor/prompts/feature/prompt-story-intake.md
@cursor/docs/AI-Project-Playbook.md
@cursor/templates/user-story-template.md
@cursor/templates/feature-manifest-template.md

Task type: story intake
Mode: A
Feature name: <name>
Feature slug: <kebab-case>
Stack scope: <stack>
Ticket/story: <id | n/a>
Backlog ID: n/a
Implement now? no
```

## Analysis (resume)

```text
@cursor/prompts/feature/prompt-feature-analysis-package.md
@cursor/projects/<stack>/project-context.md

Feature slug: <slug>
Feature name: <name>
Ticket/story: <id>
Stack scope: <stack>
```

## Implement

```text
@cursor/prompts/feature/prompt-feature-implementation-package.md
@cursor/projects/<stack>/project-context.md
@cursor/analysis/features/<slug>/user-story.md
@cursor/analysis/features/<slug>/analysis.md

Feature slug: <slug>
Feature name: <name>
Stack scope: <stack>
```

## Validate

```text
@cursor/prompts/feature/prompt-feature-validation-package.md
@cursor/analysis/features/<slug>/test-checklist.md

Feature slug: <slug>
Feature name: <name>
Stack scope: <stack>
Run tests: yes
```

Ajusta “Run tests” si el repo no tiene suite; entonces actualiza el checklist con pasos manuales.

## Review

```text
@cursor/prompts/feature/prompt-feature-review.md
@cursor/analysis/shared/review-guidelines.md
@cursor/analysis/features/<slug>/

Feature slug: <slug>
Feature name: <name>
```

## Close (lite)

```text
@cursor/prompts/feature/prompt-feature-close-package.md
@cursor/analysis/features/<slug>/feature-manifest.md
@cursor/analysis/features/INDEX.md

Feature slug: <slug>
Feature name: <name>
```

Sin GitHub sync / registry: el agente actualiza manifest + INDEX. No inventes un board.

## Bug fix

```text
@cursor/prompts/feature/prompt-bug-fix.md
@cursor/projects/<stack>/project-context.md

Issue / ticket: <id>
Problem: <one sentence>
Expected behavior: <one sentence>
Stack scope: <stack>
```

## Orchestrator (after intake exists)

```text
@cursor/prompts/feature/prompt-feature-lifecycle.md

Feature slug: <slug>
Feature name: <name>
Ticket/story: <id>
Stack scope: <stack>
Start at: analysis
Run tests: no
Auto-close: no
```

En el curso: preferir **prompts por fase** y chat nueva. El orquestador es opcional cuando ya dominan el ciclo.

## Ticket vs Backlog ID

- `Ticket/story`: Jira / GitHub / Linear.
- `Backlog ID`: `FW-<PREFIX>-###` (sesión 6). No uses el mismo string en ambos.
