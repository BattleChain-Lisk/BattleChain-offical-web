$(document).ready(function(){
   init();
})

$(window).on('scroll', function () {
   var sy = window.pageYOffset || $(window).scrollTop(),
      slideTop = $('.slide-top');

   if (sy >= $('#main-title').offset().top + 50) {
      slideTop.addClass('st-is-visible');
   } else {
      slideTop.removeClass('st-is-visible');
   }
});


function init() {
   setupMenuLinks();

   setupDetailsCarousel();

   setupSlideTop();
}

function setupMenuLinks() {
   $('#main-title .nav-option a').on('click', function (ev) {
		var target = $(this.href.substr(this.href.indexOf('#')));

		if (target && target.length > 0) {
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
}

function setupDetailsCarousel() {
   var icons = $('.icon-square'),
      links = $('.info-card h3'),
      carousel = $('.detail-carousel');

      icons.on('click', function(ev){
         ev.preventDefault();
         selectCard($(this), carousel);
      });

      links.on('click', function(ev) {
         ev.preventDefault();
         selectCard($(this).siblings('.icon-square'), carousel);
      });

      carousel.slick({
         dots: true,
         speed: 500,
         arrows: false,
         cssEase: 'ease'
      });

      carousel.on('afterChange', function(event, slick, currentSlide){
         icons.removeClass('selected-icon');
         $(icons[currentSlide]).addClass('selected-icon');
      });
}

function selectCard(selection, carousel) {
   var pos = selection.data('position');
   carousel.slick('slickGoTo', pos - 1);
}

function setupSlideTop() {
   $('.slide-top').on('click', function () {
		$('html, body').animate({
			scrollTop: $('#main-title').offset().top
		}, 1000);
	});
}

