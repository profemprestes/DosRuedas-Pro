import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { ArrowRight, MapPin, Truck } from 'lucide-react';

export default function Pagina3() {
  return (
    <div className="a4-container flex flex-col h-full justify-between overflow-hidden relative bg-[#0a0a0a]">
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{ backgroundImage: "url('https://picsum.photos/800/1200?random=3')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]" />

      <PageHeader badgeText="MÁXIMA RENTABILIDAD B2B" />

      <main className="flex-1 flex flex-col px-12 py-8 z-10 gap-8 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#2563eb] blur-[120px] opacity-20 pointer-events-none rounded-full" />
        <div>
          <h1 className="text-5xl font-black font-headline tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            ENVÍOS <span className="text-[#fbc107] bg-none text-transparent bg-clip-border" style={{ WebkitTextFillColor: '#fbc107' }}>LOWCOST</span>
          </h1>
          <h2 className="text-xl text-[#fbc107] font-body">
            Ruteo Diario Inteligente
          </h2>
        </div>

        <div className="bg-[#2563eb]/10 border border-[#2563eb]/30 rounded-xl p-6 shadow-xl flex items-center justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-[#2563eb] blur-3xl opacity-10" />
          <div className="flex flex-col gap-2 w-5/12 relative z-10">
            <span className="text-[#9ca3af] text-sm uppercase tracking-widest font-bold">Corte de Ingreso</span>
            <div className="text-2xl text-white font-headline flex items-center gap-3">
              <div className="bg-[#2563eb]/20 p-2 rounded-lg">
                 <ClockIcon className="w-5 h-5 text-[#2563eb]" />
              </div>
              Antes de las 13:00hs
            </div>
          </div>

          <ArrowRight className="w-8 h-8 text-[#fbc107] opacity-50 relative z-10" />

          <div className="flex flex-col gap-2 w-5/12 relative z-10">
            <span className="text-[#9ca3af] text-sm uppercase tracking-widest font-bold">Ventana de Entrega</span>
            <div className="text-2xl text-white font-headline flex items-center gap-3">
              <div className="bg-[#2563eb]/20 p-2 rounded-lg">
                 <Truck className="w-5 h-5 text-[#2563eb]" />
              </div>
              Antes de las 19:00hs
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-8">
          <div className="space-y-6">
             <h3 className="text-[#ffffff] font-headline text-lg uppercase tracking-wider border-b border-white/10 pb-2">
               Mecánica Operativa
             </h3>
             <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[#2563eb] text-xs font-bold">1</span>
                  </div>
                  <p className="text-white/80 font-body text-sm leading-relaxed">
                    Consolidación de paquetes en franja matutina.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[#2563eb] text-xs font-bold">2</span>
                  </div>
                  <p className="text-white/80 font-body text-sm leading-relaxed">
                    Optimización algorítmica de rutas para minimizar distancias.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[#2563eb] text-xs font-bold">3</span>
                  </div>
                  <p className="text-white/80 font-body text-sm leading-relaxed">
                    Distribución eficiente con notificaciones al destinatario.
                  </p>
                </li>
             </ul>
          </div>

          <div>
             <h3 className="text-[#ffffff] font-headline text-lg uppercase tracking-wider border-b border-white/10 pb-2 mb-6">
               Tarifario Optimizado
             </h3>
             <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between bg-black/40 hover:bg-[#2563eb]/20 transition-colors border border-white/10 rounded-full px-6 py-3 shadow-md">
                  <div className="flex items-center gap-3">
                     <MapPin className="w-5 h-5 text-[#2563eb]" />
                     <span className="text-white font-medium font-body">Zona Centro</span>
                  </div>
                  <span className="text-[#fbc107] font-headline font-bold text-xl">$2.200</span>
                </div>

                <div className="flex items-center justify-between bg-black/40 hover:bg-[#2563eb]/20 transition-colors border border-white/10 rounded-full px-6 py-3 shadow-md">
                  <div className="flex items-center gap-3">
                     <MapPin className="w-5 h-5 text-[#2563eb]" />
                     <span className="text-white font-medium font-body">Zona Macro</span>
                  </div>
                  <span className="text-[#fbc107] font-headline font-bold text-xl">$2.800</span>
                </div>

                <div className="flex items-center justify-between bg-black/40 hover:bg-[#2563eb]/20 transition-colors border border-white/10 rounded-full px-6 py-3 shadow-md">
                  <div className="flex items-center gap-3">
                     <MapPin className="w-5 h-5 text-[#2563eb]" />
                     <span className="text-white font-medium font-body">Periferia</span>
                  </div>
                  <span className="text-[#fbc107] font-headline font-bold text-xl">$3.500</span>
                </div>
             </div>
          </div>
        </div>

      </main>

      <PageFooter pageNumber="3 / 11" />
    </div>
  );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
