import BaseballGameController from './controllers/BaseballGameController';
import BaseballNumbersComparator from './models/BaseballNumbersComparator';
import Host from './models/Host';
import Referee from './models/Referee';
import { Randoms } from './models/utils/RandomNumbers';
import BaseballNumbersGenerator from './models/BaseballNumbersGenerator';

class App {
  private readonly baseballGameController: BaseballGameController;
  private isInProgress: boolean;

  constructor() {
    this.baseballGameController = new BaseballGameController(
      new Referee(new BaseballNumbersComparator()),
      new Host(),
      new BaseballNumbersGenerator(new Randoms()),
    );
    this.isInProgress = true;
  }
  
  public async play() {
    await this.baseballGameController.startBaseballGame();

    while (this.isInProgress) {
      await this.baseballGameController.guessNumbers();
      await this.baseballGameController.judge();

      const isAnswer = await this.baseballGameController.isAnswer();
      if (isAnswer) {
        const isRegame = await this.baseballGameController.askRegame();
        this.isInProgress = isRegame;
      }
    }
  }
}

export default App;
