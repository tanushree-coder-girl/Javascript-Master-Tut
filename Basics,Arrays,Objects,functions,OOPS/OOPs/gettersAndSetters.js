class Information {
    constructor (fname, lname, age){
        this.fname = fname;
        this.lname = lname;
        this.age = age
    }

    // fullname(){
    //     return `${this.fname} ${this.lname}`
    // }

    // Getter method
    get fullname(){
        return `${this.fname} ${this.lname}`
    }

    // setFullName(firstname, lastname){
    //     this.fname = firstname;
    //     this.lname = lastname;
    // }


    // Setter method example => 1
    set setAge(age){
        this.age = age
    }

    // Setter method example => 2
    set SetFullName(name){
        const fullNameArray = name.split(" ");
        const [fname, lname] = fullNameArray
        this.fname = fname;
        this.lname = lname;
    }

}

const obj = new Information('ravi','sharma', '14 years old');
// console.log(obj.fullname()); // but i need to access this fullname methd as property like obj.fullname so for this we need a setter method 

// Getter method use
console.log(obj.fullname) // so we can access this like property 

// set property using normal method 
// obj.setFullName('amit','shaikh')
// console.log(obj.fname, obj.lname)

// Set property using Setter Method use
console.log(obj.age)
obj.setAge = '24 years old'
console.log(obj.age)

// Setter method set full name 
console.log(obj.fname, obj.lname)
obj.SetFullName = 'Sourabh updhaya';
console.log(obj.fname, obj.lname)

