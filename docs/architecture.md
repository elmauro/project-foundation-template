# Architecture

## Separacion de responsabilidades

`project-foundation-template` separa cuatro niveles:

1. **Generator:** CLI que pregunta o recibe parametros y materializa un proyecto nuevo.
2. **Templates:** archivos copiables con placeholders.
3. **Terraform modules:** bloques reutilizables para AWS.
4. **Generated project:** repositorio o carpeta final del proyecto de negocio.

## Relacion con referencias previas

El template consolida patrones reutilizables de trabajo asistido por IA, frontend, backend e infraestructura. No depende de nombres, APIs ni reglas de negocio de ningun producto especifico.

## Proyecto generado

La salida recomendada para proyectos full-stack es:

```text
<project-slug>/
├─ frontend/
├─ backend/
├─ infrastructure/
├─ .cursor/
├─ cursor/
├─ docs/
├─ .github/
└─ README.md
```

Cada carpeta puede existir o no segun el preset seleccionado.

## Cursor configuration

La carpeta `.cursor/` contiene configuracion activa que Cursor carga automaticamente:

- `.cursor/rules/core-standards.mdc`
- `.cursor/rules/project-context.mdc`
- `.cursor/rules/frontend-react.mdc`
- `.cursor/rules/backend-serverless.mdc`
- `.cursor/rules/infrastructure-terraform.mdc`

## AI workspace

La carpeta `cursor/` del proyecto generado concentra documentacion, contexto, prompts y artefactos de trabajo:

- `cursor/docs/` contiene el playbook de trabajo.
- `cursor/context-map.md` contiene el mapa rapido de estructura, stacks y archivos de contexto.
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

