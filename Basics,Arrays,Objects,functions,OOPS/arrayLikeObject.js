// Iterables 
// jispe hum loop lga skte hai 
// string and array are iterable

const fname = "tanu";
for (let word of fname){
    console.log(word)
}

const arr = ['item1', 'item2', 'ite3']
for(let item of arr){ 
    console.log(item)
}

// Array like object 
// jinke pas length property hoti hai 
// or jisko hum index se access kar skte hai 
// example :- string 

let fullName = "Tanushree Ahir";
console.log(fullName.length)
console.log(fullName[0])