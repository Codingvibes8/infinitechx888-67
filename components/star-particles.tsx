"use client";

import { useMemo } from "react";

interface Star {
  id: number;
  size: number;
  top: number;
  delay: number;
  duration: number;
  opacity: number;
}

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generateStars(count: number, seed = 1337): Star[] {
  const rand = mulberry32(seed);
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      id: i,
      size: rand() * 2.5 + 1,
      top: rand() * 100,
      delay: rand() * 12,
      duration: rand() * 10 + 8,
      opacity: rand() * 0.6 + 0.15,
    });
  }
  return stars;
}

export function StarParticles({ count = 40 }: { count?: number }) {
  const stars = useMemo(() => generateStars(count), [count]);

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
