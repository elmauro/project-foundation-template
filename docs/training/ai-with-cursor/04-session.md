# Sesión 4 — Implementar y validar

> **Guión:** [facilitator-runbook.md → S4](facilitator-runbook.md#sesión-4--implementar-y-validar) · **Conceptos:** [concepts-map.md](concepts-map.md) **C13–C16**

**Capa:** A · **Meta:** código + checklist + notes. Review en sesión 5.

---

## Conceptos de esta sesión

| ID | Concepto IA (genérico) | ¿Cubierto? |
| --- | --- | --- |
| C13 | Ciclo de vida (implement + validate) | Sí |
| C14 | Implementación acotada | Sí |
| C15 | Validación reproducible | Sí |
| C16 | Trazabilidad plan vs realidad | Sí |

---

### C13 Ciclo de vida (implement + validate)

**Qué es:** Ejecutar dos gates: escribir código según contrato; demostrar que funciona.

**Por qué importa:** Fases distintas = contexto distinto (C17). Mezclar intake + implement en un hilo confunde al modelo.

**En la práctica:** chat/hilo **nuevo** para implement; otro para validate si hace falta.

---

### C14 Implementación acotada

**Qué es:** Diff limitado a lo acordado en manifest y analysis.

**Por qué importa:** Los modelos “mejoran de paso” archivos no pedidos. El humano revierte o actualiza el contrato.

**En este curso:** [cheatsheet-lifecycle](cheatsheet-lifecycle.md) implement prompt + revisión diff.

---

### C15 Validación reproducible

**Qué es:** `test-checklist.md` + comandos que **otra persona** puede repetir.

**Por qué importa:** Evidencia para review/PR; no depende de “lo probé yo en el chat”.

---

### C16 Trazabilidad plan vs realidad

**Qué es:** `implementation-notes.md`: desviaciones respecto al analysis.

**Por qué importa:** Reviewers y futuros chats entienden por qué el diff difiere del plan.

---

## Tarea de casa · Listo cuando

Slice terminado; checklist usable; notes escritas; no mergear (review S5).
