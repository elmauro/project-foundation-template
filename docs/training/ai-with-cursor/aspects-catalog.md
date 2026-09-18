# AI aspects catalog — training reference

Pedagogical index for **AI with Cursor** (existing repo). Facilitation in **Spanish**; kit artifacts and paste-ready prompts in **English**.

**Spanish concept map** (tool-agnostic IA concepts · session · covered?): [`concepts-map.md`](concepts-map.md) · per-session detail in [`01-session.md`](01-session.md) … [`06-session.md`](06-session.md).

Each module follows the same shape:

1. **Why it matters** — what breaks without it.
2. **Template source** — files in `project-foundation-template`.
3. **Generated / adopted layout** — what appears in the learner's repo.
4. **Adoption prompt** — copy-paste to create or improve the aspect.
5. **Definition of done** — observable structure + behavior.

## How the three context layers fit together

| Layer | What | Where | Token rule |
| --- | --- | --- | --- |
| Active rules | Behavior Cursor loads automatically | `.cursor/rules/*.mdc` | Keep short; few `alwaysApply` rules |
| Map + identity | Where things live; which stacks exist | `project.config.json`, `cursor/context-map.md` | Read on demand with `@`; do not dump whole repo |
| Working memory | Durable state per story / product | `cursor/analysis/features/`, `cursor/company/`, prompts | Only the active feature package |

**Routing rule:** In Agent mode, list concrete paths and add **Do NOT read:** lines (see Module 7).

## Session mapping

**Dictation script:** [`facilitator-runbook.md`](facilitator-runbook.md). Session files `01`–`06` are annex only (homework + checklist).

