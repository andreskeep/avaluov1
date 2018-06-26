'use strict';

const linkItem = $('.link')

const iconMenu = $('#icon-toggle')
const menuToggle = $('#menu-responsive-back')

iconMenu.on('click', function(event) {
	event.preventDefault();
	$(this).toggleClass('active')
	menuToggle.toggleClass('active')
});

linkItem.on('click', function(e) {
	e.preventDefault()
	$(this).toggleClass('active')
	$(this).parent().siblings('.item-menu').children('.link').removeClass('active')
});

$('.perfil-link').on('click', function(e){
	e.preventDefault()
	$('#registro').slideToggle()
});

$('.cerrar').on('click', function(e){
	e.preventDefault()
	$('#registro').slideToggle()
});


$(window).on('scroll', (e)=>{
	console.log($(this).scrollTop())
	console.log(aboutTop)
});