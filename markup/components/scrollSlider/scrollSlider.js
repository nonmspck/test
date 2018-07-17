$(document).ready(function(){
    $(".scrollSlider__list").slick({
        infinite: true,
        dots: true,
        dotsClass: "scrollSlider__dots",
        arrows: false,
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
