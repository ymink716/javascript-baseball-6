import Oppernent from '../models/Opponent.js';
import Player from '../models/Player.js';
import { CHOICE_START_NEW_GAME } from '../common/constants.js';
import IntroView from '../views/IntroView.js';

class BaseballGameController {
  #introView;
  #opponent;

  constructor() {
    this.#introView = new IntroView();
    this.#opponent = new Oppernent();
    this.player = new Player();
  }

  async startBaseballGame() {
    this.#introView.announceBeginning();
    await this.opponent.prepareAnswerNumbers();
  }

  async guessNumbers() {
    return await this.player.guessNumbers();
  }

  async compareToAnswers(guessedNumbers) {
    return await this.opponent.compareToAnswers(guessedNumbers);
  }

  async showComparedResult(strike, ball) {
    this.opponent.showComparedResult(strike, ball);
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