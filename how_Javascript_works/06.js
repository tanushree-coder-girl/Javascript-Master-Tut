// Function execution context

//There are two types of execution contexts: global and function. The global execution context is created when a JavaScript script first starts to run, and it represents the global scope in JavaScript. A function execution context is created whenever a function is called, representing the function's local scope.

let foo = "foo";                                            //line1
console.log(foo);                                           //line2

function getFullName (firstname, lastname){                 // line3
    console.log(arguments);             //1.
    // console.log(arguments.length);

    let myVar = "Inside function"       //2.
    console.log(myVar)                  //3.
    const fullname = firstname + " " + lastname //4.
    return fullname;                 //5.
}

const personName  = getFullName('tanu', 'ahir')             //line4
console.log(personName)                                     //line5

//output 
// foo
//Arguments(2)
//Inside function
//tanu ahir


// let's explain this code 


//step -1 compilation 
// global memory has => foo, getFullName , personName


// step-2 execution 
// GEC :  call stack has GEC to run
//global memory - creation phase 
// window 
// this
// foo = uninitialized 
// getFullName = function(){}
// personName = uninitialized 

// CEP - code execution phase 
// line 1 - foo = "foo"
// line - 2  - print on console foo 
// line - 3 getFullName function which is present in global memory 
// line - 4 
//const personName  = getFullName('tanu', 'ahir')
// this line will create a function execution context bcoz in this line we call  a function so it will create a function execution context 

// now inside call stack a FEC (function exeution context goes on top )
// now function starts execution 
// function execution context 
// it also has two phase 
// local memory creation phase and code execution phase 

// function local memory creation phase :

// Arguments which is in form of array arg []
// arg = [ 'tanu', 'ahir']
// fname  = tanu
// lname = ahir
// myVar = uninitialized
// fullname = uninitialized 

// code execution in function 
// line -1 => print arguments = arg ['tanu', 'ahir']
// line-2 =>set value of variable which is in function local memory myVar  = inside function 
// line-3 print myVar 
// line-4 set fullname value = firstnamme + lastname  so its tanu + ahir 
// line - 5 return fullname so return value of this fullname 

// now function ends so Function execution context is pop from call stack and back to continue runnnig on GEC 

// GEC line -4 
// so now the value of line-4 const personName = return value of function
// so personName = tanu ahir ;
//  line -5 print personname 


/// so the output of the code is 

// foo
// arg = ['','']
// inside function 
// tanu ahir


// When all code executed 
// global execution context is also pop from call stack



// function arguement is array like object 
/// can check arguments.length 