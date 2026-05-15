
import React from 'react';
import Image from 'next/image';

export default function Pagina2() {
  return (
    <div className="a4-container mx-auto bg-[#0a1128] relative overflow-hidden flex flex-col shadow-2xl text-white font-montserrat">
      {/* Header Section */}
      <header className="p-16 pb-0">
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
              <div className="text-2xl font-black italic skew-x-[-5deg] tracking-tighter leading-none">
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
        <div className="h-0.5 w-full bg-[#fbbd08] opacity-50 mb-6"></div>
      </header>

      <div className="px-16 flex-grow flex flex-col">
        {/* Main Title */}
        <div className="flex items-center gap-3 mb-6 bg-[#fbbd08]/10 p-3 rounded-lg border-l-4 border-[#fbbd08]">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#fbbd08]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
          <h2 className="text-3xl font-black text-white tracking-tight uppercase">ENVÍOS EXPRESS</h2>
        </div>

        {/* Featured Card */}
        <section className="bg-white/5 border-l-4 border-[#fbbd08] rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold mb-4 italic">Entregas con Elección de Rango Horario.</h3>
          <p className="text-gray-300 text-[15px] leading-relaxed mb-6">
            La principal ventaja de este servicio es la personalización y la certeza. Usted nos indica el rango o límite horario (por ejemplo, "entregar antes de las 17:00hs") y nosotros cumplimos, ideal para ventas exigentes.
          </p>
          <div className="bg-[#0a1128]/80 rounded-lg p-4 flex items-start gap-3 border border-white/5">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#fbbd08] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <p className="text-[#fbbd08] text-sm font-semibold leading-snug">
              Importante: Para organizar la logística y garantizar el cumplimiento, se requiere solicitar el envío con un mínimo de 2 horas de anticipación.
            </p>
          </div>
        </section>

        {/* Pricing Table */}
        <section className="mb-6">
          <div className="flex justify-between items-end border-b border-[#fbbd08]/40 pb-2 mb-3">
            <h4 className="text-[#fbbd08] font-bold tracking-widest text-sm uppercase">Zonificación de Entrega</h4>
            <h4 className="text-[#fbbd08] font-bold tracking-widest text-sm uppercase">Valor Final</h4>
          </div>
          
          <div className="space-y-0 text-base">
            <div className="flex justify-between py-2 border-b border-white/5 hover:bg-white/5 transition-colors px-2">
              <span className="font-medium text-sm">Zona 1 (Hasta 3 km)</span>
              <span className="text-[#fbbd08] font-bold">$3.700</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/5 hover:bg-white/5 transition-colors px-2">
              <span className="font-medium text-sm">Zona 2 (3 a 5 km)</span>
              <span className="text-[#fbbd08] font-bold">$4.600</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/5 hover:bg-white/5 transition-colors px-2">
              <span className="font-medium text-sm">Zona 3 (5 a 7 km)</span>
              <span className="text-[#fbbd08] font-bold">$6.100</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/5 hover:bg-white/5 transition-colors px-2">
              <span className="font-medium text-sm">Zona 4 (7 a 10 km)</span>
              <span className="text-[#fbbd08] font-bold">$8.200</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/5 hover:bg-white/5 transition-colors px-2">
              <span className="font-medium text-sm">Zona 5 (Más de 10 km)</span>
              <span className="text-[#fbbd08] font-bold">$1.000 x km</span>
            </div>
          </div>
        </section>

        {/* Additional Conditions */}
        <section className="mb-4">
          <h4 className="text-[#fbbd08] font-bold tracking-widest text-sm uppercase mb-4">Condiciones Adicionales Operativas</h4>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <h5 className="text-[#fbbd08] font-bold text-[10px] uppercase mb-1">Clima Adverso</h5>
              <p className="text-[10px] text-gray-400 leading-snug">
                (Lluvia/calzada mojada): Recargo del 50% sobre el valor.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <h5 className="text-[#fbbd08] font-bold text-[10px] uppercase mb-1">Demora en Domicilio</h5>
              <p className="text-[10px] text-gray-400 leading-snug">
                Tolerancia 10 min. Luego, +$2.200 cada 10 min.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <h5 className="text-[#fbbd08] font-bold text-[10px] uppercase mb-1">Bulto Excedente</h5>
              <p className="text-[10px] text-gray-400 leading-snug">
                Mayor a 5Kg o 40x40x30cm. Adicional desde $1.800.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <h5 className="text-[#fbbd08] font-bold text-[10px] uppercase mb-1">Retorno / Vuelta</h5>
              <p className="text-[10px] text-gray-400 leading-snug">
                Inmediata o 2da visita: Se factura al 50% del original.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <footer className="p-16 pt-0 mt-auto">
        <div className="h-[1px] w-full bg-white/10 mb-4"></div>
        <div className="flex justify-between items-center text-[9px] uppercase tracking-[0.2em] text-gray-500 font-bold">
          <div>Propuesta Operativa 2026</div>
          <div className="flex items-center gap-4 lowercase tracking-normal text-white/50 italic">
            <span>@enviosdosruedas</span>
          </div>
          <div>2 / 11</div>
        </div>
      </footer>
    </div>
  );
}
