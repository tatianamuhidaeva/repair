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


$(document).ready(function () {

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