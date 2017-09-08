jQuery(function($){
  
    // PARALLAX FUNCTIN CALL
    $(".parallax-object").each(function() {
        parallaxObject($(this));
    });
  
});

/* ========================================================================= */
/* PALALLAX FUNCTION */
/* ========================================================================= */
function parallaxObject(object) {
    var speed, resize, reset, originalPos, windowWidth, windowHeight;
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    speed = $(object).data("speed") ? $(object).data("speed") : 0.5;
    resize = $(object).data("resize") ? $(object).data("resize") : false;
    resetIt(object);
    resizeIt(object);
    parallaxIt(object);

    $(window).bind("scroll",function() {
        parallaxIt(object);
    });

  function resetIt(object) {
        var self = $(object);
      originalPos = $(self).data("reset") ? $(self).parent().offset().top : 0;
  }

    function resizeIt(object) {
        var self = $(object);
        var extraHeight;
        // RESIZE OBJECT TO FULL SIZE
        if( resize == true ) {
            extraHeight = parseInt(windowHeight * speed / 2);
            self.css( "height", '+=' + extraHeight);
        }
    }

    function parallaxIt(object) {
        $(object).each(function() {
            var self = $(this);
            var nm = $("html").scrollTop();
            var nw = $("body").scrollTop();
            var n = (nm > nw ? nm : nw);
            var objectPos = self.parent().offset().top;
            var position = n - objectPos + originalPos;
            var scrollPosition = parseInt( position * speed );

            // ADD TRANSLATE OFFSET TO OBJECT
            self.css({
                'webkitTransform' : 'translate3d(0, ' + scrollPosition + 'px, 0)',
                'MozTransform'    : 'translate3d(0, ' + scrollPosition + 'px, 0)',
                'msTransform'     : 'translateY('     + scrollPosition + 'px)',
                'OTransform'      : 'translate3d(0, ' + scrollPosition + 'px, 0)',
                'transform'       : 'translate3d(0, ' + scrollPosition + 'px, 0)',
            });
            // if transform3d isn't available, use top over background-position
            //$('#element').css('top', Math.ceil(n/2) + 'px');
        });
    }
}