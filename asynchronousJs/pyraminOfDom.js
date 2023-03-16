// callback in asynchronous programming 
// callback Hell and pyramid of doom 


// The phenomenon which happens when we nest multiple callbacks within a function is called a callback hell. The shape of the resulting code structure resembles a pyramid and hence callback hell is also called the “pyramid of the doom”. It makes the code very difficult to understand and maintain.

let heading1 = document.getElementById('heading1')
let heading2 = document.getElementById('heading2')
let heading3 = document.getElementById('heading3')
let heading4 = document.getElementById('heading4')
let heading5 = document.getElementById('heading5')
let heading6 = document.getElementById('heading6')
let heading7 = document.getElementById('heading7')
let heading8 = document.getElementById('heading8')
let heading9 = document.getElementById('heading9')


// this is called pyramid of dom
setTimeout(() => {
    heading1.style.color = "red"
    setTimeout(() => {
        heading2.style.color = "green"
        setTimeout(() => {
            heading3.style.color = "blue"
            setTimeout(() => {
                heading4.style.color = "yellow"
                setTimeout(() => {
                    heading5.style.color = "orange"
                    setTimeout(() => {
                        heading6.style.color = "violet"
                        setTimeout(() => {
                            heading7.style.color = "gray"
                            setTimeout(() => {
                                heading8.style.color = "purple"
                                setTimeout(() => {
                                    heading9.style.color = "pink"
                                }, 1000);
                            }, 2000);
                        }, 1000);
                    }, 2000);
                }, 1000);
            }, 2000);
        }, 1000);
    }, 2000);
}, 1000);



