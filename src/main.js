import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "./assets/logo.svg";
import headerBackground from "./assets/header_background.jpg";
import headerCover from "./assets/header_bg_cover.png";
import aboutImage from "./assets/about.jpg";
import antwerpSixImage from "./assets/antwerp_six.jpg";
import jacket from "./assets/jacket.png";
import carousel1 from "./assets/carousel1.jpg";
import carousel2 from "./assets/carousel2.jpg";
import carousel3 from "./assets/carousel3.jpg";
import carousel4 from "./assets/carousel4.jpg";
import carousel5 from "./assets/carousel5.jpg";
import object1 from "./assets/object1.png";
import object2 from "./assets/object2.png";
import object3 from "./assets/object3.png";
import object4 from "./assets/object4.png";
import object5 from "./assets/object5.png";
import jacket01 from "./assets/jacket01.png";
import jacket02 from "./assets/jacket02.png";
import jacket03 from "./assets/jacket03.png";
import jacket04 from "./assets/jacket04.png";
import jacket05 from "./assets/jacket05.png";
import jacketFinal from "./assets/jacket_final.png";

gsap.registerPlugin(ScrollTrigger);

document.querySelector("#app").innerHTML = `
<div class="site-header">
  <nav class="nav-bar">
    <img src="${logo}" class="logo" alt="MoMu logo">
    <button class="hamburger" type="button" aria-label="Open menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>
  <section class="hero">
    <img class="hero-bg" src="${headerBackground}" alt="">
    <h1 class="hero-title">Marina<br>Yee</h1>
    <img class="hero-cover" src="${headerCover}" alt="">
  </section>
</div>

<section class="quote-section">
  <p class="quote">Seeing value where others saw waste.</p>
</section>

<section class="about">
  <img class="about-img" src="${aboutImage}" alt="">
  <h2 class="about-title">About Marina</h2>
  <p class="about-text">Fashion often celebrates the new. Every season brings new collections, trends and silhouettes, encouraging us to replace what came before. Marina Yee chose a different path. Instead of starting with new fabrics, she worked with garments that had already been worn and forgotten.</p>
  <p class="about-text">She believed clothing carries history through its materials, construction and signs of wear. Rather than hiding those traces, she made them part of the design. Long before upcycling and slow fashion became familiar terms, Marina Yee showed that creativity doesn't have to begin with something new.</p>
</section>

<section class="carousel">
  <div class="carousel-track">
    <img class="carousel-item" src="${carousel1}" alt="">
    <img class="carousel-item" src="${carousel2}" alt="">
    <img class="carousel-item" src="${carousel3}" alt="">
    <img class="carousel-item" src="${carousel4}" alt="">
    <img class="carousel-item" src="${carousel5}" alt="">
  </div>
</section>

<section class="about">
  <h2 class="about-title">The Antwerp Six</h2>
  <p class="about-text">Although they emerged as one generation, each member of the Antwerp Six developed a distinct creative vision. While others explored bold colours, tailoring or theatrical silhouettes, Marina Yee followed her own path. Her work centred on reconstruction, craftsmanship and giving existing garments a second life.</p>
  <img class="about-banner" src="${antwerpSixImage}" alt="">
</section>

<section class="about">
  <h2 class="new-title">Always Something New</h2>
  <p class="about-text">Fashion is built on the promise of something new. Every season introduces new collections, new trends and new reasons to replace what already hangs in our wardrobes. Clothing has become faster to produce, faster to consume and easier to discard. We rarely stop to ask what happens to the garments left behind</p>
  <h3 class="new-question">What if fashion didn't begin with something new?</h3>
  <h4 class="jacket-hint">Find the hidden value by clicking on jacket parts</h4>
  <div class="jacket-wrap">
    <img class="jacket" src="${jacket}" alt="Jacket">
    <div class="jacket-hotspots"></div>
  </div>
  <div class="jacket-reveals"></div>
</section>

<section class="value-section">
  <h2 class="value-title">Marina saw something different</h2>
  <h4 class="value-hint">Find the value by clicking on jacket parts</h4>
  <div class="jacket-wrap">
    <img class="jacket" src="${jacket}" alt="Jacket">
    <div class="jacket-hotspots"></div>
  </div>
  <div class="value-reveals"></div>
</section>

<section class="reconstruct-section">
  <h2 class="new-title">From Garment to Design</h2>
  <p class="about-text">Marina Yee didn't begin with a blank canvas. She began with garments that already had a history. By carefully taking them apart, she studied their construction before rebuilding them into something new.</p>
  <h3 class="new-question">Perhaps the first step towards producing less is learning to see more.</h3>
  <h4 class="jacket-hint">reconstruct the garment.</h4>
  <div class="reconstruct-stage"></div>
</section>

<section class="select-section">
  <h2 class="new-title">Before Slow Fashion Had a Name</h2>
  <p class="about-text">When Marina Yee began reconstructing garments in the early 1980s, the fashion industry was driven by new collections and constant change. Existing clothing was rarely seen as the starting point for new design.</p>
  <p class="about-text">Marina chose a different approach. Instead of creating more, she explored what already existed. By carefully deconstructing and rebuilding worn garments, she showed that creativity could begin with history rather than newness.</p>
  <h3 class="new-question slider-question">fashion
never
stops
producing</h3>
  <h4 class="jacket-hint">select one jacket</h4>
  <div class="jacket-slider"></div>
  <div class="slider-message"></div>
  <p class="about-text">For Marina, reconstruction wasn't a trend or a response to sustainability. It was her way of designing. Every garment carried craftsmanship, materials and stories worth preserving instead of replacing.</p>
  <p class="about-text">Decades later, many of the ideas that shaped Marina's work—reuse, longevity and thoughtful production—became central to what we now call slow fashion. While the language changed, Marina's philosophy remained the same.</p>
</section>

<section class="look-section">
  <h2 class="new-title">What Do You See Now?</h2>
  <p class="about-text">Throughout this story, you've seen how Marina Yee challenged the idea that clothing loses its value with time.</p>
  <p class="about-text">Now it's your turn</p>
  <h3 class="new-question">LOOK AGAIN</h3>
  <img class="look-image" src="${jacketFinal}" alt="Jacket">
</section>
`;

