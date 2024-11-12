function one(){
    //Parent function
    const name ="Kishan Patel";

    function two(){
        //child function
        const age = 29;
        console.log(name);
    }
    // console.log(age)

    two()
}

// one();


// defined or print above function
console.log(addone(5));
function addone(num){
    return num +1;
}

//not defined or print above function
const addtwo = function(num1) {
    return num1+ 1;
}

console.log(addtwo(4))
