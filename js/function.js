// JAVASCRIPT DO SCROLL
$('nav a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
		targetOffset = $(id).offset().top,
		menuHeigth =$('nav').innerHeight();

	$('html, body').animate({
		scrollTop: targetOffset - menuHeigth
	}, 500)
		
});
