//"use strict";

// Console.log can print on console
console.log('hello world');
console.log("hello world");
console.log(`hello world`);

// Comments 
/* Multi line
comment */

// Intro to Variables
// 1. Variables can store some information. 
//2, We can use that information later.
//3, we can changes that information later 
//4, variables is case sensitive

//declare a variable  using var
fname = "rahul";

//use a variable 
console.log(fname)

//change value
fname = "rahul singh";
console.log(fname) 


//Rules for naming Variables 

//you cannot start variable name with a number
// example : 1var = "one"; /gives error
//you can use only underscore or dollar symbol 
//eg: $fname = ""; or _fname = "";
//you cannot use spaces between two words like 
//eq: first name = "" // Invalid way 
//Conventions : start with small letter and use camelCame syntax 


//some conventions

//Snake case : first_name 
//Camel Case : firstName 
//Pascal case : FirstName 
//kebab case : _firstname

//declare a variable using let 
let fullName = "rohit sharma";
console.log(fullName)

//difference between let and var 
//let is block scope and var is function scope 
//we cannot redeclared let but we can redeclare var variable
//let fullName = "rohit "  => it gives error
var a = 5;
var a = 10; // its doen't give error

//declare constant 
//we cannot change the value of const 
const pi = 3.14; 
