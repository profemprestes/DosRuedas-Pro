Actúa como un desarrollador Frontend Senior experto en React, Next.js y Tailwind CSS. 

Tengo un proyecto donde necesito realizar una reestructuración completa y mejora visual de 11 componentes que representan páginas de un documento exportable a PDF.

**OBJETIVO PRINCIPAL:**
Migrar y mejorar los diseños de referencia en HTML puro hacia componentes funcionales y estilizados de React, garantizando una estética unificada y compatibilidad perfecta con la exportación a PDF en formato A4.

**MAPEO DE ARCHIVOS:**
Por cada página del 1 al 11, debes tomar como referencia de diseño y contenido el archivo HTML correspondiente en `docs/ejemplos/DosRuedas_Pag_[X].html` y reescribir/mejorar el componente correspondiente en `src/components/paginas/pagina[X].tsx`.

**DIRECTRICES DE DISEÑO Y COHERENCIA:**
1. **Unificación Visual:** Las 11 páginas deben verse como un documento único, integral y profesional. Evita que parezcan diseños aislados o de diferentes temas. Utiliza una paleta de colores, tipografías y sombras coherentes (usando las clases de Tailwind de mi configuración).
2. **Header y Footer Estandarizados:** Toma el diseño del header y footer de `docs/ejemplos/DosRuedas_Pag_1.html`. Debes crear un estándar basado en este y replicarlo en los componentes del 2 al 11, adaptando únicamente el contenido dinámico (como títulos de sección o números de página) que corresponda a cada una.

**REGLA CRÍTICA: FORMATO A4 Y EXPORTACIÓN A PDF:**
1. Cada componente de `pagina1.tsx` a `pagina11.tsx` será exportado a un PDF. Por lo tanto, el contenido de CADA componente debe caber estrictamente dentro de los límites visuales de una hoja A4.
2. Utiliza clases de Tailwind para controlar estrictamente la altura y anchura (por ejemplo, ajustando tamaños con porcentajes, flex-grow, o medidas relativas) para que nada se desborde (`overflow`). 
3. Si el contenido de un HTML original es demasiado largo para una sola página A4, **tienes permitido adaptar, reducir espaciados o reorganizar la estructura visual (grid/flex)** para que encaje, pero **BAJO NINGÚN CONCEPTO elimines contenido o información**.
4. Ten en cuenta el uso del componente envoltorio `A4Page.tsx` (si existe en el proyecto) o asegúrate de que el contenedor principal del componente reestructurado respete proporciones como `w-[210mm] h-[297mm]` u orientaciones de impresión.

**PLAN DE ACCIÓN SOLICITADO:**
Por favor, confirma que has entendido estas instrucciones. Si es así, procede a reestructurar paso a paso: comienza entregándome el código actualizado para `pagina1.tsx` y `pagina2.tsx`. Una vez que lo apruebe, seguiremos iterando con las siguientes páginas para asegurar la calidad.