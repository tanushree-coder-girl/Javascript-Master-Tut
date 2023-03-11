// Closures

//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.

// As we already know that function can return function 
// so when we return any function in another function 
// then it will return with outerfunction variable and its surrounding variables and this is called closures..

// Function can return function like this 

function outerFun (){
    return function(){
        console.log('hello world')
    }
}

let returnedFun = outerFun()
returnedFun()



//////////////////////////////////////////////////
// closures example - 1 

function printName (fname, lname) {
    return ()=> {
        console.log(fname, lname)
    }
}

const returnedVal = printName("Tanu", "Ahir")
returnedVal();
// output is : Tanu Ahir

// let's analyze the code 

// step-1 compilation 
// step -2 code execution  : Global execution context
// creation phase : 
    // printName = function(){}
    // returnedVal = uninitialized 
// code execution phase 
    // line1: function printName : already in memory 
    // line2: returedVal = call a function so it will create a function execution context 

        // printName: Function execution context 
            // local memory creation phase :  
                // 1. arguements 
                // 2. fname: 'Tanu'
                //3. lname: 'Ahir
            // code execution phase 
                // line -1 => return a function 

                // note jab bhi innerfun outerfun se return hota h tb sath m local memory k variable leke return hota h toh isme function + fname + lname leke return hoga

                // function complete FEC pop from call stack go back to GEC
                // Note : after completing this is popped from call Stack 

    // line -2 => now the value of returedVal
            // returedVal = function(){ 
            //  console.log(fname, lname) 
            //} 
            // or 
            //  its parent variables  fname and lname

    //which is returned from function printName  

    // line - 3 call returnedVal : call a function so it will create a function execution context 
    
        // returnedVal: Function execution context 
            // local memory creation phase :  
                // 1. arguements 
            // code execution phase 
                // line -1 =>  console.log(fname, lname)
                // this fname and lname hum sath leke return hue h 

                // print Tanu Ahir

//====================================================================================================================================================================================================================================
