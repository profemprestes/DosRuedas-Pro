import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { Package, Smartphone, Check, Clock, Box } from 'lucide-react';

export default function Pagina5() {
  return (
    <div className="mx-auto w-[210mm] h-[297mm] bg-primary relative overflow-hidden flex flex-col shadow-2xl text-white font-montserrat" suppressHydrationWarning>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/95 z-10" />

      <div className="relative z-20 flex flex-col h-full p-16">
        {/* Header Section */}
        <PageHeader badgeText="SAME DAY DELIVERY" />

        <main className="flex-grow flex flex-col">
          {/* Main Title Section */}
          <section className="mb-4">
              <div className="flex items-start gap-4 mb-2">
                  <div className="mt-2 text-accent">
                      <Package className="w-12 h-12" />
                  </div>
                  <div>
                      <h2 className="text-5xl font-black text-accent leading-none uppercase">Plan E-Commerce</h2>
                      <h2 className="text-5xl font-black text-white leading-tight uppercase">Same Day</h2>
                  </div>
              </div>

              {/* WhatsApp Bar */}
              <div className="bg-black/30 border border-white/10 rounded-full py-3 px-6 flex items-center gap-3 mb-4 backdrop-blur-sm">
                  <Smartphone className="w-5 h-5 text-accent" />
                  <p className="text-sm font-medium">Gestión 100% por WhatsApp. <span className="text-accent">¡Nosotros somos su depósito!</span></p>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed max-w-3xl">
                  Impulsá tu tienda online con una solución logística integral. Con nuestro plan Fulfillment (3PL) podés dejar un stock operativo de tus productos con nosotros; cada venta es preparada y despachada el mismo día, permitiéndote concentrarte en lo más importante: vender y hacer crecer tu negocio.
              </p>
          </section>

          {/* Pricing & Features Grid */}
          <div className="grid grid-cols-2 gap-6 mb-4 flex-grow">
              {/* Price Card */}
              <div className="border-2 border-accent rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-white/5">
                  <h3 className="text-xs font-bold tracking-widest text-accent mb-6">TARIFA PLANA INTEGRAL</h3>
                  <div className="text-6xl font-black mb-2">$6.000</div>
                  <p className="text-[10px] font-bold tracking-widest opacity-70">TODO MAR DEL PLATA</p>
              </div>

              {/* Features Card */}
              <div className="border border-white/20 rounded-2xl p-8 bg-white/5 flex flex-col justify-center">
                  <ul className="space-y-4">
                      <li className="flex items-start gap-2 text-sm">
                          <Check className="mt-1 text-accent shrink-0 w-4 h-4" />
                          <span><strong>Almacenamiento</strong> (Stock operativo)</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                          <Check className="mt-1 text-accent shrink-0 w-4 h-4" />
                          <span><strong>Preparación (Picking)</strong> y embalaje básico</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                          <Check className="mt-1 text-accent shrink-0 w-4 h-4" />
                          <span><strong>Entrega Same Day</strong> (Mismo día)</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm font-bold text-accent">
                          <Check className="mt-1 shrink-0 w-4 h-4" />
                          <span>Cobranza contra entrega GRATIS</span>
                      </li>
                  </ul>
              </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Dinámica */}
              <div className="bg-black/20 rounded-xl p-6 border border-white/5">
                  <div className="flex items-center gap-2 mb-4">
                      <Clock className="w-5 h-5 text-accent" />
                      <h4 className="text-xs font-bold tracking-widest text-accent uppercase">Dinámica Operativa</h4>
                  </div>
                  <div className="text-[13px] space-y-2 text-gray-300">
                      <p>Corte de pedidos: <strong>15:00hs.</strong></p>
                      <p>Ventas hasta las 15hs se entregan en el día. Pos 15hs pasan al día siguiente.</p>
                      <p>Entregas en franja abierta de 9 a 20hs.</p>
                  </div>
              </div>

              {/* Reglas */}
              <div className="bg-black/20 rounded-xl p-6 border border-white/5">
                  <div className="flex items-center gap-2 mb-4">
                      <Box className="w-5 h-5 text-accent" />
                      <h4 className="text-xs font-bold tracking-widest text-accent uppercase">Reglas de Stock</h4>
                  </div>
                  <p className="text-[13px] text-gray-300 leading-relaxed">
                      Incluye bolsa y film estándar. El stock se ajusta a la rotación real. Admite ropa, calzado, tecnología chica. No admite voluminosos, líquidos ni frágiles.
                  </p>
              </div>
          </div>

          {/* Bottom Footer Metrics */}
          <div className="border-t border-white/10 pt-4 mt-auto">
              <div className="grid grid-cols-3 gap-0 bg-black/30 rounded-xl overflow-hidden border border-white/5">
                  <div className="p-4 text-center border-r border-white/10">
                      <p className="text-[10px] font-bold text-accent mb-1 uppercase tracking-tighter">2da Visita</p>
                      <p className="text-xs font-medium">100% Bonificada</p>
                  </div>
                  <div className="p-4 text-center border-r border-white/10">
                      <p className="text-[10px] font-bold text-accent mb-1 uppercase tracking-tighter">Devoluciones</p>
                      <p className="text-xs font-medium">50% valor original</p>
                  </div>
                  <div className="p-4 text-center">
                      <p className="text-[10px] font-bold text-accent mb-1 uppercase tracking-tighter">Clima (Lluvia)</p>
                      <p className="text-xs font-medium">Recargo del 30%</p>
                  </div>
              </div>
          </div>
        </main>

        {/* Footer Section */}
        <PageFooter pageNumber="5 / 11" />
      </div>
    </div>
  );
}
