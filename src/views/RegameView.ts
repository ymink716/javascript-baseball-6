import { Console } from '@woowacourse/mission-utils';

class RegameView {
  static CLEER_GAME_MESSAGE = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
  static START_OR_QUIT_MESSAGE = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.';
  
  static async askRegame(): Promise<string> {
    await Console.print(this.CLEER_GAME_MESSAGE);
    return await Console.readLineAsync(this.START_OR_QUIT_MESSAGE);
  }
}

export default RegameView;