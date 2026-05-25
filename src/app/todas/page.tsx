'use client';

import React, { useState } from 'react';

// V1 Imports
import Pagina1V1 from '@/components/paginas/pagina1';
import Pagina2V1 from '@/components/paginas/pagina2';
import Pagina3V1 from '@/components/paginas/pagina3';
import Pagina4V1 from '@/components/paginas/pagina4';
import Pagina5V1 from '@/components/paginas/pagina5';
import Pagina6V1 from '@/components/paginas/pagina6';
import Pagina7V1 from '@/components/paginas/pagina7';
import Pagina8V1 from '@/components/paginas/pagina8';
import Pagina9V1 from '@/components/paginas/pagina9';
import Pagina10V1 from '@/components/paginas/pagina10';
import Pagina11V1 from '@/components/paginas/pagina11';

// V2 Imports
import Pagina1V2 from '@/components/paginas_version_nueva/pagina1';
import Pagina2V2 from '@/components/paginas_version_nueva/pagina2';
import Pagina3V2 from '@/components/paginas_version_nueva/pagina3';
import Pagina4V2 from '@/components/paginas_version_nueva/pagina4';
import Pagina5V2 from '@/components/paginas_version_nueva/pagina5';
import Pagina6V2 from '@/components/paginas_version_nueva/pagina6';
import Pagina7V2 from '@/components/paginas_version_nueva/pagina7';
import Pagina8V2 from '@/components/paginas_version_nueva/pagina8';
import Pagina9V2 from '@/components/paginas_version_nueva/pagina9';
import Pagina10V2 from '@/components/paginas_version_nueva/pagina10';
import Pagina11V2 from '@/components/paginas_version_nueva/pagina11';

// V3 Imports
import Pagina1V3 from '@/components/paginas_version_nueva_dos/pagina1';
import Pagina2V3 from '@/components/paginas_version_nueva_dos/pagina2';
import Pagina5V3 from '@/components/paginas_version_nueva_dos/pagina5';
import Pagina6V3 from '@/components/paginas_version_nueva_dos/pagina6';

type ViewMode = 'v1' | 'v2' | 'v3' | 'ab';

