// Run when the page loads
window.onload = function () {
  loadTasks();
};

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (!task) return;

  const tasks = getTasksFromStorage();
  tasks.push(task);  // Add to array
  saveTasksToStorage(tasks);  

  input.value = "";
  displayTasks();
}

function deleteTask(index) {
  const tasks = getTasksFromStorage();
  tasks.splice(index, 1);  
  saveTasksToStorage(tasks);
  displayTasks();
}

function resetTasks() {
  localStorage.removeItem("tasks");  
  displayTasks();
}

function getTasksFromStorage() {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
}

function saveTasksToStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";  // Clear current list

  const tasks = getTasksFromStorage();
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    li.onclick = () => deleteTask(index);  // Delete on click
    list.appendChild(li);
  });
}

function loadTasks() {
  displayTasks();
}
window.onload = function () {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }

  document.getElementById("themeToggle").onclick = function () {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  };

  // Load any existing tasks
  loadTasks();
};
window.onload = function () {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }

  document.getElementById("themeToggle").onclick = function () {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  };

  // Load any existing tasks
  loadTasks();
};
