const printer = Object.create({}, {
    printfriends: {
        value: function (friendArray) {
            $("#container").empty();
            friendArray.forEach((friend) => {
                const $friendDiv = $("<div>").attr("id", friend.id)
                $("<h4>").text(friend.name).appendTo($friendDiv);

                $("<button>").text("Delete").addClass("delete-btn").appendTo($friendDiv);
                $($friendDiv).appendTo("#container");
            })
        }
    }
})


module.exports = printer;