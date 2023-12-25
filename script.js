// slider 1
$('.my-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed:1500,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

// slider 2
$('.myy-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed:1200,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

// slider 3
$('.myyy-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    rtl:true,
    dots: false,
    smartSpeed:1200,
    autoplay: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

// slider 4
$('.myyyy-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    smartSpeed:1200,
    autoplay: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 6
        }
    }
})


// back to top
var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});



// preloader js
setTimeout(function () {
    $('.loader_bg').fadeToggle();
}, 1500);