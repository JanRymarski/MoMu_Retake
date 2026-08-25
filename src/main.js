import "./style.css";
import { ScrollTrigger } from "./motion.js";
import { buildPage } from "./page.js";
import { initIntro } from "./features/intro.js";
import { initWriteOn } from "./features/write-on.js";
import { initAboutReveal } from "./features/about-reveal.js";
import { initJacketHotspots } from "./features/jacket-hotspots.js";
import { initValueHotspots } from "./features/value-hotspots.js";
import { initReconstruct } from "./features/reconstruct.js";
import { initJacketSlider } from "./features/jacket-slider.js";
import { initLookLabels } from "./features/look-labels.js";
import { initNav } from "./features/nav.js";
import { initCarousel } from "./features/carousel.js";

document.querySelector("#app").innerHTML = buildPage();

window.addEventListener("load", () => ScrollTrigger.refresh());
if (document.fonts?.ready) {
  document.fonts.ready.then(() => ScrollTrigger.refresh());
}

initIntro();
initWriteOn();
initAboutReveal();
initJacketHotspots();
initValueHotspots();
const { showError } = initReconstruct();
initJacketSlider({ showError });
initLookLabels();
initNav();
initCarousel();
