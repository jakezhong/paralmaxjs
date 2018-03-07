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
jQuery.fn.extend({paralmax:function(){var t,e=$(this);return $(window).width(),t=$(window).height(),e.each(function(){function e(){$(window).width()>i.breakpoint?o.data("speed")||0===o.data("speed")?i.speed=o.data("speed"):i.speed=.5:i.speed=0}function a(){var e,a,r=o;!0===i.resizable&&($(window).width()>i.breakpoint?(e=parseInt($(r).parent().outerHeight()),a=parseInt($(r).parent().offset().top)>parseInt(t)?parseInt(t*i.speed):parseInt($(r).parent().offset().top)*i.speed,r.css("height",e+a)):r.css("height",e))}function r(){var t=o,e=$("html").scrollTop(),a=$("body").scrollTop(),r=(e>a?e:a)-i.start,s=parseInt(r*i.speed)+i.offset;t.css({webkitTransform:"translate3d(0, "+s+"px, 0)",MozTransform:"translate3d(0, "+s+"px, 0)",msTransform:"translateY("+s+"px)",OTransform:"translate3d(0, "+s+"px, 0)",transform:"translate3d(0, "+s+"px, 0)"})}function s(){if($(window).width()<i.breakpoint){o.css({webkitTransform:"translate3d(0, 0, 0)",MozTransform:"translate3d(0, 0, 0)",msTransform:"translateY(0)",OTransform:"translate3d(0, 0, 0)",transform:"translate3d(0, 0, 0)"})}}var n,o=$(this),i={start:(n=o.offset()).top,stop:n.top+o.outerHeight(),speed:0,resizable:!!o.data("resize")&&o.data("resize"),breakpoint:o.data("breakpoint")?o.data("breakpoint"):0,offset:o.data("offset")?o.data("offset")*o.outerHeight():0};e(),a(),r(),s(),$(window).bind("scroll",function(){r()}),$(window).bind("resize",function(){e(),a(),s()})})}});