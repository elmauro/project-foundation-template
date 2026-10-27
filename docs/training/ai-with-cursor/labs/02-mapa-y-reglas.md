# Lab sesión 2 — Mapa y reglas

**Meta:** mapa del repo, identidad y reglas que el editor carga solo.  
**Conceptos:** C07, C13, C14

Origen de archivos: `project-foundation-template`. Guía de copia: [adopt-on-existing-repo.md](../adopt-on-existing-repo.md) → **Layer 0**.

---

## Antes de empezar

- [ ] Terminaste el lab de la sesión 1.
- [ ] Tienes abierto el repo **y** la carpeta `project-foundation-template` (para copiar).
- [ ] Sabes qué stacks tiene tu repo de verdad (frontend, api, infra, etc.).

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
| `templates/cursor-workspace/context-map.md` | `cursor/context-map.md` |
| `templates/cursor-workspace/prompts/adoption/*` | `cursor/prompts/adoption/` |
| `templates/cursor-config/rules/core-standards.mdc` | `.cursor/rules/core-standards.mdc` |
| `templates/cursor-config/rules/project-context.mdc` | `.cursor/rules/project-context.mdc` |
| `templates/cursor-config/rules/documentation-english.mdc` | `.cursor/rules/documentation-english.mdc` |

Copia `project-context.md` del stack que **sí** tienes (ej. `templates/.../projects/backend/`) a `cursor/projects/<tu-stack>/`.

**Verifica:** existen `cursor/context-map.md` y al menos un archivo en `.cursor/rules/`.

### 3. Borrador del mapa — Mode A (Ask)

Abre **Ask**. Pega el bloque **Mode A** de:

`cursor/prompts/adoption/prompt-bootstrap-project-map.md`

Adjunta con `@`: README, manifesto raíz (`package.json`, `go.mod`, …) y 2–6 rutas reales.

**Verifica:** la respuesta trae bloques de `context-map.md` y `project.config.json` **sin** inventar `frontend/` si no existe.

### 4. Corrige a mano lo inventado

Borra carpetas que no existen. Ajusta nombres de stacks.

**Verifica:** cada fila del mapa apunta a una ruta que puedes abrir en el explorador de archivos.

### 5. Aplica el mapa — Mode B (Agent)

Pega el bloque **Mode B** del mismo prompt con el contenido ya revisado.

**Verifica:** `git status` muestra cambios en `cursor/context-map.md` y/o `project.config.json`.

### 6. Contexto del stack — Mode A y Mode B

Repite con `prompt-bootstrap-stack-context.md` **un stack a la vez**.

Adjunta `@cursor/context-map.md` y rutas de código y tests de ese stack.

**Verifica:** `cursor/projects/<stack>/project-context.md` dice cómo correr tests y dónde agregar código nuevo (1–2 páginas, en inglés).

### 7. Regla de stack (solo si aplica)

Copia `frontend-react.mdc`, `backend-serverless.mdc` o `infrastructure-terraform.mdc` **solo** si ese stack es el tuyo. Si no, omite.

**Verifica:** no hay reglas de React en un repo solo backend.

### 8. Prueba de control (Ask)

Pregunta: *“Where do I add a new test for &lt;algo de tu repo&gt;?”*

**Verifica:** la respuesta **cita** `cursor/context-map.md` o tu `project-context.md`, no inventa una carpeta nueva.

### 9. (Opcional) Repite un cambio chico con mapa

Mismo tipo de cambio que sesión 1, pero adjunta `@cursor/context-map.md` y `@cursor/projects/<stack>/project-context.md`.

**Verifica:** tocó menos archivos “de regalo” que en la sesión 1, o el scope fue más explícito.

### 10. Workbook sesión 2

Marca checkboxes en [participant-workbook.md](../participant-workbook.md).

---

## Listo cuando

- [ ] `project.config.json` refleja stacks reales.
- [ ] El mapa no menciona carpetas inventadas.
- [ ] Al menos un `project-context.md` revisado por ti.
- [ ] Pasaste la prueba de control en Ask.
- [ ] Commit sugerido: `chore(cursor): add project map and core rules`

---

## Si algo falla

| Pasa esto | Haz esto |
| --- | --- |
| Mode A inventó `frontend/` | Edita el borrador; no pases a Mode B hasta limpiar. |
| La prueba de control falla | 10 min editando el mapa a mano; vuelve a preguntar. |
| No encuentras el template | Ruta base: `project-foundation-template/templates/` |
