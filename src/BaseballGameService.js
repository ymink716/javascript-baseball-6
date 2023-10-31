import Oppernent from './Opponent.js';
import Player from './Player.js';

class BaseballGameService {
  constructor() {
    this.opponent = new Oppernent();
    this.player = new Player();
  }

  async startBaseballGame() {
    this.opponent.showStartComment();
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

    if (choice === '1') {
      await this.opponent.prepareAnswerNumbers();
      return true;
    }
    
    return false;
  }
}

export default BaseballGameService;