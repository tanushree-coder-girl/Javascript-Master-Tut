// Object.create();
// what is Object.create 
// Object.create() The Object.create() static method creates a new object, using an existing object as the __proto__ [[Prototype]] of the newly created object.

obj1 = {
    key1 : 'value1',
    key2 : 'value2',
}
// obj2 = {
//     key3: 'value3'
// }

// create obj2 using Object.create and pass obj1
const obj2 = Object.create(obj1);
console.log(obj2.key2)

// as it seen it create an empty object and pas obj1 keys and value in __proto__ so if we use any key and if it is not present in obj2 then it will check in __proto__ if avaialable then print it...
console.log(obj2)
console.log(obj2.__proto__) 

// __proto__, [[prototype]] // Both Same 

// let's modify code 
// usig Object.create()

// There is still drawbacks 
// suppose if we have a number of methods inside this objmethods then we have to add reference inside create user 

const objMethods = {
    about(){
        return `${this.firstname} ${this.lastname} ${this.age} ${this.email}`
    },
    isAdult(){
        return this.age >= 18
    },
    singASong(){
        return "lalalalala...."
    }
    // suppose if we create new method then we have to add this methods reference in create user user object also  and if we forget to add then it will create problem for us so the solution is Object.Create() 
}


// For this drawback we have a solution 
// Object.create(refObj)
function createUser(fname, lname, age, email){
    // const user = {}
    // solution
    // Object.create
    const user = Object.create(objMethods)
    user.firstname = fname;
    user.lastname = lname;
    user.age = age;
    user.email = email;
    // user.about = objMethods.about;
    // user.isAdult = objMethods.isAdult;
    // user.singASong = objMethods.singASong;
    // problematic to reference for every methods  
   
    return user
}

let user1 = createUser('Ravi', 'Goyal', 21, 'ravi@mail.com');
let user2 = createUser('silvi', 'Goyal', 12, 'silvi@mail.com');
console.log(user1.about());
console.log(user2.isAdult());
console.log(user2.singASong());