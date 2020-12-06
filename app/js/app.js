// import $ from 'jquery' // import module example (npm i -D jquery)
$(function(){

		$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});
});




