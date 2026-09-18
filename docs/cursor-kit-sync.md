# Cursor Kit Sync

Cómo propagar mejoras del kit Cursor a proyectos nuevos y existentes.

## Principio

Las mejoras **genéricas** del kit (prompts, templates, playbook, review guidelines, reglas `.mdc` neutrales) deben vivir en este repositorio bajo `templates/cursor-workspace/` y `templates/cursor-config/`.

Al ejecutar `generators/create-project`, todo preset que incluye `cursor-workspace` copia esa carpeta a `<proyecto>/cursor/`.

Los proyectos **nuevos** reciben el kit actualizado automáticamente. Los proyectos **ya generados** requieren sync manual.

Para **enseñar** esa adopción capa por capa (6 × 90 min, repo existente, facilitación en español): [`docs/training/ai-with-cursor/README.md`](training/ai-with-cursor/README.md).

## Qué incluye cada template

| Template | Destino en proyecto generado |
| --- | --- |
| `templates/cursor-workspace/` | `cursor/` |
| `templates/cursor-config/` | `.cursor/` |

Contenido típico de `cursor-workspace/`:

```text
cursor-workspace/
├─ docs/AI-Project-Playbook.md
├─ docs/story-validation.md
├─ docs/context-trace-matrix.md
├─ docs/context-scope-sessions.md
├─ docs/documentation-governance.md
├─ docs/github-projects-sync.md
├─ prompts/
│  ├─ builders/
│  └─ feature/
├─ templates/
├─ scripts/                    # new-feature, run-feature-gates, start-feature, sync-github-feature
├─ analysis/shared/review-guidelines.md
├─ analysis/studies/            # optional; study.md before stories
├─ analysis/features/          # READMEs; sin features de producto
├─ company/                    # opcional — solo con --with-product-backlog
├─ projects/                   # contextos por stack (placeholders)
└─ context-map.md
```

Also add `.cursor/rules/context-scope.mdc`, `.cursor/rules/company-product-context.mdc`, and `.cursor/hooks.json` from `templates/cursor-config/`.

## Scaffold `cursor/company/` (Capa B)

Incluido en el template bajo `cursor-workspace/company/` pero **solo se copia al generar** si pasas `--with-product-backlog`.

Contiene backlog mínimo: `future-work/ITEM-TEMPLATE.md`, `STORY-REGISTRY.md`, `STORY-LOG-TEMPLATE.md`, `AREA-TAXONOMY.md`, `DOCUMENTATION-GOVERNANCE.md`.

IDs configurables con `--fw-prefix` y `--story-prefix` (default: slug en `MAYUS_CON_GUIONES_BAJOS`).

## Qué no va en el foundation template

No copiar al template genérico:

- Reglas de negocio de un producto (Loyalty, Simulith MVP concreto, etc.)
- Artefactos de features en curso (`analysis/features/<slug>/` con contenido real)
- Contenido poblado de backlog de un producto (STORY-REGISTRY con cientos de filas, áreas Simulith, etc.)
- Stacks opcionales no soportados por presets (p. ej. `runtime/` — hoy es extensión manual en Simulith)

El scaffold `company/` es **vacío/genérico**; cada producto rellena su backlog después de generar o copia desde su repo vivo (Simulith).

## Flujo al mejorar el kit

1. **Implementar** el cambio en `templates/cursor-workspace/` o `templates/cursor-config/`.
2. **Probar** generando un proyecto de prueba:
   ```bash
   cd generators/create-project
   npm run create -- --name "Kit Smoke Test" --slug kit-smoke --preset fullstack-aws-enterprise --target-dir ./../../generated/kit-smoke
   ```
3. **Verificar** que `cursor/prompts/`, `cursor/templates/` y `cursor/docs/AI-Project-Playbook.md` reflejan el cambio.
4. **Portar a `loyalty-cursor`** si la mejora también aplica a Loyalty (adaptando rutas `cursor/` vs `loyalty-cursor/`).
5. **Sync proyectos vivos** si el equipo lo necesita (Simulith, etc.) — ver checklist abajo.
6. **Documentar** ítems cerrados en [`loyalty-cursor/docs/FUTURE-WORK-CURSOR-KIT.md`](../../loyalty-cursor/docs/FUTURE-WORK-CURSOR-KIT.md).

## Checklist de sync a proyecto existente

Al portar una mejora genérica a un proyecto ya creado:

- [ ] Copiar archivos nuevos o modificados desde `templates/cursor-workspace/` → `<proyecto>/cursor/`
- [ ] Copiar reglas desde `templates/cursor-config/` → `<proyecto>/.cursor/` si cambiaron
- [ ] Reemplazar placeholders (`__PROJECT_NAME__` → nombre real) solo si copias desde template sin generar
- [ ] **No sobrescribir** carpetas propias del producto (`cursor/company/`, `analysis/features/<slug>/`, `projects/runtime/`, etc.)
- [ ] Revisar `context-map.md` y playbook por secciones específicas del producto mezcladas a mano
- [ ] Commit en el repo del producto con mensaje que cite la mejora del kit

## Placeholders en templates

El generador reemplaza en nombres y contenido:

- `__PROJECT_NAME__`, `__PROJECT_SLUG__`, `__BUSINESS_DOMAIN__`, etc.

Ver [`generation-contract.md`](generation-contract.md).

Los prompts usan rutas genéricas (`cursor/`, `.cursor/rules/`) — no referencias a Loyalty.

## Roadmap

Mejoras planificadas del kit: [`loyalty-cursor/docs/FUTURE-WORK-CURSOR-KIT.md`](../../loyalty-cursor/docs/FUTURE-WORK-CURSOR-KIT.md).
