$(document).ready(function() {
    $(".rangeTopLeft").on("input", function() {
        let lt = $(this).val() + "px";
        $(".box").css({
            "borderTopLeftRadius": lt,
        })
        $(".rangeTopLeftOutput").text(lt)
    })

    $(".rangeTopRight").on("input", function() {
        let rt = $(this).val() + "px";
        $(".box").css({
            "borderTopRightRadius": rt,
        })
        $(".rangeTopRightOutput").text(rt)
    })

    $(".rangeBootomLeft").on("input", function() {
        let lb = $(this).val() + "px";
        $(".box").css({
            "borderBottomLeftRadius": lb,
        })
        $(".rangeBootomLeftOutput").text(lb)
    })

    $(".rangeBootomRight").on("input", function() {
        let rb = $(this).val() + "px";
        $(".box").css({
            "borderBottomRightRadius": rb,
        })
        $(".rangeBootomRightOutput").text(rb)
    })


});