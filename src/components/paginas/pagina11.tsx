import Image from 'next/image';
import React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Pagina11() {
  return (
    <div className="a4-container mx-auto bg-[#0a0a0a] relative overflow-hidden flex flex-col shadow-2xl text-white font-body" suppressHydrationWarning>
      {/* Background: Portada / Cierre */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2563eb]/40 via-[#0a0a0a] to-[#0a0a0a] opacity-60 pointer-events-none"></div>
      </div>

      <div className="relative z-20 flex flex-col h-full justify-center items-center p-10">
        
        <main className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl text-center gap-16">

          {/* Centro Superior */}
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/LogoEnviosDosRuedas.webp"
              alt="Logo Envios Dos Ruedas"
              width={200}
              height={200}
              className="object-contain"
            />
            <h1 className="text-6xl font-black font-headline tracking-tighter uppercase text-white drop-shadow-lg">
              ENVÍOS DOSRUEDAS
            </h1>
          </div>

          {/* Centro Medio */}
          <div>
            <h2 className="text-4xl font-bold font-headline text-[#fbc107] uppercase tracking-widest drop-shadow-md">
              Transformá tus costos logísticos hoy.
            </h2>
          </div>

          {/* Sección Inferior */}
          <div className="w-full bg-black/70 border border-white/10 rounded-2xl p-10 shadow-2xl backdrop-blur-md flex flex-row items-center justify-between relative overflow-hidden">
            
            {/* Decorative Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#2563eb] shadow-[0_0_20px_#2563eb]"></div>

            {/* Mitad Izquierda */}
            <div className="flex-1 flex flex-col gap-8 text-left border-r border-white/10 pr-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-[#2563eb]/20 border border-[#2563eb]/30 flex items-center justify-center shrink-0">
                  <Mail className="w-7 h-7 text-[#2563eb]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-widest font-headline mb-1">Email Comercial</p>
                  <p className="text-xl font-bold text-white tracking-wide">comercial@enviosdosruedas.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-[#2563eb]/20 border border-[#2563eb]/30 flex items-center justify-center shrink-0">
                  <Phone className="w-7 h-7 text-[#2563eb]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-widest font-headline mb-1">Contacto Directo</p>
                  <p className="text-xl font-bold text-white tracking-wide">+54 223 660-2699</p>
                </div>
              </div>
            </div>

            {/* Mitad Derecha (QR Code) */}
            <div className="flex-1 flex flex-col items-center justify-center pl-10 gap-4">
              <div className="w-[150px] h-[150px] border-4 border-[#fbc107] bg-white rounded-xl flex items-center justify-center relative p-2 shadow-[0_0_25px_rgba(251,193,7,0.3)]">
                {/* Simulated QR Pattern (Placeholder) */}
                <div className="w-full h-full bg-black/10 rounded flex items-center justify-center">
                    <div className="w-8 h-8 bg-white border border-gray-200 rounded flex items-center justify-center absolute z-10">
                        <Image
                           src="/LogoEnviosDosRuedas.webp"
                           alt="Logo Mini"
                           width={24}
                           height={24}
                           className="object-contain"
                        />
                    </div>
                </div>
              </div>
              <p className="text-sm text-white font-headline tracking-widest uppercase mt-2">
                Escaneá para chatear con un asesor
              </p>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}
