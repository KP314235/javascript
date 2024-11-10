const result = [230, 243, 178, 134, 199]

console.log(result[1]);

result.push(200)

console.log(result)

result.pop();
console.log(result);

// slice splice

console.log("A", result);

const myn1 = result.slice(1, 4);

console.log(myn1);

console.log("B", result);

const myn2 = result.splice(1,3)
console.log("c", result)
console.log(myn2);