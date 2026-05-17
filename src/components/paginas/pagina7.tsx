import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { CheckCircle2, Star, CreditCard, Layers } from 'lucide-react';

export default function Pagina7() {
  return (
    <div className="flex flex-col justify-between w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] overflow-hidden box-border bg-primary relative text-white font-body" suppressHydrationWarning>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(253,195,34,0.08)_0%,_transparent_60%)] z-10" />

      <div className="relative z-20 flex flex-col h-full p-16 justify-between box-border">
        <PageHeader badgeText="CUENTA CORRIENTE" />

        <main className="flex-1 flex flex-col justify-center overflow-hidden gap-8">
          <section className="shrink-0">
            <h1 className="text-6xl font-black font-headline mb-2 tracking-tight leading-none">
              CUENTA CORRIENTE <span className="text-accent italic">FLEXIBLE</span>
            </h1>
            <div className="flex items-center gap-3">
              <Layers className="w-6 h-6 text-accent" />
              <p className="text-accent italic font-bold text-lg tracking-[0.15em] uppercase font-headline">
                SIMPLICIDAD PARA NEGOCIOS SIN VOLUMEN FIJO
              </p>
            </div>
          </section>

          <section className="shrink-0">
            <div className="bg-blue-950/40 border-l-[8px] border-accent rounded-r-3xl p-10 backdrop-blur-md shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <CreditCard className="w-32 h-32" />
              </div>
              <p className="text-slate-200 text-lg leading-relaxed font-medium relative z-10">
                Diseñado para empresas que buscan profesionalizar sus envíos con <strong className="text-white underline decoration-accent decoration-2">flexibilidad total</strong>. Acceda a los mejores beneficios logísticos del mercado trabajando de forma exclusiva, sin importar la variabilidad de su volumen diario.
              </p>
            </div>
          </section>

          <div className="grid grid-cols-2 gap-12 flex-grow max-h-[40%]">
            <section className="flex flex-col gap-6">
              <h3 className="text-accent font-black tracking-[0.2em] mb-4 text-xs uppercase font-headline border-b border-accent/20 pb-2">Beneficios Exclusivos</h3>
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="bg-emerald-500 rounded-full p-1 shadow-lg shadow-emerald-500/20 shrink-0 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-primary" strokeWidth={3} />
                  </div>
                  <p className="text-sm font-semibold text-slate-300 leading-snug">
                    <strong className="text-white text-lg block mb-1">Servicio Express, Valor LowCost</strong> 
                    Abona la tarifa económica pero goza de condiciones Express: elección de rango horario y recepción hasta las 15:00hs.
                  </p>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-emerald-500 rounded-full p-1 shadow-lg shadow-emerald-500/20 shrink-0 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-primary" strokeWidth={3} />
                  </div>
                  <p className="text-sm font-semibold text-slate-300 leading-snug">
                    <strong className="text-white text-lg block mb-1">Flexibilidad en Pagos</strong> 
                    Gestione el costo del envío de forma centralizada o permita que el cliente final abone en destino al recibir.
                  </p>
                </div>
              </div>
            </section>

            <section className="flex flex-col gap-6">
              <h3 className="text-accent font-black tracking-[0.2em] mb-4 text-xs uppercase font-headline border-b border-accent/20 pb-2">Frecuencia de Cierre</h3>
              <div className="grid grid-cols-2 gap-3 flex-grow">
                {["DIARIO", "SEMANAL", "QUINCENAL"].map((f, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-center text-center">
                    <span className="text-slate-300 font-black text-xs tracking-widest">{f}</span>
                  </div>
                ))}
                <div className="bg-accent text-primary rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-xl scale-105 border-2 border-primary/20">
                  <span className="font-black text-sm tracking-widest">MENSUAL</span>
                  <span className="text-[10px] font-bold opacity-70">RECOMENDADO</span>
                </div>
              </div>
            </section>
          </div>

          <section className="shrink-0 mt-auto">
            <div className="bg-black/30 border border-white/10 rounded-3xl p-8">
              <div className="grid grid-cols-4 gap-4 mb-6">
                {[
                  { l: "LLUVIA", v: "+50%" },
                  { l: "BULTO", v: "+$1.800" },
                  { l: "DEMORA", v: "+$2.200" },
                  { l: "VUELTA", v: "50%" },
                ].map((c, i) => (
                  <div key={i} className="bg-primary/50 py-3 px-2 rounded-xl text-center border border-white/5 shadow-inner">
                    <span className="text-slate-400 text-[10px] block font-black mb-1">{c.l}</span>
                    <span className="text-white font-black text-sm">{c.v}</span>
                  </div>
                ))}
              </div>

              <div className="bg-emerald-900/30 border border-emerald-500/30 rounded-2xl p-6 text-center shadow-2xl">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Star className="h-6 w-6 text-emerald-400 fill-emerald-400" />
                  <h5 className="text-emerald-400 font-black text-xl font-headline tracking-tighter">2DA VISITA BONIFICADA AL 50%</h5>
                </div>
                <p className="text-slate-300 text-sm font-medium">
                  Optimizamos la frustración del ausente: si el cliente no está, la segunda gestión tiene un costo preferencial.
                </p>
              </div>
            </div>
          </section>
        </main>

        <PageFooter pageNumber="7 / 11" />
      </div>
    </div>
  );
}
