import BaseballGameConsoleHelper from './utils/BaseballGameConsoleHelper.js';
import BaseballGameService from './BaseballGameService.js';

class BaseballGameClient {
  constructor() {
    this.consoleHelper = new BaseballGameConsoleHelper();
    this.baseballGameService = new BaseballGameService();
    this.isInProgress = false;
  }

  async playBaseballGame() {
    await startBaseballGame();

    while (isInProgress) {
      let guessedNumbers = await this.consoleHelper.enterGuessedNumbers();
      const { strike, ball } = await this.baseballGameService.compareToAnswers(guessedNumbers);
      
      await this.printComparedResult(strike, ball);
      
      if (this.isThreeStrikes(strike, ball)) {
        await this.askStartNewGameOrQuit();
      }

    }
  }

  async startBaseballGame() {
    consoleHelper.printStartBaseballGame();
    this.isInProgress = true;
    await this.baseballGameService.prepareAnswerNumbers();
  }

  async printComparedResult(strike, ball) {
    if (this.isNothing(strike, ball)) {
      this.consoleHelper.printNothing();
    } else if (this.isThreeStrikes(strike, ball)) {
      this.consoleHelper.printThreeStrikes();
    } else {
      Console.print(`${this.player.balls}볼 ${this.player.strikes}스트라이크`);
    }
  }



  isNothing(strike, ball) {
    return strike === 0 && ball === 0;
  }

  isThreeStrikes(strike, ball) {
    return strike === 3 && ball === 0;
  }
}

export default BaseballGameClient;