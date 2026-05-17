import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { CheckCircle2, Star, CreditCard, Layers } from 'lucide-react';

export default function Pagina7() {
  return (
    <div className="flex flex-col justify-between w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] overflow-hidden box-border bg-primary relative text-white font-body shadow-2xl print:shadow-none" suppressHydrationWarning>
      {/* Background Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(253,195,34,0.06)_0%,_transparent_60%)] z-10" />

      <div className="relative z-20 flex flex-col h-full p-[16mm] justify-between box-border">
        {/* Unified Top Header Component */}
        <PageHeader badgeText="CUENTA CORRIENTE" />

        {/* Main Content Layout Optimized for A4 Envelope */}
        <main className="flex-1 flex flex-col overflow-hidden mt-4 gap-4">
          
          {/* Main Title Section */}
          <section className="shrink-0">
            <h1 className="text-4xl font-black font-headline mb-1 tracking-tight leading-none uppercase italic skew-x-[-5deg]">
              CUENTA CORRIENTE <span className="text-accent">FLEXIBLE</span>
            </h1>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-accent" />
              <p className="text-accent italic font-bold text-xs tracking-[0.12em] uppercase font-headline">
                SIMPLICIDAD PARA NEGOCIOS SIN VOLUMEN FIJO
              </p>
            </div>
          </section>

          {/* Intro Callout Card */}
          <section className="shrink-0">
            <div className="bg-blue-950/40 border-l-4 border-accent rounded-r-2xl p-5 backdrop-blur-md border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-5 pointer-events-none">
                <CreditCard className="w-24 h-24" />
              </div>
              <p className="text-gray-300 text-[14px] leading-relaxed font-medium relative z-10">
                Diseñado para empresas que buscan profesionalizar sus envíos con <strong className="text-white underline decoration-accent decoration-2">flexibilidad total</strong>. Acceda a los mejores beneficios logísticos del mercado trabajando de forma exclusiva, sin importar la variabilidad de su volumen diario.
              </p>
            </div>
          </section>

          {/* Core Split Grid Section */}
          <div className="grid grid-cols-2 gap-6 shrink-0">
            {/* Left Column: Benefits */}
            <section className="flex flex-col">
              <h3 className="text-accent font-black tracking-[0.2em] mb-3 text-[11px] uppercase font-headline border-b border-white/10 pb-1.5 italic">
                Beneficios Exclusivos
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="bg-emerald-500 rounded-full p-0.5 shadow-lg shadow-emerald-500/20 shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" strokeWidth={3} />
                  </div>
                  <div>
                    <strong className="text-gray-100 text-sm font-bold block mb-0.5">Servicio Express, Valor LowCost</strong> 
                    <p className="text-xs text-gray-400 leading-normal">
                      Abona la tarifa económica pero goza de condiciones Express: elección de rango horario y recepción hasta las 15:00hs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="bg-emerald-500 rounded-full p-0.5 shadow-lg shadow-emerald-500/20 shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" strokeWidth={3} />
                  </div>
                  <div>
                    <strong className="text-gray-100 text-sm font-bold block mb-0.5">Flexibilidad en Pagos</strong> 
                    <p className="text-xs text-gray-400 leading-normal">
                      Gestione el costo del envío de forma centralizada o permita que el cliente final abone en destino al recibir.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Right Column: Frequencies */}
            <section className="flex flex-col">
              <h3 className="text-accent font-black tracking-[0.2em] mb-3 text-[11px] uppercase font-headline border-b border-white/10 pb-1.5 italic">
                Frecuencia de Cierre
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                {["DIARIO", "SEMANAL", "QUINCENAL"].map((f, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center justify-center text-center backdrop-blur-sm">
                    <span className="text-gray-400 font-bold text-[11px] tracking-wider">{f}</span>
                  </div>
                ))}
                <div className="bg-accent text-primary rounded-xl p-3 flex flex-col items-center justify-center text-center shadow-lg border border-accent">
                  <span className="font-black text-[11px] tracking-wider leading-none">MENSUAL</span>
                  <span className="text-[8px] font-black opacity-80 mt-0.5">RECOMENDADO</span>
                </div>
              </div>
            </section>
          </div>

          {/* Bottom Conditions and Bonifications Panel */}
          <section className="shrink-0 mt-2">
            <div className="bg-black/20 border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-md">
              {/* Micro Metric Grid */}
              <div className="grid grid-cols-4 gap-3 mb-4">
                {[
                  { l: "LLUVIA", v: "+50%" },
                  { l: "BULTO", v: "+$1.800" },
                  { l: "DEMORA", v: "+$2.200" },
                  { l: "VUELTA", v: "50%" },
                ].map((c, i) => (
                  <div key={i} className="bg-primary/40 py-2.5 px-2 rounded-xl text-center border border-white/5 shadow-inner">
                    <span className="text-gray-400 text-[9px] block font-bold tracking-wider mb-0.5">{c.l}</span>
                    <span className="text-white font-black text-sm tracking-tight">{c.v}</span>
                  </div>
                ))}
              </div>

              {/* Highlighted Bonification Banner */}
              <div className="bg-emerald-950/30 border border-emerald-500/20 rounded-xl p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-1.5">
                  <Star className="h-5 w-5 text-emerald-400 fill-emerald-400 animate-pulse" />
                  <h5 className="text-emerald-400 font-black text-base font-headline tracking-tight uppercase italic skew-x-[-3deg]">
                    2DA VISITA BONIFICADA AL 50%
                  </h5>
                </div>
                <p className="text-gray-300 text-xs font-medium leading-relaxed">
                  Optimizamos la frustración del ausente: si el cliente no está, la segunda gestión tiene un costo preferencial.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Unified Bottom Footer Component */}
        <PageFooter pageNumber="7 / 11" />
      </div>
    </div>
  );
}