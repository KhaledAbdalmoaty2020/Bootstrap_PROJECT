$(function() {

    var win = $(window).height(),
        upper = $('.upperbar').innerHeight(),
        nav = $('.navbar').innerHeight();
    /* $(' ').height(win - (nav + upper));*/
    $(".featuredwork ul li ").on('click', function() {
        $(this).addClass("active").siblings().removeClass("active");
        if ($(this).data('class') == "all") {
            $(".row .col-sm").css("opacity", 1);
        } else {

            $(".row .col-sm").css("opacity", 0.3);
            $($(this).data('class')).parent().css("opacity", 1);

        }
    });
});
/*.carousel - item*/
//the hide show function