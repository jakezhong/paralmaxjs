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


function parallaxObject(a){function t(){o=$(window).width()>r?$(a).data("speed")?$(a).data("speed"):.5:0}function n(a){$(a).each(function(){var a=$(this),t=$("html").scrollTop(),n=$("body").scrollTop(),e=(t>n?t:n)-a.parent().offset().top+s,r=parseInt(e*o);a.css({webkitTransform:"translate3d(0, "+r+"px, 0)",MozTransform:"translate3d(0, "+r+"px, 0)",msTransform:"translateY("+r+"px)",OTransform:"translate3d(0, "+r+"px, 0)",transform:"translate3d(0, "+r+"px, 0)"})})}var o,e,r,s,i;$(window).width(),i=$(window).height(),e=!!$(a).data("resize"),r=$(a).data("breakpoint")?$(a).data("breakpoint"):"",function(a){var t=$(a);s=$(t).data("reset")?$(t).parent().offset().top:0}(a),t(),function(a){var t,n=$(a);1==e&&(t=parseInt(i*o),n.css("height","+="+t))}(a),n(a),$(window).bind("scroll",function(){n(a)}),$(window).bind("resize",function(){t()}),console.log($(a).data("speed"))}jQuery(function(a){a(".parallax-object").each(function(){parallaxObject(a(this))})});