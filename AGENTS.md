# Guía de Comportamiento para Agentes Autónomos - Dos Ruedas Pro

## System Role & Context
Este repositorio contiene **Dos Ruedas Pro**, una plataforma de gestión logística de última milla basada en Argentina. Su propósito principal es la generación y visualización de propuestas comerciales operativas diseñadas para ser exportadas a PDF en formato A4 de alta fidelidad.

## Core Stack Rules
- **Framework:** Next.js 15+ (App Router).
- **Styling:** Tailwind CSS (Uso estricto de variables HSL de ShadCN).
- **Layout:** Maquetación orientada a impresión. Cada página en `src/components/paginas/` debe respetar `w-[210mm]` y `h-[297mm]`.
- **Typing:** TypeScript estricto. Importación de tipos con `import type`.
- **Icons:** `lucide-react` únicamente.

## AI Agent Flows (Genkit)
El core inteligente reside en `src/ai/flows/optimize-delivery-routes.ts`.
- **Input:** Lista de locaciones B2B, detalles de pedidos y capacidades de vehículos.
- **Output:** Itinerario secuencial optimizado, estimación de tiempo/combustible y razonamiento lógico.
- **Engine:** Genkit 1.x con Google AI Plugin.

## Strict Guidelines

### SÍ (Hacer)
- Mantener la integridad del contenedor A4 (`a4-container`).
- Usar `flex flex-col justify-between` para asegurar que el footer siempre toque el borde inferior de la hoja.
- Ajustar `gap`, `padding` y `font-size` de forma granular si el contenido desborda la página.
- Utilizar `suppressHydrationWarning` en componentes que manejan estados de montaje.

### NO (No hacer)
- **NO** eliminar contenido informativo para ganar espacio; reorganizar visualmente (grids/flex).
- **NO** inyectar estilos `position: absolute` que rompan el flujo secuencial de la página de exportación.
- **NO** usar librerías de UI externas que no sean las configuradas en `components.json`.
- **NO** modificar la lógica de inicialización de Genkit sin solicitud explícita.
