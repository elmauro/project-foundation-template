# Guión del facilitador — AI with Cursor

Seis clases de 90 minutos. Léelo en voz alta o parafrasea; no hace falta ser literal.

Enseñas **conceptos genéricos de IA aplicados al código** (alcance, contexto, ciclo, verificación). **Cursor** es el laboratorio del curso; si alguien usa Copilot o Claude, el concepto es el mismo — cambia la UI, no la carpeta en git.

Hablas **español** con el grupo. Lo que van a **commitear** en el repo (`cursor/`, `.cursor/`) va en **inglés**. Los prompts se pegan en inglés; debajo pueden poner el ticket en español.

**Apoyo rápido (no hace falta leerlos en clase):**

- Cuaderno del alumno: [participant-workbook.md](participant-workbook.md)
- Qué copiar del template: [adopt-on-existing-repo.md](adopt-on-existing-repo.md)
- Cheatsheet sesión 1: [cheatsheet-cursor.md](cheatsheet-cursor.md)
- Cheatsheet sesiones 3–5: [cheatsheet-lifecycle.md](cheatsheet-lifecycle.md)
- Mapa de conceptos (tabla sesión ↔ concepto ↔ fuera del curso): [concepts-map.md](concepts-map.md)
- Detalle por concepto (definición, ejemplo, prompt): anexos [01](01-session.md)–[06](06-session.md)
- Si te preguntan el “por qué” técnico en inglés: [aspects-catalog.md](aspects-catalog.md)

---

## Antes de la primera clase

Una semana antes, pide a cada persona:

- Cursor instalado y su **repo real** abierto (no un proyecto de ejemplo vacío).
- Permiso para crear branch y commitear.
- Un ticket o bug **pequeño** (1–2 días de trabajo), acordado con su lead.
- Cómo prueban hoy ese repo (un comando concreto).

Mándales el [workbook](participant-workbook.md) para que lo llenen.

El día anterior: prueba tú Agent con `@` en cualquier repo. Ten abierto el folder `project-foundation-template` para copiar archivos.

Cada día de clase: llega 10 minutos antes. Ten el cheatsheet de esa sesión a mano.

---

## Cómo va cada clase (siempre igual)

**Minutos 0–10** — Saludas, preguntas a 2 o 3 voluntarios sobre la tarea de casa. Dices en una frase qué toca hoy.

**Minutos 10–40** — Explicas el concepto. Demo corta si quieres (5 minutos, no más). Dibuja una cosa en pizarra.

**Minutos 40–80** — **Práctica** en el repo de cada uno (abajo, sesión por sesión).

**Minutos 80–90** — **Cierre**: qué logramos, qué commitear, qué hacer en casa.

Si alguien termina antes: que mejore lo de hoy (mapa, análisis, checklist) — no que pida otra feature al agente.

---

## Qué significa “práctica” y “cierre” (para ti como facilitador)

En todas las sesiones usamos el mismo lenguaje:

| Bloque | En criollo | Qué NO es |
| --- | --- | --- |
| **Práctica** | Manos en el teclado, en **su** repo, con un resultado concreto que puedes verificar en 2 minutos | Una demo tuya de 40 minutos mientras ellos miran |
| **Cierre** | Alinear expectativas: “¿salimos con esto sí o no?”, commit, casa, una pregunta al grupo | Apagar Zoom sin decir qué commitear ni qué hacer el martes |

**Tu trabajo en la práctica:** caminar (o breakout rooms), mirar pantallas, **parar** cuando el agente se vaya al monorepo entero o cuando codeen en sesión 3.

**Tu trabajo en el cierre:** 2 voluntarios responden algo concreto; lees el “listo cuando”; das la tarea de casa en una frase.

---

## Lo que debes tener claro (repasa antes de la sesión 1)

**Di esto el primer día:**

> No venimos a aprender prompts mágicos. Venimos a armar un **sistema** para que Cursor trabaje bien en **su** código: con alcance claro, memoria fuera del chat y pruebas reales. Al final van a tener una historia hecha con ese sistema.

**No prometas:**

- Proyectos nuevos desde cero (eso es otro doc).
- Copiar Simulith, Loyalty ni carpetas de otro producto.
- “Diez veces más rápido”.

