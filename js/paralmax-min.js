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
function parallaxObject(object){function initSpeed(){speed=$(window).width()>breakpoint?$(object).data("speed")?$(object).data("speed"):.5:0}function parallaxIt(object){$(object).each(function(){var self=$(this),nm=$("html").scrollTop(),nw=$("body").scrollTop(),position=(nm>nw?nm:nw)-self.parent().offset().top+originalPos,scrollPosition=parseInt(position*speed);self.css({webkitTransform:"translate3d(0, "+scrollPosition+"px, 0)",MozTransform:"translate3d(0, "+scrollPosition+"px, 0)",msTransform:"translateY("+scrollPosition+"px)",OTransform:"translate3d(0, "+scrollPosition+"px, 0)",transform:"translate3d(0, "+scrollPosition+"px, 0)"})})}var speed,resizable,breakpoint,originalPos,windowHeight;$(window).width(),windowHeight=$(window).height(),resizable=!!$(object).data("resize"),breakpoint=$(object).data("breakpoint")?$(object).data("breakpoint"):0,function(object){var self=$(object);originalPos=$(self).data("reset")?$(self).parent().offset().top:0}(object),initSpeed(),function(object){var extraHeight,self=$(object);1==resizable&&(extraHeight=parseInt(windowHeight*speed),self.css("height","+="+extraHeight))}(object),parallaxIt(object),$(window).bind("scroll",function(){parallaxIt(object)}),$(window).bind("resize",function(){initSpeed()})}