export default function MasterDashboard() {
  const [viewMode, setViewMode] = useState<ViewMode>('ab');

  const scrollToPage = (pageNum: number) => {
    const el = document.getElementById(`page-wrapper-${pageNum}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderPageWrapper = (pageNum: number, ContentV1: React.ElementType, ContentV2: React.ElementType, ContentV3?: React.ElementType) => {
    return (
      <div id={`page-wrapper-${pageNum}`} key={pageNum} className="w-full flex flex-col pt-24 pb-12 items-center">
        <h2 className="text-2xl text-[#fbc107] font-headline mb-6 tracking-wider uppercase border-b border-white/10 pb-2 px-8">
          PÁGINA {pageNum}
        </h2>

        {viewMode === 'v1' && (
          <div className="flex flex-col items-center">
             <div className="bg-[#2563eb] text-white px-4 py-1 rounded-t-lg font-headline text-sm uppercase tracking-widest shadow-[0_0_15px_rgba(37,99,235,0.5)]">
               Versión 1 (Legacy)
             </div>
             <div className="transform origin-top scale-[0.6] sm:scale-[0.8] md:scale-100 transition-transform">
               <ContentV1 />
             </div>
          </div>
        )}

        {viewMode === 'v2' && (
          <div className="flex flex-col items-center">
             <div className="bg-[#fbc107] text-[#0a0a0a] px-4 py-1 rounded-t-lg font-headline text-sm uppercase tracking-widest font-bold shadow-[0_0_15px_rgba(251,193,7,0.5)]">
               Versión 2.0 (Premium)
             </div>
             <div className="transform origin-top scale-[0.6] sm:scale-[0.8] md:scale-100 transition-transform">
               <ContentV2 />
             </div>
          </div>
        )}

        {viewMode === 'v3' && ContentV3 && (
          <div className="flex flex-col items-center">
             <div className="bg-white text-[#0a0a0a] px-4 py-1 rounded-t-lg font-headline text-sm uppercase tracking-widest font-bold shadow-[0_0_15px_rgba(255,255,255,0.5)]">
               Versión 3.0 (Trayectoria B2B)
             </div>
             <div className="transform origin-top scale-[0.6] sm:scale-[0.8] md:scale-100 transition-transform">
               <ContentV3 />
             </div>
          </div>
        )}

        {viewMode === 'v3' && (!ContentV3) && (
          <div className="flex flex-col items-center">
             <div className="bg-white text-[#0a0a0a] px-4 py-1 rounded-t-lg font-headline text-sm uppercase tracking-widest font-bold shadow-[0_0_15px_rgba(255,255,255,0.5)]">
               Versión 3.0 (Trayectoria B2B)
             </div>
             <div className="text-white mt-8 opacity-50 italic">
               (Página en construcción para V3)
             </div>
          </div>
        )}

        {viewMode === 'ab' && (
          <div className="w-full max-w-[1920px] mx-auto px-4 grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-16 justify-items-center">
            {/* Left Column - V1 */}
            <div className="flex flex-col items-center w-full overflow-hidden">
               <div className="bg-[#2563eb] text-white px-4 py-1 rounded-t-lg font-headline text-sm uppercase tracking-widest shadow-[0_0_15px_rgba(37,99,235,0.5)] z-10">
                 Versión 1 (Legacy)
               </div>
               <div className="transform origin-top scale-[0.5] sm:scale-[0.6] md:scale-[0.7] xl:scale-[0.5] 2xl:scale-[0.6] transition-transform w-full flex justify-center">
                 <div className="shadow-2xl ring-1 ring-white/10">
                   <ContentV1 />
                 </div>
               </div>
            </div>

            {/* Middle Column - V2 */}
            <div className="flex flex-col items-center w-full overflow-hidden">
               <div className="bg-[#fbc107] text-[#0a0a0a] px-4 py-1 rounded-t-lg font-headline text-sm uppercase tracking-widest font-bold shadow-[0_0_15px_rgba(251,193,7,0.5)] z-10">
                 Versión 2.0 (Premium)
               </div>
               <div className="transform origin-top scale-[0.5] sm:scale-[0.6] md:scale-[0.7] xl:scale-[0.5] 2xl:scale-[0.6] transition-transform w-full flex justify-center">
                 <div className="shadow-2xl ring-1 ring-[#fbc107]/20">
                   <ContentV2 />
                 </div>
               </div>
            </div>

            {/* Right Column - V3 */}
            <div className="flex flex-col items-center w-full overflow-hidden">
               <div className="bg-white text-[#0a0a0a] px-4 py-1 rounded-t-lg font-headline text-sm uppercase tracking-widest font-bold shadow-[0_0_15px_rgba(255,255,255,0.5)] z-10">
                 Versión 3.0 (Trayectoria B2B)
               </div>
               <div className="transform origin-top scale-[0.5] sm:scale-[0.6] md:scale-[0.7] xl:scale-[0.5] 2xl:scale-[0.6] transition-transform w-full flex justify-center">
                 <div className="shadow-2xl ring-1 ring-white/20">
                   {ContentV3 ? <ContentV3 /> : (
                     <div className="w-[210mm] h-[297mm] bg-[#0a0a0a] flex items-center justify-center opacity-50 border border-dashed border-white/20">
                       <span className="text-white italic">(En construcción)</span>
                     </div>
                   )}
                 </div>
               </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const pages = [
    { num: 1, v1: Pagina1V1, v2: Pagina1V2, v3: Pagina1V3 },
    { num: 2, v1: Pagina2V1, v2: Pagina2V2, v3: Pagina2V3 },
    { num: 3, v1: Pagina3V1, v2: Pagina3V2, v3: undefined },
    { num: 4, v1: Pagina4V1, v2: Pagina4V2, v3: undefined },
    { num: 5, v1: Pagina5V1, v2: Pagina5V2, v3: Pagina5V3 },
    { num: 6, v1: Pagina6V1, v2: Pagina6V2, v3: Pagina6V3 },
    { num: 7, v1: Pagina7V1, v2: Pagina7V2, v3: undefined },
    { num: 8, v1: Pagina8V1, v2: Pagina8V2, v3: undefined },
    { num: 9, v1: Pagina9V1, v2: Pagina9V2, v3: undefined },
    { num: 10, v1: Pagina10V1, v2: Pagina10V2, v3: undefined },
    { num: 11, v1: Pagina11V1, v2: Pagina11V2, v3: undefined },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-body text-white relative">
      {/* Subtle Dot Pattern Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-8 py-3">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">

            {/* Title */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2563eb] to-[#fbc107] flex items-center justify-center shadow-lg">
                <span className="font-headline font-bold text-[#0a0a0a] text-sm">DR</span>
              </div>
              <h1 className="text-lg lg:text-xl font-headline font-bold text-white tracking-widest">
                ENVÍOS DOSRUEDAS <span className="text-white/30 mx-2">|</span> <span className="text-[#2563eb]">COMMAND CENTER</span>
              </h1>
            </div>

            {/* View Controls */}
            <div className="flex bg-black/50 p-1 rounded-lg border border-white/5 shadow-inner">
              <button
                onClick={() => setViewMode('v1')}
                className={`px-4 py-2 rounded-md text-sm font-headline tracking-wide transition-all ${
                  viewMode === 'v1'
                    ? 'bg-[#2563eb] text-white shadow-[0_0_10px_rgba(37,99,235,0.4)]'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                VER V1
              </button>
              <button
                onClick={() => setViewMode('v2')}
                className={`px-4 py-2 rounded-md text-sm font-headline tracking-wide transition-all ${
                  viewMode === 'v2'
                    ? 'bg-[#fbc107] text-[#0a0a0a] font-bold shadow-[0_0_10px_rgba(251,193,7,0.4)]'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                VER V2
              </button>
              <button
                onClick={() => setViewMode('v3')}
                className={`px-4 py-2 rounded-md text-sm font-headline tracking-wide transition-all ${
                  viewMode === 'v3'
                    ? 'bg-white text-[#0a0a0a] font-bold shadow-[0_0_10px_rgba(255,255,255,0.4)]'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                VER V3
              </button>
              <button
                onClick={() => setViewMode('ab')}
                className={`px-4 py-2 rounded-md text-sm font-headline tracking-wide transition-all ${
                  viewMode === 'ab'
                    ? 'bg-gradient-to-r from-[#2563eb]/80 via-white/80 to-[#fbc107]/80 text-[#0a0a0a] font-bold shadow-lg border border-white/20'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                COMPARACIÓN
              </button>
            </div>

            {/* Quick Navigation */}
            <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 lg:pb-0 scrollbar-hide">
              <span className="text-xs text-white/50 font-headline uppercase tracking-wider mr-2 whitespace-nowrap">
                Saltar a:
              </span>
              <div className="flex gap-1">
                {pages.map((p) => (
                  <button
                    key={`nav-${p.num}`}
                    onClick={() => scrollToPage(p.num)}
                    className="w-8 h-8 flex items-center justify-center rounded bg-white/5 border border-white/10 text-xs font-code hover:bg-[#2563eb]/20 hover:border-[#2563eb]/50 hover:text-[#2563eb] transition-colors"
                  >
                    {p.num}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="relative z-10 pt-20">
        {pages.map((page) => renderPageWrapper(page.num, page.v1, page.v2, page.v3))}
      </main>

    </div>
  );
}
