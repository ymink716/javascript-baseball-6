import { Console } from '@woowacourse/mission-utils';

class OpponentConsoleHelper {
  printStartBaseballGame() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  async printNothing() {
    await Console.print('낫싱');
  }

  async printThreeStrikes() {
    await Console.print('3스트라이크');
    await Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  }

  async printBallAndStrike(ball, strike) {
    await Console.print(`${ball}볼 ${strike}스트라이크`);
  }

  async askStartNewGameOrQuit() {
    const input = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');

    return input;
  }
}

export default OpponentConsoleHelper;