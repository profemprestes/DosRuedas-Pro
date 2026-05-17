import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Pagina11() {
  return (
    <div className="a4-container mx-auto bg-[#0a0a0a] relative overflow-hidden flex flex-col shadow-2xl text-white font-body" suppressHydrationWarning>
      {/* Dark Tech Background / Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2563eb]/20 via-[#0a0a0a] to-[#0a0a0a] z-10" />

      <div className="relative z-20 flex flex-col h-full justify-center items-center p-10">
        
        <main className="flex-1 flex flex-col items-center justify-center w-full max-w-2xl text-center">

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-7xl font-black font-headline tracking-tighter uppercase text-[#fbc107] mb-4">
              EL PRÓXIMO PASO
            </h1>
            <h2 className="text-3xl font-bold font-headline text-[#ffffff] uppercase tracking-widest">
              Transformemos tu logística hoy.
            </h2>
          </div>

          {/* Contact Block */}
          <div className="w-full bg-black/70 border border-white/10 rounded-2xl p-10 shadow-2xl backdrop-blur-md flex flex-col items-center justify-center gap-8 relative overflow-hidden">
            
            {/* Decorative Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#2563eb] shadow-[0_0_20px_#2563eb]"></div>

            <div className="w-full flex flex-col gap-6 text-left">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#2563eb]/10 border border-[#2563eb]/30 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#2563eb]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-headline mb-1">Email</p>
                  <p className="text-lg font-bold text-white tracking-wide">comercial@enviosdosruedas.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#2563eb]/10 border border-[#2563eb]/30 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#2563eb]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-headline mb-1">Tel/WhatsApp</p>
                  <p className="text-lg font-bold text-white tracking-wide">+54 223 660-2699</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#2563eb]/10 border border-[#2563eb]/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#2563eb]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-headline mb-1">Base Operativa</p>
                  <p className="text-lg font-bold text-white tracking-wide">Mar del Plata, Argentina</p>
                </div>
              </div>
            </div>

            {/* QR Code Placeholder */}
            <div className="mt-6 flex flex-col items-center gap-3">
              <div className="w-[150px] h-[150px] border-2 border-[#2563eb] border-dashed rounded-xl flex items-center justify-center bg-black/50 p-2 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                <div className="w-full h-full bg-white/5 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-400 font-headline uppercase tracking-wider text-center">
                    [QR CODE<br/>PLACEHOLDER]
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#fbc107] font-headline tracking-widest uppercase">Escanea para contactar</p>
            </div>

          </div>

        </main>

        <footer className="mt-auto pt-10 text-center w-full">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold font-headline">
            © 2026 ENVÍOS DOSRUEDAS | Logística de Precisión
          </p>
        </footer>

      </div>
    </div>
  );
}
