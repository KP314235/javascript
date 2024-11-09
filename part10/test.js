//stack(primitive datatype) and heap (non primitive datatype)

/***********Stack************/
let name = "Kishan Patel";

let firstname = name;

firstname = "manish patel";

console.log(name);
console.log(firstname);
/* Note :- Not change original value */

/************heap*****************/

let UserDetail1 = {
    emailId : "kishanpatel@gmail.com",
    username : "Kishan Patel",
    contactDetail : 9909231425
}

let UserDetail2 = UserDetail1;

UserDetail2.emailId = "manishapatel@gmail.com";

console.log(UserDetail1.emailId);
console.log(UserDetail2.emailId);

/*Note :- Change original value */


