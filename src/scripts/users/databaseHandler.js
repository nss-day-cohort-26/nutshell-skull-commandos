const databaseHandler = Object.create({}, {
    postUser: {
        value: (newUserObject) => {
            return $.ajax({
                url: "http://localhost:3000/users",
                method: "POST",
                data: newUserObject
            })
        }
    },
    getAllUsers: {
        value: () => {
            return $.ajax("http://localhost:3000/tasks")
        }
    },
    deleteUser: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/users/${id}`,
                method: "DELETE",
            })
        }
    }
})
module.exports = databaseHandler;