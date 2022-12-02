function parseAndSort(input = data) {
    const list = input.split('\n');
    return list.reduce((res, elem) => {
        if (!elem) {
            res.push(0);
        }
        res[res.length - 1] += Number(elem);
        return res;
    }, [0])
        .sort((a, b) => b - a);
}


export const part1 = ((input) => {
    const [a] = parseAndSort(input);
    return a;
});

export const part2 = ((input) => {
    const [a, b, c] = parseAndSort(input);
    return a + b + c;
});
