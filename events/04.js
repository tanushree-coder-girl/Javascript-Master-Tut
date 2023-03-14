// How event listener works

// broswe k pas js engine or web api's h

// The JavaScript runtime environment (which includes the JavaScript engine) provides some components like the Web API, callback queue, and an event loop to make JavaScript concurrent.

// what is js engine
// V8 is the name of the JavaScript engine that powers Google Chrome. It's the thing that takes our JavaScript and executes it while browsing with Chrome. V8 provides the runtime environment in which JavaScript executes. The DOM and the other Web Platform APIs are provided by the browser.
// global memory
// call stack
// Global execution context

// What is the purpose of the JavaScript Engine?
// Explanation: The JavaScript Engine is generally used for interpreting the JavaScript. It is used to interpret the javascript and execute the javscript on the web page.

// what is web api's
// API stands for Application Programming Interface. A Web API is an application programming interface for the Web. A Browser API can extend the functionality of a web browser. A Server API can extend the functionality of a web server.

// What is callback Queue
//A callback queue is a queue of tasks that are executed after the current task. The callback queue is handled by the JavaScript engine after it has executed all tasks in the microtask queue.01-Jul-2022

// What is Event loop
//Callback Queue: After the timer gets expired, the callback function is put inside the Callback Queue, and the Event Loop checks if the Call Stack is empty and if empty, pushes the callback function from Callback Queue to Call Stack and the callback function gets removed from the Callback Queue.

console.log("script start");
const buttons = document.querySelectorAll(".buttons button");
for (const btn of buttons) {
  btn.addEventListener("click", (e) => {
    let innerVar = 0;
    for (let i = 0; i < 100000000; i++) {
        innerVar += i;
    }

    console.log(innerVar ,e.currentTarget.textContent);
  });
}

let outerVar = 0;
for (let i = 0; i < 100000000; i++) {
  outerVar += i;
}
console.log(outerVar);
console.log("script end");



//JavaScript is an asynchronous and concurrent programming language that offers a lot of flexibility. It's single-threaded like sync, but also non-blocking like async. Although it's synchronous by nature, JavaScript benefits from asynchronous code.

/// Which things are asynchronous in JavaScript?

// Browser API/Web API events or functions. These include methods like setTimeout , or event handlers like click, mouse over, scroll, and many more.
// Promises. A unique JavaScript object that allows us to perform asynchronous operations.