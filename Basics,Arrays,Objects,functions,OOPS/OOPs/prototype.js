// What is prototype 

// In JavaScript, every function and object has a property named prototype by default. For example, function Person () { this.name = 'John', this. age = 23 } const person = new Person(); // checking the prototype value console.

// Prototype is a blank space it means it is a empty object. 

function hello (){
    console.log('hello world')
}


// Javascript function => Function + object 

hello();
console.log(hello.name); // Nane property tells function name

// we can add our own properties like
hello.myProperty = "this is my property"; // set
console.log(hello.myProperty) //get


// Function has its own prototype 
console.log(hello.prototype) //{} is a object which is already present with function 

// we can add our own properties in prototype 
hello.prototype.xyz = "xyz";
hello.prototype.singASong = function(){
    return 'lalalalla'
}
console.log(hello.prototype.singASong())

// Only funtions provide prototype property 

// let's proof it 
if(hello.prototype){
    console.log('prototype is present')
}else{
    console.log('prototype is not present')
}
let obj = {}
console.log(obj.prototype) // undefined


///__proto__ is the actual object that is used in the lookup chain to resolve methods, etc. The prototype property is only present for functions and is a property that's set only if you're using the 'new' keyword when creating objects with this (constructor) function.

// __proto__ and prototype is totally different proto is a chaining of another object data while prototype is a object which is present with functions or constructors...



// more about prototype 
let numbers = [1,2,3,4,5,6];
console.log(Object.getPrototypeOf(numbers)); // for getting array prototype 
console.log(numbers)
console.log(Array.prototype)

// basically Array is also  used new keyword to be created in memory as 
// array is in memory is create using constructor that's y it also has prototype 
const num = new Array(1,2,3,4,5);
console.log(num)

// as we discussed previously prototype is a object but in case of array it is array why 
// because we can change prototype object to array as :

function myFunction(){
    return 'helloooo...........'
}
console.log(myFunction.prototype)
myFunction.prototype = [];
console.log(myFunction.prototype)
myFunction.prototype.push('hello');
console.log(myFunction.prototype)



