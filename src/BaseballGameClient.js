import BaseballGameController from './controllers/BaseballGameController.js';

class BaseballGameClient {
  #baseballGameController = new BaseballGameController();
  #isInProgress = false;

  async playBaseballGame() {
    await this.#baseballGameController.startBaseballGame();
    this.#changeToStartingStatus();

    while (this.#isInProgress) {
      await this.#baseballGameController.guessNumbers();
      const { strike, ball } = await this.baseballGameService.compareToAnswers(guessdNumbers);
      await this.baseballGameService.showComparedResult(strike, ball);
      
      if (this.isCorrect(strike, ball)) {
        this.isInProgress = await this.baseballGameService.startNewGameOrQuit();
      }
    }
  }

  #changeToStartingStatus() {
    this.#isInProgress = true;
  }

  isCorrect(strike, ball) {
    return strike === 3 && ball === 0;
  }
}

export default BaseballGameClient;