# Guión del facilitador — AI with Cursor

Seis clases de 90 minutos. Léelo en voz alta o parafrasea; no hace falta ser literal.

Hablas **español** con el grupo. Lo que van a **commitear** en el repo (`cursor/`, `.cursor/`) va en **inglés**. Los prompts se pegan en inglés; debajo pueden poner el ticket en español.

**Apoyo rápido (no hace falta leerlos en clase):**

- Cuaderno del alumno: [participant-workbook.md](participant-workbook.md)
- Qué copiar del template: [adopt-on-existing-repo.md](adopt-on-existing-repo.md)
- Cheatsheet sesión 1: [cheatsheet-cursor.md](cheatsheet-cursor.md)
- Cheatsheet sesiones 3–5: [cheatsheet-lifecycle.md](cheatsheet-lifecycle.md)
- Si te preguntan el “por qué” de algo: [aspects-catalog.md](aspects-catalog.md)

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

**Minutos 40–80** — Ellos trabajan en **su** repo. Tú caminas (o entras a breakout rooms) y **paras** cuando el agente se vaya al monorepo entero.

**Minutos 80–90** — Tarea de casa, qué commitear, preguntas.

Si alguien termina antes: que mejore su mapa o su análisis. Que no pida otra feature al agente.

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

### Práctica (35–80 min)

> Elijan un cambio de **15 a 30 minutos**: un typo, un test que falta, un bug acotado. **No** el ticket grande del curso.

> Abran Agent. Peguen el prompt del [cheatsheet-cursor](cheatsheet-cursor.md) — sin línea de `project-context`, porque aún no existe.

> Adjunden 1 a 5 archivos con `@`. Apliquen, lean el diff, corran la prueba.

**Tú:** si ves que el agente lista medio repo, **para**. “Adjunta tres paths y repite el prompt.”

---

### Cierre (80–90 min)

> ¿Dos voluntarios: qué archivo **no** debía haber tocado el agente?

> Tarea de casa: terminen o reviertan el cambio de hoy. Anoten en el workbook qué `@` usaron y qué leyó de más. Confirmen con su lead el **ticket** para las sesiones 3 a 5 — tiene que ser un pedazo de 1–2 días, no un épico.

> **No** instalen el kit completo todavía. Sesión 2.

**Listo cuando:** hubo un diff real y entienden Ask vs Agent.

---

# SESIÓN 2 — Mapa e identidad

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

### Práctica (45–80 min)

> Repitan un cambio **parecido** al de la sesión 1. Ahora con `@cursor/context-map.md` y `@cursor/projects/.../project-context.md`.

> Prueba de control: en Ask, “Where do I add a test for X?” — la respuesta debe citar **su** mapa.

---

### Cierre (80–90 min)

> Commit sugerido: `chore(cursor): add project map and core rules`

> Casa: completen el mapa para todos sus stacks. Un `project-context.md` por stack, aunque sea corto.

**Listo cuando:** el mapa no menciona carpetas que no existen.

---

# SESIÓN 3 — Una historia que no vive en el chat

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

### Copia + práctica (30–80 min)

> Copien templates y prompts — capa A, bloque sesión 3 en [adopt guide](adopt-on-existing-repo.md).

> Cada uno pega el **intake Mode A** del [cheatsheet-lifecycle](cheatsheet-lifecycle.md) con **su ticket real**, recortado.

> Reglas: markdowns en **inglés**. Out of scope explícito en el manifest. `Implement now? no`.

**Tú:** si empiezan a codear, paras. “Sesión 4.”

---

### Cierre (80–90 min)

> Commit: `chore(cursor): add feature templates and first story package`. Una fila en `INDEX.md`.

> Casa: completen `analysis.md`. Criterios de aceptación claros. El lead confirma que ese pedazo entra en la sesión 4.

**Listo cuando:** existe la carpeta `<slug>/` con story y manifest en inglés.

---

# SESIÓN 4 — Implementar y validar

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

### Práctica (35–80 min)

1. Terminen `analysis.md` si falta.
2. Prompt de **implement** del cheatsheet — chat nueva.
3. Corran el comando de verificación.
4. Prompt de **validate** o actualicen checklist a mano.

**Tú:** un PR de 40 archivos para un fix chico es **mala señal**, no productividad.

---

### Cierre (80–90 min)

> El código puede quedar a medias. Manifest en `implementation` o `validation`.

> Casa: terminen el slice. Checklist que un compañero pueda seguir sin preguntarles.

**Listo cuando:** corrieron al menos un comando real o dejaron pasos manuales claros.

---

# SESIÓN 5 — Review, cerrar y gastar menos tokens

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

### Práctica (45–80 min)

1. Chat nueva → prompt de **review**.
2. Chat nueva → **close lite**.
3. Opcional: un bug de 10 min con `prompt-bug-fix.md`, otro chat.
4. Diez minutos: revisen el diff de un compañero con `review-guidelines.md`.

---

### Cierre (80–90 min)

> Commit: `chore(cursor): add review, close, and context-scope rules`

> Casa: PR listo si su equipo lo pide. Un bug chico con bug-fix prompt. Lean `context-scope-sessions.md` y guarden el bloque que les sirva.

**Listo cuando:** pueden explicar por qué abren chat nueva para el close.

---

# SESIÓN 6 — Producto y el lunes

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

### Práctica (30–80 min)

1. Copien scaffold de `cursor/company/` + regla `company-product-context.mdc`.
2. Ask → borrador de `product-vision.md` (inglés, una página) → humano recorta.
3. Tres filas `FW-<SU-PREFIJO>-*` reales: deuda, feature, riesgo.

*(Opcional 10 min: mostrar scripts `new-feature.mjs`. “Existe. No es obligatorio.”)*

4. Completen el workbook: qué capas tienen, qué prompt pegarán el lunes.

**Tú:** recorre repos y marca cosas copiadas de Simulith/Loyalty para borrar.

---

### Cierre del curso (80–90 min)

> Lean conmigo el checklist del lunes:

1. No abras Agent sin `@` del mapa o de la feature.
2. Historia nueva → intake.
3. Verifica con el comando del repo, no con fe en el modelo.
4. Si pide el repo entero → recorta.
5. Kit desde **project-foundation-template**, no desde un producto vivo.

> Commit: `chore(cursor): add company context and product backlog scaffold`

> Gracias. Cualquier duda: workbook y cheatsheets.

**El curso cierra cuando:** tienen mapa, una historia recorrida, visión o tres `FW-*`, y nadie trajo Capa D de otro producto.

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
