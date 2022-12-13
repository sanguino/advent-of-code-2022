const compareValues = ([leftArray,rightArray]) => {
    const maxLength = Math.max(leftArray.length,rightArray.length);
    for (let i = 0; i < maxLength; i++) {
      const left = leftArray[i];
      const right = rightArray[i];
      if (left === undefined) return true
      if (right === undefined) return false
      if (Array.isArray(left) && Array.isArray(right)) {
        const result = compareValues([left, right]);
        if (result !== undefined) return result;
      } else if (!Array.isArray(left) && !Array.isArray(right)) {
        if (left !== right) return left < right;
      } else {
        const result =  compareValues([Array.isArray(left) ? left : [left], Array.isArray(right) ? right : [right]]);
        if (result !== undefined) return result;
      }
    }
  }
export const part1 = (input => {
  const parsed = input.split('\n')
    .filter(line => line !== '')
    .map(line => JSON.parse(line))
    .reduce((acc, line, i) => {
      i % 2 ? acc.at(-1).push(line) : acc.push([line])
      return acc;
    },[]);
  const result = parsed.map(compareValues);
  return result
    .map((val,index) => val ? index + 1 : -1)
    .filter(val => val > 0)
    .reduce((acc,val) => acc + val, 0);
});

export const part2 = (input => {
  const parsed = input.split('\n')
    .filter(line => line !== '')
    .map(line => JSON.parse(line))
  const sentinels1 = [[2]];
  const sentinels2 = [[6]];
  parsed.push(sentinels1)
  parsed.push(sentinels2)
  const result = parsed.sort((a,b) => compareValues([a,b]) ? -1 : 1);
  return (result.indexOf(sentinels1)+1) * (result.indexOf(sentinels2) + 1);
});
