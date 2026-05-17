import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { ShoppingCart, MapPin, CheckCircle, ArrowRight, Zap } from 'lucide-react';

export default function Pagina4() {
  return (
    <div className="flex flex-col justify-between w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] overflow-hidden box-border bg-primary relative text-white font-body" suppressHydrationWarning>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/95 to-secondary/30 z-10" />

      <div className="relative z-20 flex flex-col h-full p-16 justify-between box-border">
        <PageHeader badgeText="MERCADOLIBRE FLEX" />

        <main className="flex-1 flex flex-col justify-center overflow-hidden gap-4">
          <div className="flex items-center gap-4 shrink-0">
            <div className="bg-accent p-3 rounded-xl shadow-lg">
              <ShoppingCart className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h2 className="text-5xl font-black font-headline italic uppercase leading-none">Envíos Flex</h2>
              <div className="inline-block bg-accent text-primary px-3 py-1 rounded font-black text-sm tracking-tight mt-1 uppercase">
                MERCADOLIBRE
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4 shrink-0">
            <MapPin className="w-8 h-8 text-accent shrink-0" />
            <p className="text-lg font-bold text-accent">Retiro por domicilio (Colecta) SIN CARGO en todo Mar del Plata.</p>
          </div>

          <div className="border-l-4 border-accent pl-6 shrink-0 my-2">
            <p className="italic text-slate-300 text-[15px] leading-relaxed">
              SLA Garantizado: Ventas concretadas hasta las <strong className="text-white">15:00hs</strong> serán entregadas en el día antes de las <strong className="text-white">20:00hs</strong>.
            </p>
          </div>

          <div className="flex-1 flex flex-col space-y-4 overflow-hidden">
            {/* Level 1 */}
            <div className="border border-accent/30 rounded-2xl p-5 bg-slate-900/40 relative overflow-hidden flex-1 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-black text-accent uppercase font-headline">Nivel 1: Volumen Inicial</h3>
                  <p className="text-[11px] text-slate-400 italic">Tarifa clásica zonificada. Ideal para comenzar a escalar ventas.</p>
                </div>
                <div className="bg-accent/20 text-accent px-3 py-1 rounded-full text-[10px] font-bold border border-accent/20">1 a 4 envíos / día</div>
              </div>
              <div className="grid grid-cols-2 gap-x-12 gap-y-1 text-sm font-bold border-t border-white/10 pt-3">
                <div className="flex justify-between"><span>Z1 (Hasta 3 km):</span> <span>$3.000</span></div>
                <div className="flex justify-between"><span>Z2 (3 a 5 km):</span> <span>$4.000</span></div>
                <div className="flex justify-between"><span>Z3 (5 a 7 km):</span> <span>$5.300</span></div>
                <div className="flex justify-between text-accent"><span>Z4 (7 a 10 km):</span> <span>$7.000</span></div>
              </div>
            </div>

            {/* Level 2 */}
            <div className="border border-green-500/30 rounded-2xl p-5 bg-slate-900/40 relative overflow-hidden flex-1 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <h3 className="text-lg font-black text-green-400 uppercase font-headline">Nivel 2: Vendedor Frecuente</h3>
                </div>
                <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-[10px] font-bold border border-green-500/20">+5 envíos / día</div>
              </div>
              <div className="grid grid-cols-2 gap-x-12 gap-y-1 text-sm font-bold border-t border-white/10 pt-3">
                <div className="flex justify-between"><span>Z1:</span> <span>$3.000</span></div>
                <div className="flex justify-between"><span>Z2:</span> <span>$4.000</span></div>
                <div className="flex justify-between"><span>Z3:</span> <span>$5.300</span></div>
                <div className="bg-green-500/10 text-green-400 px-4 py-1 rounded-lg text-center border border-green-500/20 font-black">Z4 y Z5: FIJO $6.500</div>
              </div>
            </div>

            {/* Level 3 */}
            <div className="bg-accent rounded-2xl p-6 text-primary flex-1 flex flex-col justify-center shadow-xl">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <Zap className="w-8 h-8 fill-primary" />
                  <h3 className="text-2xl font-black uppercase font-headline tracking-tighter">Nivel 3: Grandes Cuentas</h3>
                </div>
                <div className="bg-primary text-white px-3 py-1 rounded-full text-[10px] font-black">+10 envíos / día</div>
              </div>
              <div className="flex justify-between items-end border-t border-primary/20 pt-4">
                <span className="text-lg font-black uppercase italic tracking-tighter leading-none">Tarifa Plana<br/><span className="text-sm not-italic opacity-70">Todo Mar del Plata</span></span>
                <span className="text-5xl font-black font-headline tracking-tighter">$4.500</span>
              </div>
              <div className="bg-primary/10 mt-4 py-2 px-4 rounded-xl flex justify-center items-center gap-2 text-[11px] font-black uppercase border border-primary/20">
                <ArrowRight className="w-4 h-4" /> 2DA VISITA / REPROGRAMACIÓN SIN CARGO
              </div>
            </div>
          </div>
        </main>

        <PageFooter pageNumber="4 / 11" />
      </div>
    </div>
  );
}
