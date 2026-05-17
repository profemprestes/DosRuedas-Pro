import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { AlertTriangle } from 'lucide-react';

export default function Pagina10() {
  return (
    <div className="a4-container mx-auto bg-primary relative overflow-hidden flex flex-col shadow-2xl text-white font-body" suppressHydrationWarning>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/95 to-secondary/60 z-10" />

      <div className="relative z-20 flex flex-col h-full justify-between max-h-full p-10">
        <PageHeader badgeText="SOPORTE Y CONDICIONES" />

        <main className="flex-1 flex flex-col mt-2 mb-2 overflow-hidden">
          
          {/* Título de Sección */}
          <div className="flex items-baseline gap-3 border-b border-white/10 pb-3 mb-4 shrink-0">
            <h1 className="text-4xl font-black font-headline tracking-tight uppercase">Preguntas Frecuentes</h1>
            <span className="text-xl font-bold text-accent font-headline">(2/2)</span>
          </div>

          {/* Listado Compactado Elástico */}
          <div className="flex-1 flex flex-col gap-3 overflow-y-auto pr-1">
            
            <div className="bg-white/5 border-l-4 border-accent rounded-r-xl p-4 shadow-md shrink-0">
              <h3 className="text-accent font-black font-headline text-[12px] mb-1.5 tracking-wider uppercase">
                ¿QUÉ PASA SI EL COMPRADOR BRINDÓ UNA DIRECCIÓN INCORRECTA?
              </h3>
              <p className="text-gray-300 text-[12.5px] leading-relaxed">
                Si el cadete ya llegó al domicilio y la dirección era errónea o incompleta, <strong className="text-white">el viaje se abona igual.</strong> Si en ese momento se aporta la dirección correcta, se cobra un adicional proporcional por el tramo extra hasta el nuevo destino.
              </p>
            </div>

            <div className="bg-white/5 border-l-4 border-accent rounded-r-xl p-4 shadow-md shrink-0">
              <h3 className="text-accent font-black font-headline text-[12px] mb-1.5 tracking-wider uppercase">
                ¿QUÉ SUCEDE SI EL CLIENTE FINAL RECHAZA LA COMPRA EN LA PUERTA?
              </h3>
              <p className="text-gray-300 text-[12.5px] leading-relaxed">
                En caso de que el comprador se arrepienta al recibirlo o rechace el producto en la puerta, el costo del envío de ida se abona normalmente, pero el viaje de retorno (devolución del paquete a su local) se realiza totalmente <strong className="text-white uppercase tracking-wider">sin cargo</strong>.
              </p>
            </div>

            <div className="bg-white/5 border-l-4 border-accent rounded-r-xl p-4 shadow-md shrink-0">
              <h3 className="text-accent font-black font-headline text-[12px] mb-1.5 tracking-wider uppercase">
                ¿CÓMO SE GESTIONA EL FRACASO DE UNA ENTREGA POR "AUSENTE"?
              </h3>
              <div className="text-gray-300 text-[12.5px] leading-relaxed grid grid-cols-2 gap-1 bg-black/20 p-2 rounded-lg border border-white/5">
                <div><strong className="text-accent">• Express/LowCost:</strong> Nuevo viaje.</div>
                <div><strong className="text-accent">• Cuentas Corrientes:</strong> 50% tarifa.</div>
                <div className="col-span-2 border-t border-white/5 pt-1 mt-0.5"><strong className="text-accent">• Flex ML:</strong> N1 (50%), N2 (Z1 S/C, resto 50%), N3 (S/C).</div>
                <div className="col-span-2 text-emerald-400 font-bold">• E-Commerce: 2da visita 100% Bonificada (Sin Cargo).</div>
              </div>
            </div>

            <div className="bg-white/5 border-l-4 border-accent rounded-r-xl p-4 shadow-md shrink-0">
              <h3 className="text-accent font-black font-headline text-[12px] mb-1.5 tracking-wider uppercase">
                ¿CUÁNDO SE APLICA RECARGO POR "LLUVIA" Y "DEMORAS"?
              </h3>
              <p className="text-gray-300 text-[12.5px] leading-relaxed">
                El recargo por clima (50% en planes normales, 30% en Flex) se activa si llueve o la calle está mojada en cualquier punto del servicio. Por otro lado, brindamos 10 minutos de tolerancia de espera sin cargo en domicilio; pasado ese tiempo se adicionan $2.200 cada 10 min.
              </p>
            </div>

            <div className="bg-red-950/20 border-l-4 border-red-500 rounded-r-xl p-4 shadow-md shrink-0">
              <h3 className="text-red-400 font-black font-headline text-[12px] mb-1.5 tracking-wider uppercase flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                ¿QUÉ SUCEDE ANTE EVENTUALIDADES O SINIESTROS EN CALLE?
              </h3>
              <p className="text-gray-300 text-[12.5px] leading-relaxed">
                Cuidamos el esfuerzo de su negocio. Ante cualquier eventualidad, extravío o accidente durante el traslado, no aplicamos reglas genéricas de rechazo. Analizamos cada caso de forma <strong className="text-white">directa y personalizada</strong> con el comercio para evaluar la situación y definir los pasos a seguir.
              </p>
            </div>

          </div>
        </main>

        <PageFooter pageNumber="10 / 11" />
      </div>
    </div>
  );
}