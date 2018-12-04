$(document).ready(function () {
  $('button.btn-submit').prop('disabled', 'disabled');
  
  /* Валидация форм v*/
  $.validator.addMethod("letters", function (value, element) {
    return this.optional(element) || value == value.match(/^[a-zA-ZА-Яа-я\s]*$/);
  });
  $.validator.addMethod("isPhone", function (value, element) {
    return this.optional(element) || value == value.match(/\+7[0-9]{10}/);
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
      user_phone: "Введите номер в формате +79998877666"
    },
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
      user_phone: "Введите номер в формате +79998877666"
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
      user_phone: "Введите номер в формате +79998877666"
    }
  });
  $('#form-1 input').on('keyup blur', function () { // fires on every keyup & blur
    if ($('#form-1').valid()) {
       // checks form for validity
      $('#form-1 > .btn-submit').prop('disabled', false); // enables button
    } else {
      
      $('#form-1 > .btn-submit').prop('disabled', 'disabled'); // disables button
    }
  });
  $('#form-2 input').on('keyup blur', function () { // fires on every keyup & blur
    if ($('#form-2').valid()) {
       // checks form for validity
      $('#form-2 > .btn-submit').prop('disabled', false); // enables button
    } else {
      
      $('#form-2 > .btn-submit').prop('disabled', 'disabled'); // disables button
    }
  });
  $('#form-3 input').on('keyup blur', function () { // fires on every keyup & blur
    if ($('#form-3').valid()) {
       // checks form for validity
      $('#form-3 > .btn-submit').prop('disabled', false); // enables button
    } else {
      
      $('#form-3 > .btn-submit').prop('disabled', 'disabled'); // disables button
    }
  });
  $('.ajax-submit').on('submit', function (event) {
    // if ($('#form-1').valid()) {
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: "./mailer/smart.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find(".ajax-submit input").val("");
      $('#modal-success').toggleClass('flex');
      $(".ajax-submit").trigger("reset");
      $('.ajax-submit .btn-submit').prop('disabled', 'disabled');
    });
    return false;
    // }
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
  $('.modal-success__close').on('click', function () {
    $('#modal-success').toggleClass('flex');
  });
  $('.btn-success__close').on('click', function () {
    $('#modal-success').toggleClass('flex');
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


// Adjusted version of https://codepen.io/bramus/pen/yikfd
// This version also reverses the animation when elements that got slide into view
// succesively slide out of view again.

// In case you're wondering about that `.css('top', $animatable.css('top'))` part:
// -> it's the magic part in this code as it triggers layout, so the browser will 
// render after having deleted the animate-in class and having added the animate-out
// class. That way the animation-play-state will actually change from running to 
// paused to running again, thus triggering the start of the animation

jQuery(function($) {
  
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    
    // Check all animatables and animate them if necessary
		$animatables.each(function(i) {
       var $animatable = $(this);
      
      // Items that are "above the fold"
			if (($animatable.offset().top + $animatable.height() + 50) < offset) {
        
        // Item previously wasn't marked as "above the fold": mark it now
        if (!$animatable.hasClass('animate-in')) {
          $animatable.removeClass('animate-out').css('top', $animatable.css('top')).addClass('animate-in');
        }

			}
      
      // Items that are "below the fold"
      else if (($animatable.offset().top + $animatable.height() + 50) > offset) {
        
        // Item previously wasn't marked as "below the fold": mark it now
        if ($animatable.hasClass('animate-in')) {
          $animatable.removeClass('animate-in').css('top', $animatable.css('top')).addClass('animate-out');
        }

      }

    });

	};
  
  // Hook doAnimations on scroll, and trigger a scroll
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

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