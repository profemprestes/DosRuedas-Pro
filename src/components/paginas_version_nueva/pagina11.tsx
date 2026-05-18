import React from 'react';
import { PageFooter } from './shared/PageFooter';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Pagina11() {
  return (
    <div className="a4-container flex flex-col h-full justify-between overflow-hidden relative bg-[#0a0a0a]">
      {/* Background: Portada / Cierre */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2563eb]/40 via-[#0a0a0a] to-[#0a0a0a] opacity-60 pointer-events-none"></div>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-12 z-10 gap-12 text-center">

        <div>
          <h1 className="text-6xl font-black text-white font-headline tracking-tighter mb-4 uppercase">
            EL PRÓXIMO PASO
          </h1>
          <h2 className="text-2xl text-[#fbc107] font-body font-light">
            Transformemos tu logística hoy.
          </h2>
        </div>

        <div className="bg-[#111111]/80 backdrop-blur-md border border-[#2563eb]/30 rounded-2xl p-10 w-full max-w-2xl shadow-2xl flex flex-col items-center gap-8">

           <div className="w-full flex flex-col gap-6">
             <div className="flex items-center justify-center gap-4 text-white font-body">
               <Mail className="w-6 h-6 text-[#2563eb]" />
               <span className="text-lg">comercial@enviosdosruedas.com</span>
             </div>
             <div className="flex items-center justify-center gap-4 text-white font-body">
               <Phone className="w-6 h-6 text-[#2563eb]" />
               <span className="text-lg">+54 223 660-2699</span>
             </div>
             <div className="flex items-center justify-center gap-4 text-white font-body">
               <MapPin className="w-6 h-6 text-[#2563eb]" />
               <span className="text-lg">Base Operativa MDP</span>
             </div>
           </div>

           <div className="w-full h-px bg-white/10 my-2"></div>

           <div className="flex flex-col items-center gap-4">
             <p className="text-[#9ca3af] font-body text-sm uppercase tracking-widest font-bold">
               Agendar Reunión / Onboarding
             </p>
             <div className="w-[150px] h-[150px] border-4 border-[#2563eb] rounded-xl flex items-center justify-center bg-white p-2">
                {/* QR Placeholder */}
                <div className="w-full h-full bg-black/5 flex flex-col items-center justify-center text-center">
                  <span className="text-[#0a0a0a] font-bold text-xs font-mono">ESCANEAR</span>
                  <span className="text-[#0a0a0a] font-bold text-xs font-mono">QR</span>
                </div>
             </div>
           </div>

        </div>

        <div className="text-4xl font-bold italic tracking-wider font-headline text-[#2563eb] mt-8 opacity-50">
          ENVÍOS DOSRUEDAS
        </div>

      </main>

      <PageFooter pageNumber="11 / 11" />
    </div>
  );
}
