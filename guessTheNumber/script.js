'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    displayMessage('🤦‍♀️ Koi Number Daalo To Sahi Bhai!');
  }

  //when the guess is correct
  else if (guess === secretNumber) {
    displayMessage('💃 Saat Karod!!!!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //when the guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      if (guess < secretNumber) {
        displayMessage('👼 Too Low!');
      } else if (guess > secretNumber) {
        displayMessage('👴 Too High!');
      }
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💣💥 You Lost The Game!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('💬 Start Guessing The Number:');

  score = 20;

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
