//  Intro to promise

// promise previously known as future value

// A Promise represents something that is eventually fulfilled. A Promise can either be rejected or resolved based on the operation outcome. ES6 Promise is the easiest way to work with asynchronous programming in JavaScript.


// promise is a good way to handle asynchronous operation is successfully completed or not. 

// A promise may have one of three state
// 1. Pending => process is not complete
// 2. Fulfilled => operation is successful 
// 3. Rejected => an error occurs 

// The Promise object supports two properties: state and result. While a Promise object is "pending" (working), the result is undefined. When a Promise object is "fulfilled", the result is a value. When a Promise object is "rejected", the result is an error object.

// To create a promise object we use the promise constructor 

// let promise = new Promise(function(resolve, reject){ // do something });

// if the promise returns successfully , the resolve() function is called.
// and if an error occurs , the reject() function is called


// promise produce 

const bucket = ['rice', 'salt', 'vegetables', 'tea']
const friedRicePromise = new Promise(function(resolve, reject) {
    if(bucket.includes('rice') && bucket.includes('salt') && bucket.includes('vegetables')){
        resolve("fried rice is ready")
    }else{
        reject('oops items is not present in the bucket')
    }
})


console.log(friedRicePromise)
//output :  Promise {<fulfilled>: 'fried rice is ready'}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: "fried rice is ready"

// consumre - how to consure promise

// 1st way with error exception as 2nd argument 
// friedRicePromise.then((result)=>{
//     console.log(result);
// }, (error)=>{console.log(error)})


// 2nd way of consume promise 

friedRicePromise.then((result)=>{
    // then calls when promise is resolve
    console.log(result);
}).catch((err)=>{
    // catch block calls when promise reject
    console.log(err)
})