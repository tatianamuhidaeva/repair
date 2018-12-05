$(document).ready(function (){
  $('label.error').css('visibility', 'hidden');
                        
  $('.btn-submit').on('click', function (event) {
    event.preventDefault();
    var flag = true;
    var form = $(this).parent();
    var name = form.find(".input-name").val(),
        phone = form.find(".input-tel").val();
    var nameTrim = name.replace(/\s/g,'');
    var errorNameL = form.find('label.error-name');
    var errorPhoneL = form.find('label.error-phone');
    // console.log(errorNameL);
    // console.log(errorPhoneL);
    // console.log(nameTrim.match(/^[0-9a-zA-ZА-Яа-я\s]*$/));
    // console.log(phone.match(/\+7[0-9]{10}/));
    //проверка телефона
    if (phone === ""){
      errorPhoneL.text('Пожалуйста, введите номер');
      errorPhoneL.css('visibility', 'visible');
      flag = false;
    } else if (phone.match(/\+7[0-9]{10}/) === null){
      errorPhoneL.text('Введите номер в формате +79998877666');
      errorPhoneL.css('visibility', 'visible');
      flag = false;
    } else {
      errorPhoneL.css('visibility', 'hidden');
    }
    if (nameTrim === ""){
      errorNameL.text('Пожалуйста, введите имя');
      errorNameL.css('visibility', 'visible');
      flag = false;      
    } else if (nameTrim === null){
      errorNameL.text('Разрешены только буквы, цифры и пробелы');
      errorNameL.css('visibility', 'visible');
      flag = false;    
    } else if (nameTrim.length < 3){      
      errorNameL.text('В имени должно быть больше двух букв');
      errorNameL.css('visibility', 'visible');
      flag = false;    
    } else {
      errorNameL.css('visibility', 'hidden');
    }
    if (flag){
      yaCounter51427879.reachGoal('btn');  //Яндекс-метрика. Цель ОТПРАВКА Заявки
      $.ajax({
        type: "POST",
        url: "./mailer/smart.php",
        data: form.serialize()
      }).done(function () {
        form.find(".ajax-submit input").val("");
        $('#modal-success').toggleClass('flex');
        form.trigger("reset");
      });
      errorNameL.css('visibility', 'hidden');
      errorPhoneL.css('visibility', 'hidden');
      errorPhoneL.css('display', 'none');
    }
    return false;
  });
});