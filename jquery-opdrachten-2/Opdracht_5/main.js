// Write your solution here
$('#name, #first_name').focus(function() {
  $('#name, #first_name').css('border', '1px solid green');
});

$('#name, #first_name').focusout(function() {
  $('#name, #first_name').css('border', '1px solid red');
});