const spots = [
  { label: "1", x: "72%", y: "16%", text: " A stain that ruined the garment." },
  { label: "2", x: "26%", y: "52%", text: " A patch added to cover a tear." },
  { label: "3", x: "60%", y: "62%", text: " A pocket worn through at the edge." },
  { label: "4", x: "72%", y: "86%", text: " A hem re-stitched by hand." },
];

const rings = [
  {
    seed: 3,
    scale: 8,
    main: { rx: 38, ry: 42, rot: -12, sw: 6, dash: "70 14 45 10 80 18" },
    ghost: { rx: 44, ry: 41, rot: 20, sw: 4, dash: "50 25 85 12 60 20", o: 0.5 },
  },
  {
    seed: 8,
    scale: 10,
    main: { rx: 44, ry: 38, rot: 8, sw: 7, dash: "90 10 35 12 70 15" },
    ghost: { rx: 40, ry: 46, rot: -25, sw: 3, dash: "40 30 75 15 90 10", o: 0.45 },
  },
  {
    seed: 12,
    scale: 11,
    main: { rx: 40, ry: 44, rot: -30, sw: 5, dash: "55 20 95 10 65 12" },
    ghost: { rx: 46, ry: 40, rot: 15, sw: 4, dash: "80 18 45 22 70 14", o: 0.55 },
  },
  {
    seed: 21,
    scale: 13,
    main: { rx: 42, ry: 40, rot: 18, sw: 6, dash: "65 16 85 8 50 25" },
    ghost: { rx: 38, ry: 45, rot: -10, sw: 5, dash: "90 20 40 18 75 15", o: 0.4 },
  },
];

const hotspotLayer = document.querySelector(".jacket-hotspots");
const reveals = document.querySelector(".jacket-reveals");

const stripes = [
  { seed: 31, scale: 4 },
  { seed: 33, scale: 5 },
  { seed: 35, scale: 6 },
  { seed: 37, scale: 7 },
];

reveals.innerHTML = spots
  .map((spot, i) => {
    const stripe = stripes[i];
    const filterId = `marker-stripe-${i}`;
    return `
  <p class="reveal-line" data-index="${i}">
    <span class="reveal-number">${spot.label}</span>
    <span class="reveal-body">
      <span class="reveal-text">${spot.text}</span>
      <svg class="reveal-stripe" viewBox="0 0 300 26" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <filter id="${filterId}" x="-5%" y="-40%" width="110%" height="180%">
            <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="2" seed="${stripe.seed}" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="${stripe.scale}"/>
          </filter>
        </defs>
        <rect x="0" y="0" width="300" height="26" filter="url(#${filterId})"/>
      </svg>
    </span>
  </p>`;
  })
  .join("");

spots.forEach((spot, i) => {
  const ring = rings[i];
  const filterId = `marker-sketch-${i}`;
  const btn = document.createElement("button");
  btn.className = "spot";
  btn.type = "button";
  btn.style.left = spot.x;
  btn.style.top = spot.y;
  btn.setAttribute("aria-label", `Reveal detail ${spot.label}`);
  btn.innerHTML = `
    <span class="spot-marker">
      <svg class="spot-ring" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <filter id="${filterId}" x="-25%" y="-25%" width="150%" height="150%">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="${ring.seed}" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="${ring.scale}"/>
          </filter>
        </defs>
        <ellipse class="ring-main" cx="50" cy="50" rx="${ring.main.rx}" ry="${ring.main.ry}" transform="rotate(${ring.main.rot} 50 50)" fill="none" stroke-width="${ring.main.sw}" stroke-linecap="round" stroke-dasharray="${ring.main.dash}" filter="url(#${filterId})"/>
        <ellipse class="ring-ghost" cx="50" cy="50" rx="${ring.ghost.rx}" ry="${ring.ghost.ry}" transform="rotate(${ring.ghost.rot} 50 50)" fill="none" stroke-width="${ring.ghost.sw}" stroke-linecap="round" stroke-dasharray="${ring.ghost.dash}" opacity="${ring.ghost.o}" filter="url(#${filterId})"/>
      </svg>
      <span class="spot-number">${spot.label}</span>
    </span>`;
  btn.addEventListener("click", () => {
    if (btn.dataset.done) return;
    btn.dataset.done = "true";
    btn.classList.add("spot--active");
    reveals
      .querySelector(`[data-index="${i}"]`)
      .classList.add("reveal-line--shown");
  });
  hotspotLayer.appendChild(btn);
});

