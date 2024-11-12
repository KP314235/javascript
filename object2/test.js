 const object1 = new Object();

 object1.id = 1;
 object1.name = "Kishan Patel";
 object1.emailId = "pkishan065@gmail.com";
 object1.isLogged = false;

 console.log(object1);


 const obj1 = {
    name: "KP",
    age: 29,
    emailId: "pkishan065@gmail.com",
    contact: 9909231425
 }

 const obj2 = {
    name1: "HP",
    age1: 35,
    emailId1: "hp31425@gmail.com",
    contact1: 9876543210
 }

 const {emailId1: kp} = obj2;

 console.log(kp);