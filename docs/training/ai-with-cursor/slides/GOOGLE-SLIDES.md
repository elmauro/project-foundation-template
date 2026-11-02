# Subir las diapositivas a Google Slides

Los archivos **`.pptx`** en esta carpeta salen de `session-NN.md` (mismo contenido que las slides del curso).

| Archivo | Sesión | Slides |
| --- | --- | --- |
| `session-01.pptx` | Fundamentos + primera práctica | 16 |
| `session-02.pptx` | Mapa y reglas | 7 |
| `session-03.pptx` | Intake sin código | 7 |
| `session-04.pptx` | Implementar y validar | 8 |
| `session-05.pptx` | Review y cierre | 6 |
| `session-06.pptx` | Producto y cierre | 5 |
| `curso-completo.pptx` | Las 6 sesiones en un solo deck | 49 |

## Importar en Google Slides

1. Abre [Google Drive](https://drive.google.com).
2. **Nuevo → Subir archivo** y elige el `.pptx` (por sesión o `curso-completo.pptx`).
3. Clic derecho sobre el archivo → **Abrir con → Presentaciones de Google**.
4. (Opcional) **Archivo → Guardar como presentación de Google** para editar online.

También puedes en [Google Slides](https://slides.google.com): **Archivo → Importar diapositivas → Subir** y seleccionar el `.pptx`.

## Regenerar después de editar el markdown

Desde esta carpeta:

```bash
pip install python-pptx
python build-google-slides-pptx.py
```

Fuente de verdad del texto: `session-01.md` … `session-06.md` (alineados con [01-session.md](../01-session.md)–[06](../06-session.md)).

## Nota

Si buscabas **Google Sheets**: las diapositivas van en **Google Slides** (Presentaciones). Sheets es hoja de cálculo; el formato correcto para proyectar en clase es `.pptx` → Slides.
