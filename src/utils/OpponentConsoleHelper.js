import { Console } from '@woowacourse/mission-utils';
import { CLEER_GAME, NOTHING, START_OR_QUIT, THREE_STRIKE } from '../common/constants.js';

class OpponentConsoleHelper {
  async printNothing() {
    await Console.print(NOTHING);
  }

  async printThreeStrikes() {
    await Console.print(THREE_STRIKE);
    await Console.print(CLEER_GAME);
  }

  async printBallAndStrike(ball, strike) {
    await Console.print(`${ball}볼 ${strike}스트라이크`);
  }

  async askStartNewGameOrQuit() {
    const input = await Console.readLineAsync(START_OR_QUIT);

    return input;
  }
}

export default OpponentConsoleHelper;