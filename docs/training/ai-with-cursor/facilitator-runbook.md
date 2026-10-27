# Guión del facilitador — AI with Cursor

Seis clases de 90 minutos en **bloque consecutivo**. Léelo en voz alta o parafrasea; no hace falta ser literal.

**Regla del curso:** no hay tareas entre sesiones. Todo entregable va en la práctica o en el cierre de **esa** sesión. Si el grupo va lento, recorta scope con el lead — no pospongas.

Enseñas **definiciones de IA** que el equipo debe conocer (LLM, contexto, alucinación, ventana de tokens, human-in-the-loop…). Esas ideas **no dependen de Cursor**.

**Cursor** es el laboratorio donde practican; el **kit en git** es una forma de materializar los patrones. Si alguien usa Copilot o Claude, las definiciones son las mismas — cambia la UI.

Hablas **español** con el grupo. Lo que van a **commitear** en el repo (`cursor/`, `.cursor/`) va en **inglés**. Los prompts se pegan en inglés; debajo pueden poner el ticket en español.

**Apoyo rápido (no hace falta leerlos en clase):**

- Cuaderno del alumno: [participant-workbook.md](participant-workbook.md)
- Qué copiar del template: [adopt-on-existing-repo.md](adopt-on-existing-repo.md)
- Cheatsheet sesión 1: [cheatsheet-cursor.md](cheatsheet-cursor.md)
- Cheatsheet sesiones 3–5: [cheatsheet-lifecycle.md](cheatsheet-lifecycle.md)
- Glosario completo (qué es + ejemplo + por qué importa): [concepts-map.md](concepts-map.md)
- **Ejemplos copiables** (prompts, ❌/✅, diagramas): [concepts-map.md § Anexo](concepts-map.md#anexo--ejemplos-listos-para-copiar-o-dictar)
- **Para dictar en clase:** cada concepto es una **historia corta** en “Conceptos de hoy”. Léela o cuéntala; no hace falta el formato “qué es / ejemplo / por qué”
- Estilo de explicación como [elmauro/databricks/spanish](https://github.com/elmauro/databricks/tree/master/spanish): ejemplo práctico, ❌/✅, visual si ayuda — sin Databricks/RAG en el curso
- Anexos por sesión: [01](01-session.md)–[06](06-session.md)
- **Una diapositiva por sesión** (copiar tal cual): [slides/](slides/)
- **Laboratorio paso a paso** (alumnos siguen esto en la práctica): [labs/](labs/)
- Si te preguntan el “por qué” técnico en inglés: [aspects-catalog.md](aspects-catalog.md)

---

## Antes de empezar el bloque (pre-requisitos, no es “tarea”)

Antes del **primer día** del curso, cada persona debe traer:

- Cursor instalado y su **repo real** abierto (no un proyecto de ejemplo vacío).
- Permiso para crear branch y commitear.
- Un ticket o bug **pequeño** (1–2 días de trabajo), acordado con su lead.
- Cómo prueban hoy ese repo (un comando concreto).

Mándales el [workbook](participant-workbook.md) para que completen la tabla de pre-requisitos **antes** de la sesión 1 (5 minutos en la apertura si falta algo).

El día anterior al bloque: prueba tú Agent con `@` en cualquier repo. Ten abierto el folder `project-foundation-template` para copiar archivos.

Cada día de clase: llega 10 minutos antes. Ten el cheatsheet de esa sesión a mano.

---

## Cómo va cada clase (siempre igual)

**Minutos 0–10** — Saludas, recap de la **sesión anterior** (2–3 voluntarios). Dices en una frase qué toca hoy. En la sesión 1: ronda de presentación del repo.

**Minutos 10–40** — Explicas el concepto. Demo corta si quieres (5 minutos, no más). Dibuja una cosa en pizarra.

**Minutos 40–80** — **Práctica** en el repo de cada uno (abajo, sesión por sesión).

**Minutos 80–90** — **Cierre**: qué logramos, commit, checklist “listo cuando”. **Nada queda para después** — si falta algo, recortamos scope en la misma sesión.

Si alguien termina antes: que mejore lo de hoy (mapa, análisis, checklist) — no que pida otra feature al agente.

---

## Qué significa “práctica” y “cierre” (para ti como facilitador)

En todas las sesiones usamos el mismo lenguaje:

| Bloque | En criollo | Qué NO es |
| --- | --- | --- |
| **Práctica** | Manos en el teclado, en **su** repo, con un resultado concreto que puedes verificar en 2 minutos | Una demo tuya de 40 minutos mientras ellos miran |
| **Cierre** | Alinear expectativas: “¿salimos con esto sí o no?”, commit, una pregunta al grupo | Apagar sin commit ni checklist “listo cuando” |

**Tu trabajo en la práctica:** caminar (o breakout rooms), mirar pantallas, **parar** cuando el agente se vaya al monorepo entero o cuando codeen en sesión 3.

**Tu trabajo en el cierre:** 2 voluntarios responden algo concreto; lees el “listo cuando”; si alguien no cumple, **10 min extra en la misma sesión** o recortas el entregable con el lead — no mandes nada “para la próxima semana”.

---

## Lo que debes tener claro (repasa antes de la sesión 1)

**Di esto el primer día:**

> No venimos a aprender “trucos de Cursor”. Venimos a entender **cómo funciona la IA** cuando programamos — y a armar hábitos y archivos para que no nos patee. Cursor es la herramienta de práctica; las definiciones valen con Copilot, Claude o lo que venga.

> Tres ideas mínimas: (1) el modelo **no conoce** tu repo, (2) el chat **no recuerda** el chat de ayer, (3) el humano **verifica** — siempre.

**No prometas:**

- Proyectos nuevos desde cero (eso es otro doc).
- Copiar Simulith, Loyalty ni carpetas de otro producto.
- “Diez veces más rápido”.

**Dibuja tres cajas (sesión 1):**

1. **Código** — lo que ya tienen.
2. **Reglas** — carpeta `.cursor/rules/` (la vemos en sesión 2).
3. **Memoria** — carpeta `cursor/` con mapa e historias (sesiones 2 en adelante).

---

# SESIÓN 1 — Fundamentos IA + primera práctica

**Conceptos:** fundamentos C01–C08 + patrones C09–C13 · [anexo](01-session.md) · [glosario](concepts-map.md)

**Meta de hoy:** que entiendan **qué es un LLM en la práctica** y hagan un cambio chico con alcance + verify. Sin kit `cursor/` todavía.

---

### Apertura (0–10 min)

> Buenas. Este curso es sobre **el repo que ustedes trajeron**, no sobre un template genérico. Cada quien trabaja en su producto real.

> La idea no es prompts mágicos. Es un sistema: alcance, memoria fuera del chat, y verificar con comandos de verdad.

> Ronda rápida — 20 segundos cada uno: ¿cómo se llama el repo, qué stack usa, y cómo lo prueban hoy?

---

### Conceptos de hoy (10–35 min) — cuéntalos

Cada bloque es una historia corta. Léela o cuéntala con tus palabras. Si ayuda, dibuja en la pizarra. Glosario y ejemplos para copiar: [concepts-map.md](concepts-map.md).

---

#### C01 — El modelo no conoce tu repo

Le pasas un archivo y le pides un test. En segundos te devuelve algo que *se ve* a test de verdad. Lo abres: el import no existe. Se lo inventó.

Por dentro no guarda tu código. Adivina la siguiente palabra, una y otra vez, con lo que le diste **en esta petición**. Si hablas vago, llena los huecos solo.

No es un senior del equipo. Es un asistente rapidísimo que solo ve esta conversación.

---

#### C02 — El escritorio se llena

Imagina un escritorio chico. Encima caben los archivos, las reglas, el chat de hace una hora y el pedido de ahora. Pones 15 archivos y un chat eterno: lo del medio se cae al piso. El modelo sigue hablando como si lo hubiera leído.

Más texto no mejora la respuesta. Por eso hoy acotamos qué le damos (C09) y en la sesión 5 abrimos un chat nuevo por cada fase (C21).

---

#### C03 — Suena seguro y está mal

Preguntas: “¿dónde está getOrders?”. Responde con calma: `src/services/UserService.ts`. Abres el archivo. Esa función no está. En tu repo vive en otro path.

Eso es una alucinación: una respuesta segura y falsa. A veces inventa algo que no existe. A veces se contradice.

❌ “Suena bien, mergeo.”
✅ Abres el path y corres el test en tu terminal.

Es comportamiento normal, no un bug raro. La defensa eres tú (C12), no el tono de la respuesta.

---

#### C04 — Solo ve lo que le pones enfrente

“Arregla el login” es como decirle a alguien nuevo “arregla eso” y señalar toda la oficina. No sabe qué archivo, qué dejar quieto, ni cómo sabes que quedó bien.

Mejor: le pasas `@login.tsx`, `@login.test.ts`, le dices qué no debe tocar, y cómo verificar.

El cambio que te devuelve sale de eso. De lo que le pusiste enfrente.

---

#### C05 — El chat de ayer ya no existe

El martes acordaron en el chat: “no toques las traducciones”. El miércoles abren un chat nuevo. Para el modelo, esa conversación nunca pasó. Slack tampoco cuenta.

Solo permanece lo que quedó escrito en **git**. Por eso en las sesiones 2 y 3 el mapa y la historia van a archivos.

---

#### C06 — Cómo le pides las cosas

Un pedido vago deja huecos. El modelo los llena solo, y ahí aparecen las invenciones del C03.

Un pedido claro trae cinco cosas: qué hacer, con qué archivos, cuál es el objetivo, cómo debe verse la respuesta, y cómo verificar.

❌ “Arregla login.”
✅ Instrucciones + los `@archivos` + el objetivo + el comando para verificar.

El bloque para copiar está en el [anexo del glosario](concepts-map.md#anexo--ejemplos-listos-para-copiar-o-dictar).

---

#### C07 — Las reglas pegadas en la pared *(mañana las escribimos)*

Hay frases que no quieres repetir en cada chat: “los docs de `cursor/` van en inglés”.

Esas frases viven en el repo y el editor se las muestra al modelo **antes** de tu mensaje (`.cursor/rules/`, `CLAUDE.md`). Hoy solo las nombramos. Mañana las pegamos.

---

#### C08 — Ahora también puede tocar el teclado

Hasta aquí el modelo solo hablaba. Un agente puede actuar: abrir archivos, escribir el cambio, correr un comando.

Le pides un test. Abre archivos, propone el diff, a veces corre npm. Tú miras **antes** de aceptar.

Más manos, más chance de que se vaya de tema. Hoy lo frenan el alcance (C09) y tu revisión (C11).

---

#### C09 — Dile hasta dónde puede llegar

El ticket vive en `src/auth/`. Le adjuntas solo esa carpeta. Le escribes qué entra y qué queda fuera. Le prohibes “analiza todo el repo”.

Sin ese límite, como no conoce tu código, aprovecha y refactoriza de paso.

Hoy: `@` en los archivos justos, y dos líneas de alcance en el pedido.

---

#### C10 — Preguntar no es editar

Tres intenciones, tres modos:

- **Explorar:** “¿dónde se valida el email?” Mira. No toca archivos.
- **Editar:** “añade el test.” Escribe, con alcance.
- **Planificar:** si el cambio es grande, primero el plan y después el código.

Si pides “solo quiero entender” en modo editar, te cambia archivos.

Hoy en Cursor: Ask, Agent y Plan. Explorar explica. Editar escribe.

---

#### C11 — Tú sigues al volante

El agente propone. Tú apruebas.

Toca 8 archivos. Lees el diff. Reviertes 6. Te quedas con 2.

El código que entra al repo es tuyo frente al equipo. Hoy: lees antes de aceptar.

---

#### C12 — Si no lo corriste, no pasó

El chat dice “listo, el test pasa”. Abres la terminal y corres `npm test -- login.test.ts`. Verde o rojo lo dice la terminal.

Si no hay test, escribes el paso a mano: qué hacer y qué deberías ver.

Hoy cada pedido cierra con `Verify with:` y **tú** ejecutas ese comando.

---

#### C13 — Tres cajones *(el resto lo armamos después)*

Tres cajones. Hoy solo está lleno el primero, y por eso en cada chat repiten “los tests son `pnpm test`” y adjuntan medio repo.

1. **Código** — lo que ya tienen.
2. **Reglas cortas** — el editor las carga siempre (sesión 2).
3. **Memoria en archivos** — el mapa y las historias (sesión 2 en adelante).

Hoy, sin esos cajones, el alcance a mano (C09) es obligatorio.

---

*(Demo opcional, 5 min: repo con kit. “Así se ven las capas. Ustedes las construyen.”)*

Más detalle: [concepts-map.md](concepts-map.md)

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
7. Acuerda con el lead (en la sala o ping rápido) el **ticket slice** para sesiones 3–4 — recortado a 1–2 días.
8. Anota en el [workbook](participant-workbook.md) sesión 1 (adjuntos, verify, ticket).

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

**Commit:** opcional (puede ser experimento revertido). Workbook sesión 1 completo en clase.

**Les recuerdas:**

> **No** instalen el kit `cursor/` todavía. Eso es en la **sesión 2**.

**Se van de acá cuando (listo cuando):**

- [ ] Hubo un diff real (aunque lo deshagan).
- [ ] Explican explorar vs editar en **su** herramienta.
- [ ] Ticket slice **confirmado con el lead** para sesiones 3–4.
- [ ] Workbook sesión 1 completo.

---

# SESIÓN 2 — Mapa e identidad

**Conceptos:** C07, C13–C14 · [anexo](02-session.md) · [glosario](concepts-map.md)

**Meta de hoy:** que el repo tenga mapa, identidad y reglas básicas.

---

### Apertura (0–10 min)

> ¿Qué leyó de más el agente en la sesión 1? Hoy le damos **mapa** para que deje de adivinar.

---

### Conceptos de hoy (10–30 min) — cuéntalos

Cada bloque sigue la historia de ayer. Léelo o cuéntalo. Glosario: [concepts-map.md](concepts-map.md).

---

#### C07 — Lo que ya no tienes que repetir

Ayer, en cada pedido, tuvieron que decir “los tests se corren así” y “no toques esto”. Hoy esa frase se pega en la pared del repo.

El editor se la muestra al modelo **antes** de tu mensaje. “No commitees `.env`” deja de escribirse en cada chat. Cursor, Copilot o Claude la ponen solos.

El escritorio se llena menos (C02) y la convención no se olvida.

Hoy: `.cursor/rules/`. En Copilot sería `copilot-instructions.md`. En Claude, `CLAUDE.md`.

---

#### C13 — Cada cosa en su cajón

Tres cajones, cada uno con su tamaño.

El **código** es el producto. Las **reglas** son frases cortas, siempre visibles. El **mapa** y las historias son documentos largos: viven en `cursor/` y se adjuntan cuando hacen falta.

Si metes el mapa entero en una regla que se carga siempre, el escritorio se llena antes de que escribas el pedido. Reglas cortas, mapa aparte.

Sin esos cajones, cada chat empieza en blanco (C05) y repites lo mismo.

---

#### C14 — Un mapa para no adivinar la casa

Llega alguien nuevo y pregunta “¿dónde pongo un test?”. Sin mapa, el modelo inventa una carpeta `frontend/` aunque el repo sea solo backend.

El mapa es el índice en git: los tests están acá, la API acá, los prompts acá. Sirve para la persona y para el modelo, porque el modelo no conoce tu repo (C01).

Hoy: `cursor/context-map.md` y `project.config.json`.

La prueba, en modo explorar: *“Where do I add a new test for X?”* La respuesta cita **su** mapa. Si inventa una carpeta, el mapa todavía no sirve.

---

**Kit de hoy (implementación, no el concepto):** `project-context.md` por stack, reglas core — materializan C13–C14 en git.

> **Idioma:** hablamos español en clase; lo que commitean en `cursor/` y `.cursor/` va en **inglés**.

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
8. Regla de React/serverless/Terraform **solo si les calza**. Si no, con el `project-context` alcanza hoy.

---

### Práctica (45–80 min) — qué esperamos

**Les dices:**

> Hoy la práctica tiene **dos partes**: (1) el mapa tiene que existir en git, (2) tienen que **notar la diferencia** vs la sesión 1 — el agente ya no adivina tanto.

**El alumno hace:**

1. Termina la copia guiada si quedó a medias (mapa + al menos un `project-context.md` + reglas core).
2. Repite un cambio **parecido** al de la sesión 1 (mismo tipo: chico).
3. Esta vez adjunta `@cursor/context-map.md` y `@cursor/projects/<stack>/project-context.md`.
4. **Prueba de control** (obligatoria): en modo explorar, pregunta *“Where do I add a new test for X?”* — la respuesta debe citar **su** mapa, no inventar carpetas.
5. Workbook sesión 2 completo antes del cierre.

**Tú haces:**

- Revisas 3 mapas al azar: ¿hay `frontend/` inventado? → que lo borren.
- Si la prueba de control falla → el mapa no sirve; 10 min más de edición humana.

**Salió bien si:**

- `context-map.md` commiteado y describe **su** repo, no el template genérico.
- El cambio de código tocó **menos archivos extra** que en sesión 1 (ideal) o al menos con scope explícito.
- Pasaron la prueba de control en voz alta contigo o con un compañero.

**Si van más lento:** mapa + un stack context + prueba de control — **sin** repetir el cambio de código (opcional si sobra tiempo).

**Si van más rápido:** segundo `project-context.md` para otro stack; repetir cambio chico con mapa; sección “Do NOT read” en el mapa.

---

### Cierre (80–90 min) — qué esperamos

**En voz alta:**

> Hoy el entregable no es “Cursor configurado” — es **un mapa que otro dev puede usar** sin preguntarte dónde están los tests.

**Pregunta al grupo:**

> “¿Qué carpeta **borraron** del mapa porque no existe en su repo?”

**Commit sugerido:** `chore(cursor): add project map and core rules`

**Se van de acá cuando:**

- [ ] `project.config.json` refleja stacks reales.
- [ ] El mapa no menciona carpetas inventadas.
- [ ] Al menos un `project-context.md` revisado por un humano del stack.
- [ ] Pasaron la prueba de control (explorar + citar mapa).

---

# SESIÓN 3 — Una historia que no vive en el chat

**Conceptos:** C05, C15–C18 (intake) · [anexo](03-session.md) · [glosario](concepts-map.md)

**Meta de hoy:** carpeta de la feature con story, manifest **y** `analysis.md`. **Sin implementar** código en clase.

---

### Apertura (0–10 min)

> ¿La prueba del mapa funcionó? Si no, 5 minutos a arreglar `context-map.md`.

---

### Conceptos de hoy (10–30 min) — cuéntalos

Cada bloque sigue la historia. Léelo o cuéntalo. Glosario: [concepts-map.md](concepts-map.md).

---

#### C05 — Lo que acordaron se evaporó

Ayer escribieron en el chat: “esto no incluye traducciones”. Cierran la ventana. Abren otra. El modelo no estuvo en esa reunión.

El chat no guarda acuerdos. Si la frase no está en un archivo, para el siguiente chat nunca existió. Por eso hoy el contrato se escribe (C15, C16).

---

#### C15 — La carpeta que reemplaza el chat

El jueves un compañero retoma el ticket. No va a leer un chat de 80 mensajes. Va a abrir una carpeta:

```
cursor/analysis/features/filter-by-date/
  user-story.md
  feature-manifest.md
  analysis.md        ← hoy, antes de irse
```

Eso es la memoria de verdad: el tercer cajón (C13). Son archivos. Siguen sirviendo si mañana cambian de herramienta.

---

#### C16 — El contrato, antes del código

Antes de una línea de código quedan dos papeles. La historia: qué quiere quien usa el producto. El manifest: qué sí entra en este pedazo y qué se queda afuera.

“Mejorar la UX” no limita nada. “No rediseñar la tabla, no refactorizar auth, no tocar i18n” sí.

Ese papel es el escudo de mañana, cuando el agente quiera hacer de más. Hoy solo firman el contrato. `Implement now? no`.

---

#### C17 — Mirar el terreno antes de cavar

El análisis es el plano: qué archivos se tocan, qué puede salir mal, con quién hay que confirmar.

“Toca UserService. El riesgo es la zona horaria. Hay que confirmar el query param con backend.”

Ahí se separa el **qué** del **cómo**. El diff de mañana trae menos sorpresas. Hoy ese plano es `analysis.md`, antes del cierre.

---

#### C18 — Una puerta a la vez

El camino tiene puertas. No se salta ninguna.

```
INTAKE → ANALYSIS → IMPLEMENT → VALIDATE → REVIEW → CLOSE
  ↑ hoy cruzamos estas dos ↑
```

Escribir código de producto hoy es saltarse la puerta. Primero el contrato.

El nombre de la carpeta va en kebab-case (`filter-by-date`). El ticket de Jira es otra cosa: las ideas de backlog (`FW-*`) llegan en la sesión 6.

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
8. Completa `analysis.md` (archivos, riesgos, verify) — **en esta sesión**.
9. Workbook sesión 3 completo.

**Tú haces:**

- Si abren Agent y empieza a codear → **paras**: “Sesión 4. Guarda el manifest.”
- Lees 2 manifests en voz alta: ¿se entiende qué **no** van a hacer?

**Salió bien si:**

- Existe `cursor/analysis/features/<slug>/` con story + manifest + **analysis.md**.
- Out of scope tiene al menos 2 ítems reales (ej. “no i18n”, “no refactor table”).
- Nadie tiene un PR de código de producto hoy.

**Si van más lento:** story + manifest + `analysis.md` mínimo (3 archivos tocados, 1 riesgo, 1 comando verify) — **todo antes de irse**.

**Si van más rápido:** criterios de aceptación más finos en la story; revisar manifest de un compañero — **sin** implementar.

---

### Cierre (80–90 min) — qué esperamos

**En voz alta:**

> El chat de hoy se puede cerrar y tirar. Lo que importa es la **carpeta en git** — eso es la memoria.

**Pregunta al grupo:**

> “Lean en voz alta un ítem de **Out of scope** de su manifest.”

**Commit sugerido:** `chore(cursor): add feature templates and first story package`

**Se van de acá cuando:**

- [ ] Carpeta `<slug>/` con story + manifest + **analysis.md** en inglés.
- [ ] Manifest con scope acotado (no épico).
- [ ] **Cero** código de producto commiteado hoy.
- [ ] Workbook sesión 3 completo.

---

# SESIÓN 4 — Implementar y validar

**Conceptos:** C03, C11–C12, C18–C20 · [anexo](04-session.md) · [glosario](concepts-map.md)

**Meta de hoy:** slice implementado (happy path mínimo), verify corrido, checklist y notes en repo. Review en **sesión 5**.

---

### Apertura (0–10 min)

> ¿El ticket cabe en ~90 minutos de código? Si el análisis creció a un épico, recorten **ahora** el Out of scope.

---

### Conceptos de hoy (10–35 min) — cuéntalos

Cada bloque sigue la historia. Léelo o cuéntalo. Glosario: [concepts-map.md](concepts-map.md).

---

#### C03 — “El test pasó” y la terminal en rojo

El agente escribe: “añadí el test, todo pasa”. Corres `npm test`. Rojo.

Hoy hay más cambios que en cualquier otra sesión. Una frase segura en el chat no es evidencia. La evidencia la produce el comando que corres tú (C12).

---

#### C11 — El contrato es la ley

Ayer el manifest permitió 3 archivos. Hoy el diff trae 18. El chat dice: “también mejoré el resto”.

Lees archivo por archivo. Reviertes los 15 que no estaban en el contrato. El agente es proactivo (C08): si no lo frenas, sigue. Tú mandas.

---

#### C18 — Hoy se cruzan dos puertas

Ayer firmaron el contrato. Hoy toca implementar y validar.

Código sin un comando corrido, o sin un checklist que otra persona pueda seguir, es saltarse la segunda puerta. Esa puerta es la respuesta al “todo pasa” del chat (C03).

La revisión queda para la sesión 5. Hoy no se mergea.

---

#### C19 — Solo lo que firmaron

El pedazo es “filtro por fecha”. El agente ve la tabla y quiere reescribirla de paso.

El diff se queda en lo que dicen el manifest y el análisis. Un cambio chico se puede revisar. El regalo escondido se vuelve deuda.

---

#### C20 — Que otra persona lo repita sin ti

El checklist no dice “correr los tests”. Dice esto:

1. `pnpm test DateFilter.test.tsx`
2. Entras con el usuario X, filtras por fecha, ves las filas.

Alguien que no estuvo en tu chat puede hacer exactamente eso. Por eso el chat de hoy es nuevo: no reciclas el hilo donde firmaron el contrato.

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
7. Completa `implementation-notes.md` y `test-checklist.md` — **en esta sesión**.
8. Workbook sesión 4 completo.

**Tú haces:**

- PR/diff de 40 archivos para un fix chico → **mala señal**: “Recorten. Manifest manda.”
- Si no tienen tests → checklist con pasos manuales **honestos**, no “LGTM”.

**Salió bien si:**

- Hay código en branch acotado al manifest (ideal: ≤10 archivos; depende del slice).
- Corrieron al menos **un** verify en clase, o el checklist dice exactamente qué correr.
- Pueden decir qué **no** implementaron porque estaba en Out of scope.

**Si van más lento:** happy path mínimo + un verify + checklist con **3 pasos concretos** — todo commiteado hoy.

**Si van más rápido:** terminan el slice completo; no empiezan review (sesión 5).

---

### Cierre (80–90 min) — qué esperamos

**En voz alta:**

> No tienen que terminar el ticket entero hoy. Tienen que salir con **evidencia** de que funciona o con un checklist que otra persona pueda seguir.

**Pregunta al grupo:**

> “¿Qué comando corrieron — o qué paso manual dejaron escrito?”

**Commit:** código + notes + checklist en branch; manifest puede quedar en `implementation` o `validation`. **No mergear** — review en sesión 5.

**Se van de acá cuando:**

- [ ] Diff alineado al manifest (extras revertidos).
- [ ] Al menos un verify corrido **o** pasos manuales claros en checklist.
- [ ] `implementation-notes.md` y `test-checklist.md` commiteados.
- [ ] Workbook sesión 4 completo.
- [ ] Saben que review es sesión 5 — no “ya mergeamos porque Cursor dijo ok”.

---

# SESIÓN 5 — Review, cerrar y gastar menos tokens

**Conceptos:** C02, C21–C23 · [anexo](05-session.md) · [glosario](concepts-map.md)

**Meta de hoy:** review hecho, cierre lite, regla de scope, hábito de chat nueva por fase.

---

### Apertura (0–10 min)

> ¿El checklist dice **qué comando** correr? Si dice solo “run tests”, corríjanlo ya.

---

### Conceptos de hoy (10–45 min) — cuéntalos

Cada bloque sigue la historia. Léelo o cuéntalo. Glosario: [concepts-map.md](concepts-map.md).

---

#### C02 — El mismo chat desde el martes

Siguen en el hilo donde escribieron la historia, el análisis y el código. Van 200 mensajes. El modelo mezcla una decisión vieja con la de hoy, o se le cae lo del medio.

El escritorio se llenó. Por eso hoy cada fase abre su propio chat (C21).

---

#### C21 — Fase nueva, chat nuevo

La memoria ya no vive en el hilo. Vive en la carpeta de la historia (C15). El chat de ayer, cerrado, ya no existe (C05).

Para revisar, abres un chat limpio y le pasas solo esa carpeta y las guías. Para cerrar, otro chat, solo los archivos del cierre. Sin arrastrar la conversación del martes.

Menos ruido, menos costo, respuestas más claras. Hoy, mínimo dos chats: review y close.

---

#### C22 — Revisar contra el contrato

“¿Te gusta el cambio?” no es una revisión.

Una revisión dice: “El contrato dejó las traducciones afuera y el diff toca `es.json`. O lo sacas, o actualizas el contrato.”

Ahí aparece lo que se coló y el ojo cansado ya no ve. Revisar es leer el diff contra la historia, el manifest y el checklist. Mergear es otra puerta, después.

---

#### C23 — Que el siguiente no necesite tu chat

Cierras. El manifest dice que terminó. El índice también. Tu compañero abre git y ve qué se entregó. No te escribe “¿en qué quedó?”.

Hoy dejan la regla de alcance (`context-scope.mdc`) y un cierre corto. Si sobra tiempo, un bug de 10 minutos en **otro** chat, con `prompt-bug-fix.md`.

---

### Práctica (45–80 min) — qué esperamos

**Les dices:**

> Hoy cerramos el ciclo. Tres chats distintos si hace falta — **no** uno solo de 200 mensajes. La memoria está en los archivos.

**El alumno hace:**

1. **Chat nuevo** → prompt de **review** + carpeta de la feature + guidelines.
2. Lee findings; decide qué es blocker vs nice-to-have (humano decide, no el modelo).
3. **Otro chat nuevo** → **close lite** → manifest + `INDEX.md` actualizados.
4. Copia `context-scope.mdc` (capa A+) y lee `context-scope-sessions.md`.
5. Bug de 10 min con `prompt-bug-fix.md` en **otro** chat — flujo corto (obligatorio si hay tiempo; si van lento, solo close lite).
6. *(10 min)* Peer review: revisa el diff de un compañero con `review-guidelines.md`.
7. Workbook sesión 5 completo.

**Tú haces:**

- Si mezclan review + close en el mismo chat → explica C21: “Nuevo chat, solo archivos del close.”
- Si el review solo dice “looks good” → “¿Dónde está el scope creep? Lean el manifest.”

**Salió bien si:**

- Hay findings de review **o** confirmación explícita de que el diff cumple la story.
- Manifest e INDEX reflejan estado cerrado (o “ready for PR”).
- `context-scope.mdc` está en el repo.
- Pueden explicar en una frase por qué abrieron chat nueva.

**Si van más lento:** review + close lite — **en la misma sesión**; peer review en pareja rápida (5 min).

**Si van más rápido:** bug-fix + peer review de un segundo compañero.

---

### Cierre (80–90 min) — qué esperamos

**En voz alta:**

> A partir de hoy el hábito es: **fase nueva, chat nuevo**. Y antes de mergear, alguien corrió lo del checklist — no el modelo.

**Pregunta al grupo:**

> “¿Por qué no seguirían el mismo chat del intake para el close?”

**Commit sugerido:** `chore(cursor): add review, close, and context-scope rules` (+ PR de la feature si aplica)

**Se van de acá cuando:**

- [ ] Review documentado (findings o “cumple story + manifest”).
- [ ] Close lite hecho (manifest + INDEX coherentes).
- [ ] `context-scope.mdc` commiteado.
- [ ] Explican chat nuevo por fase con sus palabras.
- [ ] Workbook sesión 5 completo (incl. bug-fix o “N/A — slice cerrado”).

---

# SESIÓN 6 — Producto y cierre del curso

**Conceptos:** C24 (+ C27 kit opt-in) · [anexo](06-session.md) · [glosario](concepts-map.md)

**Meta de hoy:** visión corta, tres ítems de backlog, checklist operativo, workbook cerrado. Fin del bloque.

---

### Apertura (0–10 min)

> Una frase cada uno: ¿su historia quedó merged, en PR, o bloqueada?

---

### Conceptos de hoy (10–30 min) — cuéntalos

Último capítulo. Léelo o cuéntalo. Glosario: [concepts-map.md](concepts-map.md).

---

#### C24 — El norte, aparte del ticket de hoy

Cada ticket empuja un pedacito. Sin un norte escrito, el agente propone en cada uno un rediseño de escritorio. El producto era mobile para Latam, y sin modo offline hasta el tercer trimestre.

Ese norte cabe en una página de visión y en ideas de backlog (`FW-*`), separadas del ticket del día.

Hoy: `cursor/company/`, `product-vision.md`, y tres ideas reales.

Dos números distintos. `FW-ACME-012` es una idea para más adelante. `ACME-1041` es el ticket de Jira de esta semana. Cada uno vive en su lugar.

---

#### C27 — Automatizar después *(opcional, solo mirarlo)*

Hay scripts que sincronizan issues y pull requests. Sirven cuando el ciclo a mano (C18) ya sale sin pensarlo.

Automatizar un ciclo que todavía se está aprendiendo multiplica los errores. Hoy solo los miran. No son parte del cierre.

El kit se copia del template. Una carpeta de otro producto (`SML-*`, `runtime/`) se queda en ese producto.

---

### Práctica (30–80 min) — qué esperamos

**Les dices:**

> Última práctica: pensar **producto**, no solo ticket. Y limpiar basura copiada de otros repos si la hay.

**El alumno hace:**

1. Copia scaffold `cursor/company/` + regla `company-product-context.mdc` si aplica.
2. Modo explorar → borrador de `product-vision.md` (inglés, **una página max**) → **humano recorta** lo inventado.
3. Escribe **3 ítems `FW-<PREFIJO>-*`** reales: deuda técnica, feature futura, riesgo — cada uno en una frase.
4. Completa el [workbook](participant-workbook.md): capas (0, A, B), checklist operativo, prompt de intake listo para copiar.
5. *(Opcional)* Mira scripts Layer C — “existen, no son obligatorios.”
6. Elige **un** `FW-*` para promover a intake en el próximo sprint (solo anotar en workbook — no implementar hoy).

**Tú haces:**

- Recorres repos: ¿copiaron `SML-*`, `runtime/`, registry de Loyalty/Simulith? → marcar para borrar.
- ¿Los `FW-*` son reales o relleno? → que el lead valide uno.

**Salió bien si:**

- `product-vision.md` o equivalente existe y **no inventa** features que el equipo no planea.
- 3 `FW-*` distinguibles de sus tickets Jira/GitHub.
- Workbook completo.
- Nadie tiene Capa D de otro producto.

**Si van más lento:** visión borrador + **3** `FW-*` en una frase cada uno — mínimo antes de irse.

**Si van más rápido:** bosquejan intake de un `FW-*` en explorar (sin implementar).

---

### Cierre del curso (80–90 min) — qué esperamos

**En voz alta (checklist operativo — lean juntos y queda en el workbook):**

1. No abras el agente sin contexto del mapa o de la feature activa.
2. Historia nueva → intake primero; no saltar al código.
3. Verifica con **tu** comando, no con fe en el modelo.
4. Si pide leer el repo entero → recorta scope.
5. Kit desde **project-foundation-template**, nunca clonar otro producto vivo.

**Pregunta al grupo (cierre emocional + práctico):**

> “Una cosa que hacían mal al inicio del curso y hoy ya no harían.”  
> “¿Qué prompt pegan cuando les cae el primer ticket nuevo?”

**Commit sugerido:** `chore(cursor): add company context and product backlog scaffold`

**El curso cierra cuando (programa completo):**

- [ ] Capa 0 en el repo (mapa + reglas).
- [ ] Una historia recorrida (story → código → review/close).
- [ ] Visión de una página + 3 `FW-*` (o equivalente acordado).
- [ ] Pueden pegar intake y bug-fix sin leer el playbook entero.
- [ ] Workbook completo (sesiones 1–6).
- [ ] Nadie trajo Capa D de otro producto.

**Despedida:**

> Gracias. Dudas: workbook, cheatsheets, [concepts-map](concepts-map.md). El sistema vive en **git**, no en este chat.

---

## Resumen — conceptos · práctica · cierre por sesión

| Sesión | Conceptos (ver bloques arriba) | Práctica | Cierre |
| --- | --- | --- | --- |
| 1 | C01–C13 fundamentos + patrones | Diff + verify + ticket acordado | Workbook S1; sin kit |
| 2 | C07, C13–C14 capas + mapa | Mapa + prueba de control | Commit Layer 0; workbook S2 |
| 3 | C05, C15–C18 memoria + intake | Story + manifest + analysis; **sin código** | Out of scope en voz alta |
| 4 | C03, C11, C18–C20 implement + validate | Código + checklist + notes | Evidencia; no merge |
| 5 | C02, C21–C23 review + handoff | Review + close + bug-fix/peer | Chat por fase; workbook S5 |
| 6 | C24 producto; C27 opt-in | Visión + 3× `FW-*` + workbook cerrado | Checklist operativo |

Glosario completo: [concepts-map.md](concepts-map.md)

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

## Calendario simple (bloque intensivo)

**6 sesiones consecutivas** (mismo bloque de capacitación). **Todo el trabajo ocurre en clase** — no hay tareas entre sesiones.

| Sesión | Tema | Entregable mínimo en repo |
| --- | --- | --- |
| 1 | Cursor sin kit | Diff + verify + ticket acordado |
| 2 | Mapa | `context-map.md` + reglas core |
| 3 | Intake | story + manifest + `analysis.md` |
| 4 | Implement | código + checklist + notes |
| 5 | Review / close | review + close lite + `context-scope.mdc` |
| 6 | Producto | visión + 3× `FW-*` + workbook cerrado |

Si el grupo va lento: **recorta scope en la misma sesión** con el lead — no pospongas al día siguiente.

---

## Primera vez facilitando

- El 50% es práctica; no hables 90 minutos seguidos.
- Demo corta, una por clase, si acaso.
- Celebra **pocos archivos tocados**, no muchos.
- Si te pierdes: mira la **meta de hoy** al inicio de cada sesión arriba.
- Más detalle técnico: [00-facilitator-guide.md](00-facilitator-guide.md). Entregables por sesión: anexos [01](01-session.md)–[06](06-session.md).
