const inputbox = document.querySelector("input");
console.log(input);
const listcontainer = document.getElementsByClassName("listContainer")[0];
const span = document.getElementsByClassName("span");
const button = document.getElementsByClassName("button")[0];
console.log(button);
function AddTask() {
  if (inputbox.value !== "") {
    let li = document.createElement("li");
    li.textContent = inputbox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    inputbox.value = ""; // Pulisce l'input dopo aver aggiunto il task
  } else {
    alert("Please enter a task.");
  }
  savedata();
}

button.addEventListener("click", AddTask);

listcontainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    savedata();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    savedata();
  }
});

function savedata() {
  localStorage.setItem("data", listcontainer.innerHTML);
  //localStorage.removeItem("data", listcontainer.innerHTML);
}
function showTask() {
  listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();
