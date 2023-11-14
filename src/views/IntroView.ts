import { Console } from '@woowacourse/mission-utils';
import { INTRO_MESSAGE } from '../common/constants'

class IntroView {
  private readonly INTRO_MESSAGE = INTRO_MESSAGE;

  async announceBeginning(): Promise<void> {
    await Console.print(this.INTRO_MESSAGE);
  }
}

export default IntroView;