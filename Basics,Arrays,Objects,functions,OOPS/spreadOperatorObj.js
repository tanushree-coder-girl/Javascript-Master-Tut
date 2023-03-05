// Spread operator 

// const array = [1,2,3];
// const array2 = [4,5,6];
// const newArr = [...array, ...array2, 89];
// console.log(newArr);


//We can use spread operator with iterables value like string , object, array - 
// const numArr = [...'123456789'];            
// console.log(numArr);

//Spread operator in object
const obj1 = {
    key1: 'value1',
    key2: 'value2'
}
const obj2 = {
    key3: 'value3',
    key4: 'value4'
}
const obj3 = {
    ...obj1,
    ...obj2,
    newkey: 'new value'
}
console.log(obj3);

//Note 
// if there be dublicated key it will override the previous one with the new one for example: 
let myObj = {
    name: 'xyz',
    lastname: 'abc',
    age: '22',
}
let myObj2 = {
    age: '12',
    ...myObj,
    name: '123'
}
console.log(myObj2)         // output : { age: '22', name: '123', lastname: 'abc' }

// make object from array 
const arrToObj = {...["apple", "mango", "orange"]}
console.log(arrToObj)           // output: { '0': 'apple', '1': 'mango', '2': 'orange' }

// make object from string 
const strToObj = {..."abcdefghijklmnopqrstuvwxyz"};
console.log(strToObj)
console.log(strToObj['25'])
