import React from 'react';

interface PageHeaderProps {
  badgeText: string;
  badgeTextColor?: string;
  badgeBorderColor?: string;
}

export function PageHeader({ badgeText, badgeTextColor = "text-[#ffffff]", badgeBorderColor = "border-white/10" }: PageHeaderProps) {
  return (
    <header className="flex justify-between items-center w-full px-8 py-6 z-20 relative shrink-0">
      <div className="text-3xl font-bold italic tracking-wider font-headline text-[#2563eb]">
        ENVÍOS DOSRUEDAS
      </div>
      <div className={`bg-white/5 backdrop-blur-sm border ${badgeBorderColor} px-4 py-2 rounded-md shadow-sm`}>
        <span className={`${badgeTextColor} uppercase font-bold text-sm tracking-wider`}>
          {badgeText}
        </span>
      </div>
    </header>
  );
}
