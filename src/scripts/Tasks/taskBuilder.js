// Create the fields (and submit button) for the to do form and append it to the DOM.

const ToDoForm = Object.create({}, {
  buildForm: {
  value: () => {
    const $formDiv = $("<div>").attr("id", "form");

    // create an input for name and append it to the form div
    $("<input>").attr("id", "name-input").attr("placeholder", "Task Name").appendTo($formDiv);

    // create an input for details and append it to the form div
    $("<input>").attr("id", "details-input").attr("placeholder", "Details").appendTo($formDiv);

    // create a submit btn and append to form div
    $("<button>").attr("id", "submit-btn").text("Add Task").appendTo($formDiv);

    // append the formdiv to the dom
    $formDiv.appendTo($("#form-container"))
  }
  }
})

module.exports = ToDoForm;