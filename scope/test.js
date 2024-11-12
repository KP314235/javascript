//global Scope
let a =100
if(true)
{
    //block scope
    let a = 10
    const b = 20
    var c = 30
    console.log(a) // print value for block scope
}

//console.log(a)  // output is not show beacuase defind value in block scope
//console.log(b)  // output is not show beacuase defind value in block scope
console.log(c)  // output is print beacuase var accessable for block scope

console.log(a) //print value for global scope
