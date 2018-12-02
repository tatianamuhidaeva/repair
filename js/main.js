$(document).ready(function () {

  // });
  /* Валидация форм v*/
  $.validator.addMethod("letters", function (value, element) {
    return this.optional(element) || value == value.match(/^[a-zA-ZА-Яа-я\s]*$/);
  });
  $.validator.addMethod("isPhone", function (value, element) {
    return this.optional(element) || value == value.match(/\+7\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}\-[0-9]{3}/);
  });
  $successMsg = $(".messageShow");

  $("#form-1").validate({
    rules: {
      user_name: {
        required: true,
        minlength: 3,
        letters: true
      },
      user_phone: {
        required: true,
        isPhone: true
      }
    },
    messages: {
      user_name: "Введите Ваше имя (Более 2 букв, рус en, пробел)",
      user_phone: "Введите номер в формате +7-999-99-99-999"
    },
    submitHandler: function () {
      $successMsg.show();
    }
  });
  $("#form-2").validate({
    rules: {
      user_name: {
        required: true,
        minlength: 3,
        letters: true
      },
      user_phone: {
        required: true,
        isPhone: true
      }
    },
    messages: {
      user_name: "Введите Ваше имя (Более 2 букв, рус en, пробел)",
      user_phone: "Введите номер в формате +7-999-99-99-999"
    },
    submitHandler: function () {
      $successMsg.show();
    }
  });
  $("#form-3").validate({
    rules: {
      user_name: {
        required: true,
        minlength: 3,
        letters: true
      },
      user_phone: {
        required: true,
        isPhone: true
      }
    },
    messages: {
      user_name: "Введите Ваше имя (Более 2 букв, рус en, пробел)",
      user_phone: "Введите номер в формате +7-999-99-99-999"
    },
    // submitHandler: function () {
    //   $successMsg.show();
    // }
  });


  /* Обработчик форм. Посылает письмо на почту*/
  $('.ajax-submit').on('submit', function (event) {
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: "./mailer/smart.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find("input").val("");
      $('#modal-success').toggleClass('flex');
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
  $('#modal-success').on('click', function () {
    $('.modal-success').toggleClass('flex');
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