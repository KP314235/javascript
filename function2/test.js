//function with object

const obj1 ={
    name: "Kishan patel",
    age : 29
}

function myFunction(anyobject) {

    return `My name is ${anyobject.name} and my age is ${anyobject.age}`;
}

console.log(myFunction(obj1));

console.log(myFunction({
    name : "Hardik Patel",
    age: 35
}))

//Function with array

const result = [200, 300, 500 ,140]

function totalvalue(anyarray){
    return `my result is ${anyarray[2]}`;
}

console.log(totalvalue(result));

console.log(totalvalue([200, 240, 230, 764]))