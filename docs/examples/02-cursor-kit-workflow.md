# Example 02 — Cursor kit workflow

Workflow for a generated project (paths use `cursor/` at repo root).

## Feature name vs slug

| Concept | Use |
| --- | --- |
| **Feature slug** | Folder `cursor/analysis/features/<slug>/`, branch segment |
| **Feature name** | Titles, `Name:` field, GitHub issue title suffix |

## 0. Intake (optional)

```text
@cursor/prompts/feature/prompt-story-intake.md
@cursor/docs/AI-Project-Playbook.md

Mode: A

We need customer self-service password reset via email link.
Stack: full-stack. Ticket: ACME-012.
```

Creates `user-story.md` + `feature-manifest.md` under `cursor/analysis/features/<slug>/`.

## 1. Analysis package

```text
@cursor/prompts/feature/prompt-feature-analysis-package.md

Feature slug: password-reset-email
Feature name: Password reset via email
Ticket/story: ACME-012
Stack scope: full-stack
```

Outputs: `user-story.md`, `analysis.md`, `feature-manifest.md`.

## 2. Implementation

```text
@cursor/prompts/feature/prompt-feature-implementation-package.md

Feature slug: password-reset-email
Feature name: Password reset via email
Stack scope: full-stack
```

## 3. Validation

```text
@cursor/prompts/feature/prompt-feature-validation-package.md

Feature slug: password-reset-email
Feature name: Password reset via email
Stack scope: full-stack
```

Run backend/frontend tests per stack scope; update `test-checklist.md`.

## 4. Review

```text
@cursor/prompts/feature/prompt-feature-review.md

Feature slug: password-reset-email
Feature name: Password reset via email
```

## 5. Close

```text
@cursor/prompts/feature/prompt-feature-close-package.md

Feature slug: password-reset-email
Feature name: Password reset via email
```

Updates `cursor/analysis/features/INDEX.md` and stack docs if contracts changed.

## Full lifecycle (one prompt)

```text
@cursor/prompts/feature/prompt-feature-lifecycle.md

Feature slug: password-reset-email
Feature name: Password reset via email
Ticket/story: ACME-012
Stack scope: full-stack
```

Stops on failed gate between phases.

## Study before stories (Modo B)

When planning **multiple** stories from a gap analysis:

```text
@cursor/prompts/feature/prompt-story-intake.md
@cursor/templates/analysis-study-template.md

Mode: B
Analysis ref: crear

Evaluate authentication gaps (MFA, session timeout) before opening tickets.
```

Creates `cursor/analysis/studies/<study-slug>/study.md` with **Candidate stories**, then promotes rows with `Decision: implement` to feature packages.

See `cursor/analysis/studies/README.md`.

## Bug fix (small)

```text
@cursor/prompts/feature/prompt-bug-fix.md

Issue / ticket: ACME-999
Problem: Login redirect loop after Cognito callback
Expected behavior: Land on dashboard when token valid
Stack scope: frontend
```

## Area taxonomy (large projects)

Optional path:

```text
cursor/analysis/features/backend/password-reset-email/
cursor/analysis/features/frontend/login-redirect-fix/
```

See `cursor/analysis/features/README.md`.

## With product backlog

If you generated with `--with-product-backlog`:

1. Add `FW-ACME-012` to `cursor/company/future-work/README.md` (or area folder)
2. Register in `STORY-REGISTRY.md`
3. Feature manifest: `Backlog ID: FW-ACME-012`, `Ticket/story: ACME-012`

Next: [03-github-sync-and-scripts.md](03-github-sync-and-scripts.md)
