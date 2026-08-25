import { gsap, ScrollTrigger, SplitText, prefersReducedMotion } from "../motion.js";

export const writeOnSplit = (el) => new SplitText(el, { type: "words,chars" });

export const playWriteOn = (split) =>
  gsap.fromTo(
    split.chars,
    { opacity: 0 },
    { opacity: 1, duration: 0.12, stagger: 0.03, ease: "none", overwrite: true },
  );

export const initWriteOn = () => {
  if (prefersReducedMotion) return;

  document.querySelectorAll(".new-question").forEach((el) => {
    if (!el.textContent.trim()) return;

    const split = writeOnSplit(el);
    gsap.set(split.chars, { opacity: 0 });
    ScrollTrigger.create({
      trigger: el,
      start: "center center",
      once: true,
      onEnter: () =>
        gsap.to(split.chars, {
          opacity: 1,
          duration: 0.12,
          stagger: 0.03,
          ease: "none",
          overwrite: true,
        }),
    });
  });
};
