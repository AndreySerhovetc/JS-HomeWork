$(document).ready(function() {
    let words = {
        "rus": ["Привет", "Медведь", "Облоко"],
        "eng": ["Hello", "Bear", "Cloud"],
    }

    $(".btn-arr--rus").on("click", function() {
        $.each(words['rus'], function(key, value) {
            console.log(key + ": " + value);

        });
    })

    $(".btn-arr--eng").on("click", function() {
        $.each(words['eng'], function(key, value) {
            console.log(key + ": " + value);

        });
    })
});