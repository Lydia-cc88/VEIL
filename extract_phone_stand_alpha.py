from pathlib import Path

import numpy as np
from collections import deque

from PIL import Image, ImageDraw, ImageFilter


SOURCE = Path(
    r"C:\Users\王\.codex\generated_images\019fe8d7-cd1b-7f33-9ba9-dc152b74b684\exec-c673a4d0-cfc3-4c4f-b5b5-5b2edd1cfa6b.png"
)
OUTPUT = Path(
    r"C:\Users\王\.codex\visualizations\2026\08\09\019fe8d7-cd1b-7f33-9ba9-dc152b74b684\phone-stand-installation-icon-transparent.png"
)


rgb_image = Image.open(SOURCE).convert("RGB")
rgb = np.asarray(rgb_image, dtype=np.float32)

channel_max = rgb.max(axis=2)
channel_min = rgb.min(axis=2)
chroma = channel_max - channel_min
luma = 0.2126 * rgb[:, :, 0] + 0.7152 * rgb[:, :, 1] + 0.0722 * rgb[:, :, 2]

# The baked background is bright and almost perfectly neutral. Saturated pixels
# and dark structural pixels provide conservative foreground seeds.
seed = ((chroma > 11.0) | (luma < 158.0)).astype(np.uint8) * 255
seed_image = Image.fromarray(seed, mode="L")

# Flood-fill the exterior. Neutral highlights enclosed by the phone/stand
# silhouette are retained, while the checkerboard remains exterior.
flood = seed_image.copy()
ImageDraw.floodfill(flood, (0, 0), 128, thresh=0)
flood_array = np.asarray(flood)
enclosed_foreground = flood_array != 128

# Estimate coverage for exposed thin elements such as the warm-white cable.
alpha_chroma = np.clip((chroma - 5.0) / 14.0, 0.0, 1.0)
alpha_dark = np.clip((154.0 - luma) / 30.0, 0.0, 1.0)
alpha = np.maximum(alpha_chroma, alpha_dark)
alpha[enclosed_foreground] = 1.0

# Suppress all bright neutral checkerboard pixels, including blended/warped
# squares, then lightly soften only the cutout edge.
row_index = np.arange(rgb.shape[0])[:, None]
neutral_background = (
    (chroma < 10.0)
    & (luma > 145.0)
    & ((~enclosed_foreground) | (row_index > 820))
)
alpha[neutral_background] = 0.0

# Keep only the largest 8-connected foreground component. The phone, clamp,
# cable and stand form one connected subject; stray checkerboard fragments do not.
binary = alpha > 0.08
visited = np.zeros(binary.shape, dtype=bool)
largest_component = []
height, width = binary.shape
for y, x in np.argwhere(binary):
    if visited[y, x]:
        continue
    component = []
    queue = deque([(int(y), int(x))])
    visited[y, x] = True
    while queue:
        cy, cx = queue.popleft()
        component.append((cy, cx))
        for ny in range(max(0, cy - 1), min(height, cy + 2)):
            for nx in range(max(0, cx - 1), min(width, cx + 2)):
                if binary[ny, nx] and not visited[ny, nx]:
                    visited[ny, nx] = True
                    queue.append((ny, nx))
    if len(component) > len(largest_component):
        largest_component = component

keep = np.zeros(binary.shape, dtype=bool)
if largest_component:
    yy, xx = zip(*largest_component)
    keep[np.asarray(yy), np.asarray(xx)] = True
alpha[~keep] = 0.0

alpha_image = Image.fromarray(np.uint8(np.clip(alpha * 255.0, 0, 255)), mode="L")
alpha_image = alpha_image.filter(ImageFilter.MedianFilter(3)).filter(ImageFilter.GaussianBlur(0.35))

rgba = rgb_image.convert("RGBA")
rgba.putalpha(alpha_image)
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
rgba.save(OUTPUT, "PNG", optimize=True)

alpha_values = np.asarray(alpha_image)
print(f"saved={OUTPUT}")
print(f"mode={rgba.mode} size={rgba.size}")
print(f"alpha_min={alpha_values.min()} alpha_max={alpha_values.max()}")
print(f"corner_alpha={alpha_values[0, 0]}")
