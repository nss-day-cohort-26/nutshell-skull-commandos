const SignInForm = Object.create({}, {
    buildForm: {
        value: () => {
            const $formDiv = $("<div>").attr("id", "form");
            $("<input>").attr("id", "name-input").attr("placeholder", "User Name").appendTo($formDiv);
            $("<button>").attr("id", "submit-btn").text("Add Task").appendTo($formDiv);
            $formDiv.appendTo($("#form-container"))
        }
    }
})

module.exports = SignInForm;