// Objects reference data type 
// objects are good but not sufficient 
// for real world data
// objects store key value pairs 
// objects don't have index 

// how to create objects 
// const person = { name: 'tanu', age:'22'}
const person = {
    name: 'tanu',
    age: 22,
    hobbies: ['reading', 'singing'],
    'hello-world': 'hello all'                          // for two letter word we must have to use string like this
}
console.log(typeof person, person);

// how to declare empty objects
let emptyObj = {}           //like this
console.log(typeof emptyObj)

// How to access data from objects 
// using dot notation
console.log(person.name)
console.log(person.hobbies)

// using bracket notation
console.log(person['age'])
console.log(person['name'])
console.log(person['hello-world'])

// how to add key value pair to object
person.new_key = 'your appeded new key';
console.log(person)

// Difference between dot notation and bracket notation 
//Bracket notation allows you to access properties with special characters in their names, while you can not do this with dot notation. In conclusion, dot notation is the most common way to access elements in JavaScript. However, there are certain situations where bracket notation is more appropriate. 

//if we want to add any key with two words then we have to use braket nottation for accessing 
// if we want  to add dynamic value then we must have to use braket notation 

const data = {
    'one': 1,
    two: 2,
    'third number': 3
}

//access third number 
// console.log(data.third number)   //cannot use dot notation in this case 
console.log(data['third number'])


// Access object by dynamic key
let oneNum = 'one';
console.log(data[oneNum])

// how to add dynamic key value pairs like this
//  Computed properties 
let key1 = 'mykey1';
let key2 = 'mykey2';

let val1 = 'value1';
let val2 = 'value2';

let dynamicObj = {
    [key1]: val1,
    [key2]: val2
}
console.log(dynamicObj);

//add one more dynamic key 
let key3 = 'mykey3';
let val3 = 'value3';

dynamicObj[key3] = val3;
console.log(dynamicObj);

// how to interate object using loop 
const employee_data = {
    employeeName : 'shreyash',
    lastName: 'jain',
}

// for in loop 
for(let employee in employee_data){
    //console.log(employee)         //it will return keys 
    console.log(`${employee} : ${employee_data[employee]}`)
}

//Object.keys 
//Object.keys returns objects keys in Array format 
console.log(Object.keys(employee_data));
console.log(typeof (Object.keys(employee_data)));
console.log(Array.isArray(Object.keys(employee_data)));


//now how to access key value from obj using objec.keys using for in loop
for(let key of Object.keys(employee_data)){
    console.log(key, ":", employee_data[key])
}


//Object destructing 
const cartoon = {
    program_name: 'shin-chan',
    channel: 'hungama',
    year_of_release: '2001',
    story: 'a five year naughty kid story'
}

// let program_name = cartoon.program_name;
// let channel = cartoon.channel;
// console.log(program_name, channel);

// Destruting 
// let { program_name, channel } = cartoon
let { program_name: name, channel: on } = cartoon           // IF WE want to declare variable with another name then use this : 
console.log(name, on)

let { program_name, channel, ...rest } = cartoon  //we can use ... rest props or params for return remaining params in a object

console.log(program_name, channel);
console.log(rest)


// Object.entries, Object.value
console.log(Object.entries(cartoon))
console.log(Object.values(cartoon))
console.log(Object.keys(cartoon))

// loop using Object.entries 
Object.entries(cartoon).forEach(([key,value])=>{
    console.log(key +": " + value)
})

Object.keys(cartoon).forEach((key)=>{
    console.log(key +": " + cartoon[key])
})