const printer = Object.create({}, {
    printUsers: {
        value: function (userArray) {
            $("#container").empty();
            userArray.forEach((user) => {
                const $userDiv = $("<div>").attr("id", user.id)
                $("<h4>").text(user.name).appendTo($userDiv);

                $("<button>").text("Delete").addClass("delete-btn").appendTo($userDiv);
                $($userDiv).appendTo("#container");
            })
        }
    }
})


module.exports = printer;