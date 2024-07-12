const form = document.getElementById("addTaskForm");
const taskList = document.getElementById("taskList");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTask = document.getElementById("newTask").value;
    if (newTask.trim() === "") return;
    addTask(newTask);
    form.reset();
});

function addTask(task) {
    const li = document.createElement("li");
    li.innerHTML = `<span>${task}</span> <button class="delete">Delete</button>`;
    taskList.appendChild(li);
    bindDeleteEvents();
}

function bindDeleteEvents() {
    const deleteButtons = document.querySelectorAll("#taskList .delete");
    deleteButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const li = e.target.parentNode;
            taskList.removeChild(li);
        });
    });
}

bindDeleteEvents();
