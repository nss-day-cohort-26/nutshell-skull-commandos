const newsForm = Object.create({}, {
    buildNewsForm: {
        value: () => {
            const $formDiv = $("<div>").attr("id", "newsIn")
            $("<input>").attr("id", "newsForm-input").attr("placeholder", "What is New?").appendTo($formDiv)
            $("<button>").attr("id", "submit-butt").text("Post It!").appendTo($formDiv)
            $("<button>").attr("id", "delete-butt").text("Delete").appendTo($formDiv)
            $formDiv.appendTo($("#news-container"))
        }
    }
})

module.exports = newsForm





