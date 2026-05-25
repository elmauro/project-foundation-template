# Create Project Generator

CLI minimo para generar proyectos desde `project-foundation-template/templates`.

## Uso

```bash
npm run create -- --name "Customer Portal" --slug customer-portal --preset fullstack-aws-terraform --domain "customer engagement" --aws-region us-east-1
```

Crear dentro de `C:\Projects`:

```powershell
npm run create -- --name "Customer Portal" --slug customer-portal --preset fullstack-aws-enterprise --domain "customer engagement" --aws-region us-east-1 --projects-root "C:\Projects"
```

Crear en una ruta final exacta:

```powershell
npm run create -- --name "Customer Portal" --slug customer-portal --preset fullstack-aws-enterprise --target-dir "C:\Projects\customer-portal"
```

## Opciones

| Opcion | Requerida | Default |
| --- | --- | --- |
| `--name` | si | n/a |
| `--slug` | no | slug derivado de `--name` |
| `--preset` | no | `fullstack-aws-terraform` |
| `--domain` | no | `general business` |
| `--aws-region` | no | `us-east-1` |
| `--owner-team` | no | `platform` |
| `--frontend-features` | no | `router,services,types,tailwind` |
| `--backend-apis` | no | `core,auth,admin` |
| `--backend-layers` | no | `transversal` |
| `--projects-root` | no | `../../generated` |
| `--target-dir` | no | n/a |
| `--output` | no | alias legacy de `--projects-root` |

## Presets

- `frontend-only`
- `backend-only`
- `fullstack-aws`
- `fullstack-aws-terraform`
- `frontend-vite-react-enterprise`
- `backend-serverless-multi-api`
- `infrastructure-aws-capability-folders`
- `fullstack-aws-enterprise`

## Backend multi-API

Los presets que usan `backend-serverless-multi-api` permiten seleccionar APIs y layers.

Valores validos para `--backend-apis`:

- `core`
- `auth`
- `admin`
- `notification`
- `worker`

Valores validos para `--backend-layers`:

- `transversal`
- `domain`

Ejemplo completo:

```powershell
npm run create -- --name "Customer Portal" --slug customer-portal --preset fullstack-aws-enterprise --backend-apis core,auth,admin,notification,worker --backend-layers transversal,domain --projects-root "C:\Projects"
```

El generador crea `backend/backend.config.json` con la seleccion final.

## Frontend enterprise

Los presets que usan `frontend-vite-react-enterprise` permiten seleccionar features.

Valores validos para `--frontend-features`:

- `router`
- `services`
- `types`
- `tailwind`
- `auth`
- `cognito`
- `msw`
- `cypress`
- `jest`
- `radix`

Defaults:

```text
--frontend-features router,services,types,tailwind
```

Ejemplo completo:

```powershell
npm run create -- --name "Customer Portal" --slug customer-portal --preset fullstack-aws-enterprise --frontend-features router,services,types,tailwind,auth,cognito,msw,cypress,jest,radix --projects-root "C:\Projects"
```

El generador crea `frontend/frontend.config.json` y ajusta `frontend/package.json` con la seleccion final.

## Cursor

Todos los presets generan:

- `.cursor/rules/*.mdc`: reglas activas que Cursor carga automaticamente.
- `cursor/`: playbooks, contexto por stack, prompts, templates y artefactos de analisis.

