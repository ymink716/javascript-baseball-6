import { NOTHING } from "../common/constants";
import { Console } from '@woowacourse/mission-utils';

class NothingView {
  private readonly NOTHING = NOTHING;

  async printNothing(): Promise<void> {
    await Console.print(this.NOTHING);
  }
}

export default NothingView;