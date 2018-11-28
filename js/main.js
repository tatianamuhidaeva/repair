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

$(document).ready(function(){
  $('#btn-callback-1').on('click',function(){
    $('.modal').toggleClass('flex');
  });
  $('#btn-callback-2').on('click',function(){
    $('.modal').toggleClass('flex');
  });
  $('.modal__close').on('click',function(){
    $('.modal').toggleClass('flex');
  });
  
  $(".modal").click(function(event){

  console.log("x = " + event.pageX);
  console.log("y = " + event.pageY);
});
  $(".modal-cards-about").mousemove(function (eventObject) {

    // $data_tooltip = $(this).attr("data-tooltip");
    console.log('mousemove');
    console.log(eventObject.pageX);

    $(".modal-tooltip").show()
                      .css({ 
                        "top" : eventObject.pageY - 250,                        
                        "left": eventObject.pageX - 100

                    //  "bottom" : eventObject.pageY + 5,
                    // "left" : eventObject.pageX + 5                    
                 })
                 .show();

}).mouseout(function () {

    $(".modal-tooltip").hide()
                 .css({
                     "top" : 0,
                    "left" : 0
                 });
});
});
