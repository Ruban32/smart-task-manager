function addTask() {

  const input = document.getElementById("taskInput");

  const taskText = input.value.trim();

  if (taskText === "") {
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");

  span.innerText = taskText;

  span.onclick = function () {
    span.style.textDecoration = "line-through";
  };

  const deleteBtn = document.createElement("button");

  deleteBtn.innerText = "Delete";

  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(span);

  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
