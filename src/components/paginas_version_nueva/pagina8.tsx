import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { Settings, Zap, Map } from 'lucide-react';

export default function Pagina8() {
  return (
    <div className="a4-container flex flex-col h-full justify-between overflow-hidden relative bg-[#0a0a0a]">
      {/* Background: Tecnología & Onboarding */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111827] to-[#0a0a0a]"></div>
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#ffffff03_10px,#ffffff03_20px)]"></div>
      </div>

      <PageHeader badgeText="CAPACIDAD OPERATIVA" />

      <main className="flex-1 flex flex-col px-12 py-8 z-10 gap-10">
        <div className="text-center">
          <h1 className="text-5xl font-black text-white font-headline tracking-tight mb-2">
            INFRAESTRUCTURA REAL
          </h1>
          <h2 className="text-xl text-[#fbc107] font-body">
            Flota Exclusiva Bajaj Discover 125
          </h2>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 content-center">

          <div className="col-span-1 md:col-span-2 bg-[#2563eb]/10 border border-[#2563eb]/30 rounded-xl p-6 flex items-center justify-between shadow-lg">
            <div className="flex-1">
              <h3 className="text-white font-headline font-bold text-xl mb-2 flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#fbc107]" /> Agilidad Urbana Real
              </h3>
              <p className="text-[#9ca3af] font-body text-sm leading-relaxed max-w-lg">
                Nuestra flota estandarizada está diseñada para sortear el tráfico de Mar del Plata con máxima eficiencia, manteniendo un consumo óptimo y una fiabilidad mecánica insuperable.
              </p>
            </div>
            <div className="w-32 h-20 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center font-mono font-bold text-[#2563eb] text-2xl">
              100%
              <span className="block text-[10px] text-white/50 tracking-widest uppercase ml-2">Propia</span>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-4">
             <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
               <Settings className="w-6 h-6 text-[#9ca3af]" />
             </div>
             <h3 className="text-white font-headline font-bold text-lg">Mantenimiento Preventivo Propio</h3>
             <p className="text-[#9ca3af] font-body text-sm leading-relaxed">
               Taller in-house exclusivo para nuestra flota. Eliminamos los tiempos muertos por desperfectos mecánicos garantizando disponibilidad permanente.
             </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-4">
             <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
               <Map className="w-6 h-6 text-[#9ca3af]" />
             </div>
             <h3 className="text-white font-headline font-bold text-lg">Predictibilidad Operativa</h3>
             <p className="text-[#9ca3af] font-body text-sm leading-relaxed">
               Al estandarizar los vehículos, predecimos con exactitud los tiempos de traslado, capacidades de carga volumétrica y respuesta ante emergencias.
             </p>
          </div>

        </div>

      </main>

      <PageFooter pageNumber="8 / 11" />
    </div>
  );
}
