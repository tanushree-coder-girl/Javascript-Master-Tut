console.log(this); // output : window object 
console.log(window); // output : window object 

// function decalration
function myFunction(){
    console.log(this) // return window object 
}
myFunction();
// window.myFunction(); 

// Note => when we declare any function like this then the function will be added in window object so in this case This keyword refers to window object as we call also call function like window.myFunction(); 

// for this we can use "use strict" mode so function cannot refer this to window obj
function myFunction2(){
    "use strict"
    console.log(this) // return undefined
}
myFunction2();