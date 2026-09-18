# Sesión 3 — Memoria por historia (intake)

> **Guión:** [facilitator-runbook.md → S3](facilitator-runbook.md#sesión-3--una-historia-que-no-vive-en-el-chat) · **Conceptos:** [concepts-map.md](concepts-map.md) **C10–C13**

**Capa:** A · **Meta:** feature package con story + manifest. **Sin código en clase.**

**Cheatsheet:** [cheatsheet-lifecycle.md](cheatsheet-lifecycle.md)

---

## Conceptos de esta sesión

| ID | Concepto IA (genérico) | ¿Cubierto? |
| --- | --- | --- |
| C10 | Memoria fuera del chat | Sí |
| C11 | Intake y contrato de scope | Sí |
| C12 | Análisis antes de implementar | Sí (casa) |
| C13 | Ciclo de vida con gates | Sí (intro intake) |

---

### C10 Memoria fuera del chat

**Qué es:** Estado durable por historia en **archivos en git**, no en el hilo del chat.

**Por qué importa:** Cambias de herramienta, cierras el IDE, otro dev retoma — el contrato sigue en `analysis/features/<slug>/`.

**En la práctica:** Misma carpeta funciona con Cursor, Copilot o Claude; cualquiera que lea el repo ve la story.

---

### C11 Intake y contrato de scope

**Qué es:** Antes de codear: `user-story.md` + `feature-manifest.md` (qué sí, qué no, definition of done).

**Por qué importa:** Es el **contrato** que limita al modelo en fases posteriores — independiente del IDE.

**En este curso:** prompt intake ([cheatsheet-lifecycle](cheatsheet-lifecycle.md)); `Implement now? no` en clase.

---

### C12 Análisis antes de implementar

**Qué es:** `analysis.md`: archivos, riesgos, dependencias — separar *qué* de *cómo*.

**Por qué importa:** Reduce sorpresas en implementación; el humano valida el plan.

**Homework:** prompt analysis-package + recorte humano.

---

### C13 Ciclo de vida con gates

**Qué es:** `INTAKE → ANALYSIS → IMPLEMENT → VALIDATE → REVIEW → CLOSE` — no saltar fases.

**Por qué importa:** Gates evitan “código sin story” y “merge sin verify”. Aplica a cualquier flujo asistido por IA.

**Hoy:** solo INTAKE. Orquestador multi-fase (C24) queda post-curso.

---

## Tarea de casa · Listo cuando

Ver checklist en [concepts-map](concepts-map.md) C10–C12. Manifest + story en inglés; sin implementación en clase.
