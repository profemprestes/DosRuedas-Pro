import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { MessageCircle, Bell, FileText } from 'lucide-react';

export default function Pagina9() {
  return (
    <div className="a4-container mx-auto bg-[#0a0a0a] relative overflow-hidden flex flex-col shadow-2xl text-white font-body" suppressHydrationWarning>
      {/* Background: Tecnología & Onboarding */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111827] to-[#0a0a0a]"></div>
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#ffffff03_10px,#ffffff03_20px)]"></div>
      </div>

      <div className="relative z-20 flex flex-col h-full justify-between max-h-full p-10">
        <PageHeader badgeText="TRAZABILIDAD TOTAL" />

        <main className="flex-1 flex flex-col justify-center mt-2 mb-4 overflow-hidden">
          
          {/* Header Section */}
          <div className="mb-8 shrink-0 border-b border-white/10 pb-6">
            <h1 className="text-5xl font-black font-headline tracking-tight uppercase text-[#ffffff] mb-2">
              CONTROL ABSOLUTO
            </h1>
            <h2 className="text-2xl font-bold font-headline text-[#fbc107] uppercase tracking-wide">
              Tu mercadería bajo radar
            </h2>
          </div>

          {/* Features Section */}
          <div className="flex-1 flex flex-col gap-6 justify-center">

            {/* Block 1 */}
            <div className="bg-black/70 border border-white/10 rounded-xl p-6 shadow-2xl backdrop-blur-md flex items-start gap-5 transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 rounded-lg bg-[#2563eb]/10 border border-[#2563eb]/30 flex items-center justify-center shrink-0">
                <MessageCircle className="w-8 h-8 text-[#2563eb]" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-lg text-white mb-2 uppercase tracking-wider">
                  Soporte Operativo
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Comunicación directa e instantánea vía <strong className="text-[#fbc107]">WhatsApp corporativo</strong>. Un canal dedicado para resolver cualquier incidencia en tiempo real durante todo el ciclo de distribución.
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="bg-black/70 border border-white/10 rounded-xl p-6 shadow-2xl backdrop-blur-md flex items-start gap-5 transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 rounded-lg bg-[#2563eb]/10 border border-[#2563eb]/30 flex items-center justify-center shrink-0">
                <Bell className="w-8 h-8 text-[#2563eb]" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-lg text-white mb-2 uppercase tracking-wider">
                  Estados de Envío
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Notificaciones precisas y visibilidad total del <strong className="text-[#fbc107]">ciclo de entrega</strong>. Le informamos apenas su paquete ha sido entregado exitosamente en destino.
                </p>
              </div>
            </div>

            {/* Block 3 */}
            <div className="bg-black/70 border border-white/10 rounded-xl p-6 shadow-2xl backdrop-blur-md flex items-start gap-5 transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 rounded-lg bg-[#2563eb]/10 border border-[#2563eb]/30 flex items-center justify-center shrink-0">
                <FileText className="w-8 h-8 text-[#2563eb]" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-lg text-white mb-2 uppercase tracking-wider">
                  Gestión de Cuenta
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Control financiero transparente. Reciba <strong className="text-[#fbc107]">reportes mensuales</strong> detallados de su Cuenta Corriente, facilitando la auditoría y proyección de sus costos logísticos.
                </p>
              </div>
            </div>

          </div>

        </main>

        <PageFooter pageNumber="9 / 11" />
      </div>
    </div>
  );
}
