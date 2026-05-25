# Generation Contract

Contrato minimo entre el generador y los templates.

## Variables requeridas

| Variable | Ejemplo | Uso |
| --- | --- | --- |
| `PROJECT_NAME` | `Customer Portal` | Nombre legible del proyecto. |
| `PROJECT_SLUG` | `customer-portal` | Nombre de carpeta, servicios y recursos. |
| `BUSINESS_DOMAIN` | `customer engagement` | Descripcion corta del dominio. |
| `AWS_REGION` | `us-east-1` | Region AWS por defecto. |
| `PRESET` | `fullstack-aws-terraform` | Conjunto de templates a generar. |

## Variables opcionales

| Variable | Default | Uso |
| --- | --- | --- |
| `FRONTEND_APP_NAME` | `<PROJECT_SLUG>-frontend` | Nombre del paquete frontend. |
| `BACKEND_SERVICE_NAME` | `<PROJECT_SLUG>-backend` | Nombre logico del backend. |
| `TERRAFORM_STATE_BUCKET` | empty | Bucket remoto de Terraform, si ya existe. |
| `OWNER_TEAM` | `platform` | Equipo responsable inicial. |
| `PROJECTS_ROOT` | `../../generated` | Carpeta raiz donde se crea `<PROJECT_SLUG>/`. |
| `PROJECT_DIR` | `<PROJECTS_ROOT>/<PROJECT_SLUG>` | Ruta final del proyecto generado. |

## Output paths

El generador soporta tres formas de definir la salida:

| Opcion | Comportamiento |
| --- | --- |
| `--projects-root "C:\Projects"` | Crea el proyecto en `C:\Projects\<PROJECT_SLUG>`. |
| `--target-dir "C:\Projects\my-app"` | Crea el proyecto exactamente en esa ruta. |
| `--output <path>` | Alias legacy de `--projects-root`. |

Si no se especifica ninguna, usa `project-foundation-template/generated/<PROJECT_SLUG>`.

## Placeholders

Los templates usan placeholders en formato:

```text
__PROJECT_NAME__
__PROJECT_SLUG__
__BUSINESS_DOMAIN__
__AWS_REGION__
__PRESET__
__FRONTEND_APP_NAME__
__BACKEND_SERVICE_NAME__
__OWNER_TEAM__
__PROJECTS_ROOT__
__PROJECT_DIR__
```

El generador debe reemplazar placeholders en nombres de archivo y contenido.

## Presets

### `frontend-only`

Genera:

- `frontend/`
- `.cursor/`
- `docs/`
- `cursor/` con contexto frontend

### `backend-only`

Genera:

- `backend/`
- `.cursor/`
- `docs/`
- `cursor/` con contexto backend

### `fullstack-aws`

Genera:

- `frontend/`
- `backend/`
- `.cursor/`
- `docs/`
- `cursor/`

### `fullstack-aws-terraform`

Genera:

- `frontend/`
- `backend/`
- `infrastructure/`
- `.cursor/`
- `docs/`
- `cursor/`

### `fullstack-aws-enterprise`

Genera una estructura full-stack enterprise:

- `frontend/` con Vite/React enterprise, Jest, Cypress, MSW, Tailwind, services y routes.
- `backend/` con APIs serverless separadas, layers, database, tests y docs.
- `infrastructure/` por capability AWS.
- `.cursor/` con reglas activas para Cursor.
- `docs/`
- `cursor/`

### Presets especializados

- `frontend-vite-react-enterprise`
- `backend-serverless-multi-api`
- `infrastructure-aws-capability-folders`

## Criterios de terminado

Un proyecto generado debe poder:

- explicar su dominio y arquitectura inicial desde `README.md` y `docs/`
- separar frontend, backend e infraestructura
- declarar variables de ambiente en `.env.example`
- incluir reglas activas en `.cursor/rules/*.mdc`
- incluir un mapa rapido en `cursor/context-map.md`
- contener contexto inicial para Cursor
- dejar Terraform preparado por ambiente cuando el preset lo incluya

