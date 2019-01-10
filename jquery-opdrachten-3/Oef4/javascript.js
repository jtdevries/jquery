$('.b1').click(function(){
  if ($('.cube').height() <100) {
    $('.cube').height('+=10');
  } else {
    $('.cube').height('10');
  }
});

$('.b2').click(function(){
  $('.cube').css('background-color', 'green')
});

$('.b3').click(function(){
  $('.cube').css('background-color', '')
});

$('.b4').click(function(){
  $('.cube').hide();
});

$('.b5').click(function(){
  $('.cube').show();
});
