"use client";
import { useEffect, useRef, type RefObject } from "react";

const SPACING = 32;
const REVOLUTION_MS = 14000;
const BEAM_HALF_WIDTH = 0.16; // radians
const BASE = { r: 192, g: 216, b: 240, a: 0.4 }; // #c0d8f0, the site's dot grid
const LIT = { r: 234, g: 88, b: 12 }; // #ea580c, FARO orange
const BEAM_RGB = "249, 115, 22"; // #f97316

interface Props {
  /** Element whose lamp the beams rotate around. */
  originRef: RefObject<HTMLElement | null>;
  /** Vertical position of the lamp inside that element, 0 = top, 1 = bottom. */
  lampAt?: number;
}

function angleGap(a: number, b: number) {
  const d = Math.abs(a - b) % (Math.PI * 2);
  return d > Math.PI ? Math.PI * 2 - d : d;
}

export default function BeamCanvas({ originRef, lampAt = 0.35 }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0;
    let H = 0;
    let ox = 0;
    let oy = 0;
    let reach = 0;
    let raf = 0;
    let onScreen = true;

    function measure() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas!.offsetWidth;
      H = canvas!.offsetHeight;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const c = canvas!.getBoundingClientRect();
      const o = originRef.current?.getBoundingClientRect();
      ox = o ? o.left - c.left + o.width / 2 : W / 2;
      oy = o ? o.top - c.top + o.height * lampAt : H * 0.3;
      reach = Math.hypot(Math.max(ox, W - ox), Math.max(oy, H - oy));
    }

    function drawBeam(theta: number) {
      // Three widths layered for a soft edge instead of a hard wedge.
      [
        [1.9, 0.05],
        [1.25, 0.07],
        [0.7, 0.09],
      ].forEach(([widen, alpha]) => {
        const half = BEAM_HALF_WIDTH * widen;
        const grad = ctx!.createRadialGradient(ox, oy, 0, ox, oy, reach);
        grad.addColorStop(0, `rgba(${BEAM_RGB}, ${alpha})`);
        grad.addColorStop(0.55, `rgba(${BEAM_RGB}, ${alpha * 0.45})`);
        grad.addColorStop(1, `rgba(${BEAM_RGB}, 0)`);
        ctx!.fillStyle = grad;
        ctx!.beginPath();
        ctx!.moveTo(ox, oy);
        ctx!.arc(ox, oy, reach, theta - half, theta + half);
        ctx!.closePath();
        ctx!.fill();
      });
    }

    function draw(now: number) {
      ctx!.clearRect(0, 0, W, H);
      const theta = ((now % REVOLUTION_MS) / REVOLUTION_MS) * Math.PI * 2;
      const beams = [theta, theta + Math.PI];

      beams.forEach(drawBeam);

      for (let y = SPACING / 2; y < H; y += SPACING) {
        for (let x = SPACING / 2; x < W; x += SPACING) {
          const a = Math.atan2(y - oy, x - ox);
          const gap = Math.min(angleGap(a, beams[0]), angleGap(a, beams[1]));
          const falloff = Math.max(0, 1 - Math.hypot(x - ox, y - oy) / reach);
          const lit = Math.exp(-((gap / BEAM_HALF_WIDTH) ** 2)) * (0.35 + 0.65 * falloff);
          const r = Math.round(BASE.r + (LIT.r - BASE.r) * lit);
          const g = Math.round(BASE.g + (LIT.g - BASE.g) * lit);
          const b = Math.round(BASE.b + (LIT.b - BASE.b) * lit);
          ctx!.fillStyle = `rgba(${r}, ${g}, ${b}, ${(BASE.a + (0.8 - BASE.a) * lit).toFixed(3)})`;
          ctx!.beginPath();
          ctx!.arc(x, y, 1 + lit * 1.2, 0, Math.PI * 2);
          ctx!.fill();
        }
      }

      // The lamp itself: a steady warm glow behind the logo.
      const lamp = ctx!.createRadialGradient(ox, oy, 0, ox, oy, 90);
      lamp.addColorStop(0, `rgba(${BEAM_RGB}, 0.22)`);
      lamp.addColorStop(1, `rgba(${BEAM_RGB}, 0)`);
      ctx!.fillStyle = lamp;
      ctx!.beginPath();
      ctx!.arc(ox, oy, 90, 0, Math.PI * 2);
      ctx!.fill();
    }

    function loop(now: number) {
      raf = requestAnimationFrame(loop);
      if (onScreen) draw(now);
    }

    measure();
    if (reduceMotion) {
      draw(REVOLUTION_MS * 0.08);
    } else {
      raf = requestAnimationFrame(loop);
    }

    const observer = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
    });
    observer.observe(canvas);

    // The logo moves while its entrance animation plays and whenever the layout changes.
    const resizeObserver = new ResizeObserver(() => {
      measure();
      if (reduceMotion) draw(REVOLUTION_MS * 0.08);
    });
    resizeObserver.observe(canvas);
    const settle = window.setTimeout(measure, 1200);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      resizeObserver.disconnect();
      window.clearTimeout(settle);
    };
  }, [originRef, lampAt]);

  return (
    <canvas ref={ref} aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none" />
  );
}
