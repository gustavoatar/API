$(function () {
    $('#sub ul').find('li').each(function () { // get the menu + check for children
        var $parent = $(this);
        if ($parent.children('ul').length) {

            $parent.prepend($('<a/>', { // prepend the link
                href: '#',
                text: '+'
            }).addClass('toggle').click(function () { // add class for styling purposes + click function
                var $this = $(this);
                $this.text(($this.text() == '-' ? '+' : '-')); // switch icons on click
                $parent.children('ul').toggle('fast'); // set toggle
            }));
        }

        if ($parent.hasClass('active')) {
            $parent.parent().show().siblings('.toggle').text('-');
        }
    });
if(navigator.userAgent.indexOf('Mac') > 0)
$('body').addClass('mac-os');
$("div.section-body form").appendTo($("div.main-signup"));
});

//if($("#errors > p").is(":visible")){
//	window.location = "/industries/healthcare/mcg/classic";
//}