import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { ShieldCheck } from 'lucide-react';

export default function Pagina8() {
  return (
    <div className="mx-auto w-[210mm] h-[297mm] bg-primary relative overflow-hidden flex flex-col shadow-2xl text-white font-montserrat" suppressHydrationWarning>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/95 z-10" />

      <div className="relative z-20 flex flex-col h-full p-16">
        {/* Header Section */}
        <PageHeader badgeText="RESUMEN EJECUTIVO" />

        <main className="flex-grow flex flex-col">
            {/* Main Hero Box */}
            <div className="border-2 border-emerald-500 rounded-3xl p-8 mb-6 relative overflow-hidden flex-shrink-0">
                {/* Background Decoration */}
                <div className="absolute top-0 left-0 w-full h-full bg-emerald-500 opacity-5 pointer-events-none"></div>

                <div className="flex items-start gap-4 mb-4">
                    {/* Icon */}
                    <div className="text-emerald-500 mt-2">
                        <ShieldCheck className="w-10 h-10" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-black text-emerald-500 leading-none mb-2 italic uppercase">
                            Gestión de Cobranzas en Destino
                        </h1>
                        <p className="text-emerald-500 font-bold text-sm tracking-wide">
                            (SERVICIO DE CONTRAREEMBOLSO SIN COSTO)
                        </p>
                    </div>
                </div>

                <div className="space-y-4 text-slate-300 text-sm leading-relaxed max-w-3xl">
                    <p>
                        Para potenciar sus canales de venta, nos encargamos de recaudar el valor de sus productos al momento de la entrega en la puerta de su cliente. Garantizamos una transacción profesional y segura.
                    </p>
                    <p>
                        La rendición de los fondos se realiza con la agilidad que su caja requiere (en el día, a las 24hs o semanalmente) mediante transferencia bancaria o efectivo, siempre acompañada de un arqueo detallado.
                    </p>
                    <p className="italic text-xs text-slate-500 pt-2">
                        * Nota de seguridad: El valor físico transportado corre por cuenta y orden del cliente solicitante.
                    </p>
                </div>
            </div>

            {/* Section Title */}
            <div className="text-center mb-4 flex-shrink-0">
                <h2 className="text-accent font-black text-lg tracking-[0.2em] uppercase">
                    Tabla Comparativa de Modelos
                </h2>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto bg-black/20 rounded-xl border border-white/10 flex-grow flex flex-col justify-center">
                <table className="w-full text-[10px] sm:text-xs">
                    <thead>
                        <tr className="text-accent uppercase font-bold text-center border-b border-white/10">
                            <th className="p-4 text-left w-1/6">Característica</th>
                            <th className="p-4 w-1/6">Express</th>
                            <th className="p-4 w-1/6">Lowcost</th>
                            <th className="p-4 w-1/6">Cta. Corriente</th>
                            <th className="p-4 w-1/6">Flex (ML)</th>
                            <th className="p-4 w-1/6">E-Commerce 3PL</th>
                        </tr>
                    </thead>
                    <tbody className="text-center font-medium">
                        {/* Row 1 */}
                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td className="p-4 text-left font-bold text-white text-sm">Estructura Tarifa</td>
                            <td className="p-4">Zonificada</td>
                            <td className="p-4">Zonificada</td>
                            <td className="p-4 text-accent">Tarifa LowCost</td>
                            <td className="p-4">Por Nivel (Zon. / Plana)</td>
                            <td className="p-4 text-emerald-500 font-bold">Tarifa Plana</td>
                        </tr>
                        {/* Row 2 */}
                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td className="p-4 text-left font-bold text-white text-sm">Rango Horario</td>
                            <td className="p-4">Sí (Elección)</td>
                            <td className="p-4">No (Transcurso día)</td>
                            <td className="p-4 text-accent">Sí (Beneficio Exclusivo)</td>
                            <td className="p-4">No (Antes 20hs)</td>
                            <td className="p-4 text-emerald-500">No (Transcurso día)</td>
                        </tr>
                        {/* Row 3 */}
                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td className="p-4 text-left font-bold text-white text-sm">Corte de Pedidos</td>
                            <td className="p-4">Hasta 15hs</td>
                            <td className="p-4">Hasta 13hs</td>
                            <td className="p-4 text-accent">Hasta 15hs</td>
                            <td className="p-4">Hasta 15hs</td>
                            <td className="p-4 text-emerald-500">Hasta 15hs</td>
                        </tr>
                        {/* Row 4 */}
                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td className="p-4 text-left font-bold text-white text-sm">Anticipación Mín.</td>
                            <td className="p-4">2 Horas</td>
                            <td className="p-4">2 Horas</td>
                            <td className="p-4 text-accent">2 Horas</td>
                            <td className="p-4 text-slate-400 italic">No aplica</td>
                            <td className="p-4 text-emerald-500">Fulfillment propio</td>
                        </tr>
                        {/* Row 5 */}
                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td className="p-4 text-left font-bold text-white text-sm">Pago en Destino</td>
                            <td className="p-4">Sí (Sin Costo)</td>
                            <td className="p-4">Sí (Sin Costo)</td>
                            <td className="p-4 text-accent">Sí (Sin Costo)</td>
                            <td className="p-4">N/A (Pago en App)</td>
                            <td className="p-4 text-emerald-500">Sí (Sin Costo)</td>
                        </tr>
                        {/* Row 6 */}
                        <tr className="hover:bg-white/5 transition-colors">
                            <td className="p-4 text-left font-bold text-white text-sm">2da Visita</td>
                            <td className="p-4">100% (Nuevo Envío)</td>
                            <td className="p-4">100% (Nuevo Envío)</td>
                            <td className="p-4 text-accent">50% del valor</td>
                            <td className="p-4">Según Nivel (50% a S/C)</td>
                            <td className="p-4 text-emerald-500 font-bold text-sm">100% Bonificada</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>

        {/* Footer Section */}
        <PageFooter pageNumber="8 / 11" />
      </div>
    </div>
  );
}
