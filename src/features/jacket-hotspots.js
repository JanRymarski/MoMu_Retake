import { rings, stripes, HINT_DURATION } from "../sketch-effects.js";

// "Always Something New" jacket: clickable hotspots reveal
// hand-drawn notes about the garment flaws.
export const initJacketHotspots = () => {
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

const hotspotLayer = document.querySelector(".jacket-hotspots");
const reveals = document.querySelector(".jacket-reveals");
const spotButtons = [];

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
};
