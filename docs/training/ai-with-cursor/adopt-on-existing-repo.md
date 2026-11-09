# Adopt the Cursor kit on an existing repo

Orden de copia para este curso. Origen: `project-foundation-template`. Destino: la raíz del repo **existente** del alumno.

Reemplazar placeholders al copiar a mano (el generador no corre aquí):

- `__PROJECT_NAME__`, `__PROJECT_SLUG__`, `__BUSINESS_DOMAIN__`, `__PRESET__`, `__AWS_REGION__`, `__OWNER_TEAM__`

`__PRESET__` en un repo legado: usa `existing` o el stack real (`frontend-vite`, `go-api`, etc.). No inventes `fullstack-aws-enterprise` si el repo no lo es.

Checklist operativo (sin didáctica): [`docs/cursor-kit-sync.md`](../../cursor-kit-sync.md).

### Rutas: template vs repo del alumno

En **este** repositorio (`project-foundation-template`) el kit **no** está bajo `cursor/`. Vive en:

```text
templates/cursor-workspace/prompts/adoption/prompt-bootstrap-project-map.md
templates/cursor-workspace/prompts/adoption/prompt-bootstrap-stack-context.md
```

Tras copiar Layer 0 al repo del alumno, la misma carpeta queda en:

```text
cursor/prompts/adoption/…
```

Los bloques `@cursor/prompts/adoption/…` dentro de los prompts asumen **ya copiado** en el repo del alumno. En el template, abre o `@`-adjunta la ruta `templates/cursor-workspace/prompts/adoption/…` (o copia primero y usa `cursor/…`).

---

## Layer 0 — Session 2

Identity + map + always-on rules. Sin esto el resto del kit no tiene ancla.

### Product (project) vs technical areas (`stacks`)

The kit uses **three names** for different things. Do not treat `stacks` as “the whole product.”

| Concept | Meaning | Where in the kit |
| --- | --- | --- |
| **Product / project** | The business product you build (one name for the team) | `projectName`, `projectSlug`, `businessDomain` in `project.config.json` |
| **Git repo** | One workspace you open in Cursor | Repo root; one `cursor/context-map.md` per repo |
| **Technical area** | UI, API, infra, mobile, runtime — a slice of context for the agent | `stacks[]` + `cursor/projects/<label>/project-context.md` |

The JSON field is still called **`stacks`** (template history). Read it as **areas** or **components** of the same product. One product can have UI **and** API without being “one stack.”

**One repo, one product, UI + API together**

```json
{
  "projectName": "Loyalty",
  "projectSlug": "loyalty",
  "stacks": ["vite-ui", "serverless-api"]
}
```

- One `projectName` for the product.
- Two entries in `stacks` → two `project-context.md` files (each with **real** paths, e.g. `loyalty-app-vite/` and `loyalty-program-serverless/`).
- One shared `context-map.md` listing both areas.
- `.cursor/rules/project-context.mdc`: one discovery line per area that exists.

**One repo, only UI or only API**

- Still one **product** in `projectName` (even if the full product also has another git repo elsewhere).
- `stacks: ["app"]` or `["api"]` → one context file is enough.

**Several git repos for one product**

- Each repo gets its **own** kit (own map, own `project.config.json`).
- Same `projectName` is optional; often each repo has a focused name (`Loyalty UI` / `Loyalty API`).
- Full-stack hub patterns (sync between repos) are advanced; see product examples, not session 2 default.

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

Ajusta `stacks` a etiquetas que tenga sentido para **tu** equipo. No tienen que llamarse `frontend` / `backend` / `infrastructure` ni coincidir con nombres de carpeta.

Ejemplos de `stacks` en repos reales: `["vite-ui"]`, `["serverless-api"]`, `["ui","api"]`, `["runtime"]`, `["mobile"]`.

El **mapa** y cada `project-context.md` deben usar **rutas que existen** (`src/`, `apps/web/`, `transaction-api/`, `loyalty-app-vite/`, etc.). El template del generador usa `frontend/` y `backend/` como convención de **proyectos nuevos**; en repos legados son solo referencia al copiar el scaffold.

### Copy and adapt

