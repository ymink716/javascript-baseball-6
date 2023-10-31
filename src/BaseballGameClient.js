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
      await this.baseballGameService.guessNumbers();
      
      this.baseballGameService.compareToAnswers();
      
      await this.printComparedResult(strike, ball);
      
      if (this.isThreeStrikes(strike, ball)) {
        await this.startNewGameOrQuit();
      }
    }
  }

  async printComparedResult(strike, ball) {
    if (this.isNothing(strike, ball)) {
      this.consoleHelper.printNothing();
    } else if (this.isThreeStrikes(strike, ball)) {
      this.consoleHelper.printThreeStrikes();
    } else {
      this.consoleHelper.printBallAndStrike(ball, strike);
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

  isNothing(strike, ball) {
    return strike === 0 && ball === 0;
  }

  isThreeStrikes(strike, ball) {
    return strike === 3 && ball === 0;
  }
}

export default BaseballGameClient;