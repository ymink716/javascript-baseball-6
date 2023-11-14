import Oppernent from '../models/Opponent';
import Player from '../models/Player';
import IntroView from '../views/IntroView';
import GusessingNumbersView from '../views/GuessingNumbersView';
import GuessResultsView from '../views/GuessResultsView';
import AskingRestartView from '../views/AskingRestartView';

class BaseballGameController {
  private readonly introView = new IntroView();
  private readonly guessingNumbersView = new GusessingNumbersView();
  private readonly guessResultsView = new GuessResultsView();
  private readonly askingRestartView = new AskingRestartView();
  private readonly opponent = new Oppernent();
  private player: Player;

  async startBaseballGame() {
    await this.opponent.prepareAnswerNumbers();
    await this.introView.announceBeginning();
  }

  async guessNumbers() {
    const guessdNumbers = await this.guessingNumbersView.enterGuessedNumbers();
    
    this.player = new Player(guessdNumbers);
    // this.#player.guessNumbers(guessdNumbers);
  }

  async showGuessResults() {
    const guessdNumbers = this.player.showGuessedNumbers();
    
    const { strikes, balls } = await this.opponent.compareToAnswers(guessdNumbers);
    this.player.receiveGuessResults(strikes, balls);

    this.guessResultsView.showComparedResult(strikes, balls);
  }

  isAnswer() {
    const { strikes, balls } = this.player.showGuessResults();
    return strikes === 3 && balls === 0;
  }

  async askStartNewGame() {
    const input = await this.askingRestartView.askRestartOrQuit();

    return this.player.chooseRestartOrQuit(input);
  }

  async prepareNewGame() {
    await this.opponent.prepareAnswerNumbers();
  }
}

export default BaseballGameController;