| From template | To existing repo |
| --- | --- |
| `templates/cursor-workspace/context-map.md` | `cursor/context-map.md` |
| `templates/cursor-workspace/README.md` | `cursor/README.md` |
| `templates/cursor-workspace/prompts/adoption/*` | `cursor/prompts/adoption/` |
| `templates/cursor-workspace/projects/<stack>/project-context.md` | solo stacks que existan |
| `templates/root-common/cursorignore` | `.cursorignore` |
| `templates/cursor-config/rules/core-standards.mdc` | `.cursor/rules/core-standards.mdc` |
| `templates/cursor-config/rules/project-context.mdc` | `.cursor/rules/project-context.mdc` |
| `templates/cursor-config/rules/documentation-english.mdc` | `.cursor/rules/documentation-english.mdc` |
| Stack rule if it matches | `.cursor/rules/frontend-react.mdc` / `backend-serverless.mdc` / `infrastructure-terraform.mdc` |

Editar `.cursorignore`: asegúrate de que excluya `node_modules/`, `dist/`, builds, reportes y `package-lock.json` para evitar que el indexador semántico y `@Codebase` devoren la ventana de contexto y el cupo de tokens.

Editar `context-map.md`: borrar carpetas que el repo no tiene. Añadir las que sí (`apps/`, `services/`, `runtime/`, etc.).

Editar `project-context.md`: 1–2 páginas de **cómo está hoy** el stack (rutas, tests, convenciones). El agente puede redactar el primer borrador; el humano corrige.

**Editar `.cursor/rules/project-context.mdc`** (no confundir con `cursor/projects/.../project-context.md`):

- El `.mdc` es la regla corta *alwaysApply*: orden de lectura (config → mapa → stack context).
- El `.md` bajo `cursor/projects/<stack>/` es el contenido largo del stack.
- Borra referencias a `frontend/`, `backend/`, `infrastructure/` si no existen en tu repo.

### Mono-repo (un solo stack en un git)

Válido y habitual en el curso. Ejemplo mínimo:

```json
{
  "projectName": "My API",
  "projectSlug": "my-api",
  "businessDomain": "…",
  "preset": "existing",
  "ownerTeam": "product",
  "stacks": ["api"]
}
```

- Una carpeta: `cursor/projects/api/project-context.md` (el segmento `api` es la **etiqueta** en `stacks`; puede ser `vite-ui`, `otp-api`, etc.).
- Un solo bloque de descubrimiento en `project-context.mdc` apuntando a ese archivo y a rutas reales (`src/`, `apps/foo/`, etc.).
- No hace falta copiar scaffold de `projects/frontend/` si no tienes carpeta `frontend/`. Puedes partir del scaffold `backend/` solo como **formato** del markdown y borrar referencias a `backend/`.

Varias apps **en el mismo git** = varios elementos en `stacks`, un `project-context.md` por etiqueta, y una línea por stack en el `.mdc`. Cada contexto describe **sus** carpetas, aunque ninguna se llame `frontend` o `backend`.

### Nombres de carpeta ≠ nombres del template

| En el kit (generador) | En tu repo (válido) |
| --- | --- |
| `frontend/` | `loyalty-app-vite/`, `apps/web/`, `src/` |
| `backend/` | `loyalty-program-serverless/`, `services/`, `otp-api/` |
| `infrastructure/` | `terraform/`, `deploy/`, `.aws/` |

`project.config.json` → `stacks` = etiquetas lógicas. `context-map.md` → rutas físicas.

**Prompts de bootstrap (recomendado en sesión 2):**

| From template | Use |
| --- | --- |
| `templates/cursor-workspace/prompts/adoption/prompt-bootstrap-project-map.md` | `cursor/prompts/adoption/` — Mode A (Ask) draft → human edit → Mode B (Agent) apply map + `project.config.json` |
| `templates/cursor-workspace/prompts/adoption/prompt-bootstrap-stack-context.md` | `cursor/prompts/adoption/` — repeat **per entry** in `stacks` (one technical area per file) |

**Stack / area context bootstrap** (after map exists):

1. Pick one label from `project.config.json` → `stacks` (e.g. `vite-ui`).
2. Set **Stack root path** to a real folder (`src/`, `apps/api/`, `loyalty-app-vite/`).
3. Mode A (Ask): paste Mode A from the prompt; attach `@cursor/context-map.md`, area manifest, source tree, tests/README.
4. Human review: fix paths and commands; trim invented `frontend/` / `backend/`.
5. Mode B (Agent): apply to `cursor/projects/<label>/project-context.md` (English, ~80 lines).
6. Run each command in **Commands** locally; repeat for the next label in `stacks`.

Step-by-step (Spanish): [labs/02-mapa-y-reglas.md](labs/02-mapa-y-reglas.md) → pasos 6A–6D.

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

Step-by-step copy list (Spanish, session 3 only): [labs/03-intake-sin-codigo.md](labs/03-intake-sin-codigo.md) → paso 1.

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
