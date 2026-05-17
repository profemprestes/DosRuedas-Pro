import React from 'react';

interface PageFooterProps {
  pageNumber: string;
}

export function PageFooter({ pageNumber }: PageFooterProps) {
  return (
    <footer className="mt-auto pt-6 pb-4 z-20 relative w-full shrink-0">
      <div className="h-[1px] w-full bg-white/10 mb-4"></div>

      <div className="flex justify-between items-center text-[9px] uppercase tracking-[0.2em] text-gray-500 font-bold">
        <div className="w-1/3 text-left">Propuesta Operativa 2026</div>

        <div className="w-1/3 flex justify-center items-center gap-4 lowercase tracking-normal text-white/50">
          <span>@enviosdosruedas</span>
        </div>

        <div className="w-1/3 text-right">{pageNumber}</div>
      </div>
    </footer>
  );
}