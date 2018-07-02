const eventsDatabase = Object.create({}, {
    postEvent: {
        value: (newEventObject) => {
            return $.ajax({
                url: "http://localhost:3000/events",
                method: "POST",
                data: newEventObject
            })
        }
    },
    deleteEvent: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/events/${id}`,
                method: "DELETE",
            })
        }
    }
})
module.exports = eventsDatabase;