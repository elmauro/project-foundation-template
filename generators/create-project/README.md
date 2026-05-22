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

