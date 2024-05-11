$(document).ready(function(){
    // Datepicker
    $('#datepicker').datepicker();

    // Autocomplete
    var availableInterests = ['AI', 'Security', 'Network', 'Game', 'Application'];
    $('#interest').autocomplete({
        source: availableInterests
    });

    // Form Validation
    $('.contact-form').validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            message: "required"
        },
        messages: {
            name: "Please enter your name",
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            message: "Please enter your message"
        },
        submitHandler: function(form) {
            // Handle form submission, e.g., AJAX request
            // Display success message or perform other actions
            alert('Form submitted successfully!');
            form.reset(); // Reset the form after submission
        }
    });
});