import { useEffect } from "react";
import Lenis from "lenis";
import { useLocation } from "react-router-dom";

export default function SmoothScroll() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Handle links starting with # or /#
      if (href.startsWith('#') || (href.startsWith('/#') && location.pathname === '/')) {
        e.preventDefault();
        const targetId = href.replace(/^\//, ''); // Remove leading / if present
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          lenis.scrollTo(targetElement);
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleClick);
    };
  }, [location.pathname]);

  return null;
}
