
import React from 'react';

export default function Pagina11() {
  return (
    <div className="a4-container mx-auto bg-[#0a1128] relative flex flex-col items-center p-16 shadow-2xl text-white font-montserrat text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#162245_0%,_#0a1128_100%)]"></div>
      
      <div className="relative z-10 flex flex-col items-center h-full w-full">
        {/* Rocket Icon Container */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-[#fbbd08] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(251,189,8,0.3)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#0a1128"><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"/><path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/></svg>
          </div>
        </div>

        <h1 className="text-5xl font-black tracking-tighter mb-2 italic uppercase">ESCALEMOS JUNTOS</h1>
        <p className="text-[#fbbd08] text-xl font-bold italic tracking-widest mb-12 uppercase">EL MOTOR DE SU ÚLTIMA MILLA</p>

        {/* Info Card */}
        <div className="w-full max-w-lg bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm mb-12 text-left">
          <h2 className="text-center font-bold tracking-widest text-[10px] mb-8 uppercase opacity-60">COMENZAR ES MUY SIMPLE:</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <p className="text-gray-200 text-xs leading-tight pt-1 italic">Nos escribe por <span className="font-bold not-italic">WhatsApp</span> con la info del envío.</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <p className="text-gray-200 text-xs leading-tight pt-1 italic"><span className="font-bold not-italic">Coordinamos el retiro</span> de forma ágil y rápida.</p>
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="bg-green-500 px-10 py-4 rounded-full flex items-center gap-4 mb-20 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
          <span className="text-3xl font-bold tracking-tight">223-6602699</span>
        </div>

        {/* CEO Card */}
        <div className="w-full max-w-md border border-[#fbbd08] rounded-xl p-8">
          <h3 className="text-2xl font-bold tracking-wide mb-1 uppercase italic">MATIAS NICOLAS CEJAS</h3>
          <p className="text-[#fbbd08] text-[10px] font-bold tracking-[0.3em] mb-6 uppercase italic">FUNDADOR & CEO</p>
          <div className="space-y-2 text-[10px] tracking-wider text-gray-400">
            <p>www.enviosdosruedas.com</p>
            <p>Mar del Plata, Argentina</p>
          </div>
        </div>

        <footer className="mt-auto pb-4">
          <p className="text-white/30 text-[9px] tracking-[0.2em] uppercase font-bold">
            ENVÍOS DOSRUEDAS © 2026
          </p>
        </footer>
      </div>
    </div>
  );
}
