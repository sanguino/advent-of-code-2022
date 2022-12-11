class Monkey {
    name;
    items;
    operation;
    operationParam;
    test;
    sendOK;
    sendKO;
    inspectedItems = 0;

    processAllItems () {
        this.items = this.items.map(item => {
            const param = this.operationParam == 'old' ? item : this.operationParam;
            const inspected = this.operation == '+' ? item + param : item * param;
            return Math.floor(inspected/3);
        });
    }

    getNextMonkeys () {
        return this.items.map(item => {
            return item%this.test == 0 ? this.sendOK : this.sendKO;
        });
    }
}

const monkeyRegex = new RegExp(/^Monkey (\d*)/);
const itemsRegex = new RegExp(/^Starting items: (.*)/);
const operationRegex = new RegExp(/^Operation: new = (.*)\s(.)\s(.*)/);
const testRegex = new RegExp(/^Test: divisible by (\d*)/);
const sendOKRegex = new RegExp(/^  If true: throw to monkey (\d*)/);
const sendKORegex = new RegExp(/^  If false: throw to monkey (\d*)/);


const parseData = input => {
    return input.split('\n').reduce((acc, line) => {
        if (line === '') acc.push(new Monkey());
        const monkey = acc.at(-1);
        monkey.name ??= line.match(monkeyRegex)?.at(1);
        monkey.items ??= line.match(itemsRegex)?.at(1)?.split(',').map(item => Number(item));
        monkey.operation ??= line.match(operationRegex)?.at(2);
        monkey.operationParam ??= line.match(operationRegex)?.at(3) && (Number(line.match(operationRegex)?.at(3)) || 'old');
        monkey.test ||= Number(line.match(testRegex)?.at(1));
        monkey.sendOK ||= line.match(sendOKRegex)?.at(1) && Number(line.match(sendOKRegex)?.at(1)) || 0;
        monkey.sendKO ||= line.match(sendKORegex)?.at(1) && Number(line.match(sendKORegex)?.at(1)) || 0;
        return acc;
    }, []);
}

const times = (n, f) => { while(n-- > 0) f(); }

export const part1 = (input => {
    const monkeys = parseData(input);
    times(20, () => {
        monkeys.forEach(monkey => {
            monkey.inspectedItems += monkey.items.length;
            monkey.processAllItems();
            monkey.getNextMonkeys().forEach(next => {
                monkeys[next].items.push(monkey.items.shift());
            })
        })
    });
    return monkeys.map(monkey => monkey.inspectedItems).sort((a,b) => b-a).slice(0,2).reduce((acc, num) => num * acc, 1)
});

export const part2 = (input => {
    const monkeys = parseData(input);
    times(10000, () => {
        monkeys.forEach(monkey => {
            monkey.inspectedItems += monkey.items.length;
            monkey.processAllItems();
            monkey.getNextMonkeys().forEach(next => {
                monkeys[next].items.push(monkey.items.shift());
            })
        })
    });
    return monkeys.map(monkey => monkey.inspectedItems).sort((a,b) => b-a).slice(0,2).reduce((acc, num) => num * acc, 1)
});
