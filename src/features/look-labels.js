export const initLookLabels = () => {
document.querySelectorAll(".look-label").forEach((label) => {
  label.addEventListener("click", () => {
    if (label.classList.contains("is-swapped")) return;
    label.classList.add("is-swapped");
  });
});
};
