import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "./assets/logo.svg";
import headerBackground from "./assets/header_background.jpg";
import headerBackgroundBig from "./assets/header_background_big.jpg";
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
import marina from "./assets/marina.png";
import marinaOpen from "./assets/marina_openeyes.png";
import correctOne from "./assets/correct_one.png";
import correctTwo from "./assets/correct_two.png";
import correctThre from "./assets/correct_thre.png";
import correctFour from "./assets/correct_four.png";
import correctFive from "./assets/correct_five.png";
import labelOne from "./assets/label_one.png";
import labelOneGood from "./assets/label_one_good.png";

gsap.registerPlugin(ScrollTrigger);

const carouselImages = [carousel1, carousel2, carousel3, carousel4, carousel5];
const carouselCaptions = [
  "M.Y. installation at Dover Street Market, United Kingdom, 2025.",
  "M.Y. installation at Paris, France, 2024.",
  "A/W. installation 2003-2004",
  "Catwalk at Barcelona, Spain, 2006.",
  "Ensemble, Antwerp , Belgium, 2013.",
];

document.querySelector("#app").innerHTML = `
<div class="site-header">
  <nav class="nav-bar">
    <img src="${logo}" class="logo" alt="MoMu logo">
    <div class="nav-menu" id="nav-menu">
      <a class="nav-link" href="#about">About</a>
      <a class="nav-link" href="https://www.momu.be/en/collection-stories" target="_blank" rel="noopener">Stories</a>
      <a class="nav-button" href="https://visit.momu.be/" target="_blank" rel="noopener">Visit Museum</a>
    </div>
    <button class="hamburger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="nav-menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>
  <section class="hero">
    <img class="hero-bg" src="${headerBackground}" alt="">
    <img class="hero-bg-big" src="${headerBackgroundBig}" alt="">
    <h1 class="hero-title">Marina<br>Yee</h1>
    <img class="hero-cover" src="${headerCover}" alt="">
  </section>
</div>

<section class="quote-section">
  <p class="quote">Seeing value where others saw waste.</p>
</section>

<section class="about about-split" id="about">
  <img class="about-img" src="${aboutImage}" alt="">
  <div class="about-copy">
    <h2 class="about-title">About Marina</h2>
    <p class="about-text">Fashion often celebrates the new. Every season brings new collections, trends and silhouettes, encouraging us to replace what came before. Marina Yee chose a different path. Instead of starting with new fabrics, she worked with garments that had already been worn and forgotten.</p>
    <p class="about-text">She believed clothing carries history through its materials, construction and signs of wear. Rather than hiding those traces, she made them part of the design. Long before upcycling and slow fashion became familiar terms, Marina Yee showed that creativity doesn't have to begin with something new.</p>
  </div>
</section>

<section class="carousel">
  <div class="carousel-track">
    ${carouselImages
      .map(
        (src, i) => `
    <figure class="carousel-slide">
      <img class="carousel-item" src="${src}" alt="">
      <figcaption class="carousel-caption">${carouselCaptions[i]}</figcaption>
    </figure>`,
      )
      .join("")}
  </div>
</section>

<section class="about about-antwerp">
  <h2 class="antwerp-title">The Antwerp Six</h2>
  <div class="antwerp-copy">
    <p class="about-text">Although they emerged as one generation, each member of the Antwerp Six developed a distinct creative vision. While others explored bold colours, tailoring or theatrical silhouettes, Marina Yee followed her own path. Her work centred on reconstruction, craftsmanship and giving existing garments a second life.</p>
    <div class="antwerp-right">
      <p class="about-text">Although they emerged as one generation, each member of the Antwerp Six developed a distinct creative vision. While others explored bold colours</p>
      <button class="antwerp-button" type="button">Discover more</button>
    </div>
  </div>
  <div class="antwerp-hero">
    <img class="antwerp-banner" src="${antwerpSixImage}" alt="">
    <span class="antwerp-year">1986</span>
  </div>
</section>

<section class="about about-jacket">
  <h2 class="new-title">Always Something New</h2>
  <p class="about-text">Fashion is built on the promise of something new. Every season introduces new collections, new trends and new reasons to replace what already hangs in our wardrobes. Clothing has become faster to produce, faster to consume and easier to discard. We rarely stop to ask what happens to the garments left behind</p>
  <h3 class="new-question">What if fashion didn't begin with something new?</h3>
  <div class="jacket-stage">
    <div class="jacket-wrap">
      <img class="jacket" src="${jacket}" alt="Jacket">
      <div class="jacket-hotspots"></div>
    </div>
    
    <div class="hint-row">
      <h4 class="jacket-hint">Find the flaws by clicking on jacket parts</h4>
      <button class="hint-spot jacket-spot-hint" type="button" aria-label="Show where to click">
        <svg class="spot-ring" viewBox="0 0 100 100" aria-hidden="true">
          <defs>
            <filter id="jacket-hint-ring-filter" x="-25%" y="-25%" width="150%" height="150%">
              <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="3" result="noise"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="8"/>
            </filter>
          </defs>
          <ellipse class="ring-main" cx="50" cy="50" rx="38" ry="42" transform="rotate(-12 50 50)" fill="none" stroke-width="6" stroke-linecap="round" stroke-dasharray="70 14 45 10 80 18" filter="url(#jacket-hint-ring-filter)"/>
          <ellipse class="ring-ghost" cx="50" cy="50" rx="44" ry="41" transform="rotate(20 50 50)" fill="none" stroke-width="4" stroke-linecap="round" stroke-dasharray="50 25 85 12 60 20" opacity="0.5" filter="url(#jacket-hint-ring-filter)"/>
        </svg>
        <span class="spot-number">?</span>
      </button>
    </div>
    <div class="jacket-reveals"></div>
  </div>
</section>

<section class="value-section">
  <div class="value-marina-wrap">
    <img class="value-marina" src="${marina}" alt="Portrait of Marina Yee">
    <img class="value-marina value-marina--open" src="${marinaOpen}" alt="" aria-hidden="true">
  </div>
  <h2 class="value-title">Marina saw something different</h2>
  <div class="hint-row">
    <h4 class="value-hint">Find what is Marina thinking by clicking on jacket parts</h4>
    <button class="hint-spot value-spot-hint" type="button" aria-label="Show where to click">
      <svg class="spot-ring" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <filter id="value-hint-ring-filter" x="-25%" y="-25%" width="150%" height="150%">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="3" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8"/>
          </filter>
        </defs>
        <ellipse class="ring-main" cx="50" cy="50" rx="38" ry="42" transform="rotate(-12 50 50)" fill="none" stroke-width="6" stroke-linecap="round" stroke-dasharray="70 14 45 10 80 18" filter="url(#value-hint-ring-filter)"/>
        <ellipse class="ring-ghost" cx="50" cy="50" rx="44" ry="41" transform="rotate(20 50 50)" fill="none" stroke-width="4" stroke-linecap="round" stroke-dasharray="50 25 85 12 60 20" opacity="0.5" filter="url(#value-hint-ring-filter)"/>
      </svg>
      <span class="spot-number">?</span>
    </button>
  </div>
  <div class="value-stage">
    <div class="value-reveals-col value-reveals-col--left"></div>
    <div class="jacket-wrap">
      <img class="jacket" src="${jacket}" alt="Jacket">
      <div class="jacket-hotspots"></div>
    </div>
    <div class="value-reveals-col value-reveals-col--right"></div>
  </div>
</section>

<section class="reconstruct-section">
  <h2 class="new-title">From Garment to Design</h2>
  <p class="about-text">Marina Yee didn't begin with a blank canvas. She began with garments that already had a history. By carefully taking them apart, she studied their construction before rebuilding them into something new.</p>
  <h3 class="new-question">Perhaps the first step towards producing less is learning to see more.</h3>
  <div class="hint-row">
    <h4 class="jacket-hint">reconstruct the garment.</h4>
    <button class="hint-spot placement-spot-hint" type="button" aria-label="Show correct placement">
      <svg class="spot-ring" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <filter id="hint-ring-filter" x="-25%" y="-25%" width="150%" height="150%">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="3" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8"/>
          </filter>
        </defs>
        <ellipse class="ring-main" cx="50" cy="50" rx="38" ry="42" transform="rotate(-12 50 50)" fill="none" stroke-width="6" stroke-linecap="round" stroke-dasharray="70 14 45 10 80 18" filter="url(#hint-ring-filter)"/>
        <ellipse class="ring-ghost" cx="50" cy="50" rx="44" ry="41" transform="rotate(20 50 50)" fill="none" stroke-width="4" stroke-linecap="round" stroke-dasharray="50 25 85 12 60 20" opacity="0.5" filter="url(#hint-ring-filter)"/>
      </svg>
      <span class="spot-number">?</span>
    </button>
  </div>
  <div class="reconstruct-stage"></div>
</section>

<div class="reconstruct-done" aria-hidden="true">
  <img class="done-marina" src="${marina}" alt="">
  <span class="done-text">good job</span>
</div>

<div class="reconstruct-done reconstruct-done--error" aria-hidden="true">
  <img class="done-marina" src="${marina}" alt="">
  <span class="done-text">LOOK CLOSER</span>
</div>

<section class="select-section">
  <div class="select-top">
    <div class="select-intro">
      <h2 class="new-title">Before Slow Fashion Had a Name</h2>
      <p class="about-text">When Marina Yee began reconstructing garments in the early 1980s, the fashion industry was driven by new collections and constant change. Existing clothing was rarely seen as the starting point for new design.</p>
      <p class="about-text">Marina chose a different approach. Instead of creating more, she explored what already existed. By carefully deconstructing and rebuilding worn garments, she showed that creativity could begin with history rather than newness.</p>
    </div>
    <h3 class="new-question slider-question">fashion
never
stops
producing</h3>
  </div>
  <h4 class="jacket-hint">select one jacket</h4>
  <div class="jacket-slider"></div>
  <div class="slider-message new-question"></div>
  <div class="correct-stage is-hidden" aria-hidden="true">
    <div class="correct-sequence">
      <img class="correct-frame" src="${correctOne}" alt="">
      <img class="correct-frame" src="${correctTwo}" alt="">
      <img class="correct-frame" src="${correctThre}" alt="">
      <img class="correct-frame" src="${correctFour}" alt="">
      <img class="correct-frame" src="${correctFive}" alt="">
    </div>
  </div>
  <div class="antwerp-copy">
  <p class="about-text">For Marina, reconstruction wasn't a trend or a response to sustainability. It was her way of designing. Every garment carried craftsmanship, materials and stories worth preserving instead of replacing.</p>
  <p class="about-text">Decades later, many of the ideas that shaped Marina's work-reuse, longevity and thoughtful production-became central to what we now call slow fashion. While the language changed, Marina's philosophy remained the same.</p>
<div/>
  </section>

<section class="look-section">
  <h2 class="new-title">What Do You See Now?</h2>
  <p class="about-text">Throughout this story, you've seen how Marina Yee challenged the idea that clothing loses its value with time.</p>
  <p class="about-text">Now it's your turn</p>
   <h4 class="jacket-hint">scratch label</h4>
  <div class="look-stage">
    <img class="look-image" src="${jacketFinal}" alt="Jacket">
    <button class="look-label" type="button" aria-label="Look at the label">
      <img class="look-label-img look-label-img--default" src="${labelOne}" alt="">
      <img class="look-label-img look-label-img--good" src="${labelOneGood}" alt="" aria-hidden="true">
    </button>
  </div>
  <p class="about-text">Perhaps the greatest legacy of Marina Yee isn't the garments she created-it's the different way she taught us to see the ones we already have.</p>
</section>

<section class="cta-section">
  <h2 class="cta-title">Look again.</h2>
  <p class="cta-copy">You've seen fashion through Marina Yee's eyes.<br>Now discover how other designers have challenged what fashion can be.</p>
  <div class="cta-links">
    <a class="cta-link" href="https://www.momu.be/en/collection" target="_blank" rel="noopener">Explore the collection at MoMu&nbsp;&rarr;</a>
    <a class="cta-link cta-link--solid" href="https://visit.momu.be/" target="_blank" rel="noopener">Visit the museum&nbsp;&rarr;</a>
  </div>
</section>

<footer class="site-footer">
  <div class="site-footer__partners">
    <span class="site-footer__partners-label">With support of</span>
    <ul class="site-footer__partners-list">
      <li>
        <a class="site-footer__partner-link" href="https://www.visitantwerpen.be/" target="_blank" rel="noopener">Visit&nbsp;Antwerpen</a>
      </li>
      <li>
        <a class="site-footer__partner-link" href="https://www.vlaanderen.be/nl" target="_blank" rel="noopener">Vlaanderen</a>
      </li>
    </ul>
  </div>

  <div class="site-footer__grid">
    <nav class="site-footer__nav" aria-label="Secondary pages">
      <ul>
        <li><a href="#about">About the museum</a></li>
        <li><a href="https://www.momu.be/en/press" target="_blank" rel="noopener">Press</a></li>
        <li><a href="https://www.momu.be/en/privacy-statement" target="_blank" rel="noopener">Privacy statement</a></li>
        <li><a href="https://www.momu.be/en/accessibility" target="_blank" rel="noopener">Digital accessibility</a></li>
      </ul>
    </nav>

    <address class="site-footer__social">
      <strong>Follow MoMu on:</strong>
      <ul>
        <li>
          <a href="https://www.facebook.com/momuantwerp" target="_blank" rel="noopener" aria-label="Facebook (opens in a new tab)">
            <svg viewBox="0 0 50 50" width="36" height="36" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title>
              <path d="M50,25A25,25,0,1,0,24.44,50V30.2H18.75V24h5.69V17.7c0-5,3-8.3,9-8.3A22.89,22.89,0,0,1,38,9.81v5.82H34c-1.83,0-2.73,1-2.73,2.83V24H37.5l-.9,6.25H31.25v19A25,25,0,0,0,50,25Z"/>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/momuantwerp" target="_blank" rel="noopener" aria-label="Instagram (opens in a new tab)">
            <svg viewBox="0 0 50 50" width="36" height="36" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title>
              <path d="M25,0A25,25,0,1,0,50,25,25,25,0,0,0,25,0ZM39.47,31.09a10.42,10.42,0,0,1-.66,3.44,7.31,7.31,0,0,1-4.15,4.15,10.54,10.54,0,0,1-3.45.66c-1.51.07-2,.09-5.85.09s-4.34,0-5.85-.09a10.54,10.54,0,0,1-3.45-.66A6.94,6.94,0,0,1,13.55,37a6.86,6.86,0,0,1-1.64-2.51,10.42,10.42,0,0,1-.66-3.44c-.07-1.52-.08-2-.08-5.86s0-4.33.08-5.85a10.42,10.42,0,0,1,.66-3.44,7.23,7.23,0,0,1,4.15-4.15,10.54,10.54,0,0,1,3.45-.66c1.51-.07,2-.09,5.85-.09s4.34,0,5.85.09a10.54,10.54,0,0,1,3.45.66,6.91,6.91,0,0,1,2.51,1.63,7,7,0,0,1,1.64,2.52,10.42,10.42,0,0,1,.66,3.44c.07,1.52.08,2,.08,5.85S39.54,29.57,39.47,31.09Z"/>
              <circle cx="25.35" cy="25.2" r="4.73"/>
              <path d="M36.91,19.5a7.68,7.68,0,0,0-.49-2.64,4.3,4.3,0,0,0-1.06-1.63,4.47,4.47,0,0,0-1.63-1.06,7.87,7.87,0,0,0-2.64-.49c-1.49-.07-1.94-.08-5.73-.08s-4.24,0-5.74.08a7.86,7.86,0,0,0-2.63.49,4.47,4.47,0,0,0-1.63,1.06,4.3,4.3,0,0,0-1.06,1.63,7.68,7.68,0,0,0-.49,2.64c-.07,1.5-.09,1.94-.09,5.73s0,4.24.09,5.74a7.6,7.6,0,0,0,.49,2.63,4.26,4.26,0,0,0,1.06,1.64A4.47,4.47,0,0,0,17,36.3a8.13,8.13,0,0,0,2.63.49c1.5.07,1.95.08,5.74.08s4.24,0,5.73-.08a8.14,8.14,0,0,0,2.64-.49,4.47,4.47,0,0,0,1.63-1.06,4.26,4.26,0,0,0,1.06-1.64A7.6,7.6,0,0,0,36.91,31C37,29.47,37,29,37,25.23S37,21,36.91,19.5Zm-11.56,13a7.29,7.29,0,1,1,7.29-7.29A7.29,7.29,0,0,1,25.35,32.49Zm7.58-13a1.71,1.71,0,1,1,1.71-1.7A1.7,1.7,0,0,1,32.93,19.45Z"/>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/momuantwerp/" target="_blank" rel="noopener" aria-label="LinkedIn (opens in a new tab)">
            <svg viewBox="0 0 50 50" width="36" height="36" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title>
              <path d="M25,0A25,25,0,1,0,50,25,25,25,0,0,0,25,0ZM17.7,37.5H11.45V19.8H17.7ZM14.58,16.67h-.05C12,16.67,10.42,15,10.42,13s1.66-3.63,4.16-3.63S18.7,10.94,18.75,13,17.14,16.67,14.58,16.67ZM40.63,37.5H34.38V28.13C34.38,25,33.11,24,31.2,24s-3.07,1.64-3.07,4.18V37.5H21.88V24s-.13-3.47-.18-4.15h6.21l.22,2.71a5.36,5.36,0,0,1,5.2-3.76c4.46,0,7.3,3.64,7.3,9.38Z"/>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.pinterest.com/momuantwerp" target="_blank" rel="noopener" aria-label="Pinterest (opens in a new tab)">
            <svg viewBox="0 0 50 50" width="36" height="36" xmlns="http://www.w3.org/2000/svg"><title>Pinterest</title>
              <path d="M50,25A25,25,0,1,0,15,47.92a19.08,19.08,0,0,1,.42-5.73c.43-2.08,3.22-13.65,3.22-13.65a9.28,9.28,0,0,1-.81-3.95c0-3.69,2.15-6.47,4.81-6.47,2.25,0,3.35,1.68,3.35,3.76,0,2.24-1.44,5.66-2.2,8.86a3.84,3.84,0,0,0,3.93,4.78c4.76,0,7.93-6.05,7.93-13.23,0-5.52-3.63-9.62-10.35-9.62A11.87,11.87,0,0,0,13,24.66a7.4,7.4,0,0,0,1.62,4.91c.46.53.58.75.41,1.39-.12.46-.41,1.56-.51,2a.92.92,0,0,1-1.3.64C9.72,32.18,8.11,28.34,8.11,24c0-7.13,6-15.62,17.87-15.62,9.49,0,15.79,6.93,15.79,14.35,0,9.77-5.42,17.12-13.47,17.12-2.71,0-5.28-1.44-6.13-3.13,0,0-1.44,5.79-1.74,6.89A19.43,19.43,0,0,1,17.87,49,23.71,23.71,0,0,0,25,50,25,25,0,0,0,50,25Z"/>
            </svg>
          </a>
        </li>
      </ul>
    </address>
  </div>

  <p class="site-footer__legal">© 2026 MoMu - Fashion Museum Antwerp · Nationalestraat 28, 2000 Antwerp</p>
</footer>
`;

