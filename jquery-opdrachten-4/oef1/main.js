var myArray =['Rock', 'Paper', 'Scissors']
var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

document.ready();

$('.play').click(function() {
    location.reload(true);
});

$('.rock').click(function() {
  if (randomItem === 'Rock') {
    $('.result').text('PC chose '+randomItem+' you chose Rock: DRAW')
  } else if (randomItem === 'Scissors') {
    $('.result').text('PC chose '+randomItem+' you chose Rock: YOU WIN')
  } else {
    $('.result').text('PC chose '+randomItem+' you chose Rock: YOU LOSE')
  }
});

$('.paper').click(function() {
  if (randomItem === 'Paper') {
    $('.result').text('PC chose '+randomItem+' you chose Paper: DRAW')
  } else if (randomItem === 'Rock') {
    $('.result').text('PC chose '+randomItem+' you chose Paper: YOU WIN')
  } else {
    $('.result').text('PC chose '+randomItem+' you chose Paper: YOU LOSE')
  }
});

$('.scissors').click(function() {
  if (randomItem === 'Scissors') {
    $('.result').text('PC chose '+randomItem+' you chose Scissors: DRAW')
  } else if (randomItem === 'Paper') {
    $('.result').text('PC chose '+randomItem+' you chose Scissors: YOU WIN')
  } else {
    $('.result').text('PC chose '+randomItem+' you chose Scissors: YOU LOSE')
  }
});
