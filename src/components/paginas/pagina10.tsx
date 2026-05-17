import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { BarChart3, FileSignature, Package } from 'lucide-react';

export default function Pagina10() {
  return (
    <div className="a4-container mx-auto bg-[#0a0a0a] relative overflow-hidden flex flex-col shadow-2xl text-white font-body" suppressHydrationWarning>
      {/* Dark Tech Background / Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#2563eb]/20 via-[#0a0a0a] to-[#0a0a0a] z-10" />

      <div className="relative z-20 flex flex-col h-full justify-between max-h-full p-10">
        <PageHeader badgeText="INTEGRACIÓN B2B" />

        <main className="flex-1 flex flex-col justify-center mt-2 mb-4 overflow-hidden">
          
          {/* Header Section */}
          <div className="mb-8 shrink-0 border-b border-white/10 pb-6">
            <h1 className="text-5xl font-black font-headline tracking-tight uppercase text-[#2563eb] mb-2">
              TRANSICIÓN SIN FRICCIÓN
            </h1>
            <h2 className="text-2xl font-bold font-headline text-[#fbc107] uppercase tracking-wide">
              Tu operativa funcionando en 48hs
            </h2>
          </div>

          {/* Stepper / Timeline Section */}
          <div className="flex-1 flex flex-col justify-center ml-4 relative">
            
            {/* Timeline Line connecting the steps */}
            <div className="absolute left-7 top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#2563eb] via-[#2563eb]/50 to-transparent z-0"></div>

            <div className="flex flex-col gap-8 relative z-10">
              {/* Step 1 */}
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-[#0a0a0a] border-2 border-[#2563eb] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                  <BarChart3 className="w-6 h-6 text-[#fbc107]" />
                </div>
                <div className="bg-black/70 border border-white/10 rounded-xl p-6 shadow-xl backdrop-blur-md flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-black font-headline text-[#2563eb] uppercase tracking-widest bg-[#2563eb]/10 px-2 py-1 rounded">Paso 1</span>
                    <h3 className="font-headline font-bold text-xl text-white uppercase tracking-wider">
                      Análisis de Volumen
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    Evaluamos tu carga actual de trabajo, picos de demanda y zonas de mayor entrega para diseñar una estructura logística adaptada a tu negocio.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-[#0a0a0a] border-2 border-[#2563eb] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                  <FileSignature className="w-6 h-6 text-[#fbc107]" />
                </div>
                <div className="bg-black/70 border border-white/10 rounded-xl p-6 shadow-xl backdrop-blur-md flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-black font-headline text-[#2563eb] uppercase tracking-widest bg-[#2563eb]/10 px-2 py-1 rounded">Paso 2</span>
                    <h3 className="font-headline font-bold text-xl text-white uppercase tracking-wider">
                      Alta de Cuenta Corriente
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    Establecemos las condiciones, firma de SLA (Service Level Agreement) y asignamos una tarifa plana y competitiva. Formalizamos el acuerdo rápidamente.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-[#0a0a0a] border-2 border-[#2563eb] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                  <Package className="w-6 h-6 text-[#fbc107]" />
                </div>
                <div className="bg-black/70 border border-white/10 rounded-xl p-6 shadow-xl backdrop-blur-md flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-black font-headline text-[#2563eb] uppercase tracking-widest bg-[#2563eb]/10 px-2 py-1 rounded">Paso 3</span>
                    <h3 className="font-headline font-bold text-xl text-white uppercase tracking-wider">
                      Primera Colecta
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    Comenzamos a despachar. Un cadete se presenta en su domicilio en los horarios coordinados para retirar los primeros paquetes de forma eficiente.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </main>

        <PageFooter pageNumber="10 / 11" />
      </div>
    </div>
  );
}
