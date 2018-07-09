
const taskDatabaseHandler = require("./taskDatabaseHandler");
const taskPrinter = require("./taskPrinter");
const userData = require("../users/usersEvents");

// console.log("userData", userData)

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
      // console.log("taskInfo",taskInfo)
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

let updateTaskID;

//Event Handler for the task list - EDIT BUTTON
  $("#taskContainer").on("click", ".edit-btn", () => {
    updateTaskID = $(event.target).parent().attr("id")
    taskDatabaseHandler.getTask(updateTaskID)
    // console.log("edit", updateTaskID)
    .then((response) => {
      console.log("response", response)
      $("#taskName-input").val(response.name)
      $("#taskDetails-input").val(response.details)
      $("#taskCompletion-input").val(response.date)
  })
})

  // console.log("looking for this", taskDatabaseHandler.putTask)

  //Event Handler for the task list - UPDATE BUTTON
  $("#taskForm-container").on("click", "#update-btn", () => {
    // console.log("this is the update btn")
    const taskNameInput = $("#taskName-input").val();
    const taskDetailsInput = $("#taskDetails-input").val();
    const taskCompletionInput = $("#taskCompletion-input").val();
    const updateTask = {
      id: updateTaskID,
      name: taskNameInput,
      details: taskDetailsInput,
      date: taskCompletionInput,
      userID: userData()
    }
    taskDatabaseHandler.putTask(updateTask)
    .then(() => {
      return taskDatabaseHandler.getAllTasks()
    })
    .then((taskArray) => {
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
