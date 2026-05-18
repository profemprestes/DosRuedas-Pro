'use client';

import React, { useState } from 'react';
import { Package, Zap, Store, ShieldCheck, TrendingUp, CheckCircle2 } from 'lucide-react';

const promptsData = [
  {
    id: 1,
    titulo: "Hub Logístico B2B (Portada/3PL)",
    descripcion: "Para portada principal",
    icono: Package,
    promptText: "Subject: Abstract background showing a clean, well-organized regional e-commerce fulfillment warehouse. Medium-sized scale, relatable for local businesses. Shelves filled with perfectly aligned cardboard boxes. Aesthetics: Professional 3PL operations, sleek, dark, and highly reliable. Deep navy blue base (#060B19) with subtle, non-intrusive electric blue (#2563eb) and amber-yellow (#fbc107) ambient lighting. Photography: Shot on 50mm lens, moody exposure. Shallow depth of field (bokeh). 8k, photorealistic. Layouts: Center composition, ample negative space. --ar 4:5 --style raw --v 6.0"
  },
  {
    id: 2,
    titulo: "Velocidad Express",
    descripcion: "Para entregas en 24h",
    icono: Zap,
    promptText: "Subject: A cinematic, high-speed tracking shot of a modern urban street at dusk. Heavy motion blur on the background city lights. Subtle amber yellow (#fbc107) streetlights reflecting heavily on wet asphalt. Aesthetics: Extreme speed, certainty, B2B logistics. Dark cinematic mood with an electric blue (#2563eb) neon glow cutting through the scene. 8k resolution. Layouts: Ample negative space at the top for text overlays. --ar 4:5 --style raw --v 6.0"
  },
  {
    id: 3,
    titulo: "Modalidad Drop-Off / Retail",
    descripcion: "Para puntos de entrega",
    icono: Store,
    promptText: "Subject: A sleek, unmarked cardboard E-commerce delivery box resting on a clean counter of a modern local retail store. Aesthetics: Professional retail logistics, accessible but sophisticated. Subtle electric blue (#2563eb) and amber yellow (#fbc107) accent lighting reflecting softly on the surfaces. Photography: Macro commercial product photography, shallow depth of field (bokeh background). Layouts: Left-aligned composition, leaving the right side slightly out of focus and clean for text overlays. --ar 4:5 --style raw --v 6.0"
  },
  {
    id: 4,
    titulo: "Reputación MercadoLibre Flex",
    descripcion: "Para envíos Flex",
    icono: ShieldCheck,
    promptText: "Subject: A clean, unmarked cardboard e-commerce delivery box resting on a modern, dark metallic surface. Aesthetics: Corporate logistics, highly professional. Color palette is deeply dark, dominated by navy blue (#060B19) and black. Very subtle ambient lighting with a hint of vibrant green (#22c55e) reflecting off the edge of the box to symbolize 'green seller reputation' and speed. Photography: Macro, extremely shallow depth of field. 8k, photorealistic. --ar 4:5 --style raw --v 6.0"
  },
  {
    id: 5,
    titulo: "Dashboard & Cuentas Corrientes",
    descripcion: "Para gestión financiera",
    icono: TrendingUp,
    promptText: "Subject: A close-up of a modern digital tablet displaying abstract upward growth charts, held by a professional in a smart-casual dark jacket. Aesthetics: Corporate partnership, trust, local business scalability. Dark, moody, premium color palette featuring deep navy blues and subtle electric blue (#2563eb) accents. Photography: Corporate editorial style, sharp focus on the tablet screen, soft blurred background. 8k, photorealistic. --ar 4:5 --style raw --v 6.0"
  }
];

export default function PromptsPage() {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopy = (id: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8 font-body">
      {/* Dashboard Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2563eb]/20 via-[#0a0a0a] to-transparent opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <header className="mb-12 border-b border-white/10 pb-6">
          <h1 className="text-4xl font-black font-headline tracking-tighter text-[#2563eb] mb-2 uppercase">
            AI ASSET GENERATOR
          </h1>
          <h2 className="text-xl font-bold text-[#fbc107] font-headline tracking-widest uppercase">
            ENVÍOS DOSRUEDAS
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promptsData.map((prompt) => (
            <div
              key={prompt.id}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-2xl flex flex-col hover:border-[#2563eb]/50 hover:bg-white/10 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4 border-l-4 border-[#2563eb] pl-3">
                <prompt.icono className="w-6 h-6 text-[#fbc107] group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-lg font-bold text-white font-headline uppercase tracking-wide">
                    {prompt.titulo}
                  </h3>
                  <p className="text-xs text-slate-400">{prompt.descripcion}</p>
                </div>
              </div>

              <div className="relative flex-1 mb-6 h-48">
                <pre className="h-full bg-black/80 rounded-lg p-4 text-gray-300 text-sm font-mono leading-relaxed border border-white/5 overflow-y-auto overflow-x-hidden whitespace-pre-wrap">
                  <code>{prompt.promptText}</code>
                </pre>

                {/* Floating Action Button */}
                <button
                  onClick={() => handleCopy(prompt.id, prompt.promptText)}
                  className={`absolute bottom-3 right-3 flex items-center justify-center gap-2 font-bold py-2 px-4 rounded-lg transition-all shadow-lg font-headline tracking-wider uppercase text-xs z-10 ${
                    copiedId === prompt.id
                      ? 'bg-[#fbc107] text-black shadow-[#fbc107]/50'
                      : 'bg-[#2563eb] hover:bg-[#2563eb]/80 text-white shadow-[#2563eb]/20'
                  }`}
                >
                  {copiedId === prompt.id ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      ¡Copiado!
                    </>
                  ) : (
                    'Copiar'
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
