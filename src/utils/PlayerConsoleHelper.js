import { Console } from '@woowacourse/mission-utils';
import { ENTER_NUMBERS } from '../common/constants.js';

class PlayerConsoleHelper {
  async enterGuessedNumbers() {
    const userInput = await Console.readLineAsync(ENTER_NUMBERS);
    const guessedNumbers = [ ...userInput ];
    
    return guessedNumbers;
  }

}

export default PlayerConsoleHelper;