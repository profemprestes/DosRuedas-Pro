import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { CloudRain, Box, Clock, CornerUpLeft } from 'lucide-react';

export default function Pagina3() {
  return (
    <div className="mx-auto w-[210mm] h-[297mm] bg-primary relative overflow-hidden flex flex-col shadow-2xl text-white font-montserrat" suppressHydrationWarning>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/95 z-10" />

      <div className="relative z-20 flex flex-col h-full p-16">
        {/* Header */}
        <PageHeader badgeText="SOLUCIÓN LOWCOST" />

        <main className="flex-grow flex flex-col">
          {/* Main Title Section */}
          <div className="flex items-center gap-3 mb-6 bg-accent/10 p-3 rounded-lg border-l-4 border-accent">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <h2 className="text-3xl font-black text-white tracking-tight uppercase">ENVÍOS LOWCOST</h2>
          </div>

          {/* Info Card */}
          <div className="bg-[#111c44]/60 border-l-[6px] border-accent rounded-r-2xl p-6 mb-6">
            <h3 className="text-accent font-black text-xl mb-4 tracking-wide uppercase">Eficiencia en ruteo diario</h3>
            <p className="text-gray-200 leading-relaxed text-base mb-4">
                La modalidad LowCost prioriza la eficiencia de nuestras rutas. Son entregas en el transcurso del día, <span className="font-bold">sin elección de rango horario</span>. Todos los pedidos solicitados antes de las 13:00hs, serán entregados de forma garantizada antes de las 19:00hs.
            </p>
            <div className="bg-[#0c1635] p-4 rounded-xl flex items-start gap-3">
                <Clock className="text-accent shrink-0 mt-1 w-5 h-5" />
                <p className="text-accent text-sm font-semibold">
                    Importante: Al igual que en envíos Express, se requiere un mínimo de 2 horas de anticipación en la solicitud para organizar el retiro y la ruta del cadete.
                </p>
            </div>
          </div>

          {/* Table Title */}
          <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] bg-gray-600 grow"></div>
              <h4 className="text-xl font-bold tracking-[0.2em] uppercase whitespace-nowrap">Tarifario Zonificado LowCost</h4>
              <div className="h-[1px] bg-gray-600 grow"></div>
          </div>

          {/* Pricing Table */}
          <div className="mb-6 flex-grow">
              <div className="flex justify-between border-b-2 border-accent pb-3 px-4">
                  <span className="text-accent font-bold text-lg">ZONIFICACIÓN DE ENTREGA</span>
                  <span className="text-accent font-bold text-lg text-right">VALOR FINAL</span>
              </div>

              <div className="space-y-1 mt-2">
                  <div className="flex justify-between items-center px-4 py-3 bg-gradient-to-r from-transparent to-[#1a2b5a]/40">
                      <span className="font-medium text-lg">Zona 1 (Hasta 3 km)</span>
                      <span className="text-accent font-black text-2xl">$3.000</span>
                  </div>
                  <div className="flex justify-between items-center px-4 py-3">
                      <span className="font-medium text-lg">Zona 2 (3 a 5 km)</span>
                      <span className="text-accent font-black text-2xl">$4.000</span>
                  </div>
                  <div className="flex justify-between items-center px-4 py-3 bg-gradient-to-r from-transparent to-[#1a2b5a]/40">
                      <span className="font-medium text-lg">Zona 3 (5 a 7 km)</span>
                      <span className="text-accent font-black text-2xl">$5.300</span>
                  </div>
                  <div className="flex justify-between items-center px-4 py-3">
                      <span className="font-medium text-lg">Zona 4 (7 a 10 km)</span>
                      <span className="text-accent font-black text-2xl">$7.000</span>
                  </div>
                  <div className="flex justify-between items-center px-4 py-3 bg-gradient-to-r from-transparent to-[#1a2b5a]/40">
                      <span className="font-medium text-lg">Zona 5 (Más de 10 km)</span>
                      <span className="text-accent font-black text-2xl">$700 x km</span>
                  </div>
              </div>
          </div>

          {/* Additional Conditions */}
          <div className="mt-auto">
              <h4 className="text-accent font-bold tracking-wider uppercase mb-4 border-b border-gray-700 pb-2 text-sm">Condiciones Adicionales Estándar</h4>
              <div className="grid grid-cols-4 gap-4">
                  <div className="bg-[#111c44] p-3 rounded-xl flex flex-col items-center justify-center text-center">
                      <CloudRain className="w-5 h-5 text-accent mb-2" />
                      <span className="text-accent font-bold text-[10px] mb-1 uppercase tracking-widest">Lluvia</span>
                      <span className="text-gray-300 text-xs">Recargo +50%</span>
                  </div>
                  <div className="bg-[#111c44] p-3 rounded-xl flex flex-col items-center justify-center text-center">
                      <Box className="w-5 h-5 text-accent mb-2" />
                      <span className="text-accent font-bold text-[10px] mb-1 uppercase tracking-widest">Bulto</span>
                      <span className="text-gray-300 text-xs">Adicional +$1.800</span>
                  </div>
                  <div className="bg-[#111c44] p-3 rounded-xl flex flex-col items-center justify-center text-center">
                      <Clock className="w-5 h-5 text-accent mb-2" />
                      <span className="text-accent font-bold text-[10px] mb-1 uppercase tracking-widest">Demora</span>
                      <span className="text-gray-300 text-xs">+$2.200 c/10min</span>
                  </div>
                  <div className="bg-[#111c44] p-3 rounded-xl flex flex-col items-center justify-center text-center">
                      <CornerUpLeft className="w-5 h-5 text-accent mb-2" />
                      <span className="text-accent font-bold text-[10px] mb-1 uppercase tracking-widest">2da Visita</span>
                      <span className="text-gray-300 text-xs">50% del valor</span>
                  </div>
              </div>
          </div>
        </main>

        {/* Footer */}
        <PageFooter pageNumber="3 / 11" />
      </div>
    </div>
  );
}
