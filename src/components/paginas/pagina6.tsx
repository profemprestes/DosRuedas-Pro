
import React from 'react';

export default function Pagina6() {
  return (
    <div className="a4-container mx-auto bg-[#0a1128] relative overflow-hidden flex flex-col shadow-2xl text-white font-montserrat">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#1a2a4d,_#0a1128)]"></div>
      
      <div className="relative z-10 flex flex-col h-full p-16">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-black italic tracking-tighter">
            ENVIOS <span className="text-[#fbbd08] italic">DOSRUEDAS</span>
          </h1>
          <div className="bg-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-md border border-emerald-500/30 text-[10px] font-bold tracking-widest uppercase">
            E-commerce Distribución
          </div>
        </header>

        {/* Title Section */}
        <section className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fbbd08" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
              <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/>
              <path d="M15 18H9"/>
              <path d="M19 18h2a1 1 0 0 0 1-1v-5l-4-4h-3v10"/>
              <circle cx="7" cy="18" r="2"/>
              <circle cx="17" cy="18" r="2"/>
            </svg>
            <h2 className="text-5xl font-black tracking-tight leading-none uppercase italic">
              PLAN E-COMMERCE <span className="text-[#fbbd08]">24HS</span>
            </h2>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            Retiramos hoy y entregamos mañana en toda la ciudad. <span className="text-white font-bold italic">Costos fijos y máxima rentabilidad para su negocio.</span>
          </p>
        </section>

        {/* Pricing Table */}
        <div className="mb-10 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-5 text-[10px] font-bold text-[#fbbd08] tracking-widest uppercase">Nivel Comercial</th>
                <th className="px-6 py-5 text-[10px] font-bold text-[#fbbd08] tracking-widest uppercase text-center">Volumen Mensual</th>
                <th className="px-6 py-5 text-[10px] font-bold text-[#fbbd08] tracking-widest uppercase text-right">Valor Plano</th>
              </tr>
            </thead>
            <tbody className="text-white font-medium">
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="px-6 py-5 uppercase text-sm">Inicial</td>
                <td className="px-6 py-5 text-center text-gray-300 text-xs">1 a 199 envíos</td>
                <td className="px-6 py-5 text-right text-2xl font-bold text-[#fbbd08] tracking-tighter">$3.800</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="px-6 py-5 uppercase text-sm">Pro</td>
                <td className="px-6 py-5 text-center text-gray-300 text-xs">200 a 1.199 envíos</td>
                <td className="px-6 py-5 text-right text-2xl font-bold text-[#fbbd08] tracking-tighter">$3.500</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="px-6 py-5 uppercase text-sm text-[#fbbd08] font-bold">Elite</td>
                <td className="px-6 py-5 text-center text-gray-300 text-xs">1.200 a 1.999 envíos</td>
                <td className="px-6 py-5 text-right text-2xl font-bold text-[#fbbd08] tracking-tighter">$3.200</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Discount Card */}
        <div className="bg-emerald-500 text-slate-900 rounded-2xl p-6 mb-12 text-center">
          <h3 className="text-lg font-black uppercase mb-2 tracking-tighter italic">Opción Drop-Off (Friuli 1972)</h3>
          <div className="flex items-center justify-center gap-4">
            <p className="font-bold text-slate-800 text-sm italic">Traiga sus paquetes y ahorre directo sobre la tarifa.</p>
            <div className="bg-slate-900 text-white px-4 py-2 rounded-lg font-black text-lg shadow-lg">20% OFF</div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-auto border-t border-white/10 pt-6 flex justify-between items-center text-[10px] font-bold text-gray-500 uppercase tracking-widest">
          <div>Escalabilidad para Tiendas Online</div>
          <div>6 / 11</div>
        </footer>
      </div>
    </div>
  );
}
