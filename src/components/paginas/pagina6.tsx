import React from 'react';
import { PageHeader } from './shared/PageHeader';
import { PageFooter } from './shared/PageFooter';
import { Truck, Percent } from 'lucide-react';

export default function Pagina6() {
  return (
    <div className="mx-auto w-[210mm] h-[297mm] bg-primary relative overflow-hidden flex flex-col shadow-2xl text-white font-montserrat" suppressHydrationWarning>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/95 z-10" />

      <div className="relative z-20 flex flex-col h-full justify-between max-h-full p-10">
        {/* Header Section */}
        <PageHeader badgeText="E-COMMERCE 24HS" />

        <main className="flex-1 flex flex-col mt-4 mb-4">
          {/* Main Title Section */}
          <section className="mb-4">
              <div className="flex items-center gap-3 mb-2">
                  <Truck className="w-10 h-10 text-accent flex-shrink-0" />
                  <h2 className="text-4xl font-black tracking-tight leading-none uppercase">
                      PLAN E-COMMERCE <span className="text-accent">24HS</span>
                  </h2>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed max-w-3xl">
                  Escale su tienda online con una tarifa plana previsible a todo Mar del Plata. Usted prepara los paquetes, nosotros retiramos hoy y entregamos mañana en toda la ciudad. <span className="text-white font-bold">Costos fijos y máxima rentabilidad.</span>
              </p>
          </section>

          {/* Pricing Table */}
          <div className="mb-4 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <table className="w-full text-left border-collapse">
                  <thead>
                      <tr className="border-b border-white/10 bg-black/20">
                          <th className="px-4 py-2 text-xs font-bold text-accent tracking-widest uppercase">Nivel Comercial</th>
                          <th className="px-4 py-2 text-xs font-bold text-accent tracking-widest uppercase text-center">Volumen Mensual</th>
                          <th className="px-4 py-2 text-xs font-bold text-accent tracking-widest uppercase text-right">Valor x Envío (Plano)</th>
                      </tr>
                  </thead>
                  <tbody className="text-white font-medium">
                      <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="px-4 py-2 uppercase text-sm">Inicial</td>
                          <td className="px-4 py-2 text-center text-gray-300 text-sm">1 a 199 envíos</td>
                          <td className="px-4 py-2 text-right text-lg font-bold text-accent tracking-tighter">$3.800</td>
                      </tr>
                      <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="px-4 py-2 uppercase text-sm">Pro</td>
                          <td className="px-4 py-2 text-center text-gray-300 text-sm">200 a 1.199 envíos</td>
                          <td className="px-4 py-2 text-right text-lg font-bold text-accent tracking-tighter">$3.500</td>
                      </tr>
                      <tr className="border-b border-white/5 hover:bg-white/5 transition-colors bg-white/5">
                          <td className="px-4 py-2 uppercase text-accent text-sm">Elite</td>
                          <td className="px-4 py-2 text-center text-gray-300 text-sm">1.200 a 1.999 envíos</td>
                          <td className="px-4 py-2 text-right text-lg font-bold text-accent tracking-tighter">$3.200</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                          <td className="px-4 py-2 uppercase text-sm">Partner</td>
                          <td className="px-4 py-2 text-center text-gray-300 text-sm">+2.000 envíos</td>
                          <td className="px-4 py-2 text-right text-lg font-bold text-accent tracking-tighter">$3.000</td>
                      </tr>
                  </tbody>
              </table>
          </div>

          {/* Drop-Off Card */}
          <div className="bg-emerald-500 text-slate-900 rounded-2xl p-4 mb-4 relative overflow-hidden shadow-lg border border-emerald-400/50">
              <div className="absolute top-0 right-0 p-2 opacity-20">
                  <Percent className="w-16 h-16" />
              </div>
              <div className="relative z-10 text-center">
                  <h3 className="text-lg font-black uppercase mb-2 tracking-tighter">Opción Drop-Off (Ahorro Inteligente)</h3>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-3">
                      <p className="font-semibold text-slate-800 leading-tight max-w-lg text-xs">
                          Traiga sus paquetes a nuestro depósito (Friuli 1972) y obtenga directo sobre la tarifa y evite costos de retiro.
                      </p>
                      <div className="bg-slate-900 text-white px-4 py-2 rounded-lg font-black text-base whitespace-nowrap shadow-lg">
                          20% DE DESCUENTO
                      </div>
                  </div>
              </div>
          </div>

          {/* Info Boxes Grid */}
          <div className="grid grid-cols-2 gap-4 mt-auto">
              {/* Dinámica */}
              <div className="bg-black/20 border border-white/10 rounded-xl p-4">
                  <h4 className="text-xs font-black uppercase text-accent mb-2 tracking-widest border-b border-white/10 pb-2">Dinámica de Servicio</h4>
                  <ul className="space-y-2 text-xs font-medium">
                      <li className="flex items-start gap-2">
                          <span className="text-accent mt-0.5">•</span>
                          <span><strong className="text-white">Next Day:</strong> Retiro hoy, entrega mañana.</span>
                      </li>
                      <li className="flex items-start gap-2">
                          <span className="text-accent mt-0.5">•</span>
                          <span><strong className="text-white">Franja Abierta:</strong> 9 a 20 hs (Sin horario fijo).</span>
                      </li>
                      <li className="flex items-start gap-2 text-emerald-400 font-bold">
                          <span className="mt-0.5">•</span>
                          <span>2da Visita GRATIS (Bonificada).</span>
                      </li>
                      <li className="flex items-start gap-2 text-emerald-400 font-bold">
                          <span className="mt-0.5">•</span>
                          <span>Cobranza en Destino GRATIS.</span>
                      </li>
                  </ul>
              </div>

              {/* Excepciones */}
              <div className="bg-black/20 border border-white/10 rounded-xl p-4">
                  <h4 className="text-xs font-black uppercase text-accent mb-2 tracking-widest border-b border-white/10 pb-2">Excepciones y Costos</h4>
                  <ul className="space-y-2 text-xs font-medium">
                      <li className="flex items-start gap-2">
                          <span className="text-accent mt-0.5">•</span>
                          <span><strong className="text-white">Log. Inversa:</strong> Cambios a 50% del valor original.</span>
                      </li>
                      <li className="flex items-start gap-2">
                          <span className="text-accent mt-0.5">•</span>
                          <span><strong className="text-white">Lluvia:</strong> Recargo 50% (u opción de posponer).</span>
                      </li>
                      <li className="flex items-start gap-2">
                          <span className="text-accent mt-0.5">•</span>
                          <span><strong className="text-white">Bulto:</strong> {">"}5kg o 40x40x30cm. Adicional desde $1.800.</span>
                      </li>
                      <li className="flex items-start gap-2 text-accent">
                          <span className="mt-0.5">•</span>
                          <span className="italic"><strong className="text-white not-italic">Retiro Diario:</strong> GRATIS (+10 paq). Menos volumen: $4.000.</span>
                      </li>
                  </ul>
              </div>
          </div>
        </main>

        {/* Footer Section */}
        <PageFooter pageNumber="6 / 11" />
      </div>
    </div>
  );
}
