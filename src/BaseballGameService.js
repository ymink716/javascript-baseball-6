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
    await this.player.guessNumbers();
  }

  compareToAnswers() {
    const { strike, ball } = this.opponent.compareToAnswers(guessedNumbers);
    this.player.receiveResult(strike, ball);

    return { 
      strike: this.player.strike, 
      ball: this.player.ball 
    };
  }


}

export default BaseballGameService;