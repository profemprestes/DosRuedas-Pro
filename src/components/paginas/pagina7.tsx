
import React from 'react';

export default function Pagina7() {
  return (
    <div className="a4-container mx-auto bg-[#0a1128] relative overflow-hidden flex flex-col shadow-2xl text-white font-montserrat p-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_40%,_rgba(20,35,80,1)_0%,_rgba(10,17,40,1)_60%)]"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <header className="flex justify-between items-center mb-4">
          <div className="italic font-black text-3xl tracking-tighter">
            <span className="text-white">ENVIOS</span>
            <span className="text-[#fbbd08] ml-2">DOSRUEDAS</span>
          </div>
          <div className="bg-[#fbbd08] text-[#0a1128] font-bold text-[10px] px-4 py-1.5 rounded-sm tracking-widest uppercase">
            PYMES Y EMPRENDEDORES
          </div>
        </header>

        <div className="w-full h-[1.5px] bg-[#fbbd08] opacity-50 mb-10"></div>

        {/* Main Title Section */}
        <section className="mb-8">
          <h1 className="text-5xl font-black mb-2 tracking-tight uppercase italic">
            CUENTA CORRIENTE <span className="text-[#fbbd08]">FLEXIBLE</span>
          </h1>
          <p className="text-[#fbbd08] italic font-medium text-lg tracking-[0.15em] uppercase">
            SIMPLICIDAD PARA NEGOCIOS SIN VOLUMEN FIJO
          </p>
        </section>

        {/* Description */}
        <section className="mb-12">
          <div className="bg-blue-950/30 border-l-[6px] border-[#fbbd08] rounded-r-xl p-8">
            <p className="text-slate-200 text-sm leading-relaxed font-medium">
              Diseñado especialmente para emprendedores que buscan profesionalizar sus envíos sin volumen fijo. Al trabajar de forma exclusiva, accede a los mejores beneficios logísticos.
            </p>
          </div>
        </section>

        {/* Content Columns */}
        <div className="grid grid-cols-2 gap-12 mb-auto">
          <section>
            <h3 className="text-[#fbbd08] font-bold tracking-widest mb-6 text-[10px] uppercase">BENEFICIOS EXCLUSIVOS</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-emerald-500 rounded-full w-5 h-5 flex items-center justify-center shrink-0">
                  <svg className="h-3 w-3 text-[#0a1128]" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                </div>
                <p className="text-xs text-slate-300 italic"><strong className="text-white not-italic">Valor LowCost, Servicio Express:</strong> Abona tarifa económica pero con beneficios de prioridad horaria.</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-[#fbbd08] font-bold tracking-widest mb-6 text-[10px] uppercase">CIERRE A ELECCIÓN</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-4 text-center text-[10px] font-bold uppercase">Semanal</div>
              <div className="bg-[#fbbd08]/10 border-2 border-[#fbbd08] rounded-lg p-4 text-center text-[10px] font-bold uppercase text-[#fbbd08]">Mensual</div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-auto pt-10 flex justify-between items-center text-[10px] text-slate-500 font-bold uppercase tracking-widest border-t border-gray-800">
          <div>Envíos por Cuenta Corriente Exclusiva</div>
          <div>7 / 11</div>
        </footer>
      </div>
    </div>
  );
}
