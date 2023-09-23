$(document).ready(function () {
    $(".btn-wrap .close-btn").click((function () {
        $(this).toggleClass("active"), $(".nav").toggleClass("active");
    }));

    $(".nav li").click((function () {
        $(".nav").removeClass("active"), $(".close-btn").toggleClass("active");
    }));

    $("#get-form").click((function () {
        $(".contact-form").toggleClass("active");
    }));

    $(".contact-form .close-btn").click((function () {
        $(".contact-form").removeClass("active");
    }));

    $(".sort-project button").click((function (t) {
        t.stopPropagation();
        $(".sort-project ul").toggleClass("active");
    }));

    $(document).click((function () {
        $(".sort-project ul").removeClass("active");
    }));

    $(".sort-project ul a").click((function () {
        let t = $(this).text();
        $(".sort-project button span").text(t);
        $(".project-wrap").toggleClass("active");
    }));

    var btn = $('.go-to-top');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            btn.addClass('active');
        } else {
            btn.removeClass('active');
        }
    });
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '1000');
    });
});