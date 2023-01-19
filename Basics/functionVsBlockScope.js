// Block Scope vs Function scope 

// A scope is where you can refer to a variable. a block defines a block scope a variable defined inside a block will be defined only inside that block and you can't reference it after the end of block.22-Mar-2014

// Let & const => Block scope 
// Var => Function scope 

// What is block 

// this is block 
// {

// }


// if we decalre variable using let or const we can only access them within their block not outside. 
{
    let first_name = "Tanu";
    console.log(first_name) // Tanu
}
// console.log(first_name); //first_name is not defined

{
    const first_name = "Tanushri";
    console.log(first_name) // Tanushri
}
// console.log(first_name); //first_name is not defined

// Global scope variable
// const first_name = 'tanushree';
// console.log(first_name)

// if we decalre variable using var we can access them anywhere bcoz it is a function scope 
{
    var first_name = "monty";
    console.log(first_name) // monty
}
console.log(first_name) // monty


// Function , if else, while, for etc.. that all are blocks.. 
if(true){
    let hey = "hey all"
    console.log(hey)
}
// console.log(hey) //error

function myFun (){
    if(true){
        let loggedIn = "you are logged in";
        console.log(loggedIn)
    }
    //console.log(loggedIn)// error // bcoz its not present in lexical scope 
}
myFun();

//variable using var can use anywhere.... 
// Best practice to use let and const : 