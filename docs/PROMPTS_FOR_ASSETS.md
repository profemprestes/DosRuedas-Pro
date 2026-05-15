# Prompt para Búsqueda de Activos Visuales: Envíos DosRuedas

Este documento contiene un prompt optimizado para ser utilizado en **Gemini** (o cualquier LLM avanzado) para obtener una lista masiva y completa de imágenes y elementos visuales para la aplicación, siguiendo el contexto de **Argentina (Buenos Aires)**.

---

## El Prompt Estratégico (Versión Expandida)

Copia y pega el siguiente bloque en Gemini para obtener una base de datos visual completa:

```text
Actúa como un Director de Arte y Experto en Logística B2B en Argentina. Necesito planificar TODA la identidad visual y los activos de imagen para "Envíos DosRuedas", una empresa de motomensajería de alta gama y logística de última milla con sede en Buenos Aires.

Contexto del Negocio:
- Ciudad: Buenos Aires (enfocado en Microcentro, Puerto Madero, Palermo y accesos rápidos).
- Servicio: Mensajería corporativa, entrega de e-commerce y soluciones tecnológicas de tracking.
- Identidad Visual: Azul marino profundo (#0a1128) y Oro/Amarillo vibrante (#fbbd08).
- Diferencial: Rapidez, tecnología IA para rutas y confianza "grado militar".

Tu Tarea:
Genera una lista EXHAUSTIVA Y MASIVA (al menos 50 activos visuales) siguiendo el formato JSON que te proporcionaré abajo. Necesito cubrir todas estas categorías:
1. Imágenes de héroe (Hero images): Hitos de Buenos Aires (Obelisco, Av. 9 de Julio, Puente de la Mujer, Planetario) con motos/bicis de reparto modernas y uniformes premium.
2. Iconos conceptuales: "Entrega Flash", "Seguridad Premium", "Tracking Real-time", "Logística Inversa", "API de Integración", "Soporte Corporativo", "Almacenamiento Inteligente".
3. Banners para redes sociales: Estética corporativa para LinkedIn, Instagram y Facebook.
4. Imágenes de back-office: Depósitos modernos, tablets con mapas de CABA, personal operando dashboards de IA, motos eléctricas cargando.
5. Situaciones urbanas: Reparto en el tráfico porteño, entrega en edificios de oficinas de Puerto Madero, interacción con clientes corporativos.

Restricciones de la respuesta:
- El "imageHint" debe estar en inglés y ser extremadamente descriptivo para buscadores como Unsplash o generadores como Midjourney/DALL-E.
- Las descripciones deben reflejar el contexto de "Última Milla" en Buenos Aires y la elegancia de la marca.
- Devuelve la respuesta ÚNICAMENTE como un objeto JSON bajo la clave "placeholderImages", manteniendo este esquema:

{
  "placeholderImages": [
    {
      "id": "slug-unico-en-ingles",
      "description": "Descripción detallada en español para el equipo de diseño",
      "imageUrl": "https://picsum.photos/seed/<seed-id>/<width>/<height>",
      "imageHint": "keyword1 keyword2 keyword3 highly descriptive in english"
    }
  ]
}

Por favor, sé muy creativo con los seeds y asegúrate de que los hints capturen la esencia de la arquitectura de Buenos Aires, la luz del atardecer en la ciudad y la dinámica del transporte de alta gama.
```

---

## Cómo usar los resultados

1.  **Ejecuta el prompt** en Gemini. Si se corta la respuesta, dile "Continúa generando el JSON".
2.  **Copia el JSON** resultante.
3.  **Pégalo** en tu archivo `src/app/lib/placeholder-images.json`.
4.  **Referencias:** Ahora podrás usar esos nuevos `id` en tus componentes React para dar vida a toda la propuesta comercial y la web.

## Sugerencias de búsqueda para Argentina:
- **Keywords para imageHint:** "Buenos Aires skyline dawn", "Puerto Madero business district", "Microcentro traffic motorcycle delivery", "high-end logistics facility", "digital tracking dashboard map".
- **Estética:** Busca "cinematic teal and orange", "corporate dark mode", "premium gold accents", "fast motion blur".