**Dibuja tres cajas (sesión 1):**

1. **Código** — lo que ya tienen.
2. **Reglas** — carpeta `.cursor/rules/` (la vemos en sesión 2).
3. **Memoria** — carpeta `cursor/` con mapa e historias (sesiones 2 en adelante).

---

# SESIÓN 1 — Cursor sin kit

**Conceptos:** C01–C04 · [anexo](01-session.md) · [tabla](concepts-map.md)

**Meta de hoy:** un cambio chico con Agent. Sin carpeta `cursor/` todavía.

---

### Apertura (0–10 min)

> Buenas. Este curso es sobre **el repo que ustedes trajeron**, no sobre un template genérico. Cada quien trabaja en su producto real.

> La idea no es prompts mágicos. Es un sistema: alcance, memoria fuera del chat, y verificar con comandos de verdad.

> Ronda rápida — 20 segundos cada uno: ¿cómo se llama el repo, qué stack usa, y cómo lo prueban hoy?

---

### Concepto (10–35 min)

> Cursor no “conoce” su repo. Si no le das mapa, inventa carpetas. Y el chat **no guarda** lo que acordaron ayer.

> Tres cosas en el repo: el **código** (ya está), las **reglas** en `.cursor/rules/` (la semana que viene), y la **memoria** en `cursor/` (después).

> Tres modos que usamos:
> - **Ask** — preguntar, explorar, sin tocar archivos.
> - **Agent** — que edite código.
> - **Plan** — pensar antes, cuando el cambio es grande.

> Reglas de oro:
> - Usen `@` con archivos o carpetas **concretos**. No “analiza todo el repo”.
> - En el prompt: objetivo, qué sí, qué no, cómo verificar.
> - Lean el diff. Corran el test. No mergeen porque el chat “se ve bien”.

> Lo que **no** hacemos: refactor de paso, 40 archivos para arreglar dos líneas, commitear `.env`.

*(Demo opcional, 5 min: en un repo maduro muestra `.cursor/rules/` y `cursor/context-map.md`. Di: “Así se ve cuando ya está armado. Ustedes lo van a construir. No lo copien.”)*

---

### Práctica (35–80 min) — qué esperamos

**Les dices al arrancar:**

> Esto no es teórico. En 40 minutos cada uno tiene que haber **pedido algo al agente, visto un diff y corrido una prueba** — aunque después deshagan el cambio.

**El alumno hace (en orden):**

1. Elige un cambio **chico** (15–30 min de trabajo real): typo, test que falta, bug acotado. **No** el ticket del curso todavía.
2. Abre modo **editar** (Agent en Cursor; equivalente en su herramienta).
3. Pega el prompt del [cheatsheet-cursor](cheatsheet-cursor.md) — **sin** `project-context`, aún no existe.
4. Adjunta **1 a 5 archivos** con `@` (o el equivalente en Copilot/Claude).
5. Aplica el diff, **lo lee** (no aceptar a ciegas).
6. Corre **un comando de verificación** — test, lint, o paso manual anotado.

**Tú haces:**

- Pasas cada 5–8 minutos por 2–3 pantallas.
- Si el agente lista medio repo → **paras**: “Tres paths concretos y repite.”
- Si mezclaron Ask y Agent → recuerda: “Explorar no escribe; editar sí.”

**Salió bien si (señales visibles):**

- Hay un diff en un branch (aunque sea 1 archivo).
- Pueden nombrar **un archivo que no debía tocarse** y por qué.
- Corrieron algo en terminal o escribieron el paso manual en el workbook.

**Si van más lento:** que terminen con **un solo archivo** y verify. Mejor chico y completo que épico a medias.

**Si van más rápido:** que repitan el ejercicio en **modo explorar** primero y luego editar — mismo ticket, dos modos.

---

### Cierre (80–90 min) — qué esperamos

**En voz alta (léelo o parafrasea):**

> Antes de irnos: ¿salimos con lo mínimo? No es “¿entendieron Cursor?” — es “¿hicieron el ciclo chico: scope → diff → verify?”

**Pregunta al grupo (2 voluntarios):**

