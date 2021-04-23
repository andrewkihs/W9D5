const lsToDos = JSON.parse(localStorage.getItem('todos')) || [];

const ul = document.querySelector(".todos");
const form = document.querySelector(".add-todo-form");
const checkBox = document.querySelectorAll("input[type='checkbox']");


const addTodo = (e) => {
  e.preventDefault();
  const input = document.querySelector("input[name='add-todo']");
  const value = input.value;
  const todo = {"value": value, done: false };
  lsToDos.push(todo);
  localStorage.setItem("todos", JSON.stringify(lsToDos));
  populateList();
  form.reset();
}

const populateList = () => {

    if (ul.childNodes.length < 4) {
        console.log("populating")
        lsToDos.forEach((list, idx) => {
            const li = document.createElement("li");
            const label = document.createElement("label");
            label.innerText = list.value;
            const labelCheckbox = document.createElement("input");
            labelCheckbox.setAttribute("type", "checkbox");
            labelCheckbox.dataset.id = list.value;
            labelCheckbox.checked = list.done;
            labelCheckbox.innerText = "Done?"
            li.appendChild(label);
            li.appendChild(labelCheckbox);
            
            ul.appendChild(li);
        });
    } else {
        const newItem = lsToDos[lsToDos.length - 1];
        const li = document.createElement("li");
        
        const label = document.createElement("label");
        label.innerText = newItem.value;
        const labelCheckbox = document.createElement("input");
        labelCheckbox.setAttribute("type", "checkbox");
        labelCheckbox.checked = newItem.done;
        labelCheckbox.innerText = "Done?"
        
        li.appendChild(label);
        li.appendChild(labelCheckbox);

        ul.appendChild(li);
    }


}

form.addEventListener("submit", addTodo);

checkBox.forEach ( checkBoxEl => {
    checkBoxEl.addEventListener("click", (e) => {
        const checkId = e.target.dataset.id
        console.log(e.target);
    })
});


populateList();

export const todo = addTodo()