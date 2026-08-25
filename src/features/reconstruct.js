import object1 from "../assets/object1.png";
import object2 from "../assets/object2.png";
import object3 from "../assets/object3.png";
import object4 from "../assets/object4.png";
import object5 from "../assets/object5.png";
import { rings } from "../sketch-effects.js";

export const initReconstruct = () => {
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
  img.loading = "lazy";
  img.decoding = "async";
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

  return { showError };
};
