'use client';

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Zap, Clock, CloudDrizzle, Package, Undo2 } from 'lucide-react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';

export default function Pagina2() {
  const bgImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <div className="a4-container flex flex-col justify-between w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] overflow-hidden box-border bg-white relative shadow-2xl font-body" suppressHydrationWarning>
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={bgImg?.imageUrl || 'https://picsum.photos/seed/dosruedas-hero/1200/800'} 
          alt="Background" 
          fill 
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/95 to-primary z-10" />
      </div>

      <div className="relative z-20 flex flex-col h-full justify-between max-h-full p-4">
        {/* Header Section */}
        <PageHeader badgeText="POR DEMANDA" />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col mt-2 mb-2 max-h-full">
          {/* Main Title */}
          <div className="flex items-center gap-3 mb-3 bg-accent/10 p-3 rounded-lg border-l-4 border-accent">
            <Zap className="w-6 h-6 text-accent fill-accent" />
            <h2 className="text-3xl font-black font-headline text-white tracking-tight uppercase italic">ENVÍOS EXPRESS</h2>
          </div>

          {/* Featured Card */}
          <section className="bg-white/5 border-l-4 border-accent rounded-r-xl p-4 mb-4 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 italic">Entregas con Elección de Rango Horario.</h3>
            <p className="text-gray-300 text-[15px] leading-relaxed mb-3">
              La principal ventaja de este servicio es la personalización y la certeza. Usted nos indica el rango o límite horario (por ejemplo, "entregar antes de las 17:00hs") y nosotros cumplimos, ideal para ventas exigentes.
            </p>
            <div className="bg-primary/80 border border-white/5 rounded-lg p-4 flex items-start gap-3">
              <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <p className="text-accent text-[10px] font-semibold leading-snug italic">
                Importante: Para organizar la logística y garantizar el cumplimiento, se requiere solicitar el envío con un mínimo de 2 horas de anticipación.
              </p>
            </div>
          </section>


            {/* Pricing Table (Enterprise Style) */}
            <div className="overflow-hidden bg-white rounded-xl shadow-lg border border-slate-200 mb-4 flex-grow flex flex-col justify-center">
                <table className="w-full text-[10px] text-slate-700">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
                            <th className="px-4 py-3 text-left">Zonificación de Entrega</th>
                            <th className="px-4 py-3 text-right">Valor Final</th>
                        </tr>
                    </thead>
                    <tbody className="text-[10px] font-medium divide-y divide-slate-100">
                        <tr className="odd:bg-white even:bg-slate-50/50 hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3 text-left font-bold text-slate-800">Zona 1 (Hasta 3 km)</td>
                            <td className="px-4 py-3 text-right text-accent font-bold text-lg">$3.700</td>
                        </tr>
                        <tr className="odd:bg-white even:bg-slate-50/50 hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3 text-left font-bold text-slate-800">Zona 2 (3 a 5 km)</td>
                            <td className="px-4 py-3 text-right text-accent font-bold text-lg">$4.600</td>
                        </tr>
                        <tr className="odd:bg-white even:bg-slate-50/50 hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3 text-left font-bold text-slate-800">Zona 3 (5 a 7 km)</td>
                            <td className="px-4 py-3 text-right text-accent font-bold text-lg">$6.100</td>
                        </tr>
                        <tr className="odd:bg-white even:bg-slate-50/50 hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3 text-left font-bold text-slate-800">Zona 4 (7 a 10 km)</td>
                            <td className="px-4 py-3 text-right text-accent font-bold text-lg">$8.200</td>
                        </tr>
                        <tr className="odd:bg-white even:bg-slate-50/50 hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3 text-left font-bold text-slate-800">Zona 5 (Más de 10 km)</td>
                            <td className="px-4 py-3 text-right text-accent font-bold text-lg">$1.000 x km</td>
                        </tr>
                    </tbody>
                </table>
            </div>


          {/* Additional Conditions Grid */}
          <section className="mt-auto">
            <h4 className="text-accent font-bold tracking-widest text-[11px] uppercase mb-4 opacity-70 italic">Condiciones Adicionales Operativas</h4>
            
            <div className="grid grid-cols-2 gap-3">
              {/* Condition 1 */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <CloudDrizzle className="w-5 h-5 text-blue-400" />
                  <h5 className="text-accent font-bold text-[10px] uppercase">Clima Adverso</h5>
                </div>
                <p className="text-[10px] text-gray-400 leading-snug italic">
                  (Lluvia/calzada mojada): Recargo del 50% sobre el valor del viaje.
                </p>
              </div>

              {/* Condition 2 */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-accent" />
                  <h5 className="text-accent font-bold text-[10px] uppercase">Demora en Domicilio</h5>
                </div>
                <p className="text-[10px] text-gray-400 leading-snug italic">
                  Tolerancia 10 min. Luego, +$2.200 cada 10 min de espera.
                </p>
              </div>

              {/* Condition 3 */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Package className="w-5 h-5 text-accent" />
                  <h5 className="text-accent font-bold text-[10px] uppercase">Bulto Excedente</h5>
                </div>
                <p className="text-[10px] text-gray-400 leading-snug italic">
                  Mayor a 5Kg o 40x40x30cm. Adicional desde $1.800 por bulto.
                </p>
              </div>

              {/* Condition 4 */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Undo2 className="w-5 h-5 text-purple-400" />
                  <h5 className="text-accent font-bold text-[10px] uppercase">Retorno / Vuelta</h5>
                </div>
                <p className="text-[10px] text-gray-400 leading-snug italic">
                  Inmediata o 2da visita: Se factura al 50% del valor original.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer Section */}
        <PageFooter pageNumber="2 / 11" />
      </div>
    </div>
  );
}
