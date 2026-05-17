import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { Bike, Navigation, Wrench, Zap } from 'lucide-react';

export default function Pagina8() {
  return (
    <div className="a4-container mx-auto bg-[#0a0a0a] relative overflow-hidden flex flex-col shadow-2xl text-white font-body" suppressHydrationWarning>
      {/* Background Image Placeholder with Dark Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1558981420-c532902e58b4?q=80&w=2070&auto=format&fit=crop")' }}
      />
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm z-10" />

      <div className="relative z-20 flex flex-col h-full justify-between max-h-full p-10">
        <PageHeader badgeText="CAPACIDAD OPERATIVA" />

        <main className="flex-1 flex flex-col mt-4 mb-4 gap-8 justify-center overflow-hidden">
          
          {/* Main Title Section */}
          <div className="text-center shrink-0 mb-2">
            <h1 className="text-5xl font-black font-headline text-[#ffffff] leading-tight uppercase mb-2">
              INFRAESTRUCTURA REAL
            </h1>
            <h2 className="text-3xl font-bold font-headline text-[#fbc107] flex items-center justify-center gap-3">
              <Bike className="w-8 h-8" /> Flota Exclusiva Bajaj Discover 125
            </h2>
          </div>

          <p className="text-gray-300 text-base leading-relaxed max-w-4xl mx-auto text-center shrink-0">
            Nuestra operación se respalda en infraestructura propia. No dependemos de flotas tercerizadas inestables.
            Garantizamos el SLA de entrega mediante vehículos estandarizados y procesos técnicos rigurosos.
          </p>

          {/* Technical Specifications Layout */}
          <div className="flex flex-col gap-6 flex-1 min-h-0 justify-center">
            
            {/* Box 1: Agilidad Urbana */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden flex items-center gap-6 group">
              <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#2563eb]/10 to-transparent z-0"></div>
              <div className="bg-[#0a0a0a] p-4 rounded-xl border border-[#2563eb]/30 relative z-10 shrink-0 group-hover:border-[#2563eb] transition-colors">
                <Zap className="w-10 h-10 text-[#2563eb]" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-[#ffffff] font-headline uppercase mb-2">
                  Agilidad Urbana Superior
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Vehículos optimizados para el tránsito urbano denso. Permiten rutas más rápidas, menor tiempo de inactividad en tráfico y acceso a zonas de difícil estacionamiento para furgonetas, asegurando entregas Same-Day sin demoras.
                </p>
              </div>
            </div>

            {/* Box 2: Mantenimiento Preventivo */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden flex items-center gap-6 group">
              <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#fbc107]/10 to-transparent z-0"></div>
              <div className="bg-[#0a0a0a] p-4 rounded-xl border border-[#fbc107]/30 relative z-10 shrink-0 group-hover:border-[#fbc107] transition-colors">
                <Wrench className="w-10 h-10 text-[#fbc107]" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-[#ffffff] font-headline uppercase mb-2">
                  Mantenimiento Preventivo Propio
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Taller mecánico In-House que garantiza una tasa de operatividad de la flota superior al 98%. Evitamos las disrupciones del servicio mediante revisiones periódicas programadas y respuesta técnica inmediata.
                </p>
              </div>
            </div>

            {/* Box 3: Tracking Activo */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden flex items-center gap-6 group">
              <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#2563eb]/10 to-transparent z-0"></div>
              <div className="bg-[#0a0a0a] p-4 rounded-xl border border-[#2563eb]/30 relative z-10 shrink-0 group-hover:border-[#2563eb] transition-colors">
                <Navigation className="w-10 h-10 text-[#2563eb]" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-[#ffffff] font-headline uppercase mb-2">
                  Sistema de Tracking Activo
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Monitoreo logístico en tiempo real. Trazabilidad absoluta de cada unidad operativa para auditoría de rutas, seguridad de la carga y estimación precisa de tiempos de arribo (ETA) para clientes corporativos.
                </p>
              </div>
            </div>

          </div>

        </main>

        <PageFooter pageNumber="8 / 11" />
      </div>
    </div>
  );
}
