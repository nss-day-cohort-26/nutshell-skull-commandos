
const taskDatabaseHandler = require("./taskDatabaseHandler");
const taskPrinter = require("./taskPrinter");

//Event Handler for the task list - SUBMIT BUTTON
$("#taskForm-container").on("click", "#submit-btn", () => {
    const taskNameInput = $("#taskName-input").val();
    const taskDetailsInput = $("#taskDetails-input").val();
    const newTask = {
      name: taskNameInput,
      details: taskDetailsInput
    }
    taskDatabaseHandler.postTask(newTask)
    .then(() => {
      return taskDatabaseHandler.getAllTasks()
    })
    .then(taskArray => {
      taskPrinter.printTasks(taskArray)
    })
  })
  //Event Handler for the task list - DELETE BUTTON
  $("#taskContainer").on("click", ".complete-btn", () => {
    const taskID = $(event.target).parent().attr("id")
    taskDatabaseHandler.deleteTask(taskID)
    .then(() => {
      return taskDatabaseHandler.getAllTasks()
    })
    .then((taskArray) => {
      taskPrinter.printTasks(taskArray)
    })
  })