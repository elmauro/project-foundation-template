# Project Foundation Template

Base neutral para crear proyectos full-stack con frontend, backend, infraestructura AWS, Terraform, documentacion y contexto para trabajo asistido por IA.

Este template concentra estructura, convenciones, generadores y artefactos reutilizables para iniciar nuevos proyectos con dominios de negocio distintos.

## Objetivos

- Generar proyectos nuevos con una estructura inicial consistente.
- Separar lo comun de lo especifico del negocio.
- Entregar templates para frontend, backend, infraestructura, documentacion y trabajo asistido por IA.
- Facilitar despliegues en AWS con Terraform y modulos reutilizables.
- Evitar copiar reglas, nombres o flujos propios de un producto especifico en nuevos proyectos.

## Estructura

```text
project-foundation-template/
├─ docs/
│  ├─ architecture.md
│  └─ generation-contract.md
├─ generators/
│  └─ create-project/
├─ templates/
│  ├─ backend-serverless-node/
│  ├─ backend-serverless-multi-api/
│  ├─ cursor-config/
│  ├─ cursor-workspace/
│  ├─ docs/
│  ├─ frontend-vite-react/
│  ├─ frontend-vite-react-enterprise/
│  ├─ github-workflows/
│  ├─ infrastructure-aws-capability-folders/
│  ├─ infrastructure-terraform-aws/
│  ├─ local-dev/
│  └─ root-common/
├─ terraform-modules/
│  ├─ api-gateway-lambda/
│  ├─ cognito/
│  ├─ dynamodb/
│  ├─ rds-postgres/
│  ├─ ses/
│  ├─ ssm-secrets/
│  └─ static-web/
└─ README.md
```

## Presets iniciales

| Preset | Incluye |
| --- | --- |
| `frontend-only` | Frontend Vite/React, docs y contexto Cursor frontend. |
| `backend-only` | Backend Node/serverless, docs y contexto Cursor backend. |
| `fullstack-aws` | Frontend, backend, docs, Cursor y estructura AWS. |
| `fullstack-aws-terraform` | Todo lo anterior mas Terraform por ambientes y referencias a modulos. |
| `frontend-vite-react-enterprise` | Frontend enterprise con routes, services, mocks, Cypress, Jest, Tailwind y Radix. |
| `backend-serverless-multi-api` | Backend con APIs separadas, Serverless Framework, layers, database, docs y tests. |
| `infrastructure-aws-capability-folders` | Infraestructura por capabilities: cognito, dynamodb, parameters, secrets, postgresdb, proxydb, ses, web y scripts. |
| `fullstack-aws-enterprise` | Preset full-stack enterprise con frontend avanzado, backend multi-API e infraestructura por capabilities. |

## Uso esperado

Desde `generators/create-project`:

```bash
npm install
npm run create -- --name "Customer Portal" --slug customer-portal --preset fullstack-aws-terraform --domain "customer engagement" --aws-region us-east-1
```

Para generar una estructura enterprise completa:

```bash
npm run create -- --name "Customer Portal" --slug customer-portal --preset fullstack-aws-enterprise --domain "customer engagement" --aws-region us-east-1
```

Por defecto, el backend multi-API genera `core-api`, `auth-api`, `admin-api` y `layer-transversal`. Puedes elegir APIs y layers:

```bash
npm run create -- --name "Customer Portal" --slug customer-portal --preset fullstack-aws-enterprise --backend-apis core,auth,admin,notification,worker --backend-layers transversal,domain
```

Por defecto, el frontend enterprise genera `router`, `services`, `types` y `tailwind`. Puedes elegir features:

```bash
npm run create -- --name "Customer Portal" --slug customer-portal --preset fullstack-aws-enterprise --frontend-features router,services,types,tailwind,auth,cognito,msw,cypress,jest,radix
```

Para crear el proyecto bajo `C:\Projects`, usa `--projects-root`:

```powershell
npm run create -- --name "Customer Portal" --slug customer-portal --preset fullstack-aws-enterprise --domain "customer engagement" --aws-region us-east-1 --projects-root "C:\Projects"
```

Esto genera:

```text
C:\Projects\customer-portal\
```

Si quieres controlar la ruta final exacta, usa `--target-dir`:

```powershell
npm run create -- --name "Customer Portal" --slug customer-portal --preset fullstack-aws-enterprise --target-dir "C:\Projects\customer-portal"
```

Salida esperada:

```text
C:\Projects\customer-portal/
├─ .github/
├─ .cursor/
├─ frontend/
├─ backend/
├─ infrastructure/
├─ cursor/
├─ docs/
├─ local-dev/
├─ project.config.json
└─ README.md
```

## Artefactos comunes generados

- `.gitignore` con reglas para Node, Terraform, Serverless y archivos de ambiente.
- `.cursor/rules/*.mdc` con reglas activas para Cursor.
- `project.config.json` con el preset y variables usadas al crear el proyecto.
- `backend/backend.config.json` cuando el preset usa backend multi-API.
- `frontend/frontend.config.json` cuando el preset usa frontend enterprise.
- `cursor/context-map.md` como indice rapido de estructura, stacks y archivos de contexto.
- `cursor/analysis/` y `cursor/analysis/features/` para artefactos durables por feature.
- `.github/workflows/ci.yml` para checks frontend/backend.
- `.github/workflows/terraform.yml` para `terraform fmt`, `init` y `validate`.
- `.github/workflows/deploy-web.yml` como punto de partida para despliegue web.
- `docs/adr-template.md`, `docs/security-baseline.md` y `docs/cost-baseline.md`.
- `local-dev/docker-compose.yml` con Postgres opcional para desarrollo local.

## `.cursor/` vs `cursor/`

El proyecto generado usa ambas carpetas con responsabilidades distintas:

- `.cursor/`: configuracion activa que Cursor lee automaticamente, especialmente `.cursor/rules/*.mdc`.
- `cursor/`: documentacion de trabajo, contexto por stack, prompts, templates y artefactos de analisis.

Las reglas en `.cursor/rules/` deben ser breves y accionables. La documentacion larga, playbooks y analisis deben vivir en `cursor/`.

## Context discovery

El flujo recomendado para entender un proyecto generado es:

1. Leer `project.config.json`.
2. Leer `cursor/context-map.md`.
3. Leer el contexto especifico del area a modificar:
   - `cursor/projects/frontend/project-context.md`
   - `cursor/projects/backend/project-context.md`
   - `cursor/projects/infrastructure/project-context.md`
4. Usar `cursor/docs/AI-Project-Playbook.md` para el flujo de trabajo.

## Principio de diseno

Este template no deberia contener reglas de negocio de un producto especifico. Todo lo que cambie por proyecto debe estar expresado como placeholder, opcion de preset o documento generado bajo `cursor/projects/`.

## Preset enterprise

El preset `fullstack-aws-enterprise` genera una estructura tecnica completa sin copiar reglas de negocio de ningun producto especifico:

- Frontend Vite/React configurable con features como `router`, `services`, `types`, `tailwind`, `auth`, `cognito`, `msw`, `cypress`, `jest` y `radix`.
- Backend Serverless configurable con APIs genericas (`core`, `auth`, `admin`, `notification`, `worker`), Lambda layers opcionales, `database/`, `tests/`, docs por API y script de despliegue por layers/APIs.
- Infraestructura AWS por capability: `cognito`, `dynamodb`, `parameters`, `secrets`, `postgresdb`, `proxydb`, `ses`, `web` y `scripts`.
- Cursor workspace con playbook, contextos por stack, prompts, templates y analysis.

