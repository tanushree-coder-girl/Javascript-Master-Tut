// Add new html elements to the page 

const ul = document.querySelector('.ListOfTodo')
console.log(ul)
console.log(ul.innerHTML)
// ul.innerHTML = '<li> New todo </li>'
// console.log(ul.innerHTML)

ul.innerHTML += '<li> New todo </li>'
ul.innerHTML += '<li> one more New todo </li>'
console.log(ul.innerHTML)

// when you should use innerHTML when not 

//The innerHTML property can be used to write the dynamic html on the html document. It is used mostly in the web pages to generate the dynamic html such as registration form, comment form, links etc.

//It is very slow because as inner HTML already parses the content even we have to parse the content again so that's why it takes time. When we have used the event handlers then the event handlers are not automatically attached to the new elements created by innerHTML.


// jab hume kisi element ki completely html changes krni ho to tb innerHTML ka use krna chahiye par html append krne k lia use nhi krna chahiye



