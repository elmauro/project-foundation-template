# Glosario de conceptos IA — curso repo existente

## Cómo leer este documento

| Qué | Qué es |
| --- | --- |
| **Concepto IA** | Definición agnóstica de herramienta — lo que el estudiante debe **entender** |
| **Herramienta** | Cursor, Copilot, Claude… distinta UI, mismo concepto |
| **Kit** | Archivos en git que materializan un patrón (`cursor/`, `.cursor/rules/`) |

**Cursor** ayuda a trabajar con IA; **no es** el concepto.

**Para dictar (qué es + ejemplo + por qué importa):** [facilitator-runbook.md](facilitator-runbook.md) → **“Conceptos de hoy”** en cada sesión.

**Referencia pedagógica** (estilo simple, más amplio): [Fundamentos IA Generativa](https://github.com/elmauro/databricks/blob/master/spanish/01_Fundamentos_IA_Generativa.md) y [Desarrollo de Soluciones](https://github.com/elmauro/databricks/blob/master/spanish/02_Desarrollo_Soluciones.md) en el repo [elmauro/databricks](https://github.com/elmauro/databricks/tree/master/spanish). Este curso **no** cubre Databricks, RAG ni certificación — solo reutilizamos cómo explican los conceptos que sí usamos.

Facilitación en **español**. Kit en **inglés**.

---

## Formato de ejemplos (como en [elmauro/databricks](https://github.com/elmauro/databricks/tree/master/spanish))

Mismo estilo que [Fundamentos IA](https://github.com/elmauro/databricks/blob/master/spanish/01_Fundamentos_IA_Generativa.md) y [Desarrollo de Soluciones](https://github.com/elmauro/databricks/blob/master/spanish/02_Desarrollo_Soluciones.md) — adaptado a dev con repo existente:

| Tipo | Cuándo usarlo | Para qué sirve |
| --- | --- | --- |
| **Ejemplo práctico** | Narrativa corta en el repo del alumno | Anclar la definición a algo que ya hicieron o harán |
| **❌ Mal · ✅ Bien** | Prompts, alcance, confianza en el modelo | Contraste inmediato — ideal para pizarra o dictado |
| **Ejemplo visual** | Flujos (agente, capas, ciclo, ventana) | Ver la idea en 10 segundos |
| **Bloque copiable** | Una petición concreta al chat | Pegar en la práctica en clase |

No hace falta los cuatro en cada concepto — solo donde aclara. Ejemplos listos para copiar: [anexo al final](#anexo--ejemplos-listos-para-copiar-o-dictar).

---

## Tabla maestra — concepto · definición · sesión · ¿cubierto?

| # | Tipo | Concepto | Definición (una frase) | Sesión | ¿Cubierto? |
| --- | --- | --- | --- | --- | --- |
| C01 | Fundamento | **LLM** | Predice texto token a token; no “conoce” tu repo. | 1 | **Sí** |
| C02 | Fundamento | **Ventana de contexto** | Cupo finito de tokens por petición. | 1, 5 | **Sí** |
| C03 | Fundamento | **Alucinación** | Respuesta plausible pero incorrecta o inventada. | 1, 4 | **Sí** |
| C04 | Fundamento | **Contexto** | Todo lo que el modelo ve en esta petición. | 1 | **Sí** |
| C05 | Fundamento | **Sin memoria entre sesiones** | Cada chat empieza en blanco; git es la memoria real. | 1, 3 | **Sí** |
| C06 | Fundamento | **Prompt** | Tu instrucción: objetivo, contexto, límites, formato, verify. | 1 | **Sí** |
| C07 | Fundamento | **Instrucciones persistentes** | Reglas que la herramienta carga antes de tu prompt. | 2 | **Sí** |
| C08 | Fundamento | **Agente** | LLM + permiso para actuar (editar, terminal, buscar). | 1 | **Sí** |
| C09 | Patrón | **Alcance explícito** | Qué sí/no entra al contexto ni al diff. | 1→5 | **Sí** |
| C10 | Patrón | **Explorar / editar / planificar** | Separar preguntar, escribir código y diseñar. | 1 | **Sí** |
| C11 | Patrón | **Human-in-the-loop** | Humano aprueba, verifica y corrige. | 1→4 | **Sí** |
| C12 | Patrón | **Verificación y evidencia** | Prueba real documentada; no “listo” del chat. | 1→4 | **Sí** |
| C13 | Patrón | **Contexto en capas** | Código · reglas · memoria en archivos. | 1→6 | **Sí** |
| C14 | Patrón | **Mapa del repositorio** | Índice en git: dónde vive cada cosa. | 2 | **Sí** |
| C15 | Patrón | **Memoria durable** | Estado por historia en archivos, no en el hilo. | 3 | **Sí** |
| C16 | Patrón | **Contrato de scope** | Story + manifest antes de codear. | 3 | **Sí** |
| C17 | Patrón | **Análisis previo** | Plan escrito: archivos, riesgos. | 3→4 | **Sí** |
| C18 | Patrón | **Ciclo con gates** | Fases con entregables; no saltar pasos. | 3→5 | **Sí** |
| C19 | Patrón | **Implementación acotada** | Diff solo según contrato. | 4 | **Sí** |
| C20 | Patrón | **Validación reproducible** | Checklist que otro humano puede repetir. | 4 | **Sí** |
| C21 | Patrón | **Gestión de ventana** | Chat nuevo por fase del ciclo. | 5 | **Sí** |
| C22 | Patrón | **Review estructurado** | Revisar contra story/manifest. | 5 | **Sí** |
| C23 | Patrón | **Cierre y handoff** | Estado final en repo, no en chat. | 5 | **Sí** |
| C24 | Patrón | **Contexto de producto** | Visión y backlog vs ticket del día. | 6 | **Sí** |
| C25–C27 | — | Orquestación, trace, automatización | Ver abajo | — | Mención/opt-in |
| C28–C35 | — | RAG, greenfield, multi-agente… | Fuera del curso | — | **No** |

---

## Vista por sesión

| Sesión | Conceptos |
| --- | --- |
| [1](01-session.md) | C01–C13 |
| [2](02-session.md) | C07, C13–C14 |
| [3](03-session.md) | C05, C15–C18 |
| [4](04-session.md) | C03, C11–C12, C18–C20 |
| [5](05-session.md) | C02, C21–C23 |
| [6](06-session.md) | C24 |

---

## Definiciones ampliadas (estilo claro — para estudiar o dictar)

Cada concepto: **Qué es** · **Ejemplo** · **Por qué te importa como dev**

---

### C01 — Modelo de lenguaje (LLM)

**Qué es:** Un LLM es un modelo **generativo** entrenado con muchísimo texto. No “razona” como una persona: **predice** la siguiente palabra (token) una y otra vez hasta completar la respuesta. Por fuera parece inteligente; por dentro es probabilidad + contexto que le diste.

**Ejemplo práctico:** Le pasas `login.tsx` y pides un test. Genera código que *se parece* a tests reales — pero puede inventar un helper que no existe (→ C03).

**Ejemplo visual:**

```
Tu prompt + @login.tsx  →  [ LLM: token → token → token … ]  →  describe('Login'…)
                                                                    ↑ puede inventar import
```

**Por qué te importa:** No asumas que “vio” todo el repo, que recuerda ayer o que entiende tu negocio. Es un asistente rapidísimo con **solo** lo que adjuntaste ahora.

---

### C02 — Ventana de contexto

**Qué es:** Límite de **tokens** (pedazos de texto) que caben en **una** petición. Entran: archivos, reglas, historial del chat, tu prompt. Todo compite por el mismo cupo.

**Ejemplo práctico:** Chat de 300 mensajes + 20 archivos `@` → el modelo pierde foco o ignora lo del medio. Por eso en sesión 5 abrimos **chat nuevo por fase** (C21).

**Ejemplo visual:**

```
┌─────────────────── ventana finita ───────────────────┐
│  reglas  │  @archivos  │  historial chat  │  prompt  │
└────────────────────────────────────────────────────────┘
         ↑ todo compite — lo del medio se pierde primero
```

**Por qué te importa:** Más contexto ≠ mejor. Contexto **relevante y acotado** (C09) rinde más que tirarle el monorepo.

---

### C03 — Alucinación

**Qué es:** El LLM responde con tono seguro pero **inventa**: APIs que no existen, paths falsos, fechas incorrectas, “el test pasó” sin haberlo corrido. Hay alucinación **extrínseca** (inventa datos) e **intrínseca** (se contradice).

**Ejemplo práctico:** *“¿Dónde está `UserService.getOrders`?”* → responde `src/services/UserService.ts` pero en tu repo el archivo se llama distinto o la función no existe.

**❌ Mal · ✅ Bien:**

| ❌ Mal | ✅ Bien |
| --- | --- |
| *“Suena bien, lo mergeo”* | Path existe en el repo (`git grep` o abrir archivo) |
| *“El agente dijo que pasaron los tests”* | `npm test -- login.test.ts` en **tu** terminal (C12) |
| *“Seguro que esa API existe”* | Buscar en código o docs del proyecto |

**Por qué te importa:** No es bug raro — es comportamiento normal del modelo. Defensa: **verificar tú** (C12), no confiar en el tono del chat. (En productos con RAG se reduce; en este curso usamos mapa + verify + contrato.)

---

### C04 — Contexto

**Qué es:** **Todo** lo que la herramienta envía al LLM en esta petición: archivos adjuntos, instrucciones persistentes (C07), mensajes viejos del hilo, texto que pegaste.

**Ejemplo — prompt con buen contexto** (inspirado en [componentes de prompt](https://github.com/elmauro/databricks/blob/master/spanish/02_Desarrollo_Soluciones.md)):

```
INSTRUCCIONES: Cambio mínimo, sin refactor.
CONTEXTO: @src/auth/login.tsx @src/auth/login.test.ts
INPUT: Mostrar error si password vacío.
FORMATO: Solo esos dos archivos.
VERIFY: npm test -- login.test.ts
```

**Por qué te importa:** El output es tan bueno como el contexto que le diste — ni más ni menos.

---

### C05 — Sin memoria entre sesiones

**Qué es:** Cada chat o hilo es **nuevo** para el modelo. Cierras la ventana → no “recuerda” scope, criterios ni decisiones. Lo único durable es lo que **escribiste en git**.

**Ejemplo:** El martes acordaron en Slack “no tocar i18n”. El miércoles abres chat nuevo → el modelo **no sabe** nada de Slack. Tiene que estar en el manifest (C16).

**Por qué te importa:** Motiva memoria durable (C15), mapa (C14) y contrato escrito antes de codear.

---

### C06 — Prompt

**Qué es:** La instrucción que **tú** escribes en esta conversación. Un buen prompt suele tener: **instrucciones**, **contexto**, **pregunta/objetivo**, **formato** y **cómo verificar** — como los [componentes de prompt](https://github.com/elmauro/databricks/blob/master/spanish/02_Desarrollo_Soluciones.md) en prompt engineering.

**Ejemplo visual — componentes:**

```
┌─────────────────────────────────────┐
│ 1. INSTRUCCIONES   cambio mínimo    │
│ 2. CONTEXTO        @login.tsx       │
│ 3. OBJETIVO        error si vacío   │
│ 4. FORMATO         solo esos files  │
│ 5. VERIFY          npm test …       │
└─────────────────────────────────────┘
```

**❌ Prompt malo:**

```
"Arregla el login"
```

**✅ Prompt bueno (bloque copiable):**

```
INSTRUCTIONS: Minimal change only. Do NOT refactor auth.
CONTEXT: @src/auth/login.tsx @src/auth/login.test.ts
GOAL: Show validation error when password is empty.
FORMAT: Only those two files.
VERIFY: npm test -- login.test.ts
```

**Por qué te importa:** Prompt vago → el modelo rellena huecos → alucina (C03). Prompt claro = mini-contrato de la petición de hoy.

---

### C07 — Instrucciones persistentes

**Qué es:** Texto que el IDE carga **automáticamente** en cada petición, **antes** de tu prompt: convenciones, idioma de docs, seguridad.

**Ejemplo:** Regla “documentation in English under `cursor/`” — no la repites en cada chat.

| Herramienta | Archivo típico |
| --- | --- |
| Cursor | `.cursor/rules/*.mdc` |
| Copilot | `.github/copilot-instructions.md` |
| Claude | `CLAUDE.md` |

**Por qué te importa:** Capa 2 de C13. Comportamiento estable sin quemar tokens repitiendo lo mismo (C02).

---

### C08 — Agente

**Qué es:** LLM con **permiso para actuar**: editar archivos, terminal, búsqueda — no solo chat. Como un agente en sentido general: **razona → elige acción → usa herramientas → observa resultado** (idea similar a [componentes de Agent](https://github.com/elmauro/databricks/blob/master/spanish/01_Fundamentos_IA_Generativa.md): LLM + tools + memoria de hilo + planificación).

**Ejemplo práctico:** Pides “añade test” → el agente abre archivos, escribe diff y puede correr `npm test`. Tú revisas antes de accept (C11).

**Ejemplo visual — bucle del agente:**

```
  Objetivo ("añade test")
        ↓
  LLM elige acción → leer archivo / editar / terminal
        ↓
  Observa resultado → repite hasta "creo que terminé"
        ↓
  Humano revisa diff (C11) — no hay merge automático
```

**Por qué te importa:** Más poder = diffs más grandes y más riesgo fuera de scope. Requiere C09, C11, C12.

---

### C09 — Alcance explícito

**Qué es:** Decir **qué** entra al contexto y al diff y **qué no** — paths concretos, In scope / Out of scope, “Do NOT read rest of repo”.

**Ejemplo práctico:** Ticket en `src/auth/` → adjuntas solo esa carpeta. Prohibido “analiza todo el monorepo”.

**❌ Mal · ✅ Bien:**

| ❌ Mal | ✅ Bien |
| --- | --- |
| *“Mejora el módulo de auth”* | In scope: `src/auth/login.tsx`, `login.test.ts` |
| *“Analiza el repo y arregla”* | Out of scope: refactor, i18n, otros módulos |
| `@` en la raíz del monorepo | `@src/auth/` + mapa si hace falta orientarse |

**Por qué te importa:** Respuesta directa a C01 (no conoce el repo) y C04 (contexto limitado). Sin alcance → refactors de paso y PRs imposibles.

---

### C10 — Explorar / editar / planificar

**Qué es:** Tres **intenciones** distintas: **explorar** (preguntar, sin tocar archivos), **editar** (generar diffs), **planificar** (diseñar antes si el cambio es grande). Relacionado con técnicas como *chain-of-thought* (“piensa paso a paso”) cuando el cambio es ambiguo — pero aquí el foco es **no mezclar modos**.

**Ejemplo:** *“¿Dónde se valida el email?”* → explorar. *“Añade test”* → editar + alcance (C09).

**Por qué te importa:** Explorar en modo editar = cambios accidentales. **Explorar explica; editar escribe.**

---

### C11 — Human-in-the-loop

**Qué es:** La IA **propone**; el humano **aprueba, corrige y verifica**. No hay merge automático porque el chat “se ve bien”. Misma idea que “usar IA como **asistente**, no reemplazo” en adopción empresarial.

**Ejemplo:** Agent genera 8 archivos → tú reviertes 6 que no pediste y solo commiteas 2.

**Por qué te importa:** La responsabilidad del código es tuya — ante el equipo, legal y operativamente.

---

### C12 — Verificación y evidencia

**Qué es:** **Tú** corres test/lint/build o documentas pasos manuales reproducibles. Evidencia en repo o checklist — no fe en el mensaje del modelo.

**Ejemplo:** Tras el fix: `npm test -- login.test.ts` en **tu** terminal. Si falla, pegas el error en chat nuevo con mismo alcance.

**Por qué te importa:** Antídoto a C03. El modelo puede decir “tests pass” sin haberlos corrido.

---

### C13 — Arquitectura de contexto en capas

**Qué es:** Tres fuentes separadas: (1) **código** en git, (2) **instrucciones persistentes** (C07), (3) **memoria** en archivos — mapa, historias, visión (C14, C15, C24).

**Ejemplo práctico:** Sin capas 2–3, repites en cada chat “los tests van con pnpm” y adjuntas medio repo (C02).

**Ejemplo visual — las tres cajas (sesión 1 en pizarra):**

```
┌─────────────┐   ┌──────────────────┐   ┌─────────────────────────┐
│ 1. CÓDIGO   │   │ 2. REGLAS        │   │ 3. MEMORIA (cursor/)    │
│ src/, tests │   │ .cursor/rules/   │   │ context-map, features/  │
└─────────────┘   └──────────────────┘   └─────────────────────────┘
     git              corto, always           largo, por historia
```

**Por qué te importa:** Organiza el contexto para no saturar la ventana y no depender del hilo (C05).

---

### C14 — Mapa del repositorio

**Qué es:** Índice en git (`context-map.md`): dónde están tests, APIs, docs, prompts. Table of contents para humanos y modelos.

**Ejemplo:** Repo solo API → el mapa lista `src/handlers/`, **no** inventa `frontend/`.

**Por qué te importa:** El LLM no tiene mapa mental (C01). Sin índice, adivina carpetas.

---

### C15 — Memoria durable

**Qué es:** Estado de una historia en **archivos** (`analysis/features/<slug>/`), no en el chat. Story, manifest, analysis, checklist viven en git.

**Ejemplo:** Cierras Cursor el viernes → el lunes retomas leyendo `user-story.md`, no 200 mensajes.

**Por qué te importa:** Consecuencia directa de C05. El chat es borrador; git es contrato.

---

### C16 — Contrato de scope (intake)

**Qué es:** **Antes de codear:** `user-story.md` (qué quiere el usuario) + `feature-manifest.md` (qué sí, qué no, definition of done).

**Ejemplo práctico:** Out of scope: *“no i18n, no redesign table, no refactor auth module”* — concreto, no “mejorar UX”.

**❌ Mal · ✅ Bien (Out of scope en manifest):**

| ❌ Mal | ✅ Bien |
| --- | --- |
| *“Mejorar UX de la tabla”* | *“No redesign table layout or columns”* |
| *“Arreglar deuda técnica si hace falta”* | *“No refactor auth module; separate ticket”* |
| *(vacío)* | Al menos 2 ítems concretos que **no** harán |

**Por qué te importa:** Sin contrato escrito, el agente en implement (C19) improvisa scope.

---

### C17 — Análisis previo

**Qué es:** `analysis.md`: **cómo** atacar la story — archivos, riesgos, dependencias — separado del **qué** (story).

**Ejemplo:** *“Toca UserService; riesgo timezone; confirmar query param con backend.”*

**Por qué te importa:** Evita sorpresas en sesión 4. Plan antes del diff.

---

### C18 — Ciclo de vida con gates

**Qué es:** Fases con entregables: intake → analysis → implement → validate → review → close. **Gates** = no pasar a la siguiente sin el artefacto mínimo.

**Ejemplo práctico:** No implementar en sesión 3 (solo intake). No mergear en sesión 4 (review en 5).

**Ejemplo visual:**

```
INTAKE → ANALYSIS → IMPLEMENT → VALIDATE → REVIEW → CLOSE
  │         │           │           │          │
 story    analysis.md   diff      checklist   findings
+manifest              + verify              + INDEX
  ↑ gate: sin manifest no hay implement
```

**Por qué te importa:** Sin gates, la IA es “generador de diffs al azar”.

---

### C19 — Implementación acotada

**Qué es:** Diff limitado a manifest + analysis. Lo “de paso” se revierte o va a otro ticket.

**Ejemplo:** Manifest permite 3 archivos → diff de 25 archivos = **mal**, aunque el modelo diga que “mejoró cosas”.

**Por qué te importa:** PRs reviewables; menos deuda escondida.

---

### C20 — Validación reproducible

**Qué es:** `test-checklist.md` + comandos que **otra persona** ejecuta sin leerte el chat.

**Ejemplo:** *“1. npm test -- X. 2. Abrir /orders, filtrar fecha, ver filas.”*

**Por qué te importa:** Review, QA y tu yo futuro no tienen el hilo del Agent.

---

### C21 — Gestión de ventana de contexto

**Qué es:** **Un chat/hilo por fase** del ciclo. No arrastrar intake + implement + review en 400 mensajes. Analogía: [prompt chaining](https://github.com/elmauro/databricks/blob/master/spanish/02_Desarrollo_Soluciones.md) — el output de una fase vive en **archivos**, el siguiente chat arranca limpio.

**Ejemplo práctico:** Review hoy → chat nuevo con solo `@feature-package/` + guidelines — no el hilo del martes.

**Ejemplo visual:**

```
Chat A (intake)     Chat B (implement)     Chat C (review)
     │                     │                      │
     └──── manifest ───────┴──── diff ──────────────┘
              ↑ memoria en git, no en el historial
```

**Por qué te importa:** Aplica C02. Menos ruido, menos tokens, menos confusión.

---

### C22 — Review estructurado

**Qué es:** Revisar diff **contra** story, manifest y criterios — buscar scope creep, tests faltantes.

**Ejemplo:** Manifest excluía i18n → diff toca `es.json` = finding blocker.

**Por qué te importa:** “¿Te gusta el código?” no detecta incumplimientos de contrato.

---

### C23 — Cierre y handoff

**Qué es:** Estado final **en repo**: manifest actualizado, INDEX, notas — el siguiente dev no depende del chat.

**Ejemplo:** Close lite marca story `done` y actualiza índice de features.

**Por qué te importa:** Handoff, auditoría, cambio de herramienta o de persona en el equipo.

---

### C24 — Contexto de producto

**Qué es:** Capa **estratégica**: visión corta, backlog `FW-*` — separado del ticket del sprint (Jira/GitHub).

**Ejemplo:** Visión: *“Mobile-first LATAM; offline out until Q3”* → evita que el agente diseñe desktop-first en cada ticket.

**Por qué te importa:** Scope creep de **producto**, no solo de código.

---

## Fuera del curso (referencia Databricks — no enseñamos aquí)

| Tema | Por qué no en 6 sesiones | Dónde leer más |
| --- | --- | --- |
| **RAG** | Requiere embeddings, vector DB, chunking | [02_Desarrollo_Soluciones.md](https://github.com/elmauro/databricks/blob/master/spanish/02_Desarrollo_Soluciones.md) |
| **Fine-tuning** | Pre-entrenamiento vs ajuste fino es otro programa | [01_Fundamentos_IA_Generativa.md](https://github.com/elmauro/databricks/blob/master/spanish/01_Fundamentos_IA_Generativa.md) |
| **Multi-agente** | C35 — opt-in avanzado | Idem |
| **Prompt injection / guardrails** | C33 — seguridad avanzada | Idem § Riesgos |
| **Greenfield generator** | Curso = repo existente | [01-create-project](../../examples/01-create-project.md) |

---

## Relación concepto → herramienta → kit

```
Fundamento (C01–C08) → Patrón (C09–C24) → Kit en git (Cursor lab)
```

Referencia técnica kit: [aspects-catalog.md](aspects-catalog.md)

---

## Anexo — ejemplos listos para copiar o dictar

Bloques que el facilitador puede **pegar en chat** o **mostrar en pantalla**. Más contexto en [facilitator-runbook.md](facilitator-runbook.md) y [cheatsheet-cursor.md](cheatsheet-cursor.md) / [cheatsheet-lifecycle.md](cheatsheet-lifecycle.md).

### Sesión 1 — cambio chico con alcance (C04, C06, C09, C12)

```
INSTRUCTIONS: Minimal change. Do NOT scan the whole repo.
CONTEXT: @src/.../TargetFile.tsx @src/.../TargetFile.test.ts
GOAL: [one sentence — e.g. show error when field empty]
IN SCOPE: only the files above
OUT OF SCOPE: refactor, i18n, other modules
FORMAT: smallest diff that works
VERIFY: [exact command — e.g. npm test -- TargetFile.test.ts]
```

### Sesión 3 — intake (C16, C18) — sin implementar

```
Mode A — draft only. Do NOT edit src/ or open Agent to implement.
Read @cursor/context-map.md and ticket below.
Create user-story.md and feature-manifest.md under cursor/analysis/features/<slug>/
In manifest: In scope, Out of scope (≥2 concrete items), Definition of done.
Set Implement now? no
```

### Sesión 4 — implement (C19, C20)

```
New chat. Do NOT reuse intake thread.
Read @feature-manifest.md @analysis.md
Implement only In scope. Revert anything Out of scope.
Update implementation-notes.md and test-checklist.md
VERIFY: run [command from manifest or analysis]
```

### Sesión 5 — review (C22)

```
New chat. Review diff against @user-story.md @feature-manifest.md
Find: scope creep, missing tests, DoD not met.
Output: numbered findings (blocker / nice-to-have). Do NOT merge.
```

### Manifest — Out of scope (C16)

**❌ Mal:**

```markdown
## Out of scope
- Improve UX
- Fix tech debt if needed
```

**✅ Bien:**

```markdown
## Out of scope
- No i18n / copy changes
- No table layout or column redesign
- No auth module refactor (ticket AUTH-99)
```
