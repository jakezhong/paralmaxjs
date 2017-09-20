jQuery(function($){
  
    // PARALLAX FUNCTIN CALL
    parallaxObject(".parallax-object");
    $(".parallax-object").each(function() {
        parallaxObject($(this));
    });
  
});