var taskCount = 0;
var tasks = [];

const taskInput = document.querySelector("#task-input");
const submitButton = document.querySelector("#submit-button");
const taskSection = document.querySelector("#tasks");

submitButton.addEventListener("click", () => {
    var task = taskInput.value;
    if (task.length === 0) {
        return;
    }
    
    tasks.push(task);
    regenerateTasks()
    taskInput.value = ''
    taskInput.focus()
});

function processTaskDetails(taskDetail){ return taskDetail.split('\n')}

function getTask(taskDetail, index) {
    
    var taskList = processTaskDetails(taskDetail);
    var tasks = '';
    for (var task of taskList)
    {
        if(task.length!==0)
        tasks += `<li>${task}</li>`
    }
    return `<article  class="task">
        <div class="buttons">
            <button data-index="${index}" onclick="completedHandler(${index})" class="task-button" data-type="completed"></button>
            <button data-index="${index}" onclick="onholdHandler(${index})" class="task-button" data-type="on-hold"></button>
            <button data-index="${index}" onclick="removeHandler(${index})" class="task-button" data-type="remove"></button>
        </div>
        <div id="_${index}" class="task-detail | ff-body fs-400 ">
            <ul>
            ${tasks}
            </ul>
        </div>
    </article>`;
}

function regenerateTasks(){
    taskSection.innerHTML = ''
    let count = 0
    for (let task of tasks){
        taskSection.innerHTML += getTask(task,count++);
    }
}