# Sesión 1 — IA sin kit (laboratorio: Cursor)

> **Guión para dictar:** [facilitator-runbook.md → SESIÓN 1](facilitator-runbook.md#sesión-1--cursor-sin-kit)  
> **Tabla de conceptos:** [concepts-map.md](concepts-map.md) · esta sesión: **C01–C04**

**Capa:** ninguna  
**Meta:** un cambio pequeño con modo edición, sin carpeta `cursor/` todavía

**Cheatsheet (Cursor):** [cheatsheet-cursor.md](cheatsheet-cursor.md)

---

## Conceptos de esta sesión

| ID | Concepto IA (genérico) | ¿Cubierto? |
| --- | --- | --- |
| C01 | Alcance y contexto explícito | Sí |
| C02 | Modos de interacción (explorar / editar / planificar) | Sí |
| C03 | Verificación y evidencia humana | Sí |
| C04 | Arquitectura de contexto en tres capas (preview) | Sí |

---

### C01 Alcance y contexto explícito

**Qué es:** Acotar **qué información** recibe el modelo: archivos concretos, carpetas permitidas, y explícitamente qué **no** debe leer ni tocar.

**Por qué importa:** Los LLM no “conocen” tu repo. Sin acance, escanean todo, mezclan refactors con el ticket y queman ventana de contexto. Vale igual en Cursor, Copilot y Claude.

**Ejemplo:**

- Mal: *“Arregla el login”* (sin paths ni límites).
- Bien: *Goal: error when password empty. In scope: src/auth/login.tsx + test. Out of scope: refactor auth. Do not scan rest of repo. Verify: npm test -- login.test.ts*

**En la práctica por herramienta:**

| Herramienta | Cómo acotar |
| --- | --- |
| **Cursor** | `@archivo`, In/Out of scope en el prompt |
| **Copilot** | `#file`, `@workspace` selectivo, instrucciones en chat |
| **Claude** | Adjuntar archivos; “read only these paths” |
| **Cualquiera** | Listar paths en el prompt; prohibir exploración libre |

**En este curso (sin kit):** [cheatsheet-cursor](cheatsheet-cursor.md), 1–5 `@`, revisar diff antes de aceptar.

---

### C02 Modos de interacción

**Qué es:** Separar **explorar** (solo leer/responder), **editar** (generar diffs/código) y **planificar** (diseñar antes de tocar archivos).

**Por qué importa:** Pedir “solo explica” en modo edición produce cambios accidentales. Pedir un refactor grande sin planificar produce diffs caóticos.

**Ejemplo:** *“¿Dónde se valida el email?”* → modo explorar. *“Añade test para email vacío”* → modo editar + scope.

**En la práctica por herramienta:**

| Herramienta | Explorar | Editar | Planificar |
| --- | --- | --- | --- |
| **Cursor** | Ask | Agent | Plan |
| **Copilot** | Chat | Edits / agent | Chat + checklist |
| **Claude** | Chat | Claude Code | Chat estructurado |

**Regla de bolsillo:** explorar explica; editar escribe.

---

### C03 Verificación y evidencia humana

**Qué es:** El humano ejecuta pruebas o pasos manuales y conserva **evidencia** — no acepta el “listo” del modelo.

**Por qué importa:** Los modelos alucinan tests que pasan en papel. La verificación es independiente de la herramienta.

**Ejemplo:** Tras un fix: `npm test -- Button.test.tsx`. Sin tests: pasos manuales documentados.

**En la práctica:** Cursor Agent puede sugerir el comando; **tú** lo corres en terminal local (o CI). Copilot/Claude igual.

**En este curso:** incluir `Verify with:` en el prompt; anotar resultado en el [workbook](participant-workbook.md).

---

### C04 Arquitectura de contexto en tres capas

**Qué es:** Modelo mental portable:

1. **Código** — fuente en git.
2. **Instrucciones persistentes** — reglas del IDE/repo (sesión 2).
3. **Memoria durable** — mapa e historias en archivos (sesiones 2–6).

**Por qué importa:** Hoy solo tienen capa 1; por eso el acance manual (C01) es obligatorio. Las capas 2–3 reducen repetición en **cualquier** herramienta que lea el repo.

**En la práctica:** Copilot lee `.github/copilot-instructions.md`; Claude lee `CLAUDE.md`; Cursor lee `.cursor/rules/`. El **concepto** es el mismo.

**Hoy:** nombrar las tres capas; **no** instalar `cursor/` todavía.

---

## Tarea de casa (45–60 min)

1. Terminar el cambio (o revertir si era experimento).
2. Workbook: qué contexto adjuntaron, qué leyó de más, comando de verificación.
3. Confirmar ticket slice (sesiones 3–5) con el lead.

## Listo cuando

- [ ] Diff real + verify documentado.
- [ ] Explican explorar vs editar (en su herramienta).
- [ ] Nadie instaló el kit completo por adelantado.