gsap.fromTo(
  ".hero-cover",
  { xPercent: 100 },
  { xPercent: 0, duration: 1.2, delay: 1, ease: "power3.out" },
);

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (!prefersReducedMotion) {
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
}

if (!prefersReducedMotion) {
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
}

const spots = [
  { label: "1", x: "72%", y: "16%", text: " A stain that ruined the garment." },
  { label: "2", x: "26%", y: "52%", text: " A patch added to cover a tear." },
  {
    label: "3",
    x: "60%",
    y: "62%",
    text: " A pocket worn through at the edge.",
  },
  { label: "4", x: "72%", y: "86%", text: " A hem re-stitched by hand." },
];

const rings = [
  {
    seed: 3,
    scale: 8,
    main: { rx: 38, ry: 42, rot: -12, sw: 6, dash: "70 14 45 10 80 18" },
    ghost: {
      rx: 44,
      ry: 41,
      rot: 20,
      sw: 4,
      dash: "50 25 85 12 60 20",
      o: 0.5,
    },
  },
  {
    seed: 8,
    scale: 10,
    main: { rx: 44, ry: 38, rot: 8, sw: 7, dash: "90 10 35 12 70 15" },
    ghost: {
      rx: 40,
      ry: 46,
      rot: -25,
      sw: 3,
      dash: "40 30 75 15 90 10",
      o: 0.45,
    },
  },
  {
    seed: 12,
    scale: 11,
    main: { rx: 40, ry: 44, rot: -30, sw: 5, dash: "55 20 95 10 65 12" },
    ghost: {
      rx: 46,
      ry: 40,
      rot: 15,
      sw: 4,
      dash: "80 18 45 22 70 14",
      o: 0.55,
    },
  },
  {
    seed: 21,
    scale: 13,
    main: { rx: 42, ry: 40, rot: 18, sw: 6, dash: "65 16 85 8 50 25" },
    ghost: {
      rx: 38,
      ry: 45,
      rot: -10,
      sw: 5,
      dash: "90 20 40 18 75 15",
      o: 0.4,
    },
  },
];

