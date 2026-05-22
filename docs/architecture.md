# Architecture

## Separacion de responsabilidades

`project-foundation-template` separa cuatro niveles:

1. **Generator:** CLI que pregunta o recibe parametros y materializa un proyecto nuevo.
2. **Templates:** archivos copiables con placeholders.
3. **Terraform modules:** bloques reutilizables para AWS.
4. **Generated project:** repositorio o carpeta final del proyecto de negocio.

## Relacion con proyectos existentes

`loyalty-cursor` se mantiene como referencia de patrones de trabajo con Cursor, prompts y artefactos de analisis. Este template extrae la parte comun, pero no depende de nombres, APIs ni reglas de negocio Loyalty.

## Proyecto generado

La salida recomendada para proyectos full-stack es:

```text
<project-slug>/
├─ frontend/
├─ backend/
├─ infrastructure/
├─ cursor/
├─ docs/
├─ .github/
└─ README.md
```

Cada carpeta puede existir o no segun el preset seleccionado.

## Cursor workspace

La carpeta `cursor/` del proyecto generado cumple el mismo rol conceptual que `loyalty-cursor`, pero neutral:

- `cursor/docs/` contiene el playbook de trabajo.
- `cursor/projects/` contiene contexto y reglas por repo/stack.
- `cursor/prompts/` contiene prompts reutilizables.
- `cursor/templates/` contiene plantillas de analisis y requerimientos.
- `cursor/analysis/` contiene artefactos de features, bugs y decisiones.

## Terraform

Los proyectos generados no deberian copiar modulos completos si pueden referenciarlos desde una fuente versionada. Para el MVP, se genera una estructura local de ambientes con referencias relativas a `terraform-modules/`. Mas adelante se puede cambiar `source` a un repositorio Git versionado.

## Regla de negocio

El template solo define estructura, convenciones y capacidades tecnicas. El dominio de negocio vive en:

- `docs/domain.md`
- `cursor/projects/*/project-context.md`
- codigo propio del proyecto generado
- variables y configuracion por ambiente

