
const taskDatabaseHandler = require("./taskDatabaseHandler");
const taskPrinter = require("./taskPrinter");
const userData = require("../users/usersEvents");
// console.log("userData", userData)

//Event Handler for the task list - SUBMIT BUTTON
$("#taskForm-container").on("click", "#submit-btn", () => {
    const taskNameInput = $("#taskName-input").val();
    const taskDetailsInput = $("#taskDetails-input").val();
    const newTask = {
      name: taskNameInput,
      details: taskDetailsInput,
      userID: userData()
    }
    // console.log("this is the one", userData())
    taskDatabaseHandler.postTask(newTask)
    .then((taskInfo) => {
      console.log("taskInfo",taskInfo)
      $("#taskName-input").val("").attr("placeholder","Task Name")
      $("#taskDetails-input").val("").attr("placeholder","Details")
      // console.log("task name", $("#taskName-input"))
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