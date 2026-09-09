const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

// 1. Era 1: Small fledgling fantasy bird (Phoenix chick) taking first flight from ancient mountain nest in dawn mists
const svg1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000" shape-rendering="geometricPrecision">
  <defs>
    <linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2c1a32"/>
      <stop offset="35%" stop-color="#602f43"/>
      <stop offset="70%" stop-color="#b85b43"/>
      <stop offset="100%" stop-color="#e8a86b"/>
    </linearGradient>
    <radialGradient id="sun1" cx="0.5" cy="0.65" r="0.45">
      <stop offset="0%" stop-color="#fff3d1" stop-opacity="0.9"/>
      <stop offset="40%" stop-color="#f5ab6c" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#b85b43" stop-opacity="0"/>
    </radialGradient>
    <filter id="blur1">
      <feGaussianBlur stdDeviation="8"/>
    </filter>
  </defs>
  <!-- Background sky -->
  <rect width="1000" height="1000" fill="url(#sky1)"/>
  <!-- Sun mist -->
  <circle cx="500" cy="650" r="400" fill="url(#sun1)"/>
  
  <!-- Distant mist mountain layers -->
  <path d="M0 700 Q250 550 500 680 T1000 640 L1000 1000 L0 1000 Z" fill="#4a253b" opacity="0.75"/>
  <path d="M0 760 Q350 640 700 750 T1000 710 L1000 1000 L0 1000 Z" fill="#2d172e" opacity="0.88"/>
  <path d="M0 820 Q200 750 450 820 T1000 780 L1000 1000 L0 1000 Z" fill="#180c1e"/>

  <!-- Ancient Cliff Nest on Left -->
  <path d="M0 550 L180 520 L240 600 L120 750 L0 800 Z" fill="#180c1e"/>
  <path d="M120 530 Q170 510 220 535 Q180 560 120 530 Z" fill="#b85b43" opacity="0.6"/>

  <!-- Fledgling Fantasy Bird (Small Phoenix Chick taking first flight up to sunrise) -->
  <g transform="translate(320, 480) scale(0.65) rotate(-22)">
    <!-- Aura -->
    <circle cx="0" cy="0" r="70" fill="#fff5d6" opacity="0.35" filter="url(#blur1)"/>
    <!-- Wings -->
    <path d="M-10 0 C-60 -90 -120 -80 -140 -20 C-90 -10 -40 -5 -10 0 Z" fill="#f2994a"/>
    <path d="M10 0 C60 -110 140 -110 160 -30 C110 -15 50 -5 10 0 Z" fill="#eb5757"/>
    <!-- Body -->
    <path d="M0 -35 C18 -20 22 20 0 50 C-22 20 -18 -20 0 -35 Z" fill="#fff3d1"/>
    <!-- Head & Crest -->
    <circle cx="0" cy="-38" r="14" fill="#fff3d1"/>
    <path d="M0 -52 C5 -70 18 -75 25 -70 C15 -60 8 -52 0 -52 Z" fill="#f2994a"/>
    <!-- Tail Feathers -->
    <path d="M-5 45 C-20 90 -35 120 -40 140 C-25 115 -10 80 -2 48 Z" fill="#eb5757"/>
    <path d="M5 45 C20 90 35 120 40 140 C25 115 10 80 2 48 Z" fill="#f2994a"/>
  </g>

  <!-- Flight trail spark particles -->
  <g fill="#fff3d1" opacity="0.8">
    <circle cx="270" cy="540" r="4"/>
    <circle cx="230" cy="570" r="3"/>
    <circle cx="200" cy="590" r="5"/>
    <circle cx="170" cy="605" r="3"/>
  </g>
