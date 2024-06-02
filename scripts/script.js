const inputElem = document.querySelector(".input-elem");
const addBtn = document.querySelector(".add-button");
const todoOutput = document.querySelector(".todo-output");
const dateInput = document.querySelector(".date-input");

const todoList = JSON.parse(localStorage.getItem('todoList')) || [
];

updateOutput()

function addTodo() {
  const name = inputElem.value;
  const dueDate = dateInput.value;

  if (name === "") {
    alert("input your todo");
    return;
  } else if (dueDate === "") {
    alert("input due date!")
    return;
  }

  todoList.push(
    {
      name,
      dueDate,
    },
  );

  inputElem.value = "";
  dateInput.value = "";
  
  updateOutput();
  saveToStorage();
}

function updateOutput () {
  let todoListHTML = "";

  todoList.forEach((todoObject, i) => {
    const { name, dueDate } = todoObject;
    const html = `
      <div class="output">
        <p class="todo-added">${name}</p>
        <p class="todo-added">${dueDate}</p>
        <button id="update-btn">Update</button>
        <button id="remove-btn" onclick="
          todoList.splice(${i}, 1);
          updateOutput();
          saveToStorage();
        ">Remove</button>
      </div>
    `;
    todoListHTML += html;
  });
  todoOutput.innerHTML = todoListHTML;
}

function saveToStorage() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}