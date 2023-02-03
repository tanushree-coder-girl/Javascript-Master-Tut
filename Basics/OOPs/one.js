// proto , prototype , class 
// javascript developer should know all this 


// Let's start on advanced level...

// Create Functions to create multiple objects 

// firstly let's understand the problem then modify this object using function which create object 

// object user
const user = {
    firstname : 'rohan',
    lastname: 'sharma',
    email: 'xyz@mailinator.com',
    age: 19,
    about(){
        return `FirstName: ${this.firstname} , LastName: ${this.lastname}, Email: ${this.email}`
    },
    isAdult: function(){
        return this.age >= 18
    }
}
console.log(user.about());


// suppose if we have 1000 users so should we create this object everytime and change userinfotech.. no its bad way so for this we will create a function that takes user information as parameters and return a object ... 

// Solution
// 1. function (that create object)
// 2. add key value pair
// 3. return object 

function createUser(fname, lname, age, email){
    const user = {}
    user.firstname = fname;
    user.lastname = lname;
    user.age = age;
    user.email = email;
    user.about = function(){
        return this.firstname, this.lastname, this.age, this.email
    }
    user.isAdult = function(){
        return this.age >= 18
    }
    return user
}

let user1 = createUser('Ravi', 'Goyal', 21, 'ravi@mail.com');
console.log(user1.about());
console.log(user1.isAdult());