//singleton (Construction)
//object.createuser ="Kishan";

//object literal

const Sym = Symbol("Key1")

const userDetail ={
    name: "Kishan Patel",
    age: 29,
    emailId: "pkishan065@gmail.com",
    [Sym]: "myKey1"
}

// console.log(userDetail.age);
// console.log(userDetail.name);


userDetail.name ="Hardik Patel";
// Object.freeze(userDetail);

userDetail.name = "HP";

// console.log(userDetail);

userDetail.newValue = function(){
    console.log(`Hello mr. ${this.name}`);
}
userDetail.newValue2 = function(){
    console.log(`you age is ${this.age}`);
}

console.log(userDetail.newValue());
console.log(userDetail.newValue2());



