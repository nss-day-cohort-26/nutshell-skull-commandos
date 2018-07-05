const newsData = Object.create({}, {
    postNews: {
        value: (newTaskObject) => {
            return $.ajax({
                url: "http://localhost:3000/news",
                method: "POST",
                data: newTaskObject
            })
        }
    },
    getAllNews: {
        value: () => {
            return $.ajax("http://localhost:3000/news")
        }
    },
    deleteNews: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/news/${id}`,
                method: "DELETE"
            })
        }
    }
})

module.exports = newsData

