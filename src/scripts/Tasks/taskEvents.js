
const taskDatabaseHandler = require("./taskDatabaseHandler");
const taskPrinter = require("./taskPrinter");
const userData = require("../users/usersEvents");
console.log("userData", userData())

//Event Handler for the task list - SUBMIT BUTTON
$("#taskForm-container").on("click", "#submit-btn", () => {
    const taskNameInput = $("#taskName-input").val();
    const taskDetailsInput = $("#taskDetails-input").val();
    const taskCompletionInput = $("#taskCompletion-input").val();
    const newTask = {
      name: taskNameInput,
      details: taskDetailsInput,
      date: taskCompletionInput,
      userID: userData()
    }
    // console.log("this is the one", userData())
    taskDatabaseHandler.postTask(newTask)
    .then((taskInfo) => {
      console.log("taskInfo",taskInfo)
      $("#taskName-input").val("").attr("placeholder", "Task Name")
      $("#taskDetails-input").val("").attr("placeholder", "Details")
      $("#taskCompletion-input").val("").attr("placeholder", "Expected Completion Date")
      // console.log("task date", $("#taskCompletion-input"))
      return taskDatabaseHandler.getAllTasks()
    })
    .then(taskArray => {
      taskPrinter.printTasks(taskArray)
  })
})

  $("#taskContainer").on("click", ".edit-btn", () => {
    const taskID = $(event.target).parent().attr("id")
    taskDatabaseHandler.editTask(taskID)
    console.log("edit", taskID)
    .then(() => {
      console.log("edit id", taskID)
      return taskDatabaseHandler.editTask()
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