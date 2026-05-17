import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';

export default function Pagina9() {
  const faqs = [
    {
      q: "¿CÓMO SE SOLICITAN LOS ENVÍOS Y CÓMO ES EL SEGUIMIENTO?",
      a: "La gestión es ágil y directa: los envíos se solicitan <strong class='text-white font-bold'>vía WhatsApp</strong>. Si bien por el momento no contamos con seguimiento en tiempo real (GPS), si usted lo requiere, le avisaremos inmediatamente apenas el paquete haya sido entregado en destino."
    },
    {
      q: "¿CUÁLES SON LAS MODALIDADES DE PAGO Y FACTURACIÓN?",
      a: "Nos adaptamos a su ritmo. No tenemos días fijos inflexibles; la frecuencia de liquidación (diaria, semanal, quincenal o mensual) se organiza de forma <strong class='text-white font-bold'>personalizada con cada cliente</strong>. Para todos nuestros servicios emitimos <strong class='text-white font-bold'>Factura C</strong>."
    },
    {
      q: "¿QUÉ TAMAÑO MÁXIMO DE PAQUETES TRANSPORTAN?",
      a: "Nuestra flota está compuesta <strong class='text-white font-bold'>exclusivamente por motos</strong>. Llevamos paquetes que puedan ser trasladados de forma segura en este medio. Se aplica recargo por \"Bulto\" si supera los 5kg o 40x40x30cm, pero el límite máximo definitivo lo marca la capacidad física y segura de la moto."
    },
    {
      q: "¿CÓMO SE ACTUALIZAN LOS NIVELES DE DESCUENTO EN E-COMMERCE?",
      a: "Su nivel dependerá de su corte de facturación. Si elige liquidación semanal, el nivel varía semana a semana. <strong class='text-white font-bold'>Recomendamos el cierre Mensual</strong> para promediar los días bajos con sus picos de ventas y garantizarse una mejor escala tarifaria en toda la ciudad."
    },
    {
      q: "¿QUÉ OCURRE CON LOS RETIROS (COLECTAS) DE BAJO VOLUMEN?",
      a: "En planes E-Commerce, el retiro es diario y gratuito superando la cuota de <strong class='text-white font-bold'>10 paquetes</strong> listos. Si el volumen es menor, el costo de pase de la moto es de <strong class='text-white font-bold'>$4.000</strong>. <br/><span class='italic text-gray-400 mt-1 block'>Alternativa: Puede despachar en nuestra modalidad \"Drop-Off\" en Friuli 1972 y evitar este costo, sumando además un descuento.</span>"
    }
  ];

  return (
    <div className="a4-container mx-auto bg-primary relative overflow-hidden flex flex-col shadow-2xl text-white font-body" suppressHydrationWarning>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/95 to-secondary/60 z-10" />

      <div className="relative z-20 flex flex-col h-full justify-between max-h-full p-10">
        <PageHeader badgeText="SOPORTE Y CONDICIONES" />

        <main className="flex-1 flex flex-col mt-2 mb-4 overflow-hidden">
          
          <div className="flex items-baseline gap-3 border-b border-white/10 pb-4 mb-6 shrink-0">
            <h1 className="text-4xl font-black font-headline tracking-tight uppercase">Preguntas Frecuentes</h1>
            <span className="text-xl font-bold text-accent font-headline">(1/2)</span>
          </div>

          <div className="flex-1 flex flex-col gap-4 overflow-y-auto pr-2">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/5 border-l-4 border-accent rounded-r-xl p-5 shadow-lg shrink-0 transition-colors hover:bg-white/10">
                <h2 className="text-accent font-black font-headline text-[13px] uppercase mb-2 tracking-widest">
                  {faq.q}
                </h2>
                <p 
                  className="text-[13px] leading-relaxed text-gray-300"
                  dangerouslySetInnerHTML={{ __html: faq.a }}
                />
              </div>
            ))}
          </div>

        </main>

        <PageFooter pageNumber="9 / 11" />
      </div>
    </div>
  );
}