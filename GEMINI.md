# Model Tiering

El enrutamiento de solicitudes de modelos (Model Tiering) en este repositorio debe respetar la siguiente jerarquía de capacidades para asegurar eficiencia de costos y rendimiento:

- **Gemini 1.5 Pro / Gemini 2.5:**
  - **Casos de uso:** Tareas de razonamiento profundo, análisis complejo de diseño de maquetación (resolución de conflictos de espacio en A4), y refactorización de lógica algorítmica pesada.
  - **Aplicación específica:** Procesamiento y optimización exhaustiva dentro de `src/ai/flows/optimize-delivery-routes.ts`.

- **Gemini 1.5 Flash:**
  - **Casos de uso:** Generación iterativa de componentes de UI de baja complejidad, autocompletado rápido de código, creación de historias de usuario, y andamiaje de tests.
  - **Aplicación específica:** Ajustes de propiedades de Tailwind, mapeo rápido de interfaces TypeScript, operaciones que exigen baja latencia.

---

# CLI & MCP Config

La inicialización de las herramientas interactivas y servidores de contexto debe seguir estas directrices:

- **CLI Initialization:**
  - Limita el overhead en sesiones de terminal. Define las variables base: `export GENKIT_ENV=dev`.
  - Asegura que los tokens de entorno interactivo apunten hacia el proyecto de Google Cloud o Firebase asignado a Dos Ruedas Pro.

- **MCP (Model Context Protocol) Servers:**
  - **Geospatial MCP:** En flujos interactivos de prueba, monta y conecta el servidor MCP hacia la API de geocodificación o motores de ruteo (OSRM/Google Maps) necesarios para simular y alimentar a `optimize-delivery-routes.ts`.
  - **Database MCP:** Limita los permisos del servidor MCP estrictamente a operaciones de **LECTURA (Read-Only)** cuando el agente analice catálogos de vehículos, perfiles de despachadores o métricas logísticas históricas.

---

# Structured Outputs Constraints

Para mantener la rigidez operativa y evitar caídas en el parsing del backend de TypeScript de Dos Ruedas Pro, los modelos de IA deben aplicar coerción de esquemas estricta.

- **JSON Schema Requirement:** Todas las interacciones con APIs de LLM que regresen datos para el backend deben utilizar características de *Structured Outputs* (`response_mime_type: "application/json"` o la implementación `responseSchema` de la SDK).
- **Format Control:** Está terminantemente prohibido que el modelo genere bloques de markdown envolventes (```json ... ```) si la API base del entorno no los filtra previamente. El output debe ser el objeto crudo.
- **Zod Validation Flow:** Toda inferencia de Gemini en el backend logístico debe encadenarse con el parseo estricto del esquema Zod correspondiente para asegurar que los itinerarios optimizados encajen matemáticamente en la lógica del negocio antes de ser entregados a la UI o almacenados.