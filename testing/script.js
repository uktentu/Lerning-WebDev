document.addEventListener("DOMContentLoaded",function() {
    const taskInput = document.getElementById("taskinput");
    const taskBtn = document.getElementById("adtaskbtn");
    const taskList = document.getElementById("tasklist");

    taskBtn.addEventListener("click",function() {
        const taskText =  taskInput.value.trim();
        if (taskText !=="") {
            addToList(taskText);
        }
        else {
            alert("Please add a Task");
        }
    });
    
    function addToList(taskText) {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        
        taskItem.addEventListener("click",function () {
            taskItem.classList.toggle("Completed");
        });
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "delete";
        deleteBtn.addEventListener("click", function() {
            taskItem.remove();
        });
        
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
    }
});