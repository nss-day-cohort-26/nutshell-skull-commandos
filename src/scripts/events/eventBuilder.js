const eventForm = Object.create({}, {
  buildEventForm: {
      value: () => {
          const $eventFormDiv = $("<div>").attr("id", "form");
          $("<input>").attr("id", "name-input").attr("placeholder", "Event").appendTo($eventFormDiv);
          $("<button>").attr("id", "submit-btn").text("Submit Event").appendTo($eventFormDiv);
          $eventFormDiv.appendTo($("#eventForm-container"))
      }
  }
})
module.exports = eventForm;