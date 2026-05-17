import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { CloudRain, Box, Clock, CornerUpLeft, Zap } from 'lucide-react';

export default function Pagina3() {
  return (
    <div className="flex flex-col justify-between w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] overflow-hidden box-border bg-primary relative text-white font-body" suppressHydrationWarning>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/95 z-10" />

      <div className="relative z-20 flex flex-col h-full p-16 justify-between box-border">
        <PageHeader badgeText="SOLUCIÓN LOWCOST" />

        <main className="flex-1 flex flex-col justify-center overflow-hidden gap-8">
          {/* Section Title */}
          <div className="flex items-center gap-3 bg-accent/10 p-4 rounded-lg border-l-4 border-accent shrink-0">
            <Zap className="w-8 h-8 text-accent fill-accent" />
            <h2 className="text-4xl font-black font-headline text-white tracking-tight uppercase">ENVÍOS LOWCOST</h2>
          </div>

          {/* Service Description */}
          <div className="bg-secondary/60 border-l-[6px] border-accent rounded-r-2xl p-6 shrink-0">
            <h3 className="text-accent font-black font-headline text-xl mb-4 tracking-wide uppercase">Eficiencia en ruteo diario</h3>
            <p className="text-gray-200 leading-relaxed text-base mb-4">
              La modalidad LowCost prioriza la eficiencia de nuestras rutas. Son entregas en el transcurso del día, <span className="font-bold underline decoration-accent">sin elección de rango horario</span>. Solicitudes antes de las 13:00hs se entregan antes de las 19:00hs garantizado.
            </p>
            <div className="bg-primary/80 p-4 rounded-xl flex items-start gap-3 border border-white/5">
              <Clock className="text-accent shrink-0 w-6 h-6" />
              <p className="text-accent text-[13px] font-semibold italic leading-snug">
                Importante: Al igual que en envíos Express, se requiere un mínimo de 2 hours de anticipación para organizar la logística y retiro.
              </p>
            </div>
          </div>

          {/* Section Divider */}
          <div className="flex items-center justify-center gap-4 shrink-0">
            <div className="h-[1px] bg-white/20 grow"></div>
            <h4 className="text-xl font-bold tracking-[0.2em] uppercase font-headline">Tarifario Zonificado</h4>
            <div className="h-[1px] bg-white/20 grow"></div>
          </div>

          {/* Pricing Table - Redesigned for Dark Premium Identity */}
          <div className="overflow-hidden bg-white/5 border border-white/10 rounded-xl shadow-2xl backdrop-blur-md w-full shrink-0">
            <table className="w-full border-collapse text-left text-sm text-gray-300">
              <thead className="bg-white/10 border-b border-white/10">
                <tr className="text-[11px] font-bold tracking-wider text-accent uppercase">
                  <th scope="col" className="px-6 py-3.5">Zonificación de Entrega</th>
                  <th scope="col" className="px-6 py-3.5 text-right">Valor Final</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-transparent">
                {[
                  { z: "Zona 1 (Hasta 3 km)", p: "$3.000" },
                  { z: "Zona 2 (3 a 5 km)", p: "$4.000" },
                  { z: "Zona 3 (5 a 7 km)", p: "$5.300" },
                  { z: "Zona 4 (7 a 10 km)", p: "$7.000" },
                  { z: "Zona 5 (Más de 10 km)", p: "$700 x km" },
                ].map((row, i) => (
                  <tr 
                    key={i} 
                    className="transition-colors hover:bg-white/5 odd:bg-transparent even:bg-white/[0.02]"
                  >
                    <td className="px-6 py-2.5 font-semibold text-gray-100">{row.z}</td>
                    <td className="px-6 py-2.5 text-right text-accent font-black text-xl tracking-tight">{row.p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Additional Conditions Grid */}
          <div className="shrink-0">
            <h4 className="text-accent font-bold tracking-widest uppercase mb-4 border-b border-white/10 pb-2 text-[11px] italic font-headline">Condiciones Adicionales Estándar</h4>
            <div className="grid grid-cols-4 gap-4">
              {[
                { icon: <CloudRain />, label: "Lluvia", val: "+50%" },
                { icon: <Box />, label: "Bulto", val: "+$1.800" },
                { icon: <Clock />, label: "Demora", val: "+$2.200" },
                { icon: <CornerUpLeft />, label: "2da Visita", val: "50%" },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 p-4 rounded-xl flex flex-col items-center justify-center text-center border border-white/5">
                  <div className="text-accent mb-2 w-6 h-6">{item.icon}</div>
                  <span className="text-accent font-bold text-[9px] mb-1 uppercase tracking-widest">{item.label}</span>
                  <span className="text-white font-bold text-xs">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </main>

        <PageFooter pageNumber="3 / 11" />
      </div>
    </div>
  );
}