
// To do app 

const todoForm = document.getElementById('todoForm');
const input = document.querySelector('#todoForm input[type="text"]');
const todoList = document.querySelector('.ListOfTodo');


// Add a todo
todoForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    const newTodo = input.value; 

    if(newTodo){
        const newLi = document.createElement('li');

        const html = `
            <span class="text"> ${newTodo} </span>
            <div class="todo_btns">
                <button class="todo-btn done"> Done </button>
                <button class="todo-btn remove"> Remove </button>
            </div>
        `
    
        newLi.innerHTML = html;
    
        todoList.append(newLi);
        input.value = ""
    } else {
        alert('Please add todo')
    }
})


// done remove using event delegation 
todoList.addEventListener('click', (e)=> {
    if(e.target.classList.contains('remove')){
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove()
    }

    if(e.target.classList.contains('done')){
        const text = e.target.parentNode.previousElementSibling;
        text.style.textDecoration = "line-through"
    }
})