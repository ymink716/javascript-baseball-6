import { Console } from '@woowacourse/mission-utils';
import { INTRO_MESSAGE } from '../common/constants.js';

class IntroView {
  #INTRO_MESSAGE = INTRO_MESSAGE;

  async announceBeginning() {
    await Console.print(this.#INTRO_MESSAGE);
  }
}

export default IntroView;