import { Console } from '@woowacourse/mission-utils';

class PlayerConsoleHelper {
  async enterGuessedNumbers() {
    const userInput = await Console.readLineAsync('숫자를 입력해주세요 : ');
    const guessedNumbers = [ ...userInput ];
    
    return guessedNumbers;
  }

}

export default PlayerConsoleHelper;