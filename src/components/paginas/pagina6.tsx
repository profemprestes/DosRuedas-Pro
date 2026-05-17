import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { Truck, Percent, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Pagina6() {
  return (
    <div className="flex flex-col justify-between w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] overflow-hidden box-border bg-primary relative text-white font-body" suppressHydrationWarning>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(253,195,34,0.05)_0%,_transparent_50%)] z-10" />

      <div className="relative z-20 flex flex-col h-full p-16 justify-between box-border">
        <PageHeader badgeText="E-COMMERCE 24HS" />

        <main className="flex-1 flex flex-col justify-center overflow-hidden gap-6">
          <section className="shrink-0">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-accent/10 p-3 rounded-2xl border border-accent/20">
                <Truck className="w-10 h-10 text-accent" />
              </div>
              <h2 className="text-5xl font-black font-headline tracking-tight leading-none uppercase">
                PLAN E-COMMERCE <span className="text-accent italic">24HS</span>
              </h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
              Escale su tienda online con una tarifa plana previsible. Usted prepara, nosotros retiramos hoy y entregamos mañana. <span className="text-white font-bold underline decoration-accent decoration-2">Costos fijos y rentabilidad garantizada.</span>
            </p>
          </section>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl flex-grow flex flex-col">
            <table className="w-full text-left border-collapse flex-1">
              <thead>
                <tr className="border-b border-white/10 bg-black/20">
                  <th className="px-8 py-5 text-xs font-black text-accent tracking-[0.2em] uppercase">Nivel Comercial</th>
                  <th className="px-8 py-5 text-xs font-black text-accent tracking-[0.2em] uppercase text-center">Volumen Mensual</th>
                  <th className="px-8 py-5 text-xs font-black text-accent tracking-[0.2em] uppercase text-right">Valor x Envío</th>
                </tr>
              </thead>
              <tbody className="text-white font-bold divide-y divide-white/5">
                {[
                  { n: "Inicial", v: "1 a 199 envíos", p: "$3.800" },
                  { n: "Pro", v: "200 a 1.199 envíos", p: "$3.500" },
                  { n: "Elite", v: "1.200 a 1.999 envíos", p: "$3.200", hl: true },
                  { n: "Partner", v: "+2.000 envíos", p: "$3.000" },
                ].map((row, i) => (
                  <tr key={i} className={`hover:bg-white/5 transition-colors ${row.hl ? 'bg-accent/10' : ''}`}>
                    <td className={`px-8 py-5 uppercase text-[15px] ${row.hl ? 'text-accent' : ''}`}>{row.n}</td>
                    <td className="px-8 py-5 text-center text-gray-300 font-medium">{row.v}</td>
                    <td className="px-8 py-5 text-right text-2xl font-headline tracking-tighter text-accent">{row.p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-emerald-500 text-slate-900 rounded-3xl p-8 relative overflow-hidden shadow-2xl shrink-0">
            <div className="absolute -right-6 -bottom-6 opacity-10 rotate-12">
              <Percent className="w-40 h-40" />
            </div>
            <div className="relative z-10 text-center flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-2xl font-black font-headline uppercase mb-1 tracking-tighter">Opción Drop-Off</h3>
                <p className="font-bold text-slate-800 leading-tight text-sm max-w-sm">
                  Despache directo en nuestro centro logístico y optimice sus costos operativos eliminando cargos de retiro.
                </p>
              </div>
              <div className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-3xl font-headline whitespace-nowrap shadow-2xl scale-105">
                20% OFF
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 shrink-0 mb-2">
            <div className="bg-secondary/40 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <h4 className="text-xs font-black uppercase text-accent tracking-widest font-headline">Servicios Incluidos</h4>
              </div>
              <ul className="space-y-3 text-[13px] font-bold">
                <li className="flex items-center gap-2 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> 2da Visita 100% Bonificada
                </li>
                <li className="flex items-center gap-2 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Cobranza en Destino GRATIS
                </li>
              </ul>
            </div>

            <div className="bg-secondary/40 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
                <AlertCircle className="w-5 h-5 text-accent" />
                <h4 className="text-xs font-black uppercase text-accent tracking-widest font-headline">Excepciones</h4>
              </div>
              <ul className="space-y-3 text-[13px] font-medium text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Logística Inversa: 50% Tarifa
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Retiro Diario (+10 paq): GRATIS
                </li>
              </ul>
            </div>
          </div>
        </main>

        <PageFooter pageNumber="6 / 11" />
      </div>
    </div>
  );
}
