// Function in js 

// What is function and why it is used!! 

//A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output

// Type of function in js 
//There are 3 ways of writing a function in JavaScript:
// Function Declaration.
// Function Expression or Anonymous function 
// Arrow Function.


// simple defination on function
//A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).

//it performs a specific task for us when we call it... 
// we can call a function multiple time but decalre only once...

//use camelCase convetion for functions..

// Function declaration 

function singASong() {
    console.log('la la lal alllla....')     // print on console 
}
singASong();

//function returning value
function twoPlusTwo () {
    return 2+2;
}
let returnedVal = twoPlusTwo();
console.log(`The sum of 2 and 2 is ${returnedVal}`);

// ========================================================
//Function parameters are the names listed in the function definition. Function arguments are the real values passed to (and received by) the function.
function addDigits (val1, val2, val3) {               // val1 and val2, val3 is function parameters 
    return val1 + val2 + val3;
}
let ans = addDigits(10, 5, 3);                     // 10 , 5, 3 is function arguments 
console.log(ans);

// function for chek num is even or odd 
// function isEven(numbers) {
//     if(numbers % 2 === 0){
//          return true
//     }else{
//         return false
//     }
// }
// console.log(isEven(7))

// Short way
function isEven (value){
    return value % 2 === 0
}
if(isEven(13))console.log('number is even')
else console.log('number is odd')

//find string 1 letter 
function findFirstLetter (string){
    console.log(string[0]);
}
findFirstLetter('ankita')

//find array index 
function findTarget (array, target) {
    for (let index = 0; index < array.length; index++) {
        if(array[index] === target){
            return index
        }   
    }
    return -1
}

let reply = findTarget([1,2,3,4,5], 56)
console.log(reply);



// Function Expression 
// A function expression is an expression which defines a function. Function expressions can be used to define a named or unnamed (anonymous) function. If you define a named function in an expression the name will only be local to the function itself


// function(){}         //annonyms function

let unNamedFun = function(msg){
    return msg
}
console.log(unNamedFun("hello all from function expression"));

let singBirthdaySong = function(){
    console.log('happy birthday to u')
}
singBirthdaySong();
//The way of writing is different rest all are same like : calling , paramenter , arguement, returnig value etc... 

// Arrow Functions 
// Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions. For example, This function // function expression let x = function(x, y) { return x * y; } can be written as // using arrow functions let x = (x, y) => x * y;

//syntax.
// let arrowFun = () => {  }

let randowColor = (r,g,b) => {
    let color =  (`${r},${g},${b}`)
    return color
}
let red = (Math.random() * 255).toFixed();
let green = (Math.random() * 255).toFixed();
let blue = (Math.random() * 255).toFixed();

console.log(randowColor(red,green,blue));

const greetAll = () => {
    return "hello everybody"
}
console.log(greetAll());

// if we only return one value then no need to use return keywordor curly brace in arrow function like 
const greetings = () => "hello world";
console.log(greetings())

const todayTemp = (temp) => {
    return temp
}
console.log(todayTemp(40))

// if we have only 1 parameter then also we can remove () paranthesis like this
const temp = temp => `today temp is ${temp} celcius`;
console.log(temp(24))


// Function default parameters 

// function addition (a , b){
//     console.log(typeof b)       // before es6 this is how we handle this 
//     if(b === undefined){
//         b = 0;
//     }
//     return a + b
// }

// console.log(addition (2));

function addition (a , b = 0){   // default parameter 
    return a + b
}

console.log(addition (2));


// Rest parameters 

//The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript

const addAll = (...rest) => {
    console.log(rest)
    let total = 0;
    for (let index = 0; index < rest.length; index++) {
        const element = rest[index];
        console.log(element)
        total += element
    }
    return total;
}

console.log(addAll(2,3,4,5,7,8,9))