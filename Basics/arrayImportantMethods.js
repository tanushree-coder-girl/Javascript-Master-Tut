// important array methods 

// foreach 
// map 
// filter 
// reduce
// sort 
// find 
// every 
// some 
// fill 
// splice 

//The forEach() method calls a function for each element in an array. The forEach() method is not executed for empty elements.
const fruits = ['apple', 'mango', 'orange'];

// Using traditional way
// const eachElem = (fruit, index) => {
//     console.log(fruit, index);
// }
// for (let i = 0; i < fruits.length; i++) {
//     eachElem(fruits[i], i);
// }

// using foreach method to iterate all values 
function eachElement(fruit, index){
    console.log(fruit, index)
}
fruits.forEach(eachElement);  // using foreach  

// we can directly passcallback like 
fruits.forEach((fruit, index)=>{
    console.log(fruit, index)
})

// another way
fruits.forEach(function(fruit, index){
    console.log(fruit, index)
})


// all array numbers multiply by 2 
const numArray  = [2,5,6,8,5];
numArray.forEach((num, index)=>{
    console.log(num * 2)
})

// in real life we it will be used something like this
const user = [
    { fname: 'Abes',age: 21 },
    { fname: 'liasa', age: 18}
]

user.forEach((userdata, index)=>{
    console.log(userdata.fname)
})
// we can do the same with for of loop or for loop etc... 
// for(let userd of user){
//     console.log(userd.fname)
// }

// Map method 
//Definition and Usage. map() creates a new array from calling a function for every array element. map() calls a function once for each element in an array.
// map returns something and create a new array for the returning item. 

//The map() method is used to transform the elements of an array, whereas the forEach() method is used to loop through the elements of an array. The map() method can be used with other array methods, such as the filter() method, whereas the forEach() method cannot be used with other array methods.

//eq- 1
const newArray = fruits.map((fruit, index)=>{
    return fruit.toUpperCase();
})
console.log(newArray)


// ex -> Square of numbers 
const squareNum = (num, index) => {
    console.log(num, " and ", index)
    return num * 3 + index
}
const returnedArray = numArray.map(squareNum);   /// if map doesn't return anything then it will create new array  with undefined
console.log(returnedArray)


// filter method 
//The filter() method creates a new array filled with elements that pass a test provided by a function. The filter() method does not execute the function for empty elements. The filter() method does not change the original array.

let numbers = [...'1234567890'];

const isEvenNum = (number , index) => {
    return number % 2 === 0
}
const EvenNumArray = numbers.filter(isEvenNum);
console.log(EvenNumArray)

const oddNum = numbers.filter((number, index)=> !(number % 2 === 0) )
console.log(oddNum)

// Reduce Method 
//The reduce() method executes a reducer function for array element. The reduce() method returns a single value: the function's accumulated result. The reduce() method does not execute the function for empty array elements.

//The reduce() method is an iterative method. It runs a "reducer" callback function over all elements in the array, in ascending-index order, and accumulates them into a single value. Every time, the return value of callbackFn is passed into callbackFn again on next invocation as accumulator .4 days ago

//The reduce() method executes a reducer function for array element. The reduce() method returns a single value: the function's accumulated result.

//reduce() method applies a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value.

// Sum of all the numbers in Array
const numberData = [1,3,2,3,2,1]
const sum = numberData.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
})
console.log(sum)

//Our accumulator begins at 0 which is our initialValue we passed to reduce . On each call to the function the item is added to the accumulator 

// accumulator , current value  , return
//  1              3               4
//  4              2               6
//  6              3               9
//  9              2               11
//  11             1               12

// pass initial value for accumulator
const sum2 = numberData.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
}, 10) // initial value is 10 now starting accumulator value is 10
console.log(sum2)


// Realastic Example of reduce:
const userCart = [
    {productId:1, productName: 'mobile', price: 10000},
    {productId:2, productName: 'shirt', price: 500},
    {productId:3, productName: 'led', price: 25000},
]

const price = userCart.reduce((accumulator, currentProduct) => {
    return accumulator + currentProduct.price
}, 0)
console.log(price)

// Javascript Sort Method
//The sort() sorts the elements of an array. The sort() overwrites the original array. The sort() sorts the elements as strings in alphabetical and ascending order.

// Javascripy ASCII characters list
//https://www.w3schools.com/charsets/ref_html_ascii.asp
// sort mrthod mutate the original array 

// lets sort in ascending order 
let num = [5,9,1200,400, 3000];

// expected: [ 5, 9, 400, 1200, 3000 ]
// output: [ 1200, 3000, 400, 5, 9 ]

num.sort(); //change in original array
console.log(num) // [ 1200, 3000, 400, 5, 9 ]

