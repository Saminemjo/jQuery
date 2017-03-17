$(function() {
    setInterval(function() {
        $(".slider").animate({
            marginLeft: -600
        }, 0, function() {
            $(this).css({
                marginLeft: 0
            }).find("a:last").after($(this).find("a:first"));
        });
    }, 3000);
});

$("#next").click(function() {
    $(".slider").animate({
        marginLeft: -600
    }, 0, function() {
        $(this).css({
            marginLeft: 0
        }).find("a:last").after($(this).find("a:first"));
    });
});

$("#prev").click(function() {
    $(".slider").animate({
        marginRight: -600
    }, 0, function() {
        $(this).css({
            marginRight: 0
        }).find("a:first").before($(this).find("a:last"));
    });
});
