import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { Warehouse, PackageCheck, Truck } from 'lucide-react';

export default function Pagina5() {
  return (
    <div className="a4-container mx-auto bg-[#0a0a0a] relative overflow-hidden flex flex-col shadow-2xl text-white font-body" suppressHydrationWarning>
      {/* Background: 3PL, Drop-Off, Cuentas */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle,#ffffff10_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#fbc107]/10 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <div className="relative z-20 flex flex-col h-full justify-between max-h-full p-10">
        <PageHeader badgeText="EL ECOSISTEMA 3PL" />

        <main className="flex-1 flex flex-col mt-4 mb-4 gap-8 justify-center overflow-hidden">
          
          {/* Main Title Section */}
          <div className="text-center shrink-0">
            <h1 className="text-5xl font-black font-headline text-[#2563eb] leading-tight uppercase mb-2">
              FULFILLMENT & E-COMMERCE
            </h1>
            <h2 className="text-3xl font-bold font-headline text-[#fbc107]">
              Tarifa Plana. Riesgo Cero.
            </h2>
          </div>

          <p className="text-gray-300 text-base leading-relaxed max-w-4xl mx-auto text-center shrink-0">
            Impulsá tu tienda online con una solución logística integral. Dejá tu stock operativo con nosotros;
            nos encargamos de que cada venta sea preparada y despachada el mismo día, para que te enfoques en escalar tu negocio.
          </p>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-3 gap-6 shrink-0 mt-4">

            {/* Tarjeta 1: Almacenamiento */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Warehouse className="w-24 h-24 text-[#ffffff]" />
              </div>
              <div className="bg-black/40 p-4 rounded-xl border border-white/5 mb-4 relative z-10">
                <Warehouse className="w-8 h-8 text-[#2563eb]" />
              </div>
              <h3 className="text-xl font-bold text-[#ffffff] font-headline uppercase mb-3 relative z-10">
                Almacenamiento
              </h3>
              <p className="text-sm text-gray-400 font-medium relative z-10">
                Seguridad 24/7. Gestión de inventario precisa y resguardo total de tu mercadería.
              </p>
            </div>

            {/* Tarjeta 2: Pick & Pack */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <PackageCheck className="w-24 h-24 text-[#ffffff]" />
              </div>
              <div className="bg-black/40 p-4 rounded-xl border border-white/5 mb-4 relative z-10">
                <PackageCheck className="w-8 h-8 text-[#fbc107]" />
              </div>
              <h3 className="text-xl font-bold text-[#ffffff] font-headline uppercase mb-3 relative z-10">
                Pick & Pack
              </h3>
              <p className="text-sm text-gray-400 font-medium relative z-10">
                Preparación sin errores. Embalaje profesional y rápido para una experiencia de unboxing perfecta.
              </p>
            </div>

            {/* Tarjeta 3: Distribución */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Truck className="w-24 h-24 text-[#ffffff]" />
              </div>
              <div className="bg-black/40 p-4 rounded-xl border border-white/5 mb-4 relative z-10">
                <Truck className="w-8 h-8 text-[#2563eb]" />
              </div>
              <h3 className="text-xl font-bold text-[#ffffff] font-headline uppercase mb-3 relative z-10">
                Distribución
              </h3>
              <p className="text-sm text-gray-400 font-medium relative z-10">
                SLA Same-Day garantizado. Tus clientes reciben sus compras en el día de forma segura.
              </p>
            </div>

          </div>

        </main>

        <PageFooter pageNumber="5 / 11" />
      </div>
    </div>
  );
}
