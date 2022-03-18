const todoList = document.querySelector(".todo-list")
const addBtn = document.querySelector(".todo-btn")
const input = document.querySelector(".todo-input")

let todos = []

function addTodo(text) {
  const todo = {
    text,
    done: false,
    id: `${Math.random()}`
  }

  todos.push(todo)
}

function removeTodo(id) {
  todos.forEach(todo => {
    if (todo.id === id) {
      todo.done = true
    }
  })
}

function render() {
  html = ''

  todos.forEach(todo => {
    if (todo.done) {
      return
    } else {
      html += `<div>
                ${todo.text}
                <button data-id='${todo.id}'>Сделано!</button>
              </div>`
    }
  })

  todoList.innerHTML = html
}

addBtn.addEventListener('click', () => {
  if (input.value) {
    const text = input.value
    input.value = ''

    addTodo(text)
    render()
  }

  return
})

todoList.addEventListener('click', (e) => {
  if (e.target.tagName != 'BUTTON') {
    return
  }

  const id = e.target.dataset.id

  removeTodo(id)
  render()
})

render()