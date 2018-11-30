// $.validator.setDefaults({
//   submitHandler: function() {
//     alert("submitted!");
//   }
// });
// jQuery.validator.addMethod("phoneUS", function(phone_number, element) {
//   phone_number = phone_number.replace(/\s+/g, "");
//   return this.optional(element) || phone_number.length > 9 &&
//       phone_number.match(/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
// }, "Please specify a valid phone number");

$(document).ready(function () {
  /* Валидация форм v*/

		// validate signup form on keyup and submit
		// $(".ajax-submit").validate({
		// 	rules: {
		// 		user_name: {
		// 			required: true,
		// 			minlength: 2
		// 		},
		// 		user_phone: {
    //       required: true,
    //       matches: "[0-9]+",
    //       minlength: 16, 
    //       maxlength: 16
		// 		}
		// 	},
		// 	messages: {
		// 		user_name: {
		// 			required: "Введите имя",
		// 			minlength: "Минимальная длина имени 2 символа"
		// 		},
		// 		user_phone: {
		// 			required: "Введите номер телефона",
		// 			matches: "Введи номер в таком виде +7-222-22-22-222",
    //       minlength: "Номер должен состоять из 11 знаков",
    //       maxlength: "Номер должен состоять из 11 знаков"
		// 		}
		// 	}
		// });

  /* Обработчик форм. Посылает письмо на почту*/
  $('.ajax-submit').on('submit', function (event) {
    event.preventDefault();
    // console.log($(this).serialize());
    $.ajax({
      type: "POST",
      url: "../mailer/smart.php",
      data: $(this).serialize()
    }).done(function(){
      $(this).find("input").val("");
      alert("Сообщение успешно отправлено");
      $(".ajax-submit").trigger("reset");
    });
    return false;
  });


  /* Вызов модального окна */
  $('#btn-callback-1').on('click', function () {
    $('.modal').toggleClass('flex');
  });
  $('#btn-callback-2').on('click', function () {
    $('.modal').toggleClass('flex');
  });
  $('.modal__close').on('click', function () {
    $('.modal').toggleClass('flex');
  });

  /* Portfolio Slick. Слайдер в блоке Портфолио */
  $('.portfolio-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: false,
    // centerMode: true,
    prevArrow: '<div class="arrow arrow-prev"></div>',
    nextArrow: '<div class="arrow arrow-next"></div>',
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          swipe: true
        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true
        }
      }
    ]
  });
});



/*btnCallBack1 = document.querySelector('#btn-callback-1');
btnCallBack2 = document.querySelector('#btn-callback-2');
modalBlock = document.getElementsByClassName('modal')[0];
btnModalClose = document.getElementsByClassName('modal__close')[0];

console.log(btnCallBack1);
console.log(btnCallBack2);
console.log(modalBlock);
console.log(btnModalClose);

btnCallBack1.addEventListener('click', function(){
  modalBlock.classList.toggle('flex');
});
btnCallBack2.addEventListener('click', function(){
  modalBlock.classList.toggle('flex');
});

btnModalClose.addEventListener('click', function(){
  modalBlock.classList.toggle('flex');
});
*/

/* Всплывающая подсказка в модальном окне */
/*   $(".modal-cards__about").on('mousemove', function (eventObject) {

    $(".modal-tooltip").show()
      .css({
        "top": eventObject.pageY - 250,
        "left": eventObject.pageX - 100       
      })
      .show();

  }).mouseout(function () {

    $(".modal-tooltip").hide()
      .css({
        "top": 0,
        "left": 0
      });
  });
  $(".modal-cards__about").on('touchstart', function (eventObject) {
    $(".modal-tooltip").show()
      .css({
        "top": eventObject.pageY - 250,
        "left": eventObject.pageX - 100      
      })
      .show();

  }).touchend(function () {

    $(".modal-tooltip").hide()
      .css({
        "top": 0,
        "left": 0
      });
  }); */