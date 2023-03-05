// Let's refactor code from file one.js
// there is so many drwabacks lets fix this 

// Storing  methods in different objects 

// bcoz when we call function then it will create functions again and again 

const objMethods = {
    about(){
        return `${this.firstname} ${this.lastname} ${this.age} ${this.email}`
    },
    isAdult(){
        return this.age >= 18
    }
}

function createUser(fname, lname, age, email){
    const user = {}
    user.firstname = fname;
    user.lastname = lname;
    user.age = age;
    user.email = email;
    user.about = objMethods.about;
    user.isAdult = objMethods.isAdult; // now we only use reference so it will only point this address but now again and again creating this methods
   
    return user
}

let user1 = createUser('Ravi', 'Goyal', 21, 'ravi@mail.com');
let user2 = createUser('silvi', 'Goyal', 12, 'silvi@mail.com');
console.log(user1.about());
console.log(user2.isAdult());
