//============ Hamburger menu =================
let menuIcon = document.getElementById("hamburger");
let navlinks = document.getElementById("nav");
let menuHandler = function () {
  if (navlinks.style.display === "none") {
    navlinks.style.display = "block";
  } else {
    navlinks.style.display = "none";
  }
};
menuIcon.addEventListener("click", menuHandler);

//======== Fetching from LocalStorage =========
let todoContainer = document.getElementById("todoContainer");
let todoArray = JSON.parse(localStorage.getItem("todo"));
function showTasks() {
  if (todoArray === null) {
    todoArray = [];
    todoContainer.innerHTML = "<h2>No Todos</h2>";
  } else {
    tasks = "";
    for (let i = 0; i < todoArray.length; i++) {
      tasks += `<div class="todo">
            <div class="taskTxt">
        <p>${todoArray[i]}</p>
        </div>
        <div class="dltBtn">
        <button id="${i}" onClick="deleteTask(this.id)">
        Delete
        </button>
        </div>
        </div>`;
    }
    todoContainer.innerHTML = tasks;
  }
}
showTasks();

//============= Sending data to localStorage =====

let form = document.getElementById("inputForm");
let inputBox = document.getElementById("inputBox");

let savebtnHandler = function(event) {
  event.preventDefault();
  let inputTxt = inputBox.value;
  todoArray.push(inputTxt);
  console.log(inputTxt);
  localStorage.setItem("todo", JSON.stringify(todoArray));
  showTasks();
};

form.addEventListener("submit", savebtnHandler);

//=============== delete function=========
function deleteTask(id) {
  console.log("deleting..." + id);
  todoArray.splice(id, 1);
  localStorage.setItem("todo", JSON.stringify(todoArray));
  showTasks();
}
