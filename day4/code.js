
export const part1 = (input => {
    const list = input.split('\n');
    const parsed = list.map(line => line.split(',').map(pair => pair.split('-').map(elem => Number(elem))));
    return parsed.reduce((acc, [ [a1, a2], [b1, b2] ]) => acc + (( (a1 >= b1 && a2 <= b2) || a1 <= b1 && a2 >= b2) ? 1 : 0), 0);
});

export const part2 = (input => {
    const list = input.split('\n');
    const parsed = list.map(line => line.split(',').map(pair => pair.split('-').map(elem => Number(elem))));
    return parsed.reduce((acc, [ [a1, a2], [b1, b2] ]) => acc + ( (a2 >= b1 && (a2 <= b2 || a1 <= b1 || a1 <= b2)) ? 1 : 0), 0);
});


