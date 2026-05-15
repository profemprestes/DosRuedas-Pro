# Prompt para Búsqueda de Activos Visuales: Envíos DosRuedas

Este documento contiene un prompt optimizado para ser utilizado en **Gemini** (o cualquier LLM avanzado) para obtener una lista completa de imágenes y elementos visuales para la aplicación, siguiendo el contexto de **Argentina (Buenos Aires)**.

---

## El Prompt Estratégico

Copia y pega el siguiente bloque en Gemini:

```text
Actúa como un Director de Arte y Experto en Logística B2B en Argentina. Necesito planificar toda la identidad visual y los activos de imagen para "Envíos DosRuedas", una empresa de motomensajería de alta gama y logística de última milla con sede en Buenos Aires.

Contexto del Negocio:
- Ciudad: Buenos Aires (enfocado en Microcentro, Puerto Madero, Palermo y accesos rápidos).
- Servicio: Mensajería corporativa, entrega de e-commerce y soluciones tecnológicas de tracking.
- Identidad Visual: Azul marino profundo (#0a1128) y Oro/Amarillo vibrante (#fbbd08).
- Diferencial: Rapidez, tecnología IA para rutas y confianza "grado militar".

Tu Tarea:
Genera una lista de al menos 15 activos visuales siguiendo el formato JSON que te proporcionaré abajo. Necesito:
1. Imágenes de héroe (Hero images) que muestren hitos de Buenos Aires (ej. Obelisco, Av. 9 de Julio) con motos/bicis de reparto modernas.
2. Iconos conceptuales para servicios (ej. "Entrega Flash", "Seguridad Premium", "Tracking Real-time").
3. Banners para redes sociales (LinkedIn/Instagram) con estética corporativa.
4. Imágenes de back-office (depósitos modernos, tablets con mapas de CABA, personal con uniformes premium).

Restricciones de la respuesta:
- El "imageHint" debe estar en inglés y ser muy descriptivo para buscadores como Unsplash o generadores como Midjourney/DALL-E.
- Las descripciones deben reflejar el contexto de "Última Milla" en Buenos Aires.
- Devuelve la respuesta ÚNICAMENTE como un objeto JSON bajo la clave "placeholderImages", manteniendo este esquema:

{
  "placeholderImages": [
    {
      "id": "slug-unico-en-ingles",
      "description": "Descripción detallada en español para el equipo de diseño",
      "imageUrl": "https://picsum.photos/seed/<seed-id>/<width>/<height>",
      "imageHint": "keyword1 keyword2 descriptivas en inglés"
    }
  ]
}

Por favor, sé creativo con los seeds y asegúrate de que los hints capturen la esencia de la arquitectura de Buenos Aires y la dinámica del tránsito porteño.
```

---

## Cómo usar los resultados

1.  **Ejecuta el prompt** en Gemini.
2.  **Copia el JSON** resultante.
3.  **Pégalo** en tu archivo `src/app/lib/placeholder-images.json` (o `src/lib/placeholder-images.json`).
4.  **Referencias:** Ahora podrás usar esos nuevos `id` en tus componentes React de la siguiente manera:

```tsx
const miImagen = PlaceHolderImages.find(img => img.id === 'nuevo-id-generado');
```

## Sugerencias de búsqueda para Argentina:
- **Keywords para imageHint:** "Buenos Aires skyline", "Obelisco delivery", "Puerto Madero logistics", "CABA urban traffic moto", "Argentine courier service".
- **Estética:** Busca "cinematic lighting", "high tech logistics", "dark blue branding".
