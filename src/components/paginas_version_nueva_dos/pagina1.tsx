import React from 'react';
import Image from 'next/image';
import { PageHeader } from '../paginas_version_nueva/shared/PageHeader';
import { PageFooter } from '../paginas_version_nueva/shared/PageFooter';

export default function Pagina1() {
  return (
    <div className="a4-container bg-[#0a0a0a] flex flex-col h-full max-h-full overflow-hidden relative">
      <PageHeader badgeText="Pitch Deck v3" />

      <main className="flex-1 flex w-full">
        {/* Columna Izquierda (Texto B2B - 60%) */}
        <div className="w-[60%] flex flex-col justify-center p-12 pr-8 space-y-8">
          <h1 className="font-['Orbitron'] font-headline text-5xl font-bold text-white leading-tight">
            DosRuedas:{' '}
            <span className="text-[#fbc107]">Excelencia</span> en
            Logística y Mensajería.
          </h1>

          <h2 className="text-[#ffffff] font-body font-bold text-2xl border-l-4 border-[#2563eb] pl-4">
            Elevamos el estándar de entrega para empresas en Mar del Plata.
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed font-body">
            En un mercado dinámico donde cada entrega cuenta, no basta con mover paquetes; hay que mover confianza. Con 7 años de trayectoria ininterrumpida en la ciudad, nos hemos consolidado como el aliado logístico de las empresas que exigen puntualidad, profesionalismo y un trato impecable hacia su cliente final.
          </p>

          <div className="mt-8">
            <div className="bg-[#2563eb]/10 border border-[#2563eb]/30 text-white p-4 rounded-lg backdrop-blur-md inline-block w-fit shadow-sm">
              <p className="text-sm font-medium">Trayectoria, seriedad y tecnología para una distribución sin riesgos.</p>
            </div>
          </div>
        </div>

        {/* Columna Derecha (Visual - 40%) */}
        <div className="w-[40%] relative h-full flex flex-col justify-center py-12 pr-12 pl-4">
          <div className="relative w-full h-[85%] rounded-2xl overflow-hidden shadow-2xl shadow-[#2563eb]/20">
            <Image
              src="/portada.jpeg"
              alt="Logística y Mensajería"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
          </div>
        </div>
      </main>

      <PageFooter pageNumber="01" />
    </div>
  );
}
