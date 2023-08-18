let flag = -1;

class Task {
    constructor(title, id, status) {
        this.title = title;
        this.id = id;
        this.status = status;
    }
}

class Tasklist {
    constructor() {
        this.tasks = [];
    }

    addTask(param) {
        this.tasks.push(param);
    }

        removeTask(id) {
            this.tasks = this.tasks.filter((task) => task.id !== id);
        }
    }


const veryBigTaskList = new Tasklist();

function taskcreate() {
    let taskTitle = document.getElementById("inpt1").value;
    const task = new Task(taskTitle, generateId(), false);
    veryBigTaskList.addTask(task);
    rendertasks();
    clearSpace();
    console.log(task);
}

function generateId() {
    return Math.floor(Math.random() * 99999);
}

function clearSpace() {
    document.getElementById("inpt1").value = "";
}

function rendertasks() {
    let msg = "";
    veryBigTaskList.tasks.forEach(task => {
        msg += `<div class="listitems">
          <h1>${task.title}</h1>
          <button id="${task.id}-button" onclick="doneTask(${task.id})"><i class="fas fa-check" style="color: #ffffff;"></i></button>
          <button onclick="editTask(${task.id})"><i class="fas fa-pencil" style="color: #ffffff;"></i></button>
          <button onclick="deleteTask(${task.id})"><i class="fas fa-trash" style="color: #ffffff;"></i></button>
          </div>`;
    });
    document.getElementById("list").innerHTML = msg;
}

function editTask(id){
    let editar = "";
    flag = id;
    veryBigTaskList.tasks.forEach(task => {
        if(task.id == id){
            editar = task;
        }
    });
    veryBigTaskList.removeTask(id);
    document.getElementById("inpt1").value = editar.title;
}

function deleteTask(id) {
    veryBigTaskList.removeTask(id);
    rendertasks();
}

function doneTask(id) {
    veryBigTaskList.tasks.forEach(task => {
        if (task.id == id) {
            task.status = !task.status;
            const button = document.getElementById(`${task.id}-button`);
            if (task.status) {
                button.style.backgroundColor = '#18af4d';
            } else {
                button.style.backgroundColor = '#181818';
            }
        }
    });
}