const hotspotLayer = document.querySelector(".jacket-hotspots");
const reveals = document.querySelector(".jacket-reveals");
const spotButtons = [];

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
  const number = btn.querySelector(".spot-number");
  spotButtons.push({ btn, number, label: String(spot.label) });
  btn.addEventListener("click", () => {
    if (btn.dataset.done) return;
    btn.dataset.done = "true";
    btn.classList.add("spot--active");
    number.textContent = String(spot.label);
    reveals
      .querySelector(`[data-index="${i}"]`)
      .classList.add("reveal-line--shown");
  });
  hotspotLayer.appendChild(btn);
});

const HINT_DURATION = 2000;
let hintTimer = null;
const showHotspotHints = () => {
  spotButtons.forEach(({ btn, number }) => {
    if (btn.dataset.done) return;
    btn.classList.add("spot--active");
    number.textContent = "?";
  });
  clearTimeout(hintTimer);
  hintTimer = setTimeout(() => {
    spotButtons.forEach(({ btn, number, label }) => {
      if (!btn.dataset.done) {
        btn.classList.remove("spot--active");
        number.textContent = label;
      }
    });
  }, HINT_DURATION);
};

document
  .querySelector(".jacket-spot-hint")
  .addEventListener("click", showHotspotHints);

const valueTexts = [
  "I see its history. Every mark tells me that this garment has already lived a life.",
  "I see possibility. A hole doesn't have to be hidden - it can become part of what the garment becomes.",
  "I see character. Time has given this fabric something I could never create from new.",
  "I see another beginning. Why should a garment's story end simply because its first life is over?",
];

