/**********String***************/

const name = "Kishan";
const result = 90;

console.log("The Name is "+ name +" and result is " + result );

console.log(`The name is ${name} and result is ${result}`);

const firstName = new String("Kishan Patel")

console.log(firstName);

console.log(firstName.length);
console.log(firstName.toUpperCase());
console.log(firstName.charAt(5));
console.log(firstName.indexOf('t'));

const latestName = firstName.substring(0, 12);

console.log(latestName);

const lastName = firstName.slice(3, 7);

console.log(lastName);

/***********space remove********************/
const spaceName = "     Kishan     ";
console.log(spaceName);
console.log(spaceName.trim())

/*****************replace *******************/

const fullName = "Patel Kishanbhai Prahladbhai";

let newName = fullName.replace("Kishanbhai", "Hardikbhai");

console.log(newName);



