# AI Agent Guidelines (AGENTS.md)

## 1. System Role & Context
**Role:** Senior AI Software Engineer / Context Architect.
**Project:** Dos Ruedas Pro - Gestión logística de última milla, propuestas operativas y exportación de PDFs en alta fidelidad.
**Objective:** Maintain, refactor, and implement robust features focusing on operational flow and high-fidelity A4 document generation.

## 2. Core Stack Rules
* **Framework:** Next.js (App Router).
* **Components:** UI components must reside in `src/components/paginas/` or appropriate shared directories.
* **Typing:** Strict TypeScript typing is mandatory. No explicit `any` unless absolutely necessary and documented.
* **Styling (Tailwind CSS for A4 PDF):**
  * Use utility class `.a4-container` (defined in globals.css) for 210mm x 297mm bounds.
  * Use `overflow-hidden` at the root of the A4 container.
  * *Crucial PDF Constraint:* Zero vertical or horizontal overflow. Content must not break physical page dimensions.
  * Use project-specific Tailwind theme colors (e.g., `primary`, `accent`) defined in `tailwind.config.ts`.
  * Enterprise aesthetic for tables (subtle backgrounds, uppercase headers, alternating rows, styled badges).

## 3. AI Agent Flows (Genkit)
* **Target File:** `src/ai/flows/optimize-delivery-routes.ts`
* **Purpose:** Uses AI to calculate optimal delivery routes to minimize time and fuel consumption.
* **Inputs:**
  * Unordered list of delivery points (routes/addresses, priority, time windows).
  * Current driver location/status.
* **Outputs:**
  * Optimized, ordered itinerary in strict JSON format.
  * Estimated time of arrival (ETA) per node.
* **Tools/Integrations:** Geocoding API mocks, distance matrix computations.

## 4. Strict Guidelines ("Qué hacer" vs "Qué NO hacer")

### SÍ (DO):
* **Layout:** Maintain elastic layouts using Flexbox (`flex`, `flex-col`, `flex-1`, `flex-grow`). A4 pages should be built using a vertical Flexbox container (`flex flex-col h-full justify-between max-h-full`) with an elastic body (`flex-1`) to distribute space evenly and prevent overflow.
* **Units:** Control margins and dimensions in `mm` or percentages relative to the A4 container.
* **Icons:** Use `lucide-react` for consistent iconography.
* **Problem Solving:** Adapt, reduce spacing, or reorganize the visual structure (using CSS Grid/Flexbox) if content risks overflowing.

### NO (DO NOT):
* **Data Integrity:** DO NOT delete actual text, dynamic content, or user data just to make it fit on a page.
* **Styling Tools:** DO NOT introduce external CSS libraries or frameworks outside of Tailwind CSS.
* **Colors:** DO NOT use hardcoded hex values; always rely on `tailwind.config.ts` theme definitions.
