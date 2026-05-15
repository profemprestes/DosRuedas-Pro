'use client';

import { A4Page } from '@/components/A4Page';
import { AIOptimizationTrigger } from '@/components/AIOptimizationTrigger';
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Web Controls */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4 no-print">
        <Button 
          variant="default" 
          size="lg" 
          className="rounded-full bg-accent text-primary shadow-2xl hover:scale-105 transition-transform font-bold"
          onClick={() => window.print()}
        >
          <Printer className="mr-2 h-5 w-5" />
          EXPORTAR PDF (A4)
        </Button>
      </div>

      <div className="flex flex-col items-center">
        {/* The Proposal Document */}
        <A4Page />

        {/* Interactive Feature Demo (only web) */}
        <div className="w-full bg-primary py-12 px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-headline font-black text-white mb-4 uppercase tracking-tighter">
              Tecnología Propietaria de <span className="text-accent">Vanguardia</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-body">
              Nuestra propuesta incluye acceso a la suite de optimización AI líder en el mercado. 
              Experimenta el poder de nuestra red de razonamiento logístico.
            </p>
          </div>
          
          <AIOptimizationTrigger />
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-20 no-print">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-slate-700 blur-[150px] rounded-full mix-blend-screen" />
      </div>
    </main>
  );
}
