// Seleção de elementos
const todoForm = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo-input')
const todoList = document.querySelector('#todo-list')
const editForm = document.querySelector('#edit-form')
const editInput = document.querySelector('#edit-input')
const cancelEditBtn = document.querySelector('#calcel-edit-btn')

//Funções
const saveTodo = (text) =>{
    const todo = document.createElement('div')
    todo.classList.add('todo')

    const todoTitle = document.createElement('h3')
    todoTitle.innerText = text
    todo.appendChild(todoTitle)

    const doneBtn = document.createElement('button')
    doneBtn.classList.add('finish-todo')
    doneBtn.innerHTML = '<ion-icon name="checkmark-outline"></ion-icon>'
    todo.appendChild(doneBtn)

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-todo')
    editBtn.innerHTML = '<ion-icon name="pencil"></ion-icon>'
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('remove-todo')
    deleteBtn.innerHTML = '<ion-icon name="close"></ion-icon>'
    todo.appendChild(deleteBtn)

    todoList.appendChild(todo)

    todoInput.value = ''
    todoInput.focus()
}

//Eventos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const inputValue = todoInput.value

    if(inputValue){
        saveTodo(inputValue)
    }
})

document.addEventListener('click', (e)=>{
    const targetEl = e.target
    const parentEl = targetEl.closest('div')

    if(targetEl.classList.contains('finish-todo')){
        parentEl.classList.toggle('done')
    }

    else if(targetEl.classList.contains('remove-todo')){
        parentEl.remove()
    }

    else if(targetEl.classList.contains('edit-todo')){
        toggleForms()
    }
})
