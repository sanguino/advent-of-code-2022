export const part1 = ( input => {
    // A for Rock, B for Paper, and C for Scissors
    // X for Rock, Y for Paper, and Z for Scissors

    // 1 for Rock, 2 for Paper, and 3 for Scissors
    // 0 if you lost, 3 if the round was a draw, and 6 if you won
    const allResults = {
        'A X': 3 + 1,
        'A Y': 6 + 2,
        'A Z': 0 + 3,
        'B X': 0 + 1,
        'B Y': 3 + 2,
        'B Z': 6 + 3,
        'C X': 6 + 1,
        'C Y': 0 + 2,
        'C Z': 3 + 3,
    }
    const list = input.split('\n');
    return list.reduce((acc, elm) => acc + allResults[elm], 0);
});

export const part2 = ( input => {
    // A for Rock, B for Paper, and C for Scissors
    // X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win

    // 1 for Rock, 2 for Paper, and 3 for Scissors
    // 0 if you lost, 3 if the round was a draw, and 6 if you won
    const allResults = {
        'A X': 0 + 3,
        'A Y': 3 + 1,
        'A Z': 6 + 2,
        'B X': 0 + 1,
        'B Y': 3 + 2,
        'B Z': 6 + 3,
        'C X': 0 + 2,
        'C Y': 3 + 3,
        'C Z': 6 + 1,
    }
    const list = input.split('\n');
    return list.reduce((acc, elm) => acc + allResults[elm], 0);
});