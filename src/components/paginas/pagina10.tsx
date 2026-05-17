import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { ShieldAlert, HelpCircle } from 'lucide-react';

export default function Pagina10() {
  return (
    <div className="flex flex-col justify-between w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] overflow-hidden box-border bg-primary relative text-white font-body" suppressHydrationWarning>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/95 z-10" />

      <div className="relative z-20 flex flex-col h-full p-16 justify-between box-border">
        <PageHeader badgeText="SOPORTE Y CONDICIONES" />

        <main className="flex-1 flex flex-col justify-center overflow-hidden gap-4">
          <div className="mb-6 shrink-0">
            <div className="flex items-center gap-4 border-b border-white/20 pb-4">
              <HelpCircle className="w-10 h-10 text-accent" />
              <h1 className="text-4xl font-black font-headline tracking-tight uppercase">PREGUNTAS FRECUENTES <span className="text-gray-500 font-light text-2xl ml-4">(2/2)</span></h1>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-between gap-3 overflow-hidden">
            {[
              {
                q: "¿QUÉ PASA SI EL COMPRADOR BRINDÓ UNA DIRECCIÓN INCORRECTA?",
                a: "Si el cadete ya llegó al domicilio y la dirección era errónea, el viaje se abona igual. Si en ese momento se aporta la dirección correcta, se cobra un adicional proporcional por el tramo extra hasta el nuevo destino."
              },
              {
                q: "¿QUÉ SUCEDE SI EL CLIENTE FINAL RECHAZA LA COMPRA EN LA PUERTA?",
                a: "En caso de que el comprador se arrepienta en la puerta, el costo del envío de ida se abona normalmente, pero el viaje de retorno (devolución al local) se realiza totalmente SIN CARGO."
              },
              {
                q: "¿CÓMO SE GESTIONA EL FRACASO DE UNA ENTREGA POR \"AUSENTE\"?",
                a: "Depende del plan: Express/LowCost (Nuevo viaje), Cuentas Corrientes (50% Tarifa), Flex ML (Según nivel), E-Commerce (100% Bonificada)."
              },
              {
                q: "¿CUÁNDO SE APLICA RECARGO POR \"LLUVIA\" Y \"DEMORAS\"?",
                a: "El recargo por clima (50% normal, 30% Flex) se activa si llueve o la calle está mojada. Brindamos 10 min de tolerancia de espera; pasado ese tiempo se adicionan $2.200 cada 10 min."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-secondary/30 border-l-[4px] border-accent rounded-r-2xl p-6 shadow-xl flex-1 flex flex-col justify-center">
                <h3 className="text-accent font-black text-sm uppercase mb-2 tracking-wide font-headline">{faq.q}</h3>
                <p className="text-[13.5px] leading-relaxed text-gray-200 font-medium">{faq.a}</p>
              </div>
            ))}

            <div className="bg-orange-900/10 rounded-2xl border-l-[4px] border-orange-500 p-6 shadow-xl shrink-0 flex flex-col justify-center border-y border-r border-orange-500/10">
              <h3 className="text-orange-400 font-black text-sm mb-2 tracking-wide uppercase flex items-center gap-2 font-headline">
                <ShieldAlert className="w-5 h-5 text-orange-400" />
                ¿QUÉ SUCEDE ANTE EVENTUALIDADES O SINIESTROS?
              </h3>
              <p className="text-gray-200 text-[13.5px] leading-relaxed font-medium">
                Cuidamos el esfuerzo de su negocio. Ante cualquier eventualidad o accidente, analizamos cada caso de forma <span className="font-bold text-white underline decoration-orange-500/50">directa y personalizada</span> con el comercio para definir los pasos a seguir.
              </p>
            </div>
          </div>
        </main>

        <PageFooter pageNumber="10 / 11" />
      </div>
    </div>
  );
}
