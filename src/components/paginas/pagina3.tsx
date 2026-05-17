import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { CloudRain, Box, Clock, CornerUpLeft, Route } from 'lucide-react';

export default function Pagina3() {
  return (
    <div className="a4-container mx-auto bg-primary relative overflow-hidden flex flex-col shadow-2xl text-white font-body" suppressHydrationWarning>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/95 to-secondary/40 z-10" />

      <div className="relative z-20 flex flex-col h-full justify-between max-h-full p-10">
        <PageHeader badgeText="SOLUCIÓN LOWCOST" />

        <main className="flex-1 flex flex-col mt-4 mb-4 gap-4 overflow-hidden">
          
          {/* Main Title Section */}
          <div className="flex items-center gap-3 bg-accent/10 p-4 rounded-lg border-l-4 border-accent shrink-0">
            <Route className="w-8 h-8 text-accent" />
            <h2 className="text-4xl font-black font-headline text-white tracking-tight uppercase italic skew-x-[-5deg]">
              ENVÍOS LOWCOST
            </h2>
          </div>

          {/* Info Card */}
          <section className="bg-secondary/40 backdrop-blur-sm border-l-4 border-accent rounded-r-xl p-6 shrink-0">
            <h3 className="text-accent font-black font-headline text-xl mb-3 tracking-wide uppercase">
              Eficiencia en ruteo diario
            </h3>
            <p className="text-gray-200 leading-relaxed text-[15px] mb-4">
              La modalidad LowCost prioriza la eficiencia de nuestras rutas. Son entregas en el transcurso del día, <span className="font-bold text-white underline decoration-accent">sin elección de rango horario</span>. Todos los pedidos solicitados antes de las 13:00hs, serán entregados de forma garantizada antes de las 19:00hs.
            </p>
            <div className="bg-primary/80 border border-white/10 rounded-lg p-4 flex items-start gap-3">
              <Clock className="text-accent shrink-0 mt-0.5 w-5 h-5" />
              <p className="text-accent text-[13px] font-semibold italic">
                Importante: Al igual que en envíos Express, se requiere un mínimo de 2 horas de anticipación en la solicitud para organizar el retiro y la ruta del cadete.
              </p>
            </div>
          </section>

          {/* Table Title */}
          <div className="flex items-center justify-center gap-4 shrink-0 mt-2">
            <div className="h-[1px] bg-white/20 grow"></div>
            <h4 className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase font-headline">
              Tarifario Zonificado LowCost
            </h4>
            <div className="h-[1px] bg-white/20 grow"></div>
          </div>

          {/* Pricing Table - Enterprise Layout */}
          <section className="shrink-0 flex-grow flex flex-col justify-center">
            <div className="overflow-hidden bg-white/5 border border-white/10 rounded-xl shadow-2xl backdrop-blur-md w-full">
              <table className="w-full border-collapse text-left text-sm text-gray-300">
                <thead className="bg-white/10 border-b border-white/10">
                  <tr className="text-[11px] font-bold tracking-wider text-accent uppercase">
                    <th scope="col" className="px-6 py-3.5">Zonificación de Entrega</th>
                    <th scope="col" className="px-6 py-3.5 text-right">Valor Final</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { z: "Zona 1 (Hasta 3 km)", p: "$3.000" },
                    { z: "Zona 2 (3 a 5 km)", p: "$4.000" },
                    { z: "Zona 3 (5 a 7 km)", p: "$5.300" },
                    { z: "Zona 4 (7 a 10 km)", p: "$7.000" },
                    { z: "Zona 5 (Más de 10 km)", p: "$700 x km" },
                  ].map((row, i) => (
                    <tr key={i} className="transition-colors hover:bg-white/5 odd:bg-transparent even:bg-white/[0.02]">
                      <td className="px-6 py-3 font-semibold text-gray-100">{row.z}</td>
                      <td className="px-6 py-3 text-right text-accent font-black font-headline text-lg tracking-tight">{row.p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Additional Conditions - Compact Grid */}
          <section className="shrink-0 mt-auto">
            <h4 className="text-accent font-bold tracking-widest text-[11px] uppercase mb-4 opacity-80 italic font-headline border-b border-white/10 pb-2">
              Condiciones Adicionales Estándar
            </h4>
            <div className="grid grid-cols-4 gap-3">
              {[
                { icon: <CloudRain className="w-6 h-6" />, title: "Lluvia", desc: "Recargo +50%", color: "text-blue-400" },
                { icon: <Box className="w-6 h-6" />, title: "Bulto", desc: "Adicional +$1.800", color: "text-accent" },
                { icon: <Clock className="w-6 h-6" />, title: "Demora", desc: "+$2.200 c/10min", color: "text-accent" },
                { icon: <CornerUpLeft className="w-6 h-6" />, title: "2da Visita", desc: "50% del valor", color: "text-purple-400" }
              ].map((cond, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col items-center justify-center text-center">
                  <div className={`mb-2 ${cond.color}`}>{cond.icon}</div>
                  <span className="text-gray-400 font-bold text-[10px] mb-1 uppercase tracking-widest">{cond.title}</span>
                  <span className="text-white font-bold text-xs">{cond.desc}</span>
                </div>
              ))}
            </div>
          </section>
        </main>

        <PageFooter pageNumber="3 / 11" />
      </div>
    </div>
  );
}