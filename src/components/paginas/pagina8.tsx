import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { ShieldCheck, Table } from 'lucide-react';

export default function Pagina8() {
  return (
    <div className="flex flex-col justify-between w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] overflow-hidden box-border bg-primary relative text-white font-body" suppressHydrationWarning>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.03)_0%,_transparent_70%)] z-10" />

      <div className="relative z-20 flex flex-col h-full p-16 justify-between box-border">
        <PageHeader badgeText="RESUMEN EJECUTIVO" />

        <main className="flex-1 flex flex-col justify-center overflow-hidden gap-6">
          <div className="border-2 border-accent rounded-[2rem] p-8 mb-4 bg-accent/5 shadow-2xl shrink-0 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 rotate-12">
              <ShieldCheck className="w-32 h-32" />
            </div>
            <div className="flex items-start gap-6 mb-6">
              <div className="text-accent bg-accent/10 p-3 rounded-2xl shadow-xl">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <div>
                <h1 className="text-4xl font-black text-accent leading-none mb-1 italic uppercase font-headline tracking-tighter">
                  Gestión de Cobranzas en Destino
                </h1>
                <p className="text-accent font-black text-xs tracking-[0.2em] uppercase">
                  (SERVICIO DE CONTRAREEMBOLSO SIN COSTO)
                </p>
              </div>
            </div>

            <div className="space-y-4 text-slate-300 text-sm leading-relaxed max-w-3xl font-medium">
              <p>
                Para potenciar sus canales de venta, nos encargamos de recaudar el valor de sus productos al momento de la entrega. <strong className="text-white">Garantizamos una transacción profesional y segura.</strong>
              </p>
              <p>
                La rendición de los fondos se realiza con la agilidad que su caja requiere (en el día, a las 24hs o semanalmente) mediante transferencia bancaria o efectivo, acompañada siempre de un arqueo detallado.
              </p>
              <p className="italic text-[10px] text-slate-500 pt-2 border-t border-white/5 uppercase font-bold tracking-widest">
                * Nota: El valor físico transportado corre por cuenta y orden del cliente solicitante.
              </p>
            </div>
          </div>

          <div className="text-center mb-2 shrink-0">
            <div className="flex items-center justify-center gap-3">
              <Table className="w-5 h-5 text-accent opacity-50" />
              <h2 className="text-accent font-black text-sm tracking-[0.3em] uppercase font-headline">
                Tabla Comparativa de Modelos
              </h2>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded-2xl shadow-2xl border border-slate-200 flex-grow flex flex-col">
            <table className="w-full text-[10.5px] text-slate-700 h-full table-fixed">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr className="font-black text-slate-500 uppercase tracking-tighter text-center">
                  <th className="px-3 py-4 text-left w-[18%]">CARACTERÍSTICA</th>
                  <th className="px-2 py-4">EXPRESS</th>
                  <th className="px-2 py-4">LOWCOST</th>
                  <th className="px-2 py-4">CTA. CORRIENTE</th>
                  <th className="px-2 py-4">FLEX (ML)</th>
                  <th className="px-2 py-4">3PL 360</th>
                </tr>
              </thead>
              <tbody className="text-center font-bold divide-y divide-slate-100 flex-1">
                {[
                  { c: "Tarifa", v1: "Zonificada", v2: "Zonificada", v3: "Económica", v4: "Híbrida", v5: "PLANA", s: true },
                  { c: "Horario", v1: "ELECCIÓN", v2: "Día", v3: "ELECCIÓN", v4: "Antes 20hs", v5: "Día" },
                  { c: "Corte", v1: "15:00 hs", v2: "13:00 hs", v3: "15:00 hs", v4: "15:00 hs", v5: "15:00 hs" },
                  { c: "Previo", v1: "2 Horas", v2: "2 Horas", v3: "2 Horas", v4: "Inmediato", v5: "Picking" },
                  { c: "Pago Destino", v1: "SÍ", v2: "SÍ", v3: "SÍ", v4: "NO (App)", v5: "SÍ" },
                  { c: "2da Visita", v1: "100%", v2: "100%", v3: "50%", v4: "Según Nivel", v5: "GRATIS", s: true },
                ].map((row, i) => (
                  <tr key={i} className="odd:bg-white even:bg-slate-50/50">
                    <td className="px-3 py-3 text-left font-black text-slate-900 border-r border-slate-50">{row.c}</td>
                    <td className="px-2 py-3 border-r border-slate-50">{row.v1}</td>
                    <td className="px-2 py-3 border-r border-slate-50">{row.v2}</td>
                    <td className="px-2 py-3 border-r border-slate-50 text-accent-foreground bg-accent/5">{row.v3}</td>
                    <td className="px-2 py-3 border-r border-slate-50">{row.v4}</td>
                    <td className={`px-2 py-3 ${row.s ? 'text-primary font-black bg-primary/5' : ''}`}>{row.v5}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>

        <PageFooter pageNumber="8 / 11" />
      </div>
    </div>
  );
}
