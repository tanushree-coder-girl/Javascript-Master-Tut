// Use of new keyword :

// new keyword

// 1. this = {}
//2.  return this 

// constructor function 
// constructor function naming convention is PascalCase
function CreateUser(fname, lname, age, email){
    this.firstname = fname;
    this.lastname = lname;
    this.age = age;
    this.email = email;
}
CreateUser.prototype.about = function(){ 
    return `${this.firstname} ${this.lastname} ${this.age} ${this.email}`
}
CreateUser.prototype.isAdult = function(){
    return this.age >= 18
}
CreateUser.prototype.singASong = function(){
    return "lalalalala...."
}

let user1 = new CreateUser('Ravi', 'Goyal', 21, 'ravi@mail.com');
let user2 = new CreateUser('shanu', 'Goyal', 34, 'shanu@mail.com');
console.log(user2.about())
console.log(user1)

// it auto sets func prototype to  __proto__ or [[Prototype]] as
// __proto__ or 
// official ecmascript documentation same __proto or [[Prototype]]
// [[Prototype]] 

//  hasOwnProperty() 
for(let key in user1){
   // console.log(key) // it returns all key including __proto__ key

    // for getting only main obj key use hasOwnProperty method 
    if(user1.hasOwnProperty(key)){ // for check its own proprty
        console.log(key)
    }
}

console.log(user1.hasOwnProperty('firstname')) //it returns true or false