// that's because js sort considering strings. for string it use ASCII table codes
// js check 1st character and check its ASCII code 
// for example its 1200 then js check code for 1 and check ascii code.. 

// Sort alphabatically
let  names = ['varun', 'nidhi', 'ankit', 'zaya', 'ANkita', 'YYY']
names.sort();
console.log(names)

// Note : capital letter sort first because capital letter has ASCII code starting from 65 to 90 wheras small letter has ascii code starting from 97 ... 

// Sort number correctly 
// Ascendung order
num.sort((a, b)=>{
    return a - b
})
console.log(num)

// Descending order
num.sort((a, b)=> b - a)
console.log(num)

// ascending 
// 1200 , 410 
// a -b => 790 
// a - b => positive (greater than 0) ( b,a )
// 410 , 1200

// 5 , 9
// a - b => negative (less than 0) ( a,b )
// 5 , 9


// Sort - Realastic Example 
const prductsAl = [
    { p_id : '1', p_name: 'laptop', price: 100 },
    { p_id : '2', p_name: 'mobile', price: 2000 },
    { p_id : '3', p_name: 'computer', price: 300 },
    { p_id : '4', p_name: 'charger', price: 264 },
    { p_id : '5', p_name: 'shirt', price: 10000 },
    { p_id : '6', p_name: 'lamp', price: 500 },
]
// price low to high
prductsAl.sort((a, b)=>{
    return a.price - b.price
})
console.log(prductsAl)

// price high to low 
prductsAl.sort((a, b)=>{
    return b.price - a.price
})
console.log(prductsAl)

// but it will change whole array 
// so better we should clone our array first for example 
const lowTohighPrice = prductsAl.slice(0).sort((a,b)=>a.price-b.price)
console.log(lowTohighPrice)

// Find method 
//The find() method returns the value of the first element that passes a test. The find() method executes a function for each array element. The find() method returns the value of the first element that passes a test. The find() method executes a function for each array element. The find() method returns undefined if no elements are found.

const myArray = ['dog','cat', 'apple', 'grapes', 'monkey'];
const data = myArray.find((data, id)=>{
    return data.length > 5
})
console.log(data)

// Realistic example of find method 
const allUsers = [
    { userId: 1, userName: 'Ravi' },
    { userId: 2, userName: 'sunil' },
    { userId: 4, userName: 'muskan' },
    { userId: 5, userName: 'hathi' },
]
const userIdWithIdThree = allUsers.find((user)=>user.userId === 4)
console.log(userIdWithIdThree)

// Every Method 
//The every() method executes a function for each array element. The every() method returns true if the function returns true for all elements. The every() method returns false if the function returns false for one element.

// it return true or false 
const age = [2,6,8,12, 15];
const ans = age.every((item)=>item %2 === 0);
console.log(ans);

// note: it will return true is condition matches with all the element 
//condition should be applied on all elements.

//realastic example of every method 
const product2 = [
    { p_id : '1', p_name: 'laptop', price: 100 },
    { p_id : '2', p_name: 'mobile', price: 2000 },
    { p_id : '3', p_name: 'computer', price: 300 },
    { p_id : '4', p_name: 'charger', price: 264 },
    { p_id : '5', p_name: 'shirt', price: 10000 },
    { p_id : '6', p_name: 'lamp', price: 500 },
]
const isAllLessThantenthousand = product2.every((pro)=>pro.price < 9000)
console.log(isAllLessThantenthousand)

// Some method 
// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false.
const answer = age.some((item)=>item % 2 === 0); // it will returns true is atlease one condition is matches
console.log(answer) 

//realastic example of some method 
const isAnyLessThantenthousand = product2.some((pro)=>pro.price > 5000)
console.log(isAnyLessThantenthousand)

// fill method in js
//The fill() method changes all elements in an array to a static value, from a start index (default 0 ) to an end index (default array.length ). It returns the modified array.
// fill changes original array 

const myNewArray = new Array(10).fill(-1)
console.log(myNewArray)

const myNewArray2 = [1,2,3,4,5,6,7,8,9];
//fill(what to fill, where to start, where to end not include)
myNewArray2.fill(0, 1, 3)
console.log(myNewArray2)

// Splice method 
//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice() 

const myArr = ['item1', 'item2', 'item3'];
// .splice(start, kitne delete krne number, insert kya krna);

// delete
const returnedDeleteItem = myArr.splice(1, 1);  // ite means 1st index s replace krna 1 element ko
console.log(myArr, returnedDeleteItem)

// insert 
myArr.splice(1, 0, "hello") // 1 index m ek item add kia and 0 delete krne h
console.log(myArr)

// insert and delete together 
const removeIt = myArr.splice(0,2,'hyy', 'hey');  // on 0 index delete 2 elemetn and add 2 element hy nd hey
console.log(myArr, removeIt)
