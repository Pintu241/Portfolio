import { useEffect, useRef } from "react";

const GlobalBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    // ── Nodes (neural constellation) ──────────────────────────────────
    const NODE_COUNT = 90;
    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 2.2 + 0.6,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.018 + Math.random() * 0.022,
      hue: 190 + Math.random() * 80, // cyan → violet
    }));

    // ── Plasma orbs ───────────────────────────────────────────────────
    const orbs = [
      { x: W * 0.15, y: H * 0.2,  r: 320, hue: 210, speed: 0.00045 },
      { x: W * 0.80, y: H * 0.75, r: 280, hue: 260, speed: 0.00060 },
      { x: W * 0.50, y: H * 0.50, r: 240, hue: 185, speed: 0.00038 },
      { x: W * 0.85, y: H * 0.15, r: 200, hue: 290, speed: 0.00052 },
      { x: W * 0.10, y: H * 0.85, r: 260, hue: 220, speed: 0.00042 },
    ];
    const orbAngles = orbs.map(() => Math.random() * Math.PI * 2);

    // ── Crystal shards ────────────────────────────────────────────────
    const shards = Array.from({ length: 18 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      size: 18 + Math.random() * 55,
      rotation: Math.random() * Math.PI,
      rotSpeed: (Math.random() - 0.5) * 0.003,
      opacity: 0.03 + Math.random() * 0.07,
      hue: 180 + Math.random() * 120,
      sides: [3, 4, 6][Math.floor(Math.random() * 3)],
    }));

    // ── Floating code glyphs ──────────────────────────────────────────
    const glyphs = ["</>", "{ }", "=>", "[]", "&&", "||", "API", "AI",
                     "tsx", "git", "npm", "jsx", "fn()", "==", "++", "??"];
    const floaters = Array.from({ length: 22 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vy: -(0.12 + Math.random() * 0.22),
      glyph: glyphs[Math.floor(Math.random() * glyphs.length)],
      opacity: 0.04 + Math.random() * 0.09,
      size: 10 + Math.random() * 10,
      hue: 180 + Math.random() * 100,
    }));

    let t = 0;

    const drawPolygon = (cx, cy, r, sides, rotation) => {
      ctx.beginPath();
      for (let i = 0; i <= sides; i++) {
        const angle = (i / sides) * Math.PI * 2 + rotation;
        const px = cx + Math.cos(angle) * r;
        const py = cy + Math.sin(angle) * r;
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath();
    };

    const render = () => {
      t += 0.012;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // ── Background gradient (deep space) ──────────────────────────
      const bg = ctx.createLinearGradient(0, 0, W, H);
      bg.addColorStop(0,   `hsl(${220 + Math.sin(t * 0.3) * 15}, 35%, 4%)`);
      bg.addColorStop(0.5, `hsl(${240 + Math.sin(t * 0.2) * 10}, 28%, 5%)`);
      bg.addColorStop(1,   `hsl(${200 + Math.sin(t * 0.4) * 12}, 40%, 3%)`);
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // ── Plasma aurora bands (horizontal waves) ─────────────────────
      for (let band = 0; band < 4; band++) {
        const yBase = H * (0.15 + band * 0.23);
        const grad = ctx.createLinearGradient(0, yBase - 80, 0, yBase + 80);
        const h1 = 185 + band * 25 + Math.sin(t * 0.5 + band) * 20;
        grad.addColorStop(0,   `hsla(${h1}, 90%, 55%, 0)`);
        grad.addColorStop(0.5, `hsla(${h1}, 90%, 55%, ${0.028 + Math.sin(t + band * 1.3) * 0.012})`);
        grad.addColorStop(1,   `hsla(${h1}, 90%, 55%, 0)`);
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(0, yBase);
        for (let x = 0; x <= W; x += 6) {
          const y = yBase
            + Math.sin(x * 0.005 + t * 0.8 + band) * 38
            + Math.sin(x * 0.009 + t * 0.5 - band * 0.7) * 22
            + Math.sin(x * 0.002 + t * 1.1) * 15;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath();
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();
      }

      // ── Plasma orbs (bokeh blobs) ──────────────────────────────────
      orbs.forEach((orb, i) => {
        orbAngles[i] += orb.speed;
        const ox = orb.x + Math.cos(orbAngles[i]) * 90 + (mx - W / 2) * 0.015;
        const oy = orb.y + Math.sin(orbAngles[i] * 1.3) * 60 + (my - H / 2) * 0.015;
        const hShift = orb.hue + Math.sin(t * 0.4 + i) * 20;
        const g = ctx.createRadialGradient(ox, oy, 0, ox, oy, orb.r);
        g.addColorStop(0,   `hsla(${hShift}, 90%, 60%, 0.08)`);
        g.addColorStop(0.5, `hsla(${hShift + 30}, 80%, 50%, 0.04)`);
        g.addColorStop(1,   `hsla(${hShift + 60}, 70%, 40%, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(ox, oy, orb.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // ── Crystal shards ────────────────────────────────────────────
      shards.forEach((s) => {
        s.rotation += s.rotSpeed;
        const shimmer = s.opacity * (0.7 + 0.3 * Math.sin(t * 1.5 + s.x));
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rotation);
        drawPolygon(0, 0, s.size, s.sides, 0);
        const sg = ctx.createLinearGradient(-s.size, -s.size, s.size, s.size);
        sg.addColorStop(0, `hsla(${s.hue}, 80%, 70%, ${shimmer})`);
        sg.addColorStop(1, `hsla(${s.hue + 40}, 60%, 50%, 0)`);
        ctx.fillStyle = sg;
        ctx.fill();
        ctx.strokeStyle = `hsla(${s.hue}, 90%, 80%, ${shimmer * 1.6})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
        ctx.restore();
      });

      // ── Neural connections ────────────────────────────────────────
      const LINK_DIST = 140;
      const MOUSE_DIST = 180;
      nodes.forEach((n, i) => {
        // mouse repulsion
        const dx = n.x - mx, dy = n.y - my;
        const md = Math.sqrt(dx * dx + dy * dy);
        if (md < MOUSE_DIST) {
          const force = (MOUSE_DIST - md) / MOUSE_DIST;
          n.vx += (dx / md) * force * 0.12;
          n.vy += (dy / md) * force * 0.12;
        }
        n.vx *= 0.985; n.vy *= 0.985;
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0) { n.x = 0; n.vx *= -1; }
        if (n.x > W) { n.x = W; n.vx *= -1; }
        if (n.y < 0) { n.y = 0; n.vy *= -1; }
        if (n.y > H) { n.y = H; n.vy *= -1; }
        n.pulse += n.pulseSpeed;

        for (let j = i + 1; j < nodes.length; j++) {
          const o = nodes[j];
          const ex = o.x - n.x, ey = o.y - n.y;
          const dist = Math.sqrt(ex * ex + ey * ey);
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.28;
            const hMix = (n.hue + o.hue) / 2;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(o.x, o.y);
            ctx.strokeStyle = `hsla(${hMix}, 80%, 65%, ${alpha})`;
            ctx.lineWidth = (1 - dist / LINK_DIST) * 1.2;
            ctx.stroke();
          }
        }
      });

      // ── Neural node dots ──────────────────────────────────────────
      nodes.forEach((n) => {
        const pulse = 0.6 + 0.4 * Math.sin(n.pulse);
        const r = n.r * pulse;
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 3.5);
        g.addColorStop(0,   `hsla(${n.hue}, 90%, 80%, 0.9)`);
        g.addColorStop(0.4, `hsla(${n.hue}, 80%, 65%, 0.4)`);
        g.addColorStop(1,   `hsla(${n.hue}, 70%, 50%, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r * 3.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `hsla(${n.hue}, 95%, 90%, 0.95)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();
      });

      // ── Floating code glyphs ──────────────────────────────────────
      ctx.font = "";
      floaters.forEach((f) => {
        f.y += f.vy;
        if (f.y < -20) f.y = H + 10;
        const flicker = f.opacity * (0.6 + 0.4 * Math.sin(t * 2.2 + f.x));
        ctx.save();
        ctx.font = `${f.size}px 'Courier New', monospace`;
        ctx.fillStyle = `hsla(${f.hue}, 75%, 65%, ${flicker})`;
        ctx.fillText(f.glyph, f.x, f.y);
        ctx.restore();
      });

      // ── Scanline overlay ──────────────────────────────────────────
      for (let y = 0; y < H; y += 4) {
        ctx.fillStyle = "rgba(0,0,0,0.015)";
        ctx.fillRect(0, y, W, 1);
      }

      // ── Vignette ──────────────────────────────────────────────────
      const vig = ctx.createRadialGradient(W/2, H/2, H*0.25, W/2, H/2, H*0.85);
      vig.addColorStop(0, "rgba(0,0,0,0)");
      vig.addColorStop(1, "rgba(0,0,0,0.55)");
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, W, H);

      animRef.current = requestAnimationFrame(render);
    };

    render();

    const onMouse = (e) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    const onResize = () => {
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = W; canvas.height = H;
    };
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0, left: 0,
        width: "100vw", height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default GlobalBackground;
