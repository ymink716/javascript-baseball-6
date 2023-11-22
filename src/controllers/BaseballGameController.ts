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
  private readonly introView: IntroView;
  private readonly gusessView: GusessView;
  private resultView: ResultView;
  private readonly regameView: RegameView;
  
  private answer: BaseballNumbers;
  private guess: BaseballNumbers;
  private referee: Referee;
  private host: Host;
  private readonly baseballNumbersGenerator: BaseballNumbersGenerator; 

  constructor() {
    this.introView = new IntroView();
    this.gusessView = new GusessView();
    this.regameView = new RegameView();
    this.baseballNumbersGenerator = new BaseballNumbersGenerator();
    this.referee = new Referee();
    this.host = new Host();
  }
  
  public async startBaseballGame(): Promise<void> {
    this.answer = this.baseballNumbersGenerator.generate();
    console.log(this.answer);

    await this.introView.announceBeginning();
  }

  public async guessNumbers(): Promise<void> {
    const input = await this.gusessView.guessNumbers();
    const guess = input.map((num) => new BaseballNumber(num));

    this.guess = new BaseballNumbers(guess);
  }

  public async judgeResult(): Promise<string> {
    const result = this.referee.judge(this.guess, this.answer);

    this.resultView = new ResultView(result);
    this.resultView.printResult();

    return result;
  }

  public async isAnswer(): Promise<boolean> {
    const result = this.referee.judge(this.guess, this.answer);

    this.resultView = new ResultView(result);
    this.resultView.printResult();

    return result === THREE_STRIKE;
  }

  public async askRegame(): Promise<boolean> {
    const choice = await this.regameView.askRegame();

    return this.host.askRegame(choice);
  }

  public async prepareNewGame(): Promise<void> {
    this.answer = this.baseballNumbersGenerator.generate();
    console.log(this.answer);
  }
}

export default BaseballGameController;