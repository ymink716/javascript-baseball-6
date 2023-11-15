import { Console } from '@woowacourse/mission-utils';
import { ENTER_NUMBERS } from '../common/constants';

class GusessView {
  private readonly ENTER_NUMBERS = ENTER_NUMBERS;

  async guessNumbers(): Promise<string[]> {
    const userInput = await Console.readLineAsync(this.ENTER_NUMBERS);
    const numbers = userInput.split("");
    
    return numbers;
  }
}

export default GusessView;