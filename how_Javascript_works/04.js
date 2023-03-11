// Are let and const are loisted

// In JAvascript variable created using var is hoisted with value undefined 

// but what happened in case of let and const 
//lets discuss

// console.log(firstname)

// console.log(firstname) // Cannot access 'firstname' before initialization
// let firstname = "Tanu"
// console.log(firstname)


// lets disucss above code 
// step -1 => compilation phase => in this js know that we have global scope variable firstname 
// step -2 => execution phase => memory creation phase 2. code execution phase 
    // 1. memory creation phase 
        // in this phase 
        // we hoist all variables and functions 
        // so now we firstname and js knows that this is let variable 
        // so js engine set let and const variable value to uninitialized at hoisting time 
        // now firstname value is = > 
        //firstname = uninitialized

    // 2. code execution phase 
     // line -1 console.log(firstname ) 
     // firstname is uninitialized in global memory 
     // so it will throw error 


     // why this happening 
     // it is happening bcoz of temporal dead zone 

     //Temporal Dead Zone is the period of time during which the let and const declarations cannot be accessed. Temporal Dead Zone starts when the code execution enters the block which contains the let or const declaration and continues until the declaration has executed.


     // but later in code executionphase when we executes 
     //let firstname = "Tanu"
     // so this line set value to tanu from uninitialized 
     // later we can access it 





// Difference between reference error 
// cannnot access 'firstname' before initialization 
    // this means that we have firstname variable present in global  memory but it is uninitialized 
// firstname is not defined 
    // its means that there is not any variable  firstname in js memory 

console.log(typeof firstname)  // if not defined it's undefined
