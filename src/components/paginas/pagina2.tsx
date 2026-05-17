import React from 'react';
import Image from 'next/image';
import { Zap, Clock, CloudDrizzle, Package, Undo2 } from 'lucide-react';

export default function Pagina2() {
  return (
    <div className="flex flex-col justify-between w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] overflow-hidden box-border bg-[#0a1128] relative text-white font-montserrat shadow-2xl print:shadow-none" suppressHydrationWarning>
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image 
          src="https://picsum.photos/seed/dosruedas-bg-2/1200/1600" 
          alt="Background" 
          fill 
          className="object-cover"
          data-ai-hint="dark warehouse"
        />
      </div>

      <div className="relative z-20 flex flex-col h-full p-[16mm] justify-between box-border">
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
                <div className="text-2xl font-black italic skew-x-[-5deg] tracking-tighter leading-none">
                  <span className="text-white">ENVIOS</span>
                  <span className="text-[#fbbd08]">DOSRUEDAS</span>
                </div>
                <div className="text-[10px] font-bold tracking-[0.3em] text-[#fbbd08] uppercase mt-1">
                  TU SOLUCION CONFIABLE
                </div>
              </div>
            </div>
            <div className="relative flex items-center h-12">
              <div className="absolute -left-2 w-1 h-8 bg-[#fbbd08] rounded-full opacity-70"></div>
              <div className="bg-[#0a1128]/40 border border-[#fbbd08]/30 text-[#fbbd08] px-6 h-10 rounded-xl text-[13px] font-black tracking-[0.2em] backdrop-blur-md flex items-center gap-2 shadow-xl shadow-black/20 uppercase">
                <div className="w-1.5 h-1.5 rounded-full bg-[#fbbd08] shadow-[0_0_8px_#fbbd08]"></div>
                POR DEMANDA
              </div>
            </div>
          </div>
          <div className="h-0.5 w-full bg-[#fbbd08] opacity-50 mb-6"></div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Section Title */}
          <div className="flex items-center gap-3 mb-6 bg-[#fbbd08]/10 p-4 rounded-lg border-l-4 border-[#fbbd08] shrink-0">
            <Zap className="w-8 h-8 text-[#fbbd08] fill-[#fbbd08]" />
            <h2 className="text-4xl font-black text-white tracking-tight uppercase italic skew-x-[-5deg]">ENVÍOS EXPRESS</h2>
          </div>

          {/* Featured Description */}
          <section className="bg-white/5 border-l-4 border-[#fbbd08] rounded-r-xl p-6 mb-8 shrink-0">
            <h3 className="text-xl font-bold mb-3 italic">Entregas con Elección de Rango Horario.</h3>
            <p className="text-gray-300 text-[15px] leading-relaxed mb-4">
              La principal ventaja de este servicio es la personalización y la certeza. Usted nos indica el rango o límite horario y nosotros cumplimos, ideal para ventas exigentes.
            </p>
            <div className="bg-[#0a1128]/80 border border-white/10 rounded-lg p-4 flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#fbbd08] mt-0.5 shrink-0" />
              <p className="text-[#fbbd08] text-[13px] font-semibold italic">
                Importante: Para organizar la logística y garantizar el cumplimiento, se requiere solicitar el envío con un mínimo de 2 horas de anticipación.
              </p>
            </div>
          </section>

          {/* Pricing Table - Redesigned to match the dark identity */}
          <section className="mb-8 shrink-0">
            <div className="overflow-hidden bg-white/5 border border-white/10 rounded-xl shadow-2xl backdrop-blur-md w-full">
              <table className="w-full border-collapse text-left text-sm text-gray-300">
                <thead className="bg-white/10 border-b border-white/10">
                  <tr className="text-[11px] font-bold tracking-wider text-[#fbbd08] uppercase">
                    <th scope="col" className="px-6 py-3.5">Zonificación de Entrega</th>
                    <th scope="col" className="px-6 py-3.5 text-right">Valor Final</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { z: "Zona 1 (Hasta 3 km)", p: "$3.700" },
                    { z: "Zona 2 (3 a 5 km)", p: "$4.600" },
                    { z: "Zona 3 (5 a 7 km)", p: "$6.100" },
                    { z: "Zona 4 (7 a 10 km)", p: "$8.200" },
                    { z: "Zona 5 (Más de 10 km)", p: "$1.000 x km" },
                  ].map((row, i) => (
                    <tr 
                      key={i} 
                      className="transition-colors hover:bg-white/5 odd:bg-transparent even:bg-white/[0.02]"
                    >
                      <td className="px-6 py-3 font-semibold text-gray-100">
                        {row.z}
                      </td>
                      <td className="px-6 py-3 text-right font-black text-[#fbbd08] text-base tracking-tight">
                        {row.p}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Additional Conditions Grid */}
          <section className="shrink-0">
            <h4 className="text-[#fbbd08] font-bold tracking-widest text-[11px] uppercase mb-4 opacity-70 italic">Condiciones Operativas Adicionales</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-3 items-center">
                <CloudDrizzle className="w-6 h-6 text-blue-400" />
                <div>
                  <h5 className="text-[#fbbd08] font-bold text-[10px] uppercase">Clima Adverso</h5>
                  <p className="text-[10px] text-gray-400 italic leading-tight">(Lluvia): Recargo del 50% sobre el valor del viaje.</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-3 items-center">
                <Clock className="w-6 h-6 text-[#fbbd08]" />
                <div>
                  <h5 className="text-[#fbbd08] font-bold text-[10px] uppercase">Demora en Domicilio</h5>
                  <p className="text-[10px] text-gray-400 italic leading-tight">Tolerancia 10 min. Luego, +$2.200 c/10 min.</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-3 items-center">
                <Package className="w-6 h-6 text-[#fbbd08]" />
                <div>
                  <h5 className="text-[#fbbd08] font-bold text-[10px] uppercase">Bulto Excedente</h5>
                  <p className="text-[10px] text-gray-400 italic leading-tight">{">"}5Kg o 40x40x30cm. Desde $1.800 extra.</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-3 items-center">
                <Undo2 className="w-6 h-6 text-purple-400" />
                <div>
                  <h5 className="text-[#fbbd08] font-bold text-[10px] uppercase">Retorno / Vuelta</h5>
                  <p className="text-[10px] text-gray-400 italic leading-tight">2da visita se factura al 50% del original.</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer Section */}
        <footer className="w-full pt-8 shrink-0">
          <div className="h-[1px] w-full bg-white/10 mb-4"></div>
          <div className="flex justify-between items-center text-[9px] uppercase tracking-[0.2em] text-gray-500 font-bold">
            <div className="w-1/3 text-left">Propuesta Operativa 2026</div>
            <div className="w-1/3 flex justify-center items-center gap-4 lowercase tracking-normal text-white/50">
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 bg-white/20 rounded-full"></div>
                <div className="w-3.5 h-3.5 bg-white/20 rounded-full"></div>
              </div>
              <span>@enviosdosruedas</span>
            </div>
            <div className="w-1/3 text-right">2 / 11</div>
          </div>
        </footer>
      </div>
    </div>
  );
}