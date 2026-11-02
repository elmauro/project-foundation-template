# Sesión 2 — Mapa e instrucciones persistentes

> **Slides:** [slides/session-02.md](slides/session-02.md) · **Lab:** [labs/02-mapa-y-reglas.md](labs/02-mapa-y-reglas.md) · **Guión:** [facilitator-runbook.md → S2](facilitator-runbook.md#sesión-2--mapa-e-identidad) · **Glosario:** [concepts-map.md](concepts-map.md)

**Conceptos:** C07, C13, C14 · **Kit:** Layer 0

---

## Por qué hoy (enlace a fundamentos)

| Fundamento | Consecuencia |
| --- | --- |
| C01 — LLM no conoce tu repo | Necesitas **C14** mapa en git |
| C05 — sin memoria | Reglas e índice en **archivos** (C07, C13) |
| C02 / C04 — contexto limitado | Mapa + `project-context.md` = contexto útil, no enorme |

---

### C07 — Instrucciones persistentes

**Definición (IA):** Texto que la herramienta carga **automáticamente** en cada petición, **antes** de tu prompt: convenciones, idioma de docs, seguridad, alcance por defecto.

**En la práctica:** No repites lo mismo en cada chat; ahorras tokens (C02) y reduces olvidos.

**Para contar en clase:** Ayer repetían “los tests se corren así” en cada pedido. Hoy esa frase vive en el repo y el editor se la muestra al modelo antes de tu mensaje.

**Kit:** `.cursor/rules/*.mdc` · Copilot: `copilot-instructions.md` · Claude: `CLAUDE.md`

---

### C13 — Contexto en capas

**Definición (IA):** Separar tres fuentes: **código** (git), **reglas cortas** (always-on), **memoria larga** (mapa, historias en `cursor/`).

**En la práctica:** Meter el mapa entero en una regla `alwaysApply` satura la ventana (C02). Reglas cortas + mapa adjunto cuando hace falta.

**Para contar en clase:** Tres cajones, cada uno con su tamaño. Código = producto. Reglas = frases cortas siempre visibles. Mapa e historias = documentos largos en `cursor/`, adjuntos cuando toca.

---

### C14 — Mapa del repositorio

**Definición (IA):** Índice en git (`context-map.md`): dónde están tests, APIs, docs, prompts. Table of contents para personas y modelos — el LLM no tiene mapa mental del código (C01).

**En la práctica:** Sin mapa, el agente inventa carpetas (`frontend/` en un repo solo backend).

**Para contar en clase:** Alguien pregunta dónde poner un test. Sin mapa, el modelo inventa una ruta. Con mapa, cita **tu** índice.

**Kit:** `cursor/context-map.md`, `project.config.json`, `cursor/projects/<stack>/project-context.md` (cómo se trabaja en ese stack). Bootstrap: [prompt-bootstrap-project-map.md](../../../templates/cursor-workspace/prompts/adoption/prompt-bootstrap-project-map.md), [prompt-bootstrap-stack-context.md](../../../templates/cursor-workspace/prompts/adoption/prompt-bootstrap-stack-context.md) · Copia: [adopt-on-existing-repo.md](../adopt-on-existing-repo.md) Layer 0.

**Prueba de control (Ask):** *“Where do I add a new test for X?”* → debe citar el mapa, no inventar carpetas.

---

## Entregables · Listo cuando

[Lab 02](labs/02-mapa-y-reglas.md) · [Runbook S2](facilitator-runbook.md#sesión-2--mapa-e-identidad)

Mapa sin carpetas inventadas; al menos un `project-context.md` revisado; prueba de control pasada.
