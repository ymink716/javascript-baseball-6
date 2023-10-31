import { Console } from '@woowacourse/mission-utils';

class PlayerConsoleHelper {
  async enterGuessedNumbers() {
    const userInput = await Console.readLineAsync('숫자를 입력해주세요 : ');
    const guessedNumbers = [ ...userInput ];

    if (!this.isValidNumbers(guessedNumbers)) {
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
}

export default BaseballGameConsoleHelper;