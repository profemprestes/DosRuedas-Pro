import React from 'react';
import Image from 'next/image';
import { Zap, Clock, CloudDrizzle, Package, Undo2 } from 'lucide-react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';

export default function Pagina2() {
  return (
    <div className="a4-container mx-auto bg-[#0a0a0a] relative overflow-hidden flex flex-col shadow-2xl text-white font-body" suppressHydrationWarning>
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="https://picsum.photos/seed/dosruedas-bg-2/1200/1600"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/95 to-[#0a0a0a] z-10" />
      </div>

      <div className="relative z-20 flex flex-col h-full justify-between max-h-full p-10">
        <PageHeader badgeText="SLA DE ALTA CRITICIDAD" />

        {/* Main Content */}
        <main className="flex-1 flex flex-col mt-4 mb-4 gap-4">
          {/* Section Title */}
          <div className="flex items-center gap-3 bg-black/40 p-4 rounded-lg border-l-4 border-[#2563eb] backdrop-blur shrink-0 shadow-lg">
            <Zap className="w-8 h-8 text-[#2563eb] fill-[#2563eb]" />
            <div className="flex flex-col">
              <h1 className="text-4xl font-black font-headline text-[#2563eb] tracking-tight uppercase italic skew-x-[-5deg]">
                ENVÍOS EXPRESS
              </h1>
              <p className="text-[#fbc107] font-bold font-headline text-sm uppercase tracking-widest mt-1">
                Certeza Absoluta para tu Cliente Final
              </p>
            </div>
          </div>

          {/* Featured Description */}
          <section className="bg-black/40 border-l-4 border-[#2563eb] rounded-r-xl p-6 shrink-0 backdrop-blur border-y border-r border-white/10">
            <h3 className="text-xl font-bold mb-3 italic">El cliente elige el rango exacto.</h3>
            <p className="text-gray-300 text-[15px] leading-relaxed mb-4">
              La principal ventaja de este servicio es la personalización y la certeza absoluta. Su cliente indica el rango exacto o límite horario y nosotros cumplimos, ideal para operaciones B2B exigentes.
            </p>
            <div className="bg-[#0a0a0a]/80 border border-[#2563eb]/30 rounded-lg p-4 flex items-start gap-3 backdrop-blur shadow-md">
              <Clock className="w-5 h-5 text-[#2563eb] mt-0.5 shrink-0" />
              <p className="text-[#fbc107] text-[13px] font-semibold italic">
                Importante: Para organizar la logística y garantizar el SLA, se requiere solicitar el envío con un mínimo de 2 horas de anticipación al horario límite.
              </p>
            </div>
          </section>

          {/* Pricing Table - Corporate Enterprise Style */}
          <section className="shrink-0 flex-grow flex flex-col justify-center">
            <div className="overflow-hidden bg-black/40 border border-[#2563eb]/30 rounded-xl shadow-2xl backdrop-blur-md w-full">
              <table className="w-full border-collapse text-left text-sm text-gray-300">
                <thead className="bg-[#2563eb]/10 border-b border-[#2563eb]/30">
                  <tr className="text-[11px] font-bold tracking-wider text-[#2563eb] uppercase font-headline">
                    <th scope="col" className="px-6 py-3.5">Zonificación de Entrega</th>
                    <th scope="col" className="px-6 py-3.5 text-right">Valor Final</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { z: 'Zona 1 (Hasta 3 km)', p: '$3.700' },
                    { z: 'Zona 2 (3 a 5 km)', p: '$4.600' },
                    { z: 'Zona 3 (5 a 7 km)', p: '$6.100' },
                    { z: 'Zona 4 (7 a 10 km)', p: '$8.200' },
                    { z: 'Zona 5 (Más de 10 km)', p: '$1.000 x km' },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className="transition-colors hover:bg-white/5 odd:bg-transparent even:bg-white/[0.02]"
                    >
                      <td className="px-6 py-3 font-semibold text-gray-100">{row.z}</td>
                      <td className="px-6 py-3 text-right font-black text-[#ffffff] text-base tracking-tight font-headline">
                        {row.p}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Additional Conditions Grid */}
          <section className="shrink-0 mt-auto">
            <h4 className="text-[#2563eb] font-bold tracking-widest text-[11px] uppercase mb-4 opacity-90 italic font-headline border-b border-white/10 pb-2">
              Condiciones Operativas Adicionales
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/40 border border-white/10 rounded-xl p-4 flex gap-3 items-center backdrop-blur shadow-md">
                <CloudDrizzle className="w-6 h-6 text-[#2563eb]" />
                <div>
                  <h5 className="text-white font-bold text-[10px] uppercase tracking-wider font-headline">Clima Adverso</h5>
                  <p className="text-[10px] text-[#fbc107] font-semibold italic leading-tight">Lluvia: Recargo +50%</p>
                </div>
              </div>
              <div className="bg-black/40 border border-white/10 rounded-xl p-4 flex gap-3 items-center backdrop-blur shadow-md">
                <Clock className="w-6 h-6 text-[#2563eb]" />
                <div>
                  <h5 className="text-white font-bold text-[10px] uppercase tracking-wider font-headline">Demora en Domicilio</h5>
                  <p className="text-[10px] text-[#fbc107] font-semibold italic leading-tight">Tol. 10 min. Luego +$2.200</p>
                </div>
              </div>
              <div className="bg-black/40 border border-white/10 rounded-xl p-4 flex gap-3 items-center backdrop-blur shadow-md">
                <Package className="w-6 h-6 text-[#2563eb]" />
                <div>
                  <h5 className="text-white font-bold text-[10px] uppercase tracking-wider font-headline">Bulto Excedente</h5>
                  <p className="text-[10px] text-[#fbc107] font-semibold italic leading-tight">&gt;5Kg o 40cm. +$1.800</p>
                </div>
              </div>
              <div className="bg-black/40 border border-white/10 rounded-xl p-4 flex gap-3 items-center backdrop-blur shadow-md">
                <Undo2 className="w-6 h-6 text-[#2563eb]" />
                <div>
                  <h5 className="text-white font-bold text-[10px] uppercase tracking-wider font-headline">Retorno / Vuelta</h5>
                  <p className="text-[10px] text-[#fbc107] font-semibold italic leading-tight">2da visita al 50%</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <PageFooter pageNumber="2 / 11" />
      </div>
    </div>
  );
}
