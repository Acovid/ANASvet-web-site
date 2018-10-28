$(document).ready(function () {
    // Carousel
    $("#mycarousel").carousel({
        interval: 5000
    });
    $("#carousel-button").click(function () {
        if ($("#carousel-button").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carousel-button").children("span").removeClass('fa-pause');
            $("#carousel-button").children("span").addClass('fa-play');
        } else if ($("#carousel-button").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carousel-button").children("span").removeClass('fa-play');
            $("#carousel-button").children("span").addClass('fa-pause');
        }
    });

    // Init scrollspy
    $('body').scrollspy({
        target: '.navbar'
    });

    // Add smooth scrolling
    $('.navbar a, .link a').on('click', function (e) {
        // Check for a hash value
        if (this.hash !== '') {
            // Prevent default behaviour
            e.preventDefault();

            // Store the hash into variable
            const hash = this.hash;

            // Animate smooth scroll
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {
                // Add hash to URL after the scroll
                window.location.hash = hash;
            });
        }
    });

    // Get the current year for the copyright
    $('#year').text(new Date().getFullYear());

})