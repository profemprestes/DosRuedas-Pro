
import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Pagina1() {
  const bgImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <div className="a4-container mx-auto bg-primary relative overflow-hidden flex flex-col shadow-2xl text-white font-body" suppressHydrationWarning>
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

      <div className="relative z-20 flex flex-col h-full justify-between max-h-full p-10">
        {/* Header Section */}
        <header>
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
              {/* Accent Line */}
              <div className="absolute -left-2 w-1 h-8 bg-accent rounded-full opacity-70"></div>
              {/* Badge Body */}
              <div className="bg-primary/40 border border-accent/30 text-accent px-6 h-10 rounded-xl text-[13px] font-black font-headline tracking-[0.2em] backdrop-blur-md flex items-center gap-2 shadow-xl shadow-black/20">
                <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#FDC322]"></div>
                LOGÍSTICA CORPORATIVA
              </div>
            </div>
          </div>
          <div className="h-0.5 w-full bg-accent opacity-50"></div>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex flex-col justify-center items-center text-center mt-4 mb-4">
          {/* Title */}
          <h1 className="text-[52px] leading-none font-black font-headline text-white mb-2 tracking-tight uppercase">
            Partner Logístico
          </h1>
          <h1 className="text-[52px] leading-none font-black font-headline text-accent mb-8 tracking-tight uppercase">
            Especializado
          </h1>

          {/* Slogan */}
          <p className="text-xl italic font-light text-gray-300 mb-8">
            TU SOLUCION CONFIABLE
          </p>

          {/* Pill */}
          <div className="inline-block border border-accent/50 bg-primary/50 px-8 py-2 rounded-full text-accent font-semibold text-sm tracking-wide">
            Cobertura Integral en Mar del Plata
          </div>

          {/* Content Card */}
          <div className="mt-10 text-left max-w-2xl w-full relative">
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
        <footer className="mt-auto pt-8 pb-4">
          <div className="h-[1px] w-full bg-white/10 mb-4"></div>
          
          <div className="flex justify-between items-center text-[9px] uppercase tracking-[0.2em] text-gray-500 font-bold">
            <div className="w-1/3 text-left">Propuesta Operativa 2026</div>
            
            <div className="w-1/3 flex justify-center items-center gap-4 lowercase tracking-normal text-white/50">
              <div className="flex items-center gap-2">
                <a href="#" className="hover:text-white transition-colors">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 2.16c3.203 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16.16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
              <span>@enviosdosruedas</span>
            </div>
            
            <div className="w-1/3 text-right">1 / 11</div>
          </div>
        </footer>
      </div>
    </div>
  );
}
