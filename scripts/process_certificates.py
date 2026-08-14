import os
from PIL import Image

SRC = "/home/claude/certs_extract/PortfolioFireframe"
OUT = "/home/claude/site-project/public/certificates"
os.makedirs(OUT, exist_ok=True)

MAP = {
    "ia": "Curso-introducao-ia.png",
    "modelagem": "Curso-modelagem-computacional.png",
    "oracle": "Curso-oracle.png",
    "tendencias": "Curso-tendencias-ti.png",
    "webapi": "Curso-web-api.png",
}

MAX_W = 1000

total = 0
for cid, fname in MAP.items():
    im = Image.open(os.path.join(SRC, fname)).convert("RGB")
    if im.width > MAX_W:
        h = int(im.height * MAX_W / im.width)
        im = im.resize((MAX_W, h), Image.LANCZOS)
    out_path = os.path.join(OUT, f"{cid}.jpg")
    im.save(out_path, "JPEG", quality=85, optimize=True)
    size = os.path.getsize(out_path)
    total += size
    print(f"{cid}: {size/1024:.0f}KB")

print(f"\nTotal: {total/1024:.0f}KB")
