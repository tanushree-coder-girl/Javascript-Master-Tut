// setTimeout 

// setTimeout() The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.

// setTimeout() is an asynchronous function, meaning that the timer function will not pause execution of other functions in the functions stack.

// console.log('script start');

// setTimeout(()=>{
//     console.log('hello world')
// }, 2000)

// console.log('script end');

// output 
// script start
// script end 
// hello world

// setTimeout is always executed on last after completing all the code execution setTimeout is executed 


// setTimeout with 0 milisecond
// console.log('script start');

// setTimeout(()=>{
//     console.log('i am inside setTimeout with executed after 0 milisecond')
// }, 0)

// console.log('script end');

// script start
// script end 
// i am inside setTimeout with executed after 0 milisecond



// SetTimeout with id 
console.log('script start');

const id = setTimeout(() => {
    console.log('inside setTimeout')
});

for (let index = 0; index < 100; index++) {
    console.log('...')    
}

console.log('setTimeout id is ' + id);
console.log('lets clear the timout')

// clearTimeout() The global clearTimeout() method cancels a timeout previously established by calling setTimeout() .

clearTimeout(id)

console.log('script end')


// how setTimeout executes in background 

//Calling setTimeout triggers the execution of the web API, which adds the callback to the callback queue. The event loop then takes the callback from the queue and adds it to the stack as soon as it's empty. Multiple things are going on here at the same time.

