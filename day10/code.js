
const cycles = [20, 60, 100, 140, 180, 220];
const lineBreaks = [200, 160, 120, 80, 40];

const calculateResult = input => {
    return input.split('\n').reduce((acc, instruction) => {
        acc.push(acc.at(-1))
        const add = Number(instruction.split(' ')[1]);
        if (add) {
            acc.push(acc.at(-1) + add)
        }
        return acc;
    }, [1]);
}

export const part1 = (input => {
    const result = calculateResult(input);
    return cycles.reduce((acc, cycle) => acc + cycle * result[cycle-1], 0)
});

export const part2 = (input => {
    const result = calculateResult(input);
    const sprite = result.map((val, i) => {
        const pos = (i+1)%40;
        return pos >= val && pos < val+3  ? '#' : '.';
    });

    return lineBreaks.reduce((acc, index) => acc.slice(0,index) + '\n' + acc.slice(index), sprite.join(''));
});
