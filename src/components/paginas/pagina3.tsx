import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { CloudRain, Box, Clock, CornerUpLeft, Route } from 'lucide-react';

export default function Pagina3() {
  return (
    <div className="a4-container mx-auto bg-[#0a0a0a] relative overflow-hidden flex flex-col shadow-2xl text-white font-body" suppressHydrationWarning>
      {/* Background: Express / Lowcost */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#2563eb]/20 blur-[100px] rounded-full pointer-events-none"></div>
      </div>

      <div className="relative z-20 flex flex-col h-full justify-between max-h-full p-10">
        <PageHeader badgeText="MÁXIMA RENTABILIDAD B2B" />

        <main className="flex-1 flex flex-col mt-2 mb-2 gap-4 overflow-hidden">
          
          {/* Título Principal */}
          <div className="flex items-center gap-3 bg-black/40 p-4 rounded-lg border-l-4 border-[#2563eb] backdrop-blur shrink-0 shadow-lg">
            <Route className="w-8 h-8 text-[#2563eb]" />
            <div className="flex flex-col">
              <h1 className="text-4xl font-black font-headline text-[#2563eb] tracking-tight uppercase italic skew-x-[-5deg]">
                ENVÍOS LOWCOST
              </h1>
              <p className="text-[#fbc107] font-bold font-headline text-sm uppercase tracking-widest mt-1">
                Ruteo Diario Inteligente
              </p>
            </div>
          </div>

          {/* Tarjeta de Información */}
          <section className="bg-black/40 backdrop-blur border-l-4 border-[#2563eb] rounded-r-xl p-5 shrink-0 shadow-lg border-y border-r border-white/10">
            <h3 className="text-xl font-bold mb-3 italic">
              Eficiencia en ruteo diario
            </h3>
            <p className="text-gray-300 text-[15px] leading-relaxed mb-3">
              La modalidad LowCost prioriza la eficiencia de nuestras rutas. Son entregas en el transcurso del día, <span className="font-bold text-[#fbc107] underline decoration-[#2563eb] underline-offset-2">sin elección de rango horario</span>. Todos los pedidos solicitados antes de las 13:00hs, serán entregados de forma garantizada (SLA Same-Day) antes de las 19:00hs.
            </p>
            <div className="bg-[#0a0a0a]/80 border border-[#2563eb]/30 rounded-lg p-3.5 flex items-start gap-3 backdrop-blur shadow-md">
              <Clock className="w-5 h-5 text-[#2563eb] mt-0.5 shrink-0" />
              <p className="text-[#fbc107] text-[13px] font-semibold italic">
                Importante: Al igual que en envíos Express, se requiere un mínimo de 2 horas de anticipación en la solicitud para organizar el retiro y la ruta del cadete.
              </p>
            </div>
          </section>

          {/* Separador */}
          <div className="flex items-center justify-center gap-4 shrink-0">
            <div className="h-[1px] bg-white/10 grow"></div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#2563eb] uppercase font-headline">
              Tarifario Zonificado LowCost
            </h4>
            <div className="h-[1px] bg-white/10 grow"></div>
          </div>

          {/* Tabla de Tarifas */}
          <section className="shrink-0 flex-grow flex flex-col justify-center min-h-0">
            <div className="overflow-hidden bg-black/40 border border-[#2563eb]/30 rounded-xl shadow-2xl backdrop-blur-md w-full">
              <table className="w-full border-collapse text-left text-sm text-gray-300">
                <thead className="bg-[#2563eb]/10 border-b border-[#2563eb]/30">
                  <tr className="text-[11px] font-bold tracking-wider text-[#2563eb] uppercase font-headline">
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
                      <td className="px-6 py-3 text-right text-[#ffffff] font-black font-headline text-base tracking-tight">{row.p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Condiciones Operativas Inferiores */}
          <section className="shrink-0 mt-auto">
            <h4 className="text-[#2563eb] font-bold tracking-widest text-[11px] uppercase mb-4 opacity-90 italic font-headline border-b border-white/10 pb-2">
              Condiciones Adicionales Estándar
            </h4>
            <div className="grid grid-cols-4 gap-4">
              {[
                { icon: <CloudRain className="w-6 h-6" />, title: "Lluvia", desc: "Recargo +50%", color: "text-[#2563eb]" },
                { icon: <Box className="w-6 h-6" />, title: "Bulto", desc: "+$1.800", color: "text-[#2563eb]" },
                { icon: <Clock className="w-6 h-6" />, title: "Demora", desc: "Tol. 10m / +$2.200", color: "text-[#2563eb]" },
                { icon: <CornerUpLeft className="w-6 h-6" />, title: "2da Visita", desc: "50% del valor", color: "text-[#2563eb]" }
              ].map((cond, idx) => (
                <div key={idx} className="bg-black/40 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-md backdrop-blur">
                  <div className={`mb-2 ${cond.color}`}>{cond.icon}</div>
                  <span className="text-white font-bold text-[10px] mb-1 uppercase tracking-wider font-headline">{cond.title}</span>
                  <span className="text-[#fbc107] font-semibold text-[11px] italic leading-tight">{cond.desc}</span>
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
