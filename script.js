'use strict';
//method
console.log(document.querySelector('.message').textContent);

//DOM and DOM manipulation
// document.querySelector('.message').textContent = `🎉 Winningg yeyy`;
// document.querySelector('.guess').value;
let numberMagic = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // there should be a value
  if (!guess) {
    document.querySelector('.message').textContent = `No Number 😢`;
  } else if (guess === numberMagic) {
    document.querySelector('.message').textContent = `YOU WIN 🎉`;
    document.querySelector('body').style.backgroundColor = `#60b347`;
    document.querySelector('.number').style.width = `30rem`;
    document.querySelector('.number').textContent = numberMagic;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //if number is too high
  else if (guess > numberMagic) {
    if (score > 1) {
      document.querySelector('.message').textContent = `Too high ⚡`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `you lost`;
      document.querySelector('.score').textContent = 0;
    }
  }
  //if number is too low
  else if (guess < numberMagic) {
    if (score > 1) {
      document.querySelector('.message').textContent = `Too low 👇`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `you lost`;
      document.querySelector('.score').textContent = 0;
    }
  }
});
//only is called when the event happens
// whenever we get something from the input field it is a string
console.log(2 + 7 + 8 + 9 + 13 + 20);

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  numberMagic = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = `Start guessing...`;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = ``;
  document.querySelector('body').style.backgroundColor = `#222`;
  document.querySelector('.number').style.width = `15rem`;
  document.querySelector('.number').textContent = `?`;
});
