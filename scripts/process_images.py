import os
from PIL import Image

SRC = "/home/claude/uploads_extract/projects"
OUT = "/home/claude/site-project/public/projects"
os.makedirs(OUT, exist_ok=True)

# mapa: (arquivo origem 1, arquivo origem 2) -> id do projeto
MAP = {
    "investidor": ("site-investidor-1.jpg", "site-investidor-2.jpg"),
    "ugc": ("UGC-1.jpg", "UGC-2.jpg"),
    "viva": ("VIVA-1.jpg", "VIVA-2.jpg"),
    "estoque": ("Gerenciamento-estoque-1.jpg", "Gerenciamento-estoque-2.jpg"),
    "licencas": ("Gerencimaneto-licencas-1.jpg", "Gerencimaneto-licencas-2.jpg"),
    "blogvca": ("Blog-vca-1.jpg", "Blog-vca-2.jpg"),
    "dogaliza": ("DOGALIZA-1.jpg", "DOGALIZA-2.jpg"),
    "lanesburguer": ("Lanes-Burguer-1.jpg", "Lanes-Burguer-2.jpg"),
    "nebulon": ("Login-space-1.jpg", "Login-space-2.jpg"),
    "mob": ("MOB-1.jpg", "MOB-2.jpg"),
    "pmvc": ("PMVC-1.jpg", "PMVC-2.jpg"),
    "posobra": ("P#U00f3s-obra-1.jpg", "P#U00f3s-obra-2.jpg"),
    "institucional": ("site-institucional-1.jpg", "site-institucional-2.jpg"),
    "vcarank": ("vca-rank-1.jpg", "vca-rank-2.jpg"),
}

MAX_W = 900

def process(src_name, out_name):
    im = Image.open(os.path.join(SRC, src_name)).convert("RGB")
    if im.width > MAX_W:
        h = int(im.height * MAX_W / im.width)
        im = im.resize((MAX_W, h), Image.LANCZOS)
    out_path = os.path.join(OUT, out_name)
    im.save(out_path, "JPEG", quality=76, optimize=True)
    return os.path.getsize(out_path)

total = 0
for pid, (f1, f2) in MAP.items():
    s1 = process(f1, f"{pid}-1.jpg")
    s2 = process(f2, f"{pid}-2.jpg")
    total += s1 + s2
    print(f"{pid}: {s1/1024:.0f}KB + {s2/1024:.0f}KB")

print(f"\nTotal: {total/1024/1024:.2f} MB")
