  var name;
  var firstname;
  var dateOfBirth;
  var placeOfBirth;
  var job;
  var company;

$(document).ready(function() {
  $('.generate').click(function() {
    name = $('#name').val();
    firstname = $('#firstname').val();
    dateOfBirth = $('#dateOfBirth').val();
    placeOfBirth = $('#placeOfBirth').val();
    job = $('#job').val();
    company = $('#company').val();
    $('.result').text('my name is '+firstname+' '+name+' born on '+dateOfBirth+' at '+placeOfBirth+' my occupation is '+job+' at '+company);
  });
});
