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
function paralmax(t){var e;return $(window).width(),e=$(window).height(),t.each(function(){function t(){$(window).width()>n.breakpoint?r.data("speed")||0===r.data("speed")?n.speed=r.data("speed"):n.speed=.5:n.speed=0}function a(){var t=r,e=$("html").scrollTop(),a=$("body").scrollTop(),s=(e>a?e:a)-n.start,o=parseInt(s*n.speed)+n.offset;t.css({webkitTransform:"translate3d(0, "+o+"px, 0)",MozTransform:"translate3d(0, "+o+"px, 0)",msTransform:"translateY("+o+"px)",OTransform:"translate3d(0, "+o+"px, 0)",transform:"translate3d(0, "+o+"px, 0)"})}var s,r=$(this),n={start:(s=r.offset()).top,stop:s.top+r.outerHeight(),speed:0,resizable:!!r.data("resize")&&r.data("resize"),breakpoint:r.data("breakpoint")?r.data("breakpoint"):0,offset:r.data("offset")?r.data("offset")*r.outerHeight():0};t(),function(){var t,a=r;!0===n.resizable&&(t=parseInt(e*n.speed)/2,a.css("height","+="+t))}(),a(),$(window).bind("scroll",function(){a()}),$(window).bind("resize",function(){t()})})}