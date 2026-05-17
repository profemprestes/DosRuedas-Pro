import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { Handshake, CheckSquare, Building2, Briefcase, FileSpreadsheet, CreditCard } from 'lucide-react';

export default function Pagina7() {
  return (
    <div className="a4-container mx-auto bg-[#0a0a0a] relative overflow-hidden flex flex-col shadow-2xl text-white font-body" suppressHydrationWarning>
      {/* Background Image Placeholder with Dark Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop")' }}
      />
      <div className="absolute inset-0 bg-black/85 backdrop-blur-md z-10" />

      <div className="relative z-20 flex flex-col h-full justify-between max-h-full p-10">
        <PageHeader badgeText="TU SOCIO CORPORATIVO" />

        <main className="flex-1 flex flex-col mt-4 mb-4 gap-6 justify-center overflow-hidden">
          
          {/* Main Title Section */}
          <div className="text-center shrink-0 mb-4">
            <div className="inline-flex items-center justify-center p-4 bg-[#2563eb]/10 rounded-2xl border border-[#2563eb]/20 mb-4">
              <Handshake className="w-12 h-12 text-[#2563eb]" />
            </div>
            <h1 className="text-5xl font-black font-headline text-[#2563eb] leading-tight uppercase mb-2">
              CUENTAS CORRIENTES
            </h1>
            <h2 className="text-3xl font-bold font-headline text-[#fbc107]">
              Escala sin fricción financiera
            </h2>
          </div>

          <p className="text-gray-300 text-base leading-relaxed max-w-3xl mx-auto text-center shrink-0 mb-4">
            Diseñamos soluciones financieras para empresas con alto volumen de despachos. Unifique sus operaciones bajo una sola cuenta y simplifique su administración logística con nuestro modelo B2B.
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-2 gap-6 shrink-0">
            {[
              {
                icon: <FileSpreadsheet className="w-6 h-6" />,
                title: "Facturación Mensual",
                desc: "Emisión de facturas A/B unificadas con detalle operativo completo de cada ciclo."
              },
              {
                icon: <Briefcase className="w-6 h-6" />,
                title: "Consolidación de Envíos",
                desc: "Agrupamos todos sus despachos para mantener un registro limpio y centralizado."
              },
              {
                icon: <Building2 className="w-6 h-6" />,
                title: "Reportes de Métricas",
                desc: "Acceso a reportes detallados de entregas, efectividad y control de costos."
              },
              {
                icon: <CreditCard className="w-6 h-6" />,
                title: "Un Solo Pago",
                desc: "Flexibilidad de caja: abone todas sus operaciones de forma mensual consolidada."
              }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-start gap-4 backdrop-blur-sm transition-colors hover:bg-white/10">
                <div className="bg-black/50 p-2 rounded-lg border border-[#2563eb]/30 text-[#2563eb] shrink-0 mt-1">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#ffffff] font-headline mb-1 flex items-center gap-2">
                    {benefit.title} <CheckSquare className="w-4 h-4 text-[#2563eb]" />
                  </h3>
                  <p className="text-sm text-gray-400 leading-snug">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Requisitos B2B Box */}
          <div className="mt-auto shrink-0 bg-[#0a0a0a]/80 border border-[#2563eb]/40 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#2563eb]"></div>

            <h4 className="text-xl font-bold text-[#fbc107] font-headline uppercase mb-4 tracking-wide pl-4">
              Requisitos de Apertura B2B
            </h4>

            <div className="grid grid-cols-3 gap-4 pl-4 text-sm font-medium text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2563eb]"></div>
                <span>Constancia de CUIT activo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2563eb]"></div>
                <span>Volumen mínimo mensual</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2563eb]"></div>
                <span>Aprobación crediticia</span>
              </div>
            </div>
          </div>

        </main>

        <PageFooter pageNumber="7 / 11" />
      </div>
    </div>
  );
}
