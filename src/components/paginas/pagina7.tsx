import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { Check, Star } from 'lucide-react';

export default function Pagina7() {
  return (
    <div className="mx-auto w-[210mm] h-[297mm] bg-primary relative overflow-hidden flex flex-col shadow-2xl text-white font-montserrat" suppressHydrationWarning>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/95 z-10" />

      <div className="relative z-20 flex flex-col h-full p-16">
        {/* Header Section */}
        <PageHeader badgeText="CUENTA CORRIENTE" />

        <main className="flex-grow flex flex-col">
            {/* Main Title Section */}
            <section className="mb-6">
                <h1 className="text-5xl md:text-6xl font-black mb-2 tracking-tight">
                    CUENTA CORRIENTE <span className="text-accent">FLEXIBLE</span>
                </h1>
                <p className="text-accent italic font-medium text-lg tracking-[0.15em]">
                    SIMPLICIDAD PARA NEGOCIOS SIN VOLUMEN FIJO
                </p>
            </section>

            {/* Description Box */}
            <section className="mb-6">
                <div className="bg-blue-950/30 border-l-[6px] border-accent rounded-r-xl p-6 relative">
                    <p className="text-slate-200 text-sm md:text-base leading-relaxed font-medium">
                        Diseñado especialmente para emprendedores y empresas que buscan simplificar y profesionalizar sus envíos, pero que no cuentan con un volumen fijo o este es muy variable. Al trabajar de forma exclusiva con nosotros, accede a los mejores beneficios logísticos.
                    </p>
                </div>
            </section>

            {/* Content Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-auto flex-grow">
                {/* Beneficios */}
                <section className="flex flex-col">
                    <h3 className="text-accent font-bold tracking-widest mb-4 text-sm uppercase">Beneficios Exclusivos</h3>
                    <div className="space-y-6 flex-grow flex flex-col justify-center">
                        <div className="flex gap-4 items-start">
                            <div className="mt-1 flex-shrink-0">
                                <div className="bg-emerald-500 rounded-full p-1">
                                    <Check className="h-4 w-4 text-primary" strokeWidth={4} />
                                </div>
                            </div>
                            <p className="text-sm text-slate-300 leading-snug">
                                <strong className="text-white">Valor LowCost, Servicio Express:</strong> Abona la tarifa económica (LowCost), pero goza de las condiciones de envío Express: <span className="text-white font-bold underline decoration-accent">elección de rango horario</span>, límite de recepción hasta 15:00hs, y un mínimo de 2hs de anticipación.
                            </p>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="mt-1 flex-shrink-0">
                                <div className="bg-emerald-500 rounded-full p-1">
                                    <Check className="h-4 w-4 text-primary" strokeWidth={4} />
                                </div>
                            </div>
                            <p className="text-sm text-slate-300 leading-snug">
                                <strong className="text-white">Flexibilidad Total en Pagos:</strong> El envío puede ser abonado por usted (quien lo solicita) o por el cliente que recibe en destino.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Frecuencia */}
                <section className="flex flex-col">
                    <h3 className="text-accent font-bold tracking-widest mb-4 text-sm uppercase">Frecuencia de cierre a elección</h3>
                    <div className="grid grid-cols-2 gap-3 flex-grow content-center">
                        <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-5 flex items-center justify-center text-center">
                            <span className="text-slate-200 font-bold text-xs uppercase tracking-wider">Diario (x Envío)</span>
                        </div>
                        <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-5 flex items-center justify-center text-center">
                            <span className="text-slate-200 font-bold text-xs uppercase tracking-wider">Semanal</span>
                        </div>
                        <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-5 flex items-center justify-center text-center">
                            <span className="text-slate-200 font-bold text-xs uppercase tracking-wider">Quincenal</span>
                        </div>
                        <div className="bg-accent/10 border-2 border-accent rounded-xl p-5 flex items-center justify-center text-center">
                            <span className="text-accent font-bold text-xs uppercase tracking-wider">Mensual</span>
                        </div>
                    </div>
                </section>
            </div>

            {/* Additional Conditions Box */}
            <section className="mt-6">
                <div className="bg-black/30 border border-white/10 rounded-2xl p-6">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-px bg-white/20 flex-grow"></div>
                        <h4 className="text-slate-200 font-bold tracking-widest text-xs whitespace-nowrap uppercase">Condiciones Operativas Adicionales</h4>
                        <div className="h-px bg-white/20 flex-grow"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="bg-primary py-3 px-2 rounded-lg text-center border border-white/5">
                            <span className="text-slate-400 text-[10px] block font-bold uppercase tracking-wider">Lluvia: +50%</span>
                        </div>
                        <div className="bg-primary py-3 px-2 rounded-lg text-center border border-white/5">
                            <span className="text-slate-400 text-[10px] block font-bold uppercase tracking-wider">Bulto: +$1.800</span>
                        </div>
                        <div className="bg-primary py-3 px-2 rounded-lg text-center border border-white/5">
                            <span className="text-slate-400 text-[10px] block font-bold uppercase tracking-wider">Demora: +$2.200</span>
                        </div>
                        <div className="bg-primary py-3 px-2 rounded-lg text-center border border-white/5">
                            <span className="text-slate-400 text-[10px] block font-bold uppercase tracking-wider">Vuelta: 50%</span>
                        </div>
                    </div>

                    <div className="bg-emerald-900/20 border border-emerald-500/50 rounded-xl p-4 text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                            <Star className="h-5 w-5 text-emerald-400 fill-emerald-400" />
                            <h5 className="text-emerald-400 font-black text-lg tracking-tight">2DA VISITA BONIFICADA</h5>
                        </div>
                        <p className="text-slate-300 text-xs font-medium">
                            Si el cliente final está ausente, la <span className="text-white font-bold">2da visita se cobra solo al 50%</span> del valor original.
                        </p>
                    </div>
                </div>
            </section>
        </main>

        {/* Footer Section */}
        <PageFooter pageNumber="7 / 11" />
      </div>
    </div>
  );
}
