"use client";

import { useState, useEffect, useCallback } from 'react';

const images = [
  '/background/sreebg1.webp',
  '/background/sreebg2.webp',
  '/background/sreebg3.webp'
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      overflow: 'hidden',
      background: 'var(--dark)'
    }}>
      {images.map((src, index) => (
        <div 
          key={src}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(to bottom, rgba(2, 6, 23, 0.55) 0%, rgba(2, 6, 23, 0.85) 70%, rgba(2, 6, 23, 0.98) 100%), url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: currentIndex === index ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out',
            willChange: 'opacity',
          }}
        />
      ))}
    </div>
  );
}