const valueTexts = [
  "A trace of the garment's history. Every mark tells the story of how a piece was worn, lived in and valued before it found a new purpose.",
  "An opportunity to reconstruct. Instead of hiding imperfections, she often used them as the starting point for a new silhouette or unexpected detail.",
  "Character. Years of wear create textures and tones that cannot be reproduced with new fabric, giving each garment a unique identity.",
];

const valuePositions = [
  { x: "72%", y: "16%" },
  { x: "26%", y: "52%" },
  { x: "60%", y: "62%" },
];

const valueLayer = document.querySelector(".value-section .jacket-hotspots");
const valueReveals = document.querySelector(".value-reveals");

valuePositions.forEach((pos, i) => {
  const ring = rings[i];
  const filterId = `value-marker-sketch-${i}`;
  const btn = document.createElement("button");
  btn.className = "spot spot--active";
  btn.type = "button";
  btn.style.left = pos.x;
  btn.style.top = pos.y;
  btn.setAttribute("aria-label", `Reveal detail ${i + 1}`);
  btn.innerHTML = `
    <span class="spot-marker">
      <svg class="spot-ring" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <filter id="${filterId}" x="-25%" y="-25%" width="150%" height="150%">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="${ring.seed}" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="${ring.scale}"/>
          </filter>
        </defs>
        <ellipse class="ring-main" cx="50" cy="50" rx="${ring.main.rx}" ry="${ring.main.ry}" transform="rotate(${ring.main.rot} 50 50)" fill="none" stroke-width="${ring.main.sw}" stroke-linecap="round" stroke-dasharray="${ring.main.dash}" filter="url(#${filterId})"/>
        <ellipse class="ring-ghost" cx="50" cy="50" rx="${ring.ghost.rx}" ry="${ring.ghost.ry}" transform="rotate(${ring.ghost.rot} 50 50)" fill="none" stroke-width="${ring.ghost.sw}" stroke-linecap="round" stroke-dasharray="${ring.ghost.dash}" opacity="${ring.ghost.o}" filter="url(#${filterId})"/>
      </svg>
      <span class="spot-number">?</span>
    </span>`;
  btn.addEventListener("click", () => {
    if (btn.dataset.done) return;
    btn.dataset.done = "true";
    const p = document.createElement("p");
    p.className = "value-reveal";
    p.textContent = valueTexts[i];
    valueReveals.appendChild(p);
  });
  valueLayer.appendChild(btn);
});

const pieces = [
  { src: object1, w: 322, x: "8%", y: "8%" },
  { src: object2, w: 205, x: "60%", y: "10%" },
  { src: object3, w: 194, x: "20%", y: "45%" },
  { src: object4, w: 187, x: "65%", y: "45%" },
  { src: object5, w: 282, x: "10%", y: "70%" },
];

const stage = document.querySelector(".reconstruct-stage");

pieces.forEach((piece) => {
  const img = document.createElement("img");
  img.className = "draggable";
  img.src = piece.src;
  img.alt = "";
  img.draggable = false;
  img.style.width = `${Math.round(piece.w * 0.78)}px`;
  img.style.left = piece.x;
  img.style.top = piece.y;

  img.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    const el = e.currentTarget;
    el.setPointerCapture(e.pointerId);
    const rect = stage.getBoundingClientRect();
    const startX = e.clientX;
    const startY = e.clientY;
    const startLeft = parseFloat(el.style.left);
    const startTop = parseFloat(el.style.top);

    const move = (ev) => {
      let nx = startLeft + ((ev.clientX - startX) / rect.width) * 100;
      let ny = startTop + ((ev.clientY - startY) / rect.height) * 100;
      nx = Math.max(0, Math.min(100, nx));
      ny = Math.max(0, Math.min(100, ny));
      el.style.left = `${nx}%`;
      el.style.top = `${ny}%`;
    };

    const up = () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointercancel", up);
    };

    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);
  });

  stage.appendChild(img);
});

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

jacketItems.forEach((item) => {
  const slide = document.createElement("div");
  slide.className = "jacket-slide";
  const img = document.createElement("img");
  img.src = item.src;
  img.alt = "";
  img.draggable = false;
  slide.appendChild(img);
  slide.addEventListener("click", () => {
    if (item.correct) {
      sliderMessage.textContent = correctText;
      sliderMessage.classList.remove("slider-message--error");
    } else {
      sliderMessage.textContent = "LOOK CLOSER";
      sliderMessage.classList.add("slider-message--error");
      jacketSlides.forEach((other) => {
        if (!other.item.correct) other.slide.classList.add("jacket--faded");
      });
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
