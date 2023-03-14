// Keypress Event 

const body = document.body;

// body.addEventListener('keypress', (e)=>{
//     console.log(e.key)
// })

// body.addEventListener('keyup', (e)=>{
//     console.log(e.key)
// })


// body.addEventListener('keydown', (e)=>{
//     console.log(e.key)
// })


const headline = document.querySelector('.headline');
headline.style.backgroundColor = "Yellow"
headline.style.padding = "1rem 2rem"
headline.style.margin = "2rem"

headline.addEventListener('mouseover', ()=> {
    console.log('mouse over event')
})

headline.addEventListener('mouseleave', ()=> {
    console.log('mouse leave event')
})

// keyup , input, change 

const input = document.getElementsByTagName('input')
input[0].addEventListener('input', (e)=> {
    console.log(e.target.value)
})

const input2 = document.getElementsByTagName('input')
input2[0].addEventListener('keyup', (e)=> {
    console.log(e.target.value)
})

const input3 = document.getElementsByTagName('input')
input2[0].addEventListener('change', (e)=> {
    console.log(e.target.value)
})


//Note: The input event is fired every time the value of the element changes. This is unlike the change event, which only fires when the value is committed, such as by pressing the enter key, selecting a value from a list of options, and the like.