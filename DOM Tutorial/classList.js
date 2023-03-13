const header = document.querySelector('header')
console.log(header.classList) // get class
header.classList.add('new_class') //add class
header.classList.remove('myClass') //remove class

//check if class present in element or not 
console.log(header.classList.contains('headerPart'))

// toggle class 
header.classList.toggle('toggleThisClass') 
console.log(header.classList)
header.classList.toggle('toggleThisClass') 
console.log(header.classList)

const body = document.body
body.classList.add('bg-dark')
console.log(body.classList)