from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter


SOURCE = Path(
    r"C:\Users\王\.codex\generated_images\019fe8d7-cd1b-7f33-9ba9-dc152b74b684\exec-b73c18fa-41b3-4b28-a455-8fa9f704275e.png"
)
OUTPUT = Path(
    r"C:\Users\王\.codex\visualizations\2026\08\09\019fe8d7-cd1b-7f33-9ba9-dc152b74b684\river-ecology-petri-icon-transparent.png"
)


image = Image.open(SOURCE).convert("RGBA")
w, h = image.size

# The generated object is a clean optical disc. A supersampled elliptical matte
# follows the outside of its glass rim and avoids retaining the rendered
# checkerboard that the generator baked into the RGB image.
scale = 4
mask = Image.new("L", (w * scale, h * scale), 0)
draw = ImageDraw.Draw(mask)
bounds = (43, 66, 1210, 1149)
draw.ellipse(tuple(v * scale for v in bounds), fill=255)
mask = mask.filter(ImageFilter.GaussianBlur(1.15 * scale))
mask = mask.resize((w, h), Image.Resampling.LANCZOS)

image.putalpha(mask)
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
image.save(OUTPUT, "PNG", optimize=True)

print(f"saved={OUTPUT}")
print(f"mode={image.mode} size={image.size} alpha={mask.getextrema()}")