const valuePositions = [
  { x: "72%", y: "16%" },
  { x: "26%", y: "52%" },
  { x: "60%", y: "62%" },
  { x: "72%", y: "86%" }, // same place as the fourth spot in about-jacket
];

// Two revealed texts sit on each side of the jacket.
const valueSides = ["right", "left", "left", "right"];

const valueLayer = document.querySelector(".value-section .jacket-hotspots");

const valueColumns = {
  left: document.querySelector(".value-reveals-col--left"),
  right: document.querySelector(".value-reveals-col--right"),
};

const valueRevealLines = valueTexts.map((text, i) => {
  const stripe = stripes[i];
  const filterId = `value-stripe-${i}`;
  const line = document.createElement("p");
  line.className = "reveal-line";
  line.innerHTML = `
    <span class="reveal-number">${i + 1}</span>
    <span class="reveal-body">
      <span class="reveal-text">&#8220;${text}&#8221;</span>
      <svg class="reveal-stripe" viewBox="0 0 300 26" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <filter id="${filterId}" x="-5%" y="-40%" width="110%" height="180%">
            <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="2" seed="${stripe.seed}" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="${stripe.scale}"/>
          </filter>
        </defs>
        <rect x="0" y="0" width="300" height="26" filter="url(#${filterId})"/>
      </svg>
    </span>`;
  valueColumns[valueSides[i]].appendChild(line);
  return line;
});