</svg>`;

// 2. Era 2: Growing fantasy bird soaring across deep emerald canyons and floating sky islands
const svg2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000" shape-rendering="geometricPrecision">
  <defs>
    <linearGradient id="sky2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0f2b38"/>
      <stop offset="40%" stop-color="#19535f"/>
      <stop offset="75%" stop-color="#0b7a75"/>
      <stop offset="100%" stop-color="#d7c9aa"/>
    </linearGradient>
    <radialGradient id="sun2" cx="0.75" cy="0.35" r="0.5">
      <stop offset="0%" stop-color="#fff8e7" stop-opacity="0.95"/>
      <stop offset="30%" stop-color="#767852" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#0f2b38" stop-opacity="0"/>
    </radialGradient>
    <filter id="blur2"><feGaussianBlur stdDeviation="6"/></filter>
  </defs>
  <rect width="1000" height="1000" fill="url(#sky2)"/>
  <circle cx="750" cy="350" r="350" fill="url(#sun2)"/>

  <!-- Floating Sky Islands -->
  <path d="M120 320 Q220 280 320 310 Q280 370 200 380 Q140 370 120 320 Z" fill="#133033"/>
  <path d="M680 220 Q780 190 860 230 Q800 280 740 280 Q680 260 680 220 Z" fill="#0d2328" opacity="0.85"/>

  <!-- Canyon waterfalls & mist layers -->
  <path d="M0 650 Q300 500 600 620 T1000 580 L1000 1000 L0 1000 Z" fill="#0b3c36" opacity="0.7"/>
  <path d="M0 730 Q400 600 800 710 T1000 680 L1000 1000 L0 1000 Z" fill="#072825" opacity="0.85"/>
  <path d="M0 820 L1000 800 L1000 1000 L0 1000 Z" fill="#031616"/>

  <!-- Growing Fantasy Bird (Spreading wings of amber & crimson over deep canyon) -->
  <g transform="translate(480, 400) scale(1.1) rotate(-15)">
    <!-- Wingspan -->
    <path d="M0 0 C-120 -140 -260 -120 -310 -30 C-200 0 -90 10 0 0 Z" fill="#e76f51"/>
    <path d="M0 0 C-100 -120 -220 -100 -270 -20 Z" fill="#f4a261" opacity="0.7"/>
    <path d="M0 0 C120 -140 260 -120 310 -30 C200 0 90 10 0 0 Z" fill="#e76f51"/>
    <path d="M0 0 C100 -120 220 -100 270 -20 Z" fill="#e9c46a" opacity="0.8"/>
    <!-- Body -->
    <path d="M0 -50 C25 -20 30 40 0 90 C-30 40 -25 -20 0 -50 Z" fill="#fff8e7"/>
    <circle cx="0" cy="-55" r="18" fill="#fff8e7"/>
    <!-- Crown -->
    <path d="M-6 -70 L0 -100 L6 -70 Z" fill="#e76f51"/>
    <!-- Tail plume -->
    <path d="M-8 80 C-30 160 -60 220 -70 250 C-40 200 -15 130 0 85 Z" fill="#e76f51"/>
    <path d="M8 80 C30 160 60 220 70 250 C40 200 15 130 0 85 Z" fill="#f4a261"/>
  </g>
</svg>`;

// 3. Era 3: Fully-fledged majestic Solar Eagle / Simurgh flying high above mountain summits & starry constellations
const svg3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000" shape-rendering="geometricPrecision">
  <defs>
    <linearGradient id="sky3" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0a0a24"/>
      <stop offset="35%" stop-color="#171342"/>
      <stop offset="70%" stop-color="#2d1b54"/>
      <stop offset="100%" stop-color="#5c2b66"/>
    </linearGradient>
    <radialGradient id="aurora" cx="0.5" cy="0.4" r="0.6">
      <stop offset="0%" stop-color="#3a86ff" stop-opacity="0.6"/>
      <stop offset="50%" stop-color="#8338ec" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#0a0a24" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1000" height="1000" fill="url(#sky3)"/>
  <rect width="1000" height="1000" fill="url(#aurora)"/>

  <!-- Constellations & Star Grid -->
  <g fill="#ffffff" opacity="0.8">
    <circle cx="200" cy="150" r="2.5"/><circle cx="280" cy="210" r="2"/><circle cx="350" cy="170" r="3"/>
    <circle cx="700" cy="120" r="3"/><circle cx="820" cy="180" r="2"/><circle cx="760" cy="260" r="2.5"/>
    <line x1="200" y1="150" x2="280" y2="210" stroke="#8338ec" stroke-width="1" opacity="0.5"/>
    <line x1="280" y1="210" x2="350" y2="170" stroke="#8338ec" stroke-width="1" opacity="0.5"/>
  </g>

  <!-- Mountain Summits Above Cloud Sea -->
  <path d="M-50 720 L180 520 L380 760 Z" fill="#1b1233"/>
  <path d="M250 780 L500 480 L720 790 Z" fill="#110924"/>
  <path d="M600 760 L820 540 L1050 780 Z" fill="#1b1233"/>
  <!-- Cloud Sea -->
  <path d="M0 720 Q250 640 500 700 T1000 660 L1000 1000 L0 1000 Z" fill="#3a1c4a" opacity="0.85"/>

  <!-- Majestic Solar Eagle / Simurgh Soaring -->
  <g transform="translate(500, 380) scale(1.35) rotate(-5)">
    <!-- Wingspan -->
    <path d="M0 0 C-150 -180 -320 -150 -380 -40 C-240 -10 -110 10 0 0 Z" fill="#ff006e"/>
    <path d="M0 0 C-130 -150 -270 -120 -320 -30 Z" fill="#ffbe0b" opacity="0.85"/>
    <path d="M0 0 C150 -180 320 -150 380 -40 C240 -10 110 10 0 0 Z" fill="#ff006e"/>
    <path d="M0 0 C130 -150 270 -120 320 -30 Z" fill="#ffbe0b" opacity="0.85"/>
    <!-- Body & Head -->
    <path d="M0 -60 C30 -25 35 45 0 100 C-35 45 -30 -25 0 -60 Z" fill="#ffffff"/>
    <circle cx="0" cy="-65" r="20" fill="#ffffff"/>
    <path d="M-8 -82 L0 -120 L8 -82 Z" fill="#ff006e"/>
    <!-- Tail plume -->
    <path d="M-10 95 C-40 180 -80 260 -95 300 C-50 240 -20 150 0 95 Z" fill="#8338ec"/>
    <path d="M10 95 C40 180 80 260 95 300 C50 240 20 150 0 95 Z" fill="#ff006e"/>
  </g>
