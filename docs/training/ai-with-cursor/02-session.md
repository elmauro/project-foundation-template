# Sesión 2 — Mapa e identidad

> **Guión:** [facilitator-runbook.md → S2](facilitator-runbook.md#sesión-2--mapa-e-identidad) · **Conceptos:** [concepts-map.md](concepts-map.md) **C05–C09**

**Capa:** 0  
**Meta:** mapa, identidad, instrucciones persistentes, contexto por stack

**Copiar:** [adopt-on-existing-repo.md](adopt-on-existing-repo.md) → Layer 0

---

## Conceptos de esta sesión

| ID | Concepto IA (genérico) | ¿Cubierto? |
| --- | --- | --- |
| C05 | Mapa e índice del repositorio | Sí |
| C06 | Identidad y metadatos del proyecto | Sí |
| C07 | Instrucciones persistentes | Sí |
| C08 | Contexto por dominio/stack | Sí |
| C09 | Convenciones de artefactos durables | Sí |

---

### C05 Mapa e índice del repositorio

**Qué es:** Un índice en git (`cursor/context-map.md`) de **dónde está cada cosa** — tests, APIs, docs — para humanos y modelos.

**Por qué importa:** Sin mapa, cualquier IA inventa carpetas. El mapa es **tool-agnostic**: Copilot y Claude también lo leen si está en el repo.

**Ejemplo:** Repo API-only: lista `src/handlers/`, no `frontend/`.

**En este curso:** prompt [bootstrap-project-map](../../../templates/cursor-workspace/prompts/adoption/prompt-bootstrap-project-map.md) → revisión humana → commit.

---

### C06 Identidad y metadatos del proyecto

**Qué es:** Metadatos mínimos (`project.config.json`): nombre, slug, stacks **reales**.

**Por qué importa:** Evita que el modelo asuma un preset (fullstack) que no existe.

**En la práctica:** mismo archivo sirve para cualquier herramienta; algunos equipos usan `AGENTS.md` o frontmatter equivalente.

---

### C07 Instrucciones persistentes

**Qué es:** Reglas en repo que el IDE inyecta automáticamente — no repetir en cada chat.

**Por qué importa:** Capa 2 de C04. Comportamiento estable sin copiar el mismo párrafo 50 veces.

**En la práctica por herramienta:**

| Herramienta | Ubicación típica |
| --- | --- |
| **Cursor** | `.cursor/rules/*.mdc` |
| **Copilot** | `.github/copilot-instructions.md` |
| **Claude** | `CLAUDE.md` en raíz o subcarpetas |

**En este curso:** copiar `.cursor/rules/` core; pocas reglas, `alwaysApply` mínimo.

---

### C08 Contexto por dominio/stack

**Qué es:** Un doc por stack (`cursor/projects/<stack>/project-context.md`): comandos de test, convenciones, paths clave.

**Por qué importa:** El mapa dice *dónde*; esto dice *cómo*. Adjuntarlo en cualquier herramienta mejora la calidad del diff.

**En este curso:** [prompt-bootstrap-stack-context](../../../templates/cursor-workspace/prompts/adoption/prompt-bootstrap-stack-context.md).

---

### C09 Convenciones de artefactos durables

**Qué es:** Acuerdo de equipo sobre idioma, formato y naming de lo que **commiteas** (no del chat oral).

**Por qué importa:** PRs y equipos mixtos; el kit template está en inglés.

**Ejemplo:** Hablas español en clase; `user-story.md` en inglés.

---

## Tarea de casa (60–90 min)

1. Completar mapa para todos los stacks.
2. Un `project-context.md` por stack.
3. Prueba en modo explorar: “Where do I add a test for X?” — debe citar el mapa.

## Listo cuando

- [ ] `project.config.json` + mapa sin carpetas inventadas.
- [ ] Instrucciones persistentes en `.cursor/rules/` (o equivalente acordado).
- [ ] Al menos un stack context revisado por humano.
