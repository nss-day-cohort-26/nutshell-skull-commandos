// const $ = require("jquery");

// This is the object with all of our database-interfacing methods in it
// We'll export this whole object to other modules
const eventsDatabase = Object.create({}, {
  // POSTS a new task to the database. It accepts a whole task object as a parameter.
  postEvent: {
    value: (newEventObject) => {
      return $.ajax({
      url: "http://localhost:3000",
      method: "POST",
      data: newEventObject
    })
  }
  },
  // Gets all the events from the database. AJAX defaults to get, so you don't have to specify a
//   method like you do with posting and deleting.
  getMyEvents: {
    value: () => {
      return $.ajax("http://localhost:3000")
    }
  },
  // Deletes an event by its id. Accepts a task id as its parameter.
  deleteEvent: {
    value: (id) => {
      return $.ajax({
      url: `http://localhost:3000/${id}`,
      method: "DELETE",
    })
  }
}
})
