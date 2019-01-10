  let income;
  let gender;
  let children;


  $(document).ready(function() {
    $('.calculate').click(function() {
      income = $('#formIncome').val();
      $('.result').text(income*(70+parseFloat(gender)+parseFloat(children))/100);
    });


    $('.gender').click(function() {
      gender = $('.gender').val();
    });

    $('.children').click(function() {
      children = $('.children').val();
    });

});