> “¿Qué archivo **no** debía haber tocado el agente?”  
> “¿Qué comando corrieron para verificar?”

**Commit:** opcional hoy (puede ser experimento revertido). Lo importante es el **workbook**, no el merge.

**Tarea de casa (una frase):**

> Terminen o reviertan el cambio; anoten en el [workbook](participant-workbook.md) qué adjuntaron y qué leyó de más; confirmen con el lead el **ticket** para sesiones 3–5 (slice de 1–2 días).

**Les recuerdas:**

> **No** instalen el kit `cursor/` todavía. Eso es el martes.

**Se van de acá cuando (listo cuando):**

- [ ] Hubo un diff real (aunque lo deshagan).
- [ ] Explican explorar vs editar en **su** herramienta.
- [ ] Tienen ticket candidato para la historia del curso.

---

# SESIÓN 2 — Mapa e identidad

**Conceptos:** C05–C09 · [anexo](02-session.md) · [tabla](concepts-map.md)

**Meta de hoy:** que el repo tenga mapa, identidad y reglas básicas.

---

### Apertura (0–10 min)

> ¿Qué leyó de más el agente la semana pasada? Hoy le damos **mapa** para que deje de adivinar.

---

### Concepto (10–30 min)

> Dos carpetas distintas:
> - `.cursor/rules/` — reglas **cortas** que Cursor carga solo.
> - `cursor/` — documentos largos, prompts, historias.

> `project.config.json` es la ficha del proyecto: nombre, stacks que **existen de verdad**. No inventen `frontend/` si solo tienen `api/`.

> Importante: **hablamos español** en clase. Lo que commitean en `cursor/` y `.cursor/` va en **inglés**. El chat puede ser en español.

*(Demo opcional: un `project-context.md` de 1–2 páginas en un repo maduro.)*

---

### Copia guiada (30–45 min)

> Vamos juntos, no lean en silencio.

1. Copien de `project-foundation-template` → ver [adopt-on-existing-repo](adopt-on-existing-repo.md) capa 0.
2. Copien `cursor/prompts/adoption/`.
3. Scaffold de `context-map.md`.
4. Peguen **Mode A** de `prompt-bootstrap-project-map.md` con `@README`, `@package.json` y rutas reales.
5. Revisan, corrigen, **Mode B** aplica.
6. Lo mismo con `prompt-bootstrap-stack-context.md` para su stack principal.
7. Copien reglas: `core-standards`, `project-context`, `documentation-english`.
8. Regla de React/serverless/Terraform **solo si les calza**. Si no, con el `project-context` alcanza esta semana.

---

### Práctica (45–80 min) — qué esperamos

**Les dices:**

> Hoy la práctica tiene **dos partes**: (1) el mapa tiene que existir en git, (2) tienen que **notar la diferencia** vs la sesión 1 — el agente ya no adivina tanto.

**El alumno hace:**

1. Termina la copia guiada si quedó a medias (mapa + al menos un `project-context.md` + reglas core).
2. Repite un cambio **parecido** al de la sesión 1 (mismo tipo: chico).
3. Esta vez adjunta `@cursor/context-map.md` y `@cursor/projects/<stack>/project-context.md`.
4. **Prueba de control** (obligatoria): en modo explorar, pregunta *“Where do I add a new test for X?”* — la respuesta debe citar **su** mapa, no inventar carpetas.

**Tú haces:**

- Revisas 3 mapas al azar: ¿hay `frontend/` inventado? → que lo borren.
- Si la prueba de control falla → el mapa no sirve; 10 min más de edición humana.

**Salió bien si:**

- `context-map.md` commiteado y describe **su** repo, no el template genérico.
- El cambio de código tocó **menos archivos extra** que en sesión 1 (ideal) o al menos con scope explícito.
- Pasaron la prueba de control en voz alta contigo o con un compañero.

**Si van más lento:** mapa + un stack context + prueba de control. El cambio de código puede quedar para casa.

**Si van más rápido:** segundo `project-context.md` para otro stack; o mejorar el mapa con sección “Do NOT read”.

---

### Cierre (80–90 min) — qué esperamos

**En voz alta:**

> Hoy el entregable no es “Cursor configurado” — es **un mapa que otro dev puede usar** sin preguntarte dónde están los tests.

