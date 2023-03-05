//  class are introduced in js in => 2015/ ES6
// class keyword
// class are fake 
// JavaScript didn't originally have classes. Classes were added with the introduction of ECMASCRIPT 6 (es6), a new and improved version of JavaScript (ECMASCRIPT 5 being the older version). A typical JavaScript class is an object with a default constructor method

class CreateUser {
    constructor(fname, lname, age, email){
        this.firstname = fname;
        this.lastname = lname;
        this.age = age;
        this.email = email;
    }

    about(){
        return `${this.firstname} ${this.lastname} ${this.age} ${this.email}`
    }
    isAdult(){
        return this.age >= 18
    }
    singASong(){
        return "lalalalala...."
    }
}
let user1 = new CreateUser('Ravi', 'Goyal', 21, 'ravi@mail.com');
let user2 = new CreateUser('shanu', 'Goyal', 34, 'shanu@mail.com');
console.log(user2.about())
console.log(user1.about())
console.log(Object.getPrototypeOf(user1))