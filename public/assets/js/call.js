// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-info").on("click", function(event) {
    var id = $(this).data("id");
    var newInfo = $(this).data("newInfo");

    var newQuestion = {
      question: newQuestion
    };

    // Send the PUT request.
    $.ajax("/api/info/" + id, {
      type: "PUT",
      data: newQuestion
    }).then(
      function() {
        console.log("changed question to ", newInfo);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newInfo = {
      name: $("#ca").val().trim(),
      question: $("[question=answer]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/info", {
      type: "POST",
      data: newInfo
    }).then(
      function() {
        console.log("created new question");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-info").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/info/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted info", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
