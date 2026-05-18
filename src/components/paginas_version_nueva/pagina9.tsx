import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { MessageSquare, Activity, BarChart3 } from 'lucide-react';

export default function Pagina9() {
  return (
    <div className="a4-container flex flex-col h-full justify-between overflow-hidden relative bg-[#0a0a0a]">
      {/* Background: Tecnología & Onboarding */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111827] to-[#0a0a0a]"></div>
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#ffffff03_10px,#ffffff03_20px)]"></div>
      </div>

      <PageHeader badgeText="TRAZABILIDAD TOTAL" />

      <main className="flex-1 flex flex-col px-12 py-8 z-10 gap-8">
        <div>
          <h1 className="text-5xl font-black text-white font-headline tracking-tight mb-2">
            CONTROL ABSOLUTO
          </h1>
          <h2 className="text-xl text-[#fbc107] font-body">
            Tu mercadería bajo radar
          </h2>
        </div>

        <div className="flex flex-col gap-6 flex-1 justify-center">

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-center gap-6 hover:bg-[#2563eb]/10 hover:border-[#2563eb]/30 transition-all cursor-default">
            <div className="w-14 h-14 bg-[#2563eb]/20 rounded-lg flex items-center justify-center border border-[#2563eb]/30 shrink-0">
              <MessageSquare className="w-7 h-7 text-[#2563eb]" />
            </div>
            <div>
              <h3 className="text-white font-headline font-bold text-lg mb-1 uppercase tracking-wide">Soporte WhatsApp Corporativo</h3>
              <p className="text-[#9ca3af] font-body text-sm leading-relaxed">
                Canal directo y prioritario de comunicación. Resolución de dudas, cambios de domicilio en ruta y confirmaciones fotográficas al instante.
              </p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-center gap-6 hover:bg-[#2563eb]/10 hover:border-[#2563eb]/30 transition-all cursor-default">
            <div className="w-14 h-14 bg-[#2563eb]/20 rounded-lg flex items-center justify-center border border-[#2563eb]/30 shrink-0">
              <Activity className="w-7 h-7 text-[#2563eb]" />
            </div>
            <div>
              <h3 className="text-white font-headline font-bold text-lg mb-1 uppercase tracking-wide">Estados de Envío</h3>
              <p className="text-[#9ca3af] font-body text-sm leading-relaxed">
                Visibilidad del flujo logístico. Desde la recepción en hub/colecta, pasando por la asignación de ruta, hasta la firma de conformidad en destino.
              </p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-center gap-6 hover:bg-[#2563eb]/10 hover:border-[#2563eb]/30 transition-all cursor-default">
            <div className="w-14 h-14 bg-[#2563eb]/20 rounded-lg flex items-center justify-center border border-[#2563eb]/30 shrink-0">
              <BarChart3 className="w-7 h-7 text-[#2563eb]" />
            </div>
            <div>
              <h3 className="text-white font-headline font-bold text-lg mb-1 uppercase tracking-wide">Gestión Analítica de Cuenta</h3>
              <p className="text-[#9ca3af] font-body text-sm leading-relaxed">
                Informes de rendimiento SLA, volumen operado y liquidaciones detalladas diseñadas para integrarse a la contabilidad de tu empresa.
              </p>
            </div>
          </div>

        </div>

      </main>

      <PageFooter pageNumber="9 / 11" />
    </div>
  );
}
