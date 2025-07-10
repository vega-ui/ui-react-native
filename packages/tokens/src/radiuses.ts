export const radiuses = (scale: number = 4) => ({
  1: scale,
  2: scale * 2,
  3: scale * 3,
  4: scale * 4,
  5: scale * 5,
  6: scale * 6,
  8: scale * 8,
}) as const;
