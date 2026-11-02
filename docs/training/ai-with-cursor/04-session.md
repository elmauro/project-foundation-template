# Sesión 4 — Implementar y validar

> **Slides:** [slides/session-04.md](slides/session-04.md) · **Lab:** [labs/04-implementar-y-validar.md](labs/04-implementar-y-validar.md) · **Guión:** [facilitator-runbook.md → S4](facilitator-runbook.md#sesión-4--implementar-y-validar) · **Glosario:** [concepts-map.md](concepts-map.md)

**Conceptos:** C03, C08, C11–C12, C18–C20 · **Regla de hoy:** no mergear (review en S5)

---

### C03 — Alucinación

**Definición (IA):** En implementación, el modelo puede afirmar tests que pasan, imports que existen o APIs que no están — con tono seguro.

**En la práctica:** Día de más diffs. El chat no es evidencia; lo es el comando que corres (C12).

**Para contar en clase:** “Añadí el test, todo pasa.” Corres `npm test`. Rojo.

---

### C08 — Agente *(en juego)*

**Definición (IA):** Puede editar muchos archivos y usar terminal de forma proactiva.

**En la práctica:** Sin C19/C11, el diff crece solo. El manifest es la ley.

**Para contar en clase:** El agente es proactivo; si no lo frenas, “mejora de paso” el resto.

---

### C11 — Human-in-the-loop

**Definición (IA):** Revisar **cada archivo** del diff; revertir lo fuera del manifest.

**En la práctica:** Manifest permitió 3 archivos → diff de 18 → reviertes 15 aunque el chat diga que mejoró algo.

**Para contar en clase:** El contrato es la ley. Lees archivo por archivo. Tú mandas.

---

### C12 — Verificación y evidencia

**Definición (IA):** Ejecutar test/lint/build o pasos manuales reproducibles; documentar en checklist.

**En la práctica:** Respuesta al “todo pasa” del chat (C03).

**Para contar en clase:** Si no lo corriste en terminal, no pasó.

---

### C18 — Ciclo con gates

**Definición (IA):** Hoy: puertas **implement** + **validate**. Terminar código sin verify o sin checklist = saltarse validate.

**En la práctica:** Review y merge quedan para sesión 5.

**Para contar en clase:** Ayer firmaron el contrato. Hoy implementan y validan. Dos puertas, no merge.

---

### C19 — Implementación acotada

**Definición (IA):** Diff limitado a manifest + `analysis.md`. Lo “de paso” se revierte o va a otro ticket.

**En la práctica:** PRs chicos y reviewables; menos deuda escondida.

**Para contar en clase:** Slice “filtro por fecha”; el agente quiere reescribir la tabla entera. El diff se queda en lo firmado.

---

### C20 — Validación reproducible

**Definición (IA):** `test-checklist.md` con comandos o pasos que **otra persona** ejecuta sin leer tu chat.

**En la práctica:** Chat **nuevo** para implement — no reciclar el hilo del intake (C21 preview).

**Para contar en clase:** El checklist dice `pnpm test DateFilter.test.tsx` y pasos manuales concretos, no solo “run tests”.

---

## Entregables · Listo cuando

[Lab 04](labs/04-implementar-y-validar.md) · [Runbook S4](facilitator-runbook.md#sesión-4--implementar-y-validar) · [cheatsheet-lifecycle → Implement / Validate](cheatsheet-lifecycle.md)

Diff alineado al manifest; verify corrido o checklist honesto; `implementation-notes.md` + `test-checklist.md` commiteados.
