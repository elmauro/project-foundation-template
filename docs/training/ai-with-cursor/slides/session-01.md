# Sesión 1 — Fundamentos IA + primera práctica

90 min · 4 personas · **Sin kit** `cursor/` todavía

**Meta:** entender qué es un LLM en la práctica + cambio chico con alcance y verify

**Lab:** [labs/01-primera-practica.md](../labs/01-primera-practica.md)

---

## Tres ideas del día

1. El modelo **no conoce** tu repo — solo esta petición.
2. El chat **no recuerda** ayer — lo durable va en git (desde sesión 2).
3. La persona **verifica** — lo seguro puede ser falso (C03).

---

## C01 — Modelo de lenguaje (LLM)

**Definición:** Genera texto token a token; no almacena tu código.

**En la práctica:** Asistente rápido de **esta** conversación, no un senior del equipo.

**Para contar:** Pides un test; se ve real; el import no existe — se lo inventó.

---

## C02 — Ventana de contexto

**Definición:** Cupo finito de tokens por petición (`@`, reglas, historial, prompt).

**En la práctica:** Más texto ≠ mejor. Elige qué entra (C09).

**Para contar:** Escritorio chico: 15 archivos + chat largo → se pierde lo del medio.

---

## C03 — Alucinación

**Definición:** Respuesta plausible pero falsa. Comportamiento **normal** del LLM.

**En la práctica:** No merges por tono. Abres path + corres comando (C12).

**Para contar:** `getOrders` en un path que no existe. ❌ mergeo ✅ terminal.

---

## C04 — Contexto

**Definición:** Todo lo que ve el modelo en **esta** petición.

**En la práctica:** Diff tan bueno como el contexto — acotado, no todo el repo.

**Para contar:** “Arregla login” vs `@login.tsx` + qué no tocar + verify.

---

## C05 — Sin memoria entre sesiones

**Definición:** Chat nuevo = borrón para el modelo. Slack no cuenta.

**En la práctica:** Acuerdos → archivos (mapa S2, historia S3).

**Para contar:** Martes “no i18n”. Miércoles chat nuevo: no lo sabe.

---

## C06 — Prompt

**Definición:** Instrucción + contexto + objetivo + formato + **verify**.

**En la práctica:** Prompt vago → huecos → alucinación.

**Para contar:** ❌ “Arregla login” ✅ bloque con `@files` y comando.

---

## C07 — Instrucciones persistentes *(preview)*

**Definición:** Reglas que el IDE carga **antes** de tu mensaje.

**En la práctica:** `.cursor/rules/` — no repetir convenciones cada chat.

**Para contar:** Hoy las nombramos; mañana las pegamos en el repo.

---

## C08 — Agente

**Definición:** LLM + actuar: editar, terminal, buscar.

**En la práctica:** Más poder → más scope creep. Frenas con C09 y C11.

**Para contar:** Pide test → diff → **tú** miras antes de accept.

---

## C09 — Alcance explícito

**Definición:** Qué sí/no entra al contexto y al diff.

**En la práctica:** Sin límite, refactoriza de paso (no conoce el repo).

**Para contar:** Solo `@src/auth/` — prohibido “analiza todo”.

**Hoy:** [cheatsheet-cursor.md](../cheatsheet-cursor.md)

---

## C10 — Explorar / editar / planificar

**Definición:** Preguntar ≠ escribir código ≠ diseñar grande.

**En la práctica:** Ask explica · Agent escribe · Plan antes si es épico.

**Para contar:** “¿Dónde valida email?” → Ask. “Añade test” → Agent + alcance.

---

## C11 — Human-in-the-loop

**Definición:** La IA propone; la persona aprueba y revierte.

**En la práctica:** El código es responsabilidad tuya ante el equipo.

**Para contar:** 8 archivos tocados → reviertes 6 → commiteas 2.

---

## C12 — Verificación y evidencia

**Definición:** Tú corres test/lint/build o pasos manuales documentados.

**En la práctica:** Antídoto a C03. `Verify with:` **ejecutado**.

**Para contar:** Chat: “pasa”. Terminal: verde o rojo.

---

## C13 — Contexto en capas *(preview)*

**Definición:** (1) Código (2) Reglas (3) Memoria en archivos.

**En la práctica:** Hoy solo capa 1 → alcance manual obligatorio.

**Para contar:** Tres cajones; hoy solo lleno el de código.

---

## Práctica y cierre — Sesión 1

**Lab:** cambio 15–30 min · Agent · 1–5 `@` · diff · verify · ticket con lead

**Listo cuando:**

- Diff + verify + workbook S1
- Ticket slice acordado (sesiones 3–5)
- **Sin** carpeta `cursor/` commiteada
