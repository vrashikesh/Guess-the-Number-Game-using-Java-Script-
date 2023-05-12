'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // If no number is entered in box

  if (!guess) {
    displayMessage('Please Enter a Number to Play');
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Number is correct';

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#009933';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? 'Entered Number is Higher'
          : 'Entered Number is Lower'
      );

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Sorry You Lost !!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start Guessing... ');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').textContent = '';
  document.querySelector('.number').textContent = '??';

  document.querySelector('body').style.backgroundColor = '#660033';

  document.querySelector('.number').style.width = '15rem';
});
