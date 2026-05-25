'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';

// Original Pages
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

// New Pages (V2)
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

// Version 3 Pages
import Pagina1V3 from '@/components/paginas_version_nueva_dos/pagina1';
import Pagina2V3 from '@/components/paginas_version_nueva_dos/pagina2';
import Pagina5V3 from '@/components/paginas_version_nueva_dos/pagina5';
import Pagina6V3 from '@/components/paginas_version_nueva_dos/pagina6';

export default function ExportacionPage() {
  const [mounted, setMounted] = useState(false);
  const [version, setVersion] = useState<'v1' | 'v2' | 'v3'>('v2');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-slate-900" />;
  }

  const paginasV1 = [
    <Pagina1V1 key="p1v1" />,
    <Pagina2V1 key="p2v1" />,
    <Pagina3V1 key="p3v1" />,
    <Pagina4V1 key="p4v1" />,
    <Pagina5V1 key="p5v1" />,
    <Pagina6V1 key="p6v1" />,
    <Pagina7V1 key="p7v1" />,
    <Pagina8V1 key="p8v1" />,
    <Pagina9V1 key="p9v1" />,
    <Pagina10V1 key="p10v1" />,
    <Pagina11V1 key="p11v1" />,
  ];

  const paginasV2 = [
    <Pagina1V2 key="p1v2" />,
    <Pagina2V2 key="p2v2" />,
    <Pagina3V2 key="p3v2" />,
    <Pagina4V2 key="p4v2" />,
    <Pagina5V2 key="p5v2" />,
    <Pagina6V2 key="p6v2" />,
    <Pagina7V2 key="p7v2" />,
    <Pagina8V2 key="p8v2" />,
    <Pagina9V2 key="p9v2" />,
    <Pagina10V2 key="p10v2" />,
    <Pagina11V2 key="p11v2" />,
  ];

  const paginasV3 = [
    <Pagina1V3 key="p1v3" />,
    <Pagina2V3 key="p2v3" />,
    <Pagina5V3 key="p5v3" />,
    <Pagina6V3 key="p6v3" />,
  ];

  const paginasToRender = version === 'v1' ? paginasV1 : version === 'v2' ? paginasV2 : paginasV3;

  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4 flex flex-col items-center gap-12 print:bg-white print:py-0 print:px-0 print:gap-0" suppressHydrationWarning>

      {/* Version Selector Panel */}
      <div className="print:hidden w-full max-w-4xl bg-[#0a0a0a] border border-[#2563eb]/30 rounded-xl p-2 flex gap-2 shadow-2xl mb-8">
         <button
           onClick={() => setVersion('v1')}
           className={`flex-1 py-3 px-6 rounded-lg font-body font-bold transition-all ${
             version === 'v1'
               ? 'bg-[#2563eb]/20 text-[#fbc107] border border-[#2563eb]/50'
               : 'text-white/50 hover:bg-white/5 border border-transparent'
           }`}
         >
           V1 (Original)
         </button>
         <button
           onClick={() => setVersion('v2')}
           className={`flex-1 py-3 px-6 rounded-lg font-body font-bold transition-all ${
             version === 'v2'
               ? 'bg-[#2563eb]/20 text-[#fbc107] border border-[#2563eb]/50'
               : 'text-white/50 hover:bg-white/5 border border-transparent'
           }`}
         >
           V2 (SaaS Tech)
         </button>
         <button
           onClick={() => setVersion('v3')}
           className={`flex-1 py-3 px-6 rounded-lg font-body font-bold transition-all ${
             version === 'v3'
               ? 'bg-[#2563eb]/20 text-[#fbc107] border border-[#2563eb]/50'
               : 'text-white/50 hover:bg-white/5 border border-transparent'
           }`}
         >
           V3 (Trayectoria B2B)
         </button>
      </div>

      {/* Print Button */}
      <div className="fixed bottom-8 right-8 z-50 print:hidden" suppressHydrationWarning>
        <Button 
          size="lg" 
          className="rounded-full bg-accent text-primary font-bold shadow-2xl hover:scale-105 transition-transform"
          onClick={() => window.print()}
        >
          <Printer className="mr-2 h-5 w-5" />
          GENERAR PDF COMPLETO
        </Button>
      </div>

      {/* Header Info */}
      <div className="text-center print:hidden max-w-2xl" suppressHydrationWarning>
        <h1 className="text-4xl font-black text-white uppercase tracking-tighter mb-4 font-headline">
          Visualizador de <span className="text-[#fbc107]">Exportación</span>
        </h1>
        <p className="text-slate-400 font-body">
          Revisa las 11 páginas de la propuesta comercial antes de exportar. 
          Cada sección está optimizada para impresión en formato A4.
        </p>
      </div>

      {/* A4 Sheets */}
      <div className="flex flex-col gap-8 w-full max-w-[210mm] print:block print:gap-0 print:max-w-none" suppressHydrationWarning>
        {paginasToRender.map((pagina, index) => (
          <div key={index} className="print:m-0 print:p-0 print:shadow-none break-after-page shadow-2xl" suppressHydrationWarning>
            {pagina}
          </div>
        ))}
      </div>
    </div>
  );
}
