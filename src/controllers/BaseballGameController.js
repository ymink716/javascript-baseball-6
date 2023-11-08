import Oppernent from '../models/Opponent.js';
import Player from '../models/Player.js';
import { CHOICE_START_NEW_GAME } from '../common/constants.js';
import IntroView from '../views/IntroView.js';
import GusessingNumbersView from '../views/GuessingNumbersView.js';
import GuessResultsView from '../views/GuessResultsView.js';

class BaseballGameController {
  #introView = new IntroView();
  #guessingNumbersView = new GusessingNumbersView();
  #GuessResultsView = new GuessResultsView();
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

    this.#GuessResultsView.showComparedResult(strikes, balls);
  }

  async startNewGameOrQuit() {
    const choice = await this.opponent.askStartNewGameOrQuit();

    if (choice === CHOICE_START_NEW_GAME) {
      await this.opponent.prepareAnswerNumbers();
      return true;
    }
    
    return false;
  }
}

export default BaseballGameController;