import { Console } from '@woowacourse/mission-utils';

class OpponentConsoleHelper {

  printStartBaseballGame() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  printNothing() {
    Console.print('낫싱');
  }

  printThreeStrikes() {
    Console.print('3스트라이크');
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  }

  printBallAndStrike(ball, strike) {
    Console.print(`${ball}볼 ${strike}스트라이크`);
  }

  async askStartNewGameOrQuit() {
    const input = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');

    if (!isValidOptions(input)) {
      throw Error('잘못된 값을 입력하셨습니다.');
    }

    return input;
  }

  isValidOptions(input) {
    return input in ['1', '2'];
  }
}

export default BaseballGameConsoleHelper;