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
/* ========================================================================= */	 $.fn.paralmax=function(){var windowHeight;return $(window).width(),windowHeight=$(window).height(),this.each(function(){function initSpeed(){$(window).width()>defaults.breakpoint?object.data("speed")||0===object.data("speed")?defaults.speed=object.data("speed"):defaults.speed=.5:defaults.speed=0}function parallaxIt(){var self=object,nm=$("html").scrollTop(),nw=$("body").scrollTop(),n=nm>nw?nm:nw;if(n+$(window).height()>=defaults.start&&n<=defaults.stop){var position=n-defaults.start,scrollPosition=parseInt(position*defaults.speed)+defaults.offset;self.css({webkitTransform:"translate3d(0, "+scrollPosition+"px, 0)",MozTransform:"translate3d(0, "+scrollPosition+"px, 0)",msTransform:"translateY("+scrollPosition+"px)",OTransform:"translate3d(0, "+scrollPosition+"px, 0)",transform:"translate3d(0, "+scrollPosition+"px, 0)"})}}var offset,object=$(this),defaults={start:(offset=object.offset()).top,stop:offset.top+object.height(),speed:0,resizable:!!object.data("resize")&&object.data("resize"),breakpoint:object.data("breakpoint")?object.data("breakpoint"):0,offset:object.data("offset")?object.data("offset")*object.outerHeight():0};initSpeed(),function(){var extraHeight,self=object;1==defaults.resizable&&(extraHeight=parseInt(windowHeight*defaults.speed),self.css("height","+="+extraHeight))}(),parallaxIt(),$(window).bind("scroll",function(){parallaxIt()}),$(window).bind("resize",function(){initSpeed()})})};