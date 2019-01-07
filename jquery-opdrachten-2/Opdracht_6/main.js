// Write your solution here
$('#green').mouseenter(function() {
  $('#text').css('color', 'green')
});

$('#red').mouseenter(function() {
  $('#text').css('color', 'red')
});

$('#blue').mouseenter(function() {
  $('#text').css('color', 'blue')
});

$('#blue, #red, #green').mouseleave(function() {
  $('#text').css('color', 'black')
});
