// Hoisting 

// Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration. For example, // using test before declaring console.log(test); // undefined var test; Run Code. The above program works and the output will be undefined .

//JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code. Hoisting is not a term normatively defined in the ECMAScript specification.


//  Hoisting is JS's default behavior of defining all the declarations at the top of the scope before code execution. One of the benefits of hoisting is that it enables us to call functions before they appear in the code. JavaScript only hoists declarations, not initializations.

// if we use variables before initialization behaviour:

//using var
console.log(my_var)     //return undefined
var my_var = 5;


//using let and const
// console.log(my_let_var) //Throw error => Cannot access 'my_let_var' before initialization
// let my_let_var = 5;

// console.log(my_const_var) //Throw error => Cannot access 'my_let_var' before initialization
// let my_const_var = 5;

// function declaration calling before initialization 
greet();        // hello
function greet () {
    console.log('hello')
}

// function expression calling before initialization 
// greet2();        // Cannot access 'greet2' before initialization
let greet2 = function () {
    console.log('hello')
}

// arrow function calling before initialization 
// greet3();        // Cannot access 'greet3' before initialization
const greet3 = () => {
    console.log('hello')
}

// arrow function calling before initialization using var
greet4();        // greet4 is not a function
var greet4 = () => {
    console.log('hello')
}
