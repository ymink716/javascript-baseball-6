import Oppernent from './Opponent.js';
import Player from './Player.js';

class BaseballGameService {
  constructor() {
    this.opponent = new Oppernent();
    this.player = new Player();
  }

  async prepareAnserNumbers() {
    await this.opponent.prepareAnswerNumbers();
  }

  async compareToAnswers(guessedNumbers) {
    this.player.setGuessNumbers(guessedNumbers);

    const { strike, ball } = await this.opponent.compareToAnswers(guessedNumbers);
    this.player.receiveResult(strike, ball);

    return { 
      strike: this.player.strike, 
      ball: this.player.ball 
    };
  }


}

export default BaseballGameService;