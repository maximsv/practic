// import $ from 'jquery' // import module example (npm i -D jquery)
$(function(){

	$('.top-line').after('<div class="mobile-menu d-lg-none">');
	$('.top-menu').clone().appendTo('.mobile-menu');
	$('.mobile-menu-button').click(function() {
		$('.mobile-menu').stop().slideToggle();
	});
$('.test-popup-link').magnificPopup({
    type: 'image'
    // other options
});


		$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});
});




