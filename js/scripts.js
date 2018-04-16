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

// Form Submission To Google Forms
var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbxtqeT8hpJLDuzM1tcbJ0m3eksIn7cM3GV-vw9ph8e-At0dxGk/exec'

$('#submit-form').on('click', function (e) {
    e.preventDefault();
    var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serializeObject()
    }).success(
        // do something
    );
})
