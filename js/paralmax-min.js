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
function paralmax(t){var e;return $(window).width(),e=$(window).height(),t.each(function(){function t(){$(window).width()>o.breakpoint?n.data("speed")||0===n.data("speed")?o.speed=n.data("speed"):o.speed=.5:o.speed=0}function a(){var t,a=n;!0===o.resizable&&(normalHeight=parseInt($(a).parent().outerHeight()),t=parseInt($(a).parent().offset().top)>parseInt(e)?parseInt(e*o.speed):parseInt($(a).parent().offset().top)*o.speed,a.css("height",normalHeight+t))}function r(){var t=n,e=$("html").scrollTop(),a=$("body").scrollTop(),r=(e>a?e:a)-o.start,s=parseInt(r*o.speed)+o.offset;t.css({webkitTransform:"translate3d(0, "+s+"px, 0)",MozTransform:"translate3d(0, "+s+"px, 0)",msTransform:"translateY("+s+"px)",OTransform:"translate3d(0, "+s+"px, 0)",transform:"translate3d(0, "+s+"px, 0)"})}var s,n=$(this),o={start:(s=n.offset()).top,stop:s.top+n.outerHeight(),speed:0,resizable:!!n.data("resize")&&n.data("resize"),breakpoint:n.data("breakpoint")?n.data("breakpoint"):0,offset:n.data("offset")?n.data("offset")*n.outerHeight():0};t(),a(),r(),$(window).bind("scroll",function(){r()}),$(window).bind("resize",function(){t(),a()})})}