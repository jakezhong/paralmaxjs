/* ========================================================================= */
/* http://www.jksakura.com/paralmax */
/**
 * Paralmax is a JQuery responsive parallax plugin for multiple uses, including full size section background image, page parallax elements and more based on different use cases. With many built-in settings, users can set parallax speed, resize background image to full size or not, disable it below specific screen size, offset of the parallax element from it's center. The advantage of Paralmax is that it only adds parallax effet to elements, but not changes their style/looking, so users can easily customise/style any elements with pure HTML or CSS (position, size, image, background, content, etc).
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
$.fn.paralmax = function() {
    var windowWidth, windowHeight;
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    
    return this.each(function(){
        var object = $(this);
        var offset;
        offset = object.offset();
        
        var defaults = {
            'start': offset.top,
            'stop': offset.top + object.outerHeight(),
            'speed': 0,
            'resizable': object.data("resize") ? object.data("resize") : false,
            'breakpoint': object.data("breakpoint") ? object.data("breakpoint") : 0,
            'offset': object.data("offset") ? object.data("offset")*object.outerHeight() : 0
        }
        
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
            if( $(window).width() > defaults.breakpoint ) {
                if( object.data("speed") || object.data("speed") === 0 ) {
                    defaults.speed = object.data("speed");
                } else {
                    defaults.speed = 0.5;
                }
            } else {
                defaults.speed = 0;
            }
        }

        function resizeIt() {
            var self = object;
            var extraHeight;
            // RESIZE OBJECT TO FULL SIZE
            if( defaults.resizable == true ) {
                extraHeight = parseInt(windowHeight * defaults.speed);
                self.css( "height", '+=' + extraHeight);
            }
        }

        function parallaxIt() {
            var self = object;
            var nm = $("html").scrollTop();
            var nw = $("body").scrollTop();
            var n = (nm > nw ? nm : nw);
            var position = n - defaults.start;
            var scrollPosition = parseInt( position * defaults.speed ) + defaults.offset;
            // ADD TRANSLATE OFFSET TO OBJECT
            self.css({
                'webkitTransform' : 'translate3d(0, ' + scrollPosition + 'px, 0)',
                'MozTransform'    : 'translate3d(0, ' + scrollPosition + 'px, 0)',
                'msTransform'     : 'translateY('     + scrollPosition + 'px)',
                'OTransform'      : 'translate3d(0, ' + scrollPosition + 'px, 0)',
                'transform'       : 'translate3d(0, ' + scrollPosition + 'px, 0)',
            });
        }
    });
}