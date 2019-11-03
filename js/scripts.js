// Business logic for to-do list
function ToDoList() {
    this.tasks = [];
    this.currentId = 0;
}

ToDoList.prototype.addTask(task) {
    task.id = this.assignId();
    this.tasks.push(task);
}

ToDoList.prototype.assignId() {
    this.currentId += 1;
    return this.currentId;
}

ToDoList.prototype.deleteTask(id) {
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

// Business logic for task
function Task(name, isDone) {
    this.name = name,
    this.isDone = false
}

Task.prototype.markDone = function(id) {
    for (let i = 0; i < this.tasks.length; i++) {
        if(this.tasks[i]) {
            if(this.tasks[i].id == id) {
                this.isDone = true;
                return true;
            }
        }
    };
    return false;
}


// UI logic 