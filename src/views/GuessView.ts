import { Console } from '@woowacourse/mission-utils';
import { ENTER_NUMBERS, ERROR_MESSAGE } from '../common/constants';

class GusessView {
  private readonly ENTER_NUMBERS = ENTER_NUMBERS;

  public async guessNumbers(): Promise<number[]> {
    const userInput = await Console.readLineAsync(this.ENTER_NUMBERS);
    const numbers = userInput.split("");

    try {
      return numbers.map(Number);  
    } catch (error) {
      throw new Error(ERROR_MESSAGE);
    } 
  }
}

export default GusessView;