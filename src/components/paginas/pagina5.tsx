import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { Package, MessageCircle, CheckCircle2, Clock, Settings2, ShieldCheck, Undo2, CloudRain } from 'lucide-react';

export default function Pagina5() {
  return (
    <div className="a4-container mx-auto bg-primary relative overflow-hidden flex flex-col shadow-2xl text-white font-body" suppressHydrationWarning>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-secondary/80 z-10" />

      <div className="relative z-20 flex flex-col h-full justify-between max-h-full p-10">
        <PageHeader badgeText="SAME DAY DELIVERY" />

        <main className="flex-1 flex flex-col mt-4 mb-4 gap-4 overflow-hidden">
          
          {/* Main Title Section */}
          <div className="flex items-start gap-4 shrink-0">
            <div className="bg-accent/10 p-3 rounded-xl border border-accent/20">
              <Package className="w-10 h-10 text-accent" />
            </div>
            <div>
              <h2 className="text-4xl font-black font-headline text-accent leading-none uppercase">Plan E-Commerce</h2>
              <h2 className="text-4xl font-black font-headline text-white leading-tight uppercase">Same Day</h2>
            </div>
          </div>

          {/* WhatsApp Banner */}
          <div className="bg-black/40 border border-white/10 rounded-full py-3 px-6 flex items-center gap-3 shrink-0 backdrop-blur-sm">
            <MessageCircle className="w-5 h-5 text-accent fill-accent/20" />
            <p className="text-[13px] font-medium text-gray-200">
              Gestión 100% por WhatsApp. <strong className="text-accent uppercase tracking-wide">¡Nosotros somos su depósito!</strong>
            </p>
          </div>

          <p className="text-gray-300 text-[14px] leading-relaxed max-w-3xl shrink-0">
            Impulsá tu tienda online con una solución logística integral. Con nuestro plan Fulfillment (3PL) podés dejar un stock operativo de tus productos con nosotros; cada venta es preparada y despachada el mismo día, permitiéndote concentrarte en lo más importante: vender y hacer crecer tu negocio.
          </p>

          {/* Pricing & Features Grid */}
          <div className="grid grid-cols-2 gap-5 shrink-0 mt-2">
            {/* Price Card */}
            <div className="border-2 border-accent/80 rounded-2xl p-6 flex flex-col items-center justify-center text-center bg-accent/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-10">
                <ShieldCheck className="w-24 h-24 text-accent" />
              </div>
              <h3 className="text-[11px] font-bold tracking-widest text-accent mb-4 font-headline uppercase relative z-10">Tarifa Plana Integral</h3>
              <div className="text-5xl font-black mb-1 font-headline tracking-tighter text-white relative z-10">$6.000</div>
              <p className="text-[10px] font-bold tracking-widest opacity-70 uppercase relative z-10">TODO MAR DEL PLATA</p>
            </div>

            {/* Features Card */}
            <div className="border border-white/10 rounded-2xl p-6 bg-white/5 flex flex-col justify-center">
              <ul className="space-y-3">
                {[
                  { text: "Almacenamiento", sub: "(Stock operativo)" },
                  { text: "Preparación (Picking)", sub: "y embalaje básico" },
                  { text: "Entrega Same Day", sub: "(Mismo día)" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span><strong className="text-white">{item.text}</strong> <span className="text-gray-400">{item.sub}</span></span>
                  </li>
                ))}
                <li className="flex items-start gap-3 text-sm font-bold text-accent pt-1 border-t border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span>Cobranza contra entrega GRATIS</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Info Grid - Dinámica y Reglas */}
          <div className="flex-1 grid grid-cols-2 gap-5 min-h-0">
            {/* Dinámica */}
            <div className="bg-black/20 rounded-xl p-5 border border-white/5 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-accent" />
                <h4 className="text-[11px] font-bold tracking-widest text-accent uppercase font-headline">Dinámica Operativa</h4>
              </div>
              <div className="text-[12px] space-y-2 text-gray-300 leading-relaxed">
                <p>Corte de pedidos: <strong className="text-white text-[13px]">15:00hs.</strong></p>
                <p>Ventas hasta las 15hs se entregan en el día. Pos 15hs pasan al día siguiente.</p>
                <p>Entregas en franja abierta de 9 a 20hs.</p>
              </div>
            </div>

            {/* Reglas */}
            <div className="bg-black/20 rounded-xl p-5 border border-white/5 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <Settings2 className="w-5 h-5 text-accent" />
                <h4 className="text-[11px] font-bold tracking-widest text-accent uppercase font-headline">Reglas de Stock</h4>
              </div>
              <p className="text-[12px] text-gray-300 leading-relaxed">
                Incluye bolsa y film estándar. El stock se ajusta a la rotación real. Admite ropa, calzado, tecnología chica. No admite voluminosos, líquidos ni frágiles.
              </p>
            </div>
          </div>

          {/* Bottom Footer Metrics */}
          <div className="border-t border-white/10 pt-4 shrink-0">
            <div className="grid grid-cols-3 gap-0 bg-black/40 rounded-xl overflow-hidden border border-white/10 divide-x divide-white/10">
              <div className="p-4 flex flex-col items-center text-center">
                <Undo2 className="w-5 h-5 text-accent mb-1" />
                <p className="text-[10px] font-bold text-accent mb-0.5 uppercase tracking-tighter font-headline">2da Visita</p>
                <p className="text-[11px] font-medium text-white">100% Bonificada</p>
              </div>
              <div className="p-4 flex flex-col items-center text-center">
                <Package className="w-5 h-5 text-gray-400 mb-1" />
                <p className="text-[10px] font-bold text-accent mb-0.5 uppercase tracking-tighter font-headline">Devoluciones</p>
                <p className="text-[11px] font-medium text-gray-300">50% valor original</p>
              </div>
              <div className="p-4 flex flex-col items-center text-center">
                <CloudRain className="w-5 h-5 text-blue-400 mb-1" />
                <p className="text-[10px] font-bold text-accent mb-0.5 uppercase tracking-tighter font-headline">Clima (Lluvia)</p>
                <p className="text-[11px] font-medium text-gray-300">Recargo del 30%</p>
              </div>
            </div>
          </div>

        </main>

        <PageFooter pageNumber="5 / 11" />
      </div>
    </div>
  );
}