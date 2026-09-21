# Sesión 2 — Contexto persistente (capas 2 y 3 empiezan)

> **Guión:** [facilitator-runbook.md → S2](facilitator-runbook.md#sesión-2--mapa-e-identidad) · **Glosario:** [concepts-map.md](concepts-map.md)

**Conceptos:** C07 (instrucciones persistentes), C13–C14 (capas + mapa) · **Kit:** Layer 0

---

## Por qué esta sesión (enlace a fundamentos)

| Fundamento | Consecuencia en la práctica |
| --- | --- |
| C01 LLM no conoce tu repo | Necesitas **C14 mapa** en git |
| C05 sin memoria | Reglas e índice van en **archivos** (C07, C13) |
| C04 contexto limitado | Mapa + stack context = contexto **útil**, no enorme |

---

## C07 Instrucciones persistentes

**Definición IA:** Texto que la herramienta carga **antes** de tu prompt — no repites lo mismo en cada chat.

**Kit (Cursor):** `.cursor/rules/*.mdc` · Copilot: `copilot-instructions.md` · Claude: `CLAUDE.md`

---

## C14 Mapa del repositorio

**Definición IA (patrón):** Índice en git porque el modelo no tiene mapa mental de tu código.

**Kit:** `cursor/context-map.md` + [bootstrap prompts](../../../templates/cursor-workspace/prompts/adoption/)

---

## Práctica y cierre

Detalle paso a paso: [runbook → práctica y cierre S2](facilitator-runbook.md#sesión-2--mapa-e-identidad)

**Listo cuando:** mapa sin carpetas inventadas; prueba de control (*“where do I add a test?”* → cita el mapa).
