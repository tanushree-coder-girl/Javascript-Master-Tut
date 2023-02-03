// Use of prototype : 
function createUser(fname, lname, age, email){
    const user = Object.create(createUser.prototype) // create a emty object nd set function prototype as __proto__
    user.firstname = fname;
    user.lastname = lname;
    user.age = age;
    user.email = email;
    return user
}
createUser.prototype.about = function(){ 
    return `${this.firstname} ${this.lastname} ${this.age} ${this.email}`
}
createUser.prototype.isAdult = function(){
    return this.age >= 18
}
createUser.prototype.singASong = function(){
    return "lalalalala...."
}
console.log(createUser.prototype)
let user1 = createUser('Ravi', 'Goyal', 21, 'ravi@mail.com');
console.log(user1.about())
console.log(user1.isAdult())

let user2 = createUser('shanu', 'Goyal', 34, 'shanu@mail.com');
console.log(user2.about())