import { gsap, ScrollTrigger, prefersReducedMotion } from "../motion.js";
import { writeOnSplit, playWriteOn } from "./write-on.js";
import jacket01 from "../assets/jacket01.png";
import jacket02 from "../assets/jacket02.png";
import jacket03 from "../assets/jacket03.png";
import jacket04 from "../assets/jacket04.png";
import jacket05 from "../assets/jacket05.png";

// Jacket selection slider. Picking the correct jacket writes the
// message down and starts the pinned frame sequence; wrong picks
// fade out and trigger the error popup.
export const initJacketSlider = ({ showError }) => {
const jacketItems = [
  { src: jacket01, correct: false },
  { src: jacket02, correct: true },
  { src: jacket03, correct: false },
  { src: jacket04, correct: false },
  { src: jacket05, correct: false },
];

const slider = document.querySelector(".jacket-slider");
const sliderMessage = document.querySelector(".slider-message");
const jacketSlides = [];
const correctText =
  "While the fashion industry focused on producing more garments, Marina focused on discovering more value within one.";

let sequenceStarted = false;

const initCorrectSequence = () => {
  if (sequenceStarted) return;
  sequenceStarted = true;

  const stage = document.querySelector(".correct-stage");
  const sequence = stage.querySelector(".correct-sequence");
  const frames = gsap.utils.toArray(".correct-frame", sequence);

  stage.classList.remove("is-hidden");
  stage.setAttribute("aria-hidden", "false");

  const rect = stage.getBoundingClientRect();
  const centreOffset =
    rect.top + window.scrollY - (window.innerHeight - rect.height) / 2;
  window.scrollTo({ top: Math.max(centreOffset, 0) });
  gsap.from(stage, { opacity: 0, duration: 0.6, ease: "power2.out" });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: stage,
      start: "center center",
      end: "+=1600",
      scrub: 0.5,
      // Lock the page here: the sequence stays centred and consumes
      // the scroll until frame five has fully faded in.
      pin: true,
      invalidateOnRefresh: true,
    },
  });

  let previous = frames[0];
  frames.forEach((frame, i) => {
    if (i === 0) return;
    tl.to({}, { duration: 0.1 });
    tl.to(frame, { opacity: 1, duration: 0.45 });

    tl.to(previous, { opacity: 0, duration: 0.16 }, "<");
    previous = frame;
  });

  Promise.all(
    frames.map((frame) =>
      frame.complete
        ? Promise.resolve()
        : new Promise((resolve) =>
            frame.addEventListener("load", resolve, { once: true }),
          ),
    ),
  ).then(() => ScrollTrigger.refresh());
};

jacketItems.forEach((item) => {
  const slide = document.createElement("div");
  slide.className = "jacket-slide";
  const img = document.createElement("img");
  img.src = item.src;
  img.alt = "";
  img.draggable = false;
  img.loading = "lazy";
  img.decoding = "async";
  slide.appendChild(img);
  slide.addEventListener("click", () => {
    if (item.correct) {
      sliderMessage.textContent = correctText;
      // Write the message down the moment it appears
      if (!prefersReducedMotion) playWriteOn(writeOnSplit(sliderMessage));
      initCorrectSequence();
    } else {
      jacketSlides.forEach((other) => {
        if (!other.item.correct) other.slide.classList.add("jacket--faded");
      });
      showError();
    }
  });
  jacketSlides.push({ item, slide });
  slider.appendChild(slide);
});

const centerJacket3 = () => {
  const jacket3 = jacketSlides[2].slide;
  slider.scrollLeft =
    jacket3.offsetLeft - (slider.clientWidth - jacket3.offsetWidth) / 2;
};

centerJacket3();
window.addEventListener("resize", centerJacket3);
};
