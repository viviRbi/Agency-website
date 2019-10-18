/* #################################
		Preloader
###################################*/
$(window).on("load", function(){ //when site fully loaded
	$("#status").fadeOut();
	$("#preloader").delay(350).fadeOut();
});