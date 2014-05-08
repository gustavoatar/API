
/*// Bind an event to the scroll of the navigation
$(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
        topNav();
    }
    else {
        slideNav();
    }
});
*/

/*var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       slideNav();
   } else {
      topNav();
   }
   lastScrollTop = st;
});*/
/*
$('body').bind('DOMMouseScroll', function(e){
     if(e.originalEvent.detail > 0) {
         //scroll down
         slideNav();
     }else {
         //scroll up
         topNav();
     }

     //prevent page fom scrolling
 });

 //IE, Opera, Safari
 $('body').bind('mousewheel', function(e){
     if(e.originalEvent.wheelDelta < 0) {
         //scroll down
         slideNav();
     }else {
         //scroll up
         topNav();
     }

     //prevent page fom scrolling
 });

function slideNav(){
	$(document).find('a.navbar-brand').removeClass('large-logo').addClass('small-logo');
	$(document).find('.navbar.main li a').animate({
			paddingTop: '-15px'

	}, 500, function() {
    // Animation complete.
  });
	
}
function topNav(){
	$(document).find('a.navbar-brand').removeClass('small-logo').addClass('large-logo');
	$(document).find('.navbar.main li a').animate({
		paddingTop: '=15'
		}, 500, function() {
    // Animation complete.
  });
	
}*/

// invoke the video js option for flash swf backup player
$(document).ready(function(){
	videojs.options.flash.swf = "js/vendor/video-js.swf";
	// define local scroll
	$.localScroll({ 
		hash:true, 
		axis:'xy',
		offset: -138
	});
	// define stellar js 
	$.stellar({
		horizontalScrolling: false,
		repsonsive: true
		
	});	
    $("a[data-tab-destination]").on('click', function() {
        var tab = $(this).attr('data-tab-destination');
        $("#"+tab).click();
    });

$('.jumbotron .logos:gt(0)').hide(); // hide all but first element

var i=0, t, stop=false, n=$('.logos').length;

function a(){
   $('.logos').eq(i%n).fadeIn(300).siblings('.logos').fadeOut(700);
}

function aa(){
   if(stop){return;}         
   clearTimeout(t);    
   t = setTimeout(function(){i++;a();aa();},6000);
}
aa();

function h(){
  hh=stop ? $('.logos').eq(i).addClass('hovered') : $('.hovered').removeClass('hovered');
}

$('.jumbotron').bind('mouseenter mouseleave', function(e){
   mo=(e.type==='mouseenter')?(stop=true,clearTimeout(t),h()):(stop=false,h(),aa());
});
	
if(!Modernizr.input.placeholder){

    $('[placeholder]').focus(function() {
      var input = $(this);
      if (input.val() == input.attr('placeholder')) {
        input.val('');
        input.removeClass('placeholder');
      }
    }).blur(function() {
      var input = $(this);
      if (input.val() == '' || input.val() == input.attr('placeholder')) {
        input.addClass('placeholder');
        input.val(input.attr('placeholder'));
      }
    }).blur();
    $('[placeholder]').parents('form').submit(function() {
      $(this).find('[placeholder]').each(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
          input.val('');
        }
      })
    });
	
}
});



