$(document).ready(function () {
    new WOW().init();

    var button = $(".main-button")
    button.on('click', function(event) {
		event.preventDefault();
		var target = $(this).attr('href');
		var top = $(target).offset().top;
        $('html,body').animate({scrollTop: top}, 1500)
    });
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });

});