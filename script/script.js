/* #################################
		Preloader
###################################*/
$(window).on("load", function(){ //when site fully loaded
	$("#status").fadeOut();
	$("#preloader").delay(350).fadeOut("slow");
});

/* #################################
		Team
###################################*/
$(function(){
	$("#team-members").owlCarousel({
		items: 2,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
	});
});
/* ----------------------
		Progress Bar
-------------------------*/
	$(function(){

		$("#progress-elements").waypoint(function(){

			$(".progress-bar").each(function(){
				$(this).animate({
					width: $(this).attr("aria-valuenow") + "%"
				}, 1000);
			});
			this.destroy();

		}, {offset: "bottom-in-view"});
	});

/*------------------------------
		Responsive tabs
------------------------------*/
	$(function(){
		$("#services-tabs").responsiveTabs({
			animation: 'slide'
		});
	});
/*------------------------------
		Portfolio filter
------------------------------*/
	$(window).on("load", function(){
		$("#isotope-container").isotope({
		}) ;
		//filter item on button click
		$("#isotope-filters").on("click", "button", function(){
			//get filter value
			var filterValue = $(this).attr('data-filter');
			//filter portfolio
			$("#isotope-container").isotope({
				filter: filterValue
			});
			// active button
			$("isotope-filters").find(".active").removeClass('active');
			$(this).addClass("active");
		});
	});
/*------------------------------
		Magnify
------------------------------*/
	$(function(){
		$("#portfolio-wrapper").magnificPopup({
			delegate: 'a', //child items selector, by clicking on it popup will open
			type: 'image',
			gallery: {
			  enabled: true, // set to true to enable gallery

			  preload: [0,2], // read about this option in next Lazy-loading section

			  navigateByImgClick: true,

			  arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

			  tPrev: 'Previous (Left arrow key)', // title for left button
			  tNext: 'Next (Right arrow key)', // title for right button
			  tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
			}
		});
	});
	/*------------------------------
		Testimonials
------------------------------*/
$(function(){
	$("#testimonial-slider").owlCarousel({
		items: 1,
		autoplay: false,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
	});
});

	/*------------------------------
		Stats
------------------------------*/
$ (function(){
	$(".counter").counterUp({
		delay: 10,
		time: 1000
	});
});

	/*------------------------------
		Clients
------------------------------*/
$(function(){
	$("#clients-list").owlCarousel({
		items: 6,
		autoplay: false,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		nav: true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
	});
});
/*-------------------------
		Google Map
--------------------------*/
$(window).on('load', function(){
	//map var
	var addressString = '230 Broadway, NY, New York 10007, USA';
	var myLatlng={lat: 40.712685, lng: -74.005920};

	//1. Render google map
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 11,
		center: myLatlng
	});
	//2. Add marker
	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title: "Click To See Address"
	})
	//3.Info window
	var infowindow = new google.maps.InfoWindow({
		content: addressString
	});
	marker.addListener('click', function(){
		infowindow.open(map, marker);
	});
});