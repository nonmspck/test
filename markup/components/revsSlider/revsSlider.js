$(document).ready(function(){
    $(".revsSlider__list").slick({
        infinite: true,
        dots: true,
        dotsClass: "revsSlider__dots",
        arrows: true,
        slidesToScroll: 1,
        slidesToShow: 1
    }).on("wheel", function (event) {
        event.preventDefault();
        if (event.originalEvent.deltaY < 0) {
            $(this).slick('slickNext');
        } else {
            $(this).slick('slickPrev');
        }});
});
