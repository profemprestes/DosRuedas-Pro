import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';

export default function Pagina1() {
  const bgImg = PlaceHolderImages.find((img) => img.id === 'hero-bg');

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
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/90 to-primary/95 z-10" />
      </div>

      <div className="relative z-20 flex flex-col h-full justify-between max-h-full p-10">
        <PageHeader badgeText="LOGÍSTICA CORPORATIVA" />

        {/* Hero Section */}
        <main className="flex-1 flex flex-col justify-center items-center text-center mt-4 mb-4">
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

        <PageFooter pageNumber="1 / 11" />
      </div>
    </div>
  );
}