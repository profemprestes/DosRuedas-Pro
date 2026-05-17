import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { CheckCircle2, TrendingUp, Award } from 'lucide-react';

export default function Pagina4() {
  return (
    <div className="a4-container flex flex-col h-full justify-between overflow-hidden relative bg-[#0a0a0a]">
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{ backgroundImage: "url('https://picsum.photos/800/1200?random=4')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]/90" />

      <PageHeader
        badgeText="PROTECCIÓN DE REPUTACIÓN"
        badgeTextColor="text-[#22c55e]"
        badgeBorderColor="border-[#22c55e]/50"
      />

      <main className="flex-1 flex flex-col px-12 py-4 z-10 gap-6">
        <div>
          <h1 className="text-5xl font-black text-white font-headline tracking-tight mb-2">
            MERCADO LIBRE FLEX
          </h1>
          <h2 className="text-xl text-[#22c55e] font-body flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" /> Tu Termómetro Siempre en Verde
          </h2>
        </div>

        <p className="text-[#9ca3af] font-body text-sm leading-relaxed max-w-2xl">
          Entendemos que en Mercado Libre, la métrica de tiempo de entrega define tu posicionamiento.
          Nuestra operación está calibrada para asegurar el escaneo a tiempo y la entrega en el día.
        </p>

        <div className="flex flex-col gap-4 mt-4">

          {/* Nivel 1 */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#9ca3af]" />
              </div>
              <div>
                <h3 className="text-white font-headline font-bold">Nivel 1: Starter</h3>
                <p className="text-[#9ca3af] text-sm font-body">1 a 5 envíos diarios</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-white font-bold text-xl">$3.500</div>
              <div className="text-[#9ca3af] text-xs">Por paquete</div>
            </div>
          </div>

          {/* Nivel 2 */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#9ca3af]" />
              </div>
              <div>
                <h3 className="text-white font-headline font-bold">Nivel 2: Growth</h3>
                <p className="text-[#9ca3af] text-sm font-body">6 a 15 envíos diarios</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-white font-bold text-xl">$3.200</div>
              <div className="text-[#9ca3af] text-xs">Por paquete</div>
            </div>
          </div>

          {/* Nivel 3 - Highlighted */}
          <div className="bg-[#2563eb] border border-[#2563eb] rounded-xl p-6 flex items-center justify-between shadow-2xl shadow-[#2563eb]/20 transform scale-[1.02]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-headline font-bold text-lg">Nivel 3: Grandes Cuentas</h3>
                <p className="text-white/80 text-sm font-body">+15 envíos diarios (Colecta Bonificada)</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[#fbc107] font-black text-3xl font-headline tracking-tighter">$4.500</div>
              <div className="text-white/80 text-xs font-bold uppercase tracking-wider">Tarifa Plana Base</div>
            </div>
          </div>

        </div>

      </main>

      <PageFooter pageNumber="4 / 11" />
    </div>
  );
}
