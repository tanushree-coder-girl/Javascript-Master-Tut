// Callbacks in General 

// A callback is a function passed as an argument to another function. This technique allows a function to call another function. A callback function can run after another function has finished.

// function myFunction (callback){
//     console.log('myFunction')
//     callback();
// }

// myFunction(() => {
//     console.log("callback func")
// })


// callback fun example -2 

// function getNumbers (num1, num2, callback){
//     console.log('get two numbers');
//     let ans = callback(num1, num2)
//     return ans
// }
//  const performSomeAction = (number1, number2) =>  number1 + number2;

// const result = getNumbers(2,5, performSomeAction)
// console.log(result)

// callback fun example -3
function getNum(num1, num2, onSuccess, onFailure){
    console.log(typeof num1)
    if(typeof num1 !== "string" && typeof num2 !== 'string'){
        onSuccess(num1, num2)
    }else{
        onFailure();
    }
}

getNum(2,8, (number1, number2)=>{
    console.log(number1 + number2)
}, ()=>{console.log('please pass numbers only')})