"use client";
import { useEffect, useRef } from "react";

// Replican la estructura de 4 anillos del logo Waive
// [ángulo inicio, ángulo fin, factor radio, grosor base]
const LOGO_ARCS: [number, number, number, number][] = [
  [-Math.PI * 0.90,  Math.PI * 0.78, 1.00, 26],
  [-Math.PI * 0.58,  Math.PI * 0.98, 0.64, 22],
  [-Math.PI * 0.80,  Math.PI * 0.62, 0.38, 18],
  [-Math.PI * 0.38,  Math.PI * 0.18, 0.20, 13],
];

const PHASES = [0, 0.25, 0.50, 0.75];

function organicArc(
  ctx: CanvasRenderingContext2D,
  cx: number, cy: number, r: number,
  startA: number, endA: number,
  wobbleT: number, lineW: number, alpha: number
) {
  if (r < 4) return;
  ctx.beginPath();
  ctx.lineWidth = lineW;
  ctx.strokeStyle = `rgba(67,97,238,${alpha.toFixed(3)})`;
  ctx.lineCap = "round";
  const segs = 64;
  for (let i = 0; i <= segs; i++) {
    const a = startA + (endA - startA) * (i / segs);
    const w =
      Math.sin(a * 5 + wobbleT) * r * 0.028 +
      Math.sin(a * 3 - wobbleT * 0.6) * r * 0.016;
    const x = cx + (r + w) * Math.cos(a);
    const y = cy + (r + w) * Math.sin(a);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
}

export default function WaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let W = 0, H = 0, t = 0, raf = 0;

    function resize() {
      W = canvas!.width = canvas!.offsetWidth;
      H = canvas!.height = canvas!.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function drawRipple(phase: number) {
      const cx = W / 2;
      const cy = H / 2;
      const maxR = Math.sqrt(cx * cx + cy * cy) * 1.15;
      const progress = ((t * 0.18 + phase) % 1 + 1) % 1;
      const alpha =
        progress < 0.15
          ? (progress / 0.15) * 0.09
          : 0.09 * (1 - (progress - 0.15) / 0.85);
      const wobbleT = t * 2.5;

      LOGO_ARCS.forEach(([startA, endA, rFactor, baseThick]) => {
        const r = progress * maxR * rFactor;
        const thick = baseThick * (0.4 + 0.6 * Math.min(1, r / 80));
        organicArc(ctx, cx, cy, r, startA, endA, wobbleT, thick, alpha);
      });
    }

    function loop() {
      ctx.clearRect(0, 0, W, H);

      const bg = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H) * 0.7);
      bg.addColorStop(0,   "#ffffff");
      bg.addColorStop(0.6, "#f4f7ff");
      bg.addColorStop(1,   "#e8eeff");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      PHASES.forEach(drawRipple);

      t += 0.005;
      raf = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ display: "block" }}
    />
  );
}
