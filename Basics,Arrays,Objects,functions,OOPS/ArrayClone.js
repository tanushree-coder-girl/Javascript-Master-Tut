//How to clone Array 
//how to concatenate two arrays

// let array1 = ["item1", 'item2'];
// let array2 = array1; 
// console.log(array1, array2)

// array1.push('new item');
// console.log(array1, array2)

//Right way to copy and concating array ...
let a1 = ['i1','i2'];
let a2 = a1.slice(0);               //1st way using slice method to clone an array
let a3 = [].concat(a1)              //2nd way using concat method to clone an array
let a4 = [...a1]                //3rd and best modern way using spread operator to clone an array

console.log(a1, a2, a3, a4)

let array1 = [1,2];
let array2 = [...array1];
console.log(array1 === array2)      

// More arrays concatination
let num1 = [1,2,3,4];
let numers = num1.slice(0).concat([5,6]);
let moreNum = [0].concat(numers, [7,8])
console.log(num1, numers, moreNum);

//Simplest and best way of concatination arrayis... 
let abc = ["a","b","c"];
let def = ["d","e","f"];
let alpha = ["start", ...abc, ...def, "g","h","i"];
console.log(alpha)

