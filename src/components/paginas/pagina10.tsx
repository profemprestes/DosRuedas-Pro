import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { ShieldAlert } from 'lucide-react';

export default function Pagina10() {
  return (
    <div className="a4-container flex flex-col justify-between w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] overflow-hidden box-border bg-white relative shadow-2xl font-body" suppressHydrationWarning>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/95 z-10" />

      <div className="relative z-20 flex flex-col h-full justify-between max-h-full p-4">
        {/* Header Section */}
        <PageHeader badgeText="SOPORTE Y CONDICIONES" />

        <main className="flex-1 flex flex-col justify-center mt-2 mb-2 gap-2 max-h-full">
            {/* Título de Sección */}
            <div className="mb-3 relative">
                <div className="flex items-baseline gap-3 border-b border-white/20 pb-2">
                    <h1 className="text-4xl font-black font-headline tracking-tight">PREGUNTAS FRECUENTES</h1>
                    <span className="text-2xl font-light text-gray-500">(2/2)</span>
                </div>
            </div>

            {/* Preguntas Listado */}
            <div className="flex-grow flex flex-col justify-between gap-4">

                {/* Bloque 1 */}
                <div className="bg-black/20 rounded-xl border-l-[4px] border-accent p-5 shadow-xl">
                    <h3 className="text-accent font-bold text-[10px] mb-2 tracking-wide uppercase">
                        ¿QUÉ PASA SI EL COMPRADOR BRINDÓ UNA DIRECCIÓN INCORRECTA?
                    </h3>
                    <p className="text-gray-200 text-[13.5px] leading-relaxed">
                        Si el cadete ya llegó al domicilio y la dirección era errónea o incompleta, <span className="font-bold text-white">el viaje se abona igual.</span> Si en ese momento se aporta la dirección correcta, se cobra un adicional proporcional por el tramo extra hasta el nuevo destino.
                    </p>
                </div>

                {/* Bloque 2 */}
                <div className="bg-black/20 rounded-xl border-l-[4px] border-accent p-5 shadow-xl">
                    <h3 className="text-accent font-bold text-[10px] mb-2 tracking-wide uppercase">
                        ¿QUÉ SUCEDE SI EL CLIENTE FINAL RECHAZA LA COMPRA EN LA PUERTA?
                    </h3>
                    <p className="text-gray-200 text-[13.5px] leading-relaxed">
                        En caso de que el comprador se arrepienta al recibirlo o rechace el producto en la puerta, el costo del envío de ida se abona normalmente, pero el viaje de retorno (devolución del paquete a su local) se realiza totalmente <span className="font-bold text-white uppercase">sin cargo</span>.
                    </p>
                </div>

                {/* Bloque 3 */}
                <div className="bg-black/20 rounded-xl border-l-[4px] border-accent p-5 shadow-xl">
                    <h3 className="text-accent font-bold text-[10px] mb-2 tracking-wide uppercase">
                        ¿CÓMO SE GESTIONA EL FRACASO DE UNA ENTREGA POR "AUSENTE"?
                    </h3>
                    <div className="text-gray-200 text-[13.5px] leading-relaxed">
                        <p className="mb-1">El protocolo de 2da Visita depende de su contrato:</p>
                        <ul className="list-none space-y-1 pl-1">
                            <li><span className="font-bold text-white">• Express/LowCost:</span> Se cobra como un viaje nuevo.</li>
                            <li><span className="font-bold text-white">• Cuentas Corrientes:</span> Se cobra el 50% de la tarifa original.</li>
                            <li><span className="font-bold text-white">• Flex ML:</span> N1 (50%), N2 (Z1 Sin Cargo, resto 50%), N3 (Sin Cargo).</li>
                            <li><span className="font-bold text-emerald-400">• E-Commerce:</span> La 2da visita es 100% Bonificada (Sin Cargo).</li>
                        </ul>
                    </div>
                </div>

                {/* Bloque 4 */}
                <div className="bg-black/20 rounded-xl border-l-[4px] border-accent p-5 shadow-xl">
                    <h3 className="text-accent font-bold text-[10px] mb-2 tracking-wide uppercase">
                        ¿CUÁNDO SE APLICA RECARGO POR "LLUVIA" Y "DEMORAS"?
                    </h3>
                    <p className="text-gray-200 text-[13.5px] leading-relaxed">
                        El recargo por clima (50% en planes normales, 30% en Flex) se activa si llueve o la calle está mojada en cualquier punto del servicio. Por otro lado, brindamos 10 minutos de tolerancia de espera sin cargo en domicilio; pasado ese tiempo se adicionan $2.200 cada 10 min.
                    </p>
                </div>

                {/* Bloque 5 */}
                <div className="bg-orange-900/10 rounded-xl border-l-[4px] border-orange-500 p-5 shadow-xl relative">
                    <h3 className="text-orange-400 font-bold text-[10px] mb-2 tracking-wide uppercase flex items-center gap-2">
                        <ShieldAlert className="w-5 h-5 text-orange-400" />
                        ¿QUÉ SUCEDE ANTE EVENTUALIDADES O SINIESTROS EN CALLE?
                    </h3>
                    <p className="text-gray-200 text-[13.5px] leading-relaxed">
                        Cuidamos el esfuerzo de su negocio. Ante cualquier eventualidad, extravío o accidente durante el traslado, no aplicamos reglas genéricas de rechazo. Analizamos cada caso de forma <span className="font-bold text-white">directa y personalizada</span> con el comercio para evaluar la situación y definir los pasos a seguir.
                    </p>
                </div>

            </div>
        </main>

        {/* Footer Section */}
        <PageFooter pageNumber="10 / 11" />
      </div>
    </div>
  );
}
