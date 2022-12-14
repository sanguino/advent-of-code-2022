const parseInput = input => {
  return input.split('\n').map(line => line.split(' -> ').map(pair => {
    const [x,y] = pair.split(',').map(Number);
    return {x,y};
  }));
}
const parseLines = (parsed, set) => {
  let maxY = 0;
  parsed.forEach(line => {
    line.forEach((point, index) => {
      const next = line[index+1];
      if (next){
        maxY = Math.max(maxY, point.y, next.y);
        pointToSet(point, set);
        const dir = getDirection(point, next);
        while (point.x !== next.x || point.y !== next.y){
          addPoint(point, dir);
          pointToSet(point, set);
        }
      }
    })
  });
  return maxY;
}

const pointToSet = (point, set) => {
  set.add(`${point.x}-${point.y}`);
}
const getDirection = (point, next) => {
  const dir = { x: point.x - next.x , y: point.y - next.y }
  dir.x = -(dir.x / Math.abs(dir.x) || 0);
  dir.y = -(dir.y / Math.abs(dir.y) || 0);
  return dir;
}

const addPoint = (pointA, pointB) => {
  pointA.x += pointB.x;
  pointA.y += pointB.y;
}

const checkPoint = (point, dir, set) => {
  if (!set.has(`${point.x + dir.x}-${point.y + dir.y}`))
    return {
      x: point.x + dir.x,
      y: point.y + dir.y,
    }
  return false;
}

const dropSand = (sand, set, maxY, limit = false) => {
  const sandDirs = [{x:0, y:1}, {x:-1, y:1}, {x:1, y:1}];
  for (const dir of sandDirs) {
    const next = checkPoint(sand, dir, set);
    if (!limit && next.y > maxY) return true;
    if (limit && next.y === maxY) break;
    if (next) return dropSand(next, set, maxY, limit);
  }
  if (limit && sand.x === 500 && sand.y === 0) return true;
  pointToSet(sand, set);
  return false;
}

const drawLog = set => {
  for (let j = 0; j< 10; j++){
      let linelog = ''
      for (let i = 494; i< 503; i++){
        linelog += set.has(`${i}-${j}`) ? 'x' : '.';
      }
      console.log(linelog)
    }
}

export const part1 = (input => {
  const parsed = parseInput(input);
  const set = new Set();
  const maxY = parseLines(parsed, set);
  const sandStart = {x: 500, y:0};
  let found = false;
  let count = 0;
  while (!found) {
    found = dropSand(sandStart, set, maxY, false);
    count ++;
  }
  return count-1;
});

export const part2 = (input => {
  const parsed = parseInput(input);
  const set = new Set();
  const maxY = parseLines(parsed, set) + 2;
  const sandStart = {x: 500, y:0};
  let found = false;
  let count = 0;
  while (!found) {
    found = dropSand(sandStart, set, maxY, true);
    count ++;
  }
  return count;
});
