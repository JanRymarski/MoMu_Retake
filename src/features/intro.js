import { gsap, prefersReducedMotion } from "../motion.js";

// Hero entrance and the quote section word slide-in.
export const initIntro = () => {
gsap.fromTo(
  ".hero-cover",
  { xPercent: 100 },
  { xPercent: 0, duration: 1.2, delay: 1, ease: "power3.out" },
);

if (prefersReducedMotion) return;
  const quote = document.querySelector(".quote");
  const quoteWords = quote.textContent.trim().split(/\s+/);
  quote.setAttribute("aria-label", quoteWords.join(" "));
  quote.innerHTML = quoteWords
    .map((word) => `<span class="quote-word" aria-hidden="true">${word}</span>`)
    .join(" ");

  gsap.from(".quote-word", {
    x: -40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.12,
    delay: 1,
    ease: "power3.out",
  });
};
