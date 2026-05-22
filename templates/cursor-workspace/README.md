# Cursor Workspace - __PROJECT_NAME__

Contexto, reglas, prompts y artefactos de trabajo para Cursor.

## Estructura

```text
cursor/
├─ docs/
├─ projects/
│  ├─ backend/
│  ├─ frontend/
│  └─ infrastructure/
├─ prompts/
├─ templates/
└─ analysis/
```

## Uso

- Usa `docs/AI-Project-Playbook.md` como flujo base.
- Actualiza `projects/*/project-context.md` cuando cambie la arquitectura real.
- Crea artefactos por feature en `analysis/features/<feature-slug>/`.
- Mantiene las reglas tecnicas separadas de las reglas de negocio.

