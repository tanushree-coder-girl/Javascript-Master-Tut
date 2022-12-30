//String indexing 

let firstname = "tanushri";

// t a n u s h r i
// 0 1 2 3 4 5 6 7 

console.log(firstname[0]);

// length of string
console.log(firstname.length);

//last index
console.log(firstname[firstname.length -1])
console.log(firstname[firstname.length -2]) //second last

//String methods 

// trim();
// toUpperCase();
// toLowerCase();
// slice();

let stringVar = '  MY string    '
console.log(stringVar.length);
console.log(stringVar.trim().length)
let upCase = stringVar.toUpperCase();
console.log(upCase)
console.log(stringVar.toLowerCase())

let newVar = 'hello all';
//Start index , end index
console.log(newVar.slice(1, 3));  //el
console.log(newVar.slice(2));  //lio all

// String Concatination 
let str1 = "10";
let str2 = "20";

let str3 = str1 + str2;
console.log(str3)
console.log(+str1 + +str2)

let _first = 'tanu';
let _second = 'ahir';
let _full = _first + " " + _second;
console.log(_full)
let _full_sent = "my name is " + _first + " my surname is " + _second;
console.log(_full_sent)

// template literals 
console.log(`my name is ${_first} and lastname is ${_second}`);
