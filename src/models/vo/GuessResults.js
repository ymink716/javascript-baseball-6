class GuessResults {
  #strikes;
  #balls;

  constructor(strikes, balls) {
    this.#strikes = strikes;
    this.#balls = balls;
  }

  showStrikesAndBalls() {
    return {
      strikes: this.#strikes,
      balls: this.#balls,
    }
  }
}

export default GuessResults;