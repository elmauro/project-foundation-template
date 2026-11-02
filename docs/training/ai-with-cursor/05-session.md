# Sesión 5 — Review, cierre y ventana de contexto

> **Slides:** [slides/session-05.md](slides/session-05.md) · **Lab:** [labs/05-review-y-cierre.md](labs/05-review-y-cierre.md) · **Guión:** [facilitator-runbook.md → S5](facilitator-runbook.md#sesión-5--review-cerrar-y-gastar-menos-tokens) · **Glosario:** [concepts-map.md](concepts-map.md)

**Conceptos:** C02, C21–C23 · **Kit:** `context-scope.mdc` (Layer A+)

---

### C02 — Ventana de contexto

**Definición (IA):** Cupo finito de tokens. Historial largo + muchos `@` = pierde foco o mezcla decisiones viejas con las de hoy.

**En la práctica:** Motiva C21: no arrastrar intake + implement + review en un solo hilo.

**Para contar en clase:** Siguen en el chat del martes. Van 200 mensajes. El escritorio se llenó.

---

### C21 — Gestión de ventana

**Definición (IA):** **Un chat por fase** del ciclo. Memoria en archivos (C15), no en el historial (C05). Analogía: el output de una fase vive en git; el siguiente chat arranca limpio.

**En la práctica:** Hoy mínimo dos chats nuevos: review y close. Menos ruido, menos costo, respuestas más coherentes.

**Para contar en clase:** Para revisar, chat limpio + carpeta de la feature. Para cerrar, otro chat. Sin arrastrar la conversación del martes.

---

### C22 — Review estructurado

**Definición (IA):** Revisar el diff **contra** story, manifest y checklist — detectar scope creep, tests faltantes, DoD incumplido.

**En la práctica:** “¿Te gusta el código?” no detecta que el manifest excluía i18n y el diff toca `es.json`.

**Para contar en clase:** Una revisión nombra el incumplimiento: sacar el archivo o actualizar el contrato. Review ≠ merge.

---

### C23 — Cierre y handoff

**Definición (IA):** Estado final **en repo**: manifest actualizado, INDEX, notas — el siguiente dev no depende del chat.

**En la práctica:** Handoff, auditoría, cambio de persona o herramienta.

**Para contar en clase:** Cierras; manifest e índice dicen qué se entregó. Tu compañero no te escribe “¿en qué quedó?”.

**Kit hoy:** close lite · `context-scope.mdc` · opcional: `prompt-bug-fix.md` en **otro** chat.

---

## Entregables · Listo cuando

[Lab 05](labs/05-review-y-cierre.md) · [Runbook S5](facilitator-runbook.md#sesión-5--review-cerrar-y-gastar-menos-tokens) · [cheatsheet-lifecycle → Review / Close](cheatsheet-lifecycle.md)

Review documentado; close lite; `context-scope.mdc` commiteado; pueden explicar chat nuevo por fase.
