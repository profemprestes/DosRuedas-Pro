import React from 'react';
import Image from 'next/image';

interface PageHeaderProps {
  badgeText: string;
}

export function PageHeader({ badgeText }: PageHeaderProps) {
  return (
    <header className="mb-6 z-20 relative">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <div className="h-16 w-32 relative">
            <Image
              src="/LogoEnviosDosRuedas.webp"
              alt="Envíos DosRuedas Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="text-2xl font-black italic -skew-x-12 tracking-tighter leading-none">
              <span className="text-white">ENVIOS</span>
              <span className="text-accent">DOSRUEDAS</span>
            </div>
            <div className="text-[10px] font-bold tracking-[0.3em] text-accent uppercase mt-1">
              TU SOLUCION CONFIABLE
            </div>
          </div>
        </div>
        <div className="relative flex items-center h-12">
          {/* Accent Line */}
          <div className="absolute -left-2 w-1 h-8 bg-accent rounded-full opacity-70"></div>
          {/* Badge Body */}
          <div className="bg-primary/40 border border-accent/30 text-accent px-6 h-10 rounded-xl text-[13px] font-black tracking-[0.2em] backdrop-blur-md flex items-center gap-2 shadow-xl shadow-black/20">
            <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#fbbd08]"></div>
            {badgeText}
          </div>
        </div>
      </div>
      <div className="h-0.5 w-full bg-accent opacity-50"></div>
    </header>
  );
}
