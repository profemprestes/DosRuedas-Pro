import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';

export default function Pagina4() {
  return (
    <div className="a4-container mx-auto bg-primary relative overflow-hidden flex flex-col shadow-2xl text-white font-montserrat" suppressHydrationWarning>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/95 z-10" />

      <div className="relative z-20 flex flex-col h-full justify-between max-h-full p-10">
        {/* Header Section */}
        <PageHeader badgeText="MERCADOLIBRE FLEX" />

        <main className="flex-1 flex flex-col justify-center gap-2">
          {/* Section Title Flex */}
          <div className="flex items-center gap-4 mb-5">
              <div className="bg-accent p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 14 8 16"/><path d="M14 10 16 8"/><path d="M18 14V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8"/><path d="M22 13a3 3 0 1 0-4-4l-3 3 2 2Z"/></svg>
              </div>
              <h2 className="text-4xl font-black italic uppercase">Envíos Flex</h2>
              <div className="bg-accent text-primary px-3 py-1 rounded font-extrabold text-sm tracking-tight ml-2">
                  MERCADOLIBRE
              </div>
          </div>

          {/* Info Bar */}
          <div className="bg-white/10 backdrop-blur-md border border-white/5 p-3 rounded-2xl flex items-center gap-3 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-accent fill-current" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              <p className="text-base font-semibold text-accent">Retiro por domicilio (Colecta) SIN CARGO en todo Mar del Plata.</p>
          </div>

          {/* SLA Note */}
          <div className="border-l-4 border-accent pl-4 mb-6">
              <p className="italic text-slate-300 text-sm leading-relaxed">
                  SLA Garantizado: Ventas concretadas hasta las 15:00hs serán entregadas en el día antes de las 20:00hs.
              </p>
          </div>

          <div className="flex-grow flex flex-col space-y-4">
            {/* Card Nivel 1 */}
            <div className="border border-accent/50 rounded-2xl p-5 bg-slate-900/40">
                <div className="flex justify-between items-start mb-3">
                    <div>
                        <h3 className="text-lg font-extrabold text-accent uppercase tracking-wide">Nivel 1: Volumen Inicial</h3>
                        <p className="text-[11px] text-slate-400 mt-1">Tarifa clásica zonificada. Ideal para garantizar entregas en el día con la seguridad de Flex.</p>
                    </div>
                    <div className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded text-[11px] font-bold shrink-0">1 a 4 envíos / día</div>
                </div>

                <div className="grid grid-cols-2 gap-y-2 gap-x-12 text-sm font-semibold border-t border-white/10 pt-3">
                    <div className="flex justify-between"><span>Z1 (Hasta 3 km):</span> <span>$3.000</span></div>
                    <div className="flex justify-between"><span>Z2 (3 a 5 km):</span> <span>$4.000</span></div>
                    <div className="flex justify-between"><span>Z3 (5 a 7 km):</span> <span>$5.300</span></div>
                    <div className="flex justify-between"><span>Z4 (7 a 10 km):</span> <span>$7.000</span></div>
                    <div className="col-span-2 text-accent mt-1">Z5 (&gt; 10 km): $700 x km</div>
                </div>
                <div className="mt-3 flex items-center gap-2 text-[10px] text-accent/80 font-bold uppercase">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    2DA VISITA: 50% DEL VALOR EN TODAS LAS ZONAS.
                </div>
            </div>

            {/* Card Nivel 2 */}
            <div className="border border-green-500/30 rounded-2xl p-5 bg-slate-900/40">
                <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 fill-current" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                        <h3 className="text-lg font-extrabold text-green-500 uppercase tracking-wide">Nivel 2: Vendedor Frecuente</h3>
                    </div>
                    <div className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded text-[11px] font-bold shrink-0">+5 envíos / día</div>
                </div>
                <p className="text-[11px] text-slate-400 mb-3">Tarifa Híbrida. Mantiene costos bajos en zonas cercanas y establece un tope fijo para largas distancias, acotando su riesgo.</p>

                <div className="grid grid-cols-2 gap-y-2 gap-x-12 text-sm font-semibold border-t border-white/10 pt-3">
                    <div className="flex justify-between"><span>Z1 (Hasta 3 km):</span> <span>$3.000</span></div>
                    <div className="flex justify-between"><span>Z2 (3 a 5 km):</span> <span>$4.000</span></div>
                    <div className="flex justify-between"><span>Z3 (5 a 7 km):</span> <span>$5.300</span></div>
                    <div className="bg-green-900/40 border border-green-500/20 text-green-400 rounded-lg px-4 py-1 text-center font-bold">
                        Zonas 4 y 5: Fijo $6.500
                    </div>
                </div>
                <div className="mt-3 flex items-center gap-2 text-[10px] text-green-500 font-bold uppercase">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    2DA VISITA: ZONA 1 SIN CARGO. (Z2 A Z5 SE COBRA AL 50%).
                </div>
            </div>

            {/* Card Nivel 3 */}
            <div className="bg-accent rounded-2xl p-5 text-primary">
                <div className="flex justify-between items-start mb-1">
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-1h14v1z"/></svg>
                        <h3 className="text-lg font-black uppercase tracking-tighter">Nivel 3: Grandes Cuentas</h3>
                    </div>
                    <div className="bg-primary text-blue-400 px-3 py-1 rounded text-[11px] font-bold shrink-0">+10 envíos / día</div>
                </div>
                <p className="text-[11px] font-semibold mb-4 opacity-80 leading-tight pr-20">
                    Solución de costo fijo a cualquier punto de la ciudad, diseñada para MercadoLíderes que requieren escalar volumen previsiblemente.
                </p>

                <div className="flex justify-between items-end border-t border-primary/20 pt-3 mb-3">
                    <span className="text-base font-extrabold uppercase italic tracking-tight">Tarifa Plana a todo Mar del Plata</span>
                    <span className="text-4xl font-black tracking-tighter">$4.500</span>
                </div>

                <div className="bg-[#1e3a8a] text-white py-2 px-4 rounded-xl flex justify-center items-center gap-2 text-[10px] font-bold uppercase shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V8H4v4"/><path d="M2 18h20"/><path d="M12 18V8"/><rect width="16" height="12" x="4" y="6" rx="2"/></svg>
                    2da Visita / Reprogramación: ¡SIN CARGO A TODAS LAS ZONAS!
                </div>
            </div>
          </div>

          {/* Weather Note */}
          <div className="mt-4 bg-white/5 border border-white/10 p-3 rounded-xl flex justify-center items-center gap-4 text-xs font-medium text-slate-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19c.7 0 1.2-.2 1.7-.5m-1.7.5c-.7 0-1.2-.2-1.7-.5M17.5 19v-2m-3.5 1.5c.7 0 1.2-.2 1.7-.5m-1.7.5c-.7 0-1.2-.2-1.7-.5M14 18v-2m3.5-4.5c.7 0 1.2-.2 1.7-.5m-1.7.5c-.7 0-1.2-.2-1.7-.5M17.5 13v-2m-3.5 1.5c.7 0 1.2-.2 1.7-.5m-1.7.5c-.7 0-1.2-.2-1.7-.5M14 12v-2m2-5c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z"/><path d="M20 17.58A5 5 0 0 0 18 8a7 7 0 1 0-13.31 3.5"/></svg>
              <span><strong className="text-accent uppercase">Clima Adverso / Lluvia:</strong> Recargo operativo exclusivo para Flex reducido al <strong className="text-white">30%</strong>.</span>
          </div>

        </main>

        {/* Footer Section */}
        <PageFooter pageNumber="4 / 11" />
      </div>
    </div>
  );
}
