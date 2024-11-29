let list = document.getElementById("todo-list");
function populateTodoList(todos) {
  
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  for(let todo in todos){
    list.innerHTML += `<li>${todos[todo].task}. <input type="checkbox" class="check-list"}> <button type="">🗑️</button></li>`;
  }
}
document.getElementById("submit").addEventListener("click", addNewTodo);
// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let new_obj = {};
  let input_text = document.querySelector("#input-text");
  new_obj.task = input_text.value;
  new_obj.completed = false;
  todos.push(new_obj);
  list.innerHTML = "";
  populateTodoList(todos);

}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  let check_list = document.querySelectorAll('.check-list'); // input[type="checkbox"]
  check_list.forEach((checkbox, index) => {
    if (checkbox.checked) {
      checkbox.parentElement.remove();
      todos.splice(index, 1); // Remove from the todos array
    }
  });
  }



