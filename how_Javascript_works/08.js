// One more example of lexical scoping 

const lastname = "Ahir";                        //line-1

const printName = () => {                       //line-2
    const firstname = "tanu";  // 1.
    function innerFun (){     // 2.
        console.log(firstname, lastname)   // first line of innerFun
    }
    innerFun();             //3.
}

printName()                                     // line-3

// output : tanu Ahir

// let's understand the code 
// step - 1 compilation decides the scope and early error checking 
    //global scope has : lastname , printname function
    // printname function has : function scope => firstname
// step -2 code execution phase 
    // creation phase 
        // lastname = unitialized
        // printname = unitialized 
    // execution phase 
        // line-1 : set lastname = "Ahir";
        // line-2 : set printName = function printName(){}
        // line- 3 call printName , so it create a function execution context for printName function 

// PrintName 
// Function execution context 
    // local memory creation phase 
        // arguements 
        // firstname : uninitialized 
        // function innerFun(){}
    // code execution phase in function printName
        // line 01 set firname = "tanu";
        // line 02 innerFun function already present in local memory of function
        // line 03: call innerFun , so it also create a function execution contexr for innerFun 

// innerFun 
// Function execution context 
    // local memory creation phase 
        // arguements 
    // code execution phase of function innerFun
        // line : 1 console.log(firstname, lastname) 

        // so we check local memory of innerFun but firstname and lastname is not present there
        // so we check on lexical scope 
        // now we check on its parent scope which is printName fun 
        // so we found firstname = "tanu" in its parent scope 

        // but didn't find lastname 
        // so we will check in its global scope 
        // so it global scope we found 
        // lastname = "Ahir"

        // so the line prints tanu Ahir

// So how lexical scope works in js .....
