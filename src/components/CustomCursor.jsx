import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => { pos.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", move);

    let raf;
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.13;
      ring.current.y += (pos.current.y - ring.current.y) * 0.13;
      if (dotRef.current) {
        dotRef.current.style.left  = pos.current.x + "px";
        dotRef.current.style.top   = pos.current.y + "px";
      }
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + "px";
        ringRef.current.style.top  = ring.current.y + "px";
      }
      raf = requestAnimationFrame(animate);
    };
    animate();

    const onEnter = () => {
      if (ringRef.current) { ringRef.current.style.width = "60px"; ringRef.current.style.height = "60px"; ringRef.current.style.borderColor = "rgba(168,85,247,0.7)"; }
    };
    const onLeave = () => {
      if (ringRef.current) { ringRef.current.style.width = "36px"; ringRef.current.style.height = "36px"; ringRef.current.style.borderColor = "rgba(34,211,238,0.55)"; }
    };
    document.querySelectorAll("a, button, [data-cursor]").forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
};

export default CustomCursor;
