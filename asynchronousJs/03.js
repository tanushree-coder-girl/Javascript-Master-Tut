//  SetInterval() and create little project with SetInterval 

// The setInterval() function is commonly used to set a delay for functions that are executed again and again, such as animations. You can cancel the interval using clearInterval() . If you wish to have your function called once after the specified delay, use setTimeout() 

// 1000 milisecond is equal to 1 second 

// console.log('script start');

// let date = new Date();
// setInterval(() => {
//     date = new Date().getSeconds()
//     console.log(date)
// }, 1000);

// setInterval(() => {
//     let total = 0;
//     for (let i = 0; i < 100000000; i++) {
//         total += i
//     }
//     console.log(total)
//     // console.log(Math.random())
// }, 500);

// console.log('script end')

// Note => Not appreciably. You'd have to be doing something extremely heavy in each interval for it to affect performance, and that would be true without setInterval involved at all.


// small project
// change background of body in every 1 second

const section = document.querySelector('section');
const button = document.querySelector('button');


section.style.height = "30vh"
section.style.width = "40%"
section.style.display = "flex"
section.style.justifyContent = "center"
section.style.alignItems = "center"
section.style.margin = "2rem auto"
section.style.border = "2px solid black"
button.style.padding = '1rem 2rem'

const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`
}

const intervalId = setInterval(() => {
    const randomColorGenerate = randomColor();
    section.style.backgroundColor = randomColorGenerate;
}, 1000);

button.addEventListener('click', ()=>{
    clearInterval(intervalId);
    button.textContent = section.style.backgroundColor
})


// What is Callback Queue
//A callback queue is a queue of tasks that are executed after the current task. The callback queue is handled by the JavaScript engine after it has executed all tasks in the microtask queue