| Module | Session | Kit layer |
| --- | --- | --- |
| M1 Scope and modes | [S1 runbook](facilitator-runbook.md#sesión-1--cursor-sin-kit) · [annex](01-session.md) | None |
| M2 Map and identity | [S2 runbook](facilitator-runbook.md#sesión-2--mapa-e-identidad) · [annex](02-session.md) | 0 |
| M3 Active rules | [S2 runbook](facilitator-runbook.md#sesión-2--mapa-e-identidad) · [annex](02-session.md) | 0 |
| M4 Stack context | [S2 runbook](facilitator-runbook.md#sesión-2--mapa-e-identidad) · [annex](02-session.md) | 0 |
| M5 Feature memory | [S3 runbook](facilitator-runbook.md#sesión-3--una-historia-que-no-vive-en-el-chat) · [annex](03-session.md) | A |
| M6 Lifecycle | [S3–S4 runbook](facilitator-runbook.md#sesión-3--una-historia-que-no-vive-en-el-chat) · [annex](03-session.md) / [04](04-session.md) | A |
| M7 Tokens and sessions | [S5 runbook](facilitator-runbook.md#sesión-5--review-cerrar-y-gastar-menos-tokens) · [annex](05-session.md) | A+ |
| M8 Review and quality | [S5 runbook](facilitator-runbook.md#sesión-5--review-cerrar-y-gastar-menos-tokens) · [annex](05-session.md) | A+ |
| M9 Product and scope | [S6 runbook](facilitator-runbook.md#sesión-6--producto-y-el-lunes) · [annex](06-session.md) | B |
| M10 New project (annex) | — | Generator |
| M11 Automation (optional) | [S6 runbook](facilitator-runbook.md#sesión-6--producto-y-el-lunes) · [annex](06-session.md) | C |
| M12 Context trace (optional) | After S4–5 | A+ |

Copy order for adoption: [`adopt-on-existing-repo.md`](adopt-on-existing-repo.md).

---

## M1 — Scope and Cursor modes

### Why it matters

Without explicit scope, the agent scans the repository, mixes refactors with the ticket, and burns tokens on irrelevant files. Modes exist to separate **explore** (Ask / Plan) from **change** (Agent).

**Anti-pattern:** “Analyze the whole repository” for a one-line fix.

### Template source

- [`cheatsheet-cursor.md`](cheatsheet-cursor.md)
- Session script: [`facilitator-runbook.md` → S1](facilitator-runbook.md#sesión-1--cursor-sin-kit) · homework: [`01-session.md`](01-session.md)

### In the learner's repo (session 1)

No `cursor/` yet. Only a small diff and a verification command.

### Adoption prompt (no kit yet)

```text
@<concrete-file-or-folder>
@<concrete-file-or-folder>

Goal: <one sentence>
Stack scope: <frontend | backend | api | mobile | etc.>
In scope: <paths>
Out of scope: refactors, unrelated modules, secrets
Do not scan the rest of the repository.

Verify with: <exact command, e.g. npm test -- path/to/spec>
```

### Definition of done

| Structure | Behavior |
| --- | --- |
| One branch with a focused diff | Agent touched only in-scope paths (or human reverted extras) |
| — | Learner can explain Ask vs Agent vs Plan |
| — | A verification command was run locally |

---

## M2 — Map and project identity

### Why it matters

The agent has no built-in map of your repo. Without identity + index, it invents folders (`frontend/` when you only have `apps/web/`) and wrong test commands.

**Anti-pattern:** Copying `context-map.md` from a full-stack template into an API-only repo without editing.

### Template source

| Template path | Adopted path |
| --- | --- |
| `templates/cursor-workspace/context-map.md` | `cursor/context-map.md` |
| (create manually) | `project.config.json` |

Reference: [`adopt-on-existing-repo.md`](adopt-on-existing-repo.md) → Layer 0.

### In the learner's repo

```text
project.config.json          # name, slug, stacks that actually exist
cursor/context-map.md        # index: where to read first per area
```

Minimal `project.config.json`:

```json
{
  "projectName": "Example App",
  "projectSlug": "example-app",
  "businessDomain": "example domain",
  "preset": "existing",
  "ownerTeam": "product",
  "stacks": ["backend"]
}
```

Adjust `stacks` to reality: `frontend`, `backend`, `infrastructure`, or names like `api`, `runtime`, `mobile`.

### Adoption prompt

Kit file: `cursor/prompts/adoption/prompt-bootstrap-project-map.md`

**Mode A (Ask)** — draft for review:

```text
@cursor/prompts/adoption/prompt-bootstrap-project-map.md
@README.md
@<package.json or equivalent>
@<2–6 anchor paths>

Mode: A (draft only)
```

**Mode B (Agent)** — apply after human edit:

```text
@cursor/prompts/adoption/prompt-bootstrap-project-map.md
@cursor/context-map.md
@project.config.json

Mode: B (apply reviewed content)
```

### Definition of done

| Structure | Behavior |
| --- | --- |
| `project.config.json` matches real stacks | Ask: “Where do I add a test for X?” cites `context-map.md` or `project-context.md` |
| `context-map.md` has no phantom folders | Same question does not suggest paths that do not exist |

---

## M3 — Active rules (`.cursor/rules/`)

### Why it matters

Rules are **always-on** instructions. They replace repeating “do not commit secrets” every chat. They must stay **short** — long rules consume tokens on every request.

**Anti-pattern:** Pasting the entire playbook into a `.mdc` file with `alwaysApply: true`.

### Template source

| Template path | Purpose |
| --- | --- |
| `templates/cursor-config/rules/core-standards.mdc` | Scoped changes, no secrets, update tests/docs |
| `templates/cursor-config/rules/project-context.mdc` | Discovery order before editing |
| `templates/cursor-config/rules/documentation-english.mdc` | Docs in English |
| `templates/cursor-config/rules/context-scope.mdc` | Token-aware reads (session 5) |
| `templates/cursor-config/rules/frontend-react.mdc` | Only if stack matches |
| `templates/cursor-config/rules/backend-serverless.mdc` | Only if stack matches |
| `templates/cursor-config/rules/infrastructure-terraform.mdc` | Only if stack matches |
| `templates/cursor-config/rules/company-product-context.mdc` | After `cursor/company/` exists |

### In the learner's repo

```text
.cursor/rules/
  core-standards.mdc
  project-context.mdc
  documentation-english.mdc
  context-scope.mdc          # session 5
  <stack>.mdc                  # optional, only if template matches
```

**`.cursor/` vs `cursor/`:** rules are active config; long docs live under `cursor/`.

### Adoption prompt — stack rule when template does not match

```text
@.cursor/rules/core-standards.mdc

Task: Draft a new rule .cursor/rules/<stack-name>.mdc (~40 lines max) for our stack.

Include:
- Test/lint commands that actually work in this repo
- Where new routes/handlers/components go
- Naming conventions observed in @<example-folder>/

alwaysApply: false
globs: <path pattern, e.g. backend/** or src/**>

English only. Do not copy React or Terraform rules if our stack is different.
```

### Definition of done

| Structure | Behavior |
| --- | --- |
| 3–6 `.mdc` files, each ≤ ~1 screen | Agent respects “no secrets” and doc language without being reminded |
| No business-specific IDs from another product | Rules describe **this** repo's conventions |

---

## M4 — Stack context (`project-context.md`)

### Why it matters

The map says **where**; stack context says **how** — test commands, folder conventions, where APIs and types live. One file per major stack keeps token load scoped.

**Anti-pattern:** A 20-page treatise the agent never finishes reading.

### Template source

| Template path | Adopted path |
| --- | --- |
| `templates/cursor-workspace/projects/frontend/project-context.md` | `cursor/projects/frontend/project-context.md` |
| `templates/cursor-workspace/projects/backend/project-context.md` | `cursor/projects/backend/project-context.md` |
| `templates/cursor-workspace/projects/infrastructure/project-context.md` | `cursor/projects/infrastructure/project-context.md` |

Create `cursor/projects/<your-stack>/project-context.md` if names differ.

### In the learner's repo

One `project-context.md` per stack (30–80 lines each):

- Entry points and folder layout
- How to run tests / lint / typecheck
- Where to add a new endpoint, component, migration, etc.
- Links to deeper docs (not duplicated inline)

### Adoption prompt

Kit file: `cursor/prompts/adoption/prompt-bootstrap-stack-context.md`

**Mode A (Ask):**

```text
@cursor/prompts/adoption/prompt-bootstrap-stack-context.md
@cursor/context-map.md
@<stack source and test paths>

Mode: A (draft only)
Stack name: <stack>
Stack root path: <path>
```

**Mode B (Agent):** apply reviewed `cursor/projects/<stack>/project-context.md` — see prompt file.

### Adoption prompt — use in implementation (Agent)

```text
@cursor/projects/<stack>/project-context.md
@cursor/context-map.md
@<files to change>

Goal: <one sentence from user story>
In scope: <paths>
Out of scope: <paths>
Verify with: <command from project-context.md>
```

### Definition of done

| Structure | Behavior |
| --- | --- |
| ≥1 `project-context.md` reviewed by a human | Implementation prompts attach stack context; fewer wrong folders |
| Commands section matches CI/local reality | Verification step in prompts uses real commands |

---

## M5 — Feature memory (analysis package)

### Why it matters

Chat history is not a database. The feature package is the **single source of truth** for one story across sessions and chats.

**Anti-pattern:** Re-explaining acceptance criteria in every new chat without `@user-story.md`.

### Template source

| Template path | Adopted path |
| --- | --- |
| `templates/cursor-workspace/templates/*` | `cursor/templates/` |
| `templates/cursor-workspace/analysis/features/README.md` | `cursor/analysis/features/README.md` |
| `templates/cursor-workspace/analysis/features/INDEX.md` | `cursor/analysis/features/INDEX.md` |
| `templates/cursor-workspace/prompts/feature/prompt-story-intake.md` | `cursor/prompts/feature/prompt-story-intake.md` |

### In the learner's repo

```text
cursor/analysis/features/<feature-slug>/
  feature-manifest.md
  user-story.md
  analysis.md              # after analysis phase
  implementation-notes.md  # during implement
  test-checklist.md        # validate
```

**Slug** = folder name (kebab-case). **Feature name** = human title.

Manifest fields to teach early:

- `Ticket/story` — Jira/GitHub/Linear id or `n/a`
- `Backlog ID` — `FW-*` or `n/a` (not the same as ticket id)

### Adoption prompt — intake (Mode A)

```text
@cursor/prompts/feature/prompt-story-intake.md
@cursor/docs/AI-Project-Playbook.md

Mode: A

<One paragraph: what we need, stack scope, ticket id>

Stack scope: <frontend | backend | full-stack | infrastructure>
Ticket/story: <id or n/a>
```

### Adoption prompt — resume in a new chat

```text
@cursor/analysis/features/<slug>/feature-manifest.md
@cursor/analysis/features/<slug>/user-story.md
@cursor/analysis/features/<slug>/analysis.md

Feature slug: <slug>
Current stage: <analysis | implement | validate | review>
Task: Continue from manifest stage only. Do not re-intake.
Read ONLY attached files and paths listed in manifest scope.
```

### Definition of done

| Structure | Behavior |
| --- | --- |
| Folder `cursor/analysis/features/<slug>/` exists | New chat + `@user-story.md` restores scope without re-discovery |
| `feature-manifest.md` has ticket + stage | Manifest `Current stage` matches actual work |

---

## M6 — Deterministic lifecycle

### Why it matters

Same phases → same artifacts → predictable reviews and less “what did we decide?” across teammates.

**Anti-pattern:** Jumping to implementation without analysis or validation checklist.

### Template source

| Template path | Purpose |
| --- | --- |
| `templates/cursor-workspace/docs/AI-Project-Playbook.md` | Full flow reference |
| `templates/cursor-workspace/docs/story-validation.md` | T1/T2/T3 validation tiers |
| `templates/cursor-workspace/docs/documentation-governance.md` | Where docs live |
| `prompts/feature/prompt-feature-analysis-package.md` | Analysis phase |
| `prompts/feature/prompt-feature-implementation-package.md` | Implement phase |
| `prompts/feature/prompt-feature-validation-package.md` | Validate phase |
| `prompts/feature/prompt-feature-lifecycle.md` | End-to-end reference |

Flow:

```text
[optional BACKLOG] → INTAKE → STORY → ANALYSIS → IMPLEMENT → VALIDATE → REVIEW → CLOSE
```

### In the learner's repo

After session 4–5: one feature with code on a branch + `implementation-notes.md` + started `test-checklist.md`.

### Adoption prompt — implementation (new chat)

```text
@cursor/prompts/feature/prompt-feature-implementation-package.md
@cursor/projects/<stack>/project-context.md
@cursor/analysis/features/<slug>/user-story.md
@cursor/analysis/features/<slug>/analysis.md

Feature slug: <slug>
Feature name: <human title>
Stack scope: <stack>
Ticket/story: <id>

Implement only what analysis.md and user-story.md scope. Update implementation-notes.md as you go.
```

### Adoption prompt — validation

```text
@cursor/prompts/feature/prompt-feature-validation-package.md
@cursor/analysis/features/<slug>/test-checklist.md
@cursor/projects/<stack>/project-context.md

Feature slug: <slug>
Run validation tier T1 minimum (happy path + local command documented in checklist).
List manual steps if no automated test exists.
```

### Definition of done

| Structure | Behavior |
| --- | --- |
| Manifest stages updated through `validate` or `review` | PR/diff matches user-story acceptance criteria |
| `test-checklist.md` lists real commands | Someone else can execute checklist without asking author |

---

## M7 — Tokens and session hygiene

### Why it matters

Context is the main cost driver. Scope rules reduce reads **without** skipping lifecycle gates (intake, validation, close).

**Anti-pattern:** One 40-turn chat mixing analysis, refactor, docs, and the ticket.

### Template source

| Template path | Purpose |
| --- | --- |
| `templates/cursor-config/rules/context-scope.mdc` | Always-on scope + non-negotiable gates |
| `templates/cursor-workspace/docs/context-scope-sessions.md` | Paste blocks per phase |
| `templates/cursor-workspace/docs/context-trace-matrix.md` | Evidence for optimizing reads (M12) |

Playbook table **Quick context routing** in `AI-Project-Playbook.md`.

### Routing criteria (teach explicitly)

| If the task is… | Read first | Attach with `@` | Do NOT read by default |
| --- | --- | --- | --- |
| Backend bug | `cursor/projects/backend/project-context.md` | handler + test + API spec | frontend, infra, full registry |
| UI change | `cursor/projects/frontend/project-context.md` | route + service + types | backend unless contract changes |
| Infra change | `cursor/projects/infrastructure/project-context.md` | affected `.tf` files | application code |
| New story | intake prompt | feature package | entire `STORY-REGISTRY.md` |
| Roadmap question | Ask mode | `cursor/company/README.md` | source tree |

### Adoption prompt — scoped backend implement

```text
<Project> — <ticket> — backend implement

Read ONLY:
- cursor/projects/backend/project-context.md
- backend/<exact paths>
- cursor/analysis/features/<slug>/user-story.md

Do NOT read: frontend/, infrastructure/, cursor/company/, full STORY-REGISTRY, agent transcripts.

Task: <single change>
Verify with: <command>
```

### Session hygiene (habits)

- **New chat per lifecycle phase** when possible.
- Feature package on disk = memory; thread = disposable.
- Prefer **one stack per task** in Agent mode.

### Definition of done

| Structure | Behavior |
| --- | --- |
| `context-scope.mdc` in `.cursor/rules/` | Learner opens new chat for review vs implement |
| Prompts include Do NOT read | Fewer unrelated files in diff; faster responses |

---

## M8 — Review and quality

### Why it matters

The agent does not self-approve. Review checks scope, contracts, and tests before close.

**Anti-pattern:** Merging because “the chat looked confident.”

### Template source

| Template path | Purpose |
| --- | --- |
| `templates/cursor-workspace/analysis/shared/review-guidelines.md` | What to check per stack |
| `prompts/feature/prompt-feature-review.md` | Review pass |
| `prompts/feature/prompt-feature-close-package.md` | Close lite |
| `prompts/feature/prompt-bug-fix.md` | Short path for small bugs |
| `prompts/feature/prompt-feature-manifest-update.md` | Stage updates |

### Adoption prompt — review (new chat)

```text
@cursor/prompts/feature/prompt-feature-review.md
@cursor/analysis/shared/review-guidelines.md
@cursor/analysis/features/<slug>/user-story.md
@cursor/analysis/features/<slug>/analysis.md

Feature slug: <slug>
Review the current branch diff against the story. Output: blocker / major / minor findings.
Do not implement fixes unless I ask for must-fix items only.
```

### Adoption prompt — close lite (no GitHub sync yet)

```text
@cursor/prompts/feature/prompt-feature-close-package.md
@cursor/analysis/features/<slug>/feature-manifest.md

Feature slug: <slug>
Close lite: update manifest stages, INDEX.md row, and any stack docs if contracts changed.
Skip sync-github-feature and release tags.
```

### Definition of done

| Structure | Behavior |
| --- | --- |
| Review findings recorded (even if empty) | Manifest `Current stage: done` or explicit blocker |
| `cursor/analysis/features/INDEX.md` updated | Pair reviewer can use review-guidelines checklist |

---

## M9 — Product brain (`cursor/company/`)

### Why it matters

Without written vision, the agent expands scope (“we could also…”). Separates **product backlog** (`FW-*`) from **execution tickets**.

**Anti-pattern:** Using Jira ticket id as Backlog ID in manifest.

### Template source

| Template path | Adopted path |
| --- | --- |
| `templates/cursor-workspace/company/README.md` | `cursor/company/README.md` |
| `templates/cursor-workspace/company/future-work/*` | `cursor/company/future-work/` |
| `templates/cursor-config/rules/company-product-context.mdc` | `.cursor/rules/` |

Create `cursor/company/product-vision.md` (one page; not in scaffold — human + Ask draft).

### Field distinction

| Field | Example | Meaning |
| --- | --- | --- |
| Backlog ID | `FW-ACME-012` | Product idea / epic seed |
| Ticket/story | `ACME-1041` | Sprint execution |

### Adoption prompt — product vision draft (Ask)

```text
@README.md
@docs/ (if present)
@<recent issue or epic description>

Task: Draft cursor/company/product-vision.md (English, one page max).

Sections: North star, In scope, Out of scope, Primary users, Non-goals.
Base only on attached evidence. Mark [TBD] where unknown.
Do not write file until I confirm.
```

### Adoption prompt — three backlog items

```text
@cursor/company/future-work/ITEM-TEMPLATE.md

Add three rows to cursor/company/future-work/STORY-REGISTRY.md using prefix FW-<PRODUCT>:
1. Tech debt item (real)
2. Feature item (real)
3. Risk or infra item (real)

Decision column: backlog for now. English only.
```

### Definition of done

| Structure | Behavior |
| --- | --- |
| `cursor/company/README.md` + short vision | Agent suggestions stay within in/out of scope when `@company` attached |
| 3 `FW-*` rows with product prefix | Manifest uses `FW-*` vs ticket id correctly |

**Capa D — do not copy:** another product's `SML-*`, populated registries, or foreign `runtime/` rules.

---

## M10 — New project (annex, not the 6-session course)

### Why it matters

Greenfield projects get the full kit on day one via the generator — no manual Layer 0 copy.

This course targets **existing repos**; M10 is for teams starting fresh or teaching the generator separately.

### Template source

- [`docs/examples/01-create-project.md`](../../examples/01-create-project.md)
- `generators/create-project/`
- Presets in root [`README.md`](../../../README.md)

### Command

```bash
cd project-foundation-template/generators/create-project
npm install
npm run create -- --name "Customer Portal" --slug customer-portal --preset fullstack-aws-enterprise --domain "customer engagement" --aws-region us-east-1
```

### Definition of done

| Structure | Behavior |
| --- | --- |
| `<slug>/` with `.cursor/`, `cursor/`, stacks per preset | `cursor/context-map.md` placeholders replaced; playbook present |
| `project.config.json` generated | Example 02 workflow runs intake on first feature |

---

## M11 — Automation (optional, Layer C)

### Why it matters

Scripts reduce copy-paste errors for intake, gates, and GitHub sync. Optional until Layer A+B is stable.

### Template source

| Script | Purpose |
| --- | --- |
| `templates/cursor-workspace/scripts/new-feature.mjs` | Feature folder + STORY-LOG |
| `templates/cursor-workspace/scripts/run-feature-gates.mjs` | Phase gate checks |
| `templates/cursor-workspace/scripts/start-feature.mjs` | Branch + package bootstrap |
| `templates/cursor-workspace/scripts/sync-github-feature.mjs` | Issues / Project sync |

Guide: [`docs/examples/03-github-sync-and-scripts.md`](../../examples/03-github-sync-and-scripts.md)

### Adoption command

```bash
node cursor/scripts/new-feature.mjs --name "Password reset via email" --area frontend --fw FW-ACME-012
node cursor/scripts/run-feature-gates.mjs --feature <slug> --phase analysis
```

### Definition of done

| Structure | Behavior |
| --- | --- |
| Scripts present under `cursor/scripts/` | `new-feature.mjs` creates folder + manifest skeleton |
| GitHub sync | Off by default until team configures hooks |

---

## M12 — Context trace (optional, after pilot stories)

### Why it matters

Turns token optimization from guesswork into evidence: which docs actually changed decisions.

**When to use:** Multi-folder features, ambiguous scope, repeated over-reads.

**When to skip:** Trivial single-file changes.

### Template source

- `templates/cursor-workspace/docs/context-trace-matrix.md`

Record 2–4 rows in `analysis.md` or `implementation-notes.md`:

```markdown
## Context trace

| Context read | Used? | Decision evidence |
| --- | --- | --- |
| cursor/projects/backend/project-context.md | Yes | Found test command for handler |
| Full STORY-REGISTRY.md | No | Only needed FW-ACME-012 row |
```

### Adoption prompt — trace after feature

```text
@cursor/analysis/features/<slug>/implementation-notes.md
@cursor/docs/context-trace-matrix.md

Add a "Context trace" section (2–4 rows): what was read, what changed a decision, recommendation (keep scoped / optional / summarize).

Do not propose new rules until we have 3+ similar features (pilot maturity).
```

### Definition of done

| Structure | Behavior |
| --- | --- |
| Trace section in one completed feature | Team can name one doc to stop loading by default |
| 3+ pilot stories (later) | Candidate update to playbook or `context-scope.mdc` |

---

## Before / after kit — what to observe

Use this table in session 2 (repeat change) and session 5 (close):

| Check | Before kit (M1) | After kit (M2–M8) |
| --- | --- | --- |
| Ask: “Where do I add a test?” | Generic or long scan | Cites `project-context.md` + path |
| Same class of change | More unrelated files | Narrower diff |
| New chat mid-story | Context lost | `@user-story.md` restores scope |
| Close | Merge only | Manifest + INDEX + checklist |
| Token habit | Whole repo | Read ONLY / Do NOT read in prompt |

---

## Future aspects (not in base course)

Track in [`loyalty-cursor/docs/FUTURE-WORK-CURSOR-KIT.md`](../../../../loyalty-cursor/docs/FUTURE-WORK-CURSOR-KIT.md) or team backlog:

| Aspect | Why deferred |
| --- | --- |
| Cursor Agent Skills (`SKILL.md`) | Advanced; needs stable Layer A first |
| MCP / external tools | Team-specific; security review |
| Subagents / parallel exploration | Cost and complexity |
| Model selection | Org policy varies |
| Large refactor playbook | Separate from feature lifecycle |
| `.cursorignore` / index tuning | Ops doc, not session 1–6 |
| User rules vs project rules | Personal preference workshop |

---

## Quick links

| Doc | Use |
| --- | --- |
| [Course README](README.md) | Agenda and objectives |
| [Facilitator guide](00-facilitator-guide.md) | Timing and demos |
| [Adopt on existing repo](adopt-on-existing-repo.md) | Copy order by layer |
| [Cheatsheet — Cursor](cheatsheet-cursor.md) | M1 prompts |
| [Cheatsheet — Lifecycle](cheatsheet-lifecycle.md) | M5–M6 phases |
| [Example workflow](../../examples/02-cursor-kit-workflow.md) | End-to-end paste sequence |
| [Create project](../../examples/01-create-project.md) | M10 generator |
| [Bootstrap project map](../../templates/cursor-workspace/prompts/adoption/prompt-bootstrap-project-map.md) | M2 Mode A/B |
| [Bootstrap stack context](../../templates/cursor-workspace/prompts/adoption/prompt-bootstrap-stack-context.md) | M4 Mode A/B |
