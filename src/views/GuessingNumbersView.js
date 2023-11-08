import { Console } from '@woowacourse/mission-utils';
import { ENTER_NUMBERS } from '../common/constants.js';

class GusessingNumbersView {
  #ENTER_NUMBERS = ENTER_NUMBERS;

  async enterGuessedNumbers() {
    const userInput = await Console.readLineAsync(this.#ENTER_NUMBERS);
    const guessedNumbers = [ ...userInput ];
    
    return guessedNumbers;
  }
}

export default GusessingNumbersView;