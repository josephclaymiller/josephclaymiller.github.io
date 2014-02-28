$(function(){
	// Switch active nav
	$('.nav li a').on('click', function(e){
        var $thisLi = $(this).parent('li');
        var $ul = $thisLi.parent('ul');
        if (!$thisLi.hasClass('active'))
        {
            $ul.find('li.active').removeClass('active');
            $thisLi.addClass('active');
            // scroll window back up 50px to compensate for navbar
        }
    });
});