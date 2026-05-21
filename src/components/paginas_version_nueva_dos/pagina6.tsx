import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { PageHeader } from '../paginas_version_nueva/shared/PageHeader';
import { PageFooter } from '../paginas_version_nueva/shared/PageFooter';

export default function Pagina6() {
  return (
    <div className="a4-container bg-[#0a0a0a] flex flex-col h-full max-h-full overflow-hidden relative">
      <PageHeader badgeText="CASO DE ÉXITO & TARIFAS" />

      <main className="flex-1 flex w-full">
        {/* Columna Izquierda (Visual - 40%) */}
        <div className="w-[40%] relative h-full flex flex-col justify-center py-12 pl-12 pr-4">
          <div className="relative w-full h-[85%] rounded-2xl overflow-hidden shadow-2xl shadow-[#2563eb]/20 border border-white/10">
            <Image
              src="https://picsum.photos/600/800?random=6"
              alt="Caso de Éxito Logística"
              fill
              className="object-cover rounded-2xl opacity-80 mix-blend-luminosity"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
            {/* Overlay para estilo SaaS/Dark */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent"></div>
          </div>
        </div>

        {/* Columna Derecha (Texto B2B - 60%) */}
        <div className="w-[60%] flex flex-col justify-center p-12 pl-8 space-y-6">
          <h1 className="font-headline text-4xl font-bold text-white leading-tight">
            <span className="text-[#fbc107]">Resultados</span> que validan la alianza: Nuestro modelo de trabajo.
          </h1>

          <h2 className="text-[#ffffff] font-body font-bold text-lg">
            Prueba de concepto: Cómo transformamos la logística de empresas como la suya.
          </h2>

          {/* Bloque de Caso de Éxito */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.1)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#2563eb]"></div>
            <h3 className="font-headline font-bold text-[#2563eb] text-sm tracking-wider mb-3">MÉTRICAS EN ACCIÓN</h3>
            <div className="space-y-2 text-sm font-body">
              <p><strong className="text-white">Escenario:</strong> <span className="text-gray-300">Una empresa de venta online de electrodomésticos en Mar del Plata enfrentaba un 15% de reclamos mensuales por entregas fallidas.</span></p>
              <p><strong className="text-white">Intervención:</strong> <span className="text-gray-300">Implementamos nuestro protocolo de ENVÍOS DOSRUEDAS integrado, con reportes de trazabilidad diaria y atención prioritaria.</span></p>
              <p><strong className="text-[#fbc107]">Resultado:</strong> <span className="text-white font-medium">En 90 días, los reclamos descendieron al 2%, el NPS aumentó un 25% y el equipo interno recuperó 10 horas semanales de gestión.</span></p>
            </div>
          </div>

          <div className="pt-2">
            <p className="text-gray-300 text-sm font-body mb-4">
              En Envíos DosRuedas no creemos en los "costos ocultos". Nuestro esquema está diseñado para que usted tenga previsibilidad financiera:
            </p>

            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="text-[#fbc107] w-5 h-5 shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm font-body">
                  <strong className="text-white">Tarifa Dinámica y Transparente:</strong> Precios competitivos ajustados a Mar del Plata, con recargos claros (ej. clima extremo), sin sorpresas.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="text-[#fbc107] w-5 h-5 shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm font-body">
                  <strong className="text-white">Modalidad Cuenta Corriente:</strong> Facturación mensual consolidada, prioridad de agenda y bonificaciones especiales en re-entregas.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="text-[#fbc107] w-5 h-5 shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm font-body">
                  <strong className="text-white">Adaptabilidad:</strong> Ajustamos nuestra estructura de costos según sus necesidades de volumen, producto y frecuencia.
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-6 bg-[#fbc107]/10 border border-[#fbc107]/20 p-4 rounded-lg">
            <p className="text-white text-sm font-body italic text-center">
              "La calidad no es un gasto, es la inversión más rentable para cuidar a su cliente. Permítanos presentarle una propuesta personalizada."
            </p>
          </div>
        </div>
      </main>

      <PageFooter pageNumber="06" />
    </div>
  );
}
