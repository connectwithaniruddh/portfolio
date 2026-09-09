import math
import random
import os
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance

# Output folder
public_dir = os.path.join(os.getcwd(), 'public')
os.makedirs(public_dir, exist_ok=True)

WIDTH, HEIGHT = 1200, 1200

def create_washi_paper_texture():
    """Generates an authentic warm Japanese Washi paper background texture."""
    img = Image.new('RGB', (WIDTH, HEIGHT), color='#F6F3EC')
    draw = ImageDraw.Draw(img)
    
    # Add subtle organic noise speckles for paper fibers
    random.seed(42)
    for _ in range(8000):
        x = random.randint(0, WIDTH - 1)
        y = random.randint(0, HEIGHT - 1)
        shade = random.randint(215, 235)
        draw.point((x, y), fill=(shade, shade - 10, shade - 20))
        
    # Soft vignette and atmospheric wash
    vignette = Image.new('L', (WIDTH, HEIGHT), 255)
    v_draw = ImageDraw.Draw(vignette)
    v_draw.ellipse((-100, -100, WIDTH + 100, HEIGHT + 100), fill=230)
    vignette = vignette.filter(ImageFilter.GaussianBlur(80))
    
    img = Image.composite(img, Image.new('RGB', (WIDTH, HEIGHT), '#EBE4D5'), vignette)
    return img

