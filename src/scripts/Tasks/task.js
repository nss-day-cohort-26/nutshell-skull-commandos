const taskFormBuilder = require("./taskBuilder");
const taskPrinter = require("./taskPrinter");

taskFormBuilder.buildTaskForm()

const printOnPageLoad = () => {
    $.ajax("http://localhost:3000/tasks")
    .then((tasks) => {
        taskPrinter.printTasks(tasks);
    })
}

printOnPageLoad();