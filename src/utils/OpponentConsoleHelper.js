import { Console } from '@woowacourse/mission-utils';
import { CLEER_GAME, NOTHING, START_OR_QUIT, THREE_STRIKE } from '../common/constants.js';

class OpponentConsoleHelper {
  async askStartNewGameOrQuit() {
    const input = await Console.readLineAsync(START_OR_QUIT);

    return input;
  }
}

export default OpponentConsoleHelper;