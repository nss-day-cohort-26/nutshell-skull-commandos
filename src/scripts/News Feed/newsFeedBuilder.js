const newsForm = Object.create({}, {
    buildNewsForm: {
        value: () => {
            const $formDiv = $("<div>").attr("id", "newsIn")
            $("<input>").attr("id", "newsForm-input").attr("placeholder", "What is New?").appendTo($formDiv)
            $("<input>").attr("id", "url-input").attr("placeholder", "Paste URL").appendTo($formDiv)
            $("<input>").attr("id", "synopsis-input").attr("placeholder", "Enter Synopsis").appendTo($formDiv)
            $("<button>").attr("id", "submit-butt").text("Post It!").appendTo($formDiv)
            $formDiv.appendTo($("#news-container"))
        }
    }
})

module.exports = newsForm





