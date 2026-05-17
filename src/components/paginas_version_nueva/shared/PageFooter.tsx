import React from 'react';

interface PageFooterProps {
  pageNumber: string;
}

export function PageFooter({ pageNumber }: PageFooterProps) {
  return (
    <footer className="flex justify-between items-center w-full mt-auto pt-4 px-8 pb-6 z-20 relative shrink-0">
      <div className="text-[#9ca3af] font-light italic font-body text-sm">
        Logística de Precisión
      </div>
      <div className="text-[#9ca3af] font-mono text-sm font-code">
        {pageNumber}
      </div>
    </footer>
  );
}
