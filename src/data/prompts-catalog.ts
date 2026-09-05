export type PromptCategory =
  | 'Servicios'
  | 'Sellos'
  | 'Frases Hero'
  | 'Parches & Wordmarks'
  | 'Cifras 3D'
  | 'Embalaje'
  | 'Social & Status';

export interface PromptItem {
  id: string;
  code: string;
  badge: string;
  category: PromptCategory;
  titulo: string;
  textoRender: string;
  descripcion: string;
  iconName:
    | 'Zap'
    | 'Truck'
    | 'ShieldCheck'
    | 'Store'
    | 'Package'
    | 'Award'
    | 'Tag'
    | 'Sparkles'
    | 'Radio'
    | 'Bookmark'
    | 'TrendingUp'
    | 'Box'
    | 'CheckCircle2'
    | 'Hash';
  targetFile: string;
  targetComponent: string;
  aspectRatio: '16:9' | '3:2' | '1:1' | '9:16' | '4:3' | '4:5';
  resolution: '1K' | '2K' | '4K' | '8K';
  engine: string;
  colorGlow: string;
  promptBody: string;
  negativeTokens?: string;
}

export const TYPE_ANCHOR = `Bold condensed all-caps sans-serif lettering inspired by Anton and Bebas Neue display typography, heavy visual weight, tight letter-spacing, strictly governed by the Envíos DosRuedas 3-color palette: Egyptian Royal Navy Blue (#0636A5 / #021440), Electric Kinetic Yellow (#FFF12E / #FFEC01), and Pure White (#FFFFFF). Render the quoted text exactly on a single line, with zero spelling mistakes, no unwanted artifacts, and no third-party logos. Clean pure-white or deep-blue ground as specified, centered composition with generous negative space for UI cropping.`;

export const PROMPTS_CATALOG: PromptItem[] = [
  // --- SERVICIOS ---
  {
    id: 'T1',
    code: 'T1',
    badge: 'SERVICIOS · 3D EXTRUIDO',
    category: 'Servicios',
    titulo: 'ENVÍOS EXPRESS',
    textoRender: '"ENVÍOS EXPRESS"',
    descripcion: 'Texto 3D con frente en amarillo cinético y laterales en azul institucional.',
    iconName: 'Zap',
    targetFile: 'type-envios-express.png',
    targetComponent: 'ExpressHero.tsx / ServiceCard.tsx',
    aspectRatio: '3:2',
    resolution: '2K',
    engine: 'Midjourney v6.0',
    colorGlow: 'from-[#FFF12E]/25 to-transparent',
    promptBody: `The text "ENVÍOS EXPRESS" as chunky 3D extruded lettering in heavy Anton font style. Glossy polished electric kinetic yellow (#FFF12E) front faces with clean linear specular highlights. The lateral extrusion, extending one letter-height deep, is rendered in rich Egyptian royal navy blue (#0636A5) with smooth ambient occlusion shading. Framed at a dynamic three-quarter perspective angle from the left to showcase extrusion depth. Resting on a seamless pure white studio ground (#FFFFFF) with a soft ambient contact shadow and a faint yellow specular ground reflection. Upper-left directional key light casting crisp edge bevel highlights. High-end PBR materials, strict 3-color brand compliance, 8k resolution. --ar 3:2 --style raw --v 6.0`,
    negativeTokens: 'military, tactical camo, weapons, grunge, low-res, blurry text, distorted letters'
  },
  {
    id: 'T2',
    code: 'T2',
    badge: 'SERVICIOS · 3D EXTRUIDO',
    category: 'Servicios',
    titulo: 'ENVÍOS LOWCOST',
    textoRender: '"ENVÍOS LOWCOST"',
    descripcion: 'Texto 3D con frente blanco mate, perfil amarillo cinético y laterales en azul institucional.',
    iconName: 'Truck',
    targetFile: 'type-envios-lowcost.png',
    targetComponent: 'LowCostHero.tsx / LowCostSheet.tsx',
    aspectRatio: '3:2',
    resolution: '2K',
    engine: 'Midjourney v6.0',
    colorGlow: 'from-[#0950F6]/25 to-transparent',
    promptBody: `The text "ENVÍOS LOWCOST" as chunky 3D extruded lettering in heavy Anton display font style. Smooth matte pure-white front faces (#FFFFFF), outlined by a thin, sharp perimeter border in glossy electric kinetic yellow (#FFF12E). The lateral extrusion, extending one letter-height deep, is rendered in solid Egyptian royal navy blue (#0636A5). Framed at a dynamic three-quarter perspective angle from the left, resting on a pure white studio ground (#FFFFFF) with a soft contact shadow beneath. Soft directional key light from the upper-left casting clean edge highlights. Octane render style, strict 3-color brand compliance, 8k resolution. --ar 3:2 --style raw --v 6.0`,
    negativeTokens: 'military, dark dirty textures, artifacts, noise, low poly'
  },
  {
    id: 'T3',
    code: 'T3',
    badge: 'SERVICIOS · 3D EXTRUIDO',
    category: 'Servicios',
    titulo: 'ENVÍOS FLEX',
    textoRender: '"ENVÍOS FLEX"',
    descripcion: 'Texto 3D en azul institucional con extrusión amarilla y rayo cinético MercadoLibre Flex.',
    iconName: 'ShieldCheck',
    targetFile: 'type-envios-flex.png',
    targetComponent: 'FlexHero.tsx (MercadoLibre Flex)',
    aspectRatio: '3:2',
    resolution: '2K',
    engine: 'Midjourney v6.0',
    colorGlow: 'from-[#22c55e]/25 to-transparent',
    promptBody: `The text "ENVÍOS FLEX" as chunky 3D extruded lettering in Anton font style. Glossy deep royal navy blue front faces (#0636A5) with a vibrant kinetic yellow lateral extrusion (#FFF12E). A stylized electric yellow lightning bolt mark (#FFF12E) sits dynamically immediately after the last letter 'X'. Framed at a three-quarter perspective angle on a seamless pure white ground (#FFFFFF) with a soft contact drop shadow. Upper-left soft studio lighting with crisp specular reflections. High-end 3D render, strict 3-color brand compliance, 8k resolution. --ar 3:2 --style raw --v 6.0`,
    negativeTokens: 'dirty textures, illegible typography, extra characters'
  },
  {
    id: 'T4',
    code: 'T4',
    badge: 'SERVICIOS · 3D TEXTURA',
    category: 'Servicios',
    titulo: 'PLAN EMPRENDEDORES',
    textoRender: '"PLAN EMPRENDEDORES"',
    descripcion: 'Texto 3D con textura de cartón kraft, cinta de embalaje amarilla y laterales en azul.',
    iconName: 'Store',
    targetFile: 'type-plan-emprendedores.png',
    targetComponent: 'EmprendedoresHero.tsx',
    aspectRatio: '3:2',
    resolution: '2K',
    engine: 'Midjourney v6.0',
    colorGlow: 'from-[#FFF12E]/25 to-transparent',
    promptBody: `The text "PLAN EMPRENDEDORES" as heavy 3D extruded lettering. The front faces feature a realistic matte kraft cardboard texture with fine corrugation fibers, crossed horizontally across the lower third by a strip of glossy kinetic yellow packaging tape (#FFF12E). The lateral block extrusion is rendered in deep Egyptian royal navy blue (#0636A5). Dynamic three-quarter view on a seamless pure white studio floor (#FFFFFF) with soft contact occlusion shadows. Warm diffused daylight mixed with soft upper-left studio fill. Photorealistic PBR render, 8k resolution. --ar 3:2 --style raw --v 6.0`,
    negativeTokens: 'torn edges, distressed grunge, military gear, dirt'
  },
  {
    id: 'T5',
    code: 'T5',
    badge: 'SERVICIOS · 3D TECH',
    category: 'Servicios',
    titulo: 'E-COMMERCE & 3PL',
    textoRender: '"E-COMMERCE & 3PL"',
    descripcion: 'Texto 3D en amarillo con micro-cuadrícula de tracking y laterales azul marino.',
    iconName: 'Package',
    targetFile: 'type-ecommerce-3pl.png',
    targetComponent: 'FulfillmentHero.tsx (Friuli 1972)',
    aspectRatio: '3:2',
    resolution: '2K',
    engine: 'Midjourney v6.0',
    colorGlow: 'from-[#0950F6]/25 to-transparent',
    promptBody: `The text "E-COMMERCE & 3PL" as chunky 3D extruded lettering in Anton display font style. Vibrant kinetic yellow front faces (#FFF12E) featuring an embossed, subtle geometric micro-grid pattern reminiscent of digital tracking matrices. The lateral extrusion block is rendered in solid Egyptian royal navy blue (#0636A5). Three-quarter perspective angle from the left, resting on a pure white ground (#FFFFFF) with a soft contact drop shadow. Crisp directional studio lighting from the upper-left, sharp beveled edges, high-tech logistics aesthetic, 8k resolution. --ar 3:2 --style raw --v 6.0`,
    negativeTokens: 'pixelated, low poly, noisy background, unreadable signs'
  },

  // --- SELLOS ---
  {
    id: 'T6',
    code: 'T6',
    badge: 'SELLOS · BADGE CIRCULAR',
    category: 'Sellos',
    titulo: 'SAME DAY',
    textoRender: '"SAME DAY"',
    descripcion: 'Sello circular 3D azul y amarillo con cronómetro para entrega en el día.',
    iconName: 'Award',
    targetFile: 'type-sello-same-day.png',
    targetComponent: 'Badges de entrega en el día / Cards',
    aspectRatio: '1:1',
    resolution: '1K',
    engine: 'Midjourney v6.0',
    colorGlow: 'from-[#FFF12E]/25 to-transparent',
    promptBody: `A circular 3D embossed badge in glossy Egyptian royal navy blue (#0636A5) with a thick kinetic yellow outer ring (#FFF12E). The text "SAME DAY" is curved boldly along the upper arc in crisp yellow lettering, with a clean yellow minimalist delivery stopwatch icon embossed in the center. Slight metallic chamfered bevel on the perimeter. Front-facing view with a slight 5-degree perspective tilt, centered on a pure white background (#FFFFFF) with a soft ambient contact shadow. Diffused studio lighting, ultra-sharp vector-like 3D render, 4k. --ar 1:1 --style raw --v 6.0`
  },
  {
    id: 'T7',
    code: 'T7',
    badge: 'SELLOS · BADGE CIRCULAR',
    category: 'Sellos',
    titulo: 'NEXT DAY',
    textoRender: '"NEXT DAY"',
    descripcion: 'Sello circular 3D amarillo con texto NEXT DAY en azul y arco de amanecer.',
    iconName: 'Award',
    targetFile: 'type-sello-next-day.png',
    targetComponent: 'Tarjetas LowCost diferidas',
    aspectRatio: '1:1',
    resolution: '1K',
    engine: 'Midjourney v6.0',
    colorGlow: 'from-[#FFF12E]/25 to-transparent',
    promptBody: `A circular 3D glossy badge in electric kinetic yellow (#FFF12E) with a deep Egyptian royal navy blue outer border (#0636A5). The text "NEXT DAY" is set straight across the center in heavy navy blue sans-serif typography, with a thin stylized navy sunrise arc icon positioned directly above the text. Subtle geometric bevel, perfectly centered on a pure white ground (#FFFFFF) with a soft drop shadow. Upper-left soft studio lighting, clean specular highlights, 4k resolution. --ar 1:1 --style raw --v 6.0`
  },
  {
    id: 'T8',
    code: 'T8',
    badge: 'SELLOS · SLA BADGE',
    category: 'Sellos',
    titulo: '24 HS',
    textoRender: '"24 HS"',
    descripcion: 'Sello circular blanco con anillos azul y amarillo y el texto 24 HS.',
    iconName: 'Award',
    targetFile: 'type-sello-24hs.png',
    targetComponent: 'SLA de ruteo agrupado',
    aspectRatio: '1:1',
    resolution: '1K',
    engine: 'Midjourney v6.0',
    colorGlow: 'from-[#0950F6]/25 to-transparent',
    promptBody: `A circular 3D badge in pure white (#FFFFFF) framed by an outer Egyptian royal navy blue ring (#0636A5) and an inner kinetic yellow accent ring (#FFF12E). The text "24 HS" is rendered in massive, heavy navy blue numbers and letters filling the center, complemented by a tiny kinetic yellow clock hand mark beneath. Straight-on composition, centered on pure white with a soft contact shadow. Crisp lighting, pristine clean vector 3D look, 4k resolution. --ar 1:1 --style raw --v 6.0`
  },
  {
    id: 'T9',
    code: 'T9',
    badge: 'SELLOS · TAG COLGANTE',
    category: 'Sellos',
    titulo: 'SIN CARGO',
    textoRender: '"SIN CARGO"',
    descripcion: 'Tag rectangular 3D azul marino con cordón amarillo y texto SIN CARGO.',
    iconName: 'Tag',
    targetFile: 'type-sello-sin-cargo.png',
    targetComponent: 'Pickup bonificado / Promociones',
    aspectRatio: '1:1',
    resolution: '1K',
    engine: 'Midjourney v6.0',
    colorGlow: 'from-[#FFF12E]/25 to-transparent',
    promptBody: `A rounded rectangular 3D hanging tag in glossy Egyptian royal navy blue (#0636A5), suspended from a short looped cord in kinetic yellow (#FFF12E). The text "SIN CARGO" is embossed boldly across the tag in kinetic yellow lettering, with a clean circular reinforced punch hole at the top. Displayed at a dynamic slight diagonal tilt, centered on a pure white ground (#FFFFFF) with soft realistic drop shadows. Directional studio light from upper-left, 4k resolution. --ar 1:1 --style raw --v 6.0`
  },

  // --- FRASES HERO ---
  {
    id: 'T10',
    code: 'T10',
    badge: 'FRASES HERO · PANORÁMICO',
    category: 'Frases Hero',
    titulo: 'HOY MISMO',
    textoRender: '"HOY MISMO"',
    descripcion: 'Texto en amarillo cinético con estelas de velocidad sobre fondo azul profundo.',
    iconName: 'Sparkles',
    targetFile: 'type-hoy-mismo.png',
    targetComponent: 'Hero Banner / Stories',
    aspectRatio: '16:9',
    resolution: '2K',
    engine: 'Midjourney v6.0',
    colorGlow: 'from-[#FFF12E]/25 to-transparent',
    promptBody: `The text "HOY MISMO" in monumental uppercase lettering spanning the frame in vibrant electric kinetic yellow (#FFF12E) against a solid deep royal navy blue background (#0636A5, #021440). Subtle horizontal kinetic speed lines and faint vector motion trails trail to the left of the letters, while the lettering itself remains razor-sharp. Panoramic 16:9 composition, text centered slightly above the vertical midpoint leaving breathing room below. Clean flat graphic styling with a subtle ambient glow, high resolution. --ar 16:9 --style raw --v 6.0`
  },
  {
    id: 'T11',
    code: 'T11',
    badge: 'FRASES HERO · CONVERSIÓN',
    category: 'Frases Hero',
    titulo: 'COTIZÁ TU ENVÍO',
    textoRender: '"COTIZÁ TU ENVÍO"',
    descripcion: 'Texto en blanco con sombra proyectada en amarillo cinético y flecha chevron.',
    iconName: 'Zap',
    targetFile: 'type-cotiza-tu-envio.png',
    targetComponent: 'CTAFinal.tsx / Conversion Header',
    aspectRatio: '16:9',
    resolution: '2K',
    engine: 'Midjourney v6.0',
    colorGlow: 'from-[#FFF12E]/25 to-transparent',
    promptBody: `The text "COTIZÁ TU ENVÍO" in large, bold uppercase lettering styled in heavy Anton/Bebas Neue display font in crisp pure white (#FFFFFF). The lettering features a sharp, solid drop-shadow offset to the lower-right in vibrant electric kinetic yellow (#FFF12E). Immediately following the last letter 'O', a dynamic kinetic yellow arrow chevron mark (#FFF12E) points to the right. Set against a solid Egyptian royal navy blue ground (#0636A5) with a delicate procedural white vector grid. Centered wide 16:9 composition with generous margins. Ultra-clean graphic design, 8k resolution. --ar 16:9 --style raw --v 6.0`
  },
  {
    id: 'T12',
    code: 'T12',
    badge: 'FRASES HERO · NEÓN 3D',
    category: 'Frases Hero',
    titulo: 'ENTREGA EN EL DÍA',
    textoRender: '"ENTREGA EN EL DÍA"',
    descripcion: 'Letras tubulares estilo neón arquitectónico amarillo sobre panel acústico azul.',
    iconName: 'Radio',
    targetFile: 'type-entrega-en-el-dia.png',
    targetComponent: 'Banners de confianza / Redes',
    aspectRatio: '16:9',
    resolution: '2K',
    engine: 'Midjourney v6.0',
    colorGlow: 'from-[#FFF12E]/25 to-transparent',
    promptBody: `The text "ENTREGA EN EL DÍA" in bold uppercase letters rendered from smooth, glossy rounded tubes resembling a modern high-end architectural neon sign. The tubes glow in vibrant electric kinetic yellow (#FFF12E), mounted flush against a dark corporate navy blue acoustic panel (#021440). Wide 16:9 composition, text perfectly centered with balanced margins. Atmospheric self-illuminated lighting with soft yellow light spilling onto the deep blue backing, zero glare, ultra-realistic 3D render, 8k resolution. --ar 16:9 --style raw --v 6.0`
  },

  // --- PARCHES & WORDMARKS ---
  {
    id: 'T13',
    code: 'T13',
    badge: 'PARCHES · BORDADO TÁCTICO URBANO',
    category: 'Parches & Wordmarks',
    titulo: 'MDQ (Parche)',
    textoRender: '"MDQ"',
    descripcion: 'Parche bordado circular con base azul marino, borde amarillo y letras MDQ en relieve.',
    iconName: 'Bookmark',
    targetFile: 'type-parche-mdq.png',
    targetComponent: 'Badges de identidad local / Footer',
    aspectRatio: '1:1',
    resolution: '1K',
    engine: 'Midjourney v6.0',
    colorGlow: 'from-[#FFF12E]/25 to-transparent',
    promptBody: `A circular embroidered fabric patch with a clean deep royal navy blue twill fabric base (#0636A5), framed by a thick merrowed border in electric kinetic yellow thread (#FFF12E). The text "MDQ" is stitched prominently across the center in raised, heavy yellow embroidery thread, showing tactile realistic thread weaves and 3D puff texture. Front-facing view, centered on a pure white background (#FFFFFF) with a soft contact drop shadow. Soft macro studio lighting from the upper-left, 4k photorealistic render. --ar 1:1 --style raw --v 6.0`,
    negativeTokens: 'military insignia, camouflage, war, weaponry, combat'
  },
  {
    id: 'T14',
    code: 'T14',
    badge: 'STICKERS · TROQUELADO VINILO',
    category: 'Parches & Wordmarks',
    titulo: 'FRIULI 1972',
    textoRender: '"FRIULI 1972"',
    descripcion: 'Sticker troquelado de vinilo con la dirección central en Chauvín sobre pastilla amarilla.',
    iconName: 'Tag',
    targetFile: 'type-sticker-friuli-1972.png',
    targetComponent: 'Base de operaciones / Contacto',
    aspectRatio: '3:2',
    resolution: '1K',
    engine: 'Midjourney v6.0',
    colorGlow: 'from-[#FFF12E]/25 to-transparent',
    promptBody: `A die-cut glossy vinyl sticker featuring the text "FRIULI 1972" in heavy Egyptian royal navy blue sans-serif (#0636A5) set within a rounded horizontal pill shape in kinetic yellow (#FFF12E), encased by a crisp 2mm white die-cut border (#FFFFFF). The sticker has a subtle glossy sheen and a tiny curled corner on the bottom-right showing the white adhesive backing, resting at a gentle 5-degree angle on a seamless pure white surface with a soft contact shadow. Macro studio lighting, 4k. --ar 3:2 --style raw --v 6.0`
  },
  {
    id: 'T15',
    code: 'T15',
    badge: 'WORDMARK · IDENTIDAD OFICIAL',
    category: 'Parches & Wordmarks',
    titulo: 'DOSRUEDAS (Wordmark)',
    textoRender: '"DOSRUEDAS"',
    descripcion: 'Wordmark tipográfico en azul institucional con contraformas amarillas y subrayado cinético.',
    iconName: 'Sparkles',
    targetFile: 'type-wordmark-dosruedas.png',
    targetComponent: 'Logomarca secundaria / Merchandising',
    aspectRatio: '3:2',
    resolution: '2K',
    engine: 'Midjourney v6.0',
    colorGlow: 'from-[#0950F6]/25 to-transparent',
    promptBody: `The text "DOSRUEDAS" as an energetic single-line wordmark in heavy Egyptian royal navy blue (#0636A5), with the interior letter counters subtly accented in electric kinetic yellow (#FFF12E). The typography is slightly italicized to convey aerodynamic speed, underlined by a sharp kinetic yellow horizontal stroke that terminates in a clean minimalist motorcycle wheel circle. Wide 3:2 layout, wordmark centered on a pure white background with generous padding. Razor-sharp vector graphic execution, 8k resolution. --ar 3:2 --style raw --v 6.0`
  },

  // --- CIFRAS 3D ---
  {
    id: 'T16',
    code: 'T16',
    badge: 'CIFRAS 3D · CROMO PULIDO',
    category: 'Cifras 3D',
    titulo: '+50K (Envíos)',
    textoRender: '"+50K"',
    descripcion: 'Cifra 3D monumental con acabado espejo cromado y reflejos azul/amarillo.',
    iconName: 'TrendingUp',
    targetFile: 'type-cifra-50k.png',
    targetComponent: 'TrustBar.tsx (Envíos completados)',
    aspectRatio: '1:1',
    resolution: '2K',
    engine: 'Midjourney v6.0',
    colorGlow: 'from-[#0950F6]/25 to-transparent',
    promptBody: `The numerical text "+50K" as monumental 3D extruded numerals with a mirror-finish chrome surface that reflects a clean studio environment of deep royal navy blue (#0636A5) and electric kinetic yellow (#FFF12E). Thick block extrusion, standing upright on a pure white ground (#FFFFFF) with a crisp contact reflection and soft ambient occlusion shadow. Front-facing view with a slight low-angle tilt to convey authority and scale. High-end Octane render, razor-sharp specular edge highlights, 8k resolution. --ar 1:1 --style raw --v 6.0`
  },
  {
    id: 'T17',
    code: 'T17',
    badge: 'CIFRAS 3D · EFECTIVIDAD',
    category: 'Cifras 3D',
    titulo: '0 (Extraviados)',
    textoRender: '"0"',
    descripcion: 'Cifra 3D "0" en azul institucional con tilde de verificación amarillo en su interior.',
    iconName: 'ShieldCheck',
    targetFile: 'type-cifra-cero.png',
    targetComponent: 'TrustBar.tsx (Paquetes extraviados)',
    aspectRatio: '1:1',
    resolution: '2K',
    engine: 'Midjourney v6.0',
    colorGlow: 'from-[#22c55e]/25 to-transparent',
    promptBody: `The single numerical digit "0" as a massive, glossy 3D numeral in Egyptian royal navy blue (#0636A5) with a beveled inner rim in electric kinetic yellow (#FFF12E). Nestled securely inside the center counter of the zero is a clean 3D checkmark icon in kinetic yellow. Standing upright on a seamless pure white surface (#FFFFFF) with a soft ambient contact shadow. Front-facing centered composition, generous negative space. Soft studio key lighting with clean top highlights, 8k resolution. --ar 1:1 --style raw --v 6.0`
  },
  {
    id: 'T18',
    code: 'T18',
    badge: 'CIFRAS 3D · TRAYECTORIA',
    category: 'Cifras 3D',
    titulo: '+7 AÑOS',
    textoRender: '"+7 AÑOS"',
    descripcion: 'Cifra 3D en amarillo cinético con extrusión en azul institucional.',
    iconName: 'TrendingUp',
    targetFile: 'type-cifra-7-anos.png',
    targetComponent: 'TrustBar.tsx / Sobre Nosotros',
    aspectRatio: '1:1',
    resolution: '2K',
    engine: 'Midjourney v6.0',
    colorGlow: 'from-[#FFF12E]/25 to-transparent',
    promptBody: `The text "+7 AÑOS" as bold 3D extruded lettering where the numeral "7" is noticeably taller and heavier than the word "AÑOS". The front faces are coated in vibrant glossy electric kinetic yellow (#FFF12E), backed by a deep Egyptian royal navy blue extrusion (#0636A5) with smooth ambient occlusion shading. Displayed at a slight three-quarter angle from the left, standing on a pure white ground (#FFFFFF) with a soft contact shadow. Upper-left studio light casting crisp bevel highlights, 8k resolution. --ar 1:1 --style raw --v 6.0`
  },

  // --- EMBALAJE & LOGÍSTICA ---
  {
    id: 'T19',
    code: 'T19',
    badge: 'EMBALAJE · SELLO DE GOMA',
    category: 'Embalaje',
    titulo: 'FRÁGIL',
    textoRender: '"FRÁGIL"',
    descripcion: 'Sello de tinta de goma azul marino estampado directamente sobre cartón kraft corrugado.',
    iconName: 'Box',
    targetFile: 'type-sello-fragil.png',
    targetComponent: 'Packaging mockups / Fondos kraft',
    aspectRatio: '1:1',
    resolution: '1K',
    engine: 'Midjourney v6.0',
    colorGlow: 'from-[#FFF12E]/25 to-transparent',
    promptBody: `The text "FRÁGIL" stamped in heavy Egyptian royal navy blue rubber-stamp ink (#0636A5) directly onto authentic fibrous kraft cardboard. The stamp shows authentic micro-imperfections, slightly distressed ink texture, and realistic porous ink absorption. Enclosed by a rectangular stamped border with rounded corners and a small kinetic yellow corner mark (#FFF12E). Top-down flat-lay perspective, centered, the textured brown kraft paper fills the entire frame. Soft diffused natural daylight, macro photography look, 4k. --ar 1:1 --style raw --v 6.0`
  },
  {
    id: 'T20',
    code: 'T20',
    badge: 'EMBALAJE · SEÑALÉTICA',
    category: 'Embalaje',
    titulo: 'ESTE LADO ARRIBA',
    textoRender: '"ESTE LADO ARRIBA"',
    descripcion: 'Sello de tinta azul con texto y dos flechas verticales sobre cartón kraft.',
    iconName: 'Box',
    targetFile: 'type-sello-este-lado-arriba.png',
    targetComponent: 'Packaging mockups / Logística',
    aspectRatio: '1:1',
    resolution: '1K',
    engine: 'Midjourney v6.0',
    colorGlow: 'from-[#0950F6]/25 to-transparent',
    promptBody: `The text "ESTE LADO ARRIBA" stamped in deep Egyptian royal navy blue ink (#0636A5) on textured kraft cardboard, positioned directly beneath two bold, clean upward-pointing stamped arrows. The print displays authentic rubber-stamp texture with subtle distress along the edges, framed by a delicate stamped border. Direct top-down macro shot, perfectly centered, with the natural fibers and corrugated ribs of the kraft paper filling the background. Even studio daylight, 4k resolution. --ar 1:1 --style raw --v 6.0`
  },

  // --- SOCIAL & STATUS ---
  {
    id: 'T21',
    code: 'T21',
    badge: 'SOCIAL · LIVE GPS PILL',
    category: 'Social & Status',
    titulo: 'RUTEO ACTIVO',
    textoRender: '"RUTEO ACTIVO"',
    descripcion: 'Badge 3D tipo pastilla azul marino con luz LED amarilla pulsante para tracking.',
    iconName: 'Radio',
    targetFile: 'type-badge-ruteo-activo.png',
    targetComponent: 'Indicador GPS en vivo / Hero',
    aspectRatio: '3:2',
    resolution: '1K',
    engine: 'Midjourney v6.0',
    colorGlow: 'from-[#FFF12E]/25 to-transparent',
    promptBody: `A glossy 3D horizontal pill badge in deep Egyptian royal navy blue (#0636A5) with a refined 1px border in soft tech blue (#628FF9). The text "RUTEO ACTIVO" is rendered in crisp electric kinetic yellow (#FFF12E) in Bebas Neue font, preceded by a bright, glowing yellow circular LED status dot on the left. Floating weightlessly above a pure white background (#FFFFFF) with a soft contact drop shadow. Soft studio lighting with a delicate lens bloom on the active status dot, 4k resolution. --ar 3:2 --style raw --v 6.0`
  },
  {
    id: 'T22',
    code: 'T22',
    badge: 'SOCIAL · STATUS CHECK',
    category: 'Social & Status',
    titulo: 'ENTREGADO',
    textoRender: '"ENTREGADO"',
    descripcion: 'Badge 3D tipo pastilla blanca con borde azul marino y tilde de confirmación.',
    iconName: 'CheckCircle2',
    targetFile: 'type-badge-entregado.png',
    targetComponent: 'Notificaciones de tracking / SLA',
    aspectRatio: '3:2',
    resolution: '1K',
    engine: 'Midjourney v6.0',
    colorGlow: 'from-[#22c55e]/25 to-transparent',
    promptBody: `A glossy 3D horizontal pill badge in pure white (#FFFFFF) with an outer border in Egyptian royal navy blue (#0636A5). The text "ENTREGADO" is set in bold navy blue lettering, preceded by a solid kinetic yellow circular badge (#FFF12E) carrying an embossed navy blue checkmark icon. Floating slightly above a pure white ground with a soft ambient occlusion shadow beneath. Clean upper-left studio light, modern UI/UX design asset, 4k resolution. --ar 3:2 --style raw --v 6.0`
  },
  {
    id: 'T23',
    code: 'T23',
    badge: 'SOCIAL · COMUNIDAD IG',
    category: 'Social & Status',
    titulo: '#RUTASMDQ',
    textoRender: '"#RUTASMDQ"',
    descripcion: 'Hashtag en letras 3D de goma amarilla sobre fondo azul con línea de ruta punteada.',
    iconName: 'Hash',
    targetFile: 'type-hashtag-rutasmdq.png',
    targetComponent: 'Campañas de comunidad en Instagram',
    aspectRatio: '1:1',
    resolution: '1K',
    engine: 'Midjourney v6.0',
    colorGlow: 'from-[#FFF12E]/25 to-transparent',
    promptBody: `The hashtag text "#RUTASMDQ" in large, soft-touch matte 3D rubbery letters in vibrant electric kinetic yellow (#FFF12E), set against a solid Egyptian royal navy blue background (#0636A5). A subtle white and yellow dotted GPS route line weaves playfully behind and between the letters. Square 1:1 composition, text centered on a single line with generous breathing space. Soft directional studio lighting from the upper-left casting gentle drop shadows onto the blue backing, 4k resolution. --ar 1:1 --style raw --v 6.0`
  }
];
