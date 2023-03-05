//  Array Destructing 

const fruits = ["apple", "mango", "grapes"];

// let fruit1 = fruits[0];
// let fruit2 = fruits[1];

// destruct way 
let [fruit1, fruit2] = fruits

console.log(fruit1, fruit2)

// how to add rest array items at destruting time 
const numbers = [1,2,3,4,5]
// let [ one, two ] = numbers
// let remainingItemArray = numbers.slice(2);     do the same at destructing time 

// for rest item we can use ... it will create a array of rest items.
let [ one, two, ...rest ] = numbers
console.log(one, two, rest);


// desturcting if leave any item like this  use only , for leave any index
let [first, ,four, five] = numbers
console.log(first, four, five)
