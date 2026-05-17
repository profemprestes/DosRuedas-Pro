import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { CheckCircle2, CloudRain, Package, Clock, Undo2, CalendarCheck, ShieldCheck } from 'lucide-react';

export default function Pagina7() {
  return (
    <div className="a4-container mx-auto bg-primary relative overflow-hidden flex flex-col shadow-2xl text-white font-body" suppressHydrationWarning>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary/70 z-10" />

      <div className="relative z-20 flex flex-col h-full justify-between max-h-full p-10">
        <PageHeader badgeText="CUENTA CORRIENTE" />

        <main className="flex-1 flex flex-col mt-4 mb-4 gap-5 overflow-hidden">
          
          {/* Main Title Section */}
          <section className="shrink-0">
            <h1 className="text-5xl md:text-6xl font-black font-headline tracking-tight uppercase leading-none mb-2 italic skew-x-[-5deg]">
              CUENTA CORRIENTE <span className="text-accent">FLEXIBLE</span>
            </h1>
            <p className="text-accent italic font-bold text-lg tracking-[0.15em] font-headline">
              SIMPLICIDAD PARA NEGOCIOS SIN VOLUMEN FIJO
            </p>
          </section>

          {/* Description Box */}
          <section className="shrink-0">
            <div className="bg-secondary/50 backdrop-blur-sm border-l-4 border-accent rounded-r-xl p-6 shadow-lg">
              <p className="text-gray-200 text-[15px] leading-relaxed font-medium">
                Diseñado especialmente para emprendedores y empresas que buscan simplificar y profesionalizar sus envíos, pero que no cuentan con un volumen fijo o este es muy variable. Al trabajar de forma exclusiva con nosotros, accede a los mejores beneficios logísticos.
              </p>
            </div>
          </section>

          {/* Content Columns - Beneficios y Frecuencia */}
          <div className="flex-1 grid grid-cols-2 gap-8 min-h-0">
            
            {/* Beneficios Exclusivos */}
            <section className="flex flex-col gap-4">
              <h3 className="text-accent font-black font-headline tracking-widest text-sm border-b border-white/10 pb-2 uppercase">
                Beneficios Exclusivos
              </h3>
              <div className="space-y-4 overflow-y-auto pr-2">
                <div className="flex gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-[13px] text-gray-300 leading-relaxed">
                    <strong className="text-white">Valor LowCost, Servicio Express:</strong> Abona la tarifa económica (LowCost), pero goza de las condiciones de envío Express: <span className="text-white font-bold underline decoration-accent underline-offset-2">elección de rango horario</span>, límite de recepción hasta 15:00hs, y un mínimo de 2hs de anticipación.
                  </p>
                </div>

                <div className="flex gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-[13px] text-gray-300 leading-relaxed">
                    <strong className="text-white">Flexibilidad Total en Pagos:</strong> El envío puede ser abonado por usted (quien lo solicita) o por el cliente que recibe en destino.
                  </p>
                </div>
              </div>
            </section>

            {/* Frecuencia de Cierre */}
            <section className="flex flex-col gap-4">
              <h3 className="text-accent font-black font-headline tracking-widest text-sm border-b border-white/10 pb-2 uppercase flex items-center gap-2">
                <CalendarCheck className="w-5 h-5" /> Frecuencia de Cierre
              </h3>
              <div className="grid grid-cols-2 gap-3 flex-1 content-start">
                {["Diario (x Envío)", "Semanal", "Quincenal"].map((freq, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-center text-center shadow-inner">
                    <span className="text-gray-300 font-bold text-xs uppercase tracking-wider">{freq}</span>
                  </div>
                ))}
                {/* Mensual Highlighted */}
                <div className="bg-accent/10 border-2 border-accent rounded-xl p-4 flex items-center justify-center text-center shadow-[0_0_15px_rgba(251,189,8,0.15)]">
                  <span className="text-accent font-black font-headline text-sm uppercase tracking-widest">Mensual</span>
                </div>
              </div>
            </section>

          </div>

          {/* Additional Conditions Box */}
          <section className="shrink-0 mt-auto bg-black/40 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-[1px] bg-white/20 flex-grow"></div>
              <h4 className="text-accent font-bold tracking-widest text-[11px] uppercase font-headline">
                Condiciones Operativas Adicionales
              </h4>
              <div className="h-[1px] bg-white/20 flex-grow"></div>
            </div>

            <div className="grid grid-cols-4 gap-3 mb-5">
              {[
                { icon: <CloudRain className="w-5 h-5 mb-1 text-blue-400" />, title: "LLUVIA", text: "+50%" },
                { icon: <Package className="w-5 h-5 mb-1 text-gray-400" />, title: "BULTO", text: "+$1.800" },
                { icon: <Clock className="w-5 h-5 mb-1 text-accent" />, title: "DEMORA", text: "+$2.200" },
                { icon: <Undo2 className="w-5 h-5 mb-1 text-purple-400" />, title: "VUELTA", text: "50%" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 py-3 px-2 rounded-xl flex flex-col items-center justify-center text-center">
                  {item.icon}
                  <span className="text-gray-400 text-[9px] font-bold tracking-widest mb-0.5">{item.title}</span>
                  <span className="text-white font-bold text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            {/* 2da Visita Banner */}
            <div className="bg-emerald-900/30 border border-emerald-500/40 rounded-xl p-4 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center justify-center gap-2">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
                <h5 className="text-emerald-400 font-black text-sm uppercase font-headline">2DA VISITA BONIFICADA</h5>
              </div>
              <p className="text-gray-300 text-[12px] font-medium border-l border-emerald-500/30 pl-4 text-left">
                Si el cliente final está ausente, la <strong className="text-white">2da visita se cobra solo al 50%</strong> del valor original.
              </p>
            </div>
          </section>

        </main>

        <PageFooter pageNumber="7 / 11" />
      </div>
    </div>
  );
}