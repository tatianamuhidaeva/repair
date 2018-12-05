$(document).ready(function (){
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
