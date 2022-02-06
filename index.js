
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

if (tasks !== []) tasks.forEach(TaskElement);

function TaskElement({ index, description, completed }) {
    let li;
    if (completed == "false") {
        li = `<li><input type="checkbox" onclick="checkTask(this);"><span class="task">${description}</span><button class="delete-btn" onclick="deleteTask(this);"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
            </svg></button><p style="display: none">${index}</p></li>`;
    } else {
        li = `<li><input type="checkbox" checked onclick="checkTask(this);"><span class="task checked">${description}</span><button class="delete-btn" onclick="deleteTask(this);"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
            </svg></button><p style="display: none">${index}</p></li>`;
    }
    document.querySelector("#task-list").innerHTML += li;
}

let inputTask = document.querySelector("#input-task");
let addTaskButton = document.querySelector("#add-task-button");
let taskList = document.querySelector("#task-list");

addTaskButton.addEventListener("click", function() {
    if (inputTask.value == "") {
        console.log("Mohon Isi Name Task Terlebih Dahulu");
    } else {
        let index = new Date().getTime()
        let text = inputTask.value;
        let completed = "false";

        tasks.push({
            index: index,
            description: text,
            completed: completed,
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));

        let li = `<li><input type="checkbox" onclick="checkTask(this);"><span class="task">${text}</span><button class="delete-btn" onclick="deleteTask(this);"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
            </svg></button><p style="display: none">${index}</p></li>`;
        taskList.innerHTML += li;
    }

    inputTask.value = "";
});

function deleteTask(task) {
    let index = tasks.find((t) => t.index == task.nextElementSibling.innerText);
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    task.parentNode.remove();
};

function checkTask(task) {
    let index = tasks.findIndex((t) => t.index == task.parentNode.lastElementChild.innerText);
    if (tasks[index]["completed"] == "false") tasks[index]["completed"] = "true";
    else tasks[index]["completed"] = "false";
    localStorage.setItem("tasks", JSON.stringify(tasks));

    task.nextElementSibling.classList.toggle("checked");
};