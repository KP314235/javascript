 const object1 = new Object();

 object1.id = 1;
 object1.name = "Kishan Patel";
 object1.emailId = "pkishan065@gmail.com";
 object1.isLogged = false;

 console.log(object1);


 const obj1 = {
    name: "KP",
    age: 29,
    emialId: "pkishan065@gmail.com",
    contact: 9909231425
 }

 const obj2 = {
    name: "HP",
    age: 35,
    emailId: "hp31425@gmail.com",
    contact: 9876543210
 }

 const obj3 = [...obj1, ...obj2];

 console.log(obj3);