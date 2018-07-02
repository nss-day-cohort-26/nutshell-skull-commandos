const taskDatabaseHandler = Object.create({}, {
    postTask: {
        value: (newTaskObject) => {
            return $.ajax({
                url: "http://localhost:3000/tasks",
                method: "POST",
                data: newTaskObject
            })
        }
    },
    getAllTasks: {
        value: () => {
            return $.ajax("http://localhost:3000/tasks")
        }
    },
    deleteTask: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/tasks/${id}`,
                method: "DELETE",
            })
        }
    }
})

module.exports = taskDatabaseHandler