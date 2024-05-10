$(document).ready(function() {
    // Show comment form when "Leave a Comment" link is clicked
    $("#show-comment-form").click(function(e) {
        e.preventDefault();
        $("#comment-form").slideDown();
    });

    // Handle form submission
    $("#comment-form").submit(function(e) {
        e.preventDefault();
        var name = $("#name").val();
        var comment = $("#comment").val();

        // Validate input
        if (name.trim() === "" || comment.trim() === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Create new comment element
        var newComment = $("<div>").addClass("comment");
        $("<p>").text(comment).appendTo(newComment);
        $("<span>").text("- " + name).appendTo(newComment);

        // Append comment to comments section
        $("#comments").append(newComment);

        // Clear form fields
        $("#name").val("");
        $("#comment").val("");

        // Hide comment form
        $("#comment-form").slideUp();
    });
});