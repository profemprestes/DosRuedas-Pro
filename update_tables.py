import re

files_to_update = [
    'src/components/paginas/pagina2.tsx',
    'src/components/paginas/pagina3.tsx',
]

enterprise_table_structure = """
            {/* Pricing Table (Enterprise Style) */}
            <div className="overflow-hidden bg-white rounded-xl shadow-lg border border-slate-200 mb-8 flex-grow flex flex-col justify-center">
                <table className="w-full text-xs text-slate-700">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                            <th className="px-4 py-3 text-left">Zonificación de Entrega</th>
                            <th className="px-4 py-3 text-right">Valor Final</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm font-medium divide-y divide-slate-100">
                        <tr className="odd:bg-white even:bg-slate-50/50 hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3 text-left font-bold text-slate-800">Zona 1 (Hasta 3 km)</td>
                            <td className="px-4 py-3 text-right text-accent font-bold text-lg">$3.700</td>
                        </tr>
                        <tr className="odd:bg-white even:bg-slate-50/50 hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3 text-left font-bold text-slate-800">Zona 2 (3 a 5 km)</td>
                            <td className="px-4 py-3 text-right text-accent font-bold text-lg">$4.600</td>
                        </tr>
                        <tr className="odd:bg-white even:bg-slate-50/50 hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3 text-left font-bold text-slate-800">Zona 3 (5 a 7 km)</td>
                            <td className="px-4 py-3 text-right text-accent font-bold text-lg">$6.100</td>
                        </tr>
                        <tr className="odd:bg-white even:bg-slate-50/50 hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3 text-left font-bold text-slate-800">Zona 4 (7 a 10 km)</td>
                            <td className="px-4 py-3 text-right text-accent font-bold text-lg">$8.200</td>
                        </tr>
                        <tr className="odd:bg-white even:bg-slate-50/50 hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3 text-left font-bold text-slate-800">Zona 5 (Más de 10 km)</td>
                            <td className="px-4 py-3 text-right text-accent font-bold text-lg">$1.000 x km</td>
                        </tr>
                    </tbody>
                </table>
            </div>
"""

p3_enterprise_table_structure = """
            {/* Pricing Table (Enterprise Style) */}
            <div className="overflow-hidden bg-white rounded-xl shadow-lg border border-slate-200 mb-8 flex-grow flex flex-col justify-center">
                <table className="w-full text-xs text-slate-700">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                            <th className="px-4 py-3 text-left">Zonificación de Entrega</th>
                            <th className="px-4 py-3 text-right">Valor Final</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm font-medium divide-y divide-slate-100">
                        <tr className="odd:bg-white even:bg-slate-50/50 hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3 text-left font-bold text-slate-800">Zona 1 (Hasta 3 km)</td>
                            <td className="px-4 py-3 text-right text-emerald-600 font-bold text-lg">$3.000</td>
                        </tr>
                        <tr className="odd:bg-white even:bg-slate-50/50 hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3 text-left font-bold text-slate-800">Zona 2 (3 a 5 km)</td>
                            <td className="px-4 py-3 text-right text-emerald-600 font-bold text-lg">$3.800</td>
                        </tr>
                        <tr className="odd:bg-white even:bg-slate-50/50 hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3 text-left font-bold text-slate-800">Zona 3 (5 a 7 km)</td>
                            <td className="px-4 py-3 text-right text-emerald-600 font-bold text-lg">$5.100</td>
                        </tr>
                        <tr className="odd:bg-white even:bg-slate-50/50 hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3 text-left font-bold text-slate-800">Zona 4 (7 a 10 km)</td>
                            <td className="px-4 py-3 text-right text-emerald-600 font-bold text-lg">$7.000</td>
                        </tr>
                        <tr className="odd:bg-white even:bg-slate-50/50 hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3 text-left font-bold text-slate-800">Zona 5 (Más de 10 km)</td>
                            <td className="px-4 py-3 text-right text-emerald-600 font-bold text-lg">$900 x km</td>
                        </tr>
                    </tbody>
                </table>
            </div>
"""

for filepath in files_to_update:
    with open(filepath, 'r') as f:
        content = f.read()

    # Find the Pricing Table section to replace
    pattern = r'\{\/\* Pricing Table \*\/.*?<\/section>'

    if filepath == 'src/components/paginas/pagina2.tsx':
         new_content = re.sub(pattern, enterprise_table_structure, content, flags=re.DOTALL)
    else:
         new_content = re.sub(pattern, p3_enterprise_table_structure, content, flags=re.DOTALL)

    with open(filepath, 'w') as f:
        f.write(new_content)

print("Updated tables in pagina2.tsx and pagina3.tsx")
