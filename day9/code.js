const directions = {
    U: [0, +1],
    D: [0, -1],
    R: [+1, 0],
    L: [-1, 0],
}

const nextMove = (H, T) => {
    const distance = T.map((val, i) => val - H[i]);
    const diagonal = Math.abs(distance[0]) + Math.abs(distance[1]) > 2;
    const move = distance.map(val => (Math.abs(val) > 1 || diagonal) ? -1 * val/Math.abs(val) : 0);
    return move;
}

const add = (origin, amount) => origin.map((val, i) => val + amount[i]);
const times = (n, f) => { while(n-- > 0) f(); }

const calculate = ((input, ropeLength) => {
    const visited = new Set();
    let rope = Array(ropeLength).fill([0,0]);
    const instructions = input.split('\n').map(line => line.split(' '));

    instructions.forEach(([d, c]) => {
        const count = Number(c);
        const dir = directions[d];

        times(count, () => {
            rope[0] = add(rope[0], dir);
            for (let i=1; i<rope.length; i++){
                rope[i] = add(rope[i], nextMove(rope[i-1], rope[i]));
            }
            visited.add(rope.at(-1).toString());
        });
    }); 
    
    return visited.size;
});

export const part1 = (input => {
    return calculate(input, 2);
});

export const part2 = (input => {
    return calculate(input, 10);
});
