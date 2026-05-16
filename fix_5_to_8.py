import re

def fix_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # General replacements
    content = content.replace('bg-[#0a1128]', 'bg-primary')
    content = content.replace('bg-[#111c44]', 'bg-primary/80')
    content = content.replace('text-[#fbbd08]', 'text-accent')
    content = content.replace('bg-[#fbbd08]', 'bg-accent')
    content = content.replace('border-[#fbbd08]', 'border-accent')
    content = content.replace('shadow-[0_0_8px_#fbbd08]', 'shadow-[0_0_8px_#FDC322]')
    content = content.replace('font-montserrat', 'font-body')
    content = content.replace('w-[210mm] h-[297mm]', 'a4-container mx-auto')

    # Specific layout fixes
    content = re.sub(r'className="a4-container mx-auto[^"]*"', 'className="a4-container mx-auto bg-primary relative overflow-hidden flex flex-col shadow-2xl text-white font-body"', content, count=1)
    content = re.sub(r'className="relative z-20 flex flex-col h-full[^"]*"', 'className="relative z-20 flex flex-col h-full justify-between max-h-full p-10"', content, count=1)

    # Standardize main tags
    content = re.sub(r'<main className="[^"]*">', '<main className="flex-1 flex flex-col justify-center mt-4 mb-4 gap-4">', content)

    # Standardize Headings
    content = re.sub(r'font-black', 'font-black font-headline', content)

    with open(filepath, 'w') as f:
        f.write(content)

for i in range(5, 9):
    fix_file(f'src/components/paginas/pagina{i}.tsx')