</svg>`;

// 4. Era 4: Celestial Phoenix soaring triumphantly across radiant sunrise sky above sprawling landscape
const svg4 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000" shape-rendering="geometricPrecision">
  <defs>
    <linearGradient id="sky4" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#3d0c1a"/>
      <stop offset="35%" stop-color="#8b1e2b"/>
      <stop offset="65%" stop-color="#d94e34"/>
      <stop offset="100%" stop-color="#f7b05b"/>
    </linearGradient>
    <radialGradient id="dawnRays" cx="0.5" cy="0.5" r="0.55">
      <stop offset="0%" stop-color="#fff5cc" stop-opacity="0.95"/>
      <stop offset="40%" stop-color="#f28e2b" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#8b1e2b" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1000" height="1000" fill="url(#sky4)"/>
  <circle cx="500" cy="500" r="450" fill="url(#dawnRays)"/>

  <!-- Radiating Beams of Sun Light -->
  <g stroke="#fff5cc" stroke-width="2" opacity="0.35">
    <line x1="500" y1="500" x2="0" y2="0"/>
    <line x1="500" y1="500" x2="250" y2="0"/>
    <line x1="500" y1="500" x2="500" y2="0"/>
    <line x1="500" y1="500" x2="750" y2="0"/>
    <line x1="500" y1="500" x2="1000" y2="0"/>
  </g>

  <!-- Sprawling Horizon Landscape -->
  <path d="M0 760 Q250 660 500 740 T1000 700 L1000 1000 L0 1000 Z" fill="#521220" opacity="0.75"/>
  <path d="M0 830 Q350 740 700 820 T1000 790 L1000 1000 L0 1000 Z" fill="#2a0810" opacity="0.9"/>
  <path d="M0 900 L1000 880 L1000 1000 L0 1000 Z" fill="#140307"/>

  <!-- Triumphant Celestial Phoenix -->
  <g transform="translate(500, 420) scale(1.5) rotate(-8)">
    <!-- Wings -->
    <path d="M0 0 C-160 -200 -350 -160 -410 -50 C-270 -15 -120 15 0 0 Z" fill="#d94e34"/>
    <path d="M0 0 C-140 -170 -300 -130 -350 -40 Z" fill="#f7b05b" opacity="0.9"/>
    <path d="M0 0 C160 -200 350 -160 410 -50 C270 -15 120 15 0 0 Z" fill="#d94e34"/>
    <path d="M0 0 C140 -170 300 -130 350 -40 Z" fill="#f7b05b" opacity="0.9"/>
    <!-- Body & Head -->
    <path d="M0 -65 C32 -30 38 50 0 110 C-38 50 -32 -30 0 -65 Z" fill="#fff5cc"/>
    <circle cx="0" cy="-70" r="22" fill="#fff5cc"/>
    <path d="M-10 -90 L0 -135 L10 -90 Z" fill="#d94e34"/>
    <!-- Radiant Tail Plumes -->
    <path d="M-12 105 C-45 200 -90 280 -110 330 C-60 260 -22 160 0 105 Z" fill="#d94e34"/>
    <path d="M12 105 C45 200 90 280 110 330 C60 260 22 160 0 105 Z" fill="#f7b05b"/>
  </g>
</svg>`;

