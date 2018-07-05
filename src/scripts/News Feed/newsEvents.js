const newsData = require("./newsDataHandler")
const newsPrinter = require("./newsPrint")

$("#news-container").on("click", "#submit-butt", () => {
    const newsNameInput = $("#newsForm-input").val()
    const newNews = {
        name: newsForm - input,
    }
    newsData.postNews(newNews)
        .then(() => {
            return newsData.getAllNews()
        })
        .then(newsArray => {
            newsPrinter.printNews(newsArray)
        })
})
$("#newsBox".on("click", "delete-butt", () => {
    const newsID = $(event.target).parent().attr("id")
    newsData.deleteTask(newsID)
        .then(() => {
            return newsData.getAllNews()
        })
        .then((newsArray) => {
            newsPrinter.printNews(newsArray)
        })
}))