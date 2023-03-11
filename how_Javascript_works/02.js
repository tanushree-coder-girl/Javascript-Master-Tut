console.log(this)
console.log(window)
console.log(myFunction) 
console.log(fullname)

function myFunction(){
    console.log('hello')
}

var firstName = 'tanu'
var lastName = 'ahir'

var fullname = `${firstName} ${lastName}`
console.log(fullname)

// output

// windows obj 
// window obj 
// function(){}
// undefined 
// tanu ahir 

// step -1 => compilation phase 
// in compilation phase .. checking early errors if any throw error 2. determine appropritate scope 
// now js know that we have all this in global scope =>  myfunction (){} , firstname , lastname , fullname 

// step -2 => code execution phase 
// in code execution phase it create GEC = Global execution context to execute our code 
// in global execution context it has two phases - memory creation phase or code exectution phase 

// so now js already knows that we have functions variables in which scopes so in creation phase we have to hoisted one by one all functions and variables 

// note : in memory creation phase we have already have window object and in this phase this browser sets this value to window object we always have this and window present in our global memory 

// 1). So In creation phase it will hoist all variables and functions so we have all this in global memory

// 1. window obj 
// 2. this => window obj 
//3. myFunction()
// 4. firstname = undefined 
// 5. lastname = undefined 
// 6. fullname = undefined 

// 2). code execution phase => in this phase  code executes line by line  

// in call stack GEC is kept 
//The Execution Stack, also known as the Call Stack, keeps track of all the Execution Contexts created during the life cycle of a script. JavaScript is a single-threaded language, which means that it is capable of only executing a single task at a time.

// line - 1 console.log(window) =>  window obj 
// line - 2 console.log(this) => wimdow obj
  //  note :  js checks in global memory which we already have
// line - 3 console.log(myFunction) => print myFunction()
// line - 4 console.log(fullname ) => undefined 
// line - 5 
// function myFunction(){
//     console.log('hello')
// }
// so this function is already exists in our memory 
// line -6 var firstName = 'tanu' => we have this varaible in global memory now we have to replace it value from undefined to tanu
// line -6 var lastname = 'ahir' => we have this varaible in global memory now we have to replace it value from undefined to ahir
// line -6 var fullname = 'firstname + lastname' => we have this varaible in global memory now we have to replace it value from undefined to firstname + lastname which is present in global memory 
// line - 7 console.log(fullname) => tanu ahir 

// so the output the the following code is 
// window obj
// window obj 
// myFunction(){}
// undefined 
// tanu ahir 