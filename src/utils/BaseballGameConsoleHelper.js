import { Console } from '@woowacourse/mission-utils';

class BaseballGameConsoleHelper {
  printStartBaseballGame() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  async enterGuessedNumbers() {
    const userInput = await Console.readLineAsync('숫자를 입력해주세요 : ');
    const guessedNumbers = [ ...userInput ];

    if (this.isValidNumbers(guessedNumbers)) {
      throw Error('잘못된 값을 입력하셨습니다.');
    }

    return guessedNumbers;
  }

  isValidNumbers(guessedNumbers) {
    if (this.isThreeLetters(guessedNumbers)) {
      return false;
    }

    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    guessedNumbers.forEach((num) => {
      if (!num in numbers) {
        return false;
      }
    });

    return true;
  }

  isThreeLetters(guessedNumbers) {
    return guessedNumbers.length !== 3;
  }

  printNothing() {
    Console.print('낫싱');
  }

  printThreeStrikes() {
    Console.print('3스트라이크');
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  }
}

export default BaseballGameConsoleHelper;