const newsPrinter = Object.create({}, {
    printNews: {
        value: function(newsArray) {
            $("#newsBox").empty()
            newsArray.forEach((task) => {
                const $newsDiv = $("<div>").attr("id", news.id)
                $("<h4>").text(news.name).appendTo($newsDiv)
                $("<p>").text(news.details).appendTo($newsDiv)
                $("<button>").text("Post It!").addClass("done-btn").appendTo($newsDiv)
                $("<button>").text("Delete").addClass("delete-butt").appendTo($newsDiv)
                $($newsDiv).appendTo("#newsBox")
            })
        }
    }
})

module.exports = newsPrinter


