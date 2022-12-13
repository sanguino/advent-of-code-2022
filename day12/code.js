import {dijkstra} from './dijkstra.js';

const directions = [
  {x:  0, y:  1},
  {x:  0, y: -1},
  {x: -1, y:  0},
  {x:  1, y:  0},
];

const letterValue = letter => letter === 'E' ? 26 : Math.max(0, letter.charCodeAt(0) -96);
const parseData = input => {
  const graph = {};
  let start;
  let finish;

  input.split('\n')
    .map(line => line.split(''))
    .map((line, y) => line.map((pos, x) => ({name: pos, x, y, value: letterValue(pos)})))
    .map((line, y, all) => line.map((pos, x) => {
      pos.connections = directions.reduce((acc, {x:x1, y:y1}) => {
          const dest = all[y+y1] && all[y+y1][x+x1];
          if (dest && (dest.value <= pos.value + 1)) {
            acc = [...acc, dest];
          }
          return acc;
        }, []);
      return pos;
    })).forEach(line => {
      line.forEach(node => {
        const value = node.connections.reduce((acc, connection) => {
         return {...acc, [`${connection.x}-${connection.y}-${connection.name}`]: 1}
        }, {})
        if (node.name === 'S')
          start = `${node.x}-${node.y}-${node.name}`;
        if (node.name === 'E')
          finish = `${node.x}-${node.y}-${node.name}`;
        graph[`${node.x}-${node.y}-${node.name}`] = value;
      });
    });
  return {graph, start, finish};
}

export const part1 = (input => {
  const {graph, start, finish} = parseData(input);
  return dijkstra.find_path(graph, start, finish).length -1;
});

export const part2 = (input => {
  const {graph, finish} = parseData(input);
  return Math.min(...Object.keys(graph).filter(name => name.charAt(name.length-1) === 'a').map(start => {
      return dijkstra.find_path(graph, start, finish).length -1
  }).filter(result => result > 1));
});
