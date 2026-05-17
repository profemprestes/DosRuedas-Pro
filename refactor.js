const fs = require('fs');
const path = require('path');

const dir = 'src/components/paginas';
const files = fs.readdirSync(dir).filter(f => f.startsWith('pagina') && f.endsWith('.tsx'));

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');

    // 1. Fix outer container:
    // Container root: flex flex-col justify-between w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] overflow-hidden box-border bg-white position-relative
    content = content.replace(
        /<div className="a4-container[^>]*>/,
        `<div className="a4-container flex flex-col justify-between w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] overflow-hidden box-border bg-white relative shadow-2xl font-body" suppressHydrationWarning>`
    );

    // 2. Wrap content inner container
    // Keep it but ensure padding is slightly reduced if needed
    content = content.replace(
        /<div className="relative z-20 flex flex-col h-full justify-between max-h-full p-10">/,
        `<div className="relative z-20 flex flex-col h-full justify-between max-h-full p-6">`
    );

    // 3. Fix main tag classes to include elastic bounds
    // Envuelve todo el contenido del cuerpo central en un contenedor elástico intermedio con la clase flex-1 o flex-grow combinada con overflow-hidden o max-h-full.
    content = content.replace(
        /<main className="([^"]+)"/,
        (match, p1) => {
            let newClasses = p1.replace(/\b(mt-4|mb-4|mt-8|mb-8|my-4|my-8|gap-4|gap-6|gap-8)\b/g, (m) => {
                if (m.startsWith('mt-') || m.startsWith('mb-') || m.startsWith('my-')) {
                    const val = parseInt(m.split('-')[1]);
                    return `${m.split('-')[0]}-${Math.max(1, Math.floor(val/2))}`;
                }
                if (m.startsWith('gap-')) {
                    const val = parseInt(m.split('-')[1]);
                    return `gap-${Math.max(1, Math.floor(val/2))}`;
                }
                return m;
            });
            if (!newClasses.includes('overflow-hidden') && !newClasses.includes('max-h-full')) {
                newClasses += ' max-h-full';
            }
            if (!newClasses.includes('flex-1') && !newClasses.includes('flex-grow')) {
                newClasses = 'flex-1 ' + newClasses;
            }
            return `<main className="${newClasses}"`;
        }
    );

    // 4. Shrink large headings and text sizes generally, and reduce gaps/margins
    // We will do a generic replacement for standard tailwind margin/padding/text to ensure it fits.
    // However, since bg-white was enforced, wait - the original has bg-primary. "bg-white position-relative" was in the prompt instructions.

    // Also the user specifies "reduce de forma proporcional los paddings (py-1, py-2), los gaps (gap-2, space-y-2) y el tamaño de las fuentes (text-xs, text-sm)"
    content = content.replace(/\btext-sm\b/g, 'text-xs');
    content = content.replace(/\btext-xs\b/g, 'text-[10px]');
    content = content.replace(/\bspace-y-6\b/g, 'space-y-3');
    content = content.replace(/\bspace-y-5\b/g, 'space-y-2');
    content = content.replace(/\bspace-y-4\b/g, 'space-y-2');
    content = content.replace(/\bspace-y-3\b/g, 'space-y-1.5');

    content = content.replace(/\bmb-10\b/g, 'mb-5');
    content = content.replace(/\bmt-10\b/g, 'mt-5');
    content = content.replace(/\bmb-8\b/g, 'mb-4');
    content = content.replace(/\bmt-8\b/g, 'mt-4');
    content = content.replace(/\bmb-6\b/g, 'mb-3');
    content = content.replace(/\bmt-6\b/g, 'mt-3');
    content = content.replace(/\bmb-5\b/g, 'mb-2');
    content = content.replace(/\bmt-5\b/g, 'mt-2');

    content = content.replace(/\bgap-8\b/g, 'gap-4');
    content = content.replace(/\bgap-6\b/g, 'gap-3');
    // content = content.replace(/\bgap-4\b/g, 'gap-2');

    content = content.replace(/\bpy-6\b/g, 'py-3');
    content = content.replace(/\bpx-6\b/g, 'px-4');
    content = content.replace(/\bpy-8\b/g, 'py-4');
    content = content.replace(/\bpx-8\b/g, 'px-5');
    content = content.replace(/\bp-10\b/g, 'p-6');
    content = content.replace(/\bp-8\b/g, 'p-5');
    content = content.replace(/\bp-6\b/g, 'p-4');

    fs.writeFileSync(path.join(dir, file), content, 'utf8');
    console.log(`Refactored ${file}`);
});
