const jquery = require('jquery');
Window.jquery = window.$ = jquery;

$(function() {

    $(".category-lists").hover(function () {
        $(this).children().toggleClass("text-dark-blue");
     })

    $(document).on('click', '.category-lists', function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    })

    $(document).on('click', '.filter-selector', function (e) {
        e.preventDefault();
        $(this).children(".filter-title").find("i").toggleClass("transform rotate-180 transition duration-100 ease-in-out");
        $(this).siblings().children(".filter-title").find("i").removeClass("transform rotate-180 transition duration-100 ease-in-out");
        $(this).children(".filter-wrapper").toggleClass('hidden');
        $(this).siblings().children(".filter-wrapper").addClass("hidden");
    })

    $(document).on('click','.filter-wrapper', function(e) {
        e.preventDefault();
        e.stopPropagation(); // use to not bubble up the even. SO that it won't close if it's content is clicked.
    })
});

