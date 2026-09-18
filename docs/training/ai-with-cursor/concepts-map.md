# Mapa de conceptos IA — curso repo existente

Conceptos **genéricos de desarrollo asistido por IA**: aplican en Cursor, GitHub Copilot, Claude Code, Windsurf, etc. El curso usa **Cursor + kit** como laboratorio de referencia; la columna *Implementación* indica cómo se materializa ahí.

Facilitación en **español**. Artefactos del kit en **inglés**.

**Para dictar:** [facilitator-runbook.md](facilitator-runbook.md)  
**Detalle por sesión:** [01](01-session.md) … [06](06-session.md)  
**Referencia técnica (inglés):** [aspects-catalog.md](aspects-catalog.md)

---

## Tabla maestra — concepto · sesión · ¿cubierto?

| # | Concepto (IA genérico) | Sesión | ¿Cubierto? |
| --- | --- | --- | --- |
| C01 | **Alcance y contexto explícito** — qué sí/no leer; paths concretos | 1 → 5 | **Sí** |
| C02 | **Modos de interacción** — explorar vs editar vs planificar | 1 | **Sí** |
| C03 | **Verificación y evidencia humana** — comandos reales, no “LGTM del modelo” | 1 → 4 | **Sí** |
| C04 | **Arquitectura de contexto en tres capas** — código · instrucciones · memoria | 1 (preview) → 2–6 | **Sí** |
| C05 | **Mapa e índice del repositorio** — dónde vive cada cosa | 2 | **Sí** |
| C06 | **Identidad y metadatos del proyecto** — nombre, stacks reales | 2 | **Sí** |
| C07 | **Instrucciones persistentes** — reglas que el IDE carga sin repetir en cada chat | 2 | **Sí** |
| C08 | **Contexto por dominio/stack** — cómo se trabaja en frontend, API, infra, etc. | 2 | **Sí** |
| C09 | **Convenciones de artefactos durables** — idioma, formato, naming | 2 | **Sí** |
| C10 | **Memoria fuera del chat** — estado por historia en archivos, no en el hilo | 3 | **Sí** |
| C11 | **Intake y contrato de scope** — story + manifest antes de codear | 3 | **Sí** |
| C12 | **Análisis antes de implementar** — impacto, archivos, riesgos | 3 (casa) → 4 | **Sí** |
| C13 | **Ciclo de vida con gates** — intake → … → close; no saltar fases | 3–5 | **Sí** |
| C14 | **Implementación acotada** — solo lo acordado en el contrato | 4 | **Sí** |
| C15 | **Validación reproducible** — checklist + pruebas que otro humano puede repetir | 4 | **Sí** |
| C16 | **Trazabilidad plan vs realidad** — qué cambió respecto al análisis | 4 | **Sí** |
| C17 | **Gestión de ventana de contexto** — chat/hilo nuevo por fase; no arrastrar ruido | 5 | **Sí** |
| C18 | **Enrutamiento de lecturas** — qué contexto cargar según el tipo de tarea | 5 | **Sí** |
| C19 | **Review estructurado** — contra story, scope y criterios, no “¿te gusta?” | 5 | **Sí** |
| C20 | **Cierre y handoff documentado** — estado final en repo, no solo en chat | 5 | **Sí** |
| C21 | **Flujo corto para bugs** — scope mínimo sin intake completo | 5 (casa) | **Sí** |
| C22 | **Contexto de producto y visión** — hacia dónde va el producto | 6 | **Sí** |
| C23 | **Backlog de producto vs tickets** — ideas/`FW-*` separados de Jira/GitHub | 6 | **Sí** |
| C24 | **Orquestación multi-fase** — un flujo que encadena fases | — | **Mención** (post-curso) |
| C25 | **Context trace** — auditar qué leyó el agente | — | **Opcional** (post S4–5) |
| C26 | **Automatización del ciclo** — scripts, sync con Issues/PR | 6 | **Opt-in** (no profundidad) |
| C27 | **Generar proyecto greenfield** | — | **No** |
| C28 | **Studies / intake Mode B** | — | **No** |
| C29 | **Reglas de negocio de otro producto** (copiar Simulith/Loyalty) | — | **No** (solo demo) |
| C30 | **Contratos full-stack cruzados** (Swagger, MSW, Cypress) | — | **No** |
| C31 | **CI/CD y despliegue con agente** | — | **No** |
| C32 | **Prompt injection / seguridad avanzada** | — | **No** |
| C33 | **Evaluación sistemática de modelos** (benchmarks, A/B) | — | **No** |
| C34 | **RAG / embeddings sobre el repo** | — | **No** |
| C35 | **Multi-agente orquestado** | — | **No** |

**Leyenda — ¿Cubierto?**

| Valor | Significado |
| --- | --- |
| **Sí** | Se explica y se practica (clase o tarea de casa) |
| **Mención** | Se nombra; no es objetivo de aprendizaje |
| **Opcional** | Material disponible; el equipo decide |
| **Opt-in** | Capa avanzada; solo si ya domina el ciclo manual |
| **No** | Fuera de alcance de las 6 sesiones |

---

## Vista por sesión

| Sesión | Conceptos | ¿Cubierto en clase? |
| --- | --- | --- |
| [1](01-session.md) | C01, C02, C03, C04 | Sí |
| [2](02-session.md) | C05, C06, C07, C08, C09 | Sí |
| [3](03-session.md) | C10, C11, C12, C13 (intake) | Sí |
| [4](04-session.md) | C13, C14, C15, C16 | Sí |
| [5](05-session.md) | C17, C18, C19, C20, C21 | Sí |
| [6](06-session.md) | C22, C23, C26 (opt-in) | Sí (+ opt-in) |

---

## Equivalencias por herramienta (misma idea, distinta UI)

| Concepto | Cursor (referencia del curso) | GitHub Copilot | Claude (Code / Projects) | Otros |
| --- | --- | --- | --- | --- |
| C01 Alcance | `@archivo`, In/Out of scope en prompt | `@workspace`, `#file`, instrucciones en chat | Attach files, project knowledge, “read only X” | Pegar paths + reglas en system prompt |
| C02 Modos | Ask / Agent / Plan | Chat / Copilot Edits / agent mode | Chat vs Claude Code (edit) | Separar “explica” de “escribe” |
| C03 Verificación | Correr terminal desde Agent | Terminal local / CI | Terminal en Claude Code | Siempre humano corre el comando |
| C07 Instrucciones persistentes | `.cursor/rules/*.mdc` | `.github/copilot-instructions.md` | `CLAUDE.md`, project instructions | `AGENTS.md`, rules en repo |
| C10 Memoria | `cursor/analysis/features/<slug>/` | Misma carpeta en repo (tool-agnostic) | Idem + project docs | Cualquier markdown en git |
| C17 Ventana de contexto | Chat nuevo por fase | Nuevo chat / thread | Nueva conversación / session | No reutilizar hilo de 500 msgs |

**Principio:** el **concepto** es portable; la **carpeta y el prompt** viven en git y sirven para cualquier herramienta que lea el repo.

---

## Detalle y enlaces por concepto

| # | Detalle (sesión) | Implementación en este curso |
| --- | --- | --- |
| C01 | [S1](01-session.md#c01-alcance-y-contexto-explícito) | Prompt con paths + Do NOT read |
| C02 | [S1](01-session.md#c02-modos-de-interacción) | Ask vs Agent vs Plan |
| C03 | [S1](01-session.md#c03-verificación-y-evidencia-humana) | `Verify with:` + comando local |
| C04 | [S1](01-session.md#c04-arquitectura-de-contexto-en-tres-capas) | Preview; capas 2–3 en S2+ |
| C05 | [S2](02-session.md#c05-mapa-e-índice-del-repositorio) | `cursor/context-map.md` |
| C06 | [S2](02-session.md#c06-identidad-y-metadatos-del-proyecto) | `project.config.json` |
| C07 | [S2](02-session.md#c07-instrucciones-persistentes) | `.cursor/rules/*.mdc` |
| C08 | [S2](02-session.md#c08-contexto-por-dominiostack) | `cursor/projects/<stack>/project-context.md` |
| C09 | [S2](02-session.md#c09-convenciones-de-artefactos-durables) | Inglés en `cursor/` |
| C10 | [S3](03-session.md#c10-memoria-fuera-del-chat) | `analysis/features/<slug>/` |
| C11 | [S3](03-session.md#c11-intake-y-contrato-de-scope) | `user-story.md`, `feature-manifest.md` |
| C12 | [S3](03-session.md#c12-análisis-antes-de-implementar) | `analysis.md` |
| C13 | [S3–S5](03-session.md#c13-ciclo-de-vida-con-gates) | Playbook + prompts por fase |
| C14 | [S4](04-session.md#c14-implementación-acotada) | Diff vs manifest |
| C15 | [S4](04-session.md#c15-validación-reproducible) | `test-checklist.md` |
| C16 | [S4](04-session.md#c16-trazabilidad-plan-vs-realidad) | `implementation-notes.md` |
| C17 | [S5](05-session.md#c17-gestión-de-ventana-de-contexto) | Chat nueva por fase |
| C18 | [S5](05-session.md#c18-enrutamiento-de-lecturas) | `context-scope.mdc` |
| C19 | [S5](05-session.md#c19-review-estructurado) | `prompt-feature-review.md` |
| C20 | [S5](05-session.md#c20-cierre-y-handoff-documentado) | Close lite + INDEX |
| C21 | [S5](05-session.md#c21-flujo-corto-para-bugs) | `prompt-bug-fix.md` |
| C22 | [S6](06-session.md#c22-contexto-de-producto-y-visión) | `cursor/company/` |
| C23 | [S6](06-session.md#c23-backlog-de-producto-vs-tickets) | `FW-*` vs ticket |
| C24 | — | [cheatsheet-lifecycle](cheatsheet-lifecycle.md) orchestrator |
| C25 | — | [aspects-catalog](aspects-catalog.md) M12 |
| C26 | [S6](06-session.md#c26-automatización-del-ciclo-opt-in) | [03-github-sync](../../examples/03-github-sync-and-scripts.md) |
| C27 | — | [01-create-project](../../examples/01-create-project.md) |
| C28–C35 | — | Fuera del curso |

---

## Relación con `aspects-catalog.md` (M#)

| Módulo | Conceptos |
| --- | --- |
| M1 | C01, C02, C03 |
| M2 | C05, C06 |
| M3 | C07, C09 |
| M4 | C08 |
| M5 | C10, C11 |
| M6 | C12, C13, C14, C15, C16, C21 |
| M7 | C17, C18 |
| M8 | C19, C20 |
| M9 | C22, C23 |
| M10 | C27 (no) |
| M11 | C26 (opt-in) |
| M12 | C25 (opcional) |
