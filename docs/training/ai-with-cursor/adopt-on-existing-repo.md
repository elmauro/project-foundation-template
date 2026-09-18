# Adopt the Cursor kit on an existing repo

Orden de copia para este curso. Origen: `project-foundation-template`. Destino: la raíz del repo **existente** del alumno.

Reemplazar placeholders al copiar a mano (el generador no corre aquí):

- `__PROJECT_NAME__`, `__PROJECT_SLUG__`, `__BUSINESS_DOMAIN__`, `__PRESET__`, `__AWS_REGION__`, `__OWNER_TEAM__`

`__PRESET__` en un repo legado: usa `existing` o el stack real (`frontend-vite`, `go-api`, etc.). No inventes `fullstack-aws-enterprise` si el repo no lo es.

Checklist operativo (sin didáctica): [`docs/cursor-kit-sync.md`](../../cursor-kit-sync.md).

---

## Layer 0 — Session 2

Identity + map + always-on rules. Sin esto el resto del kit no tiene ancla.

### Create (do not copy blindly)

`project.config.json` mínimo (English keys; fill with the real product):

```json
{
  "projectName": "Example App",
  "projectSlug": "example-app",
  "businessDomain": "example domain",
  "preset": "existing",
  "ownerTeam": "product",
  "stacks": ["frontend"]
}
```

Ajusta `stacks` a lo que el repo **tiene**: `frontend`, `backend`, `infrastructure`, u otros nombres reales (`api`, `mobile`, `runtime`).

### Copy and adapt

| From template | To existing repo |
| --- | --- |
| `templates/cursor-workspace/context-map.md` | `cursor/context-map.md` |
| `templates/cursor-workspace/README.md` | `cursor/README.md` |
| `templates/cursor-workspace/prompts/adoption/*` | `cursor/prompts/adoption/` |
| `templates/cursor-workspace/projects/<stack>/project-context.md` | solo stacks que existan |
| `templates/cursor-config/rules/core-standards.mdc` | `.cursor/rules/core-standards.mdc` |
| `templates/cursor-config/rules/project-context.mdc` | `.cursor/rules/project-context.mdc` |
| `templates/cursor-config/rules/documentation-english.mdc` | `.cursor/rules/documentation-english.mdc` |
| Stack rule if it matches | `.cursor/rules/frontend-react.mdc` / `backend-serverless.mdc` / `infrastructure-terraform.mdc` |

Editar `context-map.md`: borrar carpetas que el repo no tiene. Añadir las que sí (`apps/`, `services/`, `runtime/`, etc.).

Editar `project-context.md`: 1–2 páginas de **cómo está hoy** el stack (rutas, tests, convenciones). El agente puede redactar el primer borrador; el humano corrige.

**Prompts de bootstrap (recomendado en sesión 2):**

| From template | Use |
| --- | --- |
| `templates/cursor-workspace/prompts/adoption/prompt-bootstrap-project-map.md` | `cursor/prompts/adoption/` — Mode A draft, then Mode B apply map + `project.config.json` |
| `templates/cursor-workspace/prompts/adoption/prompt-bootstrap-stack-context.md` | `cursor/prompts/adoption/` — one stack at a time |

Si el stack no es React/serverless/Terraform, **no copies** esa regla. Escribe una regla corta propia o deja solo `core-standards` + `project-context`.

---

## Layer A — Sessions 3–5

Durable work memory + prompts + playbook.

