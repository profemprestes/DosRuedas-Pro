
import React from 'react';
import Image from 'next/image';

export default function Pagina3() {
  return (
    <div className="a4-container mx-auto bg-[#0a1128] relative overflow-hidden flex flex-col shadow-2xl text-white font-montserrat">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#162650_0%,_#0a1128_100%)]"></div>
      
      <div className="relative z-10 flex flex-col h-full p-16">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <div className="text-2xl font-black italic skew-x-[-5deg] tracking-tighter flex gap-1">
            <span className="text-white">ENVIOS</span>
            <span className="text-[#fbbd08]">DOSRUEDAS</span>
          </div>
          <div className="bg-[#fbbd08] text-[#0a1128] font-bold px-4 py-1 rounded text-xs tracking-wider uppercase">
            LOGÍSTICA URBANA
          </div>
        </header>

        {/* Main Title Section */}
        <div className="border-b border-[#fbbd08] pb-2 mb-8 flex items-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fbbd08" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
            <circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/>
            <circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/>
          </svg>
          <h2 className="text-5xl font-black text-[#fbbd08] tracking-tight uppercase italic">ENVÍOS LOWCOST</h2>
        </div>

        {/* Info Card */}
        <div className="bg-[#111c44]/60 border-l-[6px] border-[#fbbd08] rounded-r-2xl p-6 mb-12 backdrop-blur-sm">
          <h3 className="text-[#fbbd08] font-black text-xl mb-4 tracking-wide uppercase">Eficiencia en ruteo diario</h3>
          <p className="text-gray-200 leading-relaxed text-base mb-4">
            La modalidad LowCost prioriza la eficiencia de nuestras rutas. Son entregas en el transcurso del día, <span className="font-bold text-white">sin elección de rango horario</span>. Todos los pedidos solicitados antes de las 13:00hs, serán entregados de forma garantizada antes de las 19:00hs.
          </p>
          <div className="bg-[#0c1635] p-4 rounded-xl flex items-start gap-3 border border-white/5">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-[#fbbd08] shrink-0 mt-1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <p className="text-[#fbbd08] text-sm font-semibold italic">
              Importante: Al igual que en envíos Express, se requiere un mínimo de 2 horas de anticipación en la solicitud para organizar el retiro y la ruta del cadete.
            </p>
          </div>
        </div>

        {/* Table Title */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] bg-gray-600 grow"></div>
          <h4 className="text-lg font-bold tracking-[0.2em] uppercase whitespace-nowrap text-gray-400">Tarifario Zonificado LowCost</h4>
          <div className="h-[1px] bg-gray-600 grow"></div>
        </div>

        {/* Pricing Table */}
        <div className="mb-12">
          <div className="flex justify-between border-b-2 border-[#fbbd08] pb-3 px-4">
            <span className="text-[#fbbd08] font-bold text-lg uppercase">ZONIFICACIÓN DE ENTREGA</span>
            <span className="text-[#fbbd08] font-bold text-lg text-right uppercase">VALOR FINAL</span>
          </div>
          
          <div className="space-y-1 mt-2">
            <div className="flex justify-between items-center px-4 py-4 bg-gradient-to-r from-transparent to-[#1a2b5a]/40 rounded-lg">
              <span className="font-medium text-lg">Zona 1 (Hasta 3 km)</span>
              <span className="text-[#fbbd08] font-black text-2xl">$3.000</span>
            </div>
            <div className="flex justify-between items-center px-4 py-4">
              <span className="font-medium text-lg">Zona 2 (3 a 5 km)</span>
              <span className="text-[#fbbd08] font-black text-2xl">$4.000</span>
            </div>
            <div className="flex justify-between items-center px-4 py-4 bg-gradient-to-r from-transparent to-[#1a2b5a]/40 rounded-lg">
              <span className="font-medium text-lg">Zona 3 (5 a 7 km)</span>
              <span className="text-[#fbbd08] font-black text-2xl">$5.300</span>
            </div>
            <div className="flex justify-between items-center px-4 py-4">
              <span className="font-medium text-lg">Zona 4 (7 a 10 km)</span>
              <span className="text-[#fbbd08] font-black text-2xl">$7.000</span>
            </div>
            <div className="flex justify-between items-center px-4 py-4 bg-gradient-to-r from-transparent to-[#1a2b5a]/40 rounded-lg border border-white/5">
              <span className="font-medium text-lg">Zona 5 (Más de 10 km)</span>
              <span className="text-[#fbbd08] font-black text-2xl">$700 x km</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-auto flex justify-between items-center text-gray-500 text-xs font-bold uppercase tracking-widest border-t border-gray-800 pt-6">
          <span>Envíos Económicos Programados</span>
          <span>3 / 11</span>
        </footer>
      </div>
    </div>
  );
}
