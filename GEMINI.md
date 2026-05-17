# Gemini CLI & Interaction Guidelines (GEMINI.md)

## 1. Model Tiering
The project leverages different Gemini models based on the complexity of the task to optimize speed and cost-effectiveness.

*   **Gemini 1.5 Pro / Gemini 2.5 (High Complexity):**
    *   **Use Cases:** Complex design analysis, deep architectural decisions, refactoring core route optimization logic (`optimize-delivery-routes.ts`), resolving intricate TypeScript typing issues across multiple domains, and generating highly structured, multi-step execution plans.
    *   **Characteristics:** Larger context window, deeper reasoning capabilities.

*   **Gemini 1.5 Flash (High Speed / Low Latency):**
    *   **Use Cases:** Fast code completion, generating boilerplate components, writing basic unit tests, drafting user stories, and minor styling adjustments within the A4 layout constraints.
    *   **Characteristics:** Optimized for speed and lower token cost for repetitive or well-defined tasks.

## 2. CLI & MCP Configuration
Configuration parameters for standardizing the local development environment when using the Gemini CLI and Model Context Protocol (MCP).

*   **Terminal Initialization:**
    *   Ensure the CLI is initialized with the correct project context.
    *   `export GOOGLE_GENAI_USE_VERTEXAI=true` (if applicable for enterprise routing).
    *   Default model flag: `--model gemini-1.5-pro` for standard refactoring sessions.

*   **Genkit Environment Variables:**
    *   Set `.env.local` with required credentials.
    *   `GENKIT_ENV=dev` (for local simulation).
    *   `GOOGLE_API_KEY=...` (required for model invocation).

*   **MCP (Model Context Protocol) Servers:**
    *   If the project requires interaction with external map APIs (e.g., Google Maps Platform) or databases (e.g., Firebase Firestore, PostgreSQL), configure MCP servers in the environment initialization script.
    *   Ensure the agent has network access to MCP endpoints before invoking route optimization flows.

## 3. Structured Outputs Constraints
When generating responses, particularly within the Genkit flows (`optimize-delivery-routes.ts`), the model MUST adhere to strict structured outputs to ensure backend stability.

*   **JSON Schema Enforcement:**
    *   Use the `responseSchema` configuration in Genkit to force the model to output valid, parseable JSON.
    *   **NEVER** return markdown code blocks (e.g., \`\`\`json ... \`\`\`) when the backend explicitly expects a JSON object. Ensure `responseMimeType: "application/json"` is set.
*   **Data Types:**
    *   Strictly validate dates (ISO 8601), coordinates (Float/Number), and boolean flags.
*   **Error Handling:**
    *   If optimization fails or partial data is provided, the JSON structure must include standard `error` or `warnings` arrays to be gracefully handled by the Next.js frontend.
