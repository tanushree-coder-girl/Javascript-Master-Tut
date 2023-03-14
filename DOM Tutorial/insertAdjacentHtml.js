// elem.insertAdjacentHTML(where to place , what to place);

// beforeBegin 
// afterBegin 
// beforeEnd 
// afterEnd 

const ul = document.querySelector('.ListOfTodo');

// append item at starting of element
ul.insertAdjacentHTML('afterBegin', '<li> Add new todo item using insertAdjacentHtml afterBegin</li>')

// prepend item at end of element
ul.insertAdjacentHTML('beforeEnd', '<li> Add new todo item using insertAdjacentHtml beforeEnd </li>')

// before add item before start of element
ul.insertAdjacentHTML('beforeBegin', '<li> Add new todo item using insertAdjacentHtml beforeBegin </li>')

// after add item after end of element
ul.insertAdjacentHTML('afterEnd', '<li> Add new todo item using insertAdjacentHtml afterEnd </li>')


