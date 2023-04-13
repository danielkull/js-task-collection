const state = {
  filter: "all",
  todos: [
    { description: "Learn HTML", done: true },
    { description: "Learn CSS", done: false },
    { description: "Learn JS", done: false },
  ],
};

// ===== Handling of Storage: From and to =======
const updateStorage = () => {
  localStorage.setItem("todoAppData", JSON.stringify(state));
};
const loadStorage = () => {
  return JSON.parse(localStorage.getItem("todoAppData"));
};
// ===== END: Handling of Storage: From and to =====

const list = document.querySelector("#list");
const radioSection = document.querySelector(".radio-field");
const addTodosBtn = document.querySelector("#add-todo");
const newTodoText = document.querySelector("#new-todo");
const removeDoneTodos = document.querySelector("#remove-done-todos");

function renderTodos() {
  list.innerHTML = ""; //Clean up for a fresh start
  const storage = loadStorage(); //load storage for state if available
  if (storage !== null) {
    state.filter = storage.filter;
    state.todos = storage.todos;
  }

  // Render todos list elements
  state.todos.forEach((todo) => {
    addNewTodoListItem(todo);
  });
}

renderTodos();

// ===== Beginn: Listen to changes on page =====

list.addEventListener("change", (e) => {
  const checkbox = e.target;
  const liElement = checkbox.parentElement;
  const todo = liElement.todoObj;
  todo.done = checkbox.checked;
  updateStorage();
});

radioSection.addEventListener("click", (e) => {
  const radioButton = e.target;
  state.filter = radioButton.id;
  updateStorage();
  filterTodoList(radioButton.id);
});

addTodosBtn.addEventListener("click", () => {
  if (validText(newTodoText.value)) {
    const newText = newTodoText.value.trim();
    const newTodoTask = addNewTodoToState(newText);
    addNewTodoListItem(newTodoTask, newText);
    updateStorage();
    newTodoText.value = "";
  }
});

removeDoneTodos.addEventListener("click", () => {
  deleteElement();
});

// ===== End: Listen to changes on page =====

function addNewTodoToState(newText) {
  const newTask = { description: newText, done: false };
  state.todos.push(newTask);
  const lastStateIndex = state.todos.length - 1;
  return state.todos[lastStateIndex];
}

function addNewTodoListItem(todo, newText) {
  const todoLi = document.createElement("li");
  todoLi.todoObj = todo;

  let textId = "";
  if (newText === undefined) {
    textId = generateId(todo.description);
  } else {
    textId = generateId(newText);
  }

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.setAttribute("id", textId);
  checkbox.checked = todo.done;

  todoLi.appendChild(checkbox);

  const todoText = document.createTextNode(todo.description);
  const todoTextLabel = document.createElement("label");
  todoTextLabel.setAttribute("for", textId);
  todoTextLabel.appendChild(todoText);
  todoLi.appendChild(todoTextLabel);

  list.appendChild(todoLi);
}

function filterTodoList(filterChoice) {
  const listArr = list.childNodes;
  listArr.forEach((listItem) => {
    const checkboxStatus = listItem.todoObj.done;
    switch (filterChoice) {
      case "all":
        listItem.removeAttribute("hidden", "");
        break;
      case "open":
        checkboxStatus
          ? listItem.setAttribute("hidden", "")
          : listItem.removeAttribute("hidden", "");
        break;
      case "done":
        !checkboxStatus
          ? listItem.setAttribute("hidden", "")
          : listItem.removeAttribute("hidden", "");
        break;
    }
  });
}

function deleteElement() {
  const maxListIndex = list.childNodes.length - 1;
  const listEl = list.childNodes;

  for (let i = maxListIndex; i >= 0; i--) {
    const listCheckboxStatus = listEl[i].todoObj.done;
    if (listCheckboxStatus) {
      state.todos.splice([i], 1);
      updateStorage();
      listEl[i].remove();
    }
  }
}

function validText(todoText) {
  return checkForTextLength(todoText) && checkForExistingValues(todoText);
}

function checkForTextLength(todoText) {
  return todoText.length >= 5;
}

//Checks for existing, case insenstive Todo Tasks
function checkForExistingValues(text) {
  const modfiText = convertToLowerCase(text);
  for (let i = 0; i < state.todos.length; i++) {
    const existingText = convertToLowerCase(state.todos[i].description);

    if (modfiText === existingText) {
      return false;
    }
  }
  return true;
}

function convertToLowerCase(text) {
  return text.toLocaleLowerCase();
}

function generateId(value) {
  return value.replace(/\s/g, "-").slice(-5) + randomNumber();
  //Take last 5 characters + a random number
}

function randomNumber() {
  return Math.floor(Math.random() * 100);
}
