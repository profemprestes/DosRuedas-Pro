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

      <main className="flex-1 flex flex-col px-12 py-8 z-10 gap-8">
        <div>
          <h1 className="text-5xl font-black text-white font-headline tracking-tight mb-2">
            ENVÍOS LOWCOST
          </h1>
          <h2 className="text-xl text-[#fbc107] font-body">
            Ruteo Diario Inteligente
          </h2>
        </div>

        <div className="bg-[#2563eb]/10 border border-[#2563eb]/30 rounded-xl p-6 shadow-xl flex items-center justify-between">
          <div className="flex flex-col gap-2 w-5/12">
            <span className="text-[#9ca3af] text-sm uppercase tracking-widest font-bold">Corte de Ingreso</span>
            <div className="text-2xl text-white font-headline flex items-center gap-2">
              <ClockIcon className="w-6 h-6 text-[#2563eb]" />
              Antes de las 13:00hs
            </div>
          </div>

          <ArrowRight className="w-8 h-8 text-[#fbc107] opacity-50" />

          <div className="flex flex-col gap-2 w-5/12">
            <span className="text-[#9ca3af] text-sm uppercase tracking-widest font-bold">Ventana de Entrega</span>
            <div className="text-2xl text-white font-headline flex items-center gap-2">
              <Truck className="w-6 h-6 text-[#2563eb]" />
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
             <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden">
                <table className="w-full text-left font-body">
                  <tbody className="divide-y divide-white/10">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-4 text-white font-medium flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#9ca3af]" /> Zona Centro
                      </td>
                      <td className="p-4 text-[#fbc107] font-bold text-right">$2.200</td>
                    </tr>
                    <tr className="bg-white/[0.02] hover:bg-white/5 transition-colors">
                      <td className="p-4 text-white font-medium flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#9ca3af]" /> Zona Macro
                      </td>
                      <td className="p-4 text-[#fbc107] font-bold text-right">$2.800</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-4 text-white font-medium flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#9ca3af]" /> Periferia
                      </td>
                      <td className="p-4 text-[#fbc107] font-bold text-right">$3.500</td>
                    </tr>
                  </tbody>
                </table>
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
