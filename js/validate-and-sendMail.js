$(document).ready(function (){
  $('label.error').prop('disable', 'disable');
                        
  /* Валидация форм v*/
  $.validator.addMethod("letters", function (value, element) {
    return this.optional(element) || value == value.match(/^[0-9a-zA-ZА-Яа-я\s]*$/);
  });
  $.validator.addMethod("isPhone", function (value, element) {
    return this.optional(element) || value == value.match(/\+7[0-9]{10}/);
  });
  $successMsg = $(".messageShow");


  $('.btn-submit').on('click', function (event) {
    event.preventDefault();
    var flag = true;
    var form = $(this).parent();
    var name = form.find(".input-name").val(),
        phone = form.find(".input-tel").val();
    var nameTrim = name.replace(/\s/g,'');
    var errorNameL = form.find('label.error-name');
    var errorPhoneL = form.find('label.error-phone');
    console.log(errorNameL);
    console.log(errorPhoneL);
    console.log(nameTrim.match(/^[0-9a-zA-ZА-Яа-я\s]*$/));
    console.log(phone.match(/\+7[0-9]{10}/));
    //проверка телефона
    if (phone.match(/\+7[0-9]{10}/) === null){
      errorPhoneL.text('Введите номер в формате +79998877666');
      errorPhoneL.prop('visibility', 'visible');
      flag = false;
    } else {
      errorPhoneL.prop('visibility', 'hidden');
    }
    if (nameTrim === ""){
      errorNameL.text('Пожалуйста, введите имя');
      errorNameL.prop('visibility', 'visible');
      flag = false;      
    } else if (nameTrim === null){
      errorNameL.text('Разрешены только буквы, цифры и пробелы');
      errorNameL.prop('visibility', 'visible');
      flag = false;    
    } else if (nameTrim.length < 3){      
      errorNameL.text('В имени должно быть больше двух букв');
      errorNameL.prop('visibility', 'visible');
      flag = false;    
    } else {
      errorNameL.prop('visibility', 'hidden');
    }
    if (flag){
      console.log("УРААА, отправляем!!!!");
      // yaCounter51427879.reachGoal('btn');  //Яндекс-метрика. Цель ОТПРАВКА Заявки
      // $.ajax({
      //   type: "POST",
      //   url: "./mailer/smart.php",
      //   data: form.serialize()
      // }).done(function () {
      //   form.find(".ajax-submit input").val("");
      //   $('#modal-success').toggleClass('flex');
      //   form.trigger("reset");
      // });
      errorNameL.prop('visibility', 'hidden');
      errorPhoneL.prop('visibility', 'hidden');
      // errorPhoneL.prop('display', 'none');
    }
  });
});