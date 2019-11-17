$(document).ready(function() {

	//dateChange script
	// let date = $('.js-date');
	// let month = new Date().getMonth()+1;
	// let day = new Date().getDate();

	// if (month == 1){
	// 	if (day <= 24) {
	// 		date.html('24 января ')
	// 	} else {
	// 		date.html('в январе')
	// 	}
	// }

	//SWIPER
	var mySwiper = new Swiper('.feedbacks-carousel', {
		centeredSlides: true,
		slidesPerView: 1,
		speed: 500,
		simulateTouch: false, 
		autoHeight: true,
		navigation: {
			nextEl: '.swiper-button-next.fb-btn',
			prevEl: '.swiper-button-prev.fb-btn',
		},
		pagination: {
			el: '.paginator',
			clickable: true,
		},
	});
	
	//SWIPER
	// var videoSwiper = new Swiper('.video-carousel', {
	// 	centeredSlides: true,
	// 	slidesPerView: 1,
	// 	speed: 500,
	// 	simulateTouch: false, 
	// 	navigation: {
	// 		nextEl: '.vf__next',
	// 		prevEl: '.vf__prev',
	// 	},
	// 	pagination: {
	// 		el: '.vf__paginator',
	// 		clickable: true,
	// 	},
	// });

	//DO NOT LEAVE - MODAL
	var guard = true; 								//переменная для контроя вызовов модалок
	var key = 'wasHere';							//название ключа

	$('#order-form').submit(function() {
		guard = false; 								//после отправки формы(предотвращаем последующие вызовы модалки)
	});

	if (localStorage.getItem(key) == null) { 		//выполнить проверку на наличие ключа в localstorage
		localStorage.setItem(key, 'true'); 			//если его там нет - добавлять (для сдледующего визита)
		setTimeout(function() { 					//через 5 сек прибывания на странице
			$(document).mouseleave(function(e) {	//при уведении курсора из документа вверх
				if (guard && e.clientY < 5) { 		//когда фолс - не разрешает вызывать поп-ап
					$('#clck').click(); 			//вызывать модалку
					guard = false;					//1 вызов за сеанс(предотвращаем последующие вызовы модалки)
				}
			});
		}, 5000);
	}



	//MAGNIFIC POPUP
	$('.open-popup').magnificPopup({
		type: 'inline',
	});
	$('.mfp-exit').click(function() {
		$.magnificPopup.close();
	});

	//slide-height
	mySwiper.on('slideChange', function() {
		$('.feedback-text').removeClass('full-text');
		$('.read-less').slideUp(300);
		$('.read-more').slideDown(600);
	});

	$('.read-more').click(function() {
		$(this).closest('.feedback-text-wrap').find('.feedback-text').addClass('full-text');
		$(this).slideUp(300).next('.read-less').slideDown(600);
	});

	$('.read-less').click(function() {
		$(this).closest('.feedback-text-wrap').find('.feedback-text').removeClass('full-text');
		$(this).slideUp(300).prev('.read-more').slideDown(600);
	});

	//scroll to 
	$('.go-to').click(function() { // ловим клик по ссылке с классом go_to
		event.preventDefault()
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
		if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top + 20 }, 1000); // анимируем скроолинг к элементу scroll_el
		}
		return false; // выключаем стандартное действие
	});

	//form-inputs
	$('.input-field').on('focus', function() {
		$(this).parent().addClass('input-focus');
	});
	$('.input-field').on('blur', function() {
		$(this).parent().removeClass('input-focus');
	});
    var tf = $(".tel-field");
	if (tf) {
    	$.mask.definitions['9'] = '';
    	$.mask.definitions['d'] = '[0-9]';
    	jQuery(function($) {
    	 $(".tel-field").mask("+79ddddddddd");
    	});
    }
});