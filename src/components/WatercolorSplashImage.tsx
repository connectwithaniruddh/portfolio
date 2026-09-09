import React, { useRef, useEffect, useState, useCallback } from 'react';

interface WatercolorSplashImageProps {
  src: string;
  alt: string;
  className?: string;
  period?: string;
}

interface WatercolorDot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  targetRadius: number;
  alpha: number;
  decay: number;
  color: string;
  bleedFactor: number;
  irregularity: number[];
}

export const WatercolorSplashImage: React.FC<WatercolorSplashImageProps> = ({
  src,
  alt,
  className = '',
  period = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<WatercolorDot[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  // Natural editorial watercolor pigment ink palette
  const PIGMENTS = [
    { r: 179, g: 64, b: 46 },   // Vermilion
    { r: 196, g: 122, b: 60 },  // Ochre / Amber
    { r: 142, g: 85, b: 75 },   // Terracotta wash
    { r: 86, g: 107, b: 102 },  // Muted sage teal
    { r: 92, g: 64, b: 51 }     // Raw umber
  ];

  const spawnNaturalDotCluster = useCallback((baseX: number, baseY: number, count: number = 3) => {
    for (let i = 0; i < count; i++) {
      const pigment = PIGMENTS[Math.floor(Math.random() * PIGMENTS.length)];
      const colorStr = `rgba(${pigment.r}, ${pigment.g}, ${pigment.b}, `;
      
      // Random splatter angle and distance
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * 22;
      const x = baseX + Math.cos(angle) * dist;
      const y = baseY + Math.sin(angle) * dist;
      
      // Fine micro-droplets (1.5px to 5px) with soft bleeding edge
      const initialRadius = 0.8 + Math.random() * 1.5;
      const targetRadius = initialRadius + 1.2 + Math.random() * 3.5;
      
      const numPoints = 6 + Math.floor(Math.random() * 4);
      const irregularity: number[] = [];
      for (let p = 0; p < numPoints; p++) {
        irregularity.push(0.85 + Math.random() * 0.3);
      }

      dotsRef.current.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: initialRadius,
        targetRadius,
        alpha: 0.55 + Math.random() * 0.3,
        decay: 0.008 + Math.random() * 0.008,
        color: colorStr,
        bleedFactor: 0.08 + Math.random() * 0.06,
        irregularity
      });
    }
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100
    });

    // Spawn natural dot splatters on movement
    if (Math.random() > 0.35) {
      spawnNaturalDotCluster(x, y, 2);
    }
  }, [spawnNaturalDotCluster]);

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Initial gentle dot burst
    spawnNaturalDotCluster(x, y, 5);
  }, [spawnNaturalDotCluster]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  // Continuous watercolor simulation on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let isRunning = true;

    const render = () => {
      if (!isRunning || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const activeDots: WatercolorDot[] = [];

      for (let i = 0; i < dotsRef.current.length; i++) {
        const dot = dotsRef.current[i];

        // Grow gently (capillary bleed) and fade
        if (dot.radius < dot.targetRadius) {
          dot.radius += dot.bleedFactor;
        }
        dot.x += dot.vx;
        dot.y += dot.vy;
        dot.alpha -= dot.decay;

        if (dot.alpha > 0.01) {
          ctx.save();
          ctx.beginPath();
          
          const points = dot.irregularity.length;
          for (let p = 0; p < points; p++) {
            const angle = (p / points) * Math.PI * 2;
            const currentR = dot.radius * dot.irregularity[p];
            const px = dot.x + Math.cos(angle) * currentR;
            const py = dot.y + Math.sin(angle) * currentR;
            if (p === 0) {
              ctx.moveTo(px, py);
            } else {
              ctx.lineTo(px, py);
            }
          }
          ctx.closePath();

          // Organic gradient creating pooled watercolor center and delicate feathered drying edge
          const grad = ctx.createRadialGradient(
            dot.x, dot.y, 0,
            dot.x, dot.y, Math.max(dot.radius, 1)
          );
          grad.addColorStop(0, `${dot.color}${dot.alpha * 0.75})`);
          grad.addColorStop(0.65, `${dot.color}${dot.alpha * 0.5})`);
          grad.addColorStop(1, `${dot.color}${dot.alpha * 0.9})`); // drying rim

          ctx.fillStyle = grad;
          ctx.fill();

          ctx.restore();
          activeDots.push(dot);
        }
      }

      dotsRef.current = activeDots;
      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      isRunning = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Update canvas sizing on resize
  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current || !canvasRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      canvasRef.current.width = rect.width;
      canvasRef.current.height = rect.height;
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full aspect-square rounded-2xl overflow-hidden border border-[#DCD9D1] border-r-[3px] border-b-[3px] border-r-[#1A1D1B] border-b-[#1A1D1B] bg-[#F2F0EA] group shadow-[6px_6px_0px_0px_#1A1D1B,9px_9px_18px_rgba(26,29,27,0.16)] transition-all duration-300 hover:shadow-[8px_8px_0px_0px_#1A1D1B,12px_12px_22px_rgba(26,29,27,0.22)] hover:-translate-y-0.5 hover:-translate-x-0.5 ${className}`}
    >
      {/* 1. Base Archival Watercolor Layer */}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover transition-all duration-700 filter saturate-[0.88] contrast-[0.96] brightness-[1.01]"
        loading="lazy"
      />

      {/* 2. Soft Chromatic Bloom under cursor */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          maskImage: `radial-gradient(circle 140px at ${mousePos.x}% ${mousePos.y}%, black 0%, rgba(0,0,0,0.5) 60%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 140px at ${mousePos.x}% ${mousePos.y}%, black 0%, rgba(0,0,0,0.5) 60%, transparent 100%)`,
        }}
      >
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter saturate-[1.25] contrast-[1.04]"
          loading="lazy"
        />
      </div>

      {/* 3. Fluid Watercolor Dot Splatter Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10 mix-blend-multiply opacity-95"
      />

      {/* 4. Subtle Wet Pigment Sheen Layer */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-soft-light transition-opacity duration-200"
        style={{
          background: `radial-gradient(circle 160px at ${mousePos.x}% ${mousePos.y}%, rgba(255, 240, 225, 0.35) 0%, transparent 75%)`,
          opacity: isHovered ? 0.75 : 0
        }}
      />

      {/* Period Marker Badge */}
      {period && (
        <div className="absolute bottom-3 left-3 z-20 px-2.5 py-1 rounded bg-[#1A1D1B]/85 backdrop-blur-xs text-[#F9F7F2] text-[11px] font-mono tracking-wider border border-white/10 shadow-xs">
          {period}
        </div>
      )}
    </div>
  );
};
