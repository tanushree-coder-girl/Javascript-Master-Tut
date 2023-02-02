//  Maps 
// map is an iterable 

// store data in ordered fashion 

// store key value pair ( like object )
// duplicate keys are not allowed like objects 

// difference between maps and objects 

// objects can only have string or symbol as key 
// in maps => can store anything as key 
//like array, number,string 

// objects also known as object literals / keys are always in strings or in symbol
const person = {
    firstName: 'John',
    age: 7,
    7: 'seven'
}
console.log(person.firstName, person['firstName']);
console.log(person[7]) // accessable like this but it considered also as string
for(data in person){
    console.log(typeof data) // it considered all as string hence proved
}

// Lets talk about Map 
// map also store key value pair 
// in map key can by anything
const mapPerson = new Map();
mapPerson.set('fname', 'chiniyashifkfs');
mapPerson.set('age', 10);
mapPerson.set(10, 'Ten'); // this 10 is numbr
mapPerson.set([1,2,3], 'hello i am array key data'); // this 10 is numbr
mapPerson.set({one:'1'}, 'hello i am object key data'); // this 10 is numbr

console.log(mapPerson)

// Get map value 
console.log(mapPerson.get('fname'))
console.log(mapPerson.get(10))
console.log(mapPerson.keys()); // for getting all keys

// loop over 
for(let key of mapPerson.keys()){
    console.log(key, typeof key)
    // console.log(mapPerson.get(key))
}

for(let key of mapPerson){
    console.log( key, Array.isArray(key)) // getting all data in key value pair in Array format 
}
for(let [key, value] of mapPerson){
    console.log( key, value)  
}


// diretly add in map like this
const myMap = new Map([['first', 'value1'], [2, 'two'], ['three', 'tree'], [{fourth:4}, 'fourkey']])
console.log(myMap);

// lets create a object and more items in obj using map
let personInfo = {
    fname: 'demo',
    lname: 'surname'
}

let extraInfo = new Map();
extraInfo.set(personInfo, {age: '10'})
console.log(extraInfo)

// access age 
console.log(extraInfo.get(personInfo).age)

// iterables : string , array , maps ,sets 