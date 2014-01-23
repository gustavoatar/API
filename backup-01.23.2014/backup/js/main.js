// scrolling navigation animate
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
	$(document).find('a.navbar-brand').removeClass('large-logo').addClass('small-logo');
	$(document).find('.navbar').addClass('small');
	$(document).find('.navbar-holder').addClass('navbar-fixed-top');
   } else if(st == 0) {
   	$(document).find('a.navbar-brand').removeClass('small-logo').addClass('large-logo');
	$(document).find('.navbar').removeClass('small');
	$(document).find('.navbar-holder').removeClass('navbar-fixed-top');
   }
   lastScrollTop = st;
});