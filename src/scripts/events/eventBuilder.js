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
// This module should have the event handler for the submit button and delete button

// When the button is clicked, its event listener should call the DatabaseHandler module to add, delete, or update a given task
// THEN it should call on DatabaseHandler again to GET a new, updated list of all the tasks in our database. (This needs to happen AFTER we add, delete, or edit)
// THEN it should call the Printer module to print the new task array to the DOM so the page stays up to date.

// SUBMIT BUTTON // POSTING A NEW TASK
$("#form-container").on("click", "#submit-btn", () => {
    // get values for input fields
    const nameInput = $("#name-input").val();
    const detailsInput = $("#details-input").val();
    console.log(nameInput, detailsInput);
    // put values in an object
    const newTask = {
      name: nameInput,
      details: detailsInput
    }
    // Post the new task object we just created to the database
    eventsDatabase.postTask(newEvent)
    .then(() => {
      // THEN get all the tasks from the database (because we're going to print them!)
      // The return statement here is important! It makes it so we can chain the next then without nesting stuff
      return eventsDatabase.getAllTasks()
    })
    .then(eventsArray => {
      // THEN, once we've (1) posted the task and (2) gotten all the tasks (in that exact order every single time because we chained 'em all together) we can pass the task array we get back from our GET request into our printer function
        Printer.printTodos(eventsArray)
    })
  })
  // DELETE BUTTON
  $("#container").on("click", ".delete-btn", () => {
    // The id is on the card, or the parent of the delete btn
    const id = $(event.target).parent().attr("id")
    // Once we have our id, we can pass the id into our DELETE function
    eventsDatabase.deleteTask(id)
    .then(() => {
      // THEN, once the task is deleted, we can go get all the tasks again to print them
      // We want to put this inside a .then() because otherwise it might print all the tasks before our task was deleted. (Or it might happen in the right order by chance, but the point is-- this is a sequence of asynchronous operations that need to happen in a particular order, so we need to chain them together with .then()
      return eventsDatabase.getAllTasks()
    })
    .then((eventsArray) => {
      // Our getAllTasks function gives us back a task array, so now we can pass that task array into our printer function
      Printer.printTodos(eventsArray);
    })
  })