const valueSpots = [];

valuePositions.forEach((pos, i) => {
  const ring = rings[i];
  const filterId = `value-marker-sketch-${i}`;
  const btn = document.createElement("button");
  btn.className = "spot";
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
      <span class="spot-number">${i + 1}</span>
    </span>`;
  const number = btn.querySelector(".spot-number");
  valueSpots.push({ btn, number, label: String(i + 1) });
  btn.addEventListener("click", () => {
    if (btn.dataset.done) return;
    btn.dataset.done = "true";
    btn.classList.add("spot--active");
    number.textContent = String(i + 1);
    valueRevealLines[i].classList.add("reveal-line--shown");
  });
  valueLayer.appendChild(btn);
});

let valueHintTimer = null;

document.querySelector(".value-spot-hint").addEventListener("click", () => {
  valueSpots.forEach(({ btn, number }) => {
    if (btn.dataset.done) return;
    btn.classList.add("spot--active");
    number.textContent = "?";
  });
  clearTimeout(valueHintTimer);
  valueHintTimer = setTimeout(() => {
    valueSpots.forEach(({ btn, number, label }) => {
      if (!btn.dataset.done) {
        btn.classList.remove("spot--active");
        number.textContent = label;
      }
    });
  }, HINT_DURATION);
});

const pieces = [
  { src: object1, w: 322, x: "8%", y: "8%" },
  { src: object2, w: 205, x: "60%", y: "10%" },
  { src: object3, w: 194, x: "20%", y: "45%" },
  { src: object4, w: 187, x: "65%", y: "45%" },
  { src: object5, w: 282, x: "10%", y: "70%" },
];

const targets = [
  { x: 50, y: 62 },
  { x: 70, y: 50 },
  { x: 50, y: 50 },
  { x: 30, y: 50 },
  { x: 50, y: 28 },
];

const stage = document.querySelector(".reconstruct-stage");
const donePanel = document.querySelector(".reconstruct-done");
const TOLERANCE = 7;
let lockedCount = 0;

const showDone = () => {
  // Dismiss the LOOK CLOSER popup if it is still on screen.
  clearTimeout(errorTimer);
  errorPanel.classList.remove("is-done");
  errorPanel.setAttribute("aria-hidden", "true");

  donePanel.classList.add("is-done");
  donePanel.setAttribute("aria-hidden", "false");
  setTimeout(() => {
    donePanel.classList.remove("is-done");
    donePanel.setAttribute("aria-hidden", "true");
  }, 3000);
};

const errorPanel = document.querySelector(".reconstruct-done--error");
let errorTimer = null;

const showError = () => {
  errorPanel.classList.add("is-done");
  errorPanel.setAttribute("aria-hidden", "false");
  clearTimeout(errorTimer);
  errorTimer = setTimeout(() => {
    errorPanel.classList.remove("is-done");
    errorPanel.setAttribute("aria-hidden", "true");
  }, 3000);
};

pieces.forEach((piece, i) => {
  const img = document.createElement("img");
  img.className = "draggable";
  img.src = piece.src;
  img.alt = "";
  img.draggable = false;
  img.style.width = `${Math.round(piece.w * 0.78)}px`;
  img.style.left = piece.x;
  img.style.top = piece.y;

  img.addEventListener("pointerdown", (e) => {
    if (img.dataset.locked) return;
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
      const nx = parseFloat(el.style.left);
      const ny = parseFloat(el.style.top);
      const target = targets[i];
      if (
        Math.hypot(nx - target.x, ny - target.y) <= TOLERANCE &&
        !el.dataset.locked
      ) {
        el.dataset.locked = "true";
        el.classList.add("piece-good");
        el.style.left = `${target.x}%`;
        el.style.top = `${target.y}%`;
        el.style.pointerEvents = "none";
        lockedCount += 1;
        if (lockedCount === pieces.length) showDone();
      }
    };

    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);
  });

  stage.appendChild(img);
});

const hintButton = document.querySelector(".placement-spot-hint");
let markerTimer = null;

const markerRing = (i) => {
  const ring = rings[i % rings.length];
  const filterId = `hint-marker-${i}`;
  return `
    <svg class="spot-ring" viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <filter id="${filterId}" x="-25%" y="-25%" width="150%" height="150%">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="${ring.seed}" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="${ring.scale}"/>
        </filter>
      </defs>
      <ellipse class="ring-main" cx="50" cy="50" rx="${ring.main.rx}" ry="${ring.main.ry}" transform="rotate(${ring.main.rot} 50 50)" fill="none" stroke-width="${ring.main.sw}" stroke-linecap="round" stroke-dasharray="${ring.main.dash}" filter="url(#${filterId})"/>
      <ellipse class="ring-ghost" cx="50" cy="50" rx="${ring.ghost.rx}" ry="${ring.ghost.ry}" transform="rotate(${ring.ghost.rot} 50 50)" fill="none" stroke-width="${ring.ghost.sw}" stroke-linecap="round" stroke-dasharray="${ring.ghost.dash}" opacity="${ring.ghost.o}" filter="url(#${filterId})"/>
    </svg>`;
};

const showPlacement = () => {
  stage.querySelectorAll(".target-marker").forEach((m) => m.remove());
  targets.forEach((t, i) => {
    const m = document.createElement("div");
    m.className = "target-marker";
    m.style.left = `${t.x}%`;
    m.style.top = `${t.y}%`;
    m.innerHTML = markerRing(i);
    stage.appendChild(m);
  });
  clearTimeout(markerTimer);
  markerTimer = setTimeout(() => {
    stage.querySelectorAll(".target-marker").forEach((m) => m.remove());
  }, 4000);
};

hintButton.addEventListener("click", showPlacement);

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
  slide.appendChild(img);
  slide.addEventListener("click", () => {
    if (item.correct) {
      sliderMessage.textContent = correctText;
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

// Look-section: clicking the label swaps it to its "good" version,
// in the exact same spot.
const lookLabel = document.querySelector(".look-label");

lookLabel.addEventListener("click", () => {
  if (lookLabel.classList.contains("is-swapped")) return;
  lookLabel.classList.add("is-swapped");
});

// Mobile hamburger navigation
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

let scrollLockY = 0;

const setMenuOpen = (open) => {
  if (open) {
    // Physically freeze the page at the current scroll position.
    // overflow:hidden alone is ignored by iOS touch scrolling —
    // a fixed body genuinely cannot move.
    scrollLockY = window.scrollY;
    Object.assign(document.body.style, {
      position: "fixed",
      top: `${-scrollLockY}px`,
      left: "0",
      right: "0",
      width: "100%",
    });
    document.body.classList.add("menu-open");
  } else {
    Object.assign(document.body.style, {
      position: "",
      top: "",
      left: "",
      right: "",
      width: "",
    });
    document.body.classList.remove("menu-open");
    // Restore the exact spot (bypass the global smooth-scroll)
    const root = document.documentElement;
    const prevBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, scrollLockY);
    root.style.scrollBehavior = prevBehavior;
  }
  navMenu.classList.toggle("is-open", open);
  hamburger.classList.toggle("is-open", open);
  hamburger.setAttribute("aria-expanded", String(open));
};

hamburger.addEventListener("click", () => {
  setMenuOpen(!navMenu.classList.contains("is-open"));
});

// Choosing an item closes the menu
navMenu.addEventListener("click", (event) => {
  if (event.target.closest("a, button")) setMenuOpen(false);
});

// Tapping outside the nav closes it
document.addEventListener("click", (event) => {
  if (navMenu.classList.contains("is-open") && !event.target.closest(".nav-bar")) {
    setMenuOpen(false);
  }
});

// Escape closes it too
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenuOpen(false);
});

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
