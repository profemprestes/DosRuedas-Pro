import os
import re

bgs = {
    "1": """{/* Background: Portada / Cierre */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2563eb]/40 via-[#0a0a0a] to-[#0a0a0a] opacity-60 pointer-events-none"></div>
      </div>""",
    "2": """{/* Background: Express / Lowcost */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#2563eb]/20 blur-[100px] rounded-full pointer-events-none"></div>
      </div>""",
    "3": """{/* Background: Express / Lowcost */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#2563eb]/20 blur-[100px] rounded-full pointer-events-none"></div>
      </div>""",
    "4": """{/* Background: Flex */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#22c55e]/15 blur-[120px] rounded-full pointer-events-none translate-x-1/4 translate-y-1/4"></div>
      </div>""",
    "5": """{/* Background: 3PL, Drop-Off, Cuentas */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle,#ffffff10_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#fbc107]/10 blur-[120px] rounded-full pointer-events-none"></div>
      </div>""",
    "6": """{/* Background: 3PL, Drop-Off, Cuentas */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle,#ffffff10_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#fbc107]/10 blur-[120px] rounded-full pointer-events-none"></div>
      </div>""",
    "7": """{/* Background: 3PL, Drop-Off, Cuentas */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle,#ffffff10_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#fbc107]/10 blur-[120px] rounded-full pointer-events-none"></div>
      </div>""",
    "8": """{/* Background: Tecnología & Onboarding */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111827] to-[#0a0a0a]"></div>
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#ffffff03_10px,#ffffff03_20px)]"></div>
      </div>""",
    "9": """{/* Background: Tecnología & Onboarding */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111827] to-[#0a0a0a]"></div>
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#ffffff03_10px,#ffffff03_20px)]"></div>
      </div>""",
    "10": """{/* Background: Tecnología & Onboarding */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111827] to-[#0a0a0a]"></div>
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#ffffff03_10px,#ffffff03_20px)]"></div>
      </div>""",
    "11": """{/* Background: Portada / Cierre */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2563eb]/40 via-[#0a0a0a] to-[#0a0a0a] opacity-60 pointer-events-none"></div>
      </div>"""
}

def process_file(filepath, page_num):
    with open(filepath, 'r') as f:
        content = f.read()

    # Remove imports
    content = re.sub(r"import Image from 'next/image';\n", "", content)
    content = re.sub(r"import \{ PlaceHolderImages \} from '@/lib/placeholder-images';\n", "", content)

    # Remove bgImg variable
    content = re.sub(r"  const bgImg = PlaceHolderImages\.find\(\(img\) => img\.id === '[^']+'\);\n\n?", "", content)

    # In paginas/ the structure is usually:
    # <div className="a4-container ...">
    #   {/* Background ... */}
    #   <div className="absolute inset-0 z-0 ..."> ... </div>
    #   <div className="relative z-20 ..."> or <PageHeader ...

    # Let's find the a4-container opening tag:
    a4_match = re.search(r'(<div className="a4-container[^>]*>)', content)
    if not a4_match:
        print(f"Failed to find a4-container in {filepath}")
        return

    start_idx = a4_match.end()

    # Find where the actual content starts
    content_start_match = re.search(r'(<div className="relative z-20|<PageHeader|<main)', content[start_idx:])
    if not content_start_match:
        print(f"Failed to find content start in {filepath}")
        return

    end_idx = start_idx + content_start_match.start()

    # Replace everything between start_idx and end_idx with our new background
    bg_code = "\n      " + bgs[str(page_num)] + "\n\n      "

    new_content = content[:start_idx] + bg_code + content[end_idx:]

    with open(filepath, 'w') as f:
        f.write(new_content)
        print(f"Processed {filepath}")

for folder in ['src/components/paginas', 'src/components/paginas_version_nueva']:
    for i in range(1, 12):
        filepath = f"{folder}/pagina{i}.tsx"
        if os.path.exists(filepath):
            process_file(filepath, i)
