import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Pagina1() {
  const bgImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <div className="flex flex-col justify-between w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] overflow-hidden box-border bg-[#0a1128] relative text-white font-body shadow-2xl print:shadow-none" suppressHydrationWarning>
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={bgImg?.imageUrl || 'https://picsum.photos/seed/dosruedas-hero/1200/800'} 
          alt="Background" 
          fill 
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/85 via-[#0a1128]/90 to-[#0a1128]/95 z-10" />
      </div>

      <div className="relative z-20 flex flex-col h-full p-16 justify-between box-border">
        {/* Header Section */}
        <header className="w-full">
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
                <div className="text-2xl font-black font-headline italic -skew-x-12 tracking-tighter leading-none">
                  <span className="text-white">ENVIOS</span>
                  <span className="text-accent">DOSRUEDAS</span>
                </div>
                <div className="text-[10px] font-bold tracking-[0.3em] text-accent uppercase mt-1">
                  TU SOLUCION CONFIABLE
                </div>
              </div>
            </div>
            <div className="relative flex items-center h-12">
              <div className="absolute -left-2 w-1 h-8 bg-accent rounded-full opacity-70"></div>
              <div className="bg-primary/40 border border-accent/30 text-accent px-6 h-10 rounded-xl text-[13px] font-black font-headline tracking-[0.2em] backdrop-blur-md flex items-center gap-2 shadow-xl shadow-black/20 uppercase">
                <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#FDC322]"></div>
                LOGÍSTICA CORPORATIVA
              </div>
            </div>
          </div>
          <div className="h-0.5 w-full bg-accent opacity-50"></div>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex flex-col justify-center items-center text-center overflow-hidden">
          <h1 className="text-[52px] leading-none font-black font-headline text-white mb-2 tracking-tight uppercase">
            Partner Logístico
          </h1>
          <h1 className="text-[52px] leading-none font-black font-headline text-accent mb-8 tracking-tight uppercase">
            Especializado
          </h1>

          <p className="text-xl italic font-light text-gray-300 mb-8 font-headline tracking-[0.2em]">
            TU SOLUCION CONFIABLE
          </p>

          <div className="inline-block border border-accent/50 bg-primary/50 px-8 py-2 rounded-full text-accent font-semibold text-sm tracking-wide mb-10">
            Cobertura Integral en Mar del Plata
          </div>

          <div className="text-left max-w-2xl w-full relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-full"></div>
            <div className="bg-secondary/40 backdrop-blur-sm p-10 rounded-r-2xl border border-white/5 ml-1">
              <h2 className="text-2xl font-bold text-accent mb-6 uppercase tracking-wider font-headline">
                7 Años Innovando en la Ciudad
              </h2>

              <div className="space-y-4 text-gray-200 leading-relaxed text-[15px]">
                <p>
                  Nacimos en Mar del Plata y llevamos más de 7 años operando, creciendo e innovando de manera
                  constante. Desde nuestros inicios, nos guía un único propósito: brindar un servicio
                  logístico de excelencia y confianza.
                </p>
                <p>
                  Hoy nos especializamos en la logística de última milla para <span className="font-bold text-white">E-Commerce, plataformas y pymes</span>, posicionándonos
                  como el partner logístico de referencia en la ciudad.
                </p>
                <p>
                  Nos integramos a su operación comercial como un aliado estratégico, para que usted se
                  enfoque exclusivamente en escalar sus ventas con la seguridad de que su mercadería está en
                  manos de especialistas.
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer Section */}
        <footer className="w-full pt-8">
          <div className="h-[1px] w-full bg-white/10 mb-4"></div>
          <div className="flex justify-between items-center text-[9px] uppercase tracking-[0.2em] text-gray-500 font-bold">
            <div className="w-1/3 text-left">Propuesta Operativa 2026</div>
            <div className="w-1/3 flex justify-center items-center gap-4 lowercase tracking-normal text-white/50">
              <span>@enviosdosruedas</span>
            </div>
            <div className="w-1/3 text-right">1 / 11</div>
          </div>
        </footer>
      </div>
    </div>
  );
}
