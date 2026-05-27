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

## Flujo determinista

```text
INTAKE -> STORY -> ANALYSIS -> IMPLEMENT -> TEST -> REVIEW -> ITERATE
```

| Fase | Proposito | Salida principal |
| --- | --- | --- |
| Intake | Aclarar objetivo, alcance, stacks afectados y restricciones | scope corto |
| Story | Convertir la idea en criterios de aceptacion | `user-story.md` |
| Analysis | Mapear impacto, contratos, datos, UI, riesgos | `analysis.md` |
| Implementation | Cambiar codigo y docs dentro del alcance | codigo + `implementation-notes.md` |
| Testing | Validar happy path, errores, contratos y regresiones | `test-checklist.md` |
| Review | Revision tipo PR antes de cerrar | findings o listo |
| Iterate | Ajustes y pendientes documentados | manifest actualizado |

## Quick start

Adjunta **solo el prompt** de la fase. El prompt ya referencia templates, reglas y contexto del proyecto.

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

## Ruta para bugs

Para bugs pequenos:

```text
@cursor/prompts/feature/prompt-bug-fix.md

Issue / ticket: <id>
Problem: <what fails>
Expected behavior: <what should happen>
Stack scope: backend | frontend | infrastructure | full-stack
```

Si el bug requiere seguimiento, crea `cursor/analysis/features/bug-<ticket>-<area>/`.

## Definicion de terminado

- El alcance implementado coincide con `user-story.md` o el bug report.
- API docs, reglas de negocio, tipos, servicios, mocks y pruebas E2E se actualizaron si el contrato cambio.
- Pruebas o validacion manual estan registradas en `test-checklist.md`.
- `implementation-notes.md` explica decisiones, archivos tocados y riesgos residuales.
- La revision no tiene blockers ni majors abiertos.

## Referencia

- Indice de prompts: `cursor/prompts/README.md`
- Plantillas de artefactos: `cursor/templates/`
