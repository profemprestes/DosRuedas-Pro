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
    <div className="a4-container mx-auto bg-primary relative overflow-hidden flex flex-col shadow-2xl text-white font-montserrat" suppressHydrationWarning>
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

      <div className="relative z-20 flex flex-col h-full justify-between max-h-full p-10">
        {/* Header Section */}
        <PageHeader badgeText="POR DEMANDA" />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col">
          {/* Main Title */}
          <div className="flex items-center gap-3 mb-6 bg-accent/10 p-3 rounded-lg border-l-4 border-accent">
            <Zap className="w-6 h-6 text-accent fill-accent" />
            <h2 className="text-3xl font-black text-white tracking-tight uppercase italic">ENVÍOS EXPRESS</h2>
          </div>

          {/* Featured Card */}
          <section className="bg-white/5 border-l-4 border-accent rounded-r-xl p-6 mb-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 italic">Entregas con Elección de Rango Horario.</h3>
            <p className="text-gray-300 text-[15px] leading-relaxed mb-6">
              La principal ventaja de este servicio es la personalización y la certeza. Usted nos indica el rango o límite horario (por ejemplo, "entregar antes de las 17:00hs") y nosotros cumplimos, ideal para ventas exigentes.
            </p>
            <div className="bg-primary/80 border border-white/5 rounded-lg p-4 flex items-start gap-3">
              <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <p className="text-accent text-sm font-semibold leading-snug italic">
                Importante: Para organizar la logística y garantizar el cumplimiento, se requiere solicitar el envío con un mínimo de 2 horas de anticipación.
              </p>
            </div>
          </section>

          {/* Pricing Table */}
          <section className="mb-8">
            <div className="flex justify-between items-end border-b border-accent/40 pb-2 mb-3">
              <h4 className="text-accent font-bold tracking-widest text-[11px] uppercase">Zonificación de Entrega</h4>
              <h4 className="text-accent font-bold tracking-widest text-[11px] uppercase text-right">Valor Final</h4>
            </div>
            
            <div className="space-y-0 text-base">
              {[
                { zone: "Zona 1 (Hasta 3 km)", price: "$3.700" },
                { zone: "Zona 2 (3 a 5 km)", price: "$4.600" },
                { zone: "Zona 3 (5 a 7 km)", price: "$6.100" },
                { zone: "Zona 4 (7 a 10 km)", price: "$8.200" },
                { zone: "Zona 5 (Más de 10 km)", price: "$1.000 x km" },
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between py-2 border-b border-white/5 hover:bg-white/5 transition-colors px-2 rounded">
                  <span className="font-medium text-sm text-gray-300">{item.zone}</span>
                  <span className="text-accent font-bold text-lg">{item.price}</span>
                </div>
              ))}
            </div>
          </section>

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
