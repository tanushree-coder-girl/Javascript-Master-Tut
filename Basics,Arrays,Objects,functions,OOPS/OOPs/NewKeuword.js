// New keyword in js 

//New keyword in JavaScript is used to create an instance of an object that has a constructor function. On calling the constructor function with 'new' operator, the following actions are taken: A new empty object is and return this object and set prototype in __proto__ 

function CreateUser (firstname, age){
    this.firstname = firstname;
    this.age = age
}

CreateUser.prototype.greet = function(){
    console.log('hello world')
}

const user1 = new CreateUser('mohin', 21)
console.log(user1)
user1.greet()

// What's new keyword do for us 

// 1. create empty object {}
// 2. return this 
// 3. addding prototype in proto


// this type of concept is call constructor function..
// Naming convention for constructor function is PascalCase for example: 
// CreateUser  - not createUser 