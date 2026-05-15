
import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Pagina1() {
  const bgImg = PlaceHolderImages.find(img => img.id === 'page-bg-1');
  const logoImg = PlaceHolderImages.find(img => img.id === 'dr-logo');

  return (
    <div className="a4-container mx-auto bg-primary relative overflow-hidden flex flex-col shadow-2xl text-white font-montserrat">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImg?.imageUrl || ''}
          alt="Background"
          fill
          className="object-cover opacity-30"
          data-ai-hint="dark warehouse"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/85 to-[#0a1128]/95 z-10" />
      </div>

      <div className="relative z-20 flex flex-col h-full p-16">
        {/* Header Section */}
        <header className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 relative">
                <Image 
                  src={logoImg?.imageUrl || ''} 
                  alt="Envíos DosRuedas Logo" 
                  fill 
                  className="object-contain"
                  data-ai-hint="logistics logo"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-2xl font-black italic tracking-tighter leading-none flex gap-1">
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
              <div className="bg-[#0a1128]/40 border border-accent/30 text-accent px-6 h-10 rounded-xl text-[13px] font-black tracking-[0.2em] backdrop-blur-md flex items-center gap-2 shadow-xl">
                <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#fbbd08]"></div>
                LOGÍSTICA CORPORATIVA
              </div>
            </div>
          </div>
          <div className="h-0.5 w-full bg-accent opacity-50"></div>
        </header>

        {/* Hero Section */}
        <main className="flex-grow flex flex-col items-center justify-center text-center -mt-6">
          <h1 className="text-[52px] leading-none font-black text-white mb-2 tracking-tight uppercase">
            Partner Logístico
          </h1>
          <h1 className="text-[52px] leading-none font-black text-accent mb-8 tracking-tight uppercase">
            Especializado
          </h1>

          <p className="text-xl italic font-light text-gray-300 mb-8 uppercase tracking-widest">
            TU SOLUCION CONFIABLE
          </p>

          <div className="inline-block border border-accent/50 bg-[#0a1128]/50 px-8 py-2 rounded-full text-accent font-semibold text-sm tracking-wide mb-10">
            Cobertura Integral en Mar del Plata
          </div>

          <div className="text-left max-w-2xl w-full relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-full"></div>
            <div className="bg-[#16203d]/40 backdrop-blur-sm p-10 rounded-r-2xl border border-white/5 ml-1">
              <h2 className="text-2xl font-bold text-accent mb-6 uppercase tracking-wider">
                7 Años Innovando en la Ciudad
              </h2>

              <div className="space-y-5 text-gray-200 leading-relaxed text-sm">
                <p>
                  Nacimos en Mar del Plata y llevamos más de 7 años operando, creciendo e innovando de manera
                  constante. Desde nuestros inicios, nos guía un único propósito: brindar un servicio
                  logístico de excelencia y confianza.
                </p>
                <p>
                  Hoy nos especializamos en la logística de última milla para <span className="font-bold text-white">E-Commerce, plataformas y pymes</span>, posicionándonos
                  como el partner logístico de referencia en la ciudad. Entendemos que la experiencia de su
                  cliente se define en la puerta de su casa.
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
        <footer className="mt-12">
          <div className="h-[1px] w-full bg-white/10 mb-4"></div>
          <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold">
            <div>Propuesta Operativa 2026</div>
            <div>1 / 11</div>
          </div>
        </footer>
      </div>
    </div>
  );
}
