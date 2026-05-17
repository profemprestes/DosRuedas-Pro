import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { Package, Smartphone, Check, Clock, Box, ShieldCheck } from 'lucide-react';

export default function Pagina5() {
  return (
    <div className="flex flex-col justify-between w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] overflow-hidden box-border bg-primary relative text-white font-body" suppressHydrationWarning>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/95 to-secondary/20 z-10" />

      <div className="relative z-20 flex flex-col h-full p-16 justify-between box-border">
        <PageHeader badgeText="SAME DAY DELIVERY" />

        <main className="flex-1 flex flex-col justify-center overflow-hidden gap-8">
          <section className="shrink-0">
            <div className="flex items-start gap-4 mb-4">
              <div className="mt-2 text-accent bg-accent/10 p-3 rounded-2xl">
                <Package className="w-12 h-12" />
              </div>
              <div>
                <h2 className="text-5xl font-black font-headline text-accent leading-none uppercase">Plan E-Commerce</h2>
                <h2 className="text-5xl font-black font-headline text-white leading-tight uppercase">Same Day</h2>
              </div>
            </div>

            <div className="bg-black/30 border border-white/10 rounded-full py-3 px-8 flex items-center gap-3 backdrop-blur-sm shadow-xl">
              <Smartphone className="w-6 h-6 text-accent" />
              <p className="text-sm font-bold tracking-wide">Gestión 100% por WhatsApp. <span className="text-accent underline">¡Nosotros somos su depósito!</span></p>
            </div>
          </section>

          <div className="grid grid-cols-2 gap-6 flex-grow max-h-[35%]">
            <div className="border-2 border-accent rounded-3xl p-8 flex flex-col items-center justify-center text-center bg-accent/5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
              <h3 className="text-xs font-black tracking-[0.3em] text-accent mb-6 uppercase">TARIFA PLANA INTEGRAL</h3>
              <div className="text-[72px] font-black font-headline leading-none mb-2 tracking-tighter">$6.000</div>
              <p className="text-xs font-black tracking-[0.2em] opacity-60 uppercase">TODO MAR DEL PLATA</p>
            </div>

            <div className="border border-white/10 rounded-3xl p-8 bg-white/5 flex flex-col justify-center backdrop-blur-sm">
              <ul className="space-y-4">
                {[
                  "Almacenamiento (Stock operativo)",
                  "Preparación (Picking) y embalaje",
                  "Entrega Same Day (Mismo día)",
                  "Cobranza contra entrega GRATIS"
                ].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold">
                    <Check className="text-accent shrink-0 w-5 h-5 stroke-[3]" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 shrink-0">
            <div className="bg-secondary/40 rounded-2xl p-6 border border-white/5 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-accent" />
                <h4 className="text-xs font-black tracking-widest text-accent uppercase font-headline">Dinámica Operativa</h4>
              </div>
              <div className="text-[13px] space-y-2 text-gray-300 font-medium">
                <p>Corte de pedidos: <strong className="text-white">15:00hs.</strong></p>
                <p>Ventas hasta el corte se entregan en el día. Franja de 9 a 20hs.</p>
              </div>
            </div>

            <div className="bg-secondary/40 rounded-2xl p-6 border border-white/5 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Box className="w-6 h-6 text-accent" />
                <h4 className="text-xs font-black tracking-widest text-accent uppercase font-headline">Reglas de Stock</h4>
              </div>
              <p className="text-[13px] text-gray-300 leading-relaxed font-medium">
                Admite ropa, calzado, tecnología chica. Incluye bolsa y film. No admite líquidos ni frágiles.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 mt-auto shrink-0">
            <div className="grid grid-cols-3 gap-0 bg-black/40 rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
              <div className="p-6 text-center border-r border-white/10">
                <p className="text-[10px] font-black text-accent mb-1 uppercase tracking-widest">2da Visita</p>
                <p className="text-[13px] font-black">100% Bonificada</p>
              </div>
              <div className="p-6 text-center border-r border-white/10">
                <p className="text-[10px] font-black text-accent mb-1 uppercase tracking-widest">Devoluciones</p>
                <p className="text-[13px] font-black">50% Original</p>
              </div>
              <div className="p-6 text-center">
                <p className="text-[10px] font-black text-accent mb-1 uppercase tracking-widest">Clima (Lluvia)</p>
                <p className="text-[13px] font-black">Recargo 30%</p>
              </div>
            </div>
          </div>
        </main>

        <PageFooter pageNumber="5 / 11" />
      </div>
    </div>
  );
}
