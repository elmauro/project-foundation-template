# Lab sesión 1 — Primera práctica (sin kit)

**Meta:** un cambio pequeño con alcance explícito y una prueba que corriste tú.  
**Conceptos:** C01–C06, C08–C13 (ver [concepts-map.md](../concepts-map.md))

Todavía **no** copies la carpeta `cursor/` ni `.cursor/rules/`.

---

## Antes de empezar

- [ ] Cursor (o tu herramienta con modo **editar**) abierto en **tu repo real**.
- [ ] Sabes un comando para probar cambios (test, lint, build o paso manual).
- [ ] Tienes permiso para crear una rama.

---

## Pasos

### 1. Elige un cambio de 15–30 minutos

Algo chico: un typo, un test que falta, un bug acotado. **No** uses todavía el ticket grande del curso.

**Verifica:** puedes decir en una frase qué archivo(s) deberían cambiar.

### 2. Abre modo editar

En Cursor: **Agent**. En otras herramientas: el modo que **escribe** archivos.

**Verifica:** si solo quieres preguntar, usa modo explorar (Ask). Explorar no toca archivos.

### 3. Pega un prompt con alcance

Copia la plantilla de [cheatsheet-cursor.md](../cheatsheet-cursor.md). **Quita** la línea de `project-context.md` (aún no existe).

Adjunta con `@` entre **1 y 5 archivos** concretos.

**Verifica:** tu prompt tiene objetivo, in scope, out of scope y `Verify with:` con un comando real.

### 4. Revisa el diff antes de aceptar

Lee línea por línea. Si tocó carpetas que no pediste, revierte esas partes.

**Verifica:** puedes nombrar **un archivo que no debía tocarse** y por qué.

### 5. Corre la verificación en tu terminal

Ejecuta el comando de `Verify with:`. No confíes en “listo” del chat.

**Verifica:** viste salida verde, o anotaste el error real si falló.

### 6. Acuerda el ticket del curso con tu lead

Un bug o cambio de **1–2 días** para las sesiones 3–5. Si es grande, recórtalo ahora.

**Verifica:** tienes ID o título del ticket y el lead dijo que el alcance cabe.

### 7. Completa el workbook — sesión 1

[participant-workbook.md](../participant-workbook.md): prompt, archivos `@`, verify, ticket acordado.

**Verifica:** la tabla de la sesión 1 está llena.

---

## Listo cuando

- [ ] Hubo un diff real (puedes revertirlo después).
- [ ] Corriste verify o dejaste el paso manual escrito.
- [ ] Ticket slice confirmado con el lead.
- [ ] Workbook sesión 1 completo.
- [ ] **No** hay carpeta `cursor/` commiteada hoy.

---

## Si algo falla

| Pasa esto | Haz esto |
| --- | --- |
| El agente lista medio repo | Para. Pon tres `@` concretos y repite el prompt. |
| No hay tests en el repo | Verify = lint, build, o pasos manuales en el workbook. |
| El diff es enorme | Recorta el objetivo a un solo archivo. |
