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
    return this.opponent.compareToAnswers(guessedNumbers);
  }

  showComparedResult(strike, ball) {
    this.opponent.showComparedResult(strike, ball);
  }


}

export default BaseballGameService;