import { CHOICE_START_NEW_GAME } from './common/constants.js';
import BaseballGameController from './controllers/BaseballGameController.js';

class App {
  private readonly baseballGameController = new BaseballGameController();
  private isInProgress = false;
  
  async play() {
    await this.baseballGameController.startBaseballGame();
    this.changeStartingStatus();

    while (this.isInProgress) {
      await this.baseballGameController.guessNumbers();
      await this.baseballGameController.showGuessResults();
      
      if (this.baseballGameController.isAnswer()) {
        const choice = await this.baseballGameController.askStartNewGame();
        
        if (choice === CHOICE_START_NEW_GAME) {
          await this.baseballGameController.prepareNewGame();
          continue;
        }

        this.changeEndStatus();
      }
    }
  }

  changeStartingStatus() {
    this.isInProgress = true;
  }

  changeEndStatus() {
    this.isInProgress = false;
  }
}

export default App;
