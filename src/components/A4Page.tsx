
import React from 'react';
import Image from 'next/image';
import { Truck, Package, TrendingUp, Zap, ShieldCheck, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const A4Page = () => {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');
  const truckImg = PlaceHolderImages.find(img => img.id === 'delivery-truck');
  const techImg = PlaceHolderImages.find(img => img.id === 'logistics-tech');

  return (
    <div className="a4-container mx-auto bg-primary relative overflow-hidden flex flex-col shadow-2xl print-shadow-none text-white selection:bg-accent selection:text-primary">
      {/* Background Hero Image */}
      <div className="absolute top-0 left-0 w-full h-[110mm] z-0">
        <Image
          src={heroImg?.imageUrl || ''}
          alt="Logistics Background"
          fill
          className="object-cover opacity-40"
          priority
          data-ai-hint="logistics warehouse"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/80 to-primary z-10" />
      </div>

      {/* Hero Content */}
      <section className="relative z-20 h-[105mm] flex flex-col items-center justify-center px-12 pt-8 text-center">
        <div className="mb-6 p-1 rounded-xl border-2 border-accent/50 bg-primary/50 backdrop-blur-sm shadow-[0_0_20px_rgba(253,195,34,0.3)]">
          <div className="w-16 h-16 relative flex items-center justify-center">
            <Zap className="w-10 h-10 text-accent fill-accent" />
          </div>
        </div>
        
        <Badge variant="outline" className="mb-4 px-4 py-1 text-accent border-accent/50 font-headline tracking-widest text-[10px] uppercase bg-accent/10">
          Logística Corporativa
        </Badge>
        
        <h1 className="text-6xl font-black font-headline tracking-tighter leading-none mb-2">
          ENVÍOS <span className="text-accent italic">DOSRUEDAS</span>
        </h1>
        
        <p className="text-lg font-medium text-slate-300 max-w-lg font-body mt-4 leading-tight">
          Optimizando la última milla B2B con inteligencia artificial y precisión operativa de grado militar.
        </p>
      </section>

      {/* Main Content Sections - Alternating Canvas */}
      <div className="flex-1 relative z-20 px-12 space-y-4 -mt-4">
        {/* Card 1: Intelligent Delivery */}
        <div className="flex h-[75mm] bg-secondary/60 backdrop-blur-md rounded-2xl overflow-hidden border border-white/5 shadow-xl hover:translate-y-[-2px] transition-transform duration-300">
          <div className="flex-1 p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-accent/20 rounded-lg">
                <Truck className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold font-headline text-accent">ENTREGA INTELIGENTE</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed font-body">
              Nuestra flota de última generación garantiza tiempos de entrega <span className="text-white font-semibold">reducidos en un 25%</span>. Diseñado para empresas que no pueden permitirse esperas.
            </p>
            <div className="mt-4 flex items-center gap-4 text-xs font-semibold text-accent/80">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Seguro 100%</span>
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Tracking Real-time</span>
            </div>
          </div>
          <div className="w-[45%] relative">
            <Image
              src={truckImg?.imageUrl || ''}
              alt="Delivery Motorcycle"
              fill
              className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              data-ai-hint="delivery bike"
            />
          </div>
        </div>

        {/* Card 2: AI Optimization Engine */}
        <div className="flex h-[75mm] bg-secondary/60 backdrop-blur-md rounded-2xl overflow-hidden border border-white/5 shadow-xl hover:translate-y-[-2px] transition-transform duration-300">
          <div className="w-[45%] relative">
            <Image
              src={techImg?.imageUrl || ''}
              alt="AI Logistics"
              fill
              className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              data-ai-hint="digital logistics"
            />
          </div>
          <div className="flex-1 p-8 flex flex-col justify-center text-right">
            <div className="flex items-center gap-3 mb-4 justify-end">
              <h3 className="text-2xl font-bold font-headline text-accent uppercase">Optimización AI</h3>
              <div className="p-2 bg-accent/20 rounded-lg">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed font-body">
              Algoritmos avanzados de <span className="text-white font-semibold">Route Optimization</span> que analizan cuellos de botella en tiempo real para determinar las rutas B2B más eficientes.
            </p>
            <div className="mt-4 flex items-center gap-4 text-xs font-semibold text-accent/80 justify-end">
              <span className="flex items-center gap-1">Eiciencia 99.8%</span>
              <span className="flex items-center gap-1">Ahorro Combustible</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-20 h-[37mm] px-12 pb-8 flex flex-col justify-end">
        <Separator className="bg-white/10 mb-6" />
        <div className="flex justify-between items-end">
          <div className="flex items-center gap-6">
            <div>
              <p className="text-[9px] uppercase tracking-widest text-slate-500 font-bold mb-1">Documento Confidencial</p>
              <p className="text-[11px] text-accent font-headline font-bold">PROPUESTA OPERATIVA 2026</p>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4 text-slate-500" />
              <p className="text-[10px] text-slate-400 font-medium">DOSRUEDAS SOLUTIONS S.A.</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[14px] font-headline font-black text-accent tracking-tighter">1 / 11</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
