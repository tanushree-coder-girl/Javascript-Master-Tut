// callback Hell and pyramid of doom 

// The phenomenon which happens when we nest multiple callbacks within a function is called a callback hell. The shape of the resulting code structure resembles a pyramid and hence callback hell is also called the “pyramid of the doom”. It makes the code very difficult to understand and maintain.09-Nov-2022

// Nesting of callbacks can lead to an unreadable and not easy to manageable codebase commonly known as callback hell in Node. js or pyramid of doom. Node js callback hell can be avoided using Promises and async / await. Splitting of the functions and by writing comments can also be used to avoid callback hell in  js.


let heading1 = document.getElementById('heading1')
let heading2 = document.getElementById('heading2')
let heading3 = document.getElementById('heading3')
let heading4 = document.getElementById('heading4')
let heading5 = document.getElementById('heading5')
let heading6 = document.getElementById('heading6')
let heading7 = document.getElementById('heading7')
let heading8 = document.getElementById('heading8')
let heading9 = document.getElementById('heading9')

function action (color, element, delay, onSuccessCallBack, onFailureCallBack){
    setTimeout(() => {
        if(element){
            element.style.color = color
            if(onSuccessCallBack) {
                onSuccessCallBack()
            }
        }else{
            if(onFailureCallBack){
                onFailureCallBack();
            }
        }
       
    }, delay);
}

// callback Hell and pyramid of doom 
// this is called callback hell or pyramid of dom 
action('red', heading1, 1000, ()=>{
    action('green', heading2, 1000, ()=>{
        action('blue', heading3, 1000, ()=>{
            action('yellow', heading4, 1000, ()=>{
                action('violet', heading5, 1000, ()=>{
                    action('pink', heading6, 1000, ()=>{
                        action('purple', heading7, 1000, ()=>{
                            action('skyblue', heading8, 1000, ()=>{
                                action('aqua', heading9, 1000, ()=>{
    
                                }, ()=>{alert('heading9 is not present')});
                            }, ()=>{alert('heading8 is not present')});
                        }, ()=>{alert('heading7 is not present')});
                    }, ()=>{alert('heading6 is not present')});
                }, ()=>{alert('heading5 is not present')});
            }, ()=>{alert('heading4 is not present')});
        }, ()=>{alert('heading3 is not present')});
    }, ()=>{alert('heading2 is not present')});
}, ()=>{alert('heading1 is not present')});
