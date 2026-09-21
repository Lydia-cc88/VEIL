from pathlib import Path
from PIL import Image, ImageOps, ImageDraw


root = Path(r"C:\Users\王\Documents\ChatGPT\website\working\tidenet-pdf")
pages = sorted(root.glob("page-*.jpg"))
canvas = Image.new("RGB", (1000, 570), "#101822")
draw = ImageDraw.Draw(canvas)

for index, page_path in enumerate(pages):
    image = Image.open(page_path).convert("RGB")
    image = ImageOps.contain(image, (185, 245))
    x = 12 + (index % 5) * 198
    y = 28 + (index // 5) * 275
    canvas.paste(image, (x, y))
    draw.text((x, y - 18), page_path.stem, fill="white")

canvas.save(root / "contact.jpg", quality=92)
