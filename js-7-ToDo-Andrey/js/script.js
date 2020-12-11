document.addEventListener('DOMContentLoaded', function() {
    let addMessage = document.querySelector(".box__field"),
        addButton = document.querySelector(".box__btn"),
        listWrapper = document.querySelector(".list-wrapper");

    let arrayTasks;

    if (localStorage.tasks) {
        arrayTasks = JSON.parse(localStorage.getItem("tasks"));
    } else {
        arrayTasks = [];
    }

    function newTask(taskText) {
        this.taskText = taskText;
        this.status = false;
    }

    const refreshLocalStorage = () => {
        localStorage.setItem("tasks", JSON.stringify(arrayTasks))
    }

    const addNewTask = () => {
        if (addMessage.value == "") {
            addMessage.classList.add("box__field--error");
        } else {
            addMessage.classList.remove("box__field--error");
            arrayTasks.push(new newTask(addMessage.value));
            refreshLocalStorage();
            showTaskList();

        }
        addMessage.value = null;
    }

    const createRow = (elem, index) => {
        return `
        <div class="task-row ${elem.status ? "task-row--checked" : ""}">
            <h3 class="task-title">${elem.taskText}</h3>
            <input class="task-status" type="checkbox" ${elem.status ? "checked" : " "} data-index = ${index}>
            <button class="btn-delete" data-index = ${index}><i class="fa fa-trash"></i></button>
        </div>
        `;
    }

    const showTaskList = () => {
        listWrapper.innerHTML = "";
        arrayTasks.forEach((elem, index) => {
            listWrapper.innerHTML += createRow(elem, index);
            //console.log(listWrapper.childElementCount);
        });

        const tasksCheckbox = document.querySelectorAll(".task-status");
        const deleteBtn = document.querySelectorAll(".btn-delete");
        const taskRow = document.querySelectorAll(".task-row");


        tasksCheckbox.forEach(elem => {
            elem.addEventListener("click", function() {

            })
        });


        tasksCheckbox.forEach(elem => {
            elem.addEventListener("change", checkTask)
        });

        deleteBtn.forEach(elem => {
            elem.addEventListener("click", deleteTask)
            elem.parentElement.classList.add("rotate-center");
            //elem.parentElement.classList.remove("rotate-center");
        });
    }

    function checkTask() {
        arrayTasks[this.dataset.index].status = !arrayTasks[this.dataset.index].status;
        refreshLocalStorage();
        showTaskList();

    }


    function deleteTask() {
        this.parentElement.classList.add("color");
        arrayTasks.splice(this.dataset.index, 1);
        refreshLocalStorage();
        showTaskList();

    }

    showTaskList();

    addButton.onclick = addNewTask;

    document.addEventListener("keyup", function(evt) {
        if (evt.code == "Enter" || evt.key == "Enter") {
            addNewTask();

        }
    });
});