**Pregunta al grupo:**

> “¿Qué carpeta **borraron** del mapa porque no existe en su repo?”

**Commit sugerido:** `chore(cursor): add project map and core rules`

**Tarea de casa:**

> Mapa completo para **todos** los stacks; un `project-context.md` por stack; repetir la prueba de control con un compañero.

**Se van de acá cuando:**

- [ ] `project.config.json` refleja stacks reales.
- [ ] El mapa no menciona carpetas inventadas.
- [ ] Al menos un `project-context.md` revisado por un humano del stack.
- [ ] Pasaron la prueba de control (explorar + citar mapa).

---

# SESIÓN 3 — Una historia que no vive en el chat

**Conceptos:** C10–C13 (intake) · [anexo](03-session.md) · [tabla](concepts-map.md)

**Meta de hoy:** carpeta de la feature con story y manifest. **Sin implementar** código en clase.

---

### Apertura (0–10 min)

> ¿La prueba del mapa funcionó? Si no, 5 minutos a arreglar `context-map.md`.

---

### Concepto (10–30 min)

> El chat se pierde. La memoria vive acá:

```
cursor/analysis/features/<slug>/
  feature-manifest.md
  user-story.md
  analysis.md        ← tarea de casa
  ...
```

> **Slug** = nombre de carpeta, kebab-case. **Feature name** = título bonito.

> **Ticket** (Jira, GitHub…) no es lo mismo que **Backlog ID** (`FW-*`). Eso lo vemos en sesión 6. Hoy Backlog ID = `n/a`.

> Hoy solo: **intake** → story. No código.

---

### Copia + práctica (30–80 min) — qué esperamos

**Les dices:**

> Hoy **no escriben código de producto**. Si ven un diff en `src/`, algo salió mal. Hoy solo dejan **el contrato** de la historia en archivos.

**El alumno hace:**

1. Copia capa A (templates + prompts) — [adopt guide](adopt-on-existing-repo.md) bloque sesión 3.
2. Elige **su ticket real** ya acordado con el lead — recortado a 1–2 días.
3. Chat **nuevo** → pega intake Mode A del [cheatsheet-lifecycle](cheatsheet-lifecycle.md).
4. Revisa `user-story.md` y `feature-manifest.md` en **inglés**.
5. En el manifest: **In scope**, **Out of scope** y definition of done **concretos** (no “mejorar UX”).
6. `Implement now? no` — sin excepciones en clase.
7. Añade una fila en `cursor/analysis/features/INDEX.md`.

**Tú haces:**

- Si abren Agent y empieza a codear → **paras**: “Sesión 4. Guarda el manifest.”
- Lees 2 manifests en voz alta: ¿se entiende qué **no** van a hacer?

**Salió bien si:**

- Existe `cursor/analysis/features/<slug>/` con story + manifest.
- Out of scope tiene al menos 2 ítems reales (ej. “no i18n”, “no refactor table”).
- Nadie tiene un PR de código de producto hoy.

**Si van más lento:** story + manifest mínimo viable; `analysis.md` es casa.

**Si van más rápido:** empiezan `analysis.md` en clase — **sin** implementar.

---

### Cierre (80–90 min) — qué esperamos

**En voz alta:**

> El chat de hoy se puede cerrar y tirar. Lo que importa es la **carpeta en git** — eso es la memoria.

**Pregunta al grupo:**

> “Lean en voz alta un ítem de **Out of scope** de su manifest.”

**Commit sugerido:** `chore(cursor): add feature templates and first story package`

**Tarea de casa:**

> Completar `analysis.md`; criterios de aceptación testeables; el lead confirma que ese slice se implementa en sesión 4.

**Se van de acá cuando:**

- [ ] Carpeta `<slug>/` con story + manifest en inglés.
- [ ] Manifest con scope acotado (no épico).
- [ ] **Cero** código de producto commiteado hoy.

---

# SESIÓN 4 — Implementar y validar

**Conceptos:** C13–C16 · [anexo](04-session.md) · [tabla](concepts-map.md)

**Meta de hoy:** código en branch, notas de implementación, checklist de prueba empezado. Review es **mañana**.

