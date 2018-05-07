$(function () {
    /********** Nice Scroll *********/
    $("body").niceScroll({
        cursorcolor: "#129cf3",
        cursorwidth: "4px"
    });


    /************ Smooth Scroll **********/
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    /*********** Show and Hide menu *******/
    // Show menu
    $('.show-menu').click(function () {
        $('.header-nav nav .menu').slideToggle();
    });
    // Hide menu when click a link
    $('.header-nav nav .menu li a').click(function () {
        $('.header-nav nav .menu').slideUp();
    });

});
