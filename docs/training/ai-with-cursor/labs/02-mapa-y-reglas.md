# Lab sesión 2 — Mapa y reglas

**Meta:** mapa del repo, identidad y reglas que el editor carga solo.  
**Conceptos:** C07, C13, C14

Origen de archivos: `project-foundation-template`. Guía de copia: [adopt-on-existing-repo.md](../adopt-on-existing-repo.md) → **Layer 0**.

---

## Antes de empezar

- [ ] Terminaste el lab de la sesión 1.
- [ ] Tienes abierto el repo **y** la carpeta `project-foundation-template` (para copiar).
- [ ] Sabes qué **áreas** (`stacks` en JSON) usar y qué **carpetas reales** describen cada parte — no tiene que ser `frontend/` / `backend/`.
- [ ] Tienes claro si es **mono-repo** (un solo producto en un git) u **varias partes** en el mismo git (varios stacks). El curso usa **un repo por persona**, no la carpeta padre que agrupa varios repos.

---

## Proyecto vs áreas (`stacks`)

En el kit, **proyecto (producto)** y **`stacks`** no son lo mismo.

| Concepto | Qué es | Dónde |
| --- | --- | --- |
| **Proyecto / producto** | El producto de negocio (un nombre para el equipo) | `projectName`, `projectSlug`, `businessDomain` en `project.config.json` |
| **Repo git** | Lo que abres en Cursor | Raíz del repo; un `cursor/context-map.md` |
| **Área técnica** | UI, API, infra, mobile… contexto separado para el agente | `stacks` en JSON + `cursor/projects/<etiqueta>/project-context.md` |

El array del JSON se llama **`stacks`** por el template; en clase puedes decir **áreas** o **partes**. Tener UI y API en el mismo producto **no** significa un solo stack: suele ser **un proyecto** con **dos** etiquetas en `stacks`.

**Ejemplo — un git, un producto, UI + API**

```json
"projectName": "Loyalty",
"stacks": ["vite-ui", "serverless-api"]
```

- Un `project-context.md` por etiqueta, con carpetas reales (`loyalty-app-vite/`, `otp-api/`, etc.).
- Un mapa compartido que liste ambas áreas.

**Ejemplo — solo una parte en este git**

- `stacks: ["api"]` y un solo `project-context.md` aunque el producto completo también tenga UI en **otro** repo.

**Varios repos git**

- Cada repo = su propio kit y su mapa. El curso no asume un monorepo que agrupa varios repos; eso es patrón avanzado.

Detalle y tablas: [adopt-on-existing-repo.md](../adopt-on-existing-repo.md) → *Product (project) vs technical areas*.

---

## Dos archivos distintos (no confundir)

| Archivo | Rol |
| --- | --- |
| `.cursor/rules/project-context.mdc` | Regla **corta**, carga siempre: *dónde buscar* (mapa → stack context). |
| `cursor/projects/<stack>/project-context.md` | Documento **largo**: cómo se trabaja en ese stack (tests, carpetas). |

El bootstrap **no sustituye** al `.mdc`: lo **copias** del template y luego lo **adaptas** a tus rutas reales.

---

## El repo no tiene que llamarse `frontend/` ni `backend/`

Muchos productos usan **otros nombres de carpeta**: `src/`, `apps/web/`, `loyalty-app-vite/`, `transaction-api/`, `services/`, `packages/ui/`, etc.

| Concepto | Qué es | Ejemplo |
| --- | --- | --- |
| **Nombre de stack** | Etiqueta en `project.config.json` y en `cursor/projects/<stack>/` | `vite-ui`, `serverless-api`, `runtime` |
| **Ruta real en git** | Lo que dice el **mapa** y el `project-context.md` | `loyalty-app-vite/src/`, `otp-api/` |

El nombre del stack **no tiene** que coincidir con el nombre de la carpeta. Lo que importa es que el mapa y el `project-context.md` apunten a **paths que existen**.

Scaffold del template (`templates/.../projects/frontend|backend/`): punto de partida. Copia el más parecido **o** crea `cursor/projects/<tu-etiqueta>/project-context.md` vacío y rellénalo con el bootstrap. No crees carpetas `frontend/` en el código solo para calzar con el template.

---

## Pasos

### 1. Crea `project.config.json` en la raíz

Usa el ejemplo mínimo de [adopt-on-existing-repo.md](../adopt-on-existing-repo.md).  
`preset`: `"existing"`. `stacks`: solo los que existen.

**Verifica:** `stacks` no incluye `frontend` si no tienes frontend.

### 2. Copia el scaffold del kit (Layer 0)

Desde el template hacia tu repo:

