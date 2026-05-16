import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { ShieldCheck } from 'lucide-react';

export default function Pagina8() {
  return (
    <div className="a4-container mx-auto bg-primary relative overflow-hidden flex flex-col shadow-2xl text-white font-montserrat" suppressHydrationWarning>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/95 z-10" />

      <div className="relative z-20 flex flex-col h-full justify-between max-h-full p-10">
        {/* Header Section */}
        <PageHeader badgeText="RESUMEN EJECUTIVO" />

        <main className="flex-1 flex flex-col mt-4 mb-4">
            {/* Main Hero Box */}
            <div className="border-2 border-emerald-500 rounded-3xl p-6 mb-4 relative overflow-hidden flex-shrink-0">
                {/* Background Decoration */}
                <div className="absolute top-0 left-0 w-full h-full bg-emerald-500 opacity-5 pointer-events-none"></div>

                <div className="flex items-start gap-4 mb-3">
                    {/* Icon */}
                    <div className="text-emerald-500 mt-1">
                        <ShieldCheck className="w-8 h-8" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-black text-emerald-500 leading-none mb-1 italic uppercase">
                            Gestión de Cobranzas en Destino
                        </h1>
                        <p className="text-emerald-500 font-bold text-xs tracking-wide">
                            (SERVICIO DE CONTRAREEMBOLSO SIN COSTO)
                        </p>
                    </div>
                </div>

                <div className="space-y-3 text-slate-300 text-xs leading-relaxed max-w-3xl">
                    <p>
                        Para potenciar sus canales de venta, nos encargamos de recaudar el valor de sus productos al momento de la entrega en la puerta de su cliente. Garantizamos una transacción profesional y segura.
                    </p>
                    <p>
                        La rendición de los fondos se realiza con la agilidad que su caja requiere (en el día, a las 24hs o semanalmente) mediante transferencia bancaria o efectivo, siempre acompañada de un arqueo detallado.
                    </p>
                    <p className="italic text-[10px] text-slate-500 pt-1">
                        * Nota de seguridad: El valor físico transportado corre por cuenta y orden del cliente solicitante.
                    </p>
                </div>
            </div>

            {/* Section Title */}
            <div className="text-center mb-3 flex-shrink-0">
                <h2 className="text-accent font-black text-base tracking-[0.2em] uppercase">
                    Tabla Comparativa de Modelos
                </h2>
            </div>

            {/* Comparison Table */}
            <div className="overflow-hidden bg-white rounded-xl shadow-lg border border-slate-200 flex-grow flex flex-col justify-center">
                <table className="w-full text-xs text-slate-700">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr className="text-xs font-semibold tracking-wider text-slate-500 uppercase text-center">
                            <th className="px-4 py-3 text-left w-1/6">Característica</th>
                            <th className="px-4 py-3 w-1/6">Express</th>
                            <th className="px-4 py-3 w-1/6">Lowcost</th>
                            <th className="px-4 py-3 w-1/6">Cta. Corriente</th>
                            <th className="px-4 py-3 w-1/6">Flex (ML)</th>
                            <th className="px-4 py-3 w-1/6">E-Commerce 3PL</th>
                        </tr>
                    </thead>
                    <tbody className="text-center font-medium divide-y divide-slate-100">
                        {/* Row 1 */}
                        <tr className="odd:bg-white even:bg-slate-50/50 hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3 text-left font-bold text-slate-800">Estructura Tarifa</td>
                            <td className="px-4 py-3">Zonificada</td>
                            <td className="px-4 py-3">Zonificada</td>
                            <td className="px-4 py-3"><span className="bg-amber-100 text-amber-800 rounded-full px-2 py-1 text-[10px] font-bold">Tarifa LowCost</span></td>
                            <td className="px-4 py-3">Por Nivel</td>
                            <td className="px-4 py-3"><span className="bg-emerald-100 text-emerald-800 rounded-full px-2 py-1 text-[10px] font-bold">Tarifa Plana</span></td>
                        </tr>
                        {/* Row 2 */}
                        <tr className="odd:bg-white even:bg-slate-50/50 hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3 text-left font-bold text-slate-800">Rango Horario</td>
                            <td className="px-4 py-3"><span className="bg-blue-100 text-blue-800 rounded-full px-2 py-1 text-[10px] font-bold">Sí (Elección)</span></td>
                            <td className="px-4 py-3 text-slate-500">No (Día)</td>
                            <td className="px-4 py-3"><span className="bg-amber-100 text-amber-800 rounded-full px-2 py-1 text-[10px] font-bold">Sí (Beneficio)</span></td>
                            <td className="px-4 py-3 text-slate-500">No (Antes 20hs)</td>
                            <td className="px-4 py-3 text-slate-500">No (Día)</td>
                        </tr>
                        {/* Row 3 */}
                        <tr className="odd:bg-white even:bg-slate-50/50 hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3 text-left font-bold text-slate-800">Corte de Pedidos</td>
                            <td className="px-4 py-3 font-semibold">15:00 hs</td>
                            <td className="px-4 py-3 font-semibold text-slate-500">13:00 hs</td>
                            <td className="px-4 py-3 font-semibold">15:00 hs</td>
                            <td className="px-4 py-3 font-semibold">15:00 hs</td>
                            <td className="px-4 py-3 font-semibold text-emerald-700">15:00 hs</td>
                        </tr>
                        {/* Row 4 */}
                        <tr className="odd:bg-white even:bg-slate-50/50 hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3 text-left font-bold text-slate-800">Anticipación Mín.</td>
                            <td className="px-4 py-3">2 Horas</td>
                            <td className="px-4 py-3">2 Horas</td>
                            <td className="px-4 py-3">2 Horas</td>
                            <td className="px-4 py-3 text-slate-400 italic text-[10px]">No aplica</td>
                            <td className="px-4 py-3 text-emerald-600 font-semibold text-[10px]">Fulfillment</td>
                        </tr>
                        {/* Row 5 */}
                        <tr className="odd:bg-white even:bg-slate-50/50 hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3 text-left font-bold text-slate-800">Pago en Destino</td>
                            <td className="px-4 py-3 text-emerald-600 font-bold">Sí (Sin Costo)</td>
                            <td className="px-4 py-3 text-emerald-600 font-bold">Sí (Sin Costo)</td>
                            <td className="px-4 py-3 text-emerald-600 font-bold">Sí (Sin Costo)</td>
                            <td className="px-4 py-3 text-slate-400 italic text-[10px]">N/A</td>
                            <td className="px-4 py-3 text-emerald-600 font-bold">Sí (Sin Costo)</td>
                        </tr>
                        {/* Row 6 */}
                        <tr className="odd:bg-white even:bg-slate-50/50 hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3 text-left font-bold text-slate-800">2da Visita</td>
                            <td className="px-4 py-3 text-slate-500">100%</td>
                            <td className="px-4 py-3 text-slate-500">100%</td>
                            <td className="px-4 py-3"><span className="bg-amber-100 text-amber-800 rounded-full px-2 py-1 text-[10px] font-bold">50%</span></td>
                            <td className="px-4 py-3"><span className="bg-slate-200 text-slate-700 rounded-full px-2 py-1 text-[10px] font-bold">Según Nivel</span></td>
                            <td className="px-4 py-3"><span className="bg-emerald-100 text-emerald-800 rounded-full px-2 py-1 text-[10px] font-bold">Bonificada</span></td>
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
