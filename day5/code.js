const parseInput = input => {
    const matrix = input.replaceAll(/^   /g, '[ ]').replaceAll(/    /g, ' [ ]')
        .split('\n')
        .filter(line => line.startsWith('['))
        .map(line => line.replaceAll('] [', '')
            .replaceAll('[', '')
            .replaceAll(']', '')
            .split(''))
    //.map(char => char.replace(' ', '')))

    return matrix[0].map((val, index) => matrix.map(row => row[index]).reverse().filter(elem => elem != ' '))


}

const parseMovementsInput = input => {
    return input.split('\n')
        .filter(line => line.startsWith('move'))
        .map(line => line.replaceAll('move ', '')
            .replaceAll('from ', '')
            .replaceAll('to ', '')
            .split(' ')
            .map(char => Number(char))
            .map((val, index) => index > 0 ? val - 1 : val))

}


export const part1 = (input => {
    const state = parseInput(input);
    const movements = parseMovementsInput(input);
    return movements.reduce((state, [num, from, to]) => {
        const toMove = state[from].splice(-num).reverse();
        state[to] = state[to].concat(toMove)
        return state;
    }, state).
        map(column => column.at(-1))
        .join('');
});

export const part2 = (input => {
    const state = parseInput(input);
    const movements = parseMovementsInput(input);
    return movements.reduce((state, [num, from, to]) => {
        const toMove = state[from].splice(-num);
        state[to] = state[to].concat(toMove)
        return state;
    }, state).
        map(column => column.at(-1))
        .join('');
});


