export const getDistance = (x1: number, y1: number, x2: number, y2: number) => {
  var a = x1 - x2;
  var b = y1 - y2;

  return Math.hypot(a, b);
};
