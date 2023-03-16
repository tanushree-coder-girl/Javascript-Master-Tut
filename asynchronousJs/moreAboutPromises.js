// Promise.resolve
// Promise.chaining 

// const myPromise = Promise.resolve(5);

Promise.resolve(1).then((val)=>{
    console.log(val)
})


// then method hmesha promise return krta hai 
function myFun(){
    return new Promise((resolve, reject)=>{
        resolve('hello world')
    })
}

myFun().then(res=>{
        console.log(res)
        // by default it will returns undefined 
        // return undefined
        return res+="in js tut"
        // it does not return string it returns promise so internally in means 
        // Promise.resolve(res+="in js tut")
    }).then((result)=>{
        console.log(result)
    })



//this then().then().then()
// it is call promise chaining 
// Promises are useful when you have to handle more than one asynchronous task, one after another. 
// for that we use promise chaining 

// we can perform an operation after a promise is resloved using methods then(), catch() and finally()

// Promise => Fulfil or reject 
// if fulfil => .then 
// if reject => .catch 

// .then .catch are async actions

// Promise.resolve(10).then((res)=>console.log(res)).catch(err=>console.log(err)).finally("i am running always")


// Then = more about then method 

// the then method  is used with the callback when the promise is successfully fulfilled or rejected

// promiseObj.then(onFulfilled, onRejected);

// you can chain multiple then() method with the promises

// promiseObj.then((res)=>{
  //  console.log(res)
// }).then(()=>{
// console.log('you can call multiple functions this way')
// })

// Catch = more about catch method 

// The catch() method is used with the callback when the promise is rejected or ifan error occurs 

// promiseObj.then((res)=>{
  //  console.log(res)
// }).catch((err)=>{
// console.log('err')
// })
