# Lab sesión 3 — Intake (sin código de producto)

**Meta:** carpeta de la feature con story, manifest y `analysis.md`. **Cero** cambios en `src/`.  
**Conceptos:** C05, C15–C18

Origen de archivos: `project-foundation-template`. Guía completa: [adopt-on-existing-repo.md](../adopt-on-existing-repo.md) → **Layer A** (filas marcadas **sesión 3**).

---

## Rutas: template vs tu repo

En el **foundation** el kit vive bajo `templates/cursor-workspace/`. Tras copiar en **tu repo** queda bajo `cursor/` (y prompts ya copiados en sesión 2 en `cursor/prompts/adoption/`).

```text
project-foundation-template/templates/cursor-workspace/…  →  <tu-repo>/cursor/…
```

**Sesión 3** añade plantillas, índice de features y prompts de **intake/story**. **No** copies aún el playbook ni los prompts de implement (sesiones 4–5) salvo que el facilitador diga lo contrario.

---

## Qué copias hoy vs qué creas después

| Tipo | Acción | Dónde queda |
| --- | --- | --- |
| **Plantillas** | Copias del template | `cursor/templates/*.md` |
| **Índice y READMEs de analysis** | Copias | `cursor/analysis/…` |
| **Prompts de feature (solo 2)** | Copias | `cursor/prompts/feature/…` |
| **Paquete de la historia** | **Generas** con intake (chat) + revisión humana | `cursor/analysis/features/<slug>/` o `…/<area>/<slug>/` |
| **Código de producto** | **No** en esta sesión | `src/`, `apps/`, etc. |

---

## Antes de empezar

- [ ] Mapa y reglas de la sesión 2 commiteados (`project.config.json`, `cursor/context-map.md`, al menos un `cursor/projects/<etiqueta>/project-context.md`).
- [ ] Ticket de 1–2 días acordado con el lead.
- [ ] Slug en kebab-case (ej. `filter-by-date`).
- [ ] Sabes el **stack scope** de la historia: una etiqueta de `stacks[]` (ej. `vite-ui`, `api`) — no confundir con la carpeta opcional `<area>/` del índice (`frontend`, `backend`, …).

---

## Pasos

### 1. Copia Layer A — solo lo de sesión 3

Desde `project-foundation-template` hacia la raíz de **tu** repo:

| Desde (template) | Hacia (tu repo) | Para qué |
| --- | --- | --- |
| `templates/cursor-workspace/templates/*` | `cursor/templates/` | Plantillas de story, manifest, analysis, etc. |
| `templates/cursor-workspace/analysis/README.md` | `cursor/analysis/README.md` | Convenciones de `cursor/analysis/` |
| `templates/cursor-workspace/analysis/features/README.md` | `cursor/analysis/features/README.md` | Cómo nombrar paquetes |
| `templates/cursor-workspace/analysis/features/INDEX.md` | `cursor/analysis/features/INDEX.md` | Tabla de features del equipo |
| `templates/cursor-workspace/analysis/shared/review-guidelines.md` | `cursor/analysis/shared/review-guidelines.md` | Review (sesión 5; copiar ya evita un paso después) |
| `templates/cursor-workspace/prompts/README.md` | `cursor/prompts/README.md` | Índice de prompts (si no existía) |
| `templates/cursor-workspace/prompts/feature/prompt-story-intake.md` | `cursor/prompts/feature/prompt-story-intake.md` | Intake de hoy |
| `templates/cursor-workspace/prompts/feature/prompt-user-story.md` | `cursor/prompts/feature/prompt-user-story.md` | Refinar story (opcional en clase) |

**No copies en sesión 3** (llegan en 4–5 según [adopt guide](../adopt-on-existing-repo.md)):

- `cursor/docs/AI-Project-Playbook.md`, `story-validation.md`, …
- `cursor/prompts/feature/prompt-feature-*.md` (implement, validate, review, close, …)

**Verifica:** existen al menos:

- `cursor/templates/user-story-template.md`
- `cursor/templates/feature-manifest-template.md`
- `cursor/templates/analysis-template.md`
- `cursor/prompts/feature/prompt-story-intake.md`
- `cursor/analysis/features/INDEX.md`

### 2. Abre un chat **nuevo**

No reutilices el hilo de la sesión 2.

**Verifica:** el historial no arrastra mensajes viejos del mapa.

### 3. Intake — Mode A (Ask)

Modo **Ask** (recomendado en clase): solo borrador en el chat; guardarás archivos en el paso 5 (o con Agent acotado en 5B).

Pega un bloque como este (adaptado a lo **copiado** en el paso 1; sin playbook hasta sesión 4):

```text
@cursor/prompts/feature/prompt-story-intake.md
@cursor/context-map.md
@cursor/projects/<etiqueta>/project-context.md
@cursor/templates/user-story-template.md
@cursor/templates/feature-manifest-template.md

Task type: story intake
Mode: A
Feature name: <name>
Feature slug: <kebab-case>
Stack scope: <etiqueta de stacks[] — ej. vite-ui | api>
Ticket/story: <id | n/a>
Backlog ID: n/a
Implement now? no
Do not edit application source. Draft markdown only.
```

