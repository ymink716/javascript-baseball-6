import Oppernent from '../models/Opponent.js';
import Player from '../models/Player.js';
import IntroView from '../views/IntroView.js';
import GusessingNumbersView from '../views/GuessingNumbersView.js';
import GuessResultsView from '../views/GuessResultsView.js';
import AskingRestartView from '../views/AskingRestartView.js';

class BaseballGameController {
  #introView = new IntroView();
  #guessingNumbersView = new GusessingNumbersView();
  #guessResultsView = new GuessResultsView();
  #askingRestartView = new AskingRestartView();
  #opponent = new Oppernent();
  #player = new Player();

  async startBaseballGame() {
    await this.#opponent.prepareAnswerNumbers();
    await this.#introView.announceBeginning();
  }

  async guessNumbers() {
    const guessdNumbers = await this.#guessingNumbersView.enterGuessedNumbers();
    
    this.#player.guessNumbers(guessdNumbers);
  }

  async showComparedResults() {
    const guessdNumbers = this.#player.showGuessedNumbers();
    
    const { strikes, balls } = await this.#opponent.compareToAnswers(guessdNumbers);
    this.#player.receiveComparedResult(strikes, balls);

    this.#guessResultsView.showComparedResult(strikes, balls);
  }

  isAnswer() {
    const { strikes, balls } = this.#player.showComparedResult();

    return strikes === 3 && balls === 0;
  }

  async askStartNewGame() {
    const input = await this.#askingRestartView.askRestartOrQuit();

    return this.#player.chooseRestartOrQuit(input);
  }

  async prepareNewGame() {
    await this.#opponent.prepareAnswerNumbers();
  }
}

export default BaseballGameController;