// Get and set Attributes 

const link = document.querySelector('a');
console.log(link)

console.log(link.getAttribute('href'))

// console.log(link.getAttribute('href').slice(1))
link.setAttribute('href', "https://javascript4dev.blogspot.com/")
console.log(link.getAttribute('href'))

// const input = document.querySelector('.signUpForm input')
// console.log(input.getAttribute('type'))