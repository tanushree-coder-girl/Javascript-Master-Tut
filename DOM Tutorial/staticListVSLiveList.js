// Static list vs live list

// querySelectorAll provides static list 
// getElementsBySomething provides us live list 

const ul = document.querySelector('.ListOfTodo')
const li = ul.querySelectorAll('li')
// const li = ul.getElementsByTagName('li')

const newLi = document.createElement('li')
newLi.textContent = "new li added";
ul.append(newLi)

console.dir(li)



//Note: HtmlCollections in the HTML DOM are assumed to be live meaning that they are automatically updated when the underlying document is changed.

// note: static list is always static it does not updated on append new elements in dom ... 

