const eventDatabaseHandler = Object.create({}, {
    postEvent: {
        value: (newEventObject) => {
            return $.ajax({
                url: "http://localhost:3000/events",
                method: "POST",
                data: newEventObject
            })
        }
    },

    getAllEvents: {
        value: () => {
            return $.ajax("http://localhost:3000/events")
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
module.exports = eventDatabaseHandler;