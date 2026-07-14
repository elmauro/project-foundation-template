# AI Project Playbook

Guia practica para usar Cursor en features, bugs, mejoras, refactors y analisis de `__PROJECT_NAME__`.

## Objetivo

- Mantener un flujo repetible para `frontend/`, `backend/` e `infrastructure/` cuando aplique.
- Guardar estado duradero por feature en `cursor/analysis/features/<feature-slug>/`.
- Usar reglas por stack y plantillas compartidas para reducir contexto perdido entre sesiones.
- Evitar analisis de todo el repositorio cuando una tarea puede resolverse con alcance minimo.

## Regla central

- `backend/` define contratos, reglas de negocio, datos, APIs e infraestructura de aplicacion.
- `frontend/` define experiencia de usuario, rutas, servicios, tipos, mocks y pruebas de UI.
- `infrastructure/` define Terraform, capabilities AWS y despliegue cuando el preset lo incluye.
- `cursor/` define contexto, reglas, prompts, plantillas y artefactos de trabajo para Cursor.
- Si un cambio toca contratos, alinea backend y frontend antes de cerrar.

## Layout esperado

```text
<project-root>/
├─ frontend/
├─ backend/
├─ infrastructure/     # cuando el preset lo incluye
├─ cursor/
│  ├─ docs/
│  ├─ projects/
│  ├─ prompts/
│  ├─ analysis/features/<feature-slug>/
│  ├─ templates/
│  └─ README.md
└─ .cursor/rules/
```

## Contexto requerido

Los prompts de `cursor/prompts/feature/` ya cargan el contexto necesario: project context, reglas activas, review guidelines y templates. Esta seccion es solo referencia.

Para backend:

- `cursor/projects/backend/project-context.md`
- `.cursor/rules/backend-serverless.mdc`

Para frontend:

- `cursor/projects/frontend/project-context.md`
- `.cursor/rules/frontend-react.mdc`

Para infraestructura:

- `cursor/projects/infrastructure/project-context.md`
- `.cursor/rules/infrastructure-terraform.mdc`

Para full-stack, usa los packs que apliquen.

Para features que leen mucho contexto o cruzan carpetas, registra evidencia opcional en [`context-trace-matrix.md`](context-trace-matrix.md).

## Context routing rapido

Antes de cargar documentos largos, elige el contexto minimo por area. Ver tambien `.cursor/rules/context-scope.mdc` y [`context-scope-sessions.md`](context-scope-sessions.md).

1. Identifica stack scope (backend / frontend / infrastructure / full-stack).
2. Lee primero solo el contexto base de esa area.
3. Agrega contexto condicional solo si el archivo se toca o cambia una decision.
4. Si la story fue ambigua o consumio mucho contexto, anota 2-4 filas **Context trace** en `analysis.md` o `implementation-notes.md`.

| Area | Lee primero | Agrega solo si aplica |
| --- | --- | --- |
| Backend | `cursor/projects/backend/project-context.md`, `.cursor/rules/backend-serverless.mdc`, paths `backend/` afectados | infra project-context si deploy; `company/future-work/` si backlog |
| Frontend | `cursor/projects/frontend/project-context.md`, `.cursor/rules/frontend-react.mdc`, paths `frontend/` afectados | backend docs si contrato; MSW/Cypress si E2E |
| Infrastructure | `cursor/projects/infrastructure/project-context.md`, `.cursor/rules/infrastructure-terraform.mdc` | backend/frontend si outputs afectan apps |
| Full-stack | Ambos project contexts + feature package | API docs + types/services en ambos lados |
| Product / backlog | `cursor/company/future-work/`, `documentation-governance.md` | codigo solo si la decision requiere implementacion |
| Studies | `cursor/analysis/studies/<slug>/study.md`, study template | feature packages solo para filas `implement` |

## Flujo determinista

```text
INTAKE -> STORY -> ANALYSIS -> IMPLEMENT -> VALIDATE -> REVIEW -> CLOSE
```

