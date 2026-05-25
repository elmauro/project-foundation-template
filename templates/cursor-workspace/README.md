# AI Workspace - __PROJECT_NAME__

Contexto, reglas, prompts y artefactos de trabajo para Cursor.

## Estructura

```text
cursor/
├─ context-map.md
├─ docs/
├─ projects/
│  ├─ backend/
│  ├─ frontend/
│  └─ infrastructure/
├─ prompts/
├─ templates/
└─ analysis/
   └─ features/
```

## Uso

- Usa `.cursor/rules/*.mdc` para reglas activas que Cursor debe aplicar automaticamente.
- Usa `context-map.md` como indice rapido del proyecto.
- Usa `docs/AI-Project-Playbook.md` como flujo base.
- Actualiza `projects/*/project-context.md` cuando cambie la arquitectura real.
- Crea artefactos por feature en `analysis/features/<feature-slug>/`.
- Mantiene las reglas tecnicas separadas de las reglas de negocio.

## Analysis artifacts

Usa `analysis/features/<feature-slug>/` para mantener contexto durable de cada trabajo:

- `feature-manifest.md`
- `user-story.md`
- `analysis.md`
- `implementation-notes.md`
- `test-checklist.md`

## `.cursor/` vs `cursor/`

- `.cursor/`: configuracion activa para Cursor.
- `cursor/`: documentacion, prompts, contexto y memoria de trabajo.

