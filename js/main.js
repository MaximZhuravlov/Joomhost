$(document).ready(function() {
	$(".reviews-slider").slick({
		infinite: false,
		arrows: false,
		dots: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 880,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});

	$(".mobile-menu").on("click", function() {
		$(".menu-list").slideToggle();
	});

	$(".popup-item-button").magnificPopup({
		type: "inline",
		midClick: true,
		closeBtnInside: true,
		preloader: false,
		mainClass: "mfp-fade",
		removalDelay: 300,
		fixedContentPos: true,
		overflowY: true
	});
});