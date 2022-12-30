//typeof operators 

// data type (primitive data types)
// string "tanu"
// number 2, 4, 6, 8
// booleans 
// undefined 
// null 
// BigInt 
// symbol

let age = 12; 
console.log(typeof age);        //number

let num2 = 2.2;
console.log(typeof(num2)); //also write like this

let str = "this is string";
console.log(typeof str);          //string

//boolean mean true or false
let isIt = true
console.log(typeof isIt);

//convert number to string 
console.log(typeof (2 + ""));

let myNum = 5 + "";
console.log(typeof myNum);
//or 
let myNum2 = 12;
console.log(typeof (String(myNum2)))
//or
let numtostr = myNum2.toString();
console.log(typeof numtostr);

// string to number 
let digit = "10";
console.log(typeof +digit) 
console.log(typeof (Number(digit)));

// undefined 
let store;
console.log(typeof store);
store = "mystore";
console.log(typeof store);

//null
let nothing = null;
console.log(typeof nothing);   //return object 
//this is a bug in javascript
//console.log(typeof null)  it is bug , error in js

nothing = "something";
console.log(typeof nothing);

//Bigint 
let bigNum = BigInt(123);
console.log(typeof (BigInt(1n)));

console.log(typeof bigNum);

let biggestInt = Number.MAX_SAFE_INTEGER;
console.log(biggestInt);

console.log(bigNum + 12n)

//Booleans 
//true , false
console.log(typeof (5 > 3));

//operators 
// + - / * > < <= >= %
console.log(2+5);
console.log(2/5);
console.log(2-5);
console.log(2*5);
console.log(2%5);
console.log(2 <=5);
console.log(2 >= 5);

//Comparison Operators 
//  == vs === 
// != vs !==

let check1 = '5';
let check2 = 5;

console.log(check1 == check2);
console.log(check1 != check2);
console.log(5 === "10")
console.log(5 !== "10")


