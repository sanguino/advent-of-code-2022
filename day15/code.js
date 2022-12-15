const parseInput = input => {
  const regex = new RegExp(/(-*\d+)/, 'g');
  return input.split('\n').map(line => [...line.matchAll(regex)].map(e => Number(e[0])));
}

const getDistance = (sx, sy, bx, by) => Math.abs(sx - bx) + Math.abs(sy - by);

export const part1 = ((input, py = 2000000) => {
  const parsed = parseInput(input).map(([sx, sy, bx, by]) => ({
    sx,
    sy,
    bx,
    by,
    distance: getDistance(sx, sy, bx, by),
  }));
  const maxDistance = Math.max(...parsed.map(({distance}) => distance));
  const minX = Math.min(...parsed.map(({sx, bx}) => Math.min(sx, bx))) - maxDistance;
  const maxX = Math.max(...parsed.map(({sx, bx}) => Math.max(sx, bx))) + maxDistance;

  const linetoCheck = [];
  for (let i = minX; i < maxX; i++) {
    linetoCheck.push(i);
  }
  const checks = linetoCheck.map(px => {
    for (const {sx, sy, bx, by, distance} of parsed) {
      if (getDistance(sx, sy, px, py) <= distance && getDistance(px, py, bx, by) > 0) {
        return `${px} true`;
      }
    }
    return `${px} false`;
  });
  return checks.filter(inside => inside.endsWith('true')).length;
});

const checkPoint = (px, py, sensors) => {
  for (const {sx, sy, distance} of sensors) {
    if (getDistance(sx, sy, px, py) <= distance) {
      return sx + distance - Math.abs(sy - py);
    }
  }
  return false;
}
export const part2 = ((input, pmax = 4000000) => {
  const parsed = parseInput(input).map(([sx, sy, bx, by]) => ({
    sx,
    sy,
    bx,
    by,
    distance: getDistance(sx, sy, bx, by),
  }));

  for (let y = 0; y < pmax; y++) {
    for (let x = 0; x < pmax; x++) {
      const next = checkPoint(x, y, parsed);
      if (next === false) {
        return 4000000*x+y;
      } else {
        x = next;
      }
    }
  }
  return false;
});

