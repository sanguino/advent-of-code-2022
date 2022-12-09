const rotateMatrix = matrix => matrix[0].map((val, index) => matrix.map(row => row[index]).reverse().filter(elem => elem != ' '))

const checkVisibles = (list, found) => {
    let shortest = -1;
    list.forEach(tree => {
        if (tree.height > shortest) {
            found.add(tree);
            shortest = tree.height;
        }
    });
};

const checkVisibility = (list, found) => {
    let shortest = -1;
    let counter = 0;
    list.forEach(tree => {
        if (tree.height > shortest) {
            higest = tree.height;
            tree.counterL = 0;
        }
        counter++;
    });
};

export const part1 = (input => {
    const found = new Set();
    const matrix = input.split('\n').map((line, y) => line.split('').map((height, x) => ({x,y,height})));
    matrix.forEach(line => {
        checkVisibles(line, found);
        checkVisibles(line.reverse(), found);
    });

    rotateMatrix(matrix).forEach(line => {
        checkVisibles(line, found);
        checkVisibles(line.reverse(), found);
    });
    return found.size;
});

export const part2b = (input => {
    const found = new Set();
    const matrix = input.split('\n').map((line, y) => line.split('').map((height, x) => ({x,y,height})));
    matrix.forEach(line => {
        checkVisibility(line, found);
        checkVisibility(line.reverse(), found);
    });

    rotateMatrix(matrix).forEach(line => {
        checkVisibility(line, found);
        checkVisibility(line.reverse(), found);
    });
    return found.size;
});

export const part2 = (input => {
    const matrix = input.split('\n').map((line, y) => line.split(''));

    let treeHouse = 0;
    matrix.forEach((line, y) => {
        line.forEach((tree, x) => {
            let right = 0;
            for (let i = x+1; i < line.length; i++) {
                right ++;
                if (line[i] >= tree) {
                    break;
                }
            }

            let left = 0;
            for (let i = x-1; i >= 0; i--) {
                left ++;
                if (line[i] >= tree) {
                    break;
                }
            }
            let down = 0;
            for (let i = y+1; i < matrix.length; i++) {
                down ++;
                if (matrix[i][x] >= tree) {
                    break;
                }
            }

            let up = 0;
            for (let i = y-1; i >= 0; i--) {
                up ++;
                if (matrix[i][x] >= tree) {
                    break;
                }
            }
            treeHouse = Math.max(treeHouse, left * right * down * up)
        });
    });
    return treeHouse;
});


