class Player {
  constructor() {
    this.guessedNumbers = [];
    this.strike = 0;
    this.ball = 0;
  }

  setGuessNumbers(guessedNumbers) {
    this.guessedNumbers = guessedNumbers;
  }

  recievreceiveResult(strike, ball) {
    this.strike = strike;
    this.ball = ball;
  }
}

export default Player;