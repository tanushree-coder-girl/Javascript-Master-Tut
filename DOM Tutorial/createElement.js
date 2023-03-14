// document.createElement 
// document.createTextNode 
// append 
    // bad m add krega
// prepend 
    // phle add krega
// remove 
    // remove kr dega
// before 
    // element k outside start m add krega
// after 
    // element k outside end m add krega


const li = document.createElement('li');

// one way to add text node 
// const liText = document.createTextNode('Todo item append')
// li.append(liText)
// console.log(li) 


// simple way to add text 
li.textContent = "Todo items textcontent"

//ul
const list = document.querySelector('.ListOfTodo')

// append li in ul
// list.append(li)  // append end m add krta hai element k
// console.log(list)

// prepend  = prepend starting m add krta hai element k
// list.prepend(li)
// console.log(list)

// remove 
// const liItems = document.querySelectorAll('.ListOfTodo li')[0];
// liItems.remove();
// console.log(list)


// before 
// element s phle outside add krega
// list.before(li)
// console.log(list)

// after 
// element k bad outside add krega
// list.after(li)
// console.log(list)


