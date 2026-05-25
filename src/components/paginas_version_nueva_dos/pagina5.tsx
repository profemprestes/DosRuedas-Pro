import React from 'react';
import Image from 'next/image';
import { Layers, Calendar, Eye, Sliders } from 'lucide-react';
import { PageHeader } from '../paginas_version_nueva/shared/PageHeader';
import { PageFooter } from '../paginas_version_nueva/shared/PageFooter';

export default function Pagina5() {
  return (
    <div className="a4-container bg-[#0a0a0a] flex flex-col h-full max-h-full overflow-hidden relative">
      <PageHeader badgeText="PROTOCOLO OPERATIVO" />

      <main className="flex-1 flex w-full">
        {/* Columna Izquierda (Texto B2B - 60%) */}
        <div className="w-[60%] flex flex-col justify-center p-12 pr-8 space-y-6">
          <h1 className="font-headline text-4xl font-bold text-white leading-tight">
            Protocolo Operativo: La sencillez de un <span className="text-[#fbc107]">proceso experto</span>.
          </h1>

          <h2 className="text-[#ffffff] font-body font-bold text-xl border-l-4 border-[#2563eb] pl-4">
            Logística de alta complejidad resuelta con procesos simples y transparentes.
          </h2>

          <p className="text-gray-300 text-base leading-relaxed font-body">
            Sabemos que su tiempo es valioso. Por eso, hemos diseñado un esquema de trabajo que permite integrar Envíos DosRuedas a su operación actual sin fricciones ni curva de aprendizaje. Su equipo gestiona sus ventas; nosotros gestionamos el resto.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6">
            {/* Card 1 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-lg flex items-start space-x-3">
              <div className="bg-[#2563eb]/20 p-2 rounded-md">
                <Layers className="text-[#2563eb] w-5 h-5" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-white text-sm">Gestión Centralizada:</h3>
                <p className="text-gray-400 text-xs mt-1 leading-snug">Un canal de comunicación dedicado para su empresa. Coordina directo con nuestro equipo de gestión.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-lg flex items-start space-x-3">
              <div className="bg-[#2563eb]/20 p-2 rounded-md">
                <Calendar className="text-[#2563eb] w-5 h-5" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-white text-sm">Retiro Ágil y Coordinado:</h3>
                <p className="text-gray-400 text-xs mt-1 leading-snug">Nos adaptamos a sus horarios de despacho para que el flujo nunca se detenga.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-lg flex items-start space-x-3">
              <div className="bg-[#2563eb]/20 p-2 rounded-md">
                <Eye className="text-[#2563eb] w-5 h-5" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-white text-sm">Trazabilidad Total:</h3>
                <p className="text-gray-400 text-xs mt-1 leading-snug">Sepa dónde está su paquete en todo momento. Reportes de estado que dan tranquilidad absoluta.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-lg flex items-start space-x-3">
              <div className="bg-[#2563eb]/20 p-2 rounded-md">
                <Sliders className="text-[#2563eb] w-5 h-5" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-white text-sm">Escalabilidad a Medida:</h3>
                <p className="text-gray-400 text-xs mt-1 leading-snug">Protocolos que se activan para garantizar la misma excelencia sin importar los picos de volumen.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-l-4 border-[#2563eb] bg-[#2563eb]/5 p-4 rounded-r-lg">
            <p className="text-white/90 text-sm font-body italic font-medium">
              "Operar con nosotros es transparente: usted nos delega la logística, nosotros le devolvemos eficiencia y tiempo para que se dedique a crecer."
            </p>
          </div>
        </div>

        {/* Columna Derecha (Visual - 40%) */}
        <div className="w-[40%] relative h-full flex flex-col justify-center py-12 pr-12 pl-4">
          <div className="relative w-full h-[85%] rounded-2xl overflow-hidden shadow-2xl shadow-[#2563eb]/20 border border-white/10">
            <Image
              src="https://picsum.photos/600/800?random=5"
              alt="Protocolo Operativo Logística"
              fill
              className="object-cover rounded-2xl opacity-80 mix-blend-luminosity"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
            {/* Overlay para estilo SaaS/Dark */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent"></div>
          </div>
        </div>
      </main>

      <PageFooter pageNumber="05" />
    </div>
  );
}
