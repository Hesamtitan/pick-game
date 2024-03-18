"use strict";

const btnNew = document.querySelector(".btn--new");

let btnRoll = document.querySelector(".btn--roll");

const btnHold = document.querySelector(".btn--hold");

const dice = document.querySelector(".dice");

const score = document.querySelector(".score");

const currentScore = document.querySelector(".current-score");

let currentSco = 0;
let totalScore = 0;

// const randomDice = () => {
//   let dice = Math.ceil(Math.random() * 6);
//   currentScore = dice + currentScore;
// };

btnRoll.addEventListener("click", () => {
  let randomDice = Math.ceil(Math.random() * 6);
  console.log(randomDice);
  if (randomDice === 1) {
    dice.src = "../dice-1.png";
    //switch player
  } else if (randomDice === 2) {
    dice.src = "../dice-2.png";
    currentSco = currentSco + randomDice;
  } else if (randomDice === 3) {
    dice.src = "../dice-3.png";
    currentSco = currentSco + randomDice;
  } else if (randomDice === 4) {
    dice.src = "../dice-4.png";
    currentSco = currentSco + randomDice;
  } else if (randomDice === 5) {
    dice.src = "../dice-5.png";
    currentSco = currentSco + randomDice;
  } else {
    dice.src = "../dice-6.png";
    currentSco = currentSco + randomDice;
  }
});

btnHold.addEventListener("click", () => {});

btnNew.addEventListener("click", () => {});
