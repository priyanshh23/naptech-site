
import os
from PIL import Image, ImageDraw
import random

def create_gradient_image(filename, width, height, start_color, end_color, noise=False):
    image = Image.new("RGB", (width, height), start_color)
    draw = ImageDraw.Draw(image)

    for y in range(height):
        r = int(start_color[0] + (end_color[0] - start_color[0]) * y / height)
        g = int(start_color[1] + (end_color[1] - start_color[1]) * y / height)
        b = int(start_color[2] + (end_color[2] - start_color[2]) * y / height)
        
        for x in range(width):
            if noise and random.random() > 0.95:
                 d_r = min(255, r + random.randint(-20, 20))
                 d_g = min(255, g + random.randint(-20, 20))
                 d_b = min(255, b + random.randint(-20, 20))
                 draw.point((x, y), fill=(d_r, d_g, d_b))
            else:
                 # Draw line by line for gradient efficiency
                 if x == 0:
                     draw.line([(0, y), (width, y)], fill=(r, g, b))

    # Ensure directory exists
    os.makedirs(os.path.dirname(filename), exist_ok=True)
    image.save(filename)
    print(f"Created {filename}")

# Hero CNC - Dark Metallic Blue/Grey Gradient
create_gradient_image(
    "assets/images/hero_bg_cnc.png", 
    1920, 1080, 
    (10, 20, 30), # Dark Blue
    (40, 50, 60)  # Lighter Metallic Grey
)

# Parts BG - Light Metallic White/Grey with Noise
create_gradient_image(
    "assets/images/bg_parts.png", 
    1920, 1080, 
    (240, 240, 245), # White/Blue tint
    (200, 200, 210), # Light Grey
    noise=True
)
