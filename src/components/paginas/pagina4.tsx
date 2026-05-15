
import React from 'react';

export default function Pagina4() {
  return (
    <div className="a4-container mx-auto bg-[#0a1128] relative overflow-hidden flex flex-col shadow-2xl text-white font-montserrat">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#1e293b,_#0a1128)]"></div>
      
      <div className="relative z-10 flex flex-col h-full p-16">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-black italic skew-x-[-5deg] tracking-tighter">
            ENVIOS <span className="text-[#fbbd08]">DOSRUEDAS</span>
          </h1>
          <div className="bg-[#fbbd08] text-[#0a1128] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            Módulo Plataformas
          </div>
        </div>

        {/* Section Title Flex */}
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-[#fbbd08] p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#0a1128]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 14 8 16"/><path d="M14 10 16 8"/><path d="M18 14V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8"/><path d="M22 13a3 3 0 1 0-4-4l-3 3 2 2Z"/></svg>
          </div>
          <h2 className="text-5xl font-black italic uppercase">Envíos Flex</h2>
          <div className="bg-[#fbbd08] text-[#0a1128] px-3 py-1 rounded font-extrabold text-sm tracking-tight ml-2">
            MERCADOLIBRE
          </div>
        </div>

        {/* Info Bar */}
        <div className="bg-white/10 backdrop-blur-md border border-white/5 p-4 rounded-2xl flex items-center gap-3 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#fbbd08] fill-current" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          <p className="text-lg font-semibold text-[#fbbd08]">Retiro por domicilio (Colecta) SIN CARGO en todo Mar del Plata.</p>
        </div>

        {/* SLA Note */}
        <div className="border-l-4 border-[#fbbd08] pl-4 mb-8">
          <p className="italic text-slate-300 text-sm leading-relaxed">
            SLA Garantizado: Ventas concretadas hasta las 15:00hs serán entregadas en el día antes de las 20:00hs.
          </p>
        </div>

        {/* Cards Levels */}
        <div className="space-y-4">
          {/* Card Nivel 1 */}
          <div className="border border-[#fbbd08]/50 rounded-2xl p-6 bg-slate-900/40">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-extrabold text-[#fbbd08] uppercase tracking-wide">Nivel 1: Volumen Inicial</h3>
                <p className="text-[10px] text-slate-400 mt-1 uppercase">Tarifa clásica zonificada. Ideal para garantizar entregas en el día con la seguridad de Flex.</p>
              </div>
              <div className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded text-xs font-bold">1 a 4 envíos / día</div>
            </div>
            <div className="grid grid-cols-2 gap-y-3 gap-x-12 text-sm font-semibold border-t border-white/10 pt-4">
              <div className="flex justify-between"><span>Z1 (Hasta 3 km):</span> <span>$3.000</span></div>
              <div className="flex justify-between"><span>Z2 (3 a 5 km):</span> <span>$4.000</span></div>
              <div className="flex justify-between"><span>Z3 (5 a 7 km):</span> <span>$5.300</span></div>
              <div className="flex justify-between"><span>Z4 (7 a 10 km):</span> <span>$7.000</span></div>
              <div className="col-span-2 text-[#fbbd08]">Z5 ({'>'} 10 km): $700 x km</div>
            </div>
          </div>

          {/* Card Nivel 2 */}
          <div className="border border-green-500/30 rounded-2xl p-6 bg-slate-900/40">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-extrabold text-green-500 uppercase tracking-wide">Nivel 2: Vendedor Frecuente</h3>
              </div>
              <div className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded text-xs font-bold">+5 envíos / día</div>
            </div>
            <div className="grid grid-cols-2 gap-y-3 gap-x-12 text-sm font-semibold border-t border-white/10 pt-4">
              <div className="flex justify-between"><span>Z1 a Z3:</span> <span className="text-gray-400 italic">Mismo valor N1</span></div>
              <div className="bg-green-900/40 border border-green-500/20 text-green-400 rounded-lg px-4 py-1 text-center font-bold col-span-2 mt-2 uppercase text-xs">
                Zonas 4 y 5: Fijo $6.500
              </div>
            </div>
          </div>

          {/* Card Nivel 3 */}
          <div className="bg-[#fbbd08] rounded-2xl p-6 text-[#0a1128]">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-black uppercase tracking-tighter">Nivel 3: Grandes Cuentas</h3>
              <div className="bg-[#0a1128] text-blue-400 px-3 py-1 rounded text-xs font-bold">+10 envíos / día</div>
            </div>
            <p className="text-[11px] font-bold mb-4 opacity-80 leading-tight">
              Solución de costo fijo a cualquier punto de la ciudad, diseñada para MercadoLíderes.
            </p>
            <div className="flex justify-between items-end border-t border-[#0a1128]/20 pt-4">
              <span className="text-lg font-extrabold uppercase italic tracking-tight">Tarifa Plana Mar del Plata</span>
              <span className="text-5xl font-black tracking-tighter">$4.500</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-white/5 flex justify-between text-[10px] text-slate-500 font-bold uppercase tracking-widest">
          <span>El Motor de su MercadoLíder</span>
          <span>4 / 11</span>
        </div>
      </div>
    </div>
  );
}
