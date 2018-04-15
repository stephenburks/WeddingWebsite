// jQuery Smooth Scroll (My Plugin)
$(document).ready(function(){
    $('.navLinks').click(function(e){
        var linkhref = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(linkhref).offset().top
        });
        e.preventDefault();
    });
});
