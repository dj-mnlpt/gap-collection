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

    $("button.mobile-filter").click(function (e) {
        e.stopPropagation();
        // alert("the button is clicked")
        // $(".green-con").toggleClass("hidden")
        $(".filter-container").toggleClass("hidden")
        // $(".filter-container").toggleClass("fixed")
        $("#overlay").removeClass("hidden")
    })
    var documentWidth = $(window).width();
    var flag = false;
    var flag2 = false;

    if (documentWidth > 768) {
        $(".filter-selector").children(".filter-title").find("i").addClass("fa-angle-down");
        $(".filter-selector").children(".filter-title").find("i").removeClass("fa-caret-down");
        $("#overlay").addClass("hidden")
    }

    if (documentWidth <= 768) {
        $(".filter-selector").children(".filter-title").find("i").removeClass("fa-angle-down")
        $(".filter-selector").children(".filter-title").find("i").addClass("fa-caret-down")
    }

      $(window).resize(function () {
        if (documentWidth > 768) {
            $(".filter-container").addClass("hidden");
            $("#overlay").addClass("hidden")
            flag = true;   
        }
        if (documentWidth <= 768) {
                flag2 = true;
        }   
    }) 

    $(document).on('click', function(e) {
        e.stopPropagation();
        e.preventDefault();

        if ($(e.target).closest('.filter-container').length == 0) {
            $(".filter-container").addClass("hidden");
            $("#overlay").addClass("hidden")
        }
    })

});

/*  the problem with else if, is that when one of the condition is met, it will stop evaluating the other condition,
 a good solution to this is use a case condition or a quick fix will be this. learn more how to effeciently use w
 indow.resize function */
