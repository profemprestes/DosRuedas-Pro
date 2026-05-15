
import React from 'react';

export default function Pagina9() {
  return (
    <div className="a4-container mx-auto bg-[#0a1128] relative flex flex-col p-16 shadow-2xl text-white font-montserrat">
      <header className="flex justify-between items-start mb-6">
        <div className="flex items-baseline space-x-2 italic">
          <span className="text-2xl font-light tracking-tighter">ENVIOS</span>
          <span className="text-2xl font-black text-[#fbbd08] tracking-tighter">DOSRUEDAS</span>
        </div>
        <div className="bg-[#fbbd08] text-[#0a1128] text-[10px] font-bold px-4 py-1.5 rounded uppercase">
          SOPORTE Y CONDICIONES
        </div>
      </header>

      <div className="flex items-baseline gap-3 border-b border-gray-600 pb-2 mb-8">
        <h1 className="text-4xl font-black tracking-tight uppercase italic">PREGUNTAS FRECUENTES</h1>
        <span className="text-2xl font-light text-gray-500">(1/2)</span>
      </div>

      <div className="space-y-5 flex-grow">
        <div className="bg-white/5 border-l-4 border-[#fbbd08] p-5 rounded-r-lg">
          <h2 className="text-[#fbbd08] font-bold text-[13px] uppercase mb-2 italic">¿CÓMO SE SOLICITAN LOS ENVÍOS?</h2>
          <p className="text-[12px] leading-relaxed text-gray-200">
            La gestión es ágil y directa vía <span className="font-bold">WhatsApp</span>. Coordinamos retiro y entrega de forma personalizada.
          </p>
        </div>
        <div className="bg-white/5 border-l-4 border-[#fbbd08] p-5 rounded-r-lg">
          <h2 className="text-[#fbbd08] font-bold text-[13px] uppercase mb-2 italic">¿MODALIDADES DE PAGO Y FACTURACIÓN?</h2>
          <p className="text-[12px] leading-relaxed text-gray-200">
            Frecuencia personalizada: diaria, semanal o mensual. Emitimos <span className="font-bold">Factura C</span>.
          </p>
        </div>
      </div>

      <footer className="mt-auto pt-10 border-t border-gray-800 flex justify-between items-center text-[11px] text-gray-500 font-bold uppercase tracking-widest">
        <span>Operativa Diaria y Pagos</span>
        <span>9 / 11</span>
      </footer>
    </div>
  );
}
