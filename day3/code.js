const toNumbers = letter => {
    const code = letter.charCodeAt(0);
    return code >= 97 ? code - 96 : code - 38;
}

const findSameLetters = ([str1, str2]) => {
    var regex = new RegExp(`[${str1}]`, 'g');
    return (str2.match(regex)).join('');
}

const spliceLine = line => {
    const size = line.length / 2;
    return [line.substring(0, size), line.substring(size)]
};

const groupBy3 = list => [...Array(Math.ceil(list.length / 3))]
    .map((el, i) => list.slice(i * 3, (i + 1) * 3));

export const part1 = (input => {
    const list = input.split('\n');
    return list
        .map(spliceLine)
        .map(findSameLetters)
        .map(toNumbers)
        .reduce((acc, elem) => acc + elem, 0);

});

export const part2 = (input => {
    const list = input.split('\n');
    return groupBy3(list)
        .map(parts => [findSameLetters(parts), parts.at(-1)])
        .map(findSameLetters)
        .map(toNumbers)
        .reduce((acc, elem) => acc + elem, 0);
});