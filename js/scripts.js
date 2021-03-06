// Mobile Button Toggle
$(document).ready(function () {
    var ulNav = "#nav", openNav = "active";
    $('.toggle-menu').click(function (e) {
        if ($(ulNav).hasClass(openNav)) {
            $(ulNav).removeClass(openNav);
        } else {
            $(ulNav).addClass(openNav);
        }
        e.preventDefault();
    })
})

// Smooth Scroll Plugin
$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {
                window.location.hash = hash;
            });
        } // End if
    });
});