---

### Apertura (0–10 min)

> ¿El ticket cabe en ~90 minutos de código? Si el análisis creció a un épico, recorten **ahora** el Out of scope.

---

### Concepto (10–35 min)

> El ciclo completo es:

```
INTAKE → STORY → ANALYSIS → IMPLEMENT → VALIDATE → REVIEW → CLOSE
                              ↑ hoy ↑
```

> Copien playbook y prompts de implement/validate si faltan.

> Validar = lo que **exista** en su repo: test, lint, o un paso manual honesto en el checklist. No inventamos Cypress si no lo tienen.

> **Chat nueva.** No sigan el hilo del intake.

---

### Práctica (35–80 min) — qué esperamos

**Les dices:**

> Hoy sí hay código — pero **solo lo del manifest**. Si el agente “aprovecha y refactoriza”, ustedes revierten. El humano manda.

**El alumno hace:**

1. Termina `analysis.md` si falta (10 min máx.; si no, sigue con lo que hay).
2. **Chat nuevo** — no reusa el hilo del intake.
3. Prompt de **implement** del [cheatsheet-lifecycle](cheatsheet-lifecycle.md) + adjunta manifest y analysis.
4. Revisa el diff **archivo por archivo** — revierte lo fuera de scope.
5. Corre **un comando de verificación** en terminal (test, lint, build — lo que exista).
6. Actualiza `test-checklist.md` (aunque sea borrador) o prompt de **validate**.
7. Empieza `implementation-notes.md` si hubo desvíos del plan.

**Tú haces:**

- PR/diff de 40 archivos para un fix chico → **mala señal**: “Recorten. Manifest manda.”
- Si no tienen tests → checklist con pasos manuales **honestos**, no “LGTM”.

**Salió bien si:**

- Hay código en branch acotado al manifest (ideal: ≤10 archivos; depende del slice).
- Corrieron al menos **un** verify en clase, o el checklist dice exactamente qué correr.
- Pueden decir qué **no** implementaron porque estaba en Out of scope.

**Si van más lento:** un happy path mínimo + un verify + checklist con 3 pasos.

**Si van más rápido:** terminan el slice; no empiezan review (sesión 5).

---

### Cierre (80–90 min) — qué esperamos

**En voz alta:**

> No tienen que terminar el ticket entero hoy. Tienen que salir con **evidencia** de que funciona o con un checklist que otra persona pueda seguir.

**Pregunta al grupo:**

> “¿Qué comando corrieron — o qué paso manual dejaron escrito?”

**Commit:** código + notes/checklist en branch; manifest puede quedar en `implementation` o `validation`.

**Tarea de casa:**

> Terminar el slice; checklist usable por un compañero; notes con desvíos; **no mergear** (review mañana).

**Se van de acá cuando:**

- [ ] Diff alineado al manifest (extras revertidos).
- [ ] Al menos un verify corrido **o** pasos manuales claros en checklist.
- [ ] Saben que review es sesión 5 — no “ya mergeamos porque Cursor dijo ok”.

---

# SESIÓN 5 — Review, cerrar y gastar menos tokens

**Conceptos:** C17–C21 · [anexo](05-session.md) · [tabla](concepts-map.md)

**Meta de hoy:** review hecho, cierre lite, regla de scope, hábito de chat nueva por fase.

---

### Apertura (0–10 min)

> ¿El checklist dice **qué comando** correr? Si dice solo “run tests”, corríjanlo ya.

---

### Concepto (10–45 min)

> Review **no** es merge. Es: ¿el diff cumple la story? ¿Respetó el alcance? ¿Tests y docs al día?

> Cierre lite: actualizar manifest e `INDEX.md`. Docs del stack solo si cambió un contrato.

> Ahora **tokens**: el playbook no cambia; cambia **cuánto lee** el agente. Copien `context-scope.mdc` y `context-scope-sessions.md`.

> **Un chat por fase.** La memoria está en los archivos, no en el hilo de 40 mensajes.

---

### Práctica (45–80 min) — qué esperamos

**Les dices:**

> Hoy cerramos el ciclo. Tres chats distintos si hace falta — **no** uno solo de 200 mensajes. La memoria está en los archivos.

