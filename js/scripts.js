// Business logic for to-do list
function ToDoList() {
    this.tasks = [];
    this.currentId = 0;
}

ToDoList.prototype.addTask = function(task) {
    task.id = this.assignId();
    this.tasks.push(task);
}

ToDoList.prototype.assignId = function(id) {
    this.currentId += 1;
    return this.currentId;
}

ToDoList.prototype.deleteTask = function(id) {
    for(let i = 0; i < this.tasks.length; i++) {
        if(this.tasks[i]) {
            if(this.tasks[i].id == id) {
                delete this.tasks[i];
                return true;
            }
        }
    };
    return false; 
}

// ToDoList.prototype.markDone = function(id) {
//     for (let i = 0; i < this.tasks.length; i++) {
//         if(this.tasks[i]) {
//             if(this.tasks[i].id == id) {
//                 this.isDone = true;
//                 return true;
//             }
//         }
//     };
//     return false;
// }

// Business logic for task
function Task(name, isDone) {
    this.name = name,
    this.isDone = false
}

// UI logic 
let toDoList = new ToDoList();

function displayListDetails(newListToDisplay) {
    let tasksList = $("ul#tasks");
    let htmlForTasksInfo = "";
    newListToDisplay.tasks.forEach(function(task) {
        htmlForTasksInfo += "<li id=" + task.id + ">" + task.name + "</li>" 
    });
    tasksList.html(htmlForTasksInfo);
    }

$(document).ready(function() {
    $("form#new-task").submit(function(event){
        event.preventDefault();
        let inputtedTaskName = $("input#new-task").val();
        
        let newTask = new Task(inputtedTaskName);
        toDoList.addTask(newTask);
        displayListDetails(toDoList);
        console.log(newTask);  

        const items = document.querySelectorAll('li');

        items.forEach(item => {
            item.addEventListener('click', e => {
                e.target.style.textDecoration = 'line-through';
            });
        });
        
    });

    let d = new Date();
    let month = d.getMonth()+1;
    let day = d.getDate();

    let output = (month<10 ? '0' : '') + month + '/' + (day<10 ? '0' : '') + day + '/' +  d.getFullYear();
    
    $("#currentDate").html(output);
})