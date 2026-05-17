import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Zap, Clock, CloudDrizzle, Package, Undo2 } from 'lucide-react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';

export default function Pagina2() {
  const bgImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <div className="flex flex-col justify-between w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] overflow-hidden box-border bg-primary relative text-white font-body" suppressHydrationWarning>
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

      <div className="relative z-20 flex flex-col h-full p-16 justify-between box-border">
        <PageHeader badgeText="POR DEMANDA" />

        <main className="flex-1 flex flex-col justify-center overflow-hidden gap-6">
          <div className="flex items-center gap-3 bg-accent/10 p-4 rounded-lg border-l-4 border-accent shrink-0">
            <Zap className="w-8 h-8 text-accent fill-accent" />
            <h2 className="text-4xl font-black font-headline text-white tracking-tight uppercase italic">ENVÍOS EXPRESS</h2>
          </div>

          <section className="bg-white/5 border-l-4 border-accent rounded-r-xl p-6 backdrop-blur-sm shrink-0">
            <h3 className="text-xl font-bold mb-3 italic font-headline">Entregas con Elección de Rango Horario.</h3>
            <p className="text-gray-300 text-[15px] leading-relaxed mb-4">
              La principal ventaja de este servicio es la personalización y la certeza. Usted nos indica el rango o límite horario y nosotros cumplimos, ideal para ventas exigentes.
            </p>
            <div className="bg-primary/80 border border-white/10 rounded-lg p-4 flex items-start gap-3">
              <Clock className="w-5 h-5 text-accent shrink-0" />
              <p className="text-accent text-[13px] font-semibold italic">
                Importante: Se requiere solicitar el envío con un mínimo de 2 horas de anticipación.
              </p>
            </div>
          </section>

          <div className="overflow-hidden bg-white rounded-xl shadow-lg border border-slate-200 flex-grow flex flex-col">
            <table className="w-full text-xs text-slate-700 h-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                  <th className="px-6 py-4 text-left">Zonificación de Entrega</th>
                  <th className="px-6 py-4 text-right">Valor Final</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium divide-y divide-slate-100 flex-1">
                {[
                  { z: "Zona 1 (Hasta 3 km)", p: "$3.700" },
                  { z: "Zona 2 (3 a 5 km)", p: "$4.600" },
                  { z: "Zona 3 (5 a 7 km)", p: "$6.100" },
                  { z: "Zona 4 (7 a 10 km)", p: "$8.200" },
                  { z: "Zona 5 (Más de 10 km)", p: "$1.000 x km" },
                ].map((row, i) => (
                  <tr key={i} className="odd:bg-white even:bg-slate-50/30">
                    <td className="px-6 py-4 font-bold text-slate-800">{row.z}</td>
                    <td className="px-6 py-4 text-right text-accent font-black text-lg">{row.p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <section className="shrink-0">
            <h4 className="text-accent font-bold tracking-widest text-[11px] uppercase mb-4 opacity-70 italic font-headline">Condiciones Operativas Adicionales</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-3 items-center">
                <CloudDrizzle className="w-6 h-6 text-blue-400" />
                <div>
                  <h5 className="text-accent font-bold text-[10px] uppercase">Clima Adverso</h5>
                  <p className="text-[10px] text-gray-400 italic leading-tight">Recargo del 50% sobre el valor del viaje.</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-3 items-center">
                <Clock className="w-6 h-6 text-accent" />
                <div>
                  <h5 className="text-accent font-bold text-[10px] uppercase">Demora en Domicilio</h5>
                  <p className="text-[10px] text-gray-400 italic leading-tight">Tolerancia 10 min. Luego, +$2.200 c/10 min.</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-3 items-center">
                <Package className="w-6 h-6 text-accent" />
                <div>
                  <h5 className="text-accent font-bold text-[10px] uppercase">Bulto Excedente</h5>
                  <p className="text-[10px] text-gray-400 italic leading-tight">{">"}5Kg o 40x40x30cm. Desde $1.800 extra.</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-3 items-center">
                <Undo2 className="w-6 h-6 text-purple-400" />
                <div>
                  <h5 className="text-accent font-bold text-[10px] uppercase">Retorno / Vuelta</h5>
                  <p className="text-[10px] text-gray-400 italic leading-tight">2da visita se factura al 50% del original.</p>
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
