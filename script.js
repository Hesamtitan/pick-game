"use strict";

//selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const curren0El = document.getElementById("current--0");
const curren1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

//btn
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// in starting conditions
// score0El.textContent = 0;
// score1El.textContent = 0;
diceEl.classList.add("hidden");
const switchPlayer = () => {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  //jonas way for hidden background
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// const totalScore = document.querySelector(".score");
let scores, currentScore, activePlayer, playing;

const init = () => {
  playing = true;
  diceEl.classList.add("hidden");
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  curren0El.textContent = 0;
  curren1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
init();

btnRoll.addEventListener("click", () => {
  if (playing) {
    //1.generating a random dice roll
    const dice = Math.ceil(Math.random() * 6);
    //2.display dice

    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    //3.check for rolled 1:if true ,
    if (dice !== 1) {
      // add dice to current Score

      //hesam way for hidden background
      // document
      //   .querySelector(`.player--${activePlayer}`)
      //   .classList.add("player--active");
      //jonas way
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player

      //hesam way for hidden background
      // document
      //   .querySelector(`.player--${activePlayer}`)
      //   .classList.remove("player--active");
      //jonas way
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", () => {
  if (playing) {
    //1.add current score to active plaers score
    scores[activePlayer] += currentScore;
    let total = (document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer]);

    //2.cheak if player score is >=100
    if (total >= 100) {
      //finish the game
      // btnHold.disab
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      diceEl.classList.add("hidden");
    } else {
      //switch the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener(
  "click",
  init
  //hesam way

  // () => {
  //   playing = true;
  //   document
  //     .querySelector(`.player--${activePlayer}`)
  //     .classList.remove("player--winner");
  //   document
  //     .querySelector(`.player--${activePlayer}`)
  //     .classList.add("player--active");
  //   diceEl.classList.add("hidden");
  //   if (activePlayer === 1) {
  //     switchPlayer();
  //   }
  //   scores[0] = 0;
  //   scores[1] = 0;
  //   currentScore = 0;
  //   curren0El.textContent = 0;
  //   curren1El.textContent = 0;
  //   score0El.textContent = 0;
  //   score1El.textContent = 0;
  // }
);
