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
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive: {
			//break point from 0 up
			0: {
				items: 1
			},
			//break point from 480 up
			480: {
				items: 2
			}
		}
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
				}, 2000);
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
			navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			responsive: {
			//break point from 0 up
			0: {
				items: 2
			},
			//break point from 480 up
			480: {
				items: 3
			},
			//break point from 480 up
			768: {
				items: 6
			}
		}
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
		});
		//3.Info window
		var infowindow = new google.maps.InfoWindow({
			content: addressString
		});
		marker.addListener('click', function(){
			infowindow.open(map, marker);
		});
	

		// 4. resize, center marker
		google.maps.event.addDomListener(window, 'resize', function(){
			var center = map.getCenter();
			google.maps.event.trigger(map, 'resize');
			map.setCenter(center);
		});
	});
/*-------------------------
		Navigation
--------------------------*/

	/*Show/hide white navigation*/
	$(function(){
		$(window).scroll(function(){
			if( $(window).scrollTop() > 50){

				$('nav').addClass("white-nav-top");

				//dard logo
				$(".navbar-brand img").attr('src','img/logo/logo-dark.png');

				//Show back to top btn
				$("#back-to-top").fadeIn();

			}else{
				$('nav').removeClass("white-nav-top");

				//white logo
				$(".navbar-brand img").attr('src','img/logo/logo.png');

				//Hide back to top btn
				$("#back-to-top").fadeOut();
			}
		});
	});
	//smooth scroll
	$(function (){
		$('a.smooth-scroll').click(function(event){
			event.preventDefault();
			//get section Id like #about, #work, etc
			var section_id = $(this).attr("href");

			$("html, body").animate({
				scrollTop: $(section_id).offset().top
			},1250, "easeInOutExpo");

		});
	});


// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	}	
});

$(function(){
	// Show mobile nav
	$('#mobile-nav-open-btn').click(function(){
		$('#mobile-nav').css('height','100%');
	});
	//Hide mobile nav when click X or 1 of the button
	$('#mobile-nav-close-btn, #mobile-nav a').click(function(){
		$('#mobile-nav').css('height','0');
	});
});

$(function(){
	new WOW().init();
});

$(window).on('load', function(){
	$('#home-heading-1').addClass('animated fadeInDown');
	$('#home-heading-2').addClass('animated fadeInLeft');
	$('#home-text').addClass('animated zoomIn');
	$('#home-btn').addClass('animated zoomIn');
	$('#arrow-down i').addClass('animated fadeInDown infinite');
});