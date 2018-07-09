//Print to DOM
const taskPrinter = Object.create({}, {
    printTasks: {
      value: function(taskArray) {
        $("#taskContainer").empty();
        taskArray.forEach((task) => {
          const $taskDiv = $("<div>").attr("id", task.id)
          $("<h4>").text(task.name).appendTo($taskDiv);
          $("<p>").text(task.details).appendTo($taskDiv);
          $("<p>").text(task.date).appendTo($taskDiv);
          $("<button>").text("Complete").addClass("complete-btn").appendTo($taskDiv);
          $("<button>").text("Edit").addClass("edit-btn").appendTo($taskDiv);
          $($taskDiv).appendTo("#taskContainer");
        })
      }
    }
  })

  module.exports = taskPrinter;