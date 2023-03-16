// Dom Element References
let heading1 = document.getElementById('heading1')
let heading2 = document.getElementById('heading2')
let heading3 = document.getElementById('heading3')
let heading4 = document.getElementById('heading4')
let heading5 = document.getElementById('heading5')
let heading6 = document.getElementById('heading6')
let heading7 = document.getElementById('heading7')
let heading8 = document.getElementById('heading8')
let heading9 = document.getElementById('heading9')

// callbacks => The syntax is difficult to understand and error handling may be hard to manage
// promise => The syntax is userfriendly and easy to understand and error handling is easier to manage

// using callback example
// function action (color, element, delay, onSuccessCallBack, onFailureCallBack){
//     setTimeout(() => {
//         if(element){
//             element.style.color = color
//             if(onSuccessCallBack) {
//                 onSuccessCallBack()
//             }
//         }else{
//             if(onFailureCallBack){
//                 onFailureCallBack();
//             }
//         }
       
//     }, delay);
// }

// callback Hell and pyramid of doom 
// action('red', heading1, 1000, ()=>{
//     action('green', heading2, 1000, ()=>{
//         action('blue', heading3, 1000, ()=>{
//             action('yellow', heading4, 1000, ()=>{
//                 action('violet', heading5, 1000, ()=>{
//                     action('pink', heading6, 1000, ()=>{
//                         action('purple', heading7, 1000, ()=>{
//                             action('skyblue', heading8, 1000, ()=>{
//                                 action('aqua', heading9, 1000, ()=>{
    
//                                 }, ()=>{alert('heading9 is not present')});
//                             }, ()=>{alert('heading8 is not present')});
//                         }, ()=>{alert('heading7 is not present')});
//                     }, ()=>{alert('heading6 is not present')});
//                 }, ()=>{alert('heading5 is not present')});
//             }, ()=>{alert('heading4 is not present')});
//         }, ()=>{alert('heading3 is not present')});
//     }, ()=>{alert('heading2 is not present')});
// }, ()=>{alert('heading1 is not present')});


// convert nested callbacks to flat code using promises
function action (color, element, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(element){
                element.style.color = color
                resolve();
            }else{
                reject(`Heading is not present`);
            }
        }, delay);
    })
}

//using promise chaining

// action('red', heading1, 1000).then(()=>{
//     return action('green', heading2, 1000)
// }).then(()=>{
//     return action('blue', heading3, 1000)
// }).then(()=>{
//     return action('yellow', heading4, 1000)
// }).then(()=>{
//     return action('violet', heading5, 1000)
// }).then(()=>{
//     return action('pink', heading6, 1000)
// }).then(()=>{
//     return action('purple', heading7, 1000)
// }).then(()=>{
//     return action('skyblue', heading8, 1000)
// }).then(()=>{
//     return action('aqua', heading9, 1000)
// })
// .catch((error)=>{
//     alert(error)
// })

// we can do more modifications in arrow function
action('red', heading1, 1000)
.then(()=> action('green', heading2, 1000))
.then(()=> action('blue', heading3, 1000))
.then(()=> action('yellow', heading4, 1000))
.then(()=> action('violet', heading5, 1000))
.then(()=> action('pink', heading6, 1000))
.then(()=> action('purple', heading7, 1000))
.then(()=> action('skyblue', heading8, 1000))
.then(()=> action('aqua', heading9, 1000))
.catch(error=>alert(error))