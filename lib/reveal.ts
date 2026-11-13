import type { CSSProperties } from "react";

export type RevealDirection = "up" | "down" | "left" | "right" | "scale";

/**
 * Returns the attributes used by the global scroll-reveal observer.
 * `direction` describes where the element travels FROM as it enters view.
 */
export function reveal(direction: RevealDirection = "up", delay = 0) {
  return {
    "data-reveal": direction,
    style: {
      "--reveal-delay": `${Math.max(0, delay)}ms`,
    } as CSSProperties,
  };
}

/**
 * Alternates cards between rising from below and dropping in from above,
 * with a capped stagger so long grids never feel slow.
 */
export function revealAlternating(index: number, step = 70, max = 420) {
  return reveal(index % 2 === 0 ? "up" : "down", Math.min(index * step, max));
}
