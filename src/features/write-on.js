import { gsap, ScrollTrigger, SplitText, prefersReducedMotion } from "../motion.js";

/* ---------- "Written down" effect for .new-question headlines ----------
   SplitText breaks each headline into characters that fade in sequence,
   like being written by hand as it enters the viewport. Every headline
   gets its own SplitText instance + trigger so they act independently. */
export const writeOnSplit = (el) => new SplitText(el, { type: "chars" });

export const playWriteOn = (split) =>
  gsap.fromTo(
    split.chars,
    { opacity: 0 },
    { opacity: 1, duration: 0.12, stagger: 0.03, ease: "none", overwrite: true },
  );

// Headlines get their write-on trigger when the page boots; the empty
// slider message is split and played at click time by the jacket slider.
export const initWriteOn = () => {
  if (prefersReducedMotion) return;

  document.querySelectorAll(".new-question").forEach((el) => {
    // The empty slider message gets its text (and effect) at click time.
    if (!el.textContent.trim()) return;

    const split = writeOnSplit(el);
    gsap.set(split.chars, { opacity: 0 });
    ScrollTrigger.create({
      // Fire exactly when this headline sits in the vertical
      // centre of the viewport.
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
