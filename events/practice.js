// little practice with events in js 

// const allBTns = document.querySelectorAll('.buttons button')
// console.log(allBTns)
// allBTns.forEach((btn)=>{
//     btn.addEventListener('click', (e)=>{
//         e.target.style.color = 'red'
//     })
// })



const body = document.body;
const changeColorBtn = document.getElementById('btn3');
const heading = document.getElementsByTagName('h1');

const generateColor = () => {
    const red = Math.floor(Math.random() * 246);
    const green = Math.floor(Math.random() * 246);
    const blue = Math.floor(Math.random() * 246);
    const rgb = `rgb(${red} ${green} ${blue})`
    return rgb
}
changeColorBtn.addEventListener('click', ()=>{
    const randomColor = generateColor();
    body.style.backgroundColor = randomColor
    heading[0].textContent = `The color of bg is : ${randomColor}`

})