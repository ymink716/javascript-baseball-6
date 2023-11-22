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
      const isAnswer = await this.baseballGameController.isAnswer();
      
      if (isAnswer) {
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
