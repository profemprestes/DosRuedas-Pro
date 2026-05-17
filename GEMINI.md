# Directrices de Interacción con Gemini & CLI

## Model Tiering
- **Gemini 2.5 Flash:** Utilizar para refactorizaciones rápidas, generación de componentes UI repetitivos y ajustes de Tailwind.
- **Gemini 1.5 Pro / Ultra:** Reservado para análisis de arquitectura de impresión PDF, optimización de algoritmos de rutas en Genkit y depuración de errores de hidratación complejos.

## CLI & MCP Config
- **Genkit Dev:** Ejecutar `npm run genkit:dev` para probar los flujos de optimización de rutas localmente.
- **Environment:** Asegurar que `GEMINI_API_KEY` esté configurado antes de invocar acciones de servidor de IA.
- **Timeout:** Las acciones de servidor que involucran generación de rutas deben tener un timeout extendido (60s+) debido a la latencia de razonamiento del modelo.

## Structured Outputs Constraints
Para garantizar la estabilidad del sistema, todas las interacciones con el modelo que devuelvan datos logísticos deben seguir estos principios:
1. **Zod Enforcement:** No aceptar respuestas que no validen contra los esquemas definidos en `src/ai/flows/`.
2. **Handlebars Templating:** Las instrucciones del sistema (`prompt`) en Genkit deben usar sintaxis Handlebars triple `{{{ }}}` para evitar escapes de caracteres en direcciones de Buenos Aires.
3. **JSON Only:** Forzar `responseMimeType: 'application/json'` en las configuraciones de `ai.generate` para evitar prefijos de texto conversacional en el backend.

## Context Window Optimization
Al interactuar con este repositorio, el agente debe priorizar la lectura de:
1. `src/app/globals.css` (Reglas de impresión `@media print`).
2. `src/components/paginas/shared/` (Componentes transversales de hoja).
3. `src/ai/genkit.ts` (Configuración del modelo).
