function sum(num1, num2) {

    // console.log(num1+num2);
    const sum2 = num1 + num2;
    return sum2;
}

 const value = sum(9, 9);

// console.log(value);

function userdetail(username) {

    if(!username)
    {
        return `Please enter valid name`;
    }
    else
    {
    return `${username} just logged`;
    }
}

// console.log(userdetail());

function userdetail(username = "KP") {

    // if(!username)
    // {
    //     return `Please enter valid name`;
    // }
    // else
    // {
    return `${username} just logged`;
    // }
}

console.log(userdetail());