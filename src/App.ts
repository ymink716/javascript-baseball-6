import { CHOICE_START_NEW_GAME, THREE_STRIKE } from './common/constants';
import BaseballGameController from './controllers/BaseballGameController';

class App {
  private readonly baseballGameController: BaseballGameController;
  private isInProgress: boolean;

  constructor() {
    this.baseballGameController = new BaseballGameController();
    this.isInProgress = true;
  }
  
  public async play() {
    await this.baseballGameController.startBaseballGame();

    while (this.isInProgress) {
      await this.baseballGameController.guessNumbers();
      const result = await this.baseballGameController.compareToAnswer();
      
      if (result === THREE_STRIKE) {
        const isRegame = await this.baseballGameController.askRegame();
        
        if (isRegame) {
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
