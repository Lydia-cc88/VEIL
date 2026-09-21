from pathlib import Path

from PIL import Image


COLOR_SOURCE = Path(
    r"C:\Users\王\.codex\generated_images\019fe8d7-cd1b-7f33-9ba9-dc152b74b684\exec-d0aecc15-64b7-4049-87a5-4763f09715b3.png"
)
ALPHA_SOURCE = Path(
    r"C:\Users\王\.codex\visualizations\2026\08\09\019fe8d7-cd1b-7f33-9ba9-dc152b74b684\portfolio-ending-marker-transparent.png"
)
OUTPUT = Path(
    r"C:\Users\王\.codex\visualizations\2026\08\09\019fe8d7-cd1b-7f33-9ba9-dc152b74b684\portfolio-ending-marker-deep-blue-transparent.png"
)


color = Image.open(COLOR_SOURCE).convert("RGBA")
alpha = Image.open(ALPHA_SOURCE).convert("RGBA").getchannel("A")

# The recolor edit preserved the geometry and pixel registration. Reuse the
# verified native alpha from the original render; remove only stray near-zero
# transparent noise while retaining the anti-aliased optical-glass edge.
alpha = alpha.point(lambda value: 0 if value < 8 else value)
color.putalpha(alpha)
color.save(OUTPUT, "PNG", optimize=True)

print(f"saved={OUTPUT}")
print(f"mode={color.mode} size={color.size} alpha={alpha.getextrema()}")
