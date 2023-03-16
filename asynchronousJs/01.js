// Javascript is the synchronous single-threaded language but with the help of event-loop and promises, JavaScript is used to do asynchronous programming.

// Spoiler: at its base, JavaScript is a synchronous, blocking, single-threaded language. That just means that only one operation can be in progress at a time.

//Asynchronous programming
// is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.

// JavaScript is synchronous by nature. But there are a few things that have asynchronous behavior such as API calls, setTimeout, DOM events (click, mouse over, scroll …).18-Dec-2021

// Because Web APIs often provide data asynchronously, learning how to handle the result of asynchronous actions is an essential part of being a JavaScript developer. In this article, you learned how the host environment uses the event loop to handle the order of execution of code with the stack and queue.10-Sept-2020


// Synchoronous programming is single threaded. 

// console.log('script start')
// let num = 0;
// for (let index = 0; index < 100000000; index++) {
//     num+= index
// }
// console.log(num)
// console.log('script end')

// output => script start
// 4999999950000000
// script end

// this is called synchronous every cdoe runs line by line

