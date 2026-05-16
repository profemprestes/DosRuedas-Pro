import re
import glob

def fix_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Fix double opacity like bg-primary/80/60
    content = re.sub(r'bg-primary/80/([0-9]+)', r'bg-primary/\1', content)

    with open(filepath, 'w') as f:
        f.write(content)

for filepath in glob.glob('src/components/paginas/pagina*.tsx'):
    fix_file(filepath)
