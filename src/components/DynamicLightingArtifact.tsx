import React, { useState, useRef, useCallback, useMemo } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'motion/react';
import { ANIMAL_SVGS } from '../data/animalData';

const ANIMAL_ALIASES: Record<string, string> = {
  eagle: 'owl',
  stag: 'reindeer',
};

const getSvgDataUri = (animalType: string, fallbackSrc: string): string => {
  const normalized = animalType ? animalType.toLowerCase().trim() : '';
  const key = ANIMAL_ALIASES[normalized] || normalized;
  const rawSvg = ANIMAL_SVGS[key] || (fallbackSrc && fallbackSrc.startsWith('data:image/svg+xml') ? null : ANIMAL_SVGS['lion']);
  if (rawSvg) {
    return `data:image/svg+xml;utf8,${encodeURIComponent(rawSvg)}`;
  }
  return fallbackSrc;
};

interface DynamicLightingArtifactProps {
  imageSrc: string;
  altText: string;
  className?: string;
  aspectRatio?: string;
  animalType?: string;
  isFeatured?: boolean;
}

export const DynamicLightingArtifact: React.FC<DynamicLightingArtifactProps> = ({
  imageSrc,
  altText,
  className = '',
  aspectRatio = 'aspect-square',
  animalType = '',
  isFeatured = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const displaySrc = useMemo(() => getSvgDataUri(animalType, imageSrc), [animalType, imageSrc]);

  // Raw normalized mouse coordinates (-1 to 1)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid, physics-based motion
  const springConfig = { damping: 22, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D rotations based on mouse position
  const rotateX = useTransform(smoothY, [-1, 1], [isFeatured ? 12 : 10, isFeatured ? -12 : -10]);
  const rotateY = useTransform(smoothX, [-1, 1], [isFeatured ? -12 : -10, isFeatured ? 12 : 10]);
  const translateZ = useTransform(smoothX, [-1, 0, 1], [isFeatured ? 16 : 10, isFeatured ? 26 : 18, isFeatured ? 16 : 10]);

  // Lighting specular glare coordinates (0% to 100%)
  const lightPercentX = useTransform(smoothX, [-1, 1], [20, 80]);
  const lightPercentY = useTransform(smoothY, [-1, 1], [20, 80]);

  // Dynamic ground shadow offsets (moves naturally opposite to light direction)
  const shadowX = useTransform(smoothX, [-1, 1], [18, -18]);
  const shadowY = useTransform(smoothY, [-1, 1], [20, -10]);
  const shadowScale = useTransform(smoothY, [-1, 1], [0.96, 1.04]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const normX = ((x / rect.width) * 2) - 1;
    const normY = ((y / rect.height) * 2) - 1;

    mouseX.set(normX);
    mouseY.set(normY);
  }, [mouseX, mouseY]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || e.touches.length === 0) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    const normX = ((x / rect.width) * 2) - 1;
    const normY = ((y / rect.height) * 2) - 1;

    mouseX.set(normX);
    mouseY.set(normY);
  }, [mouseX, mouseY]);

  const handleTouchStart = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleTouchEnd = useCallback(() => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`relative w-full ${aspectRatio} flex items-center justify-center cursor-pointer select-none ${className}`}
      style={{ perspective: 1000 }}
    >
      {/* 1. Organic Ambient Occlusion Ground Shadow on the Canvas */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/5 h-6 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(179, 64, 46, 0.28) 0%, rgba(26, 29, 27, 0.18) 45%, transparent 75%)',
          x: shadowX,
          y: shadowY,
          scale: shadowScale,
          filter: 'blur(10px)',
          opacity: isHovered ? 0.9 : 0.5
        }}
        transition={{ duration: 0.2 }}
      />

      {/* 2. Seamless Floating Geometric Sculpture Layer */}
      <motion.div
        className="relative z-10 w-full h-full flex items-center justify-center p-2"
        style={{
          rotateX,
          rotateY,
          translateZ,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          scale: isHovered ? 1.05 : 1,
          y: isHovered ? -4 : 0
        }}
        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      >
        {/* Dynamic Multi-layered Drop Shadow */}
        <motion.div
          className="relative w-full h-full flex items-center justify-center"
          style={{
            filter: isHovered 
              ? 'drop-shadow(0 16px 28px rgba(179, 64, 46, 0.22)) drop-shadow(0 6px 12px rgba(26, 29, 27, 0.16))'
              : 'drop-shadow(0 8px 18px rgba(26, 29, 27, 0.10))'
          }}
        >
          <img
            src={displaySrc}
            alt={altText}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain pointer-events-none transition-transform duration-300"
            loading="lazy"
          />

          {/* Dynamic Facet Specular Glare (Glinting across the origami planes) */}
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-xl mix-blend-overlay transition-opacity duration-200"
            style={{
              background: useTransform(
                [lightPercentX, lightPercentY],
                ([x, y]) => `radial-gradient(circle 180px at ${x}% ${y}%, rgba(255, 255, 255, 0.7) 0%, rgba(255, 240, 230, 0.2) 50%, transparent 80%)`
              ),
              opacity: isHovered ? 0.85 : 0
            }}
          />

          {/* Dynamic Rim Highlight along the directional light vector */}
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-xl mix-blend-screen transition-opacity duration-300"
            style={{
              background: useTransform(
                [lightPercentX, lightPercentY],
                ([x, y]) => `linear-gradient(${Math.atan2(Number(y) - 50, Number(x) - 50) * (180 / Math.PI) + 90}deg, rgba(255, 255, 255, 0.3) 0%, transparent 60%)`
              ),
              opacity: isHovered ? 0.55 : 0
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
