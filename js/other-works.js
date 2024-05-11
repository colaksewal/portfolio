$(document).ready(function() {
    // "Leave a Comment" bağlantısını tıklayınca formu göster
    $("#show-comment-form").click(function(e) {
        e.preventDefault();
        $("#comment-form").slideDown();
    });

    // Handle form submission with validation
    $("#comment-form-validation").validate({
        submitHandler: function(form) {
            var name = $("#name").val();
            var comment = $("#comment").val();

            var newComment = $("<div>").addClass("comment");
            $("<p>").text(comment).appendTo(newComment);
            $("<span>").text("- " + name).appendTo(newComment);

            $("#comments").append(newComment);

            $("#name").val("");
            $("#comment").val("");

            $("#comment-form").slideUp();
        }
    });
});