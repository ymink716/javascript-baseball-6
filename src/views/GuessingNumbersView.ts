import { Console } from '@woowacourse/mission-utils';
import { ENTER_NUMBERS } from '../common/constants';

class GusessingNumbersView {
  private readonly ENTER_NUMBERS = ENTER_NUMBERS;

  async enterGuessedNumbers(): Promise<string[]> {
    const userInput = await Console.readLineAsync(this.ENTER_NUMBERS);
    const guessedNumbers = userInput.split("");
    
    return guessedNumbers;
  }
}

export default GusessingNumbersView;