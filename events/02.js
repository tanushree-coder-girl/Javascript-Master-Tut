//Add Events on multiple elements


const buttons = document.querySelectorAll('.buttons button');

for (const button of buttons) {
    // console.log(button)
    button.addEventListener('click', function(){
        console.log(this)
    })
}

for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];
    element.addEventListener('click', function(){
        console.log(`We clicked ${this.textContent}`)
    })
    
}

buttons.forEach(function(button){
    button.addEventListener('click',function(){
        console.dir(this.outerHTML)
    })
})