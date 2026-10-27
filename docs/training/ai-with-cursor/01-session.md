# Sesión 1 — Fundamentos IA + primera práctica

> **Lab (paso a paso):** [labs/01-primera-practica.md](labs/01-primera-practica.md) · **Guión:** [facilitator-runbook.md → S1](facilitator-runbook.md#sesión-1--fundamentos-ia--primera-práctica) · **Glosario:** [concepts-map.md](concepts-map.md)

**Laboratorio de hoy:** Cursor (u otra herramienta con modo editar)  
**Capa kit:** ninguna todavía  
**Meta:** entender **qué es la IA en la práctica** y hacer un cambio chico con alcance + verify

---

## Conceptos de esta sesión

| ID | Tipo | Concepto | ¿Cubierto? |
| --- | --- | --- | --- |
| C01 | Fundamento | Modelo de lenguaje (LLM) | Sí |
| C02 | Fundamento | Ventana de contexto | Sí |
| C03 | Fundamento | Alucinación | Sí |
| C04 | Fundamento | Contexto | Sí |
| C05 | Fundamento | Sin memoria entre sesiones | Sí |
| C06 | Fundamento | Prompt | Sí |
| C08 | Fundamento | Agente | Sí |
| C09–C12 | Patrón | Alcance, modos, human-in-the-loop, verify | Sí |
| C13 | Patrón | Arquitectura de contexto en capas (preview) | Sí |

Definiciones completas: [concepts-map.md → Fundamentos](concepts-map.md#definiciones-ampliadas-fundamentos-ia)

---

## Fundamentos — qué hay que entender (sin Cursor)

### C01 Modelo de lenguaje (LLM)

**Definición:** Predice texto; **no** tiene tu repo en la cabeza ni “recuerda” el standup de ayer.

**En criollo para el equipo:** Trátalo como un interno rapidísimo que lee lo que le pasas **ahora** — no como un senior que lleva años en el código.

---

### C02 Ventana de contexto

**Definición:** Cupo limitado por petición. Mucho historial + muchos archivos = peor razonamiento.

**En criollo:** No le tires el monorepo; elige qué entra.

---

### C03 Alucinación

**Definición:** Suena bien, está mal: API inventada, test que no corre, carpeta que no existe.

**En criollo:** Por eso **siempre** verify (C12); nunca mergees porque “el chat se ve bien”.

---

### C04 Contexto

**Definición:** Todo lo que ve el modelo en esta petición: archivos adjuntos, reglas, mensajes del hilo.

**En criollo:** Contexto bueno = **relevante y acotado**, no “todo el repo”.

---

### C05 Sin memoria entre sesiones

**Definición:** Chat nuevo = borrón. Lo no escrito en git se pierde.

**En criollo:** Por eso más adelante usamos archivos para la memoria (sesión 3), no el hilo.

---

### C06 Prompt

**Definición:** Lo que pides **hoy** en el chat: objetivo, límites, cómo verificar.

---

### C08 Agente

**Definición:** El modelo **puede editar** archivos y correr comandos — no solo hablar.

**En criollo:** Más poder → más cuidado con alcance (C09) y revisar el diff (C11).

---

## Patrones — cómo aplicamos esos fundamentos hoy

### C09 Alcance explícito · C10 Modos · C11 Human-in-the-loop · C12 Verificación

Ver [concepts-map](concepts-map.md#patrones-aplicación-en-desarrollo).  
**Práctica:** [cheatsheet-cursor](cheatsheet-cursor.md) (Cursor) o equivalente en Copilot/Claude.

| Herramienta | Acotar contexto | Explorar | Editar |
| --- | --- | --- | --- |
| Cursor | `@archivo` | Ask | Agent |
| Copilot | `#file` | Chat | Edits |
| Claude | Adjuntar archivos | Chat | Claude Code |

---

### C13 Arquitectura de contexto en capas (preview)

1. **Código** (git)  
2. **Instrucciones persistentes** (sesión 2)  
3. **Memoria en archivos** (sesiones 3+)

Hoy solo capa 1 → por eso el alcance manual es obligatorio.

---

## Entregables en clase · Listo cuando

Ver [runbook S1 cierre](facilitator-runbook.md#sesión-1--fundamentos-ia--primera-práctica). Diff + verify + workbook S1; ticket slice **confirmado con el lead**; **sin** kit `cursor/` todavía.
