const form = document.querySelector(".container__form");
const input = document.querySelector(".container__form__input");
const list = document.querySelector(".container__list");
const deleteButton = document.querySelectorAll(
  ".container__list__item__button"
);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  createListItem(input.value);
  deleteListItem();
  input.value = "";
});

function createListItem(inputValue) {
  const li = document.createElement("li");
  const text = document.createElement("p");
  const button = document.createElement("button");

  text.classList.add("container__list__item__text");
  text.innerText = inputValue;

  button.classList.add("container__list__item__button");
  button.innerText = "x";

  li.classList.add("container__list__item");
  li.appendChild(text);
  li.appendChild(button);

  list.appendChild(li);
  saveList();
}

function deleteListItem() {
  const todoList = document.querySelectorAll(".container__list__item");

  todoList.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.classList.contains("container__list__item__button")) {
        item.remove();
        saveList();
      }
    });
  });
}

function saveList() {
  const li = document.querySelectorAll(".container__list__item__text");
  let todo = [];

  for (let item of li) {
    let text = item.innerText;

    todo.push(text);
  }

  const listJSON = JSON.stringify(todo);
  localStorage.setItem("tarefas", listJSON);
}

window.onload = function getSavedList() {
  const savedItens = localStorage.getItem("tarefas");

  const savedItensArray = JSON.parse(savedItens);

  savedItensArray.forEach((item) => {
    createListItem(item);
    deleteListItem();
  });
};
