$(document).ready(function() {
    $(".content").not(":first").hide();
    $(".btn__item").click(function() {
        $(".btn__item").removeClass("btn__item--active").eq($(this).index()).addClass("btn__item--active");
        $(".content").hide().removeClass("scrollright").eq($(this).index()).fadeIn().addClass('scrollright')
    }).eq(0).addClass("btn__item--active");

});