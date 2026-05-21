import React from 'react';
import Image from 'next/image';
import { PageHeader } from '../paginas_version_nueva/shared/PageHeader';
import { PageFooter } from '../paginas_version_nueva/shared/PageFooter';
import { Wrench, Lock, CloudRain, Puzzle } from 'lucide-react';

export default function Pagina4() {
  return (
    <div className="a4-container bg-[#0a0a0a] flex flex-col h-full max-h-full overflow-hidden relative">
      <PageHeader badgeText="RESPALDO CORPORATIVO" />

      <main className="flex-1 flex w-full">
        {/* Columna Izquierda (Visual - 40%) */}
        <div className="w-[40%] relative h-full flex flex-col justify-center py-12 pl-0 pr-4">
          <div className="relative w-full h-[90%] rounded-r-2xl overflow-hidden shadow-[0_0_30px_rgba(251,193,7,0.15)] border-y border-r border-[#fbc107]/20">
            <Image
              src="https://picsum.photos/500/800?random=4"
              alt="Respaldo Corporativo"
              fill
              className="object-cover rounded-r-2xl"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
          </div>
        </div>

        {/* Columna Derecha (Texto - 60%) */}
        <div className="w-[60%] flex flex-col justify-center p-12 pl-8 space-y-6">
          <h1 className="font-['Orbitron'] font-headline text-4xl leading-snug font-bold text-white">
            Confianza respaldada por <span className="text-[#fbc107]">7 años</span> de gestión ininterrumpida.
          </h1>

          <h2 className="text-[#ffffff] font-body font-bold text-xl border-l-4 border-[#2563eb] pl-4">
            Elegir un partner logístico no es una decisión operativa, es una decisión de reputación.
          </h2>

          <p className="text-gray-300 text-sm leading-relaxed font-body">
            Nuestra trayectoria en Mar del Plata no se mide solo en kilómetros recorridos, sino en la solidez de nuestros procesos. En el mundo corporativo las eventualidades existen; la diferencia radica en cómo se resuelven.
          </p>

          <div className="flex flex-col gap-3 mt-2">
            {/* Elemento 1 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex gap-4 items-center backdrop-blur-md">
              <div className="p-2 bg-[#2563eb]/10 rounded-lg shrink-0">
                <Wrench className="w-5 h-5 text-[#2563eb]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Protocolos de Resolución Proactiva:</h3>
                <p className="text-gray-400 text-xs mt-1">No aplicamos soluciones genéricas. Resolución inmediata y personalizada.</p>
              </div>
            </div>

            {/* Elemento 2 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex gap-4 items-center backdrop-blur-md">
              <div className="p-2 bg-[#fbc107]/10 rounded-lg shrink-0">
                <Lock className="w-5 h-5 text-[#fbc107]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Seguridad y Transparencia:</h3>
                <p className="text-gray-400 text-xs mt-1">Equipo entrenado bajo estrictas normas de cuidado y conducta.</p>
              </div>
            </div>

            {/* Elemento 3 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex gap-4 items-center backdrop-blur-md">
              <div className="p-2 bg-[#2563eb]/10 rounded-lg shrink-0">
                <CloudRain className="w-5 h-5 text-[#2563eb]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Operación Predecible:</h3>
                <p className="text-gray-400 text-xs mt-1">Sistema preparado para mantener calidad aún en clima adverso.</p>
              </div>
            </div>

            {/* Elemento 4 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex gap-4 items-center backdrop-blur-md">
              <div className="p-2 bg-[#fbc107]/10 rounded-lg shrink-0">
                <Puzzle className="w-5 h-5 text-[#fbc107]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Adaptabilidad:</h3>
                <p className="text-gray-400 text-xs mt-1">Integramos nuestra logística a sus procesos, liberando recursos internos.</p>
              </div>
            </div>
          </div>

          <div className="mt-4 border-l-4 border-[#fbc107] bg-[#141414] p-4 rounded-r-xl">
            <p className="text-gray-200 text-sm font-medium italic">
              "Más que un servicio, ofrecemos la tranquilidad de saber que su marca está en manos profesionales."
            </p>
          </div>
        </div>
      </main>

      <PageFooter pageNumber="04" />
    </div>
  );
}