| From template | To existing repo | Session |
| --- | --- | --- |
| `templates/cursor-workspace/templates/*` | `cursor/templates/` | 3 |
| `templates/cursor-workspace/analysis/README.md` | `cursor/analysis/README.md` | 3 |
| `templates/cursor-workspace/analysis/features/README.md` | `cursor/analysis/features/README.md` | 3 |
| `templates/cursor-workspace/analysis/features/INDEX.md` | `cursor/analysis/features/INDEX.md` | 3 |
| `templates/cursor-workspace/analysis/shared/review-guidelines.md` | `cursor/analysis/shared/review-guidelines.md` | 3 / 5 |
| `templates/cursor-workspace/prompts/README.md` | `cursor/prompts/README.md` | 3 |
| `templates/cursor-workspace/prompts/feature/prompt-story-intake.md` | idem | 3 |
| `templates/cursor-workspace/prompts/feature/prompt-user-story.md` | idem | 3 |
| `templates/cursor-workspace/docs/AI-Project-Playbook.md` | `cursor/docs/AI-Project-Playbook.md` | 4 |
| `templates/cursor-workspace/docs/story-validation.md` | `cursor/docs/story-validation.md` | 4 |
| `templates/cursor-workspace/docs/documentation-governance.md` | `cursor/docs/documentation-governance.md` | 4 |
| `prompts/feature/prompt-feature-analysis-package.md` | idem | 4 |
| `prompts/feature/prompt-feature-implementation-package.md` | idem | 4 |
| `prompts/feature/prompt-feature-validation-package.md` | idem | 4 |
| `prompts/feature/prompt-feature-lifecycle.md` | idem | 4 |
| `prompts/feature/prompt-feature-review.md` | idem | 5 |
| `prompts/feature/prompt-feature-close-package.md` | idem | 5 |
| `prompts/feature/prompt-bug-fix.md` | idem | 5 |
| `prompts/feature/prompt-test-checklist.md` | idem | 4 |
| `prompts/feature/prompt-feature-manifest-update.md` | idem | 5 |
| `templates/cursor-config/rules/context-scope.mdc` | `.cursor/rules/context-scope.mdc` | 5 |
| `templates/cursor-workspace/docs/context-scope-sessions.md` | `cursor/docs/context-scope-sessions.md` | 5 |
| `templates/cursor-workspace/docs/context-trace-matrix.md` | `cursor/docs/context-trace-matrix.md` | 5 (optional) |

Feature packages **no se copian** de ningún producto. Se crean vacíos con intake:

```text
cursor/analysis/features/<area>/<slug>/
  feature-manifest.md
  user-story.md
  analysis.md
  implementation-notes.md
  test-checklist.md
```

`<area>` es opcional. Sin taxonomía de producto, usa `cursor/analysis/features/<slug>/`.

Adaptar `review-guidelines.md`: quitar secciones de stacks que no existen.

---

## Layer B — Session 6

Product brain. Copiar el scaffold **vacío**, luego escribir visión en inglés.

| From template | To existing repo |
| --- | --- |
| `templates/cursor-workspace/company/README.md` | `cursor/company/README.md` |
| `templates/cursor-workspace/company/DOCUMENTATION-GOVERNANCE.md` | `cursor/company/DOCUMENTATION-GOVERNANCE.md` |
| `templates/cursor-workspace/company/future-work/*` | `cursor/company/future-work/` |
| `templates/cursor-config/rules/company-product-context.mdc` | `.cursor/rules/company-product-context.mdc` |

Añadir un `product-vision.md` corto (una página) si el equipo aún no tiene visión escrita. No copies la visión de Simulith.

Prefijos: elige `FW-<SLUG>-###` y un prefijo de ejecución (`ACME-001`, no `SML-001` salvo que el producto sea Simulith).

---

## Layer C — Session 6 optional

Scripts and GitHub sync. Instalar solo si el equipo ya usa el ciclo A+B.

| From template | To existing repo |
| --- | --- |
| `templates/cursor-workspace/scripts/*` | `cursor/scripts/` |
| `templates/cursor-workspace/docs/github-projects-sync.md` | `cursor/docs/github-projects-sync.md` |
| `templates/cursor-config/hooks.json` | `.cursor/hooks.json` |

`hooks.json` queda **off** hasta configurar `cursor/scripts/github-story.config.json` (partir del `.example`). Ver `docs/examples/03-github-sync-and-scripts.md`.

---

## Layer D — do not copy

- Story IDs and registries of another product (`SML-*`, `FW-DDB-*`, …)
- `cursor/projects/runtime/` unless this repo **has** that stack
- AWS parity / verify matrices
- Populated `STORY-REGISTRY.md` from Simulith or Loyalty
- Business rules, pricing, partnership docs
- `analysis/features/<slug>/` with real work from another repo

---

## Suggested commit messages (English)

Session 2: `chore(cursor): add project map and core rules`  
Session 3: `chore(cursor): add feature templates and first story package`  
Session 4: `chore(cursor): add playbook and feature prompts`  
Session 5: `chore(cursor): add review, close, and context-scope rules`  
Session 6: `chore(cursor): add company context and product backlog scaffold`
