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
    getTask: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/tasks/${id}`,
                method: "GET"
            })
        }
    },
    putTask: {
        value: (updateTask) => {
            console.log("database", updateTask)
            return $.ajax({
                url: `http://localhost:3000/tasks/${updateTask.id}`,
                method: "PUT",
                data: {
                    name: updateTask.name,
                    details: updateTask.details,
                    date: updateTask.date,
                    userID: updateTask.userID
                }
            })
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