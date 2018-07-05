const newsFormBuilder = require("./newsFeedBuilder")
const newsPrinter = require("./newsPrint")

newsFormBuilder.buildNewsForm()

const printOnPageLoad = () => {
    $.ajax("http://localhost:3000/news")
    .then((news) => {
        newsPrinter.printNews(news)
    })
}

printOnPageLoad()


