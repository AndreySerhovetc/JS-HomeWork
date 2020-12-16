$(document).ready(function() {
    //random color

    function setBg() {
        let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        $(".wrap").css('background-color', randomColor);
        $(".color").text(randomColor);
    }


    $(document).on('keyup', function(e) {
        if (e.which == 32) {
            setBg();
        }
    });

});