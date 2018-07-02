//Build the task form
const taskForm = Object.create({}, {
  buildTaskForm: {
    value: () => {
      const $formDiv = $("<div>").attr("id", "form");
      //Create "Task Name" input
      $("<input>").attr("id", "taskName-input").attr("placeholder", "Task Name").appendTo($formDiv);
      //Create "Details" input
      $("<input>").attr("id", "taskDetails-input").attr("placeholder", "Details").appendTo($formDiv);
      //Create "submit" button
      $("<button>").attr("id", "submit-btn").text("Add Task").appendTo($formDiv);
      $formDiv.appendTo($("#taskForm-container"))
    }
  }
})

module.exports = taskForm;