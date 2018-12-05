$(document).ready(function (){
 

});


// Adjusted version of https://codepen.io/bramus/pen/yikfd
// This version also reverses the animation when elements that got slide into view
// succesively slide out of view again.

// In case you're wondering about that `.css('top', $animatable.css('top'))` part:
// -> it's the magic part in this code as it triggers layout, so the browser will 
// render after having deleted the animate-in class and having added the animate-out
// class. That way the animation-play-state will actually change from running to 
// paused to running again, thus triggering the start of the animation




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