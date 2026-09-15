# Example 02 — Cursor kit workflow

Workflow for a generated project (paths use `cursor/` at repo root).

## Feature name vs slug

| Concept | Use |
| --- | --- |
| **Feature slug** | Folder `cursor/analysis/features/<slug>/`, branch segment |
| **Feature name** | Titles, `Name:` field, GitHub issue title suffix |

## 0. Intake

**Required for new stories.** Only the product backlog (`FW-*`) is optional — intake creates the feature package and registry entry when backlog is enabled. See [`AI-Project-Playbook.md`](../../templates/cursor-workspace/docs/AI-Project-Playbook.md).

```text
@cursor/prompts/feature/prompt-story-intake.md
@cursor/docs/AI-Project-Playbook.md

Mode: A

We need customer self-service password reset via email link.
Stack: full-stack. Ticket: ACME-012.
```

Creates `user-story.md` + `feature-manifest.md` under `cursor/analysis/features/<slug>/`.

With product backlog, register first:

```bash
node cursor/scripts/new-feature.mjs --name "Password reset via email" --area frontend --fw FW-ACME-012
```

That writes `STORY-LOG.md` and prints the lifecycle paste block.

## 1. Analysis package

Assumes step 0 (Intake) already created the package, or you are resuming an existing story.

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

Run **step 0 (Intake)** first for new stories, then use the orchestrator:

```text
@cursor/prompts/feature/prompt-feature-lifecycle.md

Feature slug: password-reset-email
Feature name: Password reset via email
Ticket/story: ACME-012
Stack scope: full-stack
Start at: analysis
Run tests: no
Auto-close: yes
```

Stops on failed gate between phases. Gates:

```bash
node cursor/scripts/run-feature-gates.mjs --slug password-reset-email --phase analysis
node cursor/scripts/run-feature-gates.mjs --slug password-reset-email --phase validation
node cursor/scripts/run-feature-gates.mjs --slug password-reset-email --phase review
```

## Study before stories (Mode B)

When planning **multiple** stories from a gap analysis:

```text
@cursor/prompts/feature/prompt-story-intake.md
@cursor/templates/analysis-study-template.md

Mode: B
Analysis ref: create

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
2. Register with `new-feature.mjs` or a row in `STORY-REGISTRY.md`
3. Feature manifest: `Backlog ID: FW-ACME-012`, `Ticket/story: ACME-012`
4. Lifecycle paste block lives in `future-work/<area>/STORY-LOG.md`

Next: [03-github-sync-and-scripts.md](03-github-sync-and-scripts.md)