Equivalente en [cheatsheet-lifecycle.md](../cheatsheet-lifecycle.md) incluye `@cursor/docs/AI-Project-Playbook.md` — **ómite esa línea** hasta que copies el playbook en sesión 4.

Rellena: feature name, slug, **stack scope** (= etiqueta del kit), ticket.  
**Implement now? no** — obligatorio.

**Verifica:** la respuesta trae borradores de `user-story.md` y `feature-manifest.md` (bloques markdown). El agente **no** abrió diffs en `src/` ni carpetas de producto.

### 4. Revisa story y manifest (inglés)

Abre los borradores. En el manifest:

- **In scope** concreto (paths o comportamiento).
- **Out of scope** con al menos **2 ítems** reales (ej. no i18n, no refactor tabla).
- Definition of done medible.

**Verifica:** puedes leer en voz alta un ítem de Out of scope que limita de verdad el trabajo.

### 5. Guarda el paquete en git

**Ruta** (sin taxonomía `<area>/` en el curso básico):

```text
cursor/analysis/features/<slug>/
  user-story.md
  feature-manifest.md
```

Con taxonomía opcional del índice:

```text
cursor/analysis/features/<area>/<slug>/
```

Ejemplos:

| Stack scope (kit) | Carpeta opcional `<area>` | Ruta final típica |
| --- | --- | --- |
| `vite-ui` | `frontend` (opcional) | `cursor/analysis/features/filter-by-date/` o `…/frontend/filter-by-date/` |
| `serverless-api` | `backend` (opcional) | `cursor/analysis/features/export-csv/` |

Crea la carpeta y pega el contenido **revisado** de la sesión 3 (inglés).

Añade una fila en `cursor/analysis/features/INDEX.md` (slug, nombre, area, stage `intake` o `analysis`).

#### 5B (opcional) — Mode B solo para markdown

Si prefieres que el Agent escriba archivos: chat **Agent** nuevo, mismo scope, solo `cursor/analysis/features/<slug>/`, con el texto ya revisado pegado en el mensaje. Sin tocar `src/`.

**Verifica:** `git status` lista solo archivos bajo `cursor/analysis/` y `cursor/templates/` (si los tocaste); **no** archivos bajo rutas de aplicación del mapa.

### 6. Completa `analysis.md`

En la **misma carpeta** del slug:

```text
cursor/analysis/features/<slug>/analysis.md
```

Parte de la estructura en `cursor/templates/analysis-template.md` (impacto, archivos a tocar, riesgos, comando de verify).

**Verifica:** `analysis.md` menciona al menos un riesgo y un comando o paso de prueba (idealmente el mismo que en `project-context.md` de tu etiqueta).

### 7. Workbook sesión 3

[participant-workbook.md](../participant-workbook.md).

---

## Árbol de referencia (después de sesión 3)

```text
<tu-repo>/
  cursor/
    templates/                    ← copiado paso 1
      user-story-template.md
      feature-manifest-template.md
      analysis-template.md
      …
    analysis/
      README.md
      features/
        INDEX.md                  ← fila nueva paso 5
        README.md
        <slug>/                   ← creado paso 5–6
          user-story.md
          feature-manifest.md
          analysis.md
      shared/
        review-guidelines.md
    prompts/
      feature/
        prompt-story-intake.md
        prompt-user-story.md
    context-map.md                ← sesión 2 (sin cambiar hoy salvo intake lo cite)
    projects/
      <etiqueta>/
        project-context.md        ← sesión 2
```

---

## Listo cuando

- [ ] Layer A sesión 3 copiado (tabla paso 1).
- [ ] `user-story.md` + `feature-manifest.md` + `analysis.md` en inglés bajo `cursor/analysis/features/…`.
- [ ] Fila en `INDEX.md`.
- [ ] Manifest acotado (no épico).
- [ ] **Cero** código de producto commiteado.
- [ ] Workbook sesión 3 completo.
- [ ] Commit sugerido: `chore(cursor): add feature templates and first story package`

---

## Si algo falla

| Pasa esto | Haz esto |
| --- | --- |
| Agent empieza a codear | Para. Sesión 4 es implement. Guarda solo markdown. |
| El intake pide `AI-Project-Playbook.md` | Normal en el prompt del template; en sesión 3 usa el bloque del paso 3 (sin playbook). |
| Out of scope vacío o “mejorar UX” | Escribe 2 exclusiones concretas a mano. |
| Ticket demasiado grande | Recorta con el lead **ahora**; actualiza manifest. |
| No sabes la ruta de la carpeta | Sin `<area>`: `cursor/analysis/features/<slug>/`; ver `cursor/analysis/features/README.md`. |
