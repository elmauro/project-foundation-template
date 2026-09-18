# Facilitator guide

**Guión para dictar:** [`facilitator-runbook.md`](facilitator-runbook.md) — español coloquial, listo para leer en voz alta (este doc es la referencia técnica complementaria).

Cómo correr las 6 sesiones. **Para dictar:** solo [`facilitator-runbook.md`](facilitator-runbook.md). Los archivos `01-session.md` … `06-session.md` son anexo (homework + checklist); no hace falta leerlos en clase.

**Mapa de conceptos** (tabla sesión ↔ concepto ↔ fuera del curso): [`concepts-map.md`](concepts-map.md). Cada [`0N-session.md`](01-session.md) desarrolla los conceptos de esa clase (definición, ejemplo, implementación).

**Índice pedagógico por aspecto** (inglés, template, prompts, DoD): [`aspects-catalog.md`](aspects-catalog.md). Úsalo para preparar demos y para responder “¿por qué hacemos context-map y no leemos todo el repo?”.

## Rol

No eres un instructor de “prompts mágicos”. Eres el que:

- Demuestra alcance y verificación.
- Impide que copien Simulith entero.
- Revisa que cada repo describa **lo que es**, no el preset `fullstack-aws-enterprise`.
- Para la práctica cuando el agente empieza a leer el monorepo completo.

## Idioma

| Superficie | Idioma |
| --- | --- |
| Explicación, preguntas, workbook, estas guías | Español |
| Archivos que el alumno **escribe en el repo** bajo `cursor/`, `.cursor/`, `docs/` de producto | Inglés |

El kit incluye `.cursor/rules/documentation-english.mdc`. Dilo en la sesión 2: el chat puede ser en español; los artefactos durables no.

Los prompts se pegan en inglés (son los del template). El alumno puede añadir debajo una línea en español con el ticket concreto.

## Antes del programa (T−7 días)

1. Confirmar que cada alumno tiene Cursor + acceso al repo existente.
2. Pedir el workbook: nombre del repo, stacks reales, comando de test, ticket candidato.
3. Tener a mano este template (para copiar archivos) y, si puedes, Simulith abierto **solo para demos**.
4. Preparar un USB/zip o rama de referencia **no es necesario**: se copia capa por capa; el orden está en [`adopt-on-existing-repo.md`](adopt-on-existing-repo.md).
5. Si el grupo no puede commitear en el repo de producto, que usen un fork. El curso muere si no hay un repo real.

## Durante cada sesión (90 min)

Patrón fijo:

| Min | Bloque |
| --- | --- |
| 0–10 | Recap + homework review (2–3 personas, no todas) |
| 10–40 | Concepto + demo (pantalla del facilitador) |
| 40–80 | **Práctica** — manos en teclado, entregable concreto |
| 80–90 | **Cierre** — “¿salimos con esto?”, commit, casa |

**Práctica vs cierre (en criollo):** la práctica es que **ellos** hagan algo verificable en su repo; el cierre es alinear “listo cuando”, commit y tarea de casa — no apagar sin decir qué commitear.

Detalle sesión por sesión (qué hace el alumno, qué haces tú, señales de éxito, preguntas al grupo): [`facilitator-runbook.md`](facilitator-runbook.md) — bloques **“Práctica — qué esperamos”** y **“Cierre — qué esperamos”**, más tabla resumen al final.

Si alguien termina antes: que mejore `project-context.md` o el `analysis.md` de su historia, no que “le pida otra feature al agente”.

## Demo opcional (Simulith)

Úsala 5–8 minutos, máximo una vez por sesión. Muestra archivos, no implementes CloudWatch.

| Sesión | Qué abrir (si el repo está disponible) |
| --- | --- |
| 1 | `.cursor/rules/project-context.mdc` vs `cursor/context-map.md` |
| 2 | `cursor/projects/runtime/project-context.md` (ejemplo de mapa de stack) |
| 3 | Una carpeta `cursor/analysis/features/<area>/<slug>/` |
| 4 | `cursor/docs/AI-Project-Playbook.md` — tabla de fases |
| 5 | `cursor/docs/context-scope-sessions.md` |
| 6 | `cursor/company/README.md` + un `STORY-LOG.md` de área |

Repite: **esto es el destino; ustedes copian el template, no este producto.**

## Criterios de éxito del programa

El programa “cierra” si al final de la sesión 6:

- [ ] El repo tiene Capa 0 (mapa + reglas core).
- [ ] Existe al menos una feature package con story, analysis, notes o checklist, y manifest.
- [ ] El alumno puede pegar el prompt de intake y el de bug-fix sin leer el playbook entero.
- [ ] Hay 3 ítems `FW-*` o un `cursor/company/README.md` con visión de una página.
- [ ] Nadie copió `runtime/`, IDs `SML-*`, ni el registry poblado de otro producto.

## Problemas frecuentes

| Síntoma | Qué hacer |
| --- | --- |
| El agente lista todo el repo | Parar. Pedir paths concretos. Recordar Capa 0. |
| Copian `frontend/` en un repo que solo es API | Borrar. El mapa describe el repo real. |
| Escriben `user-story.md` en español | Permitido en sesión 3 como borrador; homework: inglés. |
| No tienen tests | Validation = comando que sí exista (lint, script, prueba manual listada en el checklist). |
| Quieren el generador `npm run create` | Fuera de alcance. Este curso es adopción sobre existente. |
| Ticket enorme | Recortar a un slice de 1–2 días. El resto queda `Out of scope` en el manifest. |

## Material que no es este curso

- Generador de proyectos nuevos: `docs/examples/01-create-project.md`
- GitHub Issues / Project board: `docs/examples/03-github-sync-and-scripts.md` (mencionar en sesión 6, no enseñar)
- Loyalty monorepo: `docs/examples/04-loyalty-monorepo.md`
