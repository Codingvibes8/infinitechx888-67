"use client";

import { useEffect, useRef } from "react";

export function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mq.matches) {
      videoRef.current?.play().catch(() => {});
    }
  }, []);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload="auto"
      poster="/hero-section-image.png"
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
      aria-hidden="true"
    >
      <source src="/hero-video-compressed.mp4" type="video/mp4" />
    </video>
  );
}
