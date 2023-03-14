// Event object 

// The event object contains a number of properties that describe the event that occurred

const btn1 = document.querySelector('.btn1');
btn1.addEventListener('click', function(event){
    console.log(event)
})

// when any eventlistener added on any html element 
// js engine execute codes line by line 
// browser has js engine and some extra features 
// browser = js Engine + Web Api's 

// when  browser detects that any event is performed by user 
// then web api's ek callback function js engine ko degi 
// callback function ke sath jo event listen hua uski information bhi degi 

// ye info hme object m milta h usi ko event object kehte hai


// const buttons = document.querySelectorAll('.buttons button');
// for (const btn of buttons) {
//     btn.addEventListener('click', function(e){
//         console.log(e)
//         console.log(e.target)
//         console.log(e.currentTarget)

//     })
// }


const buttons2 = document.querySelectorAll('.buttons button');
for (const btn of buttons2) {
    btn.addEventListener('click', (e) => {
        console.log(e)
        // console.log(e.target)
        console.log(e.currentTarget.textContent)

    })
}


