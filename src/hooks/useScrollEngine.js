import { useEffect } from "react";

export default function useScrollEngine() {
  useEffect(() => {
    const panels = document.querySelectorAll(".panel");

    const onScroll = () => {
      const scrollY = window.scrollY;

      panels.forEach((panel) => {
        const offset = panel.offsetTop;
        const height = panel.offsetHeight;

        const progress = (scrollY - offset) / height;

        if (progress >= -0.5 && progress <= 1.5) {
          panel.style.transform = `translateY(${progress * 80}px) scale(${1 - Math.abs(progress) * 0.15})`;
          panel.style.opacity = 1 - Math.abs(progress);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}