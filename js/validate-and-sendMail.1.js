$(document).ready(function (){
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
    yaCounter51427879.reachGoal('btn');
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
  

});
