// arrow functions behaviour is different from normal function as it takes this as window object

const user1 = {
    name : 'joe',
    details: ()=>{
        // arrow function ka khud k this nhi hota it take this from its s
        // iska this ek level up hoga as window object 
        console.log(this) // window obj
    }
}
user1.details(); 

// arrow function k this change nhi kar skte for example
// call apply and bind method didn't affect arrow function 
user1.details.call(user1);  // window object
user1.details.apply(user1);  // window object
const u = user1.details.bind(user1); // window object
u();


// arrow function always take window object

// Short Syntax of methods  in object
// we don't have to write methods in key : value pair we can use this short syntax like methodName(){} 

const newObj = {
    userId: 1, 
    about(){                            // method
        console.log('about', this.userId)
    }
}
newObj.about();