import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { CloudRain, Box, Clock, CornerUpLeft, Route } from 'lucide-react';

export default function Pagina3() {
  return (
    <div className="a4-container mx-auto bg-primary relative overflow-hidden flex flex-col shadow-2xl text-white font-body" suppressHydrationWarning>
      {/* Fondo degradado corporativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-secondary/40 z-10" />

      <div className="relative z-20 flex flex-col h-full justify-between max-h-full p-10">
        <PageHeader badgeText="SOLUCIÓN LOWCOST" />

        <main className="flex-1 flex flex-col mt-2 mb-2 gap-4 overflow-hidden">
          
          {/* Título Principal */}
          <div className="flex items-center gap-3 bg-accent/10 p-4 rounded-lg border-l-4 border-accent shrink-0">
            <Route className="w-7 h-7 text-accent" />
            <h2 className="text-4xl font-black font-headline text-white tracking-tight uppercase italic skew-x-[-5deg]">
              ENVÍOS LOWCOST
            </h2>
          </div>

          {/* Tarjeta de Información */}
          <section className="bg-secondary/40 backdrop-blur-sm border-l-4 border-accent rounded-r-xl p-5 shrink-0 shadow-lg">
            <h3 className="text-accent font-black font-headline text-lg mb-2 tracking-wide uppercase">
              Eficiencia en ruteo diario
            </h3>
            <p className="text-gray-200 leading-relaxed text-[14px] mb-3">
              La modalidad LowCost prioriza la eficiencia de nuestras rutas. Son entregas en el transcurso del día, <span className="font-bold text-white underline decoration-accent underline-offset-2">sin elección de rango horario</span>. Todos los pedidos solicitados antes de las 13:00hs, serán entregados de forma garantizada antes de las 19:00hs.
            </p>
            <div className="bg-primary/80 border border-white/10 rounded-lg p-3.5 flex items-start gap-3">
              <Clock className="text-accent shrink-0 mt-0.5 w-4 h-4" />
              <p className="text-accent text-[12px] font-semibold italic">
                Importante: Al igual que en envíos Express, se requiere un mínimo de 2 horas de anticipación en la solicitud para organizar el retiro y la ruta del cadete.
              </p>
            </div>
          </section>

          {/* Separador */}
          <div className="flex items-center justify-center gap-4 shrink-0">
            <div className="h-[1px] bg-white/10 grow"></div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase font-headline">
              Tarifario Zonificado LowCost
            </h4>
            <div className="h-[1px] bg-white/10 grow"></div>
          </div>

          {/* Tabla de Tarifas */}
          <section className="shrink-0 flex-grow flex flex-col justify-center min-h-0">
            <div className="overflow-hidden bg-white/5 border border-white/10 rounded-xl shadow-xl backdrop-blur-md w-full">
              <table className="w-full border-collapse text-left text-sm text-gray-300">
                <thead className="bg-white/10 border-b border-white/10">
                  <tr className="text-[11px] font-bold tracking-wider text-accent uppercase">
                    <th scope="col" className="px-6 py-3">Zonificación de Entrega</th>
                    <th scope="col" className="px-6 py-3 text-right">Valor Final</th>
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
                    <tr key={i} className="transition-colors hover:bg-white/5 odd:bg-transparent even:bg-white/[0.01]">
                      <td className="px-6 py-2.5 font-semibold text-gray-200">{row.z}</td>
                      <td className="px-6 py-2.5 text-right text-accent font-black font-headline text-lg tracking-tight">{row.p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Condiciones Operativas Inferiores */}
          <section className="shrink-0 mt-auto">
            <h4 className="text-accent font-bold tracking-widest text-[10px] uppercase mb-3 opacity-80 italic font-headline border-b border-white/10 pb-1">
              Condiciones Adicionales Estándar
            </h4>
            <div className="grid grid-cols-4 gap-3">
              {[
                { icon: <CloudRain className="w-5 h-5" />, title: "Lluvia", desc: "Recargo +50%", color: "text-blue-400" },
                { icon: <Box className="w-5 h-5" />, title: "Bulto", desc: "Adicional +$1.800", color: "text-accent" },
                { icon: <Clock className="w-5 h-5" />, title: "Demora", desc: "+$2.200 c/10min", color: "text-accent" },
                { icon: <CornerUpLeft className="w-5 h-5" />, title: "2da Visita", desc: "50% del valor", color: "text-purple-400" }
              ].map((cond, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col items-center justify-center text-center shadow-md">
                  <div className={`mb-1.5 ${cond.color}`}>{cond.icon}</div>
                  <span className="text-gray-400 font-bold text-[9px] mb-0.5 uppercase tracking-wider">{cond.title}</span>
                  <span className="text-white font-black text-xs tracking-tight">{cond.desc}</span>
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