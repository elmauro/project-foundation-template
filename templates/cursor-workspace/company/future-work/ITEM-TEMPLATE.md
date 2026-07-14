# Future Work — Item template

Template for new entries in any `README.md` under `cursor/company/future-work/`.

## FW vs execution story (two identifiers)

| ID | Role | Format | Example |
| --- | --- | --- | --- |
| **FW-*** | Product backlog (stable) | `FW-__FW_PREFIX__-<nnn>` | `FW-__FW_PREFIX__-001` |
| **Execution story** | GitHub / JIRA / board | `__STORY_PREFIX__-<nnn>` or external key | `__STORY_PREFIX__-001` |

- Do **not** use `FW-*` in **Ticket/story** on feature packages.
- When promoting: `Ticket/story: __STORY_PREFIX__-001` and `Backlog ID: FW-__FW_PREFIX__-001`.
- Register assignments in [`STORY-REGISTRY.md`](STORY-REGISTRY.md).

**Promote FW → story:**

1. Pick next free execution ID (see registry).
2. Copy **Title** and **Feature slug (previsto)** to `prompt-feature-analysis-package.md`.
3. Update FW item with **Story:** link.
4. Create feature package under `cursor/analysis/features/<slug>/`.

---

## Required fields (backlog FW)

| Field | Description |
| --- | --- |
| **ID** | `FW-__FW_PREFIX__-<nnn>` |
| **Title** | Human-readable name — same as **Name** in `user-story.md` |
| **Feature slug (previsto)** | kebab-case folder under `cursor/analysis/features/` |
| **Priority** | `P0` · `P1` · `P2` · `P3` |
| **Gap** | One-line label of what is missing |
| **Description** | What to build (2–4 sentences) |
| **Why it matters** | Who / what flow is unblocked |
| **Story shape** | `S` / `M` / `L` — indicative |
| **Ship criteria** | How to know it is done |

## Optional fields

| Field | When |
| --- | --- |
| **Story** | Execution ID when promoted; `—` if backlog only |
| **Blocks** | Other FW IDs or flows blocked |
| **Related** | docs paths, examples, feature slug |
| **Out of scope** | Explicit non-goals |

---

## Recommended format (priority item)

```markdown
### FW-__FW_PREFIX__-NNN — Short title

| | |
| --- | --- |
| **ID** | FW-__FW_PREFIX__-NNN |
| **Title** | Short title (→ feature **Name**) |
| **Feature slug (previsto)** | `__PROJECT_SLUG__-…` |
| **Story** | — |
| **Priority** | P1 |
| **Gap** | … |
| **Description** | … |
| **Why it matters** | … |
| **Story shape** | M |
| **Ship criteria** | … |
```

After assigning `__STORY_PREFIX__-001`:

```markdown
| **Story** | __STORY_PREFIX__-001 → `__PROJECT_SLUG__-capability` |
```

## Lifecycle

1. **Backlog** — FW in README; **Story:** `—`.
2. **Promoted** — execution ID assigned; feature package created; registry updated.
3. **In progress** — manifest `implementation`.
4. **Shipped** — [`prompt-feature-close-package.md`](../../prompts/feature/prompt-feature-close-package.md) after review pass.
5. **Deferred** — explicit reason; keep FW ID for traceability.
