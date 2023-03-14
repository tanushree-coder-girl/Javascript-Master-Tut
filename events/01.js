// intro to events 

// click is the most important event 


// https://developer.mozilla.org/en-US/docs/Web/Events
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

//https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event

// ways to add events 

// 1. directly trigger is html element 
// for example =>     <button onclick="alert('i am clicked')"> Click me</button>

// 2. inside html element like onClick 
// for example =>     <button onclick="myFun()"> onClick Btn </button>

// 3. using element.event  = function(){}

//4. using addEventListener 

function myFun(){
    alert('i am calling')
}

// 3rd  way
const myBtn = document.getElementById('myBtn');
myBtn.onclick = function () {
    alert('btn with id mybtn is clicked')
    console.dir(myBtn)
}

// 4th way using addEventListener
const button = document.getElementById('myBtn2');
button.addEventListener('click', function(){
    alert('calling a function using eventlistener')
})

// addEventListener using arrow function 
button.addEventListener('click', () => {
    alert('calling a function using arrow function')
})

// write function outside 
function fun(){
    alert('hello world')
}
button.addEventListener('click', fun)


const btn = document.getElementById('getValueOfThis');

// This keyword inside eventListener callback 
btn.addEventListener('click', function () {
    console.log(this)   //output => <button id="getValueOfThis"> Get value of This </button>
})

btn.addEventListener('click', () => {
    console.log(this)   // window object
})


// arrow function ka khud k this nhi hota wo apne surrounding s this leta hai

