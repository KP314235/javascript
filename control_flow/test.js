const value = 1;

if(value === "1")
{
    console.log(`value is 1`);
}
else
{
    console.log(`value is not 0`)
}

// === /this condition is check with datatype
// == /this condition is not check datatype

const nowDay = 5;

switch(nowDay){
    case 1 : 
    console.log(`Today day is 1`);
    break;

    case 2 :
    console.log(`Today day is 2`);
    break;

    case 3 :
        console.log(`Today day is 3`);
        break;
    
    case 4:
        console.log('Today day is 4');
        break;

    default :
    console.log(`Today day is not defined`);
    break;

}

//Swith condition

//falsy value:- false, 0, -0, BigInt 0n, null, Undefined, "", NaN

//truthy Value :- "0", 'false', " ", []. {}, function(){},

//how to check empty array:-

const Array1 = [];

if(Array1.length === 0){
    console.log("Array is empty")
}

//how to check empty object:-

const empobject = {
    // name: "kishan patel",
    // age : 24,
    // village: "Mervada"
}

console.log(Object.keys(empobject));

const obj2 = Object.keys(empobject); 

if(Object.keys(empobject).length === 0)
{
    console.log(`Object is empty`)
}
else{
    console.log('object 1 is ', obj2[1])
}

//Nullish Coalescing operator (??) : null & undefind

let result1 = 5 ?? 10
result1 = null ?? 10
result1 = undefined ?? 20

console.log(result1);

//Terniary Operator

// Condition ? true : false

result1 == 19 ? console.log('value is equal to 20') : 
console.log('Value is not equal to 20')