import { Console } from '@woowacourse/mission-utils';
import { START_OR_QUIT } from '../common/constants.js';

class AskingRestartView {
  #START_OR_QUIT = START_OR_QUIT;
  
  async askRestartOrQuit() {
    return await Console.readLineAsync(this.#START_OR_QUIT);
  }
}

export default AskingRestartView;