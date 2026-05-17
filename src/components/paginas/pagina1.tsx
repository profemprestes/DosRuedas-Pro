import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';

export default function Pagina1() {
  const bgImg = PlaceHolderImages.find((img) => img.id === 'hero-bg');

  return (
    <div className="a4-container mx-auto bg-[#0a0a0a] relative overflow-hidden flex flex-col shadow-2xl text-white font-body" suppressHydrationWarning>
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImg?.imageUrl || 'https://picsum.photos/seed/dosruedas-hero/1200/800'}
          alt="Background"
          fill
          className="object-cover opacity-20 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#2563eb]/20 to-[#0a0a0a] mix-blend-multiply z-10" />
      </div>

      <div className="relative z-20 flex flex-col h-full justify-between max-h-full p-10">
        <PageHeader badgeText="ÚLTIMA MILLA & 3PL FULFILLMENT" />

        {/* Hero Section */}
        <main className="flex-1 flex w-full justify-between items-center mt-4 mb-4 gap-8">
          {/* Columna Izquierda (70%) */}
          <div className="w-[70%] flex flex-col justify-center items-start text-left">
            <p className="text-[#fbc107] font-semibold tracking-widest uppercase mb-4 text-sm">
              Tu Departamento de Logística Externo
            </p>

            <h1 className="text-[56px] leading-[1.1] font-black font-headline text-white mb-8 tracking-tight uppercase max-w-3xl">
              LOGÍSTICA <span className="text-[#fbc107]">DE PRECISIÓN</span>
            </h1>

            <div className="max-w-2xl w-full bg-black/40 backdrop-blur-md border-l-4 border-l-[#2563eb] p-8 rounded-r-xl">
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider font-headline">
                Transformamos costos fijos en <span className="text-[#fbc107]">ventaja competitiva</span>
              </h2>

              <p className="text-gray-300 leading-relaxed text-[16px] mb-6 font-body">
                Nos integramos a la infraestructura comercial de E-commerce, plataformas y empresas corporativas. No somos una mensajería tradicional; operamos como un partner estratégico impulsado por tecnología.
              </p>

              <ul className="space-y-4 font-body">
                <li className="flex items-start gap-3 text-gray-200">
                  <span className="text-[#2563eb] text-lg leading-none mt-0.5">✓</span>
                  <span>Absoluta certeza en SLA (Acuerdos de Nivel de Servicio).</span>
                </li>
                <li className="flex items-start gap-3 text-gray-200">
                  <span className="text-[#2563eb] text-lg leading-none mt-0.5">✓</span>
                  <span>Escalabilidad operativa inmediata.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-200">
                  <span className="text-[#2563eb] text-lg leading-none mt-0.5">✓</span>
                  <span>Foco exclusivo: Usted vende, nosotros garantizamos la entrega.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Columna Derecha (30%) */}
          <div className="w-[30%] flex flex-col gap-6 items-end relative">
            <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-2xl transform translate-x-4 -rotate-2 hover:rotate-0 transition-transform">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-3 h-3 rounded-full bg-[#fbc107] animate-pulse"></span>
                <h3 className="text-white font-headline font-bold text-lg tracking-wide uppercase">Liderazgo Local</h3>
              </div>
              <p className="text-gray-200 font-body text-sm">7 Años Liderando Mar del Plata</p>
            </div>

            <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-2xl transform -translate-x-4 rotate-2 hover:rotate-0 transition-transform">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[#2563eb] text-xl">⚡</span>
                <h3 className="text-white font-headline font-bold text-lg tracking-wide uppercase">Partner 3PL</h3>
              </div>
              <p className="text-gray-200 font-body text-sm">Integración tecnológica y operativa</p>
            </div>
          </div>
        </main>

        <PageFooter pageNumber="1 / 11" />
      </div>
    </div>
  );
}
