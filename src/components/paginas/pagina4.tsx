import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { ShoppingCart, MapPin, CheckCircle, Zap, CloudDrizzle } from 'lucide-react';

export default function Pagina4() {
  return (
    <div className="a4-container mx-auto bg-[#0a0a0a] relative overflow-hidden flex flex-col shadow-2xl text-white font-body" suppressHydrationWarning>
      {/* Background: Flex */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#22c55e]/15 blur-[120px] rounded-full pointer-events-none translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="relative z-20 flex flex-col h-full justify-between max-h-full p-10">
        <PageHeader badgeText="PROTECCIÓN DE REPUTACIÓN" />

        <main className="flex-1 flex flex-col mt-4 mb-4 gap-3 overflow-hidden">
          
          {/* Header Title */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="bg-[#22c55e]/20 p-3 rounded-xl shadow-lg border border-[#22c55e]/50 backdrop-blur">
              <ShoppingCart className="w-8 h-8 text-[#22c55e]" />
            </div>
            <div>
              <h1 className="text-4xl font-black font-headline text-white tracking-tight uppercase italic skew-x-[-5deg]">
                MERCADOLIBRE FLEX
              </h1>
              <p className="text-[#22c55e] font-bold font-headline text-sm uppercase tracking-widest mt-1">
                Tu Termómetro Siempre en Verde
              </p>
            </div>
          </div>

          {/* Info Banner */}
          <div className="bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-4 shrink-0 mt-2">
            <MapPin className="w-6 h-6 text-[#22c55e] shrink-0" />
            <p className="text-[15px] font-bold text-white">Retiro por domicilio (Colecta) SIN CARGO en todo Mar del Plata.</p>
          </div>

          {/* SLA Note */}
          <div className="border-l-4 border-[#22c55e] pl-4 shrink-0 my-1">
            <p className="italic text-slate-300 text-sm leading-relaxed">
              SLA Garantizado: Ventas concretadas hasta las <strong className="text-white">15:00hs</strong> serán entregadas en el día antes de las <strong className="text-white">20:00hs</strong>.
            </p>
          </div>

          {/* Levels Wrapper */}
          <div className="flex-1 flex flex-col gap-3 min-h-0 mt-2">
            
            {/* Level 1 */}
            <div className="border border-white/10 rounded-xl p-4 bg-black/40 flex-1 flex flex-col justify-center backdrop-blur shadow-md">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-black text-white uppercase font-headline">Nivel 1: Volumen Inicial</h3>
                  <p className="text-[11px] text-gray-400 italic">Tarifa clásica zonificada. Ideal para garantizar entregas en el día.</p>
                </div>
                <div className="bg-white/10 text-white px-3 py-1 rounded-full text-[10px] font-bold border border-white/20">1 a 4 envíos / día</div>
              </div>
              <div className="grid grid-cols-2 gap-x-12 gap-y-1 text-sm font-semibold border-t border-white/10 pt-2 text-gray-300">
                <div className="flex justify-between"><span>Z1 (Hasta 3 km):</span> <span className="text-white font-headline tracking-tight">$3.000</span></div>
                <div className="flex justify-between"><span>Z2 (3 a 5 km):</span> <span className="text-white font-headline tracking-tight">$4.000</span></div>
                <div className="flex justify-between"><span>Z3 (5 a 7 km):</span> <span className="text-white font-headline tracking-tight">$5.300</span></div>
                <div className="flex justify-between text-white font-bold"><span>Z4 y Z5:</span> <span>Tarifa Regular</span></div>
              </div>
              <p className="text-[10px] text-gray-400 font-bold uppercase mt-2">2DA VISITA: 50% DEL VALOR EN TODAS LAS ZONAS.</p>
            </div>

            {/* Level 2 */}
            <div className="border border-[#22c55e]/50 rounded-xl p-4 bg-[#22c55e]/5 flex-1 flex flex-col justify-center backdrop-blur shadow-md">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#22c55e]" />
                  <h3 className="text-lg font-black text-[#22c55e] uppercase font-headline">Nivel 2: Vendedor Frecuente</h3>
                </div>
                <div className="bg-[#22c55e]/20 text-[#22c55e] px-3 py-1 rounded-full text-[10px] font-bold border border-[#22c55e]/30">+5 envíos / día</div>
              </div>
              <div className="grid grid-cols-2 gap-x-12 gap-y-1 text-sm font-semibold border-t border-[#22c55e]/20 pt-2 text-gray-200">
                <div className="flex justify-between"><span>Z1:</span> <span className="text-white font-headline tracking-tight">$3.000</span></div>
                <div className="flex justify-between"><span>Z2:</span> <span className="text-white font-headline tracking-tight">$4.000</span></div>
                <div className="flex justify-between"><span>Z3:</span> <span className="text-white font-headline tracking-tight">$5.300</span></div>
                <div className="bg-[#22c55e]/20 text-[#22c55e] px-2 py-0.5 rounded text-center border border-[#22c55e]/30 font-black tracking-tight">Z4 y Z5: FIJO $6.500</div>
              </div>
              <p className="text-[10px] text-[#22c55e] font-bold uppercase mt-2">2DA VISITA: Z1 SIN CARGO. (Z2 A Z5 AL 50%).</p>
            </div>

            {/* Level 3 - PREMIUM */}
            <div className="bg-[#2563eb]/20 border-2 border-[#2563eb] rounded-xl p-5 flex-1 flex flex-col justify-center shadow-2xl backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563eb]/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
              <div className="flex justify-between items-start mb-2 relative z-10">
                <div className="flex items-center gap-2">
                  <Zap className="w-7 h-7 text-[#fbc107] fill-[#fbc107]" />
                  <h3 className="text-xl font-black text-white uppercase font-headline tracking-tighter">Nivel 3: Grandes Cuentas</h3>
                </div>
                <div className="bg-[#2563eb] text-white px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-lg">+10 envíos / día</div>
              </div>
              <div className="flex justify-between items-end border-t border-[#2563eb]/50 pt-3 relative z-10">
                <span className="text-base font-black uppercase italic tracking-tighter leading-tight text-white">Tarifa Plana<br/><span className="text-[11px] not-italic opacity-70">A TODO MAR DEL PLATA</span></span>
                <span className="text-5xl font-black font-headline tracking-tighter text-[#fbc107] drop-shadow-md">$4.500</span>
              </div>
              <div className="bg-[#fbc107]/20 mt-3 py-2 px-3 rounded-lg flex justify-center items-center gap-2 text-[11px] font-black uppercase border border-[#fbc107]/50 text-[#fbc107] relative z-10">
                2DA VISITA / REPROGRAMACIÓN: ¡SIN CARGO A TODAS LAS ZONAS!
              </div>
            </div>
            
          </div>

          {/* Weather Policy */}
          <div className="bg-black/40 border border-white/10 p-3 rounded-xl flex items-center justify-center gap-4 shrink-0 mt-2 backdrop-blur shadow-md">
            <CloudDrizzle className="w-5 h-5 text-gray-400" />
            <span className="text-xs font-medium text-gray-300">
              <strong className="text-white uppercase">Clima Adverso / Lluvia:</strong> Recargo operativo exclusivo para Flex reducido al <strong className="text-[#fbc107]">30%</strong>.
            </span>
          </div>

        </main>

        <PageFooter pageNumber="4 / 11" />
      </div>
    </div>
  );
}
