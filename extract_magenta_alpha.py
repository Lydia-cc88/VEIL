from pathlib import Path

import numpy as np
from PIL import Image


SOURCE = Path(
    r"C:\Users\王\.codex\generated_images\019fe8d7-cd1b-7f33-9ba9-dc152b74b684\exec-adbe3683-583c-423f-8cc6-2d2694b95de6.png"
)
OUTPUT = Path(
    r"C:\Users\王\.codex\visualizations\2026\08\09\019fe8d7-cd1b-7f33-9ba9-dc152b74b684\phone-stand-installation-icon-transparent.png"
)


source = np.asarray(Image.open(SOURCE).convert("RGB"), dtype=np.float32)
height, width = source.shape[:2]
r, g, b = source[:, :, 0], source[:, :, 1], source[:, :, 2]

# The magenta backing has a very slight generated lighting gradient. Fit a
# smooth quadratic color field from pixels that are confidently magenta.
yy, xx = np.mgrid[0:height, 0:width]
xn = xx / max(width - 1, 1)
yn = yy / max(height - 1, 1)
background_samples = (
    (r > 205.0)
    & (b > 205.0)
    & (g < 65.0)
    & (np.abs(r - b) < 35.0)
)
sample = background_samples & ((xx % 8) == 0) & ((yy % 8) == 0)
design = np.stack(
    [np.ones_like(xn), xn, yn, xn * xn, yn * yn, xn * yn], axis=2
)
coefficients = []
for channel in range(3):
    coef, *_ = np.linalg.lstsq(design[sample], source[:, :, channel][sample], rcond=None)
    coefficients.append(coef)
background = np.stack(
    [np.sum(design * coef[None, None, :], axis=2) for coef in coefficients], axis=2
)
br, bg, bb = background[:, :, 0], background[:, :, 1], background[:, :, 2]

# Estimate foreground coverage from departures from the fitted magenta field.
alpha_g = np.clip((g - bg) / np.maximum(255.0 - bg, 1.0), 0.0, 1.0)
alpha_r = np.clip((br - r) / np.maximum(br, 1.0), 0.0, 1.0)
alpha_b = np.clip((bb - b) / np.maximum(bb, 1.0), 0.0, 1.0)
alpha = np.maximum.reduce([alpha_g, alpha_r, alpha_b])
alpha[alpha < 0.075] = 0.0
alpha[alpha > 0.985] = 1.0

# Remove magenta contamination from partially covered antialiased edge pixels.
safe_alpha = np.maximum(alpha, 1.0 / 255.0)
foreground = np.empty_like(source)
foreground[:, :, 0] = (r - (1.0 - alpha) * br) / safe_alpha
foreground[:, :, 1] = (g - (1.0 - alpha) * bg) / safe_alpha
foreground[:, :, 2] = (b - (1.0 - alpha) * bb) / safe_alpha
foreground = np.clip(foreground, 0.0, 255.0)
foreground[alpha == 0.0] = 0.0

rgba = np.dstack((foreground, alpha[:, :, None] * 255.0)).astype(np.uint8)
result = Image.fromarray(rgba, "RGBA")
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
result.save(OUTPUT, "PNG", optimize=True)

alpha_u8 = rgba[:, :, 3]
print(f"saved={OUTPUT}")
print(f"mode={result.mode} size={result.size}")
print(f"alpha_min={alpha_u8.min()} alpha_max={alpha_u8.max()}")
print(f"corner_alpha={alpha_u8[0, 0]}")
