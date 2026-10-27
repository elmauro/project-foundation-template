# Lab sesión 4 — Implementar y validar

**Meta:** happy path mínimo del ticket, verify corrido, notes y checklist. **No mergear.**  
**Conceptos:** C03, C11–C12, C18–C20

Si copiaste Layer A completo en sesión 3, los prompts de implement ya están en `cursor/prompts/feature/`.

---

## Antes de empezar

- [ ] Carpeta `cursor/analysis/features/<slug>/` con manifest y `analysis.md`.
- [ ] El ticket cabe en ~90 min de código; si no, recorta Out of scope **antes** de empezar.
- [ ] Chat **nuevo** (no el del intake).

---

## Pasos

### 1. Termina `analysis.md` si falta algo (máx. 10 min)

Si no alcanza el tiempo, sigue con lo que hay.

**Verifica:** sabes qué archivos están In scope según el manifest.

### 2. Implement — prompt de ciclo

Pega **Implement** de [cheatsheet-lifecycle.md](../cheatsheet-lifecycle.md).

Adjunta: `@feature-manifest` vía story/analysis paths del cheatsheet, `@project-context.md`, prompt package.

**Verifica:** el prompt nombra el slug y el stack.

### 3. Revisa el diff archivo por archivo

Si algo está fuera del manifest, **revierte** aunque el chat diga que “mejoró” algo.

**Verifica:** puedes decir qué **no** implementaste porque estaba en Out of scope.

### 4. Corre verify en terminal

Usa el comando de `analysis.md` o manifest. No confíes en “tests pass” del chat.

**Verifica:** corriste al menos un comando, o el checklist dice exactamente qué correr.

### 5. Actualiza `implementation-notes.md`

Qué hiciste, qué quedó pendiente, sorpresas.

**Verifica:** otra persona entiende el estado sin leer el chat.

### 6. Completa `test-checklist.md`

Pasos numerados: comandos **o** pasos manuales honestos.

**Verifica:** el checklist no dice solo “run tests”; dice cuál comando o qué clic hacer.

### 7. (Opcional) Prompt Validate

Si sobra tiempo, usa **Validate** del cheatsheet para pulir checklist.

### 8. Workbook sesión 4

[participant-workbook.md](../participant-workbook.md).

---

## Listo cuando

- [ ] Diff alineado al manifest (extras revertidos).
- [ ] Verify corrido **o** pasos manuales claros en checklist.
- [ ] `implementation-notes.md` y `test-checklist.md` commiteados.
- [ ] Workbook sesión 4 completo.
- [ ] Sabes que review es sesión 5 — **no** mergees porque Cursor dijo ok.

---

## Si algo falla

| Pasa esto | Haz esto |
| --- | --- |
| Diff de 40 archivos | Recorta. Manifest manda. Revierte. |
| No hay tests | Checklist manual: login, clic, resultado esperado. |
| Verify falla | Deja el error en notes; no finjas verde. |
