import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';

export default function Pagina9() {
  return (
    <div className="mx-auto w-[210mm] h-[297mm] bg-primary relative overflow-hidden flex flex-col shadow-2xl text-white font-montserrat" suppressHydrationWarning>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/95 z-10" />

      <div className="relative z-20 flex flex-col h-full p-16">
        {/* Header Section */}
        <PageHeader badgeText="SOPORTE Y CONDICIONES" />

        <main className="flex-grow flex flex-col">
            {/* TITLE SECTION */}
            <div className="relative mb-6">
                <div className="flex items-baseline gap-3 border-b border-white/20 pb-2">
                    <h1 className="text-4xl font-black tracking-tight">PREGUNTAS FRECUENTES</h1>
                    <span className="text-2xl font-light text-gray-500">(1/2)</span>
                </div>
            </div>

            {/* FAQ CONTENT */}
            <div className="flex-grow flex flex-col justify-between gap-4">

                {/* Question 1 */}
                <div className="bg-black/20 border-l-[4px] border-accent rounded-r-lg p-5">
                    <h2 className="text-accent font-bold text-sm uppercase mb-2 tracking-wide">
                        ¿CÓMO SE SOLICITAN LOS ENVÍOS Y CÓMO ES EL SEGUIMIENTO?
                    </h2>
                    <p className="text-sm leading-relaxed text-gray-200">
                        La gestión es ágil y directa: los envíos se solicitan <span className="font-bold text-white">vía WhatsApp</span>. Si bien por el momento no contamos con seguimiento en tiempo real (GPS), si usted lo requiere, le avisaremos inmediatamente apenas el paquete haya sido entregado en destino.
                    </p>
                </div>

                {/* Question 2 */}
                <div className="bg-black/20 border-l-[4px] border-accent rounded-r-lg p-5">
                    <h2 className="text-accent font-bold text-sm uppercase mb-2 tracking-wide">
                        ¿CUÁLES SON LAS MODALIDADES DE PAGO Y FACTURACIÓN?
                    </h2>
                    <p className="text-sm leading-relaxed text-gray-200">
                        Nos adaptamos a su ritmo. No tenemos días fijos inflexibles; la frecuencia de liquidación (diaria, semanal, quincenal o mensual) se organiza de forma <span className="font-bold text-white">personalizada con cada cliente</span>. Para todos nuestros servicios emitimos <span className="font-bold text-white">Factura C</span>.
                    </p>
                </div>

                {/* Question 3 */}
                <div className="bg-black/20 border-l-[4px] border-accent rounded-r-lg p-5">
                    <h2 className="text-accent font-bold text-sm uppercase mb-2 tracking-wide">
                        ¿QUÉ TAMAÑO MÁXIMO DE PAQUETES TRANSPORTAN?
                    </h2>
                    <p className="text-sm leading-relaxed text-gray-200">
                        Nuestra flota está compuesta <span className="font-bold text-white">exclusivamente por motos</span>. Llevamos paquetes que puedan ser trasladados de forma segura en este medio. Se aplica recargo por "Bulto" si supera los 5kg o 40x40x30cm, pero el límite máximo definitivo lo marca la capacidad física y segura de la moto.
                    </p>
                </div>

                {/* Question 4 */}
                <div className="bg-black/20 border-l-[4px] border-accent rounded-r-lg p-5">
                    <h2 className="text-accent font-bold text-sm uppercase mb-2 tracking-wide">
                        ¿CÓMO SE ACTUALIZAN LOS NIVELES DE DESCUENTO EN E-COMMERCE?
                    </h2>
                    <p className="text-sm leading-relaxed text-gray-200">
                        Su nivel dependerá de su corte de facturación. Si elige liquidación semanal, el nivel varía semana a semana. <span className="font-bold text-white underline decoration-accent">Recomendamos el cierre Mensual</span> para promediar los días bajos con sus picos de ventas y garantizarse una mejor escala tarifaria en toda la ciudad.
                    </p>
                </div>

                {/* Question 5 */}
                <div className="bg-black/20 border-l-[4px] border-accent rounded-r-lg p-5">
                    <h2 className="text-accent font-bold text-sm uppercase mb-2 tracking-wide">
                        ¿QUÉ OCURRE CON LOS RETIROS (COLECTAS) DE BAJO VOLUMEN?
                    </h2>
                    <p className="text-sm leading-relaxed text-gray-200">
                        En planes E-Commerce, el retiro es diario y gratuito superando la cuota de <span className="font-bold text-white">10 paquetes</span> listos. Si el volumen es menor, el costo de pase de la moto es de <span className="font-bold text-white">$4.000</span>. <span className="italic text-gray-400 block mt-1">Alternativa: Puede despachar en nuestra modalidad "Drop-Off" en Friuli 1972 y evitar este costo, sumando además un descuento.</span>
                    </p>
                </div>

            </div>
        </main>

        {/* Footer Section */}
        <PageFooter pageNumber="9 / 11" />
      </div>
    </div>
  );
}
