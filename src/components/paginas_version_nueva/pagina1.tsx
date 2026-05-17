import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';

export default function Pagina1() {
  return (
    <div className="a4-container flex flex-col h-full justify-between overflow-hidden relative bg-[#0a0a0a]">
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{ backgroundImage: "url('https://picsum.photos/800/1200?random=1')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/50 to-[#0a0a0a]" />

      <PageHeader badgeText="ÚLTIMA MILLA & 3PL FULFILLMENT" />

      <main className="flex-1 flex items-center px-12 z-10">
        <div className="w-2/3 flex flex-col gap-8">
          <div>
            <h1 className="text-6xl font-black text-white font-headline tracking-tight leading-none mb-4">
              LOGÍSTICA DE PRECISIÓN
            </h1>
            <h2 className="text-2xl text-[#fbc107] font-body tracking-wide">
              Tu Departamento de Logística Externo
            </h2>
          </div>

          <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-[#2563eb]/30 rounded-xl p-8 shadow-2xl">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#2563eb] mt-2 shrink-0 shadow-[0_0_8px_#2563eb]" />
                <p className="text-white text-lg font-body leading-relaxed">
                  Infraestructura logística escalable y adaptada a tus necesidades.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#2563eb] mt-2 shrink-0 shadow-[0_0_8px_#2563eb]" />
                <p className="text-white text-lg font-body leading-relaxed">
                  Trazabilidad en tiempo real y métricas claras.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#2563eb] mt-2 shrink-0 shadow-[0_0_8px_#2563eb]" />
                <p className="text-white text-lg font-body leading-relaxed">
                  Reducción de costos operativos e incremento de rentabilidad.
                </p>
              </li>
            </ul>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#2563eb]/20 border border-[#2563eb]/50 rounded-full px-6 py-3 w-fit">
            <span className="text-[#2563eb] font-bold">★</span>
            <span className="text-white font-body text-sm font-semibold tracking-wide">
              7 Años Liderando Mar del Plata
            </span>
          </div>
        </div>
      </main>

      <PageFooter pageNumber="1 / 11" />
    </div>
  );
}
