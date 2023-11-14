import { CHOICE_START_NEW_GAME } from './common/constants';
import BaseballGameController from './controllers/BaseballGameController';

class App {
  private readonly baseballGameController: BaseballGameController;
  private isInProgress: boolean;

  constructor() {
    this.baseballGameController = new BaseballGameController();
    this.isInProgress = true;
  }
  
  async play() {
    await this.baseballGameController.startBaseballGame();

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

  changeEndStatus() {
    this.isInProgress = false;
  }
}

export default App;
