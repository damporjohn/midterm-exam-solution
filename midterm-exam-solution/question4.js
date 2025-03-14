// Todo CRUD Management

let tasks = [];

function generateId() {
    return tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
}

//CREATE
function addTask(name, description) {
    const newTask = {
        id: generateId(),
        name: name,
        description: description
    };
    tasks.push(newTask);
    console.log('Task added:', newTask);
}

//READ
function viewTasks() {
    if (tasks.length === 0) {
        console.log('No tasks found.');
    } else {
        console.log('Task list:');
        tasks.forEach(task => {
            console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`);
        });
    }
}

//UPDATE
function updateTask(id, newName, newDescription) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.name = newName || task.name;
        task.description = newDescription || task.description;
        console.log('Task updated:', task);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

//DELETE
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        const removedTask = tasks.splice(index, 1);
        console.log('Task deleted:', removedTask[0]);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

addTask('2643415,', 'Dampor, John Vincent S.', 'Demo Add');
addTask('2643123,', 'Dampor, e delete', 'Demo Add');
viewTasks(1);
updateTask(1, 'Dampor, Gwapo', 'Demo Update');
deleteTask(2);
viewTasks();
