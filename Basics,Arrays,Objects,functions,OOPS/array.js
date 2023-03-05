// Intro to array 

//what is array 
// Array is a ordered collection of items. 

// Array is Reference type variable. 
// Array is mutable

// how to create array
let fruits = ['mango', 'orange', 'apple'];
let marks = [20, 33, 58, 34];
let mixedArray = ['apple', 'boy', null, undefined, 22 ,true];
console.log(fruits);
console.log(marks);
console.log(mixedArray);

// Array indexing start from zero like 0 , 1 , 2, 3
// first value of array
console.log(fruits[0]);

// Last value of array
console.log(fruits[fruits.length - 1]);

let newArray = [1,2,10,4];
console.log(newArray);
newArray[2] = 3;        //change value 2nd index
console.log(newArray);

console.log(typeof newArray); // typeof object all reference data type is object in array. 

let obj = {}        //we have a object literal in js it a obj we will it also typeof obj 
console.log(typeof obj) 

//so now how can we differ that is it a array or object so for this we can use Array.isArray method like
console.log(typeof newArray)
console.log(typeof obj) 

console.log(Array.isArray(newArray));       //returns true
console.log(Array.isArray(obj));            //return false

//Some useful Array MEthods 
//push
//pop
//ushift
//shift

let data = ['doraemon','shinchan', 'chotabheem'];
console.log(data)
data.push('pokemon');       //it will add items in last
console.log(data)
const deletedItem = data.pop();             //it will remove last item
console.log(data)
console.log(deletedItem);       // pop returns deleted item so e can check

data.unshift('noddy');      //unshift add items in 0 index 
console.log(data)
const removed = data.shift();         //shift remove 0 index from array
console.log(data);
console.log(removed)