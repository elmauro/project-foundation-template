# Sesión 2 — Mapa e instrucciones persistentes

90 min · **Kit Layer 0**

**Conceptos:** C07 · C13 · C14

**Lab:** [labs/02-mapa-y-reglas.md](../labs/02-mapa-y-reglas.md)

---

## Por qué hoy

| Si… | Entonces… |
| --- | --- |
| C01 — no conoce el repo | **C14** mapa en git |
| C05 — chat no recuerda | **C07** reglas en archivos |
| C02/C04 — cupo limitado | Mapa + `project-context` = contexto útil |

---

## C07 — Instrucciones persistentes

**Definición:** Texto cargado **antes** de tu prompt cada vez.

**En la práctica:** Convenciones, seguridad, idioma — sin repetir en cada chat.

**Para contar:** “Los tests se corren así” vive en el repo; el editor lo inyecta solo.

**Kit:** `.cursor/rules/*.mdc`

---

## C13 — Contexto en capas

**Definición:** Código · reglas cortas · memoria larga (`cursor/`).

**En la práctica:** No metas el mapa entero ni docs largos en `alwaysApply` — satura C02. Usa `globs:` y `.cursorignore`.

**Para contar:** Tres cajones, cada uno con su tamaño. `.cursorignore` evita que la IA indexe dependencias y builds.

---

## C14 — Mapa del repositorio

**Definición:** Índice en git: dónde tests, API, docs.

**En la práctica:** Sin mapa → inventa `frontend/` que no existe.

**Para contar:** “¿Dónde va un test?” → cita **tu** mapa.

**Kit:** `context-map.md` · `project.config.json` · `project-context.md`

**Bootstrap mapa:** Mode A (Ask) → revisar → Mode B (Agent)

**Bootstrap área:** repetir por cada `stacks[]` · `Stack root path` real · probar **Commands**

**Lab:** pasos 6A–6D

---

## Proyecto vs `stacks` (áreas)

| | Proyecto (producto) | `stacks` en JSON |
| --- | --- | --- |
| Qué es | El producto de negocio | Partes técnicas: UI, API, infra… |
| Dónde | `projectName` en config | `stacks[]` + `cursor/projects/<etiqueta>/` |

UI + API en **un** git = **un** `projectName`, **dos** áreas en `stacks`, **un** mapa.

El campo sigue llamándose `stacks` en el kit; en clase: **áreas**, no “todo el proyecto”.

---

## `.mdc` vs `project-context.md` · mono-repo

| | Regla `.mdc` | `cursor/projects/<stack>/project-context.md` |
| --- | --- | --- |
| Rol | Corta, siempre on — orden de lectura | Largo — tests, carpetas, convenciones |
| Mono-repo | Un stack en `project.config.json` (etiqueta: `vite-ui`, `api`, …) — **editar** el `.mdc` | Un `project-context.md` con **carpetas reales** (`src/`, `apps/`, `otp-api/`) — no hace falta `frontend/` |

**Lab paso 7:** adaptar `.mdc` después del bootstrap.

---

## Prueba de control

Modo **Ask:**

*“Where do I add a new test for X?”*

**Pasa si:** cita el mapa · **Falla si:** inventa carpetas

---

## Práctica y cierre — Sesión 2

**Lab:** copiar Layer 0 · bootstrap mapa + stack · reglas core

**Listo cuando:**

- Mapa sin carpetas inventadas
- `project-context.md` revisado por ti
- `project-context.mdc` adaptado al repo (mono-repo OK)
- Prueba de control OK
- Commit: `chore(cursor): add project map and core rules`