**El alumno hace:**

1. **Chat nuevo** → prompt de **review** + carpeta de la feature + guidelines.
2. Lee findings; decide qué es blocker vs nice-to-have (humano decide, no el modelo).
3. **Otro chat nuevo** → **close lite** → manifest + `INDEX.md` actualizados.
4. Copia `context-scope.mdc` (capa A+) y lee `context-scope-sessions.md`.
5. *(Opcional)* Bug de 10 min con `prompt-bug-fix.md` en **otro** chat — para practicar flujo corto.
6. *(10 min)* Revisa el diff de un compañero usando `review-guidelines.md`.

**Tú haces:**

- Si mezclan review + close en el mismo chat → explica C17: “Nuevo chat, solo archivos del close.”
- Si el review solo dice “looks good” → “¿Dónde está el scope creep? Lean el manifest.”

**Salió bien si:**

- Hay findings de review **o** confirmación explícita de que el diff cumple la story.
- Manifest e INDEX reflejan estado cerrado (o “ready for PR”).
- `context-scope.mdc` está en el repo.
- Pueden explicar en una frase por qué abrieron chat nueva.

**Si van más lento:** review + close lite; bug-fix y peer review quedan para casa.

**Si van más rápido:** bug-fix prompt; peer review de un segundo compañero.

---

### Cierre (80–90 min) — qué esperamos

**En voz alta:**

> A partir de hoy el hábito es: **fase nueva, chat nuevo**. Y antes de mergear, alguien corrió lo del checklist — no el modelo.

**Pregunta al grupo:**

> “¿Por qué no seguirían el mismo chat del intake para el close?”

**Commit sugerido:** `chore(cursor): add review, close, and context-scope rules` (+ PR de la feature si aplica)

**Tarea de casa:**

> PR listo según su equipo; un bug chico con bug-fix en chat nuevo; guardar el bloque útil de `context-scope-sessions.md`.

**Se van de acá cuando:**

- [ ] Review documentado (findings o “cumple story + manifest”).
- [ ] Close lite hecho (manifest + INDEX coherentes).
- [ ] `context-scope.mdc` commiteado.
- [ ] Explican chat nuevo por fase con sus palabras.

---

# SESIÓN 6 — Producto y el lunes

**Conceptos:** C22–C23 (+ C26 opt-in) · [anexo](06-session.md) · [tabla](concepts-map.md)

**Meta de hoy:** visión corta, tres ítems de backlog, checklist del lunes. Cerramos el curso.

---

### Apertura (0–10 min)

> Una frase cada uno: ¿su historia quedó merged, en PR, o bloqueada?

---

### Concepto (10–30 min)

> Sin visión escrita, el agente agranda el scope: “también podríamos…”.

> Dos IDs distintos:
> - **FW-ACME-012** — idea de producto (backlog).
> - **ACME-1041** — ticket de ejecución.

> **No copien** de otro producto: IDs tipo `SML-*`, registries llenos, carpetas `runtime/` que no son suyas. Eso es basura en el repo.

---

### Práctica (30–80 min) — qué esperamos

**Les dices:**

> Última práctica: pensar **producto**, no solo ticket. Y limpiar basura copiada de otros repos si la hay.

**El alumno hace:**

1. Copia scaffold `cursor/company/` + regla `company-product-context.mdc` si aplica.
2. Modo explorar → borrador de `product-vision.md` (inglés, **una página max**) → **humano recorta** lo inventado.
3. Escribe **3 ítems `FW-<PREFIJO>-*`** reales: deuda técnica, feature futura, riesgo — cada uno en una frase.
4. Completa el [workbook](participant-workbook.md): qué capas tienen (0, A, B), qué prompt pegarán el lunes.
5. *(Opcional)* Mira scripts Layer C — “existen, no son obligatorios.”

**Tú haces:**

- Recorres repos: ¿copiaron `SML-*`, `runtime/`, registry de Loyalty/Simulith? → marcar para borrar.
- ¿Los `FW-*` son reales o relleno? → que el lead valide uno.

**Salió bien si:**

