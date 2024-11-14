const user = {
  username: "Kishan Patel",
  price: 999,
  welcomeMessage : function(){
    console.log(`${this.username} welcome to our login page`);
    console.log(this);
  }
}

// user.welcomeMessage();
// user.username="Hardik Patel";
// console.log(this);
// user.welcomeMessage();

// const value = function(){
//   let Username = "Kishan patel";
//   let emailId= "pkishan065@gmail.com";
//   console.log(this);
// }

// value();

// const value1 = () =>{
//   let Username = "Kishan patel";
//   let emailId= "pkishan065@gmail.com";
//   console.log(this);
// }

// value1();

// const value = (num1, num2) =>  ({username: "Kishan patel"})

// console.log(value(3,4));

// function hosting(){
//   console.log(`Kishan Patel`);
// }
// hosting();

( () => {
  cosole.log("Kishan patel");
})();