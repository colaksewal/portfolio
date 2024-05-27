$(document).ready(function() {
    // Load the navbar
    $("#navbar-placeholder").load("navbar.html");

    // Show the comment form when "Leave a Comment" link is clicked
    $("#show-comment-form").click(function(e) {
        e.preventDefault();
        $("#comment-form").slideToggle();
    });

    // Handle form submission with validation
    $("#comment-form-validation").validate({
        submitHandler: function(form) {
            var name = $("#name").val();
            var comment = $("#comment").val();

            var newComment = $("<div>").addClass("comment mt-2");
            $("<p>").text(comment).appendTo(newComment);
            $("<span>").text("- " + name).appendTo(newComment);

            $("#comments").append(newComment);

            $("#name").val("");
            $("#comment").val("");

            $("#comment-form").slideUp();
        }
    });

    // Load project details from a JSON file
    $.ajax({
        url: "works/web-application.json", // JSON file URL
        type: "GET", // GET request
        dataType: "json", // Data type: JSON
        success: function(data) {
            // Update the accordion with project details
            if (data.name) {
                $("#accordion h2:first-child").text(data.name); // Set project name as the title
            }
            if (data.description) {
                $("#accordion div:first-child p").text(data.description); // Set project description
            }
        },
        error: function(xhr, status, error) {
            // Handle errors in AJAX request
            console.error("Error loading project details: ", error);
        }
    });

    // Handle the "Move to External Website" button click
    $("#move-button").click(function() {
        window.location.href = "https://www.kaggle.com/ezgiisubasii";
    });

    // Initialize NanoGallery2
    $("#nanogallery2").nanogallery2({
        thumbnailHeight: 150,
        thumbnailWidth: 150,
        itemsBaseURL: '', // Leave empty because we are using local files
        items: [
            { src: 'image/web1.png', srct: 'image/web1.png', title: 'Image 1' },
            { src: 'image/web2.png', srct: 'image/web2.png', title: 'Image 2' }
            
        ]
    });
});
