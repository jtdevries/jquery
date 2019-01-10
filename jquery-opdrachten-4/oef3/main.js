var mailCheck = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/;
var mail;

var nameCheck = /\w+[a-zA-Z_]/;
var name;

var gsmCheck = /[0-9]/;
var gsm;

$('#name').keyup(function() {
  name = $('#name').val();
  console.log(nameCheck.test(name));
  if (nameCheck.test(name) === true) {
    $('#name').css('border', '2px solid green')
  } else {
    $('#name').css('border', '2px solid red')
  }
});

$('#firstname').keyup(function() {
  name = $('#firstname').val();
  console.log(nameCheck.test(name));
  if (nameCheck.test(name) === true) {
    $('#firstname').css('border', '2px solid green')
  } else {
    $('#firstname').css('border', '2px solid red')
  }
});

$('#mail').keyup(function() {
  mail = $('#mail').val();
  console.log(mailCheck.test(mail));
  if (mailCheck.test(mail) === true) {
    $('#mail').css('border', '2px solid green')
  } else {
    $('#mail').css('border', '2px solid red')
  }
});

$('#gsm').keyup(function() {
  gsm = $('#gsm').val();
  console.log(gsmCheck.test(gsm));
  if (gsmCheck.test(gsm) === true) {
    $('#gsm').css('border', '2px solid green')
  } else {
    $('#gsm').css('border', '2px solid red')
  }
});
