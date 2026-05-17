import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { CheckCircle2, CloudRain, Package, Clock, Undo2, CalendarCheck, ShieldCheck } from 'lucide-react';

export default function Pagina7() {
  return (
    <div className="a4-container mx-auto bg-primary relative overflow-hidden flex flex-col shadow-2xl text-white font-body" suppressHydrationWarning>
      {/* Fondo degradado */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary/70 z-10" />

      <div className="relative z-20 flex flex-col h-full justify-between max-h-full p-10">
        <PageHeader badgeText="CUENTA CORRIENTE" />

        <main className="flex-1 flex flex-col mt-2 mb-2 gap-4 overflow-hidden">
          
          {/* Encabezado del Título */}
          <section className="shrink-0">
            <h1 className="text-5xl font-black font-headline tracking-tight uppercase leading-none mb-1.5 italic skew-x-[-5deg]">
              CUENTA CORRIENTE <span className="text-accent">FLEXIBLE</span>
            </h1>
            <p className="text-accent italic font-bold text-base tracking-[0.15em] font-headline">
              SIMPLICIDAD PARA NEGOCIOS SIN VOLUMEN FIJO
            </p>
          </section>

          {/* Caja Descriptiva */}
          <section className="shrink-0">
            <div className="bg-secondary/50 backdrop-blur-sm border-l-4 border-accent rounded-r-xl p-5 shadow-md">
              <p className="text-gray-200 text-[14px] leading-relaxed font-medium">
                Diseñado especialmente para emprendedores y empresas que buscan simplificar y profesionalizar sus envíos, pero que no cuentan con un volumen fijo o este es muy variable. Al trabajar de forma exclusiva con nosotros, accede a los mejores beneficios logísticos.
              </p>
            </div>
          </section>

          {/* Grilla Simétrica de Contenido */}
          <div className="flex-1 grid grid-cols-2 gap-6 min-h-0 my-1">
            
            {/* Beneficios Exclusivos */}
            <section className="flex flex-col gap-3 justify-center">
              <h3 className="text-accent font-black font-headline tracking-widest text-xs border-b border-white/10 pb-2 uppercase">
                BENEFICIOS EXCLUSIVOS
              </h3>
              <div className="space-y-3">
                <div className="flex gap-3 bg-white/5 p-4 rounded-xl border border-white/5 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-[12.5px] text-gray-300 leading-relaxed">
                    <strong className="text-white">Valor LowCost, Servicio Express:</strong> Abona la tarifa económica (LowCost), pero goza de las condiciones de envío Express: <span className="text-white font-bold underline decoration-accent underline-offset-2">elección de rango horario</span>, límite de recepción hasta 15:00hs, y un mínimo de 2hs de anticipación.
                  </p>
                </div>

                <div className="flex gap-3 bg-white/5 p-4 rounded-xl border border-white/5 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-[12.5px] text-gray-300 leading-relaxed">
                    <strong className="text-white">Flexibilidad Total en Pagos:</strong> El envío puede ser abonado por usted (quien lo solicita) o por el cliente que recibe en destino.
                  </p>
                </div>
              </div>
            </section>

            {/* Frecuencia de Cierre */}
            <section className="flex flex-col gap-3 justify-center">
              <h3 className="text-accent font-black font-headline tracking-widest text-xs border-b border-white/10 pb-2 uppercase flex items-center gap-2">
                <CalendarCheck className="w-4 h-4" /> FRECUENCIA DE CIERRE A ELECCIÓN
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {["Diario (x Envío)", "Semanal", "Quincenal"].map((freq, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-center justify-center text-center shadow-md">
                    <span className="text-gray-300 font-bold text-xs uppercase tracking-wider">{freq}</span>
                  </div>
                ))}
                {/* Mensual Destacado Corporativo */}
                <div className="bg-accent/10 border-2 border-accent rounded-xl p-3.5 flex items-center justify-center text-center shadow-lg">
                  <span className="text-accent font-black font-headline text-xs uppercase tracking-widest">Mensual</span>
                </div>
              </div>
            </section>

          </div>

          {/* Bloque de Condiciones Operativas Inferiores */}
          <section className="shrink-0 mt-auto bg-black/40 border border-white/10 rounded-2xl p-5">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] bg-white/10 flex-grow"></div>
              <h4 className="text-accent font-bold tracking-widest text-[10px] uppercase font-headline">
                CONDICIONES OPERATIVAS ADICIONALES
              </h4>
              <div className="h-[1px] bg-white/10 flex-grow"></div>
            </div>

            <div className="grid grid-cols-4 gap-3 mb-4">
              {[
                { icon: <CloudRain className="w-4 h-4 text-blue-400" />, title: "LLUVIA: +50%" },
                { icon: <Package className="w-4 h-4 text-gray-400" />, title: "BULTO: +$1.800" },
                { icon: <Clock className="w-4 h-4 text-accent" />, title: "DEMORA: +$2.200" },
                { icon: <Undo2 className="w-4 h-4 text-purple-400" />, title: "VUELTA: 50%" },
              ].map((item, idx) => (
                <div key={idx} className="bg-primary border border-white/5 py-2 px-1 rounded-lg flex items-center justify-center gap-2 shadow-inner">
                  {item.icon}
                  <span className="text-gray-300 text-[10px] font-bold tracking-tight">{item.title}</span>
                </div>
              ))}
            </div>

            {/* Banner de 2da Visita */}
            <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-3 text-center flex items-center justify-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <p className="text-gray-300 text-[12px] font-medium">
                <span className="text-emerald-400 font-bold uppercase font-headline mr-1">2da Visita Bonificada:</span>
                Si el cliente final está ausente, la 2da visita se cobra solo al <strong className="text-white">50% del valor original</strong>.
              </p>
            </div>
          </section>

        </main>

        <PageFooter pageNumber="7 / 11" />
      </div>
    </div>
  );
}