import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { ShoppingCart, MapPin, CheckCircle, Zap, CloudDrizzle } from 'lucide-react';

export default function Pagina4() {
  return (
    <div className="a4-container mx-auto bg-primary relative overflow-hidden flex flex-col shadow-2xl text-white font-body" suppressHydrationWarning>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/95 to-secondary/50 z-10" />

      <div className="relative z-20 flex flex-col h-full justify-between max-h-full p-10">
        <PageHeader badgeText="MERCADOLIBRE FLEX" />

        <main className="flex-1 flex flex-col mt-4 mb-4 gap-3 overflow-hidden">
          
          {/* Header Title */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="bg-accent p-3 rounded-xl shadow-lg">
              <ShoppingCart className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-5xl font-black font-headline italic uppercase leading-none">Envíos Flex</h2>
              <div className="inline-block bg-accent text-primary px-3 py-1 rounded font-black text-sm tracking-tight mt-1 uppercase">
                MERCADOLIBRE
              </div>
            </div>
          </div>

          {/* Info Banner */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-4 shrink-0 mt-2">
            <MapPin className="w-6 h-6 text-accent shrink-0" />
            <p className="text-[15px] font-bold text-accent">Retiro por domicilio (Colecta) SIN CARGO en todo Mar del Plata.</p>
          </div>

          {/* SLA Note */}
          <div className="border-l-4 border-accent pl-4 shrink-0 my-1">
            <p className="italic text-slate-300 text-sm leading-relaxed">
              SLA Garantizado: Ventas concretadas hasta las <strong className="text-white">15:00hs</strong> serán entregadas en el día antes de las <strong className="text-white">20:00hs</strong>.
            </p>
          </div>

          {/* Levels Wrapper */}
          <div className="flex-1 flex flex-col gap-3 min-h-0">
            
            {/* Level 1 */}
            <div className="border border-accent/30 rounded-xl p-4 bg-secondary/40 flex-1 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-black text-accent uppercase font-headline">Nivel 1: Volumen Inicial</h3>
                  <p className="text-[11px] text-slate-400 italic">Tarifa clásica zonificada. Ideal para garantizar entregas en el día.</p>
                </div>
                <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-[10px] font-bold border border-accent/20">1 a 4 envíos / día</div>
              </div>
              <div className="grid grid-cols-2 gap-x-12 gap-y-1 text-sm font-semibold border-t border-white/10 pt-2">
                <div className="flex justify-between"><span>Z1 (Hasta 3 km):</span> <span>$3.000</span></div>
                <div className="flex justify-between"><span>Z2 (3 a 5 km):</span> <span>$4.000</span></div>
                <div className="flex justify-between"><span>Z3 (5 a 7 km):</span> <span>$5.300</span></div>
                <div className="flex justify-between text-accent font-bold"><span>Z4 y Z5:</span> <span>Tarifa Regular</span></div>
              </div>
              <p className="text-[10px] text-accent/80 font-bold uppercase mt-2">2DA VISITA: 50% DEL VALOR EN TODAS LAS ZONAS.</p>
            </div>

            {/* Level 2 */}
            <div className="border border-green-500/30 rounded-xl p-4 bg-secondary/40 flex-1 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <h3 className="text-lg font-black text-green-400 uppercase font-headline">Nivel 2: Vendedor Frecuente</h3>
                </div>
                <div className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-[10px] font-bold border border-green-500/20">+5 envíos / día</div>
              </div>
              <div className="grid grid-cols-2 gap-x-12 gap-y-1 text-sm font-semibold border-t border-white/10 pt-2">
                <div className="flex justify-between"><span>Z1:</span> <span>$3.000</span></div>
                <div className="flex justify-between"><span>Z2:</span> <span>$4.000</span></div>
                <div className="flex justify-between"><span>Z3:</span> <span>$5.300</span></div>
                <div className="bg-green-500/10 text-green-400 px-2 py-0.5 rounded text-center border border-green-500/20 font-black">Z4 y Z5: FIJO $6.500</div>
              </div>
              <p className="text-[10px] text-green-400 font-bold uppercase mt-2">2DA VISITA: Z1 SIN CARGO. (Z2 A Z5 AL 50%).</p>
            </div>

            {/* Level 3 */}
            <div className="bg-accent rounded-xl p-5 text-primary flex-1 flex flex-col justify-center shadow-xl">
              <div className="flex justify-between items-start mb-1">
                <div className="flex items-center gap-2">
                  <Zap className="w-6 h-6 fill-primary" />
                  <h3 className="text-xl font-black uppercase font-headline tracking-tighter">Nivel 3: Grandes Cuentas</h3>
                </div>
                <div className="bg-primary text-white px-3 py-1 rounded-full text-[10px] font-black">+10 envíos / día</div>
              </div>
              <div className="flex justify-between items-end border-t border-primary/20 pt-2">
                <span className="text-base font-black uppercase italic tracking-tighter leading-tight">Tarifa Plana<br/><span className="text-[11px] not-italic opacity-70">A TODO MAR DEL PLATA</span></span>
                <span className="text-4xl font-black font-headline tracking-tighter">$4.500</span>
              </div>
              <div className="bg-primary/10 mt-2 py-1.5 px-3 rounded-lg flex justify-center items-center gap-2 text-[10px] font-black uppercase border border-primary/20">
                2DA VISITA / REPROGRAMACIÓN: ¡SIN CARGO A TODAS LAS ZONAS!
              </div>
            </div>
            
          </div>

          {/* Weather Policy */}
          <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center justify-center gap-4 shrink-0 mt-1">
            <CloudDrizzle className="w-5 h-5 text-accent" />
            <span className="text-xs font-medium text-slate-300">
              <strong className="text-accent uppercase">Clima Adverso / Lluvia:</strong> Recargo operativo exclusivo para Flex reducido al <strong className="text-white">30%</strong>.
            </span>
          </div>

        </main>

        <PageFooter pageNumber="4 / 11" />
      </div>
    </div>
  );
}