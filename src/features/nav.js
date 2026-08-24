// Mobile hamburger navigation: overlay menu with scroll lock.
export const initNav = () => {
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
};
