const taskList = document.getElementById("taskList");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const text = document.getElementById("taskInput").value.trim();
  const time = document.getElementById("taskTime").value;
  if (!text) return;

  tasks.push({ text, time, completed: false });
  saveTasks();
  renderTasks();
  document.getElementById("taskInput").value = "";
  document.getElementById("taskTime").value = "";
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function clearAll() {
  tasks = [];
  saveTasks();
  renderTasks();
}

function filterTasks(type) {
  renderTasks(type);
}

function renderTasks(filter = "all") {
  taskList.innerHTML = "";

  tasks.forEach((task, i) => {
    if (filter === "completed" && !task.completed) return;
    if (filter === "pending" && task.completed) return;

    const li = document.createElement("li");
    li.className = "task" + (task.completed ? " done" : "");

    const label = document.createElement("label");
    label.innerText = `${task.text} ${task.time ? `⏰ ${task.time}` : ""}`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.onchange = () => toggleComplete(i);

    const del = document.createElement("button");
    del.innerText = "✖";
    del.onclick = () => deleteTask(i);

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(del);
    taskList.appendChild(li);
  });
}

renderTasks();
