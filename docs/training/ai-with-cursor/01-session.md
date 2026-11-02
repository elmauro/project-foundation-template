# Sesión 1 — Fundamentos IA + primera práctica

> **Slides:** [slides/session-01.md](slides/session-01.md) · **Lab:** [labs/01-primera-practica.md](labs/01-primera-practica.md) · **Guión:** [facilitator-runbook.md → S1](facilitator-runbook.md#sesión-1--fundamentos-ia--primera-práctica) · **Glosario:** [concepts-map.md](concepts-map.md)

**Laboratorio:** Cursor (u otra herramienta con modo editar)  
**Capa kit:** ninguna todavía  
**Meta:** entender qué es un LLM en la práctica y hacer un cambio chico con alcance + verify

Cada concepto sigue el mismo esquema: **definición (IA)** · **en la práctica** · **para contar en clase** (mismo texto que el [runbook](facilitator-runbook.md#sesión-1--fundamentos-ia--primera-práctica)).

---

## Conceptos de esta sesión

| ID | Tipo | Concepto |
| --- | --- | --- |
| C01–C08 | Fundamento | LLM, ventana, alucinación, contexto, memoria, prompt, agente |
| C09–C12 | Patrón | Alcance, modos, human-in-the-loop, verify |
| C13 | Patrón | Contexto en capas (preview) |

---

## Fundamentos

### C01 — Modelo de lenguaje (LLM)

**Definición (IA):** Modelo generativo entrenado con mucho texto. No almacena tu repositorio: **predice** el siguiente token una y otra vez hasta completar la respuesta. Lo que parece “saber” del código sale de lo que adjuntaste en **esta** petición.

**En la práctica:** Trátalo como un asistente muy rápido con solo esta conversación, no como alguien que lleva años en el equipo.

**Para contar en clase:** Le pasas un archivo y pides un test. Te devuelve algo que se ve a test de verdad; abres el import y no existe — se lo inventó. Si hablas vago, rellena huecos solo.

---

### C02 — Ventana de contexto

**Definición (IA):** Cupo **finito** de tokens por petición. Compiten: archivos `@`, reglas, historial del chat y tu prompt. Si el cupo se llena, el modelo pierde foco o ignora lo del medio.

**En la práctica:** Más texto no mejora la respuesta. Elige qué entra (C09). En sesión 5 verás un chat nuevo por fase (C21).

**Para contar en clase:** Imagina un escritorio chico: archivos, reglas, chat viejo y el pedido de ahora. Con 15 adjuntos y un hilo eterno, lo del medio se cae al piso y el modelo sigue hablando como si lo hubiera leído.

---

### C03 — Alucinación

**Definición (IA):** Respuesta **plausible pero incorrecta**: API inventada, path que no existe, “el test pasó” sin correrlo. Puede inventar datos (extrínseca) o contradecirse (intrínseca). Es comportamiento **normal** del LLM, no un bug raro.

**En la práctica:** No merges porque el tono suena seguro. Verificas tú (C12): abrir el path, correr el comando.

**Para contar en clase:** Preguntas dónde está `getOrders`. Responde con calma un path; abres el archivo y la función no está. ❌ “Suena bien, mergeo.” ✅ Terminal y archivo real.

---

### C04 — Contexto

**Definición (IA):** **Todo** lo que la herramienta envía al modelo en esta petición: adjuntos, reglas persistentes (preview C07), mensajes del hilo, texto pegado.

**En la práctica:** El diff es tan bueno como el contexto — relevante y acotado, no “todo el repo”.

**Para contar en clase:** “Arregla el login” sin archivos es señalar toda la oficina. Mejor: `@login.tsx`, `@login.test.ts`, qué no tocar, cómo verificar.

---

### C05 — Sin memoria entre sesiones

**Definición (IA):** Cada chat empieza en blanco para el modelo. Slack, standup y acuerdos del hilo anterior **no** entran solos. Solo persiste lo escrito en **git**.

**En la práctica:** Lo que debe durar va a archivos (mapa sesión 2, historia sesión 3), no al chat.

**Para contar en clase:** El martes acordaron “no toques traducciones”. El miércoles, chat nuevo: para el modelo esa conversación nunca pasó.

---

### C06 — Prompt

**Definición (IA):** Tu instrucción en este chat. Un prompt útil suele incluir: instrucciones, contexto (`@` archivos), objetivo, formato de salida y **verify** (cómo comprobar).

**En la práctica:** Prompt vago → huecos → alucinación (C03). Bloque copiable: [concepts-map § Anexo](concepts-map.md#anexo--ejemplos-listos-para-copiar-o-dictar).

**Para contar en clase:** ❌ “Arregla login.” ✅ Instrucciones + archivos + objetivo + comando de verificación.

---

### C07 — Instrucciones persistentes *(preview — sesión 2)*

**Definición (IA):** Texto que el IDE carga **antes** de tu prompt en cada petición (system message del equipo).

**En la práctica:** Convenciones que no quieres repetir (“docs en inglés bajo `cursor/`”) viven en `.cursor/rules/` o equivalente.

**Para contar en clase:** Esas frases se “pegan en la pared” del repo; el editor se las muestra al modelo antes de tu mensaje. Hoy solo las nombramos; mañana las escribimos.

---

### C08 — Agente

**Definición (IA):** LLM + permiso para **actuar**: editar archivos, terminal, búsqueda. Ciclo: razonar → elegir acción → usar herramienta → ver resultado.

**En la práctica:** Más poder implica más diffs fuera de scope. Frenas con alcance (C09) y revisión (C11).

**Para contar en clase:** Pides un test; abre archivos, propone diff, a veces corre npm. Tú miras **antes** de aceptar.

---

## Patrones (aplicación hoy)

### C09 — Alcance explícito

**Definición (IA):** Delimitar qué entra al contexto y al diff: paths, In/Out of scope, “Do NOT scan repo”.

**En la práctica:** Sin alcance, el modelo refactoriza de paso porque no conoce el repo (C01).

**Para contar en clase:** Ticket en `src/auth/` → solo `@` esa carpeta; prohibido “analiza todo”.

**Hoy:** `@` concretos + líneas de scope en el prompt · [cheatsheet-cursor](cheatsheet-cursor.md)

---

### C10 — Explorar / editar / planificar

**Definición (IA):** Tres intenciones: **explorar** (preguntar sin tocar), **editar** (diffs), **planificar** (diseñar antes si el cambio es grande).

**En la práctica:** Mezclar modos produce cambios accidentales. Explorar explica; editar escribe.

**Para contar en clase:** “¿Dónde se valida el email?” → explorar. “Añade test” → editar con alcance. Cursor: Ask / Agent / Plan.

| Herramienta | Acotar | Explorar | Editar |
| --- | --- | --- | --- |
| Cursor | `@archivo` | Ask | Agent |
| Copilot | `#file` | Chat | Edits |
| Claude | Adjuntar archivos | Chat | Claude Code |

---

### C11 — Human-in-the-loop

**Definición (IA):** La IA propone; la persona aprueba, corrige y verifica. No hay merge automático porque el chat “se ve bien”.

**En la práctica:** La responsabilidad del código es del dev ante el equipo.

**Para contar en clase:** Toca 8 archivos; lees el diff; reviertes 6; te quedas con 2.

---

### C12 — Verificación y evidencia

**Definición (IA):** La persona corre test/lint/build o documenta pasos manuales reproducibles. Evidencia en terminal o checklist, no fe en el mensaje del modelo.

**En la práctica:** Antídoto directo a C03. Cada pedido cierra con `Verify with:` ejecutado por ti.

**Para contar en clase:** El chat dice “el test pasa”. Abres la terminal: verde o rojo lo dice la terminal.

---

### C13 — Contexto en capas *(preview)*

**Definición (IA):** Tres fuentes: (1) código en git, (2) instrucciones persistentes (C07), (3) memoria en archivos — mapa, historias (C14, C15).

**En la práctica:** Hoy solo capa 1 → alcance manual (C09) obligatorio. Sesiones 2–6 arman el resto.

**Para contar en clase:** Tres cajones. Hoy solo está lleno el de código; por eso repites “los tests son `pnpm test`” y adjuntas medio repo.

---

## Entregables · Listo cuando

[Runbook S1 cierre](facilitator-runbook.md#sesión-1--fundamentos-ia--primera-práctica) · [Lab 01](labs/01-primera-practica.md)

Diff + verify + workbook S1; ticket slice confirmado con el lead; **sin** kit `cursor/` todavía.
