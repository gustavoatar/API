/*
// Bind an event to the scroll of the navigation
$(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
        topNav();
    }
    else {
        slideNav();
    }
});

function slideNav(){
	$(document).find('a.navbar-brand').removeClass('large-logo').addClass('small-logo');
	$(document).find('.navbar').addClass('small');
}

function topNav(){
	$(document).find('a.navbar-brand').removeClass('small-logo').addClass('large-logo');
	$(document).find('.navbar').removeClass('small');
}*/

// invoke the video js option for flash swf backup player
$(document).ready(function(){
	videojs.options.flash.swf = "js/vendor/video-js.swf";
	$.stellar({
		horizontalScrolling: false,
		repsonsive: true
	});	
});
