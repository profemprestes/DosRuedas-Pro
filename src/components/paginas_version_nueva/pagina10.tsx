import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';

export default function Pagina10() {
  return (
    <div className="a4-container flex flex-col h-full justify-between overflow-hidden relative bg-[#0a0a0a]">
      {/* Background: Tecnología & Onboarding */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111827] to-[#0a0a0a]"></div>
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#ffffff03_10px,#ffffff03_20px)]"></div>
      </div>

      <PageHeader badgeText="INTEGRACIÓN B2B" />

      <main className="flex-1 flex flex-col px-12 py-8 z-10 gap-10">
        <div>
          <h1 className="text-5xl font-black text-white font-headline tracking-tight mb-2">
            TRANSICIÓN SIN FRICCIÓN
          </h1>
          <h2 className="text-xl text-[#fbc107] font-body">
            Tu operativa funcionando en 48hs
          </h2>
        </div>

        <div className="flex-1 flex flex-col justify-center pl-8">
          <div className="relative border-l-2 border-white/10 space-y-12 pb-8">

            {/* Step 1 */}
            <div className="relative pl-10">
              <div className="absolute -left-[21px] top-1 w-10 h-10 bg-[#0a0a0a] rounded-full border-2 border-[#2563eb] flex items-center justify-center shadow-[0_0_15px_#2563eb]/50">
                 <span className="text-white font-headline font-bold">1</span>
              </div>
              <h3 className="text-white font-headline font-bold text-xl uppercase tracking-wide mb-2">
                Análisis de Carga
              </h3>
              <p className="text-[#9ca3af] font-body text-base leading-relaxed max-w-xl">
                Nuestro equipo comercial releva tus volúmenes de envío, zonas de mayor densidad, SLA requeridos y tipología de mercadería para diseñar un esquema de ruteo y tarifario a medida.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative pl-10">
              <div className="absolute -left-[21px] top-1 w-10 h-10 bg-[#0a0a0a] rounded-full border-2 border-[#2563eb] flex items-center justify-center">
                 <span className="text-white font-headline font-bold">2</span>
              </div>
              <h3 className="text-white font-headline font-bold text-xl uppercase tracking-wide mb-2">
                Alta de Cuenta e Integración
              </h3>
              <p className="text-[#9ca3af] font-body text-base leading-relaxed max-w-xl">
                Formalización del acuerdo comercial, apertura de cuenta corriente y configuración de canales de soporte corporativo. Presentación de los protocolos operativos al equipo de tu depósito/tienda.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative pl-10">
              <div className="absolute -left-[21px] top-1 w-10 h-10 bg-[#2563eb] rounded-full border-2 border-[#2563eb] flex items-center justify-center shadow-[0_0_15px_#2563eb]">
                 <span className="text-white font-headline font-bold">3</span>
              </div>
              <h3 className="text-[#fbc107] font-headline font-bold text-xl uppercase tracking-wide mb-2">
                Primera Colecta
              </h3>
              <p className="text-white/80 font-body text-base leading-relaxed max-w-xl">
                Inicio formal de operaciones. Despliegue de nuestra flota en tus instalaciones bajo los horarios acordados, marcando el inicio de una logística transparente y predecible.
              </p>
            </div>

          </div>
        </div>

      </main>

      <PageFooter pageNumber="10 / 11" />
    </div>
  );
}
