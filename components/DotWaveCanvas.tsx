"use client";
import { useEffect, useRef } from "react";

const SPACING = 32;
const BAND = 55;
const SPEED = 0.11; // px per ms
const BASE = { r: 192, g: 216, b: 240, a: 0.4 }; // #c0d8f0, the original dot grid
const LIT = { r: 0, g: 85, b: 224 }; // #0055e0

type Ripple = { x: number; y: number; born: number; maxR: number };

export default function DotWaveCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0;
    let H = 0;
    let raf = 0;
    let onScreen = true;
    let ripples: Ripple[] = [];
    let nextRipple = performance.now() + 500;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas!.offsetWidth;
      H = canvas!.offsetHeight;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function spawn(now: number) {
      ripples.push({
        x: W * (0.1 + Math.random() * 0.8),
        y: H * (0.15 + Math.random() * 0.7),
        born: now,
        maxR: Math.max(W, H) * (0.45 + Math.random() * 0.25),
      });
    }

    function draw(now: number) {
      ctx!.clearRect(0, 0, W, H);
      const live = ripples.map((rp) => {
        const r = (now - rp.born) * SPEED;
        return { ...rp, r, fade: Math.max(0, 1 - r / rp.maxR) };
      });

      for (let y = SPACING / 2; y < H; y += SPACING) {
        for (let x = SPACING / 2; x < W; x += SPACING) {
          let lit = 0;
          for (const rp of live) {
            const d = Math.hypot(x - rp.x, y - rp.y) - rp.r;
            if (Math.abs(d) > BAND * 2) continue;
            lit = Math.max(lit, Math.exp(-(d * d) / (BAND * BAND)) * rp.fade);
          }
          const r = Math.round(BASE.r + (LIT.r - BASE.r) * lit);
          const g = Math.round(BASE.g + (LIT.g - BASE.g) * lit);
          const b = Math.round(BASE.b + (LIT.b - BASE.b) * lit);
          const a = BASE.a + (0.9 - BASE.a) * lit;
          ctx!.fillStyle = `rgba(${r}, ${g}, ${b}, ${a.toFixed(3)})`;
          ctx!.beginPath();
          ctx!.arc(x, y, 1 + lit * 1.6, 0, Math.PI * 2);
          ctx!.fill();
        }
      }

      ripples = live.filter((rp) => rp.fade > 0).map(({ x, y, born, maxR }) => ({ x, y, born, maxR }));
    }

    function loop(now: number) {
      raf = requestAnimationFrame(loop);
      if (!onScreen) return;
      if (now >= nextRipple) {
        spawn(now);
        nextRipple = now + 2200 + Math.random() * 2000;
      }
      draw(now);
    }

    resize();
    if (reduceMotion) {
      draw(0);
    } else {
      raf = requestAnimationFrame(loop);
    }

    const observer = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
    });
    observer.observe(canvas);

    let resizeRaf = 0;
    const onResize = () => {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => {
        resize();
        if (reduceMotion) draw(0);
      });
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(resizeRaf);
      observer.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        // Keeps the wave soft behind the headline so it never fights the text.
        maskImage: "radial-gradient(ellipse 42% 38% at 50% 45%, rgba(0,0,0,0.45), #000 75%)",
        WebkitMaskImage: "radial-gradient(ellipse 42% 38% at 50% 45%, rgba(0,0,0,0.45), #000 75%)",
      }}
    />
  );
}
