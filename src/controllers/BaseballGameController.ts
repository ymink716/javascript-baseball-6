import IntroView from '../views/IntroView';
import GusessView from '../views/GuessView';
import RegameView from '../views/RegameView';
import Referee from '../models/Referee';
import ResultView from '../views/ResultView';
import Host from '../models/Host';
import BaseballNumbers from '../models/vo/BaseballNumbers';
import BaseballNumbersGenerator from '../models/BaseballNumbersGenerator';
import BaseballNumber from '../models/vo/baseballNumber';
import { THREE_STRIKE } from '../common/constants';

class BaseballGameController {  
  private answer: BaseballNumbers;
  private guess: BaseballNumbers;
  private referee: Referee;
  private host: Host;
  private readonly baseballNumbersGenerator: BaseballNumbersGenerator; 

  constructor() {
    this.baseballNumbersGenerator = new BaseballNumbersGenerator();
    this.referee = new Referee();
    this.host = new Host();
  }
  
  public async startBaseballGame(): Promise<void> {
    this.answer = this.baseballNumbersGenerator.generate();
    console.log(this.answer);

    await IntroView.announceBeginning();
  }

  public async guessNumbers(): Promise<void> {
    const input = await GusessView.guessNumbers();
    const guess = input.map((num) => new BaseballNumber(num));

    this.guess = new BaseballNumbers(guess);
  }

  public async isAnswer(): Promise<boolean> {
    const result = this.referee.judge(this.guess, this.answer);

    const resultView = new ResultView(result);
    resultView.printResult();

    return result === THREE_STRIKE;
  }

  public async askRegame(): Promise<boolean> {
    const choice = await RegameView.askRegame();

    const isRegame = this.host.askRegame(choice);

    if (isRegame) {
      await this.prepareNewGame();
      return true;
    }

    return false;
  }

  private async prepareNewGame(): Promise<void> {
    this.answer = this.baseballNumbersGenerator.generate();
    console.log(this.answer);
  }
}

export default BaseballGameController;