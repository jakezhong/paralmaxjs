jQuery(function($){
  
    // PARALLAX FUNCTIN CALL
    $(".parallax-object").each(function() {
        parallaxObject($(this));
    });
  
});

/* ========================================================================= */
/* http://www.jksakura.com/paralmax */
/**
 * Paralmax is a JQuery responsive parallax plugin for multiple uses, including full size section background image, page parallax elements and more based on different use cases. With many built-in settings, users can set parallax speed, background image to full size or not, disable it below specific screen size and reset element to the top of it's parent container. The advantage of Paralmax is that it only adds parallax effet to elements, but not changes their style/looking, so users can easily customise/style any elements with pure HTML or CSS (position, size, image, background, content, etc).
 * @author Jake Zhong
----------------------  
-------------| |   / /
     | |     | |  / /
     | |     | | / /
     | |     | |/ /
     | |     | |\ \
     | |     | | \ \
     | |     | |  \ \
-----  |     | |   \ \
-----------------------  
**/
/* ========================================================================= */

              
function parallaxObject(object) {
    var speed, resizable, reset, breakpoint, originalPos, windowWidth, windowHeight;
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    resizable = $(object).data("resize") ? true : false;
    breakpoint = $(object).data("breakpoint") ? $(object).data("breakpoint") : '';

    resetIt(object);
    initSpeed();
    resizeIt(object);
    parallaxIt(object);

    $(window).bind("scroll",function() {
        parallaxIt(object);
    });

    $(window).bind("resize", function() {
        initSpeed();
    });

    function initSpeed() {
        if( $(window).width() > breakpoint ) {
            speed = $(object).data("speed") ? $(object).data("speed") : 0.5;
        } else {
            speed = 0;
        }
    }
    console.log($(object).data("speed"));

    function resetIt(object) {
        var self = $(object);
        originalPos = $(self).data("reset") ? $(self).parent().offset().top : 0;
    }

    function resizeIt(object) {
        var self = $(object);
        var extraHeight;
        // RESIZE OBJECT TO FULL SIZE
        if( resizable == true ) {
            extraHeight = parseInt(windowHeight * speed);
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