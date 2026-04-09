"use client";

import { useState, useEffect } from 'react';

const images = [
  '/background/sreebg1.webp',
  '/background/sreebg2.webp',
  '/background/sreebg3.webp'
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Scrolls every 3 seconds
    
    return () => clearInterval(timer);
  }, []);

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
      <div style={{
        display: 'flex',
        width: `${images.length * 100}%`,
        height: '100%',
        transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
        transition: 'transform 0.5s ease-in-out'
      }}>
        {images.map((src) => (
          <div 
            key={src}
            style={{
              width: `${100 / images.length}%`,
              height: '100%',
              backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.6) 0%, rgba(15, 23, 42, 0.9) 100%), url(${src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>
    </div>
  );
}
