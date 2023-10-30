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
}

export default BaseballGameService;