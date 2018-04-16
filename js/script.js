$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset(100px).top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});
