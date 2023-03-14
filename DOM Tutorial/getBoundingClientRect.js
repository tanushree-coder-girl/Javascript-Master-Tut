// how to get the dimensions of the element  

// height width 

const sectionTodo = document.querySelector('#addToDoSEction');
// console.log(sectionTodo.getClientRects())
const info = sectionTodo.getBoundingClientRect();
console.log(info)
console.log(info.width)