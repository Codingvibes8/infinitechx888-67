"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Watches every element marked with `data-reveal` and adds `is-revealed`
 * once it enters the viewport. Re-scans after client-side navigation and
 * when new elements are mounted (e.g. filtered project grids).
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = () =>
      Array.from(
        document.querySelectorAll<HTMLElement>(
          "[data-reveal]:not(.is-revealed)"
        )
      );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements().forEach((element) => element.classList.add("is-revealed"));
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      elements().forEach((element) => element.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    const observeAll = () => {
      elements().forEach((element) => observer.observe(element));
    };

    observeAll();

    let frame = 0;
    const scheduleScan = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        observeAll();
      });
    };

    const mutations = new MutationObserver((records) => {
      if (records.some((record) => record.addedNodes.length > 0)) {
        scheduleScan();
      }
    });

    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}
