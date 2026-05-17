import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { Truck, Percent, CheckCircle, AlertCircle } from 'lucide-react';

export default function Pagina6() {
  return (
    <div className="a4-container mx-auto bg-primary relative overflow-hidden flex flex-col shadow-2xl text-white font-body" suppressHydrationWarning>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/95 to-secondary/60 z-10" />

      <div className="relative z-20 flex flex-col h-full justify-between max-h-full p-10">
        <PageHeader badgeText="E-COMMERCE 24HS" />

        <main className="flex-1 flex flex-col mt-4 mb-4 gap-4 overflow-hidden">
          
          {/* Main Title Section */}
          <section className="shrink-0">
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-accent/10 p-3 rounded-xl border border-accent/20">
                <Truck className="w-10 h-10 text-accent" />
              </div>
              <h2 className="text-4xl font-black font-headline tracking-tight leading-none uppercase italic skew-x-[-5deg]">
                PLAN E-COMMERCE <span className="text-accent">24HS</span>
              </h2>
            </div>
            <p className="text-gray-300 text-[14px] leading-relaxed max-w-3xl">
              Escale su tienda online con una tarifa plana previsible a todo Mar del Plata. Usted prepara los paquetes, nosotros retiramos hoy y entregamos mañana en toda la ciudad. <strong className="text-white">Costos fijos y máxima rentabilidad.</strong>
            </p>
          </section>

          {/* Pricing Table */}
          <div className="shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-black/20">
                  <th className="px-6 py-4 text-[11px] font-bold text-accent tracking-widest uppercase font-headline">Nivel Comercial</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-accent tracking-widest uppercase text-center font-headline">Volumen Mensual</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-accent tracking-widest uppercase text-right font-headline">Valor x Envío</th>
                </tr>
              </thead>
              <tbody className="text-white text-sm">
                {[
                  { n: "Inicial", v: "1 a 199 envíos", p: "$3.800" },
                  { n: "Pro", v: "200 a 1.199 envíos", p: "$3.500" },
                  { n: "Elite", v: "1.200 a 1.999 envíos", p: "$3.200", highlight: true },
                  { n: "Partner", v: "+2.000 envíos", p: "$3.000" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 transition-colors hover:bg-white/5">
                    <td className={`px-6 py-3.5 uppercase font-bold ${row.highlight ? 'text-accent' : ''}`}>{row.n}</td>
                    <td className="px-6 py-3.5 text-center text-gray-300">{row.v}</td>
                    <td className="px-6 py-3.5 text-right text-xl font-black text-accent tracking-tighter font-headline">{row.p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Drop-Off Card (Enterprise Emerald Variant) */}
          <div className="bg-gradient-to-r from-emerald-900/40 to-emerald-800/40 border border-emerald-500/30 rounded-2xl p-6 relative overflow-hidden shrink-0 shadow-lg">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Percent className="w-24 h-24 text-emerald-400" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-black uppercase mb-2 tracking-tighter font-headline text-emerald-400">Opción Drop-Off (Ahorro Inteligente)</h3>
                <p className="font-medium text-gray-300 text-[13px] leading-relaxed">
                  Traiga sus paquetes a nuestro depósito (Friuli 1972) y obtenga el descuento directo sobre la tarifa evitando costos de recolección.
                </p>
              </div>
              <div className="bg-emerald-500 text-slate-950 px-6 py-3 rounded-xl font-black text-lg whitespace-nowrap shadow-xl font-headline tracking-tighter">
                20% DE DESCUENTO
              </div>
            </div>
          </div>

          {/* Info Boxes Grid */}
          <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
            {/* Dinámica */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col">
              <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-3">
                <CheckCircle className="w-5 h-5 text-accent" />
                <h4 className="text-[11px] font-black uppercase text-accent tracking-widest font-headline">Dinámica de Servicio</h4>
              </div>
              <ul className="space-y-3 text-[12px] font-medium text-gray-300 flex-1 overflow-y-auto pr-2">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span><strong className="text-white">Next Day:</strong> Retiro hoy, entrega mañana.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span><strong className="text-white">Franja Abierta:</strong> 9 a 20 hs (Sin horario fijo).</span>
                </li>
                <li className="flex items-start gap-2 text-emerald-400 font-bold bg-emerald-500/10 p-1.5 rounded">
                  <span>•</span>
                  <span>2da Visita GRATIS (Bonificada).</span>
                </li>
                <li className="flex items-start gap-2 text-emerald-400 font-bold bg-emerald-500/10 p-1.5 rounded">
                  <span>•</span>
                  <span>Cobranza en Destino GRATIS.</span>
                </li>
              </ul>
            </div>

            {/* Excepciones */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col">
              <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-3">
                <AlertCircle className="w-5 h-5 text-accent" />
                <h4 className="text-[11px] font-black uppercase text-accent tracking-widest font-headline">Excepciones y Costos</h4>
              </div>
              <ul className="space-y-3 text-[12px] font-medium text-gray-300 flex-1 overflow-y-auto pr-2">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span><strong className="text-white">Log. Inversa:</strong> Cambios a 50% del valor.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span><strong className="text-white">Lluvia:</strong> Recargo 50% (u opción posponer).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span><strong className="text-white">Bulto:</strong> &gt;5kg o 40x40x30cm. Adic. desde $1.800.</span>
                </li>
                <li className="flex items-start gap-2 text-accent mt-2 pt-2 border-t border-white/5">
                  <span>•</span>
                  <span className="italic"><strong className="text-white not-italic">Retiro Diario:</strong> GRATIS (+10 paq). Menos volumen: $4.000 el retiro.</span>
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