def add_hanko_seal(img, text_symbol="飛"):
    """Adds a traditional Japanese red artist Hanko stamp seal in bottom corner."""
    seal_size = 70
    seal = Image.new('RGBA', (seal_size, seal_size), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(seal)
    
    # Slightly irregular hand-carved square border
    s_draw.rectangle([4, 4, seal_size - 4, seal_size - 4], outline='#B82619', width=4)
    # Background wash
    s_draw.rectangle([6, 6, seal_size - 6, seal_size - 6], fill=(184, 38, 25, 220))
    
    # Inner white character/symbol
    s_draw.text((seal_size//2 - 12, seal_size//2 - 18), text_symbol, fill='#F6F3EC')
    
    # Paste seal on bottom right
    img.paste(seal, (WIDTH - 120, HEIGHT - 120), mask=seal)
    return img

def draw_watercolor_wash(draw_canvas, points, fill_color, blur_radius=12):
    """Draws an organic watercolor shape with soft bleeding edges."""
    mask = Image.new('L', (WIDTH, HEIGHT), 0)
    m_draw = ImageDraw.Draw(mask)
    m_draw.polygon(points, fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(blur_radius))
    
    color_img = Image.new('RGB', (WIDTH, HEIGHT), fill_color)
    draw_canvas.paste(color_img, (0, 0), mask=mask)

def generate_era_1():
    """Era 1: Japanese watercolor poster - Small fledgling Phoenix chick in dawn mist."""
    img = create_washi_paper_texture()
    overlay = Image.new('RGBA', (WIDTH, HEIGHT), (0,0,0,0))
    draw = ImageDraw.Draw(overlay)
    
    # Soft sky wash (Indigo to Dawn Ochre)
    for y in range(0, 700, 10):
        alpha = int(180 * (1 - y / 700))
        draw.rectangle([0, y, WIDTH, y + 15], fill=(205, 120, 85, alpha))
    
    # Sun disk wash (Vermilion/Gold)
    draw.ellipse([600, 200, 1000, 600], fill=(218, 75, 45, 160))
    
    # Misty mountain silhouettes (Sumi ink wash)
    draw.polygon([(0, 700), (300, 520), (650, 720), (1200, 650), (1200, 1200), (0, 1200)], fill=(45, 30, 48, 210))
    draw.polygon([(0, 800), (450, 680), (900, 830), (1200, 780), (1200, 1200), (0, 1200)], fill=(28, 18, 30, 240))
    
    # Ancient Pine branch and Nest
    draw.line([(0, 600), (280, 560)], fill=(30, 20, 15, 255), width=18)
    draw.line([(280, 560), (350, 590)], fill=(30, 20, 15, 255), width=10)
    
    # Small fledgling Phoenix bird taking first flight
    # Wings
    draw.polygon([(260, 520), (180, 420), (220, 480)], fill=(218, 75, 45, 230))
    draw.polygon([(280, 510), (340, 390), (320, 470)], fill=(235, 140, 55, 230))
    # Body
    draw.ellipse([250, 500, 295, 545], fill=(245, 230, 190, 255))
    # Head & crest
    draw.ellipse([270, 485, 298, 512], fill=(245, 230, 190, 255))
    draw.line([(290, 485), (310, 465)], fill=(218, 75, 45, 255), width=4)
    # Tail plume
    draw.line([(250, 535), (200, 580)], fill=(218, 75, 45, 200), width=5)
    
    img = Image.alpha_composite(img.convert('RGBA'), overlay)
    img = img.filter(ImageFilter.SMOOTH_MORE)
    img = add_hanko_seal(img.convert('RGB'), "初")
    img.save(os.path.join(public_dir, 'journey-foundations.jpg'), quality=95)
    print('Generated Japanese watercolor poster artwork: journey-foundations.jpg')

def generate_era_2():
    """Era 2: Japanese watercolor poster - Growing bird soaring across emerald canyons."""
    img = create_washi_paper_texture()
    overlay = Image.new('RGBA', (WIDTH, HEIGHT), (0,0,0,0))
    draw = ImageDraw.Draw(overlay)
    
    # Deep Emerald & Teal Sky wash
    for y in range(0, 800, 12):
        alpha = int(170 * (1 - y / 800))
        draw.rectangle([0, y, WIDTH, y + 16], fill=(25, 85, 80, alpha))
        
    # Floating mist clouds
    draw.ellipse([100, 250, 500, 400], fill=(230, 225, 210, 110))
    draw.ellipse([650, 180, 1100, 350], fill=(230, 225, 210, 110))
    
    # Deep Canyon Mountains (Indigo Sumi-e)
    draw.polygon([(0, 620), (350, 480), (700, 660), (1200, 580), (1200, 1200), (0, 1200)], fill=(20, 50, 52, 220))
    draw.polygon([(0, 760), (500, 620), (950, 780), (1200, 720), (1200, 1200), (0, 1200)], fill=(10, 30, 32, 250))
    
    # Soaring Fantasy Bird (Amber & Flame Wings)
    # Left Wing
    draw.polygon([(550, 420), (250, 280), (380, 410)], fill=(225, 105, 55, 240))
    # Right Wing
    draw.polygon([(550, 420), (820, 250), (710, 390)], fill=(235, 155, 45, 240))
    # Body
    draw.ellipse([515, 390, 585, 460], fill=(250, 245, 225, 255))
    # Head & beak
    draw.ellipse([540, 370, 580, 405], fill=(250, 245, 225, 255))
    draw.polygon([(575, 385), (605, 380), (575, 395)], fill=(225, 105, 55, 255))
    # Long flowing tail feathers
    draw.line([(530, 455), (420, 590)], fill=(225, 105, 55, 220), width=7)
    draw.line([(550, 460), (470, 620)], fill=(235, 155, 45, 220), width=7)
    
    img = Image.alpha_composite(img.convert('RGBA'), overlay)
    img = img.filter(ImageFilter.SMOOTH_MORE)
    img = add_hanko_seal(img.convert('RGB'), "翔")
    img.save(os.path.join(public_dir, 'journey-capability.jpg'), quality=95)
    print('Generated Japanese watercolor poster artwork: journey-capability.jpg')

def generate_era_3():
    """Era 3: Japanese watercolor poster - Majestic Solar Simurgh above mountain peaks under starry skies."""
    img = create_washi_paper_texture()
    overlay = Image.new('RGBA', (WIDTH, HEIGHT), (0,0,0,0))
    draw = ImageDraw.Draw(overlay)
    
    # Deep Night Indigo / Ultramarine Wash
    for y in range(0, 850, 15):
        alpha = int(190 * (1 - y / 850))
        draw.rectangle([0, y, WIDTH, y + 20], fill=(18, 22, 58, alpha))
        
    # Gold Constellation Star points
    random.seed(101)
    for _ in range(60):
        sx = random.randint(50, WIDTH - 50)
        sy = random.randint(50, 450)
        sr = random.randint(2, 4)
        draw.ellipse([sx - sr, sy - sr, sx + sr, sy + sr], fill=(245, 215, 120, 200))
        
    # Moon / Celestial Ring
    draw.ellipse([450, 150, 750, 450], fill=(245, 215, 120, 45))
    
    # Mountain Peak Silhouettes
    draw.polygon([(0, 720), (280, 520), (550, 750), (1200, 620), (1200, 1200), (0, 1200)], fill=(25, 20, 45, 230))
    draw.polygon([(0, 820), (450, 660), (900, 820), (1200, 760), (1200, 1200), (0, 1200)], fill=(12, 10, 25, 255))
    
    # Majestic Solar Eagle / Simurgh
    # Wingspan
    draw.polygon([(520, 360), (150, 200), (320, 360)], fill=(195, 45, 95, 240))
    draw.polygon([(520, 360), (890, 180), (720, 360)], fill=(245, 180, 50, 240))
    # Core
    draw.ellipse([480, 320, 560, 410], fill=(255, 250, 240, 255))
    draw.ellipse([505, 295, 550, 335], fill=(255, 250, 240, 255))
    # Crown
    draw.polygon([(525, 295), (535, 255), (545, 295)], fill=(195, 45, 95, 255))
    # Triple Flowing Tail Plumes
    draw.line([(490, 400), (340, 580)], fill=(195, 45, 95, 220), width=8)
    draw.line([(520, 405), (440, 620)], fill=(245, 180, 50, 220), width=8)
    draw.line([(550, 400), (540, 610)], fill=(135, 45, 185, 220), width=8)
    
    img = Image.alpha_composite(img.convert('RGBA'), overlay)
    img = img.filter(ImageFilter.SMOOTH_MORE)
    img = add_hanko_seal(img.convert('RGB'), "鳳")
    img.save(os.path.join(public_dir, 'journey-platforms.jpg'), quality=95)
    print('Generated Japanese watercolor poster artwork: journey-platforms.jpg')

def generate_era_4():
    """Era 4: Japanese watercolor poster - Celestial Phoenix soaring across radiant sunrise sky."""
    img = create_washi_paper_texture()
    overlay = Image.new('RGBA', (WIDTH, HEIGHT), (0,0,0,0))
    draw = ImageDraw.Draw(overlay)
    
    # Radiant Sunrise Wash (Imperial Crimson to Gold)
    for y in range(0, 900, 15):
        alpha = int(200 * (1 - y / 900))
        draw.rectangle([0, y, WIDTH, y + 20], fill=(185, 40, 45, alpha))
        
    # Sun rays background wash
    draw.ellipse([300, 300, 900, 900], fill=(250, 190, 80, 140))
    draw.ellipse([420, 420, 780, 780], fill=(255, 240, 180, 180))
    
    # Distant Horizon Mountain silhouetted against sunrise
    draw.polygon([(0, 780), (350, 660), (700, 790), (1200, 720), (1200, 1200), (0, 1200)], fill=(75, 20, 30, 210))
    draw.polygon([(0, 860), (550, 760), (950, 870), (1200, 820), (1200, 1200), (0, 1200)], fill=(40, 10, 15, 240))
    
    # Triumphant Phoenix (Spreading full wings)
    # Left Wing
    draw.polygon([(520, 420), (120, 220), (320, 410)], fill=(185, 40, 45, 240))
    draw.polygon([(520, 420), (220, 280), (380, 420)], fill=(245, 150, 40, 240))
    # Right Wing
    draw.polygon([(520, 420), (920, 220), (720, 410)], fill=(185, 40, 45, 240))
    draw.polygon([(520, 420), (820, 280), (660, 420)], fill=(245, 150, 40, 240))
    # Body & Head
    draw.ellipse([475, 370, 565, 470], fill=(255, 248, 230, 255))
    draw.ellipse([500, 340, 545, 385], fill=(255, 248, 230, 255))
    # Head Crest
    draw.polygon([(515, 340), (522, 290), (530, 340)], fill=(185, 40, 45, 255))
    # Flowing Plumes
    draw.line([(480, 460), (320, 650)], fill=(185, 40, 45, 220), width=9)
    draw.line([(520, 465), (460, 690)], fill=(245, 150, 40, 220), width=9)
    draw.line([(560, 460), (600, 670)], fill=(185, 40, 45, 220), width=9)
    
    img = Image.alpha_composite(img.convert('RGBA'), overlay)
    img = img.filter(ImageFilter.SMOOTH_MORE)
    img = add_hanko_seal(img.convert('RGB'), "凰")
    img.save(os.path.join(public_dir, 'journey-leadership.jpg'), quality=95)
    print('Generated Japanese watercolor poster artwork: journey-leadership.jpg')

def generate_era_5():
    """Era 5: Japanese watercolor poster - Flying dragon perched on mountain peak looking at hilltop temple."""
    img = create_washi_paper_texture()
    overlay = Image.new('RGBA', (WIDTH, HEIGHT), (0,0,0,0))
    draw = ImageDraw.Draw(overlay)
    
    # Celestial Twilight Wash (Slate Blue to Amber)
    for y in range(0, 850, 15):
        alpha = int(180 * (1 - y / 850))
        draw.rectangle([0, y, WIDTH, y + 20], fill=(28, 45, 68, alpha))
        
    # Hilltop Temple in Clouds on Right
    draw.ellipse([700, 250, 1050, 550], fill=(245, 200, 120, 110))
    # Temple Pagoda Roof Silhouette
    draw.polygon([(820, 300), (870, 250), (920, 300)], fill=(20, 30, 45, 255))
    draw.rectangle([835, 300, 905, 330], fill=(15, 22, 35, 255))
    draw.polygon([(800, 330), (870, 280), (940, 330)], fill=(20, 30, 45, 255))
    draw.rectangle([820, 330, 920, 380], fill=(15, 22, 35, 255))
    
    # Mountain Peak Left Foreground
    draw.polygon([(-50, 950), (280, 520), (520, 980)], fill=(12, 20, 32, 255))
    
    # Flying Dragon Perched on Peak looking toward Temple Right
    # Dragon Wing
    draw.polygon([(260, 520), (120, 360), (220, 480)], fill=(175, 40, 45, 230))
    draw.polygon([(260, 520), (380, 340), (320, 480)], fill=(215, 85, 40, 230))
    # Body & Tail curving down mountain
    draw.polygon([(230, 520), (280, 550), (240, 680), (200, 620)], fill=(20, 30, 45, 255))
    draw.line([(220, 650), (120, 780)], fill=(175, 40, 45, 230), width=10)
    # Dragon Neck & Head looking toward Temple (Right)
    draw.line([(260, 520), (340, 450)], fill=(20, 30, 45, 255), width=16)
    # Head & Horns
    draw.ellipse([330, 430, 370, 465], fill=(20, 30, 45, 255))
    draw.polygon([(365, 440), (395, 435), (365, 450)], fill=(175, 40, 45, 255))
    draw.line([(340, 430), (320, 395)], fill=(215, 85, 40, 255), width=4)
    
    # Cloud Waves
    draw.ellipse([0, 680, 600, 850], fill=(230, 225, 210, 110))
    draw.ellipse([450, 620, 1100, 800], fill=(230, 225, 210, 110))
    
    img = Image.alpha_composite(img.convert('RGBA'), overlay)
    img = img.filter(ImageFilter.SMOOTH_MORE)
    img = add_hanko_seal(img.convert('RGB'), "龍")
    img.save(os.path.join(public_dir, 'journey-horizon.jpg'), quality=95)
    print('Generated Japanese watercolor poster artwork: journey-horizon.jpg')

if __name__ == '__main__':
    generate_era_1()
    generate_era_2()
    generate_era_3()
    generate_era_4()
    generate_era_5()
    print('All 5 Japanese watercolor poster artworks generated successfully in public/!')