| Fase | Proposito | Salida principal |
| --- | --- | --- |
| Intake | Registrar story y crear paquete inicial | carpeta + manifest |
| Story | Criterios de aceptacion | `user-story.md` |
| Analysis | Impacto, contratos, riesgos | `analysis.md` |
| Implementation | Codigo + docs en alcance | codigo + `implementation-notes.md` |
| Validate | Ejecutar checks enfocados | `test-checklist.md` actualizado |
| Review | Revision tipo PR | findings o listo |
| Close | Cerrar y sincronizar docs/backlog | manifest done + `INDEX.md` |

## Quick start

Adjunta **solo el prompt** de la fase. El prompt ya referencia templates, reglas y contexto del proyecto.

**Slug vs name:** `Feature slug` define la carpeta. `Feature name` es el titulo legible en encabezados y campo `Name:`.

### 0. Intake (opcional)

```text
@cursor/prompts/feature/prompt-story-intake.md
Mode: A

<describe the feature in natural language>
```

### 1. Crear paquete de analisis

```text
@cursor/prompts/feature/prompt-feature-analysis-package.md

Feature slug: <feature-slug>
Feature name: <feature-name>
Ticket/story: <ticket-or-story-if-any>
Stack scope: backend | frontend | infrastructure | full-stack
```

Archivos esperados:

- `feature-manifest.md`
- `user-story.md`
- `analysis.md`

### 2. Implementar

```text
@cursor/prompts/feature/prompt-feature-implementation-package.md

Feature slug: <feature-slug>
Feature name: <feature-name>
Stack scope: backend | frontend | infrastructure | full-stack
```

Salidas esperadas:

- cambios de codigo/documentacion
- `implementation-notes.md`
- `test-checklist.md`
- `feature-manifest.md` actualizado

### 3. Revisar

```text
@cursor/prompts/feature/prompt-feature-review.md

Feature slug: <feature-slug>
Feature name: <feature-name>
```

La revision debe empezar por hallazgos y clasificar severidad.

### 4. Validar

```text
@cursor/prompts/feature/prompt-feature-validation-package.md

Feature slug: <feature-slug>
Feature name: <feature-name>
Stack scope: backend | frontend | infrastructure | full-stack
```

### 5. Cerrar

```text
@cursor/prompts/feature/prompt-feature-close-package.md

Feature slug: <feature-slug>
Feature name: <feature-name>
```

### Lifecycle completo

```text
@cursor/prompts/feature/prompt-feature-lifecycle.md

Feature slug: <feature-slug>
Feature name: <feature-name>
Stack scope: backend | frontend | infrastructure | full-stack
```

## Ruta para bugs

Para bugs pequenos:

```text
@cursor/prompts/feature/prompt-bug-fix.md

Issue / ticket: <id>
Problem: <what fails>
Expected behavior: <what should happen>
Stack scope: backend | frontend | infrastructure | full-stack
Feature slug: <bug-... | n/a>
Feature name: <human-readable name | n/a>
```

Si el bug requiere seguimiento, crea `cursor/analysis/features/bug-<ticket>-<area>/`.

## Definicion de terminado

- El alcance implementado coincide con `user-story.md` o el bug report.
- API docs, reglas de negocio, tipos, servicios, mocks y pruebas E2E se actualizaron si el contrato cambio.
- Pruebas o validacion manual estan registradas en `test-checklist.md`.
- `implementation-notes.md` explica decisiones, archivos tocados y riesgos residuales.
- La revision no tiene blockers ni majors abiertos.
- `cursor/analysis/features/INDEX.md` refleja stage `done` cuando la feature se cierra.

## Referencia

- Indice de prompts: `cursor/prompts/README.md`
- Plantillas de artefactos: `cursor/templates/`
- Gobernanza de docs: `cursor/docs/documentation-governance.md`
- Indice de features: `cursor/analysis/features/INDEX.md`
- Context routing: `cursor/docs/context-scope-sessions.md`
- Context trace (optional): `cursor/docs/context-trace-matrix.md`
