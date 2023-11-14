class GuessResults {
  private strikes: number;
  private balls: number;

  constructor(strikes: number, balls: number) {
    this.strikes = strikes;
    this.balls = balls;
  }

  isAnswer(): boolean {
    return this.strikes === 3 && this.balls === 0;
  }

  showStrikesAndBalls() {
    return {
      strikes: this.strikes,
      balls: this.balls,
    }
  }
}

export default GuessResults;