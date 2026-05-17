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

      <main className="flex-1 flex flex-col px-12 py-8 z-10 gap-8">
        <div>
          <h1 className="text-5xl font-black text-white font-headline tracking-tight mb-2">
            ENVÍOS EXPRESS
          </h1>
          <h2 className="text-xl text-[#fbc107] font-body">
            Certeza Absoluta para tu Cliente Final
          </h2>
        </div>

        <div className="flex items-center gap-4 bg-[#2563eb]/10 border border-[#2563eb]/30 rounded-lg p-4">
          <Clock className="w-8 h-8 text-[#2563eb]" />
          <p className="text-white font-body">
            Solicitud con <span className="font-bold text-[#fbc107]">2hs de anticipación</span> requerida para garantizar el cumplimiento del SLA.
          </p>
        </div>

        <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
          <table className="w-full text-left font-body">
            <thead className="bg-white/5 border-b border-white/10">
              <tr>
                <th className="p-4 text-xs font-bold text-[#9ca3af] uppercase tracking-wider">Zona de Cobertura</th>
                <th className="p-4 text-xs font-bold text-[#9ca3af] uppercase tracking-wider text-right">Tarifa Base</th>
                <th className="p-4 text-xs font-bold text-[#9ca3af] uppercase tracking-wider text-right">Tiempo Estimado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 text-white font-medium">Macrocentro & Microcentro</td>
                <td className="p-4 text-[#fbc107] font-bold text-right">$3.500</td>
                <td className="p-4 text-white text-right">&lt; 45 mins</td>
              </tr>
              <tr className="bg-white/[0.02] hover:bg-white/5 transition-colors">
                <td className="p-4 text-white font-medium">Zona Norte / Perla</td>
                <td className="p-4 text-[#fbc107] font-bold text-right">$4.200</td>
                <td className="p-4 text-white text-right">&lt; 60 mins</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 text-white font-medium">Zona Sur / Puerto</td>
                <td className="p-4 text-[#fbc107] font-bold text-right">$4.500</td>
                <td className="p-4 text-white text-right">&lt; 75 mins</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-auto">
          <div className="bg-white/5 border border-white/10 p-4 rounded-lg flex flex-col items-center text-center gap-3">
            <CloudRain className="w-6 h-6 text-[#9ca3af]" />
            <p className="text-xs text-[#9ca3af] font-body">
              Recargo del 50% por condiciones climáticas adversas (lluvia).
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-lg flex flex-col items-center text-center gap-3">
            <ShieldAlert className="w-6 h-6 text-[#9ca3af]" />
            <p className="text-xs text-[#9ca3af] font-body">
              Demoras de espera superiores a 10 min incurren en recargo.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-lg flex flex-col items-center text-center gap-3">
            <Package className="w-6 h-6 text-[#9ca3af]" />
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
