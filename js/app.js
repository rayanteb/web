$('.owl-carousel').owlCarousel({
    rtl: true,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})


$(window).scroll(function () {
    if ($(window).scrollTop() > 5) {
        $("#topid-navbar").addClass("navbar-fixed-top");
        $(".navbar-default").addClass("resized");
        $(".img-brand").css("cssText", "width: 50% !important;");
        $(".navbar-menu").addClass("navbar-menu-small");
    } else {
        $("#topid-navbar").removeClass("navbar-fixed-top");
        $(".navbar-default").removeClass("resized");
        $(".img-brand").css("cssText", "width: auto !important;");
        $(".navbar-menu").removeClass("navbar-menu-small");
    }
});