- `product-vision.md` o equivalente existe y **no inventa** features que el equipo no planea.
- 3 `FW-*` distinguibles de sus tickets Jira/GitHub.
- Workbook completo.
- Nadie tiene Capa D de otro producto.

**Si van más lento:** visión borrador + 2 `FW-*`; el tercero en casa.

**Si van más rápido:** eligen un `FW-*` y lo bosquejan como próximo intake (sin implementar hoy).

---

### Cierre del curso (80–90 min) — qué esperamos

**En voz alta (checklist del lunes — lean juntos):**

1. No abras el agente sin contexto del mapa o de la feature activa.
2. Historia nueva → intake primero; no saltar al código.
3. Verifica con **tu** comando, no con fe en el modelo.
4. Si pide leer el repo entero → recorta scope.
5. Kit desde **project-foundation-template**, nunca clonar otro producto vivo.

**Pregunta al grupo (cierre emocional + práctico):**

> “Una cosa que hacían mal hace 6 semanas y hoy ya no harían.”  
> “¿Qué commitean el lunes cuando les cae el primer ticket?”

**Commit sugerido:** `chore(cursor): add company context and product backlog scaffold`

**Tarea de casa (post-curso):**

> Compartir visión + `FW-*` con el equipo; promover **un** `FW-*` a intake en el próximo sprint.

**El curso cierra cuando (programa completo):**

- [ ] Capa 0 en el repo (mapa + reglas).
- [ ] Una historia recorrida (story → código → review/close).
- [ ] Visión de una página + 3 `FW-*` (o equivalente acordado).
- [ ] Pueden pegar intake y bug-fix sin leer el playbook entero.
- [ ] Nadie trajo Capa D de otro producto.

**Despedida:**

> Gracias. Dudas: workbook, cheatsheets, [concepts-map](concepts-map.md). El sistema vive en **git**, no en este chat.

---

## Resumen — práctica y cierre por sesión

| Sesión | En la práctica esperamos… | En el cierre esperamos… |
| --- | --- | --- |
| 1 | Diff chico + verify; scope con `@`; explorar vs editar | Workbook; ticket candidato; **sin** kit |
| 2 | Mapa commiteado + prueba de control (citar mapa) | Mapa sin carpetas inventadas; commit Layer 0 |
| 3 | Carpeta feature + story/manifest; **sin código** | Leer Out of scope en voz alta; analysis en casa |
| 4 | Código acotado al manifest + verify o checklist | Evidencia de prueba; no mergear aún |
| 5 | Review + close lite + context-scope; chats nuevos | Explicar por qué chat nuevo; PR opcional |
| 6 | Visión + 3× `FW-*` + workbook; limpiar copias ajenas | Checklist del lunes; criterios del programa |

---

## Cuando intervengas (frases listas)

| Pasa esto | Di esto |
| --- | --- |
| Lista todo el repo | “Para. Tres `@` concretos y repite el prompt.” |
| Inventa `frontend/` que no existe | “Mira `context-map.md` — eso no está.” |
| Codea en sesión 3 | “Intake only. Código en sesión 4.” |
| Diff enorme en sesión 4 | “Recorta scope. Revierte lo extra.” |
| Quieren copiar Simulith | “Template genérico, no otro producto.” |
| “No tenemos tests” | “Lint, script, o paso manual en el checklist.” |

---

## Calendario simple (6 semanas)

| Semana | Clase | Casa |
| --- | --- | --- |
| 1 | Cursor sin kit | Cambio chico + confirmar ticket |
| 2 | Mapa | Mapa + context por stack |
| 3 | Intake | Terminar analysis |
| 4 | Implement | Terminar slice + checklist |
| 5 | Review | PR + bug chico opcional |
| 6 | Producto | Promover un FW a story |

Entre clases: 45–90 min en el mismo repo.

---

## Primera vez facilitando

- El 50% es práctica; no hables 90 minutos seguidos.
- Demo corta, una por clase, si acaso.
- Celebra **pocos archivos tocados**, no muchos.
- Si te pierdes: mira la **meta de hoy** al inicio de cada sesión arriba.
- Más detalle técnico: [00-facilitator-guide.md](00-facilitator-guide.md). Tareas de casa por sesión: anexos [01](01-session.md)–[06](06-session.md).
