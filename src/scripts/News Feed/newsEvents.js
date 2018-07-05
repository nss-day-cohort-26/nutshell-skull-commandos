const newsData = require("./newsDataHandler")
const newsPrinter = require("./newsPrint")
const newData = require("../users/usersEvents")

$("#news-container").on("click", "#submit-butt", () => {
    const newsNameInput = $("#newsForm-input").val()
    const newsUrlInput = $("#url-input").val()
    const synopsisInput = $("#synopsis-input").val()
    const newNews = {
        name: newsNameInput,
        url: newsUrlInput,
        synopsis: synopsisInput,
        userID: newData()
    }
    newsData.postNews(newNews)
        .then((newsInfo) => {
            $("#newsForm-input").val("")
            $("#url-input").val("")
            $("#synopsis-input").val("")
            return newsData.getAllNews()
        })
        .then(newsArray => {
            newsPrinter.printNews(newsArray)
        })
})
$("#newsBox").on("click", ".delete-butt", () => {
    const newsID = $(event.target).parent().attr("id")
    newsData.deleteNews(newsID)
        .then(() => {
            return newsData.getAllNews()
        })
        .then((newsArray) => {
            newsPrinter.printNews(newsArray)
        })
})

