const lsToDos = JSON.parse(localStorage.getItem('todos')) || [];

const ul = document.querySelector(".todos");
const form = document.querySelector(".add-todo-form");

const addTodo = (e) => {
  e.preventDefault();
  const input = document.querySelector("input[name='add-todo']");
  const value = input.value;
  const todo = {"value": value, done: false };
  lsToDos.push(todo);
  localStorage.setItem("todos", JSON.stringify(lsToDos));

  populateList();
  // reset form value
  form.reset();
}

const populateList = () => {
  console.log("populating")
  lsToDos.forEach(list => {
    //  make li
    const li = document.createElement("li");

    // make inner elements
    const label = document.createElement("label");
    label.innerText = list.value;
    const labelCheckbox = document.createElement("input");
    labelCheckbox.setAttribute("type", "checkbox");
    labelCheckbox.checked = list.done;
    labelCheckbox.innerText = "Done?"

    // append children to li
    li.appendChild(label);
    li.appendChild(labelCheckbox);

    ul.appendChild(li);
  });
}

form.addEventListener("submit", addTodo);

export const todo = addTodo()