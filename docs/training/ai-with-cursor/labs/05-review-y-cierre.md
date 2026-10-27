# Lab sesión 5 — Review y cierre

**Meta:** review documentado, close lite, `context-scope.mdc`, hábito de chat nuevo por fase.  
**Conceptos:** C02, C21–C23

Copia de sesión 5 en [adopt-on-existing-repo.md](../adopt-on-existing-repo.md): `context-scope.mdc` y prompts review/close si aún no están.

---

## Antes de empezar

- [ ] Código + checklist de sesión 4 en branch.
- [ ] `test-checklist.md` dice **qué comando** o pasos concretos (no solo “run tests”).

---

## Pasos

### 1. Chat **nuevo** — Review

Pega **Review** de [cheatsheet-lifecycle.md](../cheatsheet-lifecycle.md).

Adjunta la carpeta `@cursor/analysis/features/<slug>/` y `review-guidelines.md`.

**Verifica:** este chat **no** contiene los 200 mensajes del intake.

### 2. Lee findings

Clasifica blocker vs nice-to-have. **Tú** decides, no el modelo.

**Verifica:** hay lista numerada de findings **o** confirmación explícita de que el diff cumple story + manifest.

### 3. Otro chat **nuevo** — Close lite

Pega **Close lite** del cheatsheet (o `prompt-feature-close-package.md`).

Actualiza manifest e `INDEX.md`.

**Verifica:** el manifest refleja estado cerrado o “ready for PR”.

### 4. Copia regla de alcance

`templates/cursor-config/rules/context-scope.mdc` → `.cursor/rules/context-scope.mdc`

Lee `cursor/docs/context-scope-sessions.md` si lo copiaste.

**Verifica:** `context-scope.mdc` está en el repo.

### 5. (Si hay tiempo) Bug-fix en otro chat

Prompt `prompt-bug-fix.md` — cambio de ~10 min, flujo corto.

**Verifica:** fue un chat distinto del review y del close.

### 6. (Opcional) Peer review 5–10 min

Con un compañero, revisa su diff con `review-guidelines.md`.

### 7. Workbook sesión 5

Incluye bug-fix o anota “N/A — slice cerrado”.

---

## Listo cuando

- [ ] Review documentado (findings o “cumple story + manifest”).
- [ ] Close lite hecho (manifest + INDEX coherentes).
- [ ] `context-scope.mdc` commiteado.
- [ ] Puedes explicar en una frase por qué abriste chat nuevo por fase.
- [ ] Workbook sesión 5 completo.

---

## Si algo falla

| Pasa esto | Haz esto |
| --- | --- |
| Review solo dice “looks good” | Vuelve al manifest: ¿scope creep en i18n, refactors? |
| Mezclaste review + close en un chat | Cierra ese hilo; abre otro solo para close (C21). |
