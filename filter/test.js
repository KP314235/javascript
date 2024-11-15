const newArray = [1,2,3,4,5,6,7,8,9];

// const printarray = newArray.filter( (item) => item > 4 ) 

const printarray = newArray.filter( (item) => { return item > 4}) 


// console.log(printarray);

const narray = [];

newArray.forEach( (item) => {
    if(item < 4)
    {
        narray.push(item);
    }
})

console.log(narray);