| Desde template | Hacia tu repo |
| --- | --- |
| `templates/root-common/cursorignore` | `.cursorignore` |
| `templates/cursor-workspace/context-map.md` | `cursor/context-map.md` |
| `templates/cursor-workspace/prompts/adoption/*` | `cursor/prompts/adoption/` (misma carpeta; el template la llama `cursor-workspace/`) |
| `templates/cursor-config/rules/core-standards.mdc` | `.cursor/rules/core-standards.mdc` |
| `templates/cursor-config/rules/project-context.mdc` | `.cursor/rules/project-context.mdc` |
| `templates/cursor-config/rules/documentation-english.mdc` | `.cursor/rules/documentation-english.mdc` |

Copia `project-context.md` del stack que **sí** tienes (ej. `templates/.../projects/backend/`) a `cursor/projects/<tu-stack>/`.

**Verifica:** existen `.cursorignore` (para no saturar el indexador con `node_modules` ni builds), `cursor/context-map.md` y al menos un archivo en `.cursor/rules/`.

### 3. Borrador del mapa — Mode A (Ask)

Abre **Ask**. Abre en el editor:

`cursor/prompts/adoption/prompt-bootstrap-project-map.md`

(si aún no copiaste: `project-foundation-template/templates/cursor-workspace/prompts/adoption/prompt-bootstrap-project-map.md` — adjúntalo con `@`).

1. Copia el bloque **Prompt to paste — Mode A** tal cual del archivo (no improvises el texto).
2. En el mismo mensaje, adjunta con `@`: `README`, manifesto raíz (`package.json`, `go.mod`, …) y **2–6 rutas reales** que existan hoy.
3. Modo **Ask**; el prompt debe decir `Mode: A (draft only)`.

**Verifica:** la respuesta trae bloques cercados de `context-map.md` y `project.config.json`, lista **Assumptions**, y **no** inventa `frontend/` si no existe.

### 4. Corrige a mano lo inventado

Borra carpetas que no existen. Ajusta nombres de **áreas** en `stacks` para que calcen con lo que vas a crear en `cursor/projects/<etiqueta>/`.

**Verifica:** cada fila del mapa apunta a una ruta que puedes abrir en el explorador de archivos.

### 5. Aplica el mapa — Mode B (Agent)

Abre **Agent**. Copia el bloque **Mode B** del mismo `prompt-bootstrap-project-map.md`.

Adjunta con `@` el mapa y el config **ya revisados** (archivos en disco tras el paso 4, o el contenido corregido en el chat si aún no guardaste).

**Verifica:** `git status` muestra cambios en `cursor/context-map.md` y/o `project.config.json`; `stacks` lista solo áreas que vas a documentar en el paso 6.

### 6. Contexto del área — Mode A y Mode B

**Cuándo:** después del paso 5 (`context-map.md` y `project.config.json` aplicados).

**Una vuelta por etiqueta** en `project.config.json` → `stacks`. Si tienes `["vite-ui", "serverless-api"]`, haces este paso **dos veces** (no mezcles UI y API en un solo `project-context.md`).

Antes de pegar el prompt, define para **esta** área:

| Campo | Ejemplo | Regla |
| --- | --- | --- |
| **Stack name** (etiqueta del kit) | `vite-ui`, `api`, `app` | Igual que un elemento de `stacks[]` y que la carpeta `cursor/projects/<etiqueta>/` |
| **Stack root path** | `loyalty-app-vite/`, `src/`, `apps/api/` | Carpeta **real** en git; debe existir y coincidir con el mapa |

Asegura `cursor/projects/<etiqueta>/` (scaffold del paso 2 o carpeta nueva). El archivo destino es `cursor/projects/<etiqueta>/project-context.md` (**inglés**, ~80 líneas máx.).

#### 6A — Mode A (Ask)

Abre `cursor/prompts/adoption/prompt-bootstrap-stack-context.md` y copia el bloque **Mode A**.

Adjunta con `@`:

- El prompt y `@cursor/context-map.md`
- Manifest de **esa** área (raíz o subcarpeta: `package.json`, `go.mod`, …)
- Carpeta principal de código bajo el *stack root path*
- Carpeta de tests o README donde figure cómo ejecutar tests

En el texto pegado, rellena:

- `Stack name: <tu-etiqueta>`
- `Stack root path: <ruta-real>/`

**Verifica (borrador):** el markdown propuesto incluye las 5 secciones del prompt — (1) resumen, (2) mapa de carpetas, (3) comandos, (4) convenciones, (5) *do not assume*; no inventa `frontend/`/`backend/`; puede usar `[TBD]` donde no haya evidencia en los `@`.

#### 6B — Revisa tú el borrador

