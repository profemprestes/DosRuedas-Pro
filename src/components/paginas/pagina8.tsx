import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { BadgeDollarSign } from 'lucide-react';

export default function Pagina8() {
  return (
    <div className="a4-container mx-auto bg-primary relative overflow-hidden flex flex-col shadow-2xl text-white font-body" suppressHydrationWarning>
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-secondary/80 z-10" />
      </div>

      <div className="relative z-20 flex flex-col h-full justify-between max-h-full p-10">
        <PageHeader badgeText="RESUMEN EJECUTIVO" />

        <main className="flex-1 flex flex-col mt-2 mb-4 gap-6 overflow-hidden">
          
          {/* Main Hero Box - Cobranzas en Destino */}
          <section className="shrink-0 border border-emerald-500/40 rounded-3xl p-6 relative overflow-hidden bg-emerald-900/10 shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="flex items-start gap-4 mb-4 relative z-10">
              <div className="bg-emerald-500/20 p-3 rounded-2xl border border-emerald-500/30 text-emerald-400 mt-1 shrink-0">
                <BadgeDollarSign className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-black text-emerald-400 leading-none mb-2 italic font-headline uppercase skew-x-[-5deg]">
                  Gestión de Cobranzas en Destino
                </h1>
                <p className="text-emerald-400/80 font-bold text-xs tracking-widest uppercase">
                  (Servicio de Contrareembolso sin costo)
                </p>
              </div>
            </div>

            <div className="space-y-3 text-gray-300 text-[13px] leading-relaxed relative z-10">
              <p>
                Para potenciar sus canales de venta, nos encargamos de recaudar el valor de sus productos al momento de la entrega en la puerta de su cliente. Garantizamos una transacción profesional y segura.
              </p>
              <p>
                La rendición de los fondos se realiza con la agilidad que su caja requiere (en el día, a las 24hs o semanalmente) mediante transferencia bancaria o efectivo, siempre acompañada de un arqueo detallado.
              </p>
              <p className="italic text-[11px] text-gray-500 mt-2 font-bold">
                * Nota de seguridad: El valor físico transportado corre por cuenta y orden del cliente solicitante.
              </p>
            </div>
          </section>

          {/* Section Title */}
          <div className="text-center shrink-0">
            <h2 className="text-accent font-black font-headline text-lg tracking-[0.2em] uppercase border-b border-accent/20 inline-block pb-2">
              Tabla Comparativa de Modelos
            </h2>
          </div>

          {/* Comparison Table Container */}
          <section className="shrink-0 flex-grow flex flex-col justify-center min-h-0">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl w-full">
              <table className="w-full text-left border-collapse text-[11px]">
                <thead>
                  <tr className="bg-black/40 border-b border-white/10 text-accent uppercase font-black tracking-wider text-center font-headline">
                    <th className="p-4 text-left w-[20%]">Característica</th>
                    <th className="p-4 w-[16%]">Express</th>
                    <th className="p-4 w-[16%]">Lowcost</th>
                    <th className="p-4 w-[16%]">Cta. Corriente</th>
                    <th className="p-4 w-[16%]">Flex (ML)</th>
                    <th className="p-4 w-[16%]">E-Commerce 3PL</th>
                  </tr>
                </thead>
                <tbody className="text-center font-medium divide-y divide-white/5">
                  
                  {/* Row 1 */}
                  <tr className="transition-colors hover:bg-white/5">
                    <td className="p-3 text-left font-bold text-white">Estructura Tarifa</td>
                    <td className="p-3 text-gray-300">Zonificada</td>
                    <td className="p-3 text-gray-300">Zonificada</td>
                    <td className="p-3 text-accent font-bold">Tarifa LowCost</td>
                    <td className="p-3 text-gray-300">Por Nivel (Zon. / Plana)</td>
                    <td className="p-3 text-emerald-400 font-bold">Tarifa Plana</td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="transition-colors hover:bg-white/5 bg-white/[0.02]">
                    <td className="p-3 text-left font-bold text-white">Rango Horario</td>
                    <td className="p-3 text-gray-300">Sí (Elección)</td>
                    <td className="p-3 text-gray-300">No (Transcurso día)</td>
                    <td className="p-3 text-accent font-bold">Sí (Exclusivo)</td>
                    <td className="p-3 text-gray-300">No (Antes 20hs)</td>
                    <td className="p-3 text-emerald-400">No (Transcurso día)</td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="transition-colors hover:bg-white/5">
                    <td className="p-3 text-left font-bold text-white">Corte de Pedidos</td>
                    <td className="p-3 text-gray-300">Hasta 15hs</td>
                    <td className="p-3 text-gray-300">Hasta 13hs</td>
                    <td className="p-3 text-accent font-bold">Hasta 15hs</td>
                    <td className="p-3 text-gray-300">Hasta 15hs</td>
                    <td className="p-3 text-emerald-400">Hasta 15hs</td>
                  </tr>

                  {/* Row 4 */}
                  <tr className="transition-colors hover:bg-white/5 bg-white/[0.02]">
                    <td className="p-3 text-left font-bold text-white">Anticipación Mín.</td>
                    <td className="p-3 text-gray-300">2 Horas</td>
                    <td className="p-3 text-gray-300">2 Horas</td>
                    <td className="p-3 text-accent font-bold">2 Horas</td>
                    <td className="p-3 text-slate-500 italic">No aplica</td>
                    <td className="p-3 text-emerald-400">Fulfillment propio</td>
                  </tr>

                  {/* Row 5 */}
                  <tr className="transition-colors hover:bg-white/5">
                    <td className="p-3 text-left font-bold text-white">Pago en Destino</td>
                    <td className="p-3 text-gray-300">Sí (Sin Costo)</td>
                    <td className="p-3 text-gray-300">Sí (Sin Costo)</td>
                    <td className="p-3 text-accent font-bold">Sí (Sin Costo)</td>
                    <td className="p-3 text-gray-300">N/A (App)</td>
                    <td className="p-3 text-emerald-400">Sí (Sin Costo)</td>
                  </tr>

                  {/* Row 6 */}
                  <tr className="transition-colors hover:bg-white/5 bg-black/20 border-t border-accent/20">
                    <td className="p-3 text-left font-black text-white">2da Visita</td>
                    <td className="p-3 text-gray-400">100% (Nuevo Envío)</td>
                    <td className="p-3 text-gray-400">100% (Nuevo Envío)</td>
                    <td className="p-3 text-accent font-bold">50% del valor</td>
                    <td className="p-3 text-gray-300">Según Nivel</td>
                    <td className="p-3 text-emerald-400 font-black">100% Bonificada</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </section>

        </main>

        <PageFooter pageNumber="8 / 11" />
      </div>
    </div>
  );
}