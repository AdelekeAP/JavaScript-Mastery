const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
},{
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';
  //GENERATING THE HTML USING JS

  todoList.forEach(function(todoObject, index){
    // const todoObject = todoList[i]; we do not need this line as we already have todoobject as a parameter
    const {name, dueDate} = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${index}, 1);    
      renderTodoList();
    " class="delete-todo-button">Delete</button>
     `;
    todoListHTML += html;

  })
 
  console.log(todoListHTML);

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
} 


function addTodo(){
  const inputElement =  document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
  //   name: name,
  // dueDate: dueDate
    name,
    dueDate,
});
  
  console.log(todoList);

  inputElement.value = '';

  renderTodoList();
}


//1st is to step data, 2nd is use data to generate the html