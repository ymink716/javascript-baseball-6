import { Console } from '@woowacourse/mission-utils';
import { CLEER_GAME, NOTHING, THREE_STRIKE } from '../common/constants.js';

class GuessResultsView {
  #NOTHING = NOTHING;
  #CLEER_GAME = CLEER_GAME;
  #THREE_STRIKE = THREE_STRIKE;

  async showComparedResult(strikes, balls) {
    if (this.#isNothing(strikes, balls)) {
      this.#printNothing();
      return;
    } 
    
    if (this.#isThreeStrikes(strikes, balls)) {
      this.#printThreeStrikes();
      return;
    }
    
    this.#printBallAndStrike(balls, strikes);
  }

  #isNothing(strike, ball) {
    return strike === 0 && ball === 0;
  }

  #isThreeStrikes(strike, ball) {
    return strike === 3 && ball === 0;
  }

  async #printNothing() {
    await Console.print(this.#NOTHING);
  }

  async #printThreeStrikes() {
    await Console.print(this.#THREE_STRIKE);
    await Console.print(this.#CLEER_GAME);
  }

  async #printBallAndStrike(ball, strike) {
    await Console.print(`${ball}볼 ${strike}스트라이크`);
  }
}

export default GuessResultsView;