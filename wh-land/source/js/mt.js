document.addEventListener('DOMContentLoaded', () => {

	if(document.querySelector('.mtFedback-carousel')) {

		setTimeout(function() {
			//SWIPER
			var mySwpr = new Swiper('.mtFedback-carousel', {
				loop: true,
				centeredSlides: true,
				slidesPerView: 1,
				speed: 800,
				simulateTouch: false,
				autoHeight: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				pagination: {
					el: '.mtFedback-paginator',
					clickable: true, 
				},
			});
			
			let slides = document.querySelectorAll('.swiper-slide ');

			//slide-height
			mySwpr.on('slideChange', function() {
				slides.forEach(slide => {
				let opnBtn = slide.querySelector('.read-more');
				let clsBtn = slide.querySelector('.read-less');
				let textWrap = slide.querySelector('.mtFedback__text');
				
				textWrap.classList.remove('open');
				opnBtn.style.display = 'block';
				clsBtn.style.display = 'none';

				})
			});

			slides.forEach(slide => {
				let opnBtn = slide.querySelector('.read-more');
				let clsBtn = slide.querySelector('.read-less');
				let textWrap = slide.querySelector('.mtFedback__text');

				opnBtn.addEventListener('click', function() {
					
					textWrap.classList.add('open');
					opnBtn.style.display = 'none';
					clsBtn.style.display = 'block';
				})

				clsBtn.addEventListener('click', function() {
					textWrap.classList.remove('open');
					opnBtn.style.display = 'block';
					clsBtn.style.display = 'none';
				})
			})
		}, 1000)



	}
	setTimeout(function() {
		//SWIPER
		var swiper = new Swiper('.enFb__swiper', {
			loop: true,
			slidesPerView: 2,
			speed: 800,
			simulateTouch: false,
			autoHeight: true,
			navigation: {
				nextEl: '.swiper-button-next.enFb__nav',
				prevEl: '.swiper-button-prev.enFb__nav',
			},
			breakpoints: {
				1024: {
					slidesPerView: 1.3,
					centeredSlides: true,
					simulateTouch: true,
				}
			}
		});
	}, 1000)

});