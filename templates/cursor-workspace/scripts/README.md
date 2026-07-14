# Cursor scripts

Technical reference for scripts in `cursor/scripts/`.

**Operational guide:** [`cursor/docs/github-projects-sync.md`](../docs/github-projects-sync.md)

## Start feature (git branch)

Creates a branch from a feature package under `cursor/analysis/features/`.

```bash
node cursor/scripts/start-feature.mjs --slug customer-onboarding
node cursor/scripts/start-feature.mjs --slug customer-onboarding --dry-run
```

Reads `Ticket/story` and `Name` from `user-story.md`. Branch pattern: `{branchPrefix}/{ticket}` (default `feature/…` from config).

## GitHub feature sync

Creates or updates a **GitHub Issue** from a feature package.

```bash
cp cursor/scripts/github-story.config.example.json cursor/scripts/github-story.config.json
node cursor/scripts/sync-github-feature.mjs --setup-project
node cursor/scripts/sync-github-feature.mjs --slug customer-onboarding
node cursor/scripts/sync-github-feature.mjs --slug customer-onboarding --dry-run
node cursor/scripts/sync-github-feature.mjs --all
```

### Prerequisites

1. [GitHub CLI](https://cli.github.com/) (`gh`) installed and authenticated.
2. Node.js 18+.
3. Copy and edit `github-story.config.json` (gitignored locally).

### Config highlights

| Field | Purpose |
| --- | --- |
| `ticketPrefix` | e.g. `MY_APP` for tickets `MY_APP-001` |
| `branchPrefix` | Used by `start-feature.mjs` (default `feature`) |
| `projectNumber` | GitHub Project board number |
| `manifestStageToProjectStatus` | Maps manifest stage → board column |
| `ticketPhase` | Maps ticket digits → phase label / parent epic |

### Workflow with playbook

| Phase | Re-run sync when manifest stage changes |
| --- | --- |
| Analysis | intake, analysis → Backlog |
| Implementation | implementation → In progress |
| Validation / Review | validation, review → In review |
| Close | done, closed → Done (+ close issue) |

Writes `cursor/analysis/features/<slug>/github.sync.json` on success.

## Related

- Playbook: `cursor/docs/AI-Project-Playbook.md`
- Template: `cursor/templates/github.sync.json.example`
- Backlog (optional): `cursor/company/future-work/STORY-REGISTRY.md`
