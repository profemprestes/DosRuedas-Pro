import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { CheckCircle2 } from 'lucide-react';

export default function Pagina7() {
  const benefits = [
    {
      title: "Consolidación Financiera",
      desc: "Elimina la carga administrativa de pagos diarios. Todos tus envíos se unifican bajo una única cuenta matriz."
    },
    {
      title: "Facturación Mensual Vencida",
      desc: "Mejora tu flujo de caja operando hoy y abonando a mes vencido mediante transferencia bancaria o cheques."
    },
    {
      title: "Reportes Unificados",
      desc: "Recepción de extractos detallados por período con desglose analítico de zonas y tipos de servicio."
    },
    {
      title: "Atención Ejecutiva",
      desc: "Asignación de un ejecutivo de cuenta dedicado para resolución de contingencias y escalamientos."
    }
  ];

  return (
    <div className="a4-container flex flex-col h-full justify-between overflow-hidden relative bg-[#0a0a0a]">
      {/* Background: 3PL, Drop-Off, Cuentas */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle,#ffffff10_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#fbc107]/10 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <PageHeader badgeText="TU SOCIO CORPORATIVO" />

      <main className="flex-1 flex flex-col px-12 py-8 z-10 gap-10">
        <div>
          <h1 className="text-5xl font-black text-white font-headline tracking-tight mb-2">
            CUENTAS CORRIENTES
          </h1>
          <h2 className="text-xl text-[#fbc107] font-body">
            Escala sin fricción financiera
          </h2>
        </div>

        <div className="bg-[#2563eb]/5 border border-[#2563eb]/20 rounded-2xl p-8 shadow-2xl flex-1 flex flex-col justify-center">
          <ul className="space-y-8">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex gap-6 group">
                <div className="mt-1 shrink-0">
                  <CheckCircle2 className="w-8 h-8 text-[#2563eb] group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-headline tracking-wide mb-2 group-hover:text-[#2563eb] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-[#9ca3af] font-body text-base leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </main>

      <PageFooter pageNumber="7 / 11" />
    </div>
  );
}
