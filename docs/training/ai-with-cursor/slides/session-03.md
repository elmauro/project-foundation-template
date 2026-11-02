# Sesión 3 — Memoria durable e intake

90 min · **Kit Layer A** · **Sin código** en `src/`

**Conceptos:** C05 · C15–C18

**Lab:** [labs/03-intake-sin-codigo.md](../labs/03-intake-sin-codigo.md)

---

## C05 — Sin memoria entre sesiones

**Definición:** Acuerdos del chat no sobreviven al cerrar la ventana.

**En la práctica:** Escribe el contrato hoy (C15, C16).

**Para contar:** “No traducciones” en el chat → chat nuevo → no existió.

---

## C15 — Memoria durable

**Definición:** Historia en `cursor/analysis/features/<slug>/`, no en el hilo.

**En la práctica:** Quien retoma lee archivos, no 80 mensajes.

**Para contar:** Jueves: abre story + manifest + analysis.

---

## C16 — Contrato de scope

**Definición:** Story + manifest **antes** de codear.

**En la práctica:** Out of scope concreto (≥2 ítems). No “mejorar UX”.

**Para contar:** Dos papeles firmados. `Implement now? no`.

---

## C17 — Análisis previo

**Definición:** `analysis.md` — archivos, riesgos, verify.

**En la práctica:** Plano **hoy**, antes de irse.

**Para contar:** UserService · timezone · confirmar con backend.

---

## C18 — Ciclo con gates

**Definición:** Fases con entregables; no saltar puertas.

**En la práctica:** Hoy solo **intake + analysis**.

```
INTAKE → ANALYSIS → IMPLEMENT → VALIDATE → REVIEW → CLOSE
  ↑ hoy ↑
```

---

## Práctica y cierre — Sesión 3

**Lab:** intake Mode A · story + manifest + `analysis.md` · INDEX

**Listo cuando:**

- Carpeta `<slug>/` en inglés
- **Cero** código de producto
- Workbook S3 · leer un Out of scope en voz alta

**Prompt:** [cheatsheet-lifecycle → Intake](../cheatsheet-lifecycle.md)
