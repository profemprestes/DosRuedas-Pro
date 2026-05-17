import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { CloudRain, Box, Clock, CornerUpLeft, Zap } from 'lucide-react';

export default function Pagina3() {
  return (
    <div className="flex flex-col justify-between w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] overflow-hidden box-border bg-primary relative text-white font-body shadow-2xl print:shadow-none" suppressHydrationWarning>
      {/* Background Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/95 to-primary/98 z-10" />

      <div className="relative z-20 flex flex-col h-full p-[16mm] justify-between box-border">
        {/* Unified Top Header Component */}
        <PageHeader badgeText="SOLUCIÓN LOWCOST" />

        {/* Main Content Layout matching Page 2 Rhythm */}
        <main className="flex-1 flex flex-col overflow-hidden mt-4">
          
          {/* Section Title */}
          <div className="flex items-center gap-3 mb-5 bg-accent/10 p-4 rounded-lg border-l-4 border-accent shrink-0">
            <Zap className="w-7 h-7 text-accent fill-accent" />
            <h2 className="text-3xl font-black font-headline text-white tracking-tight uppercase italic skew-x-[-5deg]">
              ENVÍOS LOWCOST
            </h2>
          </div>

          {/* Service Description Card */}
          <section className="bg-white/5 border-l-4 border-accent rounded-r-xl p-5 mb-5 shrink-0">
            <h3 className="text-lg font-bold mb-2 italic text-gray-100">Eficiencia en ruteo diario</h3>
            <p className="text-gray-300 text-[14px] leading-relaxed mb-3">
              La modalidad LowCost prioriza la eficiencia de nuestras rutas. Son entregas en el transcurso del día, <span className="font-bold underline decoration-accent text-accent">sin elección de rango horario</span>. Solicitudes antes de las 13:00hs se entregan antes de las 19:00hs garantizado.
            </p>
            <div className="bg-primary/60 border border-white/5 rounded-lg p-3.5 flex items-start gap-3">
              <Clock className="text-accent shrink-0 w-5 h-5 mt-0.5" />
              <p className="text-accent text-[12px] font-semibold italic leading-snug">
                Importante: Al igual que en envíos Express, se requiere un mínimo de 2 horas de anticipación para organizar la logística y retiro.
              </p>
            </div>
          </section>

          {/* Section Divider */}
          <div className="flex items-center justify-center gap-4 mb-4 shrink-0">
            <div className="h-[1px] bg-white/10 grow"></div>
            <h4 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase font-headline italic">Tarifario Zonificado</h4>
            <div className="h-[1px] bg-white/10 grow"></div>
          </div>

          {/* Pricing Table - Corporate Premium Identity */}
          <section className="mb-6 shrink-0">
            <div className="overflow-hidden bg-white/5 border border-white/10 rounded-xl shadow-2xl backdrop-blur-md w-full">
              <table className="w-full border-collapse text-left text-sm text-gray-300">
                <thead className="bg-white/10 border-b border-white/10">
                  <tr className="text-[11px] font-bold tracking-wider text-accent uppercase">
                    <th scope="col" className="px-6 py-3">Zonificación de Entrega</th>
                    <th scope="col" className="px-6 py-3 text-right">Valor Final</th>
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
                      <td className="px-6 py-2.5 text-right text-accent font-black text-base tracking-tight">{row.p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Additional Conditions Grid - Fully Optimized against Squishing */}
          <section className="shrink-0">
            <h4 className="text-accent font-bold tracking-widest uppercase mb-3 border-b border-white/10 pb-1.5 text-[11px] italic font-headline opacity-80">
              Condiciones Adicionales Estándar
            </h4>
            <div className="grid grid-cols-4 gap-3.5">
              {[
                { icon: <CloudRain className="w-5 h-5" />, label: "Lluvia", val: "+50%" },
                { icon: <Box className="w-5 h-5" />, label: "Bulto", val: "+$1.800" },
                { icon: <Clock className="w-5 h-5" />, label: "Demora", val: "+$2.200" },
                { icon: <CornerUpLeft className="w-5 h-5" />, label: "2da Visita", val: "50%" },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 p-3 rounded-xl flex flex-col items-center justify-center text-center border border-white/10 shadow-lg backdrop-blur-sm transition-all hover:border-accent/30">
                  <div className="text-accent mb-1.5">{item.icon}</div>
                  <span className="text-gray-400 font-medium text-[10px] mb-0.5 uppercase tracking-wider">{item.label}</span>
                  <span className="text-white font-bold text-sm tracking-tight">{item.val}</span>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Unified Bottom Footer Component */}
        <PageFooter pageNumber="3 / 11" />
      </div>
    </div>
  );
}