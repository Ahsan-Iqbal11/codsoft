// Retrieve tasks from local storage or initialize an empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');

// Function to update the task list in the DOM
function updateTaskList() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task}
            <button class="delete-button" data-index="${index}">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// Function to add a new task
function addTask() {
    const newTask = taskInput.value.trim();
    if (newTask !== '') {
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskInput.value = '';
        updateTaskList();
    }
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    updateTaskList();
}

// Event listener for adding a new task
addTaskButton.addEventListener('click', addTask);

// Event listener for deleting a task
taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-button')) {
        const index = e.target.getAttribute('data-index');
        deleteTask(index);
    }
});

// Initial update of the task list
updateTaskList();
