
import React from 'react';

export default function Pagina8() {
  return (
    <div className="a4-container mx-auto bg-[#0a1128] relative overflow-hidden flex flex-col shadow-2xl text-white font-montserrat p-16">
      <header className="flex justify-between items-center mb-10">
        <div className="text-3xl font-black italic tracking-tighter">
          ENVIOS <span className="text-[#fbbd08]">DOSRUEDAS</span>
        </div>
        <div className="bg-[#fbbd08] text-[#0a1128] px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase">
          RESUMEN EJECUTIVO
        </div>
      </header>

      <div className="border-2 border-emerald-500 rounded-3xl p-8 mb-12 bg-emerald-500/5">
        <h1 className="text-4xl font-black text-emerald-500 leading-none mb-4 italic uppercase">
          GESTIÓN DE COBRANZAS EN DESTINO
        </h1>
        <p className="text-emerald-500 font-bold text-xs tracking-wide uppercase mb-6">(CONTRAREEMBOLSO SIN COSTO)</p>
        <p className="text-slate-300 text-sm leading-relaxed italic">
          Garantizamos transacciones profesionales y rendiciones rápidas vía transferencia o efectivo.
        </p>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-[#fbbd08] font-black text-lg tracking-[0.2em] uppercase italic">TABLA COMPARATIVA</h2>
      </div>

      <table className="w-full text-[10px] border-collapse">
        <thead>
          <tr className="text-[#fbbd08] uppercase font-bold border-b border-white/10">
            <th className="p-4 text-left italic">Modelo</th>
            <th className="p-4 text-center italic">Tarifa</th>
            <th className="p-4 text-center italic">Horario</th>
            <th className="p-4 text-center italic">Corte</th>
          </tr>
        </thead>
        <tbody className="text-center font-medium">
          <tr className="border-b border-white/5">
            <td className="p-4 text-left font-bold text-white uppercase italic">Express</td>
            <td className="p-4 text-xs">Zonificada</td>
            <td className="p-4 text-xs">Sí</td>
            <td className="p-4 text-xs">15hs</td>
          </tr>
          <tr className="border-b border-white/5">
            <td className="p-4 text-left font-bold text-white uppercase italic">LowCost</td>
            <td className="p-4 text-xs">Zonificada</td>
            <td className="p-4 text-xs">No</td>
            <td className="p-4 text-xs">13hs</td>
          </tr>
        </tbody>
      </table>

      <footer className="mt-auto pt-8 border-t border-slate-800 flex justify-between items-center opacity-50 text-[10px] font-bold uppercase tracking-widest">
        <span>SISTEMA INTEGRAL DE LOGÍSTICA</span>
        <span>8 / 11</span>
      </footer>
    </div>
  );
}
