import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { Rocket, Phone, Globe, Mail, MapPin } from 'lucide-react';

export default function Pagina11() {
  return (
    <div className="flex flex-col justify-between w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] overflow-hidden box-border bg-primary relative text-white font-body" suppressHydrationWarning>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(253,195,34,0.06)_0%,_transparent_70%)] z-10" />

      <div className="relative z-20 flex flex-col h-full p-16 justify-between box-border">
        <PageHeader badgeText="ESCALEMOS JUNTOS" />

        <main className="flex-1 flex flex-col items-center justify-center overflow-hidden gap-8">
          <div className="relative shrink-0">
            <div className="w-28 h-24 bg-accent rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(251,189,8,0.2)] -rotate-3 border-2 border-white/10">
              <Rocket className="w-12 h-12 text-primary rotate-3" strokeWidth={2.5} />
            </div>
          </div>

          <div className="text-center shrink-0">
            <h1 className="text-6xl font-black font-headline tracking-tighter mb-2 italic leading-none">ESCALEMOS JUNTOS</h1>
            <p className="text-accent text-2xl font-black italic tracking-[0.2em] uppercase font-headline">EL MOTOR DE SU ÚLTIMA MILLA</p>
          </div>

          <div className="w-full max-w-lg bg-white/5 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-md shadow-2xl flex-grow flex flex-col justify-center">
            <h2 className="text-center font-black tracking-[0.3em] text-xs mb-10 opacity-50 uppercase">COMENZAR A OPERAR ES MUY SIMPLE:</h2>

            <div className="space-y-8">
              {[
                { n: 1, t: "Escribe por WhatsApp", d: "Nos pasas la información de tu envío de forma inmediata." },
                { n: 2, t: "Coordinamos el retiro", d: "Retiramos por tu domicilio de forma ágil y rápida." },
                { n: 3, t: "¡Y listo!", d: "Tu cliente recibe su paquete en tiempo y forma." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center font-black text-xl text-primary shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">{step.n}</div>
                  <div className="pt-1">
                    <h4 className="text-white font-black text-lg leading-tight uppercase font-headline">{step.t}</h4>
                    <p className="text-slate-400 text-sm font-medium">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <a href="https://wa.me/542236602699" target="_blank" rel="noopener noreferrer" className="bg-emerald-500 hover:bg-emerald-400 transition-all px-12 py-5 rounded-full flex items-center gap-4 shadow-[0_0_30px_rgba(16,185,129,0.3)] text-primary hover:scale-105 shrink-0">
            <Phone className="w-8 h-8 fill-primary" />
            <span className="text-4xl font-black font-headline tracking-tighter">223-6602699</span>
          </a>

          <div className="w-full max-w-md border border-accent/30 rounded-3xl p-8 text-center relative mt-auto bg-accent/5 backdrop-blur-sm shadow-xl">
            <h3 className="text-2xl font-black tracking-tight mb-1 uppercase text-white font-headline">MATIAS NICOLAS CEJAS</h3>
            <p className="text-accent text-xs font-black tracking-[0.4em] mb-6 uppercase opacity-80">FUNDADOR & CEO</p>

            <div className="w-2/3 h-[1px] bg-white/10 mx-auto mb-6"></div>

            <div className="space-y-3 text-[11px] font-bold tracking-widest text-slate-300 uppercase">
              <div className="flex items-center justify-center gap-3">
                <Globe className="w-4 h-4 text-accent" />
                <span>www.enviosdosruedas.com</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span>MatiasCejas@enviosdosruedas.com</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Mar del Plata, Buenos Aires</span>
              </div>
            </div>
          </div>
        </main>

        <PageFooter pageNumber="11 / 11" />
      </div>
    </div>
  );
}
