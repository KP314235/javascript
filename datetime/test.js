let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

let createDate = new Date(2023, 23, 12, 13, 30);
console.log(createDate.toDateString());
console.log(createDate.toLocaleString());

let currentDate = Date.now();

console.log(currentDate);