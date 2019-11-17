$(document).ready(function() {

	//scroll to 
	$('.go-to').click(function() { // ловим клик по ссылке с классом go_to
		event.preventDefault()
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
		if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top + 20 }, 1000); // анимируем скроолинг к элементу scroll_el
		}
		return false; // выключаем стандартное действие
	});

    //MAIL-VALIDATOR
    var form = $('.secForm__form');
    var jVal = {
        'name': function() {
            var ele = $('#user-name');
            var patt = /^[A-Za-zА-Яа-яЁёІіЄє\s]+$/;

            if (!patt.test(ele.val()) || ele.val().length < 2 || ele.val().length > 24) {
                jVal.errors = true;
                ele.addClass('invalid');
            } else {
               ele.removeClass('invalid');
               jVal.errors = false;
            }
        },
        'company': function() {
            var ele = $('#user-company');

            if (ele.val().length < 3) {
                jVal.errors = true;
                ele.addClass('invalid');
            } else {
               ele.removeClass('invalid');
               jVal.errors = false;
            }
        },
        'city': function() {
            var ele = $('#user-city');

            if (ele.val().length < 2) {
                jVal.errors = true;
                ele.addClass('invalid');
            } else {
               ele.removeClass('invalid');
               jVal.errors = false;
            }
        },
        'email': function() {
            var ele = $('#user-email');
            var message = ele.closest('.form-item-wrap').children('.form-item-wrap__err-message');
            var patt = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

            if (!patt.test(ele.val())) {
                jVal.errors = true;
                ele.addClass('invalid');
            } else {
                ele.removeClass('invalid');
                jVal.errors = false;
            }
        },
        'text': function() {
            var ele = $('#user-text');

            if (ele.val().length < 5) {
                jVal.errors = true;
                ele.addClass('invalid');
            } else {
               ele.removeClass('invalid');
               jVal.errors = false;
            }
        }
    };

    $('#submit').click(function() {
        jVal.errors = false;
        jVal.name();
        if (jVal.errors) {
            console.log('errorname');
            return false;
         }
        jVal.company();
        if (jVal.errors) {
            console.log('errorcompany');
            return false;
         }
        jVal.city();
        if (jVal.errors) {
            console.log('errorcity');
            return false;
         }
        
        jVal.email();
        if (jVal.errors) {
            console.log('erroremail');
            return false;
         }
        jVal.text();
        if (jVal.errors) {
            console.log('errortext');
            return false;
         }
    });

    $('#user-name').change(jVal.name);
    $('#user-company').change(jVal.company);
    $('#user-city').change(jVal.city);
    $('#user-email').change(jVal.email);
    $('#user-text').change(jVal.text);
});