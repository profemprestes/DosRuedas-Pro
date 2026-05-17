import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { Rocket, Phone, Globe, Mail, MapPin } from 'lucide-react';

export default function Pagina11() {
  return (
    <div className="flex flex-col justify-between w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] overflow-hidden box-border bg-primary relative text-white font-body shadow-2xl print:shadow-none" suppressHydrationWarning>
      {/* Background Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(253,195,34,0.04)_0%,_transparent_70%)] z-10" />

      <div className="relative z-20 flex flex-col h-full p-[16mm] justify-between box-border">
        {/* Unified Top Header Component */}
        <PageHeader badgeText="ESCALEMOS JUNTOS" />

        {/* Main Content Layout Optimized for Closing Page */}
        <main className="flex-1 flex flex-col items-center justify-center overflow-hidden gap-4 mt-2">
          
          {/* Rocket Badge Component */}
          <div className="relative shrink-0 mb-1">
            <div className="w-20 h-18 bg-accent rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(251,189,8,0.15)] -rotate-3 border border-white/10">
              <Rocket className="w-8 h-8 text-primary rotate-3" strokeWidth={2.5} />
            </div>
          </div>

          {/* Core Closing Headline */}
          <div className="text-center shrink-0 mb-1">
            <h1 className="text-4xl font-black font-headline tracking-tighter mb-1 italic leading-none uppercase skew-x-[-5deg]">
              ESCALEMOS JUNTOS
            </h1>
            <p className="text-accent text-sm font-bold italic tracking-[0.18em] uppercase font-headline">
              EL MOTOR DE SU ÚLTIMA MILLA
            </p>
          </div>

          {/* Process Flow Card - Compact and Styled */}
          <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md shadow-xl shrink-0">
            <h2 className="text-center font-bold tracking-[0.2em] text-[10px] mb-4 text-gray-400 uppercase">
              COMENZAR A OPERAR ES MUY SIMPLE
            </h2>

            <div className="space-y-3.5">
              {[
                { n: 1, t: "Escribe por WhatsApp", d: "Nos pasas la información de tu envío de forma inmediata." },
                { n: 2, t: "Coordinamos el retiro", d: "Retiramos por tu domicilio de forma ágil y rápida." },
                { n: 3, t: "¡Y listo!", d: "Tu cliente recibe su paquete en tiempo y forma." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-9 h-9 bg-emerald-500 rounded-xl flex items-center justify-center font-black text-sm text-primary shadow-md shadow-emerald-500/10">
                    {step.n}
                  </div>
                  <div className="pt-0.5">
                    <h4 className="text-white font-bold text-sm leading-tight uppercase font-headline">{step.t}</h4>
                    <p className="text-gray-400 text-xs font-medium mt-0.5">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Button - Balanced Proportions */}
          <a 
            href="https://wa.me/542236602699" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-emerald-500 hover:bg-emerald-400 transition-all px-8 py-3 rounded-full flex items-center gap-3 shadow-[0_0_25px_rgba(16,185,129,0.25)] text-primary hover:scale-102 shrink-0 my-1"
          >
            <Phone className="w-5 h-5 fill-primary" />
            <span className="text-xl font-black font-headline tracking-tight">223-6602699</span>
          </a>

          {/* Executive CEO Contact Signature Block */}
          <div className="w-full max-w-xs border border-accent/20 rounded-2xl p-4 text-center bg-accent/5 backdrop-blur-sm shadow-xl shrink-0">
            <h3 className="text-base font-black tracking-tight mb-0.5 uppercase text-white font-headline">
              MATIAS NICOLAS CEJAS
            </h3>
            <p className="text-accent text-[9px] font-bold tracking-[0.3em] mb-3 uppercase opacity-90">
              FUNDADOR & CEO
            </p>

            <div className="w-1/2 h-[1px] bg-white/10 mx-auto mb-3"></div>

            <div className="space-y-2 text-[10px] font-semibold tracking-wider text-gray-400 uppercase">
              <div className="flex items-center justify-center gap-2">
                <Globe className="w-3.5 h-3.5 text-accent" />
                <span className="text-gray-300 tracking-normal font-medium">www.enviosdosruedas.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent" />
                <span className="text-gray-300 lowercase tracking-normal font-medium">MatiasCejas@enviosdosruedas.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span className="text-gray-300 tracking-normal font-medium">Mar del Plata, Buenos Aires</span>
              </div>
            </div>
          </div>
        </main>

        {/* Unified Bottom Footer Component */}
        <PageFooter pageNumber="11 / 11" />
      </div>
    </div>
  );
}