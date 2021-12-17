'use strict';

//DOM and DOM manipulation
// document.querySelector('.message').textContent = `🎉 Winningg yeyy`;
// document.querySelector('.guess').value;

//variables
let numberMagic = Math.trunc(Math.random() * 20) + 1;
console.log(numberMagic);
let score = 20;
let highscore = 0;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DRY principle
//functions
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // there should be a value
  if (!guess) {
    displayMessage(`No Number 😢`);
  } else if (guess === numberMagic) {
    displayMessage(`YOU WIN 🎉`);
    document.querySelector('body').style.backgroundColor = `#60b347`;
    document.querySelector('.number').style.width = `30rem`;
    document.querySelector('.number').textContent = numberMagic;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== numberMagic) {
    // number different than magic number
    if (score > 1) {
      displayMessage(guess > numberMagic ? `Too high ⚡` : `Too low 👇`);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(`you lost`);
      document.querySelector('.score').textContent = 0;
    }
  }
});

//only is called when the event happens
// whenever we get something from the input field it is a string!!

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  numberMagic = Math.trunc(Math.random() * 20) + 1;
  displayMessage(`Start guessing...`);
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = ``;
  document.querySelector('body').style.backgroundColor = `#222`;
  document.querySelector('.number').style.width = `15rem`;
  document.querySelector('.number').textContent = `?`;
});
