/* ------------------------------------
               SERVICES
---------------------------------------*/
$(function () {
    new WOW().init();
})
/* ------------------------------------
                 WORK
---------------------------------------*/
$(function () {
    $("#work-companies").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 2000,
        loop: true,
        autoPlayHoverPause: true
    });
})
/* ------------------------------------
                 TESTIMONIAL
---------------------------------------*/
$(function () {
    $("#employer-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 2000,
        loop: true,
        autoPlayHoverPause: true
    });
})
/* ------------------------------------
             NAVIGATION
---------------------------------------*/
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            // nav
            $("nav").removeClass("page-top-nav")
            $("#back-to-top").fadeOut()
        } else {
            $("nav").addClass("page-top-nav")
            $("#back-to-top").fadeIn()
        }
    })
})
// smooth scrolling
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 65
        }, 1150, "easeInOutExpo")
    })
})
// close navbar on click
$(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggle").click()
    })
})