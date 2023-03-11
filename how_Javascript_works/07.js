// Lexical environment and scope chain

// lexical environment => 
// A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. But the opposite is not true; the variables defined inside a function will not be accessible outside that function.

// lexical scope means 
// inner function can access variable from its parent or it surrounding 
// it will check if variable is not present inside function then it will check it is in global scope or with parent 

// scope chain => For example, suppose we define the nested function inside the function. In that case, it can have its local scope, and variables declared inside the nested function can't be accessible in the outer function. So, we are creating the chain of scopes; that's why we call it the scope chain.

// The scope chain is a way to link or provide a systematic access to all variables and other functions that the current execution context (function in this case) has access to

const lastname = "Ahir";                        // line -1 

const printName = function(firstname){         // line -2 
    console.log(firstname + " " + lastname)//1.
}

printName("Tanu");                             // line -3 

// output is Tanu Ahir


// let's discuss the code 

// compilation => global scope = lastname and a function expression
// code execution 
// Global execution context - call stack GEC 

// creation phase : 
// window 
// this = window
// lastname = uninitialize = TDZ (temporal dead zone)
// printName = uninitialize = TDZ (temporal dead zone)

// execution phase 
//line-1 overwrite value of lastname in global memory
    // lastname = "Ahir"
// line - 2 overwrite value of printName in global memory 
    // printName = function(){ }

    // Note: so now in our global memory we have 
    // lastname = "Ahir" 
    // printName = function(){}

// line -3  printName("Tanu");
// so line no -3 call a function 
// so it will create a function execution context 

// funcion execution context printName 

// phase - 1 => local memory creation phase 
// arguments = []
// firstname = 'tanu' 

// phase -2 => code execution 
// line - 1 console.log(firstname + " " + lastname)
// print firstname which is present in function local memory 
// lastname is not present in function local memory so it will check in global memory or its parent scope 
// so we have lastname present in global memory 

// so it will print 
// Tanu Ahir
// And this is called lexing

// after executing all line in functions 
// FEC is pop from call stack 
// and continue executing 
// GEC...