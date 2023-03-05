// Sets (it is iterable)
// store data
// sets also have its own methods 
// No index based access 
// Order is not guranteed 
// Unique items only ( No duplication allowed )

// Syntax of creating Set
//const variableName = new Set();

// Note => we can use any iterable item like string or array in set

// Difference b/w array and set => we cannot store duplicate item in set but we can add duplicate item in array
// Sets has no index based access but array has

const num = new Set([1,2,3,4,]); // Set(4) { 1, 2, 3, 4 }
console.log(num)

const sringSet = new Set('abc')
console.log(sringSet) // output => Set(3) { 'a', 'b', 'c' }

// Empty Set 
let data = new Set(); // empty set
data.add(1)  // Add item in set 
console.log(data)
data.add("hello")  // Add more item in set 
console.log(data)

let item = ['item1', 'item2', 'item3'];
data.add(item);
data.add(item); // not add 2nd time bcoz set is not add duplicate item

console.log(data)


data.add(['item4','item5']);  // add
data.add(['item4','item5']); //add
console.log(data) // they both will add bcoz these two arrays are different in js perspective bcoz both has diiferent address


// Check if set has this value or not 
console.log(data.has('hello'))

// let iterate set 
for (let dataset of data){
    console.log(dataset)
}

// When to use set 
// when we have to do some operations only with unique data 
// const ids = new Set();


// remove duplicate item
let arrayNum = [1,2,3,4,5,6,5,4,3];
let uniqueData = new Set(arrayNum);
console.log(arrayNum)
console.log(uniqueData)


console.log(uniqueData.size) // findl length of set
let len = 0; // find length using loop
for(let u of uniqueData){
    len++
   // console.log(u)
}
console.log(len)


// how to convert set in Arrray 
let uniArr = [...uniqueData]
console.log(uniArr)