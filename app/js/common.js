(function ($) {
	"use strict";

	// Preloader (if the #preloader div exists)
	$(window).on('load', function () {
		if ($('#preloader').length) {
			$('#preloader').delay(100).fadeOut('slow', function () {
				$(this).remove();
			});
		}
	});
12332312123
	// Back to top button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});
	$('.back-to-top').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1500, 'easeInOutExpo');
		return false;
	});

	// Initiate the wowjs animation library
	new WOW().init();

	// Header scroll class
	$(window).scroll(function () {
		if ($(this).scrollTop() > 140) {
			$('#header').addClass('header-scrolled');
			// $('#header-logo').fadeIn();
		} else {
			$('#header').removeClass('header-scrolled');
			// $('#header-logo').fadeOut();
		}
	});

	if ($(window).scrollTop() > 100) {
		$('#header').addClass('header-scrolled');
	}

	// Smooth scroll for the navigation and links with .scrollto classes
	$('.main-nav a, .mobile-nav a, .scrollto').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			if (target.length) {
				var top_space = 0;

				if ($('#header').length) {
					top_space = $('#header').outerHeight();

					if (!$('#header').hasClass('header-scrolled')) {
						top_space = top_space + 50;
					}
				}

				$('html, body').animate({
					scrollTop: target.offset().top - top_space
				}, 1500, 'easeInOutExpo');

				if ($(this).parents('.main-nav, .mobile-nav').length) {
					$('.main-nav .active, .mobile-nav .active').removeClass('active');
					$(this).closest('li').addClass('active');
				}

				if ($('body').hasClass('mobile-nav-active')) {
					$('body').removeClass('mobile-nav-active');
					$('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
					$('.mobile-nav-overly').fadeOut();
				}
				return false;
			}
		}
	});

	// Navigation active state on scroll
	var nav_sections = $('section');
	var main_nav = $('.main-nav, .mobile-nav');
	var main_nav_height = $('#header').outerHeight();

	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop();

		nav_sections.each(function () {
			var top = $(this).offset().top - main_nav_height,
				bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom) {
				main_nav.find('li').removeClass('active');
				main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
			}
		});
	});

	// $('.dashboard_image').slick({
	// 	arrows: false,
	// 	dots: true,
	// 	infinite: true,
	// 	speed: 500,
	// 	fade: true,
	// 	cssEase: 'linear',
	// 	autoplay: true,
	// 	autoplaySpeed: 1000,
	// 	pauseOnHover: false,
	// 	pauseOnDotsHover: true
	// });


	//E-mail Ajax Send
	// $(".form").submit(function () { //Change
	// 	var th = $(this);
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php", //Change
	// 		data: th.serialize()
	// 	}).done(function () {
	// 		$('.form_thx').removeClass('form_thx-hide');
	// 		$('.form_thx').addClass('form_thx-active');
	// 		setTimeout(function () {
	// 			// Done Functions
	// 			$('.form_thx').addClass('form_thx-hide');
	// 			$('.form_thx').removeClass('form_thx-active');
	// 			th.trigger("reset");
	// 		}, 1500);
	// 	});
	// 	return false;
	// });

})(jQuery);

var rellax = new Rellax('.rellax');

// intro dwnl button

const dwnBtn = document.querySelector('.dload-btn');
const introForm = document.querySelector('.intro_form');

function showForm() {
	setTimeout(() => {
		introForm.classList.toggle('intro_form-active');
		dwnBtn.style.display = 'none';
	}, 400);
	// this.style.opacity = 0;
	// this.style.display = 'none';
	this.classList.add('fadeout-btn');
}
const dwnBtn2 = document.querySelector('.dload-btn-chr');
const introForm2 = document.querySelector('.chr_form');

function showForm2() {
	setTimeout(() => {
		introForm2.classList.toggle('chr_form-active');
		dwnBtn2.style.display = 'none';
	}, 400);
	// this.style.opacity = 0;
	// this.style.display = 'none';
	this.classList.add('fadeout-btn');
}


dwnBtn.addEventListener('click', showForm);
dwnBtn2.addEventListener('click', showForm2);

// intro dwnl button

// Sign On
const signBlock = document.querySelectorAll('.dashboard_signon__block');
const signTop = document.querySelectorAll('.dashboard_signon__block-top');
const signContent = document.querySelectorAll('.dashboard_signon__block-content');
const imgs = document.querySelectorAll('.dashboard_img');

function rotateArrow(e) {
	e.preventDefault();
	signBlock.forEach(t => t.classList.remove('arrow_active'));
	signContent.forEach(t => t.classList.remove('content_active'));
	imgs.forEach(t => t.classList.remove('dashboard_img-active'));
	this.classList.add('arrow_active');
	let classes = [...this.classList];
	if (classes.includes('dashboard_signon__block-1')) {
		imgs[0].classList.add('dashboard_img-active');
	} else if (classes.includes('dashboard_signon__block-2')) {
		imgs[1].classList.add('dashboard_img-active');
	} else if (classes.includes('dashboard_signon__block-3')) {
		imgs[2].classList.add('dashboard_img-active');
	} else if (classes.includes('dashboard_signon__block-4')) {
		imgs[3].classList.add('dashboard_img-active');
	}
	let content = this.children[1];
	content.classList.add('content_active');
}

signBlock.forEach(top => top.addEventListener('click', rotateArrow));

// Sign On

// Cookies BTN

const cookies = document.querySelector('.cookies');
const cookiesBtn = document.querySelector('.cookies_button');

function hideCookies() {
	cookies.classList.add('cookies-hide');
	setTimeout(() => {
		cookies.style.display = 'none';
	}, 200)
}

cookiesBtn.addEventListener('click', hideCookies);

