// keyup vs input vs change input events
// this.value or e.target.value 
// What is debouncing in js 
// what are decorator functions
// implement debouncing 


// Dom  element reference 
const inputBox = document.getElementById('myInput');
const btn = document.querySelector('.myBtn');


// keyup
//The keyup event is fired when a key is released. The keydown and keyup events provide a code indicating which key is pressed, while keypress indicates which character was entered
// inputBox.addEventListener('keyup', function(e){
//     console.log(this.value)
// })

// change
//The JavaScript change event is an event type that gets executed when the focus on an element is changed. The change event of JavaScript inherits all the methods and properties of the Event.
// inputBox.addEventListener('change', function(e){
//     console.log(this.value)
// })

// input
//The input event fires when the value of an <input> , <select> , or <textarea> element has been changed. The event also applies to elements with contenteditable enabled, and to any element when designMode is turned on. In the case of contenteditable and designMode , the event target is the editing host.
// inputBox.addEventListener('input', function(e){
//     console.log(this.value)
// })

//// this.value or e.target.value 
// inputBox.addEventListener('input', function(e){
//     console.log(this.value)
//     console.log(e.target.value)
// })


// Arrow function returns this as window object that's why we cannnot use this.value in arrow function
// browser provide us event object so in event object we find the event info
// inputBox.addEventListener('input', (e)=>{
//     console.log(e.target.value)
// })

// what is debouncing 
//Debouncing is a programming pattern or a technique to restrict the calling of a time-consuming function frequently, by delaying the execution of the function until a specified time to avoid unnecessary CPU cycles, and API calls and improve performance.

// Debouncing is removing unwanted input noise from buttons, switches or other user input. Debouncing prevents extra activations or slow functions from triggering too often. Debouncing is used in hardware switches, programs and websites.

// what are decorator functions
//A decorator (also known as a decorator function) can additionally refer to the design pattern that wraps a function with another function to extend its functionality. This concept is possible in JavaScript because of first-class functions — JavaScript functions that are treated as first-class citizens.

// Implement debouncing 


function debounce (fun, delay){
    let timoutId;
    return function(...args){
        clearTimeout(timoutId);
        timoutId = setTimeout(() => {
            fun.call(this, ...args);
        }, delay);
    }
}

const printVal = (e) => {
    console.log(e.target.value)
}

const debounceFun = debounce(printVal, 2000)
inputBox.addEventListener('input', debounceFun);

// Read more about debouncing
// https://www.geeksforgeeks.org/debouncing-in-javascript/s