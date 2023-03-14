// some old methods to support poor IE 

// appendChild 
// insertBefore 
// replaceChild 
// removeChild

const ullist = document.querySelector('.ListOfTodo');
const li = document.createElement('li')
li.textContent = "this is li content"

// append Child
// ullist.appendChild(li)

const firstListItem = ullist.querySelector('li')

// insertBefore
// ullist.insertBefore(li, firstListItem)

// replaceChild
// ullist.replaceChild(li, firstListItem)

//removeChild
// ullist.removeChild(firstListItem)
