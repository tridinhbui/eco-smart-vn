$(".fb-content").hide();

$(document).ready(function () {
    $(".fb-slide").show();
    $('.fb-slide-btn').click(function () {
        $(".fb-slide-btn").hide();

        $(".fb-content").animate({
            width: "show"
        }, 1750);

    });

    $(".fb-closebtn").click(function () {
        $(".fb-content").animate({
            width: "hide"
        }, 1850);
        $(".fb-slide-btn").show();
    });
});