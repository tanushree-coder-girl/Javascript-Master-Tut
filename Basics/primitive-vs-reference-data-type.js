//Primitive vs reference data type 

// primitive types
let num1 = 6;
let num2 = num1; 
console.log(num1);       // 6
console.log(num2);       //6
num1++
console.log('after increament num1')
console.log(num1);      //7
console.log(num2);      //6

//reference type
let array1 = [1,2,3];
let array2 = array1;
console.log(array1)     // [1,2,3]
console.log(array2)     // [1,2,3]
array1.push(4)
console.log('after push item in array1')
console.log(array1);     // [1,2,3,4]
console.log(array2);     // [1,2,3,4]


// Why this happening when we push item in array1 why it will automaticaly shown in array2 also? 

//let's understand the scenario : 

// it will happened due to reference data type 
// for this we have to understand that how reference and primitives data types are stored in the memory 

// first : we will talk about primitive data types 
// so primitive data types are stored in stack . 
// When you declare a primitive data type in JavaScript, it is stored on a stack. A stack is a simple data structure that the computer uses to store and retrieve data quickly. A primitive data type on the stack is identified by the variable name you used for declaration in your program. 

// now : we will talk about reference data type :
// Reference values are objects that are stored in the heap.
// When you declare a reference data type in javascript, it is stored in heap. and a pointer (Address for heap for eq:0x11) is kept in stack .
// then when we print any pointer then stack uses the address it will print what is inside the heap on that address.