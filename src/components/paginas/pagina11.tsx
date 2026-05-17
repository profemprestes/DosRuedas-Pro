import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { Rocket, Phone, Globe, Mail, MapPin } from 'lucide-react';

export default function Pagina11() {
  return (
    <div className="a4-container mx-auto bg-primary relative overflow-hidden flex flex-col shadow-2xl text-white font-body" suppressHydrationWarning>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/80 via-primary to-primary z-10" />

      <div className="relative z-20 flex flex-col h-full justify-between max-h-full p-10">
        <PageHeader badgeText="ESCALEMOS JUNTOS" />

        <main className="flex-1 flex flex-col items-center justify-center py-6 px-6 overflow-hidden">
        
          <div className="relative mb-6 shrink-0">
            <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(251,189,8,0.3)]">
              <Rocket className="w-12 h-12 text-primary fill-primary" />
            </div>
          </div>

          <div className="text-center mb-8 shrink-0">
            <h1 className="text-5xl font-black tracking-tighter mb-2 italic skew-x-[-5deg] uppercase font-headline">
              Escalemos Juntos
            </h1>
            <p className="text-accent text-xl font-bold tracking-[0.2em] uppercase font-headline">
              El Motor de su Última Milla
            </p>
          </div>

          <div className="w-full max-w-lg bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md mb-8 shrink-0 shadow-xl">
            <h2 className="text-center font-bold tracking-widest text-sm mb-8 text-gray-300 uppercase font-headline">
              Comenzar a operar es muy simple:
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-500 text-primary rounded-full flex items-center justify-center font-black font-headline text-lg shadow-[0_0_15px_rgba(16,185,129,0.4)]">1</div>
                <p className="text-gray-200 text-sm leading-snug">
                  Nos escribe por <strong className="text-white">WhatsApp</strong> y nos pasa la información de su envío.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-500 text-primary rounded-full flex items-center justify-center font-black font-headline text-lg shadow-[0_0_15px_rgba(16,185,129,0.4)]">2</div>
                <p className="text-gray-200 text-sm leading-snug">
                  <strong className="text-white">Coordinamos el retiro</strong> de la mercadería por su domicilio de forma ágil y rápida.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-500 text-primary rounded-full flex items-center justify-center font-black font-headline text-lg shadow-[0_0_15px_rgba(16,185,129,0.4)]">3</div>
                <p className="text-gray-200 text-sm leading-snug">
                  <strong className="text-white">¡Y listo!</strong> Un cadete estará entregando en tiempo y forma felicidad a sus clientes.
                </p>
              </div>
            </div>
          </div>

          <a href="#" className="bg-emerald-500 hover:bg-emerald-400 text-primary transition-all px-10 py-4 rounded-full flex items-center gap-4 mb-8 shrink-0 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            <Phone className="w-8 h-8 fill-primary" />
            <span className="text-3xl font-black tracking-tighter font-headline">223-6602699</span>
          </a>

          <div className="w-full max-w-md border border-accent/30 bg-black/20 rounded-xl p-8 text-center shrink-0 mt-auto">
            <h3 className="text-2xl font-black tracking-wide mb-1 uppercase font-headline">Matias Nicolas Cejas</h3>
            <p className="text-accent text-xs font-bold tracking-[0.3em] mb-6 uppercase">Fundador & CEO</p>
            
            <div className="w-3/4 h-[1px] bg-white/10 mx-auto mb-6"></div>
            
            <div className="space-y-3 text-xs font-medium text-gray-400">
              <div className="flex items-center justify-center gap-3">
                <Globe className="w-4 h-4 text-accent" />
                <span className="hover:text-white transition-colors">www.enviosdosruedas.com</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="hover:text-white transition-colors">MatiasCejas@enviosdosruedas.com</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="hover:text-white transition-colors">Mar del Plata, Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>

        </main>

        <PageFooter pageNumber="11 / 11" />
      </div>
    </div>
  );
}