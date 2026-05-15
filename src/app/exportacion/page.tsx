
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';
import Pagina1 from '@/components/paginas/pagina1';
import Pagina2 from '@/components/paginas/pagina2';
import Pagina3 from '@/components/paginas/pagina3';
import Pagina4 from '@/components/paginas/pagina4';
import Pagina5 from '@/components/paginas/pagina5';
import Pagina6 from '@/components/paginas/pagina6';
import Pagina7 from '@/components/paginas/pagina7';
import Pagina8 from '@/components/paginas/pagina8';
import Pagina9 from '@/components/paginas/pagina9';
import Pagina10 from '@/components/paginas/pagina10';
import Pagina11 from '@/components/paginas/pagina11';

export default function ExportacionPage() {
  const paginas = [
    <Pagina1 key="p1" />,
    <Pagina2 key="p2" />,
    <Pagina3 key="p3" />,
    <Pagina4 key="p4" />,
    <Pagina5 key="p5" />,
    <Pagina6 key="p6" />,
    <Pagina7 key="p7" />,
    <Pagina8 key="p8" />,
    <Pagina9 key="p9" />,
    <Pagina10 key="p10" />,
    <Pagina11 key="p11" />,
  ];

  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4 flex flex-col items-center gap-12">
      {/* Print Button */}
      <div className="fixed bottom-8 right-8 z-50 no-print">
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
      <div className="text-center no-print max-w-2xl">
        <h1 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">
          Visualizador de <span className="text-accent">Exportación</span>
        </h1>
        <p className="text-slate-400">
          Revisa las 11 páginas de la propuesta comercial antes de exportar. 
          Cada sección está optimizada para impresión en formato A4.
        </p>
      </div>

      {/* A4 Sheets */}
      <div className="flex flex-col gap-8 w-full max-w-[210mm]">
        {paginas.map((pagina, index) => (
          <div key={index} className="print:m-0 print:p-0 print:shadow-none break-after-page shadow-2xl">
            {pagina}
          </div>
        ))}
      </div>
    </div>
  );
}
