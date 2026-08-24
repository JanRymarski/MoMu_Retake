import { rings, stripes, HINT_DURATION } from "../sketch-effects.js";

// Value section: same hotspot mechanic, but each click reveals
// what Marina sees in the garment.
export const initValueHotspots = () => {
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
};
