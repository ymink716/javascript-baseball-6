import BaseballGameConsoleHelper from './utils/PlayerConsoleHelper.js';

class Player {
  constructor() {
    this.guessedNumbers = [];
    this.strike = 0;
    this.ball = 0;
  }

  setGuessNumbers(guessedNumbers) {
    this.guessedNumbers = guessedNumbers;
  }

  receiveResult(strike, ball) {
    this.strike = strike;
    this.ball = ball;
  }
}

export default Player;