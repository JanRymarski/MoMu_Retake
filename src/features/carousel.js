import { gsap, ScrollTrigger } from "../motion.js";

export const initCarousel = () => {
const track = document.querySelector(".carousel-track");
const getScrollAmount = () => track.scrollWidth - window.innerWidth;

gsap.to(track, {
  x: () => -getScrollAmount(),
  ease: "none",
  scrollTrigger: {
    trigger: ".carousel",
    start: "top top",
    end: () => "+=" + getScrollAmount(),
    scrub: 1,
    pin: true,
    invalidateOnRefresh: true,
  },
});
};
