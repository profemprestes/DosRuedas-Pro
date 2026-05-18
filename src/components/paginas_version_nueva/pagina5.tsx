import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { Box, ScanLine, FastForward } from 'lucide-react';

export default function Pagina5() {
  return (
    <div className="a4-container flex flex-col h-full justify-between overflow-hidden relative bg-[#0a0a0a]">
      {/* Background: 3PL, Drop-Off, Cuentas */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle,#ffffff10_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#fbc107]/10 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <PageHeader badgeText="EL ECOSISTEMA 3PL" />

      <main className="flex-1 flex flex-col px-12 py-8 z-10 gap-8 justify-center">
        <div className="text-center mb-4">
          <h1 className="text-5xl font-black text-white font-headline tracking-tight mb-2">
            FULFILLMENT B2B
          </h1>
          <h2 className="text-xl text-[#fbc107] font-body">
            Tarifa Plana. Riesgo Cero.
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 rounded-full bg-[#2563eb]/20 flex items-center justify-center border border-[#2563eb]/30">
              <Box className="w-8 h-8 text-[#2563eb]" />
            </div>
            <h3 className="text-white font-headline font-bold text-lg uppercase tracking-wide">
              Almacenamiento Seguro
            </h3>
            <p className="text-[#9ca3af] font-body text-sm leading-relaxed">
              Resguardo en instalaciones propias. Control de stock y auditoría permanente de tu mercadería, liberando espacio en tu local.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#2563eb]/10 border border-[#2563eb]/30 rounded-2xl p-6 flex flex-col items-center text-center gap-4 shadow-xl shadow-[#2563eb]/5 transform scale-105">
            <div className="w-16 h-16 rounded-full bg-[#2563eb] flex items-center justify-center shadow-[0_0_15px_#2563eb]">
              <ScanLine className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white font-headline font-bold text-lg uppercase tracking-wide">
              Pick & Pack Preciso
            </h3>
            <p className="text-white/80 font-body text-sm leading-relaxed">
              Armado de pedidos con protocolos de validación cruzada. Embalaje profesional que asegura la integridad en el trayecto.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 rounded-full bg-[#2563eb]/20 flex items-center justify-center border border-[#2563eb]/30">
              <FastForward className="w-8 h-8 text-[#2563eb]" />
            </div>
            <h3 className="text-white font-headline font-bold text-lg uppercase tracking-wide">
              Distribución Inmediata
            </h3>
            <p className="text-[#9ca3af] font-body text-sm leading-relaxed">
              Inyección directa a nuestras rutas de distribución sin demoras de colecta. Máxima velocidad de cara al consumidor final.
            </p>
          </div>
        </div>

      </main>

      <PageFooter pageNumber="5 / 11" />
    </div>
  );
}
