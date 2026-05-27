# Prompt: Feature Manifest Update

Use this prompt to create or refresh `feature-manifest.md`.

```text
@cursor/templates/feature-manifest-template.md
@cursor/analysis/features/<feature-slug>/user-story.md
@cursor/analysis/features/<feature-slug>/analysis.md
@cursor/analysis/features/<feature-slug>/implementation-notes.md
@cursor/analysis/features/<feature-slug>/test-checklist.md

Task type: feature manifest update
Feature slug: <feature-slug>
Feature name: <feature-name>
Output file: cursor/analysis/features/<feature-slug>/feature-manifest.md

Update the manifest with:
- status
- owner or responsible area if known
- links to ticket, PRs, docs or designs
- artifact list and current completeness
- summary
- non-goals
- dependencies
- validation status
- next recommended step

Rules:
- Do not change code.
- Do not invent links or owners.
- Mark unknown fields as `n/a` or `unknown`.
```