Quita comandos que no hayas visto en README o en el manifest. Alinea rutas con el mapa del paso 5. Si el agente mezcló otra área del repo, borra ese bloque.

#### 6C — Mode B (Agent)

Copia **Mode B** del mismo prompt. Adjunta `@cursor/projects/<etiqueta>/project-context.md` si ya existe como scaffold, o pega el markdown **ya revisado** en el mensaje junto al bloque Mode B.

Rellena `Stack name: <etiqueta>`.

**Verifica:** `git status` muestra `cursor/projects/<etiqueta>/project-context.md` creado o actualizado.

#### 6D — Verificación humana (por área)

1. **Ejecuta** cada comando de la sección **Commands** en tu máquina (o confírmalo con CI). Si falla, corrige el `.md` a mano antes de seguir.
2. **Ask:** *“Where do I add a new test for &lt;algo de esta área&gt;?”* → debe coincidir con la sección de carpetas del `project-context.md`.
3. ¿Quedan etiquetas en `stacks` sin archivo? Vuelve a **6A** con la siguiente.

**Listo en el paso 6 cuando:** hay un `project-context.md` **revisado por ti** por cada entrada en `stacks` (en el curso basta con **una** área si solo tienes una en `stacks`).

### 7. Ajusta `project-context.mdc` (mono-repo o stacks reales)

El template asume a veces `frontend/`, `backend/`, `infrastructure/`. En un **mono-repo con un solo stack** suele bastar:

1. En `project.config.json`: `"stacks": ["<nombre-real>"]` — un solo elemento (ej. `api`, `app`, `vite-ui`).
2. Un solo archivo: `cursor/projects/<nombre-real>/project-context.md` (ya del paso 6).
3. Abre `.cursor/rules/project-context.mdc` y **borra** líneas que apunten a stacks o carpetas que no existen.
4. Deja (o escribe) **una** instrucción de descubrimiento, por ejemplo:
   - *Before changing application code, read `cursor/projects/<stack>/project-context.md` and `cursor/context-map.md`.*
5. Si el código vive en `src/` (no en `frontend/`), el mapa y el `project-context.md` deben decir `src/`, no nombres del generador.

**Mono-repo con varias apps en el mismo git** (ej. `apps/web` + `services/api`): varios stacks en `project.config.json`, un `project-context.md` por stack, y en el `.mdc` una línea por stack — solo los que existen.

**Verifica:** el `.mdc` no menciona `frontend/**` si tu repo no tiene carpeta `frontend/`. Ask: *“What file should I read before editing tests?”* → cita el mapa o el `project-context.md` de **tu** stack.

### 8. Regla de stack (solo si aplica)

Copia `frontend-react.mdc`, `backend-serverless.mdc` o `infrastructure-terraform.mdc` **solo** si ese stack es el tuyo. Si no, omite.

**Verifica:** no hay reglas de React en un repo solo backend.

### 9. Prueba de control (Ask)

Pregunta: *“Where do I add a new test for &lt;algo de tu repo&gt;?”*

**Verifica:** la respuesta **cita** `cursor/context-map.md` o tu `project-context.md`, no inventa una carpeta nueva.

### 10. (Opcional) Repite un cambio chico con mapa

Mismo tipo de cambio que sesión 1, pero adjunta `@cursor/context-map.md` y `@cursor/projects/<stack>/project-context.md`.

**Verifica:** tocó menos archivos “de regalo” que en la sesión 1, o el scope fue más explícito.

### 11. Workbook sesión 2

Marca checkboxes en [participant-workbook.md](../participant-workbook.md).

---

## Listo cuando

- [ ] `project.config.json` refleja stacks reales.
- [ ] El mapa no menciona carpetas inventadas.
- [ ] Un `project-context.md` por cada área en `stacks` (mínimo uno revisado por ti; comandos probados).
- [ ] `project-context.mdc` adaptado (sin stacks/carpetas inventadas).
- [ ] Pasaste la prueba de control en Ask.
- [ ] Commit sugerido: `chore(cursor): add project map and core rules`

---

## Si algo falla

| Pasa esto | Haz esto |
| --- | --- |
| Mode A inventó `frontend/` | Edita el borrador; no pases a Mode B hasta limpiar. |
| Mode A del área mezcló UI y API | Un chat por etiqueta; borra la parte que no es del *stack root path*. |
| Comandos en `project-context.md` fallan | Corrige la sección **Commands** a mano; vuelve a ejecutar antes del commit. |
| La prueba de control falla | 10 min editando el mapa a mano; vuelve a preguntar. |
| No encuentras el template | Ruta base: `project-foundation-template/templates/` |
| El agente busca `frontend/` en repo solo `src/` | Edita mapa + `project-context.mdc` + `project-context.md` |
