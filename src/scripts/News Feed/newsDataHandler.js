const newsData = Object.create({}, {
    postTask: {
        value: (newTaskObject) => {
            return $.ajax({
                url: "http://localhost:3000/news",
                method: "POST",
                data: newTaskObject
            })
        }
    },
    getAllTasks: {
        value: () => {
            return $.ajax("http://localhost:3000/news")
        }
    },
    deleteTask: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/news/${id}`,
                method: "DELETE"
            })
        }
    }
})

module.exports = newsData

