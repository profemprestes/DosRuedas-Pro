import React from 'react';
import Image from 'next/image';
import { PageHeader } from '../paginas_version_nueva/shared/PageHeader';
import { PageFooter } from '../paginas_version_nueva/shared/PageFooter';
import { UserCheck, Activity, TrendingUp, ShieldCheck } from 'lucide-react';

export default function Pagina3() {
  return (
    <div className="a4-container bg-[#0a0a0a] flex flex-col h-full max-h-full overflow-hidden relative">
      <PageHeader badgeText="LA SOLUCIÓN 3PL" />

      <main className="flex-1 flex w-full">
        {/* Columna Izquierda (Texto - 60%) */}
        <div className="w-[60%] flex flex-col justify-center p-12 pr-8 space-y-6">
          <h1 className="font-['Orbitron'] font-headline text-4xl leading-snug font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            DosRuedas: Su <span className="text-[#fbc107] bg-none drop-shadow-none" style={{ WebkitTextFillColor: '#fbc107' }}>aliado estratégico</span> en la última milla.
          </h1>

          <h2 className="text-[#ffffff] font-body font-bold text-xl border-l-4 border-[#2563eb] pl-4">
            Transformamos su logística en una ventaja competitiva.
          </h2>

          <p className="text-gray-300 text-sm leading-relaxed font-body">
            Dejamos de ser un proveedor externo para convertirnos en una extensión directa de su equipo. Entendemos que su negocio exige más que solo traslados: exige un protocolo de entrega que refuerce su marca ante cada cliente final.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-2">
            {/* Pilar 1 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-2 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-[#2563eb]" />
                <h3 className="text-white font-bold text-sm">Imagen Profesional</h3>
              </div>
              <p className="text-gray-400 text-xs">Repartidores bajo estricto código de conducta. Representamos su marca.</p>
            </div>

            {/* Pilar 2 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-2 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#fbc107]" />
                <h3 className="text-white font-bold text-sm">Gestión en Tiempo Real</h3>
              </div>
              <p className="text-gray-400 text-xs">Visibilidad total sobre el estado de cada envío.</p>
            </div>

            {/* Pilar 3 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-2 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#2563eb]" />
                <h3 className="text-white font-bold text-sm">Flexibilidad Escalable</h3>
              </div>
              <p className="text-gray-400 text-xs">Estructura diseñada para picos de alta demanda.</p>
            </div>

            {/* Pilar 4 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-2 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#fbc107]" />
                <h3 className="text-white font-bold text-sm">Protocolos de Cuidado</h3>
              </div>
              <p className="text-gray-400 text-xs">7 años de experiencia garantizando que cada paquete llegue intacto.</p>
            </div>
          </div>

          <div className="mt-4 bg-[#141414] border border-white/10 p-4 rounded-xl">
            <p className="text-gray-200 text-sm font-medium">
              "Usted se enfoca en su producto; nosotros nos aseguramos de que llegue a destino con eficiencia y profesionalismo."
            </p>
          </div>
        </div>

        {/* Columna Derecha (Visual - 40%) */}
        <div className="w-[40%] relative h-full flex flex-col justify-center py-12 pr-0 pl-4">
          <div className="relative w-full h-[90%] rounded-l-2xl overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.3)] border-y border-l border-[#2563eb]/20">
            <Image
              src="https://picsum.photos/500/800?random=3"
              alt="Solución 3PL"
              fill
              className="object-cover rounded-l-2xl"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
          </div>
        </div>
      </main>

      <PageFooter pageNumber="03" />
    </div>
  );
}
