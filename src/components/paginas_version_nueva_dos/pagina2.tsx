import React from 'react';
import Image from 'next/image';
import { PageHeader } from '../paginas_version_nueva/shared/PageHeader';
import { PageFooter } from '../paginas_version_nueva/shared/PageFooter';
import { AlertCircle, Clock, MessageCircle } from 'lucide-react';

export default function Pagina2() {
  return (
    <div className="a4-container bg-[#0a0a0a] flex flex-col h-full max-h-full overflow-hidden relative">
      <PageHeader badgeText="EL DOLOR DE LA ÚLTIMA MILLA" />

      <main className="flex-1 flex w-full">
        {/* Columna Izquierda (Texto B2B - 60%) */}
        <div className="w-[60%] flex flex-col justify-center p-10 pr-8 space-y-4">
          <h1 className="font-['Orbitron'] font-headline text-[2rem] leading-snug font-bold text-white">
            ¿Su logística está impulsando su crecimiento o{' '}
            <span className="text-[#fbc107]">limitando su reputación</span>?
          </h1>

          <h2 className="text-[#ffffff] font-body font-bold text-lg">
            En el E-commerce y la venta corporativa, la entrega no es solo el final del proceso; es la cara de su marca ante el cliente.
          </h2>

          <p className="text-gray-300 text-sm leading-relaxed font-body">
            Sabemos que ha invertido tiempo, esfuerzo y recursos en crear un producto excelente y en cerrar la venta. Sin embargo, en la logística de última milla, el éxito de toda su operación depende de una fracción de segundo: el momento en que el paquete llega a manos de su cliente.
          </p>

          <div className="grid grid-cols-1 gap-3 mt-2">
            {/* Tarjeta 1 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-4 items-start">
              <div className="p-2 bg-red-500/10 rounded-lg shrink-0">
                <AlertCircle className="w-6 h-6 text-red-500/80" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">La imagen se deteriora en la calle</h3>
                <p className="text-gray-400 text-sm">Su cliente juzga su empresa por el trato y apariencia de quien entrega. Un servicio descuidado es una venta que no se repite.</p>
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-4 items-start">
              <div className="p-2 bg-[#2563eb]/10 rounded-lg shrink-0">
                <MessageCircle className="w-6 h-6 text-[#2563eb]" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Incertidumbre operativa</h3>
                <p className="text-gray-400 text-sm">La falta de trazabilidad genera reclamos, pérdida de tiempo en atención al cliente y fuga de compradores.</p>
              </div>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-4 items-start">
              <div className="p-2 bg-[#fbc107]/10 rounded-lg shrink-0">
                <Clock className="w-6 h-6 text-[#fbc107]" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Imprevisibilidad</h3>
                <p className="text-gray-400 text-sm">Las demoras y falta de protocolos afectan su flujo de caja y la confianza de sus clientes.</p>
              </div>
            </div>
          </div>

          <div className="mt-2 border-l-4 border-[#fbc107] bg-[#141414] p-4 rounded-r-xl">
            <p className="text-gray-200 text-sm font-medium italic">
              "El problema no es solo entregar un paquete; es garantizar que su marca llegue intacta, a tiempo y con profesionalismo. Si su logística actual le genera más preguntas que certezas, es momento de cambiar la estrategia."
            </p>
          </div>
        </div>

        {/* Columna Derecha (Visual - 40%) */}
        <div className="w-[40%] relative h-full flex flex-col justify-center py-12 pr-12 pl-4">
          <div className="relative w-full h-[85%] rounded-xl shadow-[0_0_30px_rgba(37,99,235,0.15)]">
            <Image
              src="https://picsum.photos/500/800?random=2"
              alt="Visual Concept"
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
          </div>
        </div>
      </main>

      <PageFooter pageNumber="02" />
    </div>
  );
}
