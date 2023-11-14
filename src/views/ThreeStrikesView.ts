import { CLEER_GAME, THREE_STRIKE } from "../common/constants";
import { Console } from '@woowacourse/mission-utils';

class ThreeStrikesView {
  private readonly THREE_STRIKE = THREE_STRIKE;
  private readonly CLEER_GAME = CLEER_GAME;


  async printThreeStrikes(): Promise<void> {
    await Console.print(this.THREE_STRIKE);
    await Console.print(this.CLEER_GAME);
  }
}

export default ThreeStrikesView;