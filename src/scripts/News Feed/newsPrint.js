const newsPrinter = Object.create({}, {
    printNews: {
        value: function(newsArray) {
            $("#newsBox").empty();
            newsArray.forEach((news) => {
                const $newsDiv = $("<div>").attr("id", news.id)
                $("<h4>").text(news.name).appendTo($newsDiv)
                $("<p>").text(news.url).appendTo($newsDiv)
                $("<p>").text(news.synopsis).appendTo($newsDiv)
                // $("<button>").text("Post It!").addClass("#submit-butt").appendTo($newsDiv)
                $("<button>").text("Delete").addClass("delete-butt").appendTo($newsDiv)
                $($newsDiv).appendTo("#newsBox")
            })
        }
    }
})

module.exports = newsPrinter


