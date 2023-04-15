// Validate input field
// Add a new task
// Deleting a task
// Crossing out a completed task
// Clearing the input field after each entry
let tasksAdded = 0;

document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Please Enter a Task")
    }
    else {
        tasksAdded += 1;
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `
        document.getElementById("taskAdded").innerText = tasksAdded;
        var current_tasks = document.querySelectorAll(".delete")
        for (var i = 0; i < current_tasks.length; i++){
            current_tasks[i].onclick = function () {
                this.parentNode.remove()
                tasksAdded = tasksAdded - 1
                document.getElementById("taskAdded").innerText = tasksAdded;
            }
        }

        var tasks = document.querySelectorAll(".task")
        for (var i = 0; i < tasks.length; i++){
            tasks[i].onclick = function () {
                this.classList.toggle('completed')
            }
        }

        document.querySelector("#newtask input").value = "";
    }
}