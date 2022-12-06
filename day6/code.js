export const part1 = (input => {
    return 4 + input.split('')
        .findIndex((char, index) => new Set(input.slice(index, index+4)).size === 4);
    
});

export const part2 = (input => {
    return 14 + input.split('')
        .findIndex((char, index) => new Set(input.slice(index, index+14)).size === 14);
});


