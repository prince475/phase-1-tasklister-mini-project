document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDo(e.target.new_task_description.value) //target grabs a specific input new_todo and its value after submision
    form.reset()
})
  // your code here
});
function buildToDo (Todos){
  console.log(Todos)
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  li.textContent = `${Todos} `
  li.appendChild(btn)
  document.querySelector('#list').appendChild(li)
}
function handleDelete (e){
  e.target.parentNode.remove()
  }



  