$(function(){
    // Check url for active class
    var url = document.URL;
    var isMobile = /mobile/.test(url);
    var isWeb = /web/.test(url);
    var isContact = /contact/.test(url);
    // check which nav bar li to make active
    if (isWeb) {
        var $webLi = $("#web-nav");
        $webLi.addClass('active');
    } else if (isMobile) {
        var $mobileLi = $("#mobile-nav");
        $mobileLi.addClass('active');
    } else if (isContact) {
        var $contactLi = $("#contact-nav");
        $contactLi.addClass('active');
    } else {
        var $homeLi = $("#home-nav");
        $homeLi.addClass('active');
    }
	// Switch active nav li when one is clicked
	$('.nav li a').on('click', function(e) {
        var $thisLi = $(this).parent('li');
        var $ul = $thisLi.parent('ul');
        // make the clicked li active unless already active
        if (!$thisLi.hasClass('active')) {
            $ul.find('li.active').removeClass('active');
            $thisLi.addClass('active');
        }
    });
});