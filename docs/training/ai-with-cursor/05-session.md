# Sesión 5 — Review, cerrar y contexto

> **Guión:** [facilitator-runbook.md → S5](facilitator-runbook.md#sesión-5--review-cerrar-y-gastar-menos-tokens) · **Conceptos:** [concepts-map.md](concepts-map.md) **C17–C21**

**Capa:** A+

---

## Conceptos de esta sesión

| ID | Concepto IA (genérico) | ¿Cubierto? |
| --- | --- | --- |
| C17 | Gestión de ventana de contexto | Sí |
| C18 | Enrutamiento de lecturas | Sí |
| C19 | Review estructurado | Sí |
| C20 | Cierre y handoff documentado | Sí |
| C21 | Flujo corto para bugs | Sí (casa) |

---

### C17 Gestión de ventana de contexto

**Qué es:** Hilo/chat **nuevo por fase**; no arrastrar cientos de mensajes viejos.

**Por qué importa:** Ventana limitada + ruido = peores diffs y más costo. Vale en Cursor, Copilot, Claude, APIs directas.

**En la práctica:** Intake ayer → hoy review con solo `@feature-package/` + diff.

---

### C18 Enrutamiento de lecturas

**Qué es:** Reglas de **qué contexto cargar** según tarea (bug vs feature vs producto).

**Por qué importa:** Evita “lee todo el monorepo” por defecto.

**En este curso:** `context-scope.mdc` (Cursor); equivalente: sección en `copilot-instructions.md` o `CLAUDE.md`.

---

### C19 Review estructurado

**Qué es:** Revisar contra story, manifest y guidelines — no opinión genérica.

**Por qué importa:** La IA detecta scope creep si le das el contrato; sin contrato solo halaga.

---

### C20 Cierre y handoff documentado

**Qué es:** Estado final en repo (manifest, INDEX) — handoff sin depender del chat.

**Por qué importa:** Onboarding, auditoría, cambio de herramienta.

---

### C21 Flujo corto para bugs

**Qué es:** Scope mínimo + prompt corto — sin intake completo para typos/null checks.

**Por qué importa:** No todo ticket necesita manifest de 6 archivos; **sí** necesita acance (C01) y verify (C03).

**Homework:** `prompt-bug-fix.md` en chat nuevo.

---

## Tarea de casa · Listo cuando

Review + close lite; `context-scope.mdc`; explican chat nuevo por fase.
