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

    
    $.ajax({
        url: "works/web-applicatione.json", // JSON dosyasının URL'si
        type: "GET", // GET isteği
        dataType: "json", // Veri türü: JSON
        success: function(data) {
            // AJAX isteği başarılı olduğunda yapılacak işlemler
            $("#accordion h2:first-child").text(data.name); // Proje ismini başlık olarak ayarla
            $("#accordion div:first-child p").text(data.description); // Proje açıklamasını paragraf olarak ayarla
            $("#accordion div:first-child").append("<img src='" + data.image + "' alt='Project Image'>"); // Proje resmini ekle
        },
        error: function(xhr, status, error) {
            // AJAX isteği başarısız olduğunda yapılacak işlemler
            console.error(error); // Hata durumunda konsola hatayı yazdır
        }
    });

    // Hareketli butonun tıklanma işlemi
    $("#move-button").click(function() {
        $.ajax({
            url: "https://github.com/ezgisubasii/?hl=tr",
            type: "GET",
            success: function() {
                window.location.href = "https://github.com/ezgisubasii";
            },
            error: function(xhr, status, error) {
                console.error(error);
                window.location.href = "https://github.com/ezgisubasii";
            }
        });
    });


});