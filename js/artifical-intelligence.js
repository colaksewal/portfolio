$(document).ready(function() {
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
        url: "works/artificial-intelligence.json", // JSON file URL
        type: "GET", // GET request
        dataType: "json", // Data type: JSON
        success: function(data) {
            // Update the accordion with project details
            $("#accordion h2:first-child").text(data.name); // Set project name as the title
            $("#accordion div:first-child p").text(data.description); // Set project description
            if (data.image) {
                $("#accordion div:first-child").append("<img src='" + data.image + "' alt='Project Image' class='img-fluid mt-2'>"); // Add project image if available
            }
        },
        error: function(xhr, status, error) {
            // Handle errors in AJAX request
            console.error("Error loading project details: ", error);
        }
    });

    // Handle the "Move to External Website" button click
    $("#move-button").click(function() {
        $.ajax({
            url: "https://www.kaggle.com/ezgiisubasii/?hl=tr",
            type: "GET",
            success: function() {
                window.location.href = "https://www.kaggle.com/ezgiisubasii";
            },
            error: function(xhr, status, error) {
                console.error("Error during redirection: ", error);
                window.location.href = "https://www.kaggle.com/ezgiisubasii";
            }
        });
    });

    // Initialize NanoGallery2
    $("#nanogallery2").nanogallery2({
        thumbnailHeight: 150,
        thumbnailWidth: 150,
        itemsBaseURL: '', // Leave empty because we are using local files
        items: [
            { src: 'image/topluluk1.png', srct: 'image/topluluk1.png', title: 'Title 1' },
            { src: 'image/topluluk2.png', srct: 'image/topluluk2.png', title: 'Title 2' },
            { src: 'image/topluluk3.png', srct: 'image/topluluk3.png', title: 'Title 3' }
        ]
    });
});
