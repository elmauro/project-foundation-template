# Sesión 3 — Memoria durable e intake

> **Slides:** [slides/session-03.md](slides/session-03.md) · **Lab:** [labs/03-intake-sin-codigo.md](labs/03-intake-sin-codigo.md) · **Guión:** [facilitator-runbook.md → S3](facilitator-runbook.md#sesión-3--una-historia-que-no-vive-en-el-chat) · **Glosario:** [concepts-map.md](concepts-map.md)

**Conceptos:** C05, C15–C18 · **Kit:** Layer A (intake) · **Regla de hoy:** sin código de producto

---

### C05 — Sin memoria entre sesiones

**Definición (IA):** Cada hilo es nuevo para el modelo. Acuerdos de scope en el chat **no** sobreviven al cerrar la ventana.

**En la práctica:** Motiva escribir el contrato en archivos (C15, C16), no confiar en “ya lo dijimos en Slack”.

**Para contar en clase:** Escribieron en el chat “esto no incluye traducciones”. Cierran la ventana; chat nuevo: el modelo no estuvo en esa reunión.

---

### C15 — Memoria durable

**Definición (IA):** Estado de una historia en **archivos** bajo `cursor/analysis/features/<slug>/`, no en el hilo. Story, manifest, analysis, checklist viven en git.

**En la práctica:** Capa 3 de C13. Quien retoma el ticket lee la carpeta, no 80 mensajes. Agnóstico de herramienta.

**Para contar en clase:** El jueves un compañero abre `user-story.md`, `feature-manifest.md`, `analysis.md` — no tu chat.

---

### C16 — Contrato de scope (intake)

**Definición (IA):** **Antes de codear:** `user-story.md` (qué quiere quien usa el producto) + `feature-manifest.md` (In scope, Out of scope, definition of done).

**En la práctica:** “Mejorar UX” no limita nada. Dos ítems concretos en Out of scope sí. Escudo contra scope creep en sesión 4.

**Para contar en clase:** Dos papeles antes del código: historia y manifest. Hoy solo firman el contrato. `Implement now? no`.

---

### C17 — Análisis previo

**Definición (IA):** `analysis.md`: **cómo** atacar la story — archivos, riesgos, dependencias — separado del **qué** (story).

**En la práctica:** Menos sorpresas en el diff de mañana. Completar **en esta sesión**, antes de irse.

**Para contar en clase:** Plano antes de cavar: “Toca UserService; riesgo timezone; confirmar query param con backend.”

---

### C18 — Ciclo con gates

**Definición (IA):** Fases con entregables: intake → analysis → implement → validate → review → close. **Gate** = no pasar sin el artefacto mínimo.

**En la práctica:** Hoy solo cruzan intake + analysis. Codear en sesión 3 = saltarse la puerta.

**Para contar en clase:**

```text
INTAKE → ANALYSIS → IMPLEMENT → VALIDATE → REVIEW → CLOSE
  ↑ hoy ↑
```

Slug en kebab-case. Ticket Jira ≠ `FW-*` (sesión 6).

---

## Entregables · Listo cuando

[Lab 03](labs/03-intake-sin-codigo.md) · [Runbook S3](facilitator-runbook.md#sesión-3--una-historia-que-no-vive-en-el-chat) · Prompt: [cheatsheet-lifecycle → Intake](cheatsheet-lifecycle.md)

Carpeta `<slug>/` con story + manifest + `analysis.md` (inglés). Cero código en `src/`. Workbook S3 completo.
