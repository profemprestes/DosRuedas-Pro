
import React from 'react';

export default function Pagina10() {
  return (
    <div className="a4-container mx-auto bg-[#0a1128] relative flex flex-col p-16 shadow-2xl text-white font-montserrat">
      <header className="flex justify-between items-center mb-2 italic">
        <h1 className="text-3xl font-black tracking-tighter">
          <span className="text-white">ENVIOS</span>
          <span className="text-[#fbbd08]">DOSRUEDAS</span>
        </h1>
        <div className="bg-[#fbbd08] text-[#0a1128] font-bold px-4 py-1.5 rounded-md text-[10px] tracking-wide uppercase">
          SOPORTE Y CONDICIONES
        </div>
      </header>

      <div className="w-full h-[1px] bg-gray-500 opacity-40 mb-8"></div>

      <div className="mb-10">
        <h2 className="text-5xl font-black tracking-tight flex items-baseline gap-4 italic uppercase">
          PREGUNTAS FRECUENTES 
          <span className="text-gray-400 font-normal text-3xl">(2/2)</span>
        </h2>
        <div className="w-full h-1 bg-[#fbbd08] mt-4 opacity-70"></div>
      </div>

      <div className="space-y-6 flex-grow">
        <div className="bg-white/5 border-l-[6px] border-[#fbbd08] p-7 rounded-r-xl">
          <h3 className="text-[#fbbd08] font-bold text-sm mb-3 uppercase italic">¿RECARGO POR LLUVIA Y DEMORAS?</h3>
          <p className="text-gray-200 text-[13px] leading-relaxed">
            El recargo por clima (50% planes normales) se activa si llueve en cualquier punto. Brindamos 10 min de tolerancia de espera.
          </p>
        </div>
        <div className="bg-white/5 border-l-[6px] border-[#fbbd08] p-7 rounded-r-xl">
          <h3 className="text-[#fbbd08] font-bold text-sm mb-3 uppercase italic">¿SINIESTROS O EVENTUALIDADES?</h3>
          <p className="text-gray-200 text-[13px] leading-relaxed">
            Analizamos cada caso de forma <span className="font-bold italic">directa y personalizada</span> con el comercio para evaluar la situación.
          </p>
        </div>
      </div>

      <footer className="mt-auto pt-10 border-t border-gray-800 flex justify-between items-center text-[10px] text-gray-500 font-bold uppercase tracking-widest">
        <span>Resolución de Excepciones</span>
        <span>10 / 11</span>
      </footer>
    </div>
  );
}
