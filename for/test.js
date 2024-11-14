// for (let i = 1; i <= 10; i++) {

//     for(let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
//     console.log(i);
    
// }

// braeak and Continue

for (let index = 0; index <= 10; index++) {
    const element = index;
    if(index === 5)
    {
        console.log(`one mistrack is allow`);
        continue;
    }
    else if(index == 7)
    {
        console.log(`sencond mistrack is not allow`);
        break;
    }
    console.log(index);
}
