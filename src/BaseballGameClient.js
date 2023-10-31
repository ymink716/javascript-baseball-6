import BaseballGameService from './BaseballGameService.js';

class BaseballGameClient {
  constructor() {
    this.baseballGameService = new BaseballGameService();
    this.isInProgress = false;
  }

  async playBaseballGame() {
    await this.baseballGameService.startBaseballGame();
    this.isInProgress = true;

    while (this.isInProgress) {
      const guessdNumbers = await this.baseballGameService.guessNumbers();
      const { strike, ball } = await this.baseballGameService.compareToAnswers(guessdNumbers);
      await this.baseballGameService.showComparedResult(strike, ball);
      
      if (this.isCorrect(strike, ball)) {
        this.isInProgress = await this.baseballGameService.startNewGameOrQuit();
      }
    }
  }

  isCorrect(strike, ball) {
    return strike === 3 && ball === 0;
  }
}

export default BaseballGameClient;