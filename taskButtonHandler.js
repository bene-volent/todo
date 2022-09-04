function completedHandler(index) {
    var task = document.querySelector(`#_${index}`);
    if (task.classList.contains("completed")) {
        task.classList.remove("completed");
    } else {
        if (task.classList.contains("onhold")) {
            task.classList.remove("onhold");
        }
        task.classList.add("completed");
    }
}
function onholdHandler(index) {
    var task = document.querySelector(`#_${index}`);
    if (task.classList.contains("completed")) {
        return;
    }
    if (task.classList.contains("onhold")) {
        task.classList.remove("onhold");
    } else task.classList.add("onhold");
}
function removeHandler(index) {
    tasks.splice(index, 1);
    regenerateTasks();
}
