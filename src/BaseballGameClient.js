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
      const { strike, ball } = this.baseballGameService.compareToAnswers(guessdNumbers);
      this.baseballGameService.showComparedResult(strike, ball);
      
      if (this.isThreeStrikes(strike, ball)) {
        await this.startNewGameOrQuit();
      }
    }
  }

  async startNewGameOrQuit() {
    const input = await this.consoleHelper.askStartNewGameOrQuit();

    if (input === '1') {
      await this.baseballGameService.prepareAnswerNumbers();
      return;
    }
    
    this.isInProgress = false;
  }
}

export default BaseballGameClient;