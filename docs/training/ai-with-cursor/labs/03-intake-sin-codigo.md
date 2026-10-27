# Lab sesión 3 — Intake (sin código de producto)

**Meta:** carpeta de la feature con story, manifest y `analysis.md`. **Cero** cambios en `src/`.  
**Conceptos:** C05, C15–C18

Copia Layer A (templates + prompts): [adopt-on-existing-repo.md](../adopt-on-existing-repo.md) → **Layer A**, filas de sesión 3.

---

## Antes de empezar

- [ ] Mapa y reglas de la sesión 2 commiteados.
- [ ] Ticket de 1–2 días acordado con el lead.
- [ ] Slug en kebab-case (ej. `filter-by-date`).

---

## Pasos

### 1. Copia templates y prompts de feature

Desde template → tu repo (ver tabla Layer A en adopt guide):

- `cursor/templates/*`
- `cursor/analysis/features/INDEX.md` y READMEs
- `cursor/prompts/feature/prompt-story-intake.md` (y README de prompts)

**Verifica:** existe `cursor/prompts/feature/prompt-story-intake.md`.

### 2. Abre un chat **nuevo**

No reutilices el hilo de la sesión 2.

**Verifica:** el historial no arrastra mensajes viejos del mapa.

### 3. Intake — Mode A

Pega el bloque **Intake (Mode A)** de [cheatsheet-lifecycle.md](../cheatsheet-lifecycle.md).

Rellena: feature name, slug, stack scope, ticket.  
**Implement now? no** — obligatorio.

**Verifica:** el agente **no** abrió diffs en `src/` ni carpetas de producto.

### 4. Revisa story y manifest (inglés)

Abre los borradores. En el manifest:

- **In scope** concreto (paths o comportamiento).
- **Out of scope** con al menos **2 ítems** reales (ej. no i18n, no refactor tabla).
- Definition of done medible.

**Verifica:** puedes leer en voz alta un ítem de Out of scope que limita de verdad el trabajo.

### 5. Guarda en la carpeta de la feature

Ruta:

```text
cursor/analysis/features/<slug>/
  user-story.md
  feature-manifest.md
```

Añade una fila en `cursor/analysis/features/INDEX.md`.

**Verifica:** la carpeta existe en git y los nombres de archivo son correctos.

### 6. Completa `analysis.md`

Archivos a tocar, riesgos, dependencias, comando de verify. Puedes usar el template en `cursor/templates/`.

**Verifica:** `analysis.md` menciona al menos un riesgo y un comando o paso de prueba.

### 7. Workbook sesión 3

[participant-workbook.md](../participant-workbook.md).

---

## Listo cuando

- [ ] `user-story.md` + `feature-manifest.md` + `analysis.md` en inglés.
- [ ] Manifest acotado (no épico).
- [ ] **Cero** código de producto commiteado.
- [ ] Workbook sesión 3 completo.
- [ ] Commit sugerido: `chore(cursor): add feature templates and first story package`

---

## Si algo falla

| Pasa esto | Haz esto |
| --- | --- |
| Agent empieza a codear | Para. Sesión 4 es implement. Guarda solo markdown. |
| Out of scope vacío o “mejorar UX” | Escribe 2 exclusiones concretas a mano. |
| Ticket demasiado grande | Recorta con el lead **ahora**; actualiza manifest. |
