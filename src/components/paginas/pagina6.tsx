import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { MapPin, Percent, Store, CheckCircle2 } from 'lucide-react';

export default function Pagina6() {
  return (
    <div className="a4-container mx-auto bg-[#0a0a0a] relative overflow-hidden flex flex-col shadow-2xl text-white font-body" suppressHydrationWarning>
      {/* Background: 3PL, Drop-Off, Cuentas */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle,#ffffff10_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#fbc107]/10 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <div className="relative z-20 flex flex-col h-full justify-between max-h-full p-10">
        <PageHeader badgeText="MAXIMIZACIÓN DE MARGEN" />

        <main className="flex-1 flex flex-col mt-4 mb-4 gap-8 justify-center overflow-hidden">
          
          {/* Main Title Section */}
          <div className="text-center shrink-0">
            <h1 className="text-5xl font-black font-headline text-[#ffffff] leading-tight uppercase mb-2">
              MODALIDAD DROP-OFF
            </h1>
            <h2 className="text-3xl font-bold font-headline text-[#fbc107] bg-[#fbc107]/10 inline-block px-6 py-2 rounded-lg border border-[#fbc107]/30">
              -20% de Ahorro Directo
            </h2>
          </div>

          {/* Split View Structure */}
          <div className="flex-1 flex gap-8 min-h-0 mt-4">

            {/* Left Side: Explanation */}
            <div className="w-1/2 flex flex-col justify-center gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md h-full flex flex-col justify-center relative overflow-hidden">
                <div className="absolute -left-10 -top-10 p-4 opacity-5">
                  <MapPin className="w-48 h-48 text-[#ffffff]" />
                </div>

                <h3 className="text-2xl font-bold text-[#2563eb] font-headline uppercase mb-4 flex items-center gap-3 relative z-10">
                  <Store className="w-6 h-6" /> Despacho en Nuestro Hub
                </h3>

                <p className="text-gray-300 text-[15px] leading-relaxed mb-6 relative z-10">
                  Optimiza tus costos logísticos eliminando la recolección. Al traer tus paquetes directamente a nuestro centro operativo, reduces los tiempos muertos y maximizas tu margen de ganancia por envío.
                </p>

                <ul className="space-y-4 relative z-10">
                  {[
                    "Procesamiento inmediato",
                    "Horarios de recepción extendidos",
                    "Ahorro directo en la tarifa final"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-[#2563eb] shrink-0" />
                      <span className="text-gray-200 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Side: Corporate Discount Ticket */}
            <div className="w-1/2 flex flex-col justify-center">
              <div className="bg-gradient-to-br from-[#2563eb]/20 to-black border-2 border-[#2563eb]/50 rounded-3xl p-8 backdrop-blur-lg relative overflow-hidden flex flex-col items-center justify-center text-center shadow-[0_0_40px_rgba(37,99,235,0.15)] h-full">

                {/* Perforated edge effect for ticket look */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-[#0a0a0a] rounded-full border-r-2 border-[#2563eb]/50 z-20"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-8 bg-[#0a0a0a] rounded-full border-l-2 border-[#2563eb]/50 z-20"></div>
                <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-[#2563eb]/30 z-10"></div>

                <div className="relative z-20 mb-8">
                  <Percent className="w-16 h-16 text-[#fbc107] mx-auto mb-4" />
                  <p className="text-gray-300 text-sm font-bold tracking-widest uppercase mb-2">
                    Beneficio Corporativo
                  </p>
                  <h4 className="text-6xl font-black text-[#ffffff] font-headline tracking-tighter">
                    20<span className="text-[#fbc107]">%</span> OFF
                  </h4>
                </div>

                <div className="relative z-20 mt-8 pt-6">
                  <p className="text-[#2563eb] font-bold text-lg uppercase tracking-wide">
                    Sobre la tarifa plana
                  </p>
                  <p className="text-gray-400 text-xs mt-2">
                    *Válido exclusivamente para entregas en Hub operativo.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </main>

        <PageFooter pageNumber="6 / 11" />
      </div>
    </div>
  );
}
