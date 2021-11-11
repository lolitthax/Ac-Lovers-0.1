// JS DOS PAQUERAS
let ismobile = false;
let apollo = document.getElementById("imgApollo");
let kae = document.getElementById("imgKae");
let naomi = document.getElementById("imgNaomi");

function mobile(){
    if (window.innerWidth <= 1366){
        ismobile = true;
        apollo.classList.add("display-none");
        kae.classList.add("display-none");
        naomi.classList.add("display-none");
    } else { ismobile = false;
        console.log('texto aqui pra ver se deu ruim')
    }
}

function trocatitulo(){
    document.getElementById("titulo").textContent = "Apollo"
    document.getElementById("texto").textContent = "Texto elaborado"
    if (ismobile === false){
        apollo.classList.add("display-block")
        apollo.classList.remove("display-none")
        kae.classList.add("display-none")
        naomi.classList.add("display-none")

    }
}

function trocatituloK(){
    document.getElementById("titulo").textContent = "Kae"
    document.getElementById("texto").textContent = "Texto elaborado"
    if (ismobile === false){
        kae.classList.add("display-block")
        kae.classList.remove("display-none")
        apollo.classList.add("display-none")
        naomi.classList.add("display-none")

    }
}
function trocatituloN(){
    document.getElementById("titulo").textContent = "Naomi"
    document.getElementById("texto").textContent = "Texto elaborado"
    if (ismobile === false){
        naomi.classList.add("display-block")
        naomi.classList.remove("display-none")
        apollo.classList.add("display-none")
        kae.classList.add("display-none")

    }
}
// JS DOS PAQUERAS FINAL

// SCROLL
// Scroll suave para link interno
$('nav a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('nav').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});

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

// Animação ao Scroll
(function(){
	var $target = $('.anime'),
			animationClass = 'anime-start',
			offset = $(window).height() * 3/4;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function(){
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function(){
		animeScroll();
	}, 200));
})();
// SCROLL FINAL