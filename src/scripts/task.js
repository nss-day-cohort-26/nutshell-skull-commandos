const $ = require("jquery");

// This is the object with all of our database-interfacing methods in it
// We'll export this whole object to other modules
const databaseHandler = Object.create({}, {
  // POSTS a new task to the database. It accepts a whole task object as a parameter.
  postTask: {
    value: (newTaskObject) => {
      return $.ajax({
      url: "http://localhost:3000/todos",
      method: "POST",
      data: newTaskObject
    })
  }
  },
  // Gets ALLLL the tasks from the db. AJAX defaults to get, so you don't have to specify a method like you do with posting and deleting
  getAllTasks: {
    value: () => {
      return $.ajax("http://localhost:3000/todos")
    }
  },
  // Deletes a task by its id. Accepts a task id as its parameter.
  deleteTask: {
    value: (id) => {
      return $.ajax({
      url: `http://localhost:3000/todos/${id}`,
      method: "DELETE",
    })
  }
}
})
