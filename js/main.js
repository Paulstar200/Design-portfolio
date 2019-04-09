$(".animsition").animsition({
	linkElement: 'header a',
	inClass: 'fade-in-right-lg',
	outClass: 'fade-out-right-lg',
	inDuration: 1000,
	outDuration: 500
});

$('.header').sticky({
	getWidthFrom: '.container',
	responsiveWidth: true
});