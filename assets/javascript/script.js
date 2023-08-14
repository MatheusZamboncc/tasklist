class Task {
    constructor(id, title, status) {
        this.id = id;
        this.title = title;
        this.status = status;

    }
}
class TaskList {
    constructor() {
        this.tasks = [];
    }
    addTask(param) {
        this.tasks.push(param)
    }
    removeTask(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }
    markTask(id) {
        this.tasks.forEach(task => {
            if (task.id == id) {
                tasks.status = !tasks.status;
            }

        })
    }
}

const veryBigTaskList = new TaskList();

function creatTask() {
    const taskTitle = document.getElementById("inp1").value;

    const task = new Task(1, taskTitle, false)

    veryBigTaskList.addTask(task);

    console.log(veryBigTaskList);
    renderTasks()

}
function generateId() {
    return Math.floor(Math.random() * 9000);

}

function renderTasks() {
    let element = "";

    veryBigTaskList.tasks.forEach(task => {
        element += `
<li id="${task.id}">
<span id="${task.id}-title">${task.title}</span>
<div id="yip">
<button id="${task.id}-button" class="action"
onclick="doeTask(${task.id})"><i class="fa-solid fa-check"></i>
</button>
<button class="action edit" onclick="editTask(${task.id})"><i class="fa-solid fa-pencil"></i></button>
<button class="action remove" onclick="deleteTask(${task.id})"><i><i class="fa-solid fa-trash"></i></i></button>
</div>
</li>`;
        
    });
    document.getElementById("list").innerHTML += element;
}

function deleteTask(id) {
    veryBigTaskList.removeTask(id);
    renderTasks()

}

function doneTask(id){
    veryBigTaskList.markTask(id);
}