// 5. Era 5: Flying Dragon perched serenely on mountain peak looking at a hilltop temple in the clouds
const svg5 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000" shape-rendering="geometricPrecision">
  <defs>
    <linearGradient id="sky5" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0d1b2a"/>
      <stop offset="35%" stop-color="#1b263b"/>
      <stop offset="70%" stop-color="#415a77"/>
      <stop offset="100%" stop-color="#e0a96d"/>
    </linearGradient>
    <radialGradient id="templeGlow" cx="0.8" cy="0.35" r="0.4">
      <stop offset="0%" stop-color="#fff3d1" stop-opacity="0.95"/>
      <stop offset="45%" stop-color="#e0a96d" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#1b263b" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1000" height="1000" fill="url(#sky5)"/>
  <circle cx="800" cy="350" r="350" fill="url(#templeGlow)"/>

  <!-- Mystical Hilltop Temple in the Sky & Cloud Layers -->
  <g transform="translate(720, 260)">
    <!-- Temple Pagoda Silhouette -->
    <path d="M-40 80 L0 30 L40 80 Z" fill="#1b263b"/>
    <path d="M-60 80 L60 80 L50 110 L-50 110 Z" fill="#0d1b2a"/>
    <path d="M-50 110 L0 60 L50 110 Z" fill="#1b263b"/>
    <path d="M-75 110 L75 110 L65 140 L-65 140 Z" fill="#0d1b2a"/>
    <path d="M-45 140 L45 140 L45 190 L-45 190 Z" fill="#1b263b"/>
    <!-- Hilltop cliff below temple -->
    <path d="M-140 190 Q0 150 140 190 L180 350 L-180 350 Z" fill="#0d1b2a"/>
  </g>

  <!-- Surrounding Fantasy Cloud Waves -->
  <path d="M0 650 Q250 540 500 620 T1000 560 L1000 1000 L0 1000 Z" fill="#2d3d52" opacity="0.75"/>
  <path d="M0 750 Q350 630 700 730 T1000 690 L1000 1000 L0 1000 Z" fill="#152232" opacity="0.88"/>

  <!-- Mountain Peak in Foreground Left -->
  <path d="M-80 900 L280 480 L520 920 Z" fill="#0b131f"/>

  <!-- Majestic Flying Dragon Perched on Peak Looking at Temple -->
  <g transform="translate(260, 520) scale(0.95)">
    <!-- Dragon Folded/Spread Wing Silhouette -->
    <path d="M0 0 C-60 -120 -150 -180 -220 -160 C-180 -100 -120 -40 0 0 Z" fill="#c0392b"/>
    <path d="M0 0 C40 -140 120 -220 220 -200 C160 -120 90 -40 0 0 Z" fill="#e74c3c"/>
    <path d="M220 -200 C270 -160 290 -100 240 -40 C180 -60 120 -30 0 0 Z" fill="#d35400" opacity="0.85"/>
    <!-- Body & Spine -->
    <path d="M-20 -30 Q0 30 20 80 Q0 120 -40 160 Q-20 100 -10 40 Z" fill="#1a252f"/>
    <!-- Neck & Head facing toward Temple Right -->
    <path d="M-10 -30 Q20 -80 60 -110 Q80 -120 100 -110 C90 -95 70 -85 50 -70 Q10 -30 -10 -30 Z" fill="#e74c3c"/>
    <!-- Head & Horns -->
    <path d="M100 -110 C120 -125 135 -120 145 -105 C130 -100 115 -95 100 -90 Z" fill="#ffffff"/>
    <path d="M105 -115 L125 -145 L115 -110 Z" fill="#e74c3c"/>
    <!-- Tail curving down peak -->
    <path d="M-40 160 Q-100 220 -160 260 Q-120 240 -60 190 Z" fill="#c0392b"/>
  </g>
</svg>`;

fs.writeFileSync(path.join(publicDir, 'journey-foundations.jpg'), svg1, 'utf8');
fs.writeFileSync(path.join(publicDir, 'journey-capability.jpg'), svg2, 'utf8');
fs.writeFileSync(path.join(publicDir, 'journey-platforms.jpg'), svg3, 'utf8');
fs.writeFileSync(path.join(publicDir, 'journey-leadership.jpg'), svg4, 'utf8');
fs.writeFileSync(path.join(publicDir, 'journey-horizon.jpg'), svg5, 'utf8');

console.log('Successfully generated 5 square fantasy watercolor artwork files in public directory.');
