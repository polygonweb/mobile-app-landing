$(function () {

    'use strict';


    var slides = $(".slider__slides");
    var len = $(".slider__slides > .slider__slide").length;
    slides.css("width", len*100 + "%");

    $(".slider__controls__thumbnail").click(function (e) {
        e.preventDefault();

        var $this = $(e.target);
        var indx = $this.index();
        $this
            .addClass('slider__controls__thumbnail--active')
            .siblings()
            .removeClass('slider__controls__thumbnail--active');

        slides.css("left", -indx*100 + "%");

        return false;
    });

    var blockquotes = $(".s-testimonials__quotes__inner");
    var quote = $(".s-testimonials__quotes__item");
    var numquotes= quote.length;
    blockquotes.css("width", numquotes*100 + "%");
    quote.css("width", 100/numquotes + "%");
    var authors = $(".ui-author")

    $(".s-testimonials__controls__item").click(function (e) {
        e.preventDefault();

        var $this = $(e.target);
        var indx = $this.index();
        $this
            .addClass('s-testimonials__controls__item--active')
            .siblings()
            .removeClass('s-testimonials__controls__item--active');

        blockquotes.css("left", -indx*100 + "%");
        authors
            .removeClass("ui-author--active")
            .eq(indx)
            .addClass("ui-author--active");

        return false;
    });



    var Slides3dContainer = $('.ui-slider-3d__slides');
    var Slides3d = $('.ui-slider-3d__img');
    var controls = $('.ui-slider-3d__controls__thumbnail');
    var slides3dNum = Slides3d.length;
    var angle = Math.PI*2/slides3dNum; //360/slides3dNum;
    var radius = 180;

    var maxHeight = 0;
    for(var i = 0; i < slides3dNum; i++) {
        var slide3d = Slides3d.eq(i);
        var curHeight =  slide3d.height();

        if (curHeight > maxHeight) {
            maxHeight = curHeight;
        };

        var z = Math.cos(i * angle);
        var x = Math.sin(i * angle);
         slide3d.css({
             "-webkit-transform": "translateZ(" + z*radius + "px) translateX(" + x*radius + "px) rotateY(" + i*angle +"rad)",
            "transform": "translateZ(" + z*radius + "px) translateX(" + x*radius + "px) rotateY(" + i*angle +"rad)"
         });

    };

    Slides3dContainer.css("min-height", maxHeight + "px");

    controls.click(function (e) {
        e.preventDefault();

        var $this = $(e.target);
        var indx = $this.index();
        $this
            .addClass('ui-slider-3d__controls__thumbnail--active')
            .siblings()
            .removeClass('ui-slider-3d__controls__thumbnail--active');

        Slides3d
            .removeClass('ui-slider-3d__img--active')
            .eq(indx)
            .addClass('ui-slider-3d__img--active');

        Slides3dContainer.css({
            "-webkit-transform": "rotateY(" + -indx*angle +"rad)",
                    "transform": "rotateY(" + -indx*angle +"rad)"
        });

        return false;
    });



    $(".js-scroll-to").click(function (e) {

        e.preventDefault();
        var $this = $(e.target);
        var $hash = e.target.hash;

        $("html, body").animate({
            scrollTop: $($hash).offset().top
        }, 1200);

    });


    $('.js-scroll-anim').addClass('js-scroll-anim--hide');

    $('.js-scroll-anim').each( function () {

        var elem = $(this);

        $(window).scroll( function() {

            var elemTop = elem.offset().top;
            var elemBottom = elem.height() + elemTop;
            elemTop = elemTop - $(window).height();
            var scroll_top = $(window).scrollTop();

            if ( scroll_top > elemTop && scroll_top < elemBottom ) {
                elem.removeClass( 'js-scroll-anim--hide' );
                elem.addClass( 'js-scroll-anim--show' );
            } else {
                elem.removeClass( 'js-scroll-anim--show' );
                elem.addClass( 'js-scroll-anim--hide' );
            };
        });
    });



});