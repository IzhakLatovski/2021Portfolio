// Make navbar fixed on scroll down
let height = $("#home-section").height();

$(window).scroll(function () {
    if($(this).scrollTop() > height) {
        $(".navbar").addClass("fixed");
    } else {
        $(".navbar").removeClass("fixed");
    }
});

// Make navbar link active on scroll
$('nav .navbar-container ul li a').on('click', function() {
    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 400);

    return false;
})


$(window).scroll(function() {
    var windscroll = $(window).scrollTop() +50;

    if (windscroll >= height) {
        $('section').each(function(i) {
            if ($(this).position().top <= windscroll) {
                $('nav .navbar-container ul li a.active').removeClass('active');
                $('nav .navbar-container ul li a').eq(i).addClass('active');
            }
        });

    } else {
        $('nav .navbar-container ul li a.active').removeClass('active');
        $('nav .navbar-container ul li a:first').addClass('active');
    }

}).scroll();

// Make year of credentials current year
let year = new Date().getFullYear();

$(".copyright").html("© IZHAK LATOVSKI " + year);