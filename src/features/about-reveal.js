import { gsap, prefersReducedMotion } from "../motion.js";

// About section: title rises in while paragraph words fade from
// ghost-grey to full opacity.
export const initAboutReveal = () => {
if (prefersReducedMotion) return;
  const aboutSection = document.querySelector("#about");
  const aboutTitle = aboutSection.querySelector(".about-title");
  const aboutParagraphs = [...aboutSection.querySelectorAll(".about-text")];

  aboutParagraphs.forEach((el) => {
    const words = el.textContent.trim().split(/\s+/);
    el.setAttribute("aria-label", words.join(" "));
    el.innerHTML = words
      .map(
        (word) => `<span class="reveal-word" aria-hidden="true">${word}</span>`,
      )
      .join(" ");
  });

  gsap.set(aboutTitle, { opacity: 0, y: 24 });
  gsap.set("#about .reveal-word", { opacity: 0.12 });

  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  const aboutStart = isMobile ? "top 45%" : "top 65%";

  const aboutTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start: aboutStart,
      once: true,
    },
  });

  aboutTimeline
    .to(aboutTitle, { opacity: 1, y: 0, duration: 0.6 })
    .to(
      aboutParagraphs[0].querySelectorAll(".reveal-word"),
      { opacity: 1, stagger: 0.03, duration: 0.4 },
      "<0.2",
    )
    .to(
      aboutParagraphs[1].querySelectorAll(".reveal-word"),
      { opacity: 1, stagger: 0.03, duration: 0.4 },
      "<0.3",
    );
};
