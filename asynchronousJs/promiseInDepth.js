console.log('script start')                                         // line-1

const bucket = ['carrot', 'sugar', 'milk']                          // line-2               
const producePromise = new Promise((resolve, reject)=>{             // line-3
    if(bucket.includes('carrot')){
        resolve('We can prepare gajar ka halwa')
    }else{
        resolve(new Error('carrot is not avail'))
    }
})

producePromise.then((response)=>{  
    console.log(response)
}).catch(err=>console.log(err))


setTimeout(() => {                                                  //line-4
    console.log('setTimeout is called')
}, 0);

for (let i = 0; i < 100; i++) {                                     // line-5
    console.log('...')
    
}

console.log('script end')                                             //line-6


// output of the above code is 
//script start
// ... (100)
// script end 
// we can prepare gajar ka halwa
// setTimeout is called



//The Callback queue is handled by the JavaScript engine after it has executed all tasks in the microtask queue. 
//Microtask queue is processed after the current task is finished. The Callback queue is processed after the microtask queue is empty.

// note => The function declared inside a promise is the product Web API. When a new promise object is formed, then the function product Web API starts automatically fetching data for the website and when it finishes with success returns the result. The arguments resolve and reject are callbacks.

// let's analyze the code

// point to remeber
// we already know broswer has a js engine(v8 engine) and web api's 

// we already know this steps :
//step-1 compilation phase => In this step browser did early error checking and appropriate scope of varaibles
// step -2 execution phase => in this step it create a Global execution context in callstack 
// Global execution context has two phase - memory creation phase or code execution phase 

//let's talk about code execution phase 
// line -1 console.log('script start')  => print on console script start
// line -2 const bucket = ['carrot', 'sugar', 'milk']   => create array in heap memory and kept a pointer in call stack
// line-3 new Promise((resolve, reject)=>{  })  => it is asynchronous operation web api's take the responsibility for promises and return  promise object with state and result when it completed it process then webapi's send the callback to microtask queue 
// line-4  setTimeout(() => { console.log('setTimeout is called')}, 0);
//  it is asynchronous operation setTimeout is also handled by web api so web api take the responsibility of it and after delay time completion callback is passed is callbackQueue 
// line-5 for (let i = 0; i < 100; i++) { console.log('...')}
// loop execution start and print ... 100 times
// line-6 console.log('script end')  => print on console script start
// global execution context is pop from callstack

// Till now we have on console
// script start
// 100 times (...)
// script start

// we have a promise callBack in microtaskqueue
// we have a setTimeout callBack in callbackqueue 

// now event loop is checking that callstack is empty or not 
// event loop finds that call stack is empty 
// so event loop firstly gives priority to microtask queue so start sending microtask queue callbacks in callstack 
// so promise callback is sent in callback
//this code is start ececuting and print on depends whether it is resolve or reject
//in our case it reslolve 
//producePromise.then((response)=>{  
    // console.log(response)
// }).catch(err=>console.log(err))
// so its print We can prepare gajar ka halwa
// now promisecallback is also popped from callstack

//after that event loop check whether callstack is empty or not
// then eventloop sent callBackQueue callback in callstack
// setTimeout starts execution starts 
// so it prints  on console 
// console.log('setTimeout is called')

// so that's the output the code is 


// script start
// ... 100 
// script end 
// We can prepare gajar ka halwa
// setTimeout is called

