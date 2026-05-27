# Context Map - __PROJECT_NAME__

Quick map for humans and AI agents working in this project.

## Project

- Name: `__PROJECT_NAME__`
- Slug: `__PROJECT_SLUG__`
- Domain: `__BUSINESS_DOMAIN__`
- Preset: `__PRESET__`
- AWS region: `__AWS_REGION__`
- Owner team: `__OWNER_TEAM__`

## Generated Structure

```text
__PROJECT_SLUG__/
├─ .cursor/          # Active Cursor rules
├─ .github/          # CI/CD workflows
├─ frontend/         # Web app when enabled by the preset
├─ backend/          # APIs and services when enabled by the preset
├─ infrastructure/   # AWS/Terraform when enabled by the preset
├─ cursor/           # Context, prompts, templates and analysis
├─ docs/             # Product, architecture and operations docs
├─ local-dev/        # Optional local services
├─ project.config.json
└─ README.md
```

## Context Files

| Area | Read first |
| --- | --- |
| Project metadata | `project.config.json` |
| AI workflow | `cursor/docs/AI-Project-Playbook.md` |
| Frontend | `cursor/projects/frontend/project-context.md` |
| Backend | `cursor/projects/backend/project-context.md` |
| Infrastructure | `cursor/projects/infrastructure/project-context.md` |
| Architecture | `docs/architecture.md` |
| Domain | `docs/domain.md` |
| Security | `docs/security-baseline.md` |
| Cost | `docs/cost-baseline.md` |
| Operations | `docs/runbook.md` |
| Web deployment | `docs/infrastructure/web-deployment.md` |

## Scope Guide

- Frontend changes usually touch `frontend/src/`, `frontend/docs/`, Cypress specs and MSW mocks.
- Backend changes usually touch one API folder, shared layers, `backend/docs/` and tests.
- Infrastructure changes usually touch one capability folder or Terraform module plus operational docs.
- Cross-stack changes should align backend contracts, frontend services/types, mocks and tests before closing.

## Prompts and Templates

| Area | Read first |
| --- | --- |
| Prompt index | `cursor/prompts/README.md` |
| Execution guide | `cursor/prompts/builders/universal-cursor-prompt-builder.md` |
| Feature workflow | `cursor/prompts/feature/prompt-feature-analysis-package.md` |
| Artifact templates | `cursor/templates/README.md` |
| Review guidelines | `cursor/analysis/shared/review-guidelines.md` |

## Cursor Rules

Active rules live under `.cursor/rules/`. Keep them short and actionable. Longer explanations, prompts and feature artifacts belong under `cursor/`.

