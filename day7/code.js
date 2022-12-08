class Dir {
    #name;
    #parent;
    #size = 0;

    constructor(name, parent) {
        this.#name = name;
        this.#parent = parent;
    }

    get size() {
        return this.#size;
    }

    addSize(amount) {
        this.#size += amount;
        this.#parent?.addSize(amount);
    }

    get name() {
        return this.#name;
    }

    get parent() {
        return this.#parent;
    }
}

const createDirectories = input => {
    const directories = new Set();
    let current;
    const commands = input.split('\n').filter(line => (!line.startsWith('$') && !line.startsWith('dir')) || line.startsWith('$ cd'))
    
    for (const command of commands) {
        if (command === '$ cd ..') {
            current = current.parent;
        } else if (command.startsWith('$ cd')) {
            current = new Dir(command.split(' ')[2], current);
            directories.add(current);
        } else {
            current.addSize(Number(command.split(' ')[0]));
        }
    }
    return directories;
}



export const part1 = (input => {
    const directories = createDirectories(input);
    return [...directories].map(dir => dir.size).filter(size => size <= 100000).reduce((acc, size) => acc + size, 0);
});

export const part2 = (input => {
    const directories = createDirectories(input);
    const min = [...directories].find(dir => dir.name === '/').size - 40000000;
    return [...directories].map(dir => dir.size).filter(size => size >= min).reduce((acc, size) => Math.min(acc, size), 70000000);
});


