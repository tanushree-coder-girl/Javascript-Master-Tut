/// Compilation 
//compiling means converting source code into executable code.

// code execution
// Execution phase: In this phase, the JavaScript engine executes the code in the execution context. It processes any statements or expressions in the script and evaluates any function calls.22-Dec-2022

// why compilation 
//Compiling means that after we finished writing our code, a compiler (a program) takes our code and looks at it, making sure it has been written acording the rules of the programming language we used (it checks for syntax errors).14-Apr-2022


// how javascript code executes 
//the JavaScript engine executes the entire source code, creates a global execution context, and then does the following things: Creates a global object that is window in the browser and global in NodeJs. Sets up a memory for storing variables and functions

// what is global exectution context? 
//The global execution context is created when a JavaScript script first starts to run, and it represents the global scope in JavaScript. A function execution context is created whenever a function is called, representing the function's local scope.
// Execution context (EC) is defined as the environment in which the JavaScript code is executed. By environment, I mean the value of this , variables, objects, and functions JavaScript code has access to at a particular time.

// what is local execution context ? 
//Local Execution Context is created when you call a function (not defining a function). Because it is an abstract concept, I am going to support it with an image. Let's walk through the image. When the JS engine starts reading your code, it creates the global execution context.


//closures
//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.

// Call Stack 
// A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.21-Feb-2023

console.log(this)   /// line -1 
console.log(window)   // line -2 
console.log(firstName) // undefined // line -3 
var firstName = "Tanu";    // line -4 
console.log(firstName) // tanu   // line -5


// The output of this code is 
// window obj 
// window obj 
// undefined 
//tanu

// bcoz in js in step 1 
// code compilation 
// during compilation phase : 
// it will check early error checking 
// and determine the scope of variables 
// so in this code 
//  we have a variable named firstname so the scope of this variable is global scope 
// Global scope  = firstname 

// later in code execution phase 
// step -1 creation phase so in creation phase 
// all global scope variables are hoisted 
// so now the value of firstname is undefined 


// step - 2 code execution 
// in this step js read and runs all the code line by line
// so in firstline it print window obj 
// 2. windowobj 
// 3.. undefined 
// 4. line it will set firstname value to tanu 
// 5. print tanu 


// https://www.freecodecamp.org/news/how-javascript-works-behind-the-scene-javascript-execution-context/#:~:text=Execution%20phase%3A%20In%20this%20phase,and%20evaluates%20any%20function%20calls.
