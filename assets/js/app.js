'use strict';

var linkItem = $('.link');
var iconMenu = $('#icon-toggle');
var menuToggle = $('#menu-responsive-back');

// Scroll positions page


iconMenu.on('click', function (event) {
	event.preventDefault();
	$(this).toggleClass('active');
	menuToggle.toggleClass('active');
});

linkItem.on('click', function (e) {
	e.preventDefault();
	$(this).toggleClass('active');
	$(this).parent().siblings('.item-menu').children('.link').removeClass('active');
	var linkTo = $(this).attr("href");
	console.log(linkTo);
	$('html, body').animate({
		scrollTop: $(linkTo).offset().top - 50
	}, 1000);
});

$('.perfil-link').on('click', function (e) {
	e.preventDefault();
	$('#registro').slideToggle();
});

$('.cerrar').on('click', function (e) {
	e.preventDefault();
	$('#registro').slideToggle();
});