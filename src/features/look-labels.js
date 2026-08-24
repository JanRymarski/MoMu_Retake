// Look-section: clicking any label swaps it to its "good" version,
// in the exact same spot (one-time per label).
export const initLookLabels = () => {
document.querySelectorAll(".look-label").forEach((label) => {
  label.addEventListener("click", () => {
    if (label.classList.contains("is-swapped")) return;
    label.classList.add("is-swapped");
  });
});
};
