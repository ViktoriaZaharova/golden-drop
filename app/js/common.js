$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.home-slider').slick({
    slidesToShow: 1,
    fade: true,
    dots: true,
    appendDots: '.home-slider__nav',
    appendArrows: '.home-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
});

$('.events-slider').slick({
    slidesToShow: 3,
    appendArrows: '.events-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
});