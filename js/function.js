
// Debounce do Lodash
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
// JAVASCRIPT DO SCROLL
$('.scroll-effect').click(function (e) {
	e.preventDefault();
	var id = $(this).attr('href'),
		targetOffset = $(id).offset().top,
		menuHeigth = $('nav').innerHeight();

	$('html, body').animate({
		scrollTop: targetOffset - menuHeigth
	}, 500)

});

// FUNÇÃO ANIMADA DAS SEÇÕES
(function () {
	var $target = $('.anime'),
		animationClass = 'anime-start',
		offset = $(window).height() * 3 / 4;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function () {
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		})

	}
	animeScroll();
	$(document).scroll(debounce (function() {
		animeScroll();
	},200));
}());

