$(document).ready(function() {
  var i = 0;
  var menuButtons =
    " <a class='edit' href='#'><i class='far fa-edit'></i></a>   <a class='delete' href='#'><i class='far fa-trash-alt'></i></a>";

  // Initial loading of tasks
  for (i = 0; i < localStorage.length; i++) {
    $("#tasks").append(
      "<li id='task-" +
        i +
        "'>" +
        localStorage.getItem("task-" + i) +
        menuButtons
    );
  }

  // Add a task
  $("#tasks-form").submit(function() {
    if ($("#task").val() != "") {
      localStorage.setItem("task-" + i, $("#task").val());
      $("#tasks").append(
        "<li id='task-" +
          i +
          "'>" +
          localStorage.getItem("task-" + i) +
          menuButtons
      );
      $("#task-" + i).css("display", "none");
      $("#task-" + i).slideDown();
      $("#task").val("");
      i++;
    }
    return false;
  });

  // Remove a task
  $(document).on("click", "#tasks li a.delete", function() {
    localStorage.removeItem(
      $(this)
        .parent()
        .attr("id")
    );
    $(this)
      .parent()
      .slideUp("slow", function() {
        $(this).remove();
      });
    // This part resets all the IDs
    for (i = 0; i < localStorage.length; i++) {
      if (!localStorage.getItem("task-" + i)) {
        localStorage.setItem(
          "task-" + i,
          localStorage.getItem("task-" + (i + 1))
        ); // Moves the id up a level
        localStorage.removeItem("task-" + (i + 1)); // Removes the id 1 up from the deleted item
      }
    }
  });

  // Edit a task
  $(document).on("click", "#tasks li a.edit", function() {
    var thisID = $(this)
      .parent()
      .attr("id"); // this is task-0

    $(this)
      .parent()
      .html(
        "<form><input class='taskEdit" +
          thisID +
          "' autofocus><input type='submit' value='Save'></form>"
      )
      .submit(function() {
        //localStorage.removeItem("task-" + thisID); // it becomes task-task-0
        //localStorage.setItem("task-" + thisID, $(".taskEdit" + thisID ).val());
        localStorage.setItem(thisID, $(".taskEdit" + thisID).val());
        $(this).html(localStorage.getItem(thisID) + menuButtons);
        return false;
      });
  });

  // Reset all
  $("#reset").click(function() {
    localStorage.clear();
  });
});
