import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { Rocket, Phone, Globe, Mail, MapPin } from 'lucide-react';

export default function Pagina11() {
  return (
    <div className="mx-auto w-[210mm] h-[297mm] bg-primary relative overflow-hidden flex flex-col shadow-2xl text-white font-montserrat" suppressHydrationWarning>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/95 z-10" />

      <div className="relative z-20 flex flex-col h-full p-16">
        {/* Header Section */}
        <PageHeader badgeText="ESCALEMOS JUNTOS" />

        <main className="flex-grow flex flex-col items-center justify-center py-6">

            {/* Header / Rocket Icon */}
            <div className="relative mb-6">
                <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(251,189,8,0.3)]">
                    <Rocket className="w-12 h-12 text-primary" strokeWidth={2.5} />
                </div>
            </div>

            {/* Title Section */}
            <div className="text-center mb-8">
                <h1 className="text-5xl font-black tracking-tighter mb-2 italic">ESCALEMOS JUNTOS</h1>
                <p className="text-accent text-xl font-bold italic tracking-widest">EL MOTOR DE SU ÚLTIMA MILLA</p>
            </div>

            {/* Info Card */}
            <div className="w-full max-w-lg bg-black/20 border border-white/10 rounded-2xl p-8 backdrop-blur-sm mb-8">
                <h2 className="text-center font-bold tracking-widest text-sm mb-8">COMENZAR A OPERAR ES MUY SIMPLE:</h2>

                <div className="space-y-6">
                    {/* Step 1 */}
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-lg text-primary">1</div>
                        <p className="text-gray-200 text-sm leading-tight pt-2">
                            Nos escribe por <span className="font-bold text-white">WhatsApp</span> y nos pasa la información de su envío.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-lg text-primary">2</div>
                        <p className="text-gray-200 text-sm leading-tight pt-1">
                            <span className="font-bold text-white">Coordinamos el retiro</span> de la mercadería por su domicilio de forma ágil y rápida.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-lg text-primary">3</div>
                        <p className="text-gray-200 text-sm leading-tight pt-1">
                            <span className="font-bold text-white">¡Y listo!</span> Un cadete estará entregando en tiempo y forma felicidad a sus clientes.
                        </p>
                    </div>
                </div>
            </div>

            {/* WhatsApp Button */}
            <a href="#" className="bg-emerald-500 hover:bg-emerald-400 transition-all px-10 py-4 rounded-full flex items-center gap-4 mb-10 shadow-[0_0_20px_rgba(16,185,129,0.4)] text-primary">
                <Phone className="w-8 h-8" strokeWidth={2.5} />
                <span className="text-3xl font-bold tracking-tight">223-6602699</span>
            </a>

            {/* Footer Card */}
            <div className="w-full max-w-md border border-accent rounded-xl p-8 text-center relative mt-auto">
                <h3 className="text-2xl font-bold tracking-wide mb-1 uppercase text-white">MATIAS NICOLAS CEJAS</h3>
                <p className="text-accent text-xs font-bold tracking-[0.3em] mb-6 uppercase">FUNDADOR & CEO</p>

                <div className="w-4/5 h-[1px] bg-white/20 mx-auto mb-6"></div>

                <div className="space-y-4 text-xs tracking-wider text-gray-300">
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
                        <span>Mar del Plata, Buenos Aires, Argentina</span>
                    </div>
                </div>
            </div>
        </main>

        {/* Footer Section */}
        <PageFooter pageNumber="11 / 11" />
      </div>
    </div>
  );
}
