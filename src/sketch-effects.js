// Hand-drawn SVG ring/brush configurations shared by the
// hotspot, value and reconstruct interactions.
export const rings = [
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

export const stripes = [
  { seed: 31, scale: 4 },
  { seed: 33, scale: 5 },
  { seed: 35, scale: 6 },
  { seed: 37, scale: 7 },
];

// How long "?" hint states stay visible.
export const HINT_DURATION = 2000;
