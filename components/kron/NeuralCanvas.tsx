"use client";
import { useEffect, useRef } from "react";

type Node = {
  hx: number;
  hy: number;
  x: number;
  y: number;
  phase: number;
  amp: number;
  glow: number;
  neighbours: number[];
};

const RGB = "0, 85, 224";
const CELL = 110;
const LINKS_PER_NODE = 3;

export default function NeuralCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0;
    let H = 0;
    let nodes: Node[] = [];
    let edges: [number, number][] = [];
    let raf = 0;
    let onScreen = true;
    let nextFire = 0;
    const pending: { at: number; i: number; strength: number }[] = [];

    function build() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas!.offsetWidth;
      H = canvas!.offsetHeight;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Jittered grid: evenly spread, never clumped.
      const cols = Math.max(4, Math.round(W / CELL));
      const rows = Math.max(4, Math.round(H / CELL));
      const cw = W / cols;
      const ch = H / rows;
      nodes = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const hx = (c + 0.2 + Math.random() * 0.6) * cw;
          const hy = (r + 0.2 + Math.random() * 0.6) * ch;
          nodes.push({ hx, hy, x: hx, y: hy, phase: Math.random() * Math.PI * 2, amp: 3 + Math.random() * 5, glow: 0, neighbours: [] });
        }
      }

      const seen = new Set<string>();
      edges = [];
      nodes.forEach((a, i) => {
        nodes
          .map((b, j) => ({ j, d: (a.hx - b.hx) ** 2 + (a.hy - b.hy) ** 2 }))
          .filter((o) => o.j !== i)
          .sort((p, q) => p.d - q.d)
          .slice(0, LINKS_PER_NODE)
          .forEach(({ j }) => {
            const key = i < j ? `${i}-${j}` : `${j}-${i}`;
            if (seen.has(key)) return;
            seen.add(key);
            edges.push([i, j]);
            a.neighbours.push(j);
            nodes[j].neighbours.push(i);
          });
      });
    }

    function fire(now: number) {
      const i = Math.floor(Math.random() * nodes.length);
      nodes[i].glow = 1;
      // Sometimes the signal travels on to a neighbour, like an activation spreading.
      nodes[i].neighbours.forEach((j) => {
        if (Math.random() < 0.35) pending.push({ at: now + 180 + Math.random() * 220, i: j, strength: 0.7 });
      });
    }

    function draw(t: number) {
      ctx!.clearRect(0, 0, W, H);

      for (const n of nodes) {
        n.x = n.hx + Math.sin(t * 0.00035 + n.phase) * n.amp;
        n.y = n.hy + Math.cos(t * 0.0003 + n.phase * 1.3) * n.amp;
      }

      ctx!.lineWidth = 1;
      for (const [a, b] of edges) {
        const g = Math.max(nodes[a].glow, nodes[b].glow);
        ctx!.strokeStyle = `rgba(${RGB}, ${(0.09 + g * 0.3).toFixed(3)})`;
        ctx!.beginPath();
        ctx!.moveTo(nodes[a].x, nodes[a].y);
        ctx!.lineTo(nodes[b].x, nodes[b].y);
        ctx!.stroke();
      }

      for (const n of nodes) {
        if (n.glow > 0.04) {
          const r = 4 + n.glow * 14;
          const halo = ctx!.createRadialGradient(n.x, n.y, 0, n.x, n.y, r);
          halo.addColorStop(0, `rgba(${RGB}, ${(n.glow * 0.35).toFixed(3)})`);
          halo.addColorStop(1, `rgba(${RGB}, 0)`);
          ctx!.fillStyle = halo;
          ctx!.beginPath();
          ctx!.arc(n.x, n.y, r, 0, Math.PI * 2);
          ctx!.fill();
        }
        ctx!.fillStyle = `rgba(${RGB}, ${(0.28 + n.glow * 0.72).toFixed(3)})`;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, 1.8 + n.glow * 1.4, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function loop(now: number) {
      raf = requestAnimationFrame(loop);
      if (!onScreen) return;

      if (now >= nextFire) {
        fire(now);
        nextFire = now + 250 + Math.random() * 550;
      }
      for (let k = pending.length - 1; k >= 0; k--) {
        if (now >= pending[k].at) {
          const n = nodes[pending[k].i];
          if (n) n.glow = Math.max(n.glow, pending[k].strength);
          pending.splice(k, 1);
        }
      }
      for (const n of nodes) n.glow *= 0.965;

      draw(now);
    }

    build();

    if (reduceMotion) {
      // A still frame with a few lit nodes: the look without the movement.
      for (let k = 0; k < Math.ceil(nodes.length / 12); k++) {
        nodes[Math.floor(Math.random() * nodes.length)].glow = 0.6 + Math.random() * 0.4;
      }
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
        build();
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
        // Fainter behind the headline, fuller towards the edges, so the text stays readable.
        maskImage: "radial-gradient(ellipse 50% 45% at 50% 45%, rgba(0,0,0,0.18), #000 85%)",
        WebkitMaskImage: "radial-gradient(ellipse 50% 45% at 50% 45%, rgba(0,0,0,0.18), #000 85%)",
      }}
    />
  );
}
