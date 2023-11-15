import Answer from '../models/Answer';
import Guess from '../models/Guess';
import IntroView from '../views/IntroView';
import GusessView from '../views/GuessView';
import RegameView from '../views/RegameView';
import Referee from '../models/Referee';
import ResultView from '../views/ResultView';
import Host from '../models/Host';

class BaseballGameController {
  private readonly introView: IntroView;
  private readonly gusessView: GusessView;
  private resultView: ResultView;
  private readonly regameView: RegameView;
  
  private answer: Answer;
  private guess: Guess;
  private referee: Referee;
  private host: Host;

  constructor() {
    this.introView = new IntroView();
    this.gusessView = new GusessView();
    this.regameView = new RegameView();

    this.referee = new Referee();
    this.host = new Host();
  }
  
  public async startBaseballGame(): Promise<void> {
    this.answer = new Answer();

    await this.introView.announceBeginning();
  }

  public async guessNumbers(): Promise<void> {
    const guessdNumbers = await this.gusessView.guessNumbers();
    
    this.guess = new Guess(guessdNumbers);
  }

  public async compareToAnswer(): Promise<string> {
    const guessdNumbers = this.guess.getNumbers();
    const answerNumbers = this.answer.getNumbers();

    const result = this.referee.judge(guessdNumbers, answerNumbers);

    this.resultView = new ResultView(result);
    this.resultView.printResult();

    return result;
  }

  public async askRegame(): Promise<boolean> {
    const choice = await this.regameView.askRegame();

    return this.host.askRegame(choice);
  }

  public async prepareNewGame(): Promise<void> {
    this.answer = new Answer();
  }
}

export default BaseballGameController;