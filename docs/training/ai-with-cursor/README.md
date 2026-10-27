# AI with Cursor — existing repo

Para enviarle a alguien que quiere saber de qué va, sin el guión de clase: [course-overview.md](course-overview.md).

**Paso a paso en clase:** [labs/](labs/) (pasos numerados y cómo verificar cada sesión).

Capacitación en **definiciones de IA que hay que conocer** para usar modelos bien en código: qué es un LLM, ventana de contexto, alucinación, memoria, human-in-the-loop, etc. Esas ideas son **agnósticas de herramienta**.

**Cursor** (y el kit en git) es el **laboratorio** donde practicamos; Copilot, Claude Code u otras herramientas sirven igual si el alumno ya las usa.

El alumno **trae un repositorio que ya existe**; no se genera un proyecto nuevo.

Facilitación en **español**. Artefactos del kit (`cursor/`, `.cursor/rules/`, prompts, templates) en **inglés**, igual que en `project-foundation-template`.

## Objetivo

Al terminar, cada persona puede:

1. Trabajar con IA con alcance: qué contexto dar, qué no leer, cómo verificar (en Cursor u otra herramienta).
2. Dejar contexto durable para el agente (mapa, reglas, visión de producto).
3. Ejecutar una historia de punta a punta: intake → analysis → implement → validate → review → close.
4. Distinguir kit **genérico** (este template) de prácticas **solo de producto** (p. ej. Simulith: `SML-*`, `runtime/`, paridad AWS).

No promete un múltiplo de productividad. Promete menos retrabajo, menos contexto perdido entre chats y PRs más chicos.

## Formato

| Dato | Valor |
| --- | --- |
| Sesiones | 6 consecutivas (bloque intensivo) |
| Duración | 90 minutos cada una |
| Práctica | Bring your own repo (existente) — **todo en clase**, sin tareas entre sesiones |
| Grupo | 4–12 personas (más de 12: un facilitador extra en la práctica) |

## Conceptos y sesiones

**Glosario IA** — definición · ejemplo · por qué importa: [`concepts-map.md`](concepts-map.md)

**Ejemplos copiables** (prompts, ❌/✅, diagramas): [`concepts-map.md` § Anexo](concepts-map.md#anexo--ejemplos-listos-para-copiar-o-dictar)

**Para dictar en clase:** [`facilitator-runbook.md`](facilitator-runbook.md) → bloques “Conceptos de hoy” por sesión.

Estilo pedagógico como [elmauro/databricks/spanish](https://github.com/elmauro/databricks/tree/master/spanish) — ejemplo práctico, mal/bien, visual cuando ayuda — adaptado a dev con repo existente (sin Databricks/RAG en el curso).

Anexos [`01-session.md`](01-session.md) … [`06-session.md`](06-session.md) · Kit/prompts en inglés: [`aspects-catalog.md`](aspects-catalog.md)

## Agenda

**Para dictar:** usa solo [`facilitator-runbook.md`](facilitator-runbook.md) (guión en español coloquial). Incluye **qué esperamos en la práctica y en el cierre** de cada sesión, en lenguaje humano. Los anexos de sesión son para **conceptos + entregables en clase**.

| Sesión | Guión | Capa | Resultado en el repo del alumno |
| --- | --- | --- | --- |
| 1 | [runbook → S1](facilitator-runbook.md#sesión-1--fundamentos-ia--primera-práctica) · [anexo](01-session.md) · [fundamentos C01–C08](concepts-map.md#definiciones-ampliadas-fundamentos-ia) | Ninguna | Fundamentos IA + cambio chico con alcance y verify |
| 2 | [runbook → S2](facilitator-runbook.md#sesión-2--mapa-e-identidad) · [anexo](02-session.md) | Capa 0 — mapa | `project.config.json`, `cursor/context-map.md`, `project-context.md`, reglas core |
| 3 | [runbook → S3](facilitator-runbook.md#sesión-3--una-historia-que-no-vive-en-el-chat) · [anexo](03-session.md) | Capa A — memoria | `templates/`, primera carpeta `analysis/features/<slug>/` |
| 4 | [runbook → S4](facilitator-runbook.md#sesión-4--implementar-y-validar) · [anexo](04-session.md) | Capa A — ciclo | Implementación + `test-checklist.md` de esa historia |
| 5 | [runbook → S5](facilitator-runbook.md#sesión-5--review-cerrar-y-gastar-menos-tokens) · [anexo](05-session.md) | Capa A+ — close / scope | Review, close lite, `context-scope.mdc` |
| 6 | [runbook → S6](facilitator-runbook.md#sesión-6--producto-y-cierre-del-curso) · [anexo](06-session.md) | Capa B (+ C opt-in) | `cursor/company/`, 3 ítems `FW-*`, checklist operativo |

Guía del facilitador (referencia técnica): [`00-facilitator-guide.md`](00-facilitator-guide.md)  
**Catálogo de aspectos IA** (importancia, template, prompts, resultado observable): [`aspects-catalog.md`](aspects-catalog.md)  
Workbook del alumno: [`participant-workbook.md`](participant-workbook.md)  
Orden de archivos a copiar: [`adopt-on-existing-repo.md`](adopt-on-existing-repo.md)  
Cheatsheets: [`cheatsheet-cursor.md`](cheatsheet-cursor.md) · [`cheatsheet-lifecycle.md`](cheatsheet-lifecycle.md)

## Origen de los archivos

Copiar desde este repo, no desde un producto vivo:

| Origen | Destino en el repo del alumno |
| --- | --- |
| `templates/cursor-workspace/` | `<repo>/cursor/` |
| `templates/cursor-config/` | `<repo>/.cursor/` |

Simulith (u otro producto maduro) es **demo opcional** para el facilitador: así se ve el sistema cuando ya tiene cientos de stories. Los alumnos no clonan esas carpetas.

Qué no copiar (Capa D): IDs de producto, stacks que el repo no tiene, registries poblados, reglas de negocio.

## Principio pedagógico

Cada sesión combina:

1. **Definiciones IA** (fundamento + patrón de aplicación).
2. **Práctica** en repo real (Cursor u otra herramienta).
3. **Kit opcional progresivo** (archivos en git que materializan los patrones).

Cada aspecto (mapa, reglas, memoria por feature, tokens, etc.) sigue el mismo esquema en [`aspects-catalog.md`](aspects-catalog.md): **por qué importa → archivos en el template → prompt de adopción → definition of done** (estructura + comportamiento del agente).

## Pre-requisitos (antes de la sesión 1 — no es tarea del curso)

- IDE con IA instalado (Cursor recomendado para el curso; Copilot/Claude válidos si el alumno ya los usa).
- Repo real abierto en el IDE (no un greenfield).
- Permiso para crear branch y commitear (aunque el merge sea después).
- Un ticket o bug real de 1–2 días de trabajo, o un cambio equivalente acordado con su tech lead.
- Lista de cómo se prueba hoy ese repo (`npm test`, `go test`, Cypress, etc.).

## Relación con otras guías

- Generar un proyecto **nuevo**: [`docs/examples/01-create-project.md`](../../examples/01-create-project.md)
- Workflow ya generado: [`docs/examples/02-cursor-kit-workflow.md`](../../examples/02-cursor-kit-workflow.md)
- Sync operativo a repos ya creados: [`docs/cursor-kit-sync.md`](../../cursor-kit-sync.md)
