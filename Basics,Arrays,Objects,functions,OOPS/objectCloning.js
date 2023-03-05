// clone an object 
// objects are stored in heap memory
let obj1 = {
    fname: 'xyz',
    age : '20',
} 

// one way is spread operator to clone an object 
let obj2 = {...obj1}
obj1.lname = 'ahd';
console.log(obj1, obj2)

// clone using Object.assign 
let obj3 = Object.assign({}, obj1);
console.log(obj3)


// lets talk about optional chaining 
// Optional Chaining 
// What is optional chaining
//Optional chaining is a process for querying and calling properties, methods, and subscripts on an optional that might currently be nil . If the optional contains a value, the property, method, or subscript call succeeds; if the optional is nil , the property, method, or subscript call returns nil .
let newObj = {
    fname: 'xyz',
    age : '20',
    address: {
        street: 'sjdjf kf',
        // moreInfo:{ 
        //    city:'indore', 
        //     state:'M.P'
        // }
    }
}
console.log(newObj.fname)
console.log(newObj.address.moreInfo?.city)