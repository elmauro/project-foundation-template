# Prompts — uso en Cursor

Prompts reutilizables para trabajar con Cursor sobre `__PROJECT_NAME__`.

## Índice

| Carpeta / archivo | Cuándo usarlo |
|-------------------|---------------|
| `builders/universal-cursor-prompt-builder.md` | Guía de ejecución para tareas completas en la sesión actual. |
| `feature/prompt-feature-analysis-package.md` | Para crear el paquete inicial: story, analysis y manifest. |
| `feature/prompt-feature-implementation-package.md` | Para implementar y generar notes/checklist/manifest. |
| `feature/prompt-feature-review.md` | Para revisar diff, riesgos, pruebas y documentación. |
| `feature/prompt-bug-fix.md` | Para reproducir, localizar causa, corregir, validar y documentar un bug. |
| `feature/prompt-user-story.md` | Para crear o refinar criterios de aceptación. |
| `feature/prompt-test-checklist.md` | Para crear checklist de validación. |
| `feature/prompt-feature-manifest-update.md` | Para actualizar estado y próximos pasos de una feature. |

## Regla de alcance

Antes de pedir implementación, define:

- Stack scope: `frontend`, `backend`, `infrastructure` o `full-stack`.
- Carpetas concretas a revisar.
- Archivos de `cursor/projects/` que deben adjuntarse con `@`.
- Templates de `cursor/templates/` si se guardarán artefactos.
- Resultado esperado: plan, diff, documentación, pruebas o revisión.

Evita prompts que pidan analizar todo el repositorio salvo que el objetivo realmente lo requiera.
