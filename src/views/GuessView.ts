import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../common/constants';

class GusessView {
  static ENTER_NUMBER_MESSAGE = '숫자를 입력해주세요 : ';

  static async guessNumbers(): Promise<number[]> {
    const userInput = await Console.readLineAsync(this.ENTER_NUMBER_MESSAGE);
    const numbers = userInput.split("");

    try {
      return numbers.map(Number);  
    } catch (error) {
      throw new Error(ERROR_MESSAGE);
    } 
  }
}

export default GusessView;