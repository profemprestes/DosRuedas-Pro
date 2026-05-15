'use client';

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Zap, Clock, CloudDrizzle, Package, Undo2 } from 'lucide-react';

export default function Pagina2() {
  const bgImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <div className="a4-container mx-auto bg-[#0a1128] relative overflow-hidden flex flex-col shadow-2xl text-white font-montserrat" suppressHydrationWarning>
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={bgImg?.imageUrl || 'https://picsum.photos/seed/dosruedas-hero/1200/800'} 
          alt="Background" 
          fill 
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/90 via-[#0a1128]/95 to-[#0a1128] z-10" />
      </div>

      <div className="relative z-20 flex flex-col h-full p-16">
        {/* Header Section */}
        <header>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              <div className="h-16 w-32 relative">
                <Image 
                  src="/LogoEnviosDosRuedas.webp" 
                  alt="Envíos DosRuedas Logo" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <div className="text-2xl font-black italic -skew-x-12 tracking-tighter leading-none">
                  <span className="text-white">ENVIOS</span>
                  <span className="text-[#fbbd08]">DOSRUEDAS</span>
                </div>
                <div className="text-[10px] font-bold tracking-[0.3em] text-[#fbbd08] uppercase mt-1">
                  TU SOLUCION CONFIABLE
                </div>
              </div>
            </div>
            <div className="relative flex items-center h-12">
              <div className="absolute -left-2 w-1 h-8 bg-[#fbbd08] rounded-full opacity-70"></div>
              <div className="bg-[#0a1128]/40 border border-[#fbbd08]/30 text-[#fbbd08] px-6 h-10 rounded-xl text-[13px] font-black tracking-[0.2em] backdrop-blur-md flex items-center gap-2 shadow-xl shadow-black/20">
                <div className="w-1.5 h-1.5 rounded-full bg-[#fbbd08] shadow-[0_0_8px_#fbbd08]"></div>
                POR DEMANDA
              </div>
            </div>
          </div>
          <div className="h-0.5 w-full bg-[#fbbd08] opacity-50 mb-8"></div>
        </header>

        {/* Main Content */}
        <div className="flex-grow flex flex-col">
          {/* Main Title */}
          <div className="flex items-center gap-3 mb-8 bg-[#fbbd08]/10 p-4 rounded-lg border-l-4 border-[#fbbd08]">
            <Zap className="w-8 h-8 text-[#fbbd08] fill-[#fbbd08]" />
            <h2 className="text-3xl font-black text-white tracking-tight uppercase italic">ENVÍOS EXPRESS</h2>
          </div>

          {/* Featured Card */}
          <section className="bg-white/5 border-l-4 border-[#fbbd08] rounded-r-xl p-8 mb-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 italic">Entregas con Elección de Rango Horario.</h3>
            <p className="text-gray-300 text-[15px] leading-relaxed mb-6">
              La principal ventaja de este servicio es la personalización y la certeza. Usted nos indica el rango o límite horario (por ejemplo, "entregar antes de las 17:00hs") y nosotros cumplimos, ideal para ventas exigentes.
            </p>
            <div className="bg-[#0a1128]/80 border border-white/5 rounded-lg p-5 flex items-start gap-4">
              <Clock className="w-6 h-6 text-[#fbbd08] shrink-0 mt-0.5" />
              <p className="text-[#fbbd08] text-sm font-semibold leading-snug italic">
                Importante: Para organizar la logística y garantizar el cumplimiento, se requiere solicitar el envío con un mínimo de 2 horas de anticipación.
              </p>
            </div>
          </section>

          {/* Pricing Table */}
          <section className="mb-10">
            <div className="flex justify-between items-end border-b border-[#fbbd08]/40 pb-3 mb-4">
              <h4 className="text-[#fbbd08] font-bold tracking-widest text-xs uppercase">Zonificación de Entrega</h4>
              <h4 className="text-[#fbbd08] font-bold tracking-widest text-xs uppercase text-right">Valor Final</h4>
            </div>
            
            <div className="space-y-1">
              {[
                { zone: "Zona 1 (Hasta 3 km)", price: "$3.700" },
                { zone: "Zona 2 (3 a 5 km)", price: "$4.600" },
                { zone: "Zona 3 (5 a 7 km)", price: "$6.100" },
                { zone: "Zona 4 (7 a 10 km)", price: "$8.200" },
                { zone: "Zona 5 (Más de 10 km)", price: "$1.000 x km" },
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center py-3 border-b border-white/5 hover:bg-white/5 transition-colors px-4 rounded-md group">
                  <span className="font-medium text-sm text-gray-300 group-hover:text-white transition-colors">{item.zone}</span>
                  <span className="text-[#fbbd08] font-black text-xl tracking-tight">{item.price}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Additional Conditions */}
          <section className="mt-auto">
            <h4 className="text-[#fbbd08] font-bold tracking-widest text-[10px] uppercase mb-6 opacity-60">Condiciones Adicionales Operativas</h4>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <CloudDrizzle className="w-5 h-5 text-blue-400" />
                  <h5 className="text-[#fbbd08] font-bold text-[10px] uppercase tracking-wider">Clima Adverso</h5>
                </div>
                <p className="text-[11px] text-gray-400 leading-snug italic">
                  (Lluvia/calzada mojada): Recargo del 50% sobre el valor del viaje solicitado.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-[#fbbd08]" />
                  <h5 className="text-[#fbbd08] font-bold text-[10px] uppercase tracking-wider">Demora en Domicilio</h5>
                </div>
                <p className="text-[11px] text-gray-400 leading-snug italic">
                  Tolerancia 10 min. de espera sin cargo. Luego, +$2.200 por cada 10 min adicionales.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Package className="w-5 h-5 text-[#fbbd08]" />
                  <h5 className="text-[#fbbd08] font-bold text-[10px] uppercase tracking-wider">Bulto Excedente</h5>
                </div>
                <p className="text-[11px] text-gray-400 leading-snug italic">
                  Mayor a 5Kg o 40x40x30cm. Adicional desde $1.800 según dimensiones finales.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Undo2 className="w-5 h-5 text-purple-400" />
                  <h5 className="text-[#fbbd08] font-bold text-[10px] uppercase tracking-wider">Retorno / Vuelta</h5>
                </div>
                <p className="text-[11px] text-gray-400 leading-snug italic">
                  Retorno inmediato o 2da visita: Se factura al 50% del valor del viaje original.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Section */}
        <footer className="mt-12 pt-8 pb-4">
          <div className="h-[1px] w-full bg-white/10 mb-4"></div>
          <div className="flex justify-between items-center text-[9px] uppercase tracking-[0.2em] text-gray-500 font-bold">
            <div className="w-1/3">Propuesta Operativa 2026</div>
            <div className="w-1/3 text-center lowercase tracking-normal text-white/40 italic">@enviosdosruedas</div>
            <div className="w-1/3 text-right">2 / 11</div>
          </div>
        </footer>
      </div>
    </div>
  );
}
