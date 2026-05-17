import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { ShieldCheck, Table } from 'lucide-react';

export default function Pagina8() {
  return (
    <div className="flex flex-col justify-between w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] overflow-hidden box-border bg-primary relative text-white font-body shadow-2xl print:shadow-none" suppressHydrationWarning>
      {/* Background Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.03)_0%,_transparent_70%)] z-10" />

      <div className="relative z-20 flex flex-col h-full p-[16mm] justify-between box-border">
        {/* Unified Top Header Component */}
        <PageHeader badgeText="RESUMEN EJECUTIVO" />

        {/* Main Content Layout Optimized for A4 Envelope */}
        <main className="flex-1 flex flex-col overflow-hidden mt-4 gap-4">
          
          {/* Top Feature Card: Cash on Delivery */}
          <div className="border border-accent/30 rounded-2xl p-5 bg-accent/5 shadow-2xl shrink-0 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 rotate-12 pointer-events-none">
              <ShieldCheck className="w-28 h-28" />
            </div>
            <div className="flex items-start gap-4 mb-4">
              <div className="text-accent bg-accent/10 p-2.5 rounded-xl shadow-xl shrink-0">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-accent leading-tight mb-0.5 italic uppercase font-headline tracking-tight">
                  Gestión de Cobranzas en Destino
                </h1>
                <p className="text-accent font-black text-[10px] tracking-[0.18em] uppercase opacity-90">
                  (SERVICIO DE CONTRAREEMBOLSO SIN COSTO)
                </p>
              </div>
            </div>

            <div className="space-y-2.5 text-gray-300 text-xs leading-relaxed max-w-3xl font-medium">
              <p>
                Para potenciar sus canales de venta, nos encargamos de recaudar el valor de sus productos al momento de la entrega. <strong className="text-white">Garantizamos una transacción profesional y segura.</strong>
              </p>
              <p>
                La rendición de los fondos se realiza con la agilidad que su caja requiere (en el día, a las 24hs o semanalmente) mediante transferencia bancaria o efectivo, acompañada siempre de un arqueo detallado.
              </p>
              <p className="italic text-[9px] text-gray-500 pt-2 border-t border-white/5 uppercase font-bold tracking-widest">
                * Nota: El valor físico transportado corre por cuenta y orden del cliente solicitante.
              </p>
            </div>
          </div>

          {/* Table Subtitle Section */}
          <div className="text-center shrink-0">
            <div className="flex items-center justify-center gap-2">
              <Table className="w-4 h-4 text-accent opacity-50" />
              <h2 className="text-accent font-black text-[11px] tracking-[0.25em] uppercase font-headline italic">
                Tabla Comparativa de Modelos
              </h2>
            </div>
          </div>

          {/* Matrix Table - Redesigned for Dark Premium Identity */}
          <div className="overflow-hidden bg-white/5 border border-white/10 rounded-xl shadow-2xl backdrop-blur-md w-full shrink-0">
            <table className="w-full border-collapse text-center text-[11px] text-gray-300 table-fixed">
              <thead className="bg-white/10 border-b border-white/10">
                <tr className="font-bold text-accent uppercase tracking-wider text-[9px]">
                  <th className="px-2 py-3 text-left w-[20%] font-semibold">CARACTERÍSTICA</th>
                  <th className="px-1 py-3 font-semibold">EXPRESS</th>
                  <th className="px-1 py-3 font-semibold">LOWCOST</th>
                  <th className="px-1 py-3 font-bold text-white bg-white/5">CTA. CORRIENTE</th>
                  <th className="px-1 py-3 font-semibold">FLEX (ML)</th>
                  <th className="px-1 py-3 font-semibold">3PL 360</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-transparent">
                {[
                  { c: "Tarifa", v1: "Zonificada", v2: "Zonificada", v3: "Económica", v4: "Híbrida", v5: "PLANA", s: true },
                  { c: "Horario", v1: "ELECCIÓN", v2: "Día", v3: "ELECCIÓN", v4: "Antes 20hs", v5: "Día" },
                  { c: "Corte", v1: "15:00 hs", v2: "13:00 hs", v3: "15:00 hs", v4: "15:00 hs", v5: "15:00 hs" },
                  { c: "Previo", v1: "2 Horas", v2: "2 Horas", v3: "2 Horas", v4: "Inmediato", v5: "Picking" },
                  { c: "Pago Destino", v1: "SÍ", v2: "SÍ", v3: "SÍ", v4: "NO (App)", v5: "SÍ" },
                  { c: "2da Visita", v1: "100%", v2: "100%", v3: "50%", v4: "Según Nivel", v5: "GRATIS", s: true },
                ].map((row, i) => (
                  <tr 
                    key={i} 
                    className="transition-colors hover:bg-white/5 odd:bg-transparent even:bg-white/[0.02]"
                  >
                    <td className="px-2 py-2.5 text-left font-bold text-gray-100 border-r border-white/5 bg-white/[0.01]">{row.c}</td>
                    <td className="px-1 py-2.5 border-r border-white/5 text-gray-400">{row.v1}</td>
                    <td className="px-1 py-2.5 border-r border-white/5 text-gray-400">{row.v2}</td>
                    <td className="px-1 py-2.5 border-r border-white/5 text-accent font-extrabold bg-accent/5">{row.v3}</td>
                    <td className="px-1 py-2.5 border-r border-white/5 text-gray-400">{row.v4}</td>
                    <td className={`px-1 py-2.5 ${row.s ? 'text-emerald-400 font-extrabold bg-emerald-500/10' : 'text-gray-400'}`}>{row.v5}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>

        {/* Unified Bottom Footer Component */}
        <PageFooter pageNumber="8 / 11" />
      </div>
    </div>
  );
}