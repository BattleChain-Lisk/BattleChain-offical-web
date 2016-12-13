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

$('#details .carousel.carousel-slider').carousel({full_width: true});

function init() {
   setupMenuLinks();

   setupDetails();

   setupSlideTop();
}

function setupMenuLinks() {
   $('#main-title .nav-option a').on('click', function (ev) {
		var target = $(this.href.substr(this.href.indexOf('#')));

		ev.preventDefault();
		if (target && target.length > 0) {
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
}

function setupDetails() {
   var icons = $('.icon-square'),
      links = $('.info-card h3');

      icons.on('click', function(ev){
         ev.preventDefault();

         icons.removeClass('selected-icon');
         $(this).addClass('selected-icon');

         selectCard($(this));
      });

      links.on('click', function(ev) {
         ev.preventDefault();

         selectCard($(this));
      });
}

function selectCard(selection) {
   var pos = selection.data('position') || selection.siblings('.icon-square').data('position');
   $('#details .carousel').carousel('set', pos - 1);
}

function setupSlideTop() {
   $('.slide-top').on('click', function () {
		$('html, body').animate({
			scrollTop: $('#main-title').offset().top
		}, 1000);
	});
}
