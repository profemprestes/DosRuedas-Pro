import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { HelpCircle } from 'lucide-react';

export default function Pagina9() {
  return (
    <div className="flex flex-col justify-between w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] overflow-hidden box-border bg-primary relative text-white font-body" suppressHydrationWarning>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/95 z-10" />

      <div className="relative z-20 flex flex-col h-full p-16 justify-between box-border">
        <PageHeader badgeText="SOPORTE Y CONDICIONES" />

        <main className="flex-1 flex flex-col justify-center overflow-hidden gap-4">
          <div className="relative mb-6 shrink-0">
            <div className="flex items-center gap-4 border-b border-white/20 pb-4">
              <HelpCircle className="w-10 h-10 text-accent" />
              <h1 className="text-4xl font-black font-headline tracking-tight uppercase">PREGUNTAS FRECUENTES <span className="text-gray-500 font-light text-2xl ml-4">(1/2)</span></h1>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-between gap-3 overflow-hidden">
            {[
              {
                q: "¿CÓMO SE SOLICITAN LOS ENVÍOS Y CÓMO ES EL SEGUIMIENTO?",
                a: "La gestión es ágil y directa: los envíos se solicitan vía WhatsApp. Si bien por el momento no contamos con seguimiento en tiempo real (GPS), si usted lo requiere, le avisaremos inmediatamente apenas el paquete haya sido entregado en destino."
              },
              {
                q: "¿CUÁLES SON LAS MODALIDADES DE PAGO Y FACTURACIÓN?",
                a: "Nos adaptamos a su ritmo. No tenemos días fijos inflexibles; la frecuencia de liquidación (diaria, semanal, quincenal o mensual) se organiza de forma personalizada con cada cliente. Para todos nuestros servicios emitimos Factura C."
              },
              {
                q: "¿QUÉ TAMAÑO MÁXIMO DE PAQUETES TRANSPORTAN?",
                a: "Nuestra flota está compuesta exclusivamente por motos. Llevamos paquetes que puedan ser trasladados de forma segura en este medio. Se aplica recargo por \"Bulto\" si supera los 5kg o 40x40x30cm, pero el límite lo marca la seguridad."
              },
              {
                q: "¿CÓMO SE ACTUALIZAN LOS NIVELES DE DESCUENTO EN E-COMMERCE?",
                a: "Su nivel dependerá de su corte de facturación. Recomendamos el cierre Mensual para promediar los días bajos con sus picos de ventas y garantizarse una mejor escala tarifaria en toda la ciudad."
              },
              {
                q: "¿QUÉ OCURRE CON LOS RETIROS (COLECTAS) DE BAJO VOLUMEN?",
                a: "En planes E-Commerce, el retiro es diario y gratuito superando la cuota de 10 paquetes listos. Si el volumen es menor, el costo de pase de la moto es de $4.000. Alternativa: Puede despachar en modalidad \"Drop-Off\" y evitar este costo."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-secondary/30 border-l-[4px] border-accent rounded-r-2xl p-6 shadow-xl flex-1 flex flex-col justify-center">
                <h2 className="text-accent font-black text-sm uppercase mb-2 tracking-wide font-headline">{faq.q}</h2>
                <p className="text-[13.5px] leading-relaxed text-gray-200 font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </main>

        <PageFooter pageNumber="9 / 11" />
      </div>
    </div>
  );
}
