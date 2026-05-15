
import React from 'react';

export default function Pagina5() {
  return (
    <div className="a4-container mx-auto bg-[#0a1128] relative overflow-hidden flex flex-col shadow-2xl text-white font-montserrat">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_#0a1128_0%,_#1c2a4d_100%)]"></div>
      
      <div className="relative z-10 flex flex-col h-full p-16">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-black italic tracking-tighter">
            ENVIOS <span className="text-[#fbbd08]">DOSRUEDAS</span>
          </h1>
          <div className="bg-[#fbbd08] text-[#0a1128] text-xs font-bold px-4 py-1.5 rounded-sm tracking-widest uppercase">
            E-COMMERCE 3PL
          </div>
        </header>

        {/* Main Title Section */}
        <section className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="mt-2 text-[#fbbd08]">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
            </div>
            <div>
              <h2 className="text-5xl font-black text-[#fbbd08] leading-none uppercase italic">Plan E-Commerce</h2>
              <h2 className="text-5xl font-black text-white leading-tight uppercase italic">Same Day</h2>
            </div>
          </div>

          <div className="bg-black/30 border border-white/10 rounded-full py-3 px-6 flex items-center gap-3 mb-8 backdrop-blur-sm">
            <p className="text-sm font-medium">Gestión 100% por WhatsApp. <span className="text-[#fbbd08] font-bold">¡Nosotros somos su depósito!</span></p>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed max-w-3xl">
            Impulsá tu tienda online con una solución logística integral. Con nuestro plan Fulfillment (3PL) podés dejar un stock operativo de tus productos con nosotros; cada venta es preparada y despachada el mismo día.
          </p>
        </section>

        {/* Pricing & Features Grid */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="border-2 border-[#fbbd08] rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-white/5">
            <h3 className="text-[10px] font-bold tracking-widest text-[#fbbd08] mb-6 uppercase">TARIFA PLANA INTEGRAL</h3>
            <div className="text-6xl font-black mb-2">$6.000</div>
            <p className="text-[10px] font-bold tracking-widest opacity-70 uppercase">TODO MAR DEL PLATA</p>
          </div>

          <div className="border border-white/20 rounded-2xl p-8 bg-white/5">
            <ul className="space-y-4">
              <li className="flex items-start gap-2 text-sm">
                <span className="text-[#fbbd08] font-bold">•</span>
                <span><strong>Almacenamiento</strong> Stock operativo</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-[#fbbd08] font-bold">•</span>
                <span><strong>Preparación</strong> Picking y embalaje</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-[#fbbd08] font-bold">•</span>
                <span><strong>Entrega Same Day</strong> (Mismo día)</span>
              </li>
              <li className="flex items-start gap-2 text-sm font-bold text-[#fbbd08] italic">
                <span className="font-bold">•</span>
                <span>Cobranza en puerta GRATIS</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Info Boxes Grid */}
        <div className="grid grid-cols-2 gap-6 mb-12">
          <div className="bg-black/20 rounded-xl p-6 border border-white/5">
            <h4 className="text-[10px] font-bold tracking-widest text-[#fbbd08] uppercase mb-4">Dinámica Operativa</h4>
            <div className="text-[13px] space-y-2 text-gray-300">
              <p>Corte de pedidos: <strong>15:00hs.</strong></p>
              <p>Ventas hasta las 15hs se entregan en el día.</p>
            </div>
          </div>
          <div className="bg-black/20 rounded-xl p-6 border border-white/5">
            <h4 className="text-[10px] font-bold tracking-widest text-[#fbbd08] uppercase mb-4">Reglas de Stock</h4>
            <p className="text-[13px] text-gray-300 leading-relaxed">
              Incluye bolsa y film estándar. Admite ropa, calzado, tecnología chica. No admite voluminosos.
            </p>
          </div>
        </div>

        {/* Footer Info */}
        <footer className="mt-auto border-t border-white/10 pt-10 flex justify-between items-center text-[10px] text-gray-500 font-bold uppercase tracking-widest">
          <p>Fulfillment y Entrega en el Día</p>
          <p>5 / 11</p>
        </footer>
      </div>
    </div>
  );
}
