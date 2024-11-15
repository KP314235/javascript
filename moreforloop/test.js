
//forof loop with array

const myArray = [1, 2, 3, 4, 5, 6, 7, 8]
for (const num1 of myArray) {
    
    // console.log(num1);
}

//forof loop with Map
const map = new Map()
map.set('IN', "India")
map.set('AH', "Ahmedabad")
map.set('PA', "Patan")

// console.log(map);

for (const [key, value] of map) {
    // console.log(`${key} :- ${value}`);
}


//forIn loop with Object
const myobject ={
    name: "Kishan Patel",
    age : 29,
    loggedIn: false,
}

for (const key in myobject) {
    // console.log(key);
    // console.log(myobject[key]);
}

//foreach loop with array

const newarray = ["KP", "HP", "SP", "DP"];

// newarray.forEach(function (item) {
//     console.log(item);
// })

// newarray.forEach((item) => {
//     console.log(item);
// })

function printvalue(item) {
    console.log(item);
}

// newarray.forEach(printvalue);

const objectInarray = [
    {
        name: "Kishan patel",
        age: 29
    },
    {
        name: "Hardik patel",
        age: 35
    },
    {
        name: "Shantaben patel",
        age: 58
    }
]

objectInarray.forEach((item, index, arr) =>{
    console.log(item.name, index, arr);
})
