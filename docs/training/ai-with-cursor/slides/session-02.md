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

**En la práctica:** No metas el mapa entero en `alwaysApply` — satura C02.

**Para contar:** Tres cajones, cada uno con su tamaño.

---

## C14 — Mapa del repositorio

**Definición:** Índice en git: dónde tests, API, docs.

**En la práctica:** Sin mapa → inventa `frontend/` que no existe.

**Para contar:** “¿Dónde va un test?” → cita **tu** mapa.

**Kit:** `context-map.md` · `project.config.json` · `project-context.md`

**Bootstrap:** Mode A (Ask) → revisar → Mode B (Agent)

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
- Prueba de control OK
- Commit: `chore(cursor): add project map and core rules`
