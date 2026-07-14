# Example 03 — GitHub sync and scripts

Requires a generated project with `cursor/scripts/` (included in all presets).

## Setup (once per repo)

```powershell
cd C:\Projects\acme-platform
copy cursor\scripts\github-story.config.example.json cursor\scripts\github-story.config.json
```

Edit `github-story.config.json`:

```json
{
  "projectOwner": "your-org",
  "projectNumber": 1,
  "ticketPrefix": "ACME",
  "branchPrefix": "feature",
  "defaultBranch": "main"
}
```

```powershell
gh auth login
gh auth refresh -s read:project,project
node cursor/scripts/sync-github-feature.mjs --setup-project
```

Full guide: `cursor/docs/github-projects-sync.md` in the generated project.

## Start work on a feature

After analysis package exists:

```bash
node cursor/scripts/start-feature.mjs --slug password-reset-email
```

Creates branch `feature/acme-012` (from Ticket/story in user-story).

Dry run:

```bash
node cursor/scripts/start-feature.mjs --slug password-reset-email --dry-run
```

## Sync issue from user story

```bash
node cursor/scripts/sync-github-feature.mjs --slug password-reset-email
```

Creates issue titled `ACME-012 — Password reset via email` and writes:

```text
cursor/analysis/features/password-reset-email/github.sync.json
```

Preview without API calls:

```bash
node cursor/scripts/sync-github-feature.mjs --slug password-reset-email --dry-run
```

## Re-sync when manifest stage changes

Edit `feature-manifest.md`:

```markdown
- Current stage: **implementation**
```

Then:

```bash
node cursor/scripts/sync-github-feature.mjs --slug password-reset-email
```

Project board column moves to **In progress** (if `projectNumber` configured).

## Sync all features

```bash
node cursor/scripts/sync-github-feature.mjs --all
```

## Typical session

```text
1. prompt-story-intake.md          → folder + user-story
2. start-feature.mjs --slug …      → git branch
3. prompt-feature-lifecycle.md     → implement + validate + review
4. sync-github-feature.mjs         → after analysis, after stage changes, on close
5. prompt-feature-close-package.md → INDEX + registry + docs
```

## Loyalty monorepo note

In `loyalty-cursor` (standalone kit repo), scripts live at `loyalty-cursor/scripts/` and paths use `analysis/features/` — see [`04-loyalty-monorepo.md`](04-loyalty-monorepo.md) and `loyalty-cursor/scripts/README.md`.

## Related

- [01-create-project.md](01-create-project.md) — `--with-product-backlog`, `--story-prefix`
- [02-cursor-kit-workflow.md](02-cursor-kit-workflow.md) — playbook prompts
