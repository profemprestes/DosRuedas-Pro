import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { Store, ArrowRight, Wallet } from 'lucide-react';

export default function Pagina6() {
  return (
    <div className="a4-container flex flex-col h-full justify-between overflow-hidden relative bg-[#0a0a0a]">
      {/* Background: 3PL, Drop-Off, Cuentas */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle,#ffffff10_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#fbc107]/10 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <PageHeader badgeText="MAXIMIZACIÓN DE MARGEN" />

      <main className="flex-1 flex px-12 py-12 z-10 gap-12 items-center">

        {/* Left Side: Explicación */}
        <div className="w-1/2 flex flex-col gap-6">
          <div>
            <h1 className="text-5xl font-black text-white font-headline tracking-tight mb-2 leading-tight">
              MODALIDAD DROP-OFF
            </h1>
            <h2 className="text-xl text-[#fbc107] font-body">
              -20% de Ahorro Directo
            </h2>
          </div>

          <p className="text-[#9ca3af] font-body text-base leading-relaxed">
            Optimiza los márgenes de tu operación logística eliminando el costo de colecta en tu domicilio.
            Acerca tus paquetes directamente a nuestro Hub Operativo y obtén un descuento inmediato en toda nuestra tabla tarifaria.
          </p>

          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-lg p-4">
               <Store className="w-6 h-6 text-[#2563eb]" />
               <div>
                 <h4 className="text-white font-bold font-headline">Hub Mar del Plata</h4>
                 <p className="text-[#9ca3af] text-sm font-body">Recepción de Lunes a Sábados de 8hs a 13hs.</p>
               </div>
            </div>
          </div>
        </div>

        {/* Right Side: Ticket Visual */}
        <div className="w-1/2 flex justify-center">
          <div className="bg-[#111111] border border-white/10 rounded-2xl w-full max-w-sm relative overflow-hidden shadow-2xl">
             {/* Ticket Header */}
             <div className="bg-[#2563eb] p-6 text-center border-b border-dashed border-white/30 relative">
                <div className="absolute -left-3 -bottom-3 w-6 h-6 bg-[#0a0a0a] rounded-full border border-white/10"></div>
                <div className="absolute -right-3 -bottom-3 w-6 h-6 bg-[#0a0a0a] rounded-full border border-white/10"></div>

                <Wallet className="w-10 h-10 text-white mx-auto mb-2" />
                <h3 className="text-white font-headline font-black text-2xl uppercase tracking-wider">Beneficio Directo</h3>
             </div>

             {/* Ticket Body */}
             <div className="p-8 flex flex-col items-center text-center gap-6 relative">

                <div className="text-6xl font-black text-[#fbc107] font-headline tracking-tighter">
                  20%<span className="text-3xl">OFF</span>
                </div>

                <div className="w-full h-px bg-white/10"></div>

                <div className="flex justify-between w-full text-sm font-body">
                   <span className="text-[#9ca3af]">Ej. Envio Express:</span>
                   <div className="text-right">
                     <span className="line-through text-white/30 mr-2">$3.500</span>
                     <span className="text-white font-bold">$2.800</span>
                   </div>
                </div>
                <div className="flex justify-between w-full text-sm font-body">
                   <span className="text-[#9ca3af]">Ej. Envio Lowcost:</span>
                   <div className="text-right">
                     <span className="line-through text-white/30 mr-2">$2.200</span>
                     <span className="text-white font-bold">$1.760</span>
                   </div>
                </div>

                <div className="bg-white/5 border border-white/10 text-white text-xs font-bold font-mono tracking-widest px-4 py-2 rounded mt-2 w-full">
                  APLICA_EN_EL_ACTO
                </div>
             </div>
          </div>
        </div>

      </main>

      <PageFooter pageNumber="6 / 11" />
    </div>
  );
}
