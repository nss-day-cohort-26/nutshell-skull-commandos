const friendForm = Object.create({}, {
    buildForm: {
        value: () => {
            const $friendDiv = $("<div>").attr("id", "friend-form");
            $("<input>").attr("id", "friend-search").attr("placeholder", "Search for Friends").css("display","none").appendTo($friendDiv);
            $("<button>").attr("id", "addFriend-btn").text("Find Friends").appendTo($friendDiv);
            $friendDiv.appendTo($("#friend-container"))
            $("#addFriend-btn").click( function(){
                $("#friend-search").toggle("slow");
            })
        }
    }
})

module.exports = friendForm