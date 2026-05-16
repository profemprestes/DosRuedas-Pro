import re

filepath = 'src/components/paginas/pagina8.tsx'

with open(filepath, 'r') as f:
    content = f.read()

# Replace emerald hero box
content = content.replace('border-emerald-500', 'border-accent')
content = content.replace('text-emerald-500', 'text-accent')
content = content.replace('bg-emerald-500', 'bg-accent')

# Table badges and text
content = content.replace('bg-amber-100', 'bg-accent/20')
content = content.replace('text-amber-800', 'text-primary')

content = content.replace('bg-emerald-100', 'bg-primary/10')
content = content.replace('text-emerald-800', 'text-primary')

content = content.replace('bg-blue-100', 'bg-accent/20')
content = content.replace('text-blue-800', 'text-primary')

content = content.replace('text-emerald-700', 'text-primary font-black')
content = content.replace('text-emerald-600', 'text-primary')

# Other subtle slate to primary tweaks where appropriate
# Let's keep slate for structure as requested by "enterprise" (bg-slate-50)

with open(filepath, 'w') as f:
    f.write(content)

print("Updated colors in pagina8.tsx")
