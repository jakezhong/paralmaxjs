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
function parallaxObject(t){function a(){r=$(window).width()>e?$(t).data("speed")?$(t).data("speed"):.5:0}function n(t){$(t).each(function(){var t=$(this),a=$("html").scrollTop(),n=$("body").scrollTop(),o=(a>n?a:n)-t.parent().offset().top+s,e=parseInt(o*r);t.css({webkitTransform:"translate3d(0, "+e+"px, 0)",MozTransform:"translate3d(0, "+e+"px, 0)",msTransform:"translateY("+e+"px)",OTransform:"translate3d(0, "+e+"px, 0)",transform:"translate3d(0, "+e+"px, 0)"})})}var r,o,e,s,i;$(window).width(),i=$(window).height(),o=!!$(t).data("resize"),e=$(t).data("breakpoint")?$(t).data("breakpoint"):"",function(t){var a=$(t);s=$(a).data("reset")?$(a).parent().offset().top:0}(t),a(),function(t){var a,n=$(t);1==o&&(a=parseInt(i*r),n.css("height","+="+a))}(t),n(t),$(window).bind("scroll",function(){n(t)}),$(window).bind("resize",function(){a()})}