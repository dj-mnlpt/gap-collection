const jquery = require('jquery');
Window.jquery = window.$ = jquery;

$(function() {
    var activeFilter;
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
        // $(this).siblings().children(".filter-title").find("i").removeClass("transform rotate-180 transition duration-100 ease-in-out");
        $(this).children(".filter-wrapper").toggleClass('hidden');
        // $(this).siblings().children(".filter-wrapper").addClass("hidden");
    })

    $('html').click(function(e) {
        e.preventDefault();
        if (e.target.class !== 'filter-selector') {
            $(".filter-wrapper").addClass("hidden");
            $(".filter-selector").children(".filter-title").find("i").removeClass("transform rotate-180 transition duration-100 ease-in-out");
         }
    })  
});

