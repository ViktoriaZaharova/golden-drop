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
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.help-slider').slick({
    slidesToShow: 1,
    fade: true,
    appendArrows: '.help-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
});


$('.btn-burger').on('click', function () {
   $('.mobile-menu').fadeToggle();
});

$('.mobile-menu__close').on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu').fadeOut();
});

$(document).ready(function () {
    $('.go_to').click(function (e) {
        e.preventDefault();
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length !== 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        $('.mobile-menu').fadeOut();

        return false;
    });
});