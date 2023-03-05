// Methods 

// Functions inside objects 
const person = {
    firstName: 'John', // property : value
    about: function(){ // method 
        return `User firstname is ${this.firstName}`
    }
}

console.log(person.about());

// what is this 
// this is object : jo object method ko call kar rha hai wo this usi object k lia use hua h...... 
// person.about()  so in this case this refer to person object

// let's define function outside 
function personInfo (){
    console.log(this.fname) // this refer to personObj as personObj call aboutUser method inside obj as aboutUser value is personInfo function
}

const personObj = {
    fname: 'ravi',
    age: 21,
    aboutUser: personInfo
}

personObj.aboutUser();