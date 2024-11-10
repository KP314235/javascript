const name =["KP", "HP", "PP", "SP", "TP"];
const name2 = ["abc" ,"pqr" , "xyz"];

// name.push(name2);

// console.log(name);

const newName = name.concat(name2);

// console.log(newName);

const moreName = [...name, ...name2];

// console.log(moreName);

const newArray = [0, 1, 2, 3, 4, [4, 5, 6], 7 ,[7 , [8, 10]]];

const fArray = newArray.flat(2);

// console.log(fArray);

console.log(Array.isArray("Kishan"));
console.log(Array.isArray(newArray));

console.log(Array.from("Kishan"));
console.log(Array.from("987656789"));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));