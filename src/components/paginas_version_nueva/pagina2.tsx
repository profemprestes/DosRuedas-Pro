import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { Clock, ShieldAlert, Package, CloudRain } from 'lucide-react';

export default function Pagina2() {
  return (
    <div className="a4-container flex flex-col h-full justify-between overflow-hidden relative bg-[#0a0a0a]">
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{ backgroundImage: "url('https://picsum.photos/800/1200?random=2')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]/90" />

      <PageHeader badgeText="SLA DE ALTA CRITICIDAD" />

      <main className="flex-1 flex flex-col px-12 py-8 z-10 gap-8 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#2563eb] blur-[120px] opacity-20 pointer-events-none rounded-full" />
        <div>
          <h1 className="text-5xl font-black font-headline tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            ENVÍOS <span className="text-[#fbc107] bg-none text-transparent bg-clip-border" style={{ WebkitTextFillColor: '#fbc107' }}>EXPRESS</span>
          </h1>
          <h2 className="text-xl text-[#fbc107] font-body">
            Certeza Absoluta para tu Cliente Final
          </h2>
        </div>

        <div className="flex items-center gap-4 bg-[#2563eb]/10 border border-[#2563eb]/30 rounded-lg p-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#2563eb] blur-3xl opacity-10" />
          <div className="bg-[#2563eb]/20 p-2 rounded-lg shrink-0">
             <Clock className="w-6 h-6 text-[#2563eb]" />
          </div>
          <p className="text-white font-body relative z-10">
            Solicitud con <span className="font-bold text-[#fbc107]">2hs de anticipación</span> requerida para garantizar el cumplimiento del SLA.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between bg-black/40 hover:bg-[#2563eb]/20 transition-colors border border-white/10 rounded-full px-8 py-4 shadow-xl">
            <span className="text-white font-medium font-body">Macrocentro & Microcentro</span>
            <div className="flex items-center gap-8">
               <span className="text-gray-400 font-body text-sm">&lt; 45 mins</span>
               <span className="text-[#fbc107] font-headline font-bold text-2xl">$3.500</span>
            </div>
          </div>

          <div className="flex items-center justify-between bg-black/40 hover:bg-[#2563eb]/20 transition-colors border border-white/10 rounded-full px-8 py-4 shadow-xl">
            <span className="text-white font-medium font-body">Zona Norte / Perla</span>
            <div className="flex items-center gap-8">
               <span className="text-gray-400 font-body text-sm">&lt; 60 mins</span>
               <span className="text-[#fbc107] font-headline font-bold text-2xl">$4.200</span>
            </div>
          </div>

          <div className="flex items-center justify-between bg-black/40 hover:bg-[#2563eb]/20 transition-colors border border-white/10 rounded-full px-8 py-4 shadow-xl">
            <span className="text-white font-medium font-body">Zona Sur / Puerto</span>
            <div className="flex items-center gap-8">
               <span className="text-gray-400 font-body text-sm">&lt; 75 mins</span>
               <span className="text-[#fbc107] font-headline font-bold text-2xl">$4.500</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-auto">
          <div className="bg-white/5 border border-white/10 p-4 rounded-lg flex flex-col items-center text-center gap-3">
            <div className="bg-[#2563eb]/20 p-2 rounded-lg">
               <CloudRain className="w-5 h-5 text-[#2563eb]" />
            </div>
            <p className="text-xs text-[#9ca3af] font-body">
              Recargo del 50% por condiciones climáticas adversas (lluvia).
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-lg flex flex-col items-center text-center gap-3">
            <div className="bg-[#2563eb]/20 p-2 rounded-lg">
               <ShieldAlert className="w-5 h-5 text-[#2563eb]" />
            </div>
            <p className="text-xs text-[#9ca3af] font-body">
              Demoras de espera superiores a 10 min incurren en recargo.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-lg flex flex-col items-center text-center gap-3">
            <div className="bg-[#2563eb]/20 p-2 rounded-lg">
               <Package className="w-5 h-5 text-[#2563eb]" />
            </div>
            <p className="text-xs text-[#9ca3af] font-body">
              Máximo 3 bultos medianos o 1 bulto grande por viaje express.
            </p>
          </div>
        </div>

      </main>

      <PageFooter pageNumber="2 / 11" />
    </div>
  );
}
