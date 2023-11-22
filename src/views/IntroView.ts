import { Console } from '@woowacourse/mission-utils';

class IntroView {
  private readonly INTRO_MESSAGE = '숫자 야구 게임을 시작합니다.';

  async announceBeginning(): Promise<void> {
    await Console.print(this.INTRO_MESSAGE);
  }
}

export default IntroView;