# AI Project Playbook

Guia practica para trabajar con Cursor en `__PROJECT_NAME__`.

## Objetivo

- Mantener un flujo repetible para features, bugs, refactors y despliegues.
- Guardar estado duradero por feature en `cursor/analysis/features/<feature-slug>/`.
- Separar contexto comun, reglas por stack y decisiones del negocio.

## Flujo recomendado

```text
INTAKE -> STORY -> ANALYSIS -> IMPLEMENT -> TEST -> REVIEW -> ITERATE
```

## Contexto requerido

Para frontend:

- `cursor/projects/frontend/project-context.md`

Para backend:

- `cursor/projects/backend/project-context.md`

Para infraestructura:

- `cursor/projects/infrastructure/project-context.md`

Para trabajo full-stack, usa los tres contextos.

## Definicion de terminado

- El alcance coincide con la historia o bug report.
- Los contratos entre backend y frontend estan alineados.
- Los cambios de infraestructura tienen plan, riesgos y validacion.
- Las pruebas o validaciones manuales quedan documentadas.
- La revision no tiene blockers abiertos.

