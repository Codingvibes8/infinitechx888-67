"use client";

import { useState, useEffect } from "react";

interface Star {
  id: number;
  size: number;
  top: number;
  delay: number;
  duration: number;
  opacity: number;
}

function generateStars(count: number): Star[] {
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      id: i,
      size: Math.random() * 2.5 + 1,
      top: Math.random() * 100,
      delay: Math.random() * 12,
      duration: Math.random() * 10 + 8,
      opacity: Math.random() * 0.6 + 0.15,
    });
  }
  return stars;
}

export function StarParticles({ count = 40 }: { count?: number }) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(generateStars(count));
  }, [count]);

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-foreground"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}%`,
            right: "-4px",
            opacity: star.opacity,
            animation: `star-drift ${star.duration}s linear ${star.delay}s infinite`,
          }}
        />
      ))}

      <style>{`
        @keyframes star-drift {
          0% {
            transform: translateX(0);
            opacity: 0;
          }
          5% {
            opacity: var(--star-opacity, 0.4);
          }
          90% {
            opacity: var(--star-opacity, 0.4);
          }
          100% {
            transform: translateX(calc(-100vw - 8px));
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
