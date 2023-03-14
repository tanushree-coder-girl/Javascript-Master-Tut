// Clone nodes 


//The cloneNode() method of the Node interface returns a duplicate of the node on which this method was called. Its parameter controls if the subtree contained in a node is also cloned or not. Cloning a node copies all of its attributes and their values, including intrinsic (inline) listeners.

const li = document.createElement('li')
li.textContent = "New to do item created"

const list = document.querySelector('.ListOfTodo')
list.append(li)

const cloneList = li.cloneNode(true)
list.prepend(cloneList)
console